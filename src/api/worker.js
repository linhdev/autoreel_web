/**
 * The home worker's side of the API.
 *
 * Every endpoint here is reachable from the public internet, so the bearer
 * token is checked before anything else, including before an upload body is
 * consumed. The token only lives in a Worker secret and a read-only file on
 * the home machine; it is never put in a URL.
 */
import {
  errorJson, json, nowMs, randomHex, readJson, safeEqual, sanitizeFilename,
  sleep,
} from './http.js';
import {
  claimNext, getJob, markDone, markError, readSettings, touchWorker,
} from './store.js';

const ID_RE = /^[a-f0-9]{32}$/;
const CODE_RE = /^[A-Z][A-Z_]{2,39}$/;

function tokenFrom(request) {
  const value = request.headers.get('authorization') || '';
  return value.startsWith('Bearer ') ? value.slice(7).trim() : '';
}

function authorised(request, env) {
  // `.trim()` is deliberate: a secret set by piping a line into
  // `wrangler secret put` can arrive with a trailing newline, while the file
  // the home worker reads does not. The token itself is hex, so trimming
  // cannot hide a meaningful leading or trailing character.
  const expected = String(env.WORKER_TOKEN || '').trim();
  if (!expected) return false;
  return safeEqual(tokenFrom(request), expected);
}

function workerId(request) {
  const value = (request.headers.get('x-worker-id') || 'home').toLowerCase();
  return /^[a-z0-9-]{1,32}$/.test(value) ? value : 'home';
}

export async function nextJob(request, env, url) {
  if (!authorised(request, env)) return errorJson('UNAUTHORISED', 401);

  const now = nowMs();
  await touchWorker(env, now, url.searchParams.get('version') || '');

  const settings = await readSettings(env);
  const max = {
    maxSeconds: settings.max_seconds,
    maxBytes: settings.max_bytes,
  };

  const waitSeconds = Math.min(
    25,
    Math.max(0, Number(url.searchParams.get('wait') || 0) || 0),
  );
  const deadline = now + waitSeconds * 1000;

  for (;;) {
    const job = await claimNext(env, nowMs(), workerId(request));
    if (job) {
      return json({
        id: job.id,
        url: job.url,
        kind: job.kind || 'video',
        ...max,
      });
    }
    if (nowMs() >= deadline) return new Response(null, { status: 204 });
    await sleep(2000);
  }
}

export async function uploadFile(request, env, id) {
  if (!authorised(request, env)) return errorJson('UNAUTHORISED', 401);
  if (!ID_RE.test(id)) return errorJson('NOT_FOUND', 404);

  const row = await getJob(env, id);
  if (!row) return errorJson('NOT_FOUND', 404);
  if (row.status !== 'running') return errorJson('LEASE_LOST', 409);

  const settings = await readSettings(env);
  const length = Number(request.headers.get('content-length') || 0);
  if (!Number.isFinite(length) || length <= 0 || length > settings.max_bytes) {
    return errorJson('TOO_LARGE', 413);
  }
  if (!request.body) return errorJson('BAD_BODY', 400);

  let name = 'video.mp4';
  const headerName = request.headers.get('x-file-name');
  if (headerName) {
    try {
      name = decodeURIComponent(headerName);
    } catch {
      name = headerName;
    }
  }

  // The file's type comes from the worker that produced it. A kind whose mime
  // does not belong to it would make the row unplayable (or, worse, let an
  // HTML file be uploaded as a cover), so the pair is checked rather than
  // trusted.
  const kind = row.kind || 'video';
  const mime = String(request.headers.get('content-type') || '')
    .split(';')[0]
    .trim()
    .toLowerCase();
  const allowed = {
    video: ['video/mp4', 'video/webm'],
    audio: ['audio/mp4', 'audio/mpeg', 'audio/aac'],
    cover: ['image/jpeg', 'image/png', 'image/webp'],
  };
  if (!(allowed[kind] || allowed.video).includes(mime)) {
    return errorJson('BAD_MEDIA', 400);
  }
  const ext = mime === 'image/png' ? '.png'
    : mime === 'image/webp' ? '.webp'
      : mime === 'audio/mpeg' ? '.mp3'
        : kind === 'audio' ? '.m4a'
          : kind === 'cover' ? '.jpg' : '.mp4';
  const base = kind === 'audio' ? 'audio' : kind === 'cover' ? 'cover' : 'video';
  name = sanitizeFilename(name, `${base}-${id.slice(0, 8)}${ext}`, ext);

  const duration = Number(request.headers.get('x-duration') || 0);
  const now = nowMs();
  const token = randomHex(24);
  const expiresAt = now + 30 * 60 * 1000;
  const fileKey = `dl/${id}`;

  let object;
  try {
    object = await env.DOWNLOADS.put(fileKey, request.body, {
      httpMetadata: { contentType: mime },
      customMetadata: { name },
    });
  } catch {
    return errorJson('STORAGE_FAILED', 500);
  }

  if (!object || object.size > settings.max_bytes) {
    await env.DOWNLOADS.delete(fileKey).catch(() => {});
    return errorJson('TOO_LARGE', 413);
  }

  const done = await markDone(env, id, {
    finishedAt: now,
    fileKey,
    fileName: name,
    size: object.size,
    duration: Number.isFinite(duration) && duration > 0 ? duration : null,
    token,
    expiresAt,
    fileMime: mime,
  });
  if (!done) {
    await env.DOWNLOADS.delete(fileKey).catch(() => {});
    return errorJson('LEASE_LOST', 409);
  }

  return json({ ok: true, size: object.size, expiresAt });
}

export async function failJob(request, env, id) {
  if (!authorised(request, env)) return errorJson('UNAUTHORISED', 401);
  if (!ID_RE.test(id)) return errorJson('NOT_FOUND', 404);

  const parsed = await readJson(request);
  if (parsed.error) return errorJson(parsed.error, 400);
  const { body } = parsed;
  const code = typeof body.code === 'string' && CODE_RE.test(body.code)
    ? body.code
    : 'FAILED';
  const detail = typeof body.detail === 'string' ? body.detail.slice(0, 500) : '';

  const done = await markError(env, id, code, detail, nowMs());
  if (!done) return errorJson('LEASE_LOST', 409);
  return json({ ok: true });
}

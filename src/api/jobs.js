/**
 * The public side of the download API: create a job, watch it, fetch the file.
 */
import {
  clientIp, contentDisposition, errorJson, hashIp, json, nowMs, randomHex,
  readJson, safeEqual, sameOriginRequest, sha256Hex, vnDayStart,
} from './http.js';
import { normalizeUrl } from './urls.js';
import {
  countsForSubmit, createJob as insertJob, findDuplicates, getJob,
  publicCounts, queuePosition, readSettings, workerOnline,
} from './store.js';

const ID_RE = /^[a-f0-9]{32}$/;
const KINDS = new Set(['video', 'audio', 'cover']);
const AUDIO_FORMATS = new Set(['m4a', 'mp3', 'wav']);
/** The product's ceiling. The dashboard may lower it, never raise it past this. */
const BATCH_CEILING = 5;
/** Five links of up to 2048 characters, plus a Turnstile token. */
const SUBMIT_BODY_BYTES = 20_480;

export function batchLimit(settings) {
  const value = Math.trunc(Number(settings.batch_max));
  if (!Number.isFinite(value)) return BATCH_CEILING;
  return Math.min(BATCH_CEILING, Math.max(1, value));
}

export function requestedUrls(body) {
  if (Array.isArray(body.urls)) return body.urls;
  if (typeof body.url === 'string') return [body.url];
  return null;
}

async function verifyTurnstile(env, token, ip) {
  if (typeof token !== 'string' || !token || token.length > 4096) return false;
  const secret = String(env.TURNSTILE_SECRET || '').trim();
  if (!secret) return false;
  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip,
  });
  let payload;
  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body,
        signal: typeof AbortSignal !== 'undefined' && AbortSignal.timeout
          ? AbortSignal.timeout(5000)
          : undefined,
      },
    );
    if (!response.ok) return false;
    payload = await response.json();
  } catch {
    return false;
  }
  if (!payload?.success) return false;
  if (env.ENVIRONMENT === 'production') {
    if (payload.action !== 'download') return false;
    if (payload.hostname !== 'autoreelvn.com'
      && payload.hostname !== 'www.autoreelvn.com') return false;
  }
  return true;
}

function retryAfterUntil(deadline, now) {
  return String(Math.max(1, Math.ceil((deadline - now) / 1000)));
}

export async function createJob(request, env) {
  if (!sameOriginRequest(request, env)) return errorJson('BAD_ORIGIN', 403);

  const parsed = await readJson(request, SUBMIT_BODY_BYTES);
  if (parsed.error) return errorJson(parsed.error, 400);
  const { body } = parsed;

  const raw = requestedUrls(body);
  if (!raw || raw.length === 0) return errorJson('BAD_URL', 400);
  const kind = body.kind === undefined ? 'video' : body.kind;
  if (!KINDS.has(kind)) return errorJson('BAD_KIND', 400);
  const audioFormat = kind === 'audio'
    ? (body.audioFormat === undefined ? 'm4a' : body.audioFormat)
    : null;
  if (kind === 'audio' && !AUDIO_FORMATS.has(audioFormat)) {
    return errorJson('BAD_FORMAT', 400);
  }
  if (raw.length > BATCH_CEILING) {
    return errorJson('BATCH_TOO_BIG', 400, {}, { max: BATCH_CEILING });
  }

  const settings = await readSettings(env);
  if (!settings.enabled) return errorJson('MAINTENANCE', 503);

  const limit = batchLimit(settings);
  if (raw.length > limit) return errorJson('BATCH_TOO_BIG', 400, {}, { max: limit });

  // The count is checked before the token: a visitor who pasted six links can
  // remove one and submit again without solving the widget twice. A Turnstile
  // token is spent only once it has been verified.
  const ip = clientIp(request);
  if (!(await verifyTurnstile(env, body.turnstileToken, ip))) {
    return errorJson('TURNSTILE_FAILED', 403);
  }

  const normalized = [];
  for (const [index, candidate] of raw.entries()) {
    const result = normalizeUrl(candidate);
    if (!result.ok) {
      // `index` is 1-based and names the offending line on the page.
      return errorJson(result.code, 400, {}, { index: index + 1 });
    }
    normalized.push({ ...result, index: index + 1 });
  }

  const now = nowMs();
  const ipHash = await hashIp(env, request);

  // Repeated lines collapse here, so the quota counts videos rather than
  // keystrokes. `indexes` lets the page map a job back to its line(s).
  const entries = [];
  const byUrl = new Map();
  for (const item of normalized) {
    const seen = byUrl.get(item.url);
    if (seen) {
      seen.indexes.push(item.index);
      continue;
    }
    const entry = {
      ...item,
      urlHash: await sha256Hex(item.url),
      indexes: [item.index],
    };
    byUrl.set(item.url, entry);
    entries.push(entry);
  }

  const duplicates = await findDuplicates(
    env,
    [...new Set(entries.map((entry) => entry.urlHash))],
    now,
    kind,
    audioFormat || 'm4a',
  );
  const fresh = entries.filter((entry) => !duplicates.has(entry.urlHash));

  if (fresh.length > 0) {
    const worker = await workerOnline(env, now);
    if (!worker.online) {
      return errorJson('WORKER_OFFLINE', 503, { 'retry-after': '120' });
    }

    const dayStart = vnDayStart(now);
    const counts = await countsForSubmit(env, ipHash, dayStart, now - 3_600_000);

    // A batch is accepted whole or refused whole: a partial success would
    // leave the visitor unsure which links to send again.
    if (counts.ipHour + fresh.length > settings.hourly_per_ip) {
      return errorJson('IP_HOURLY', 429, { 'retry-after': '600' }, {
        remaining: Math.max(0, settings.hourly_per_ip - counts.ipHour),
      });
    }
    if (counts.ipDay + fresh.length > settings.daily_per_ip) {
      return errorJson('IP_DAILY', 429, {
        'retry-after': retryAfterUntil(dayStart + 86_400_000, now),
      }, { remaining: Math.max(0, settings.daily_per_ip - counts.ipDay) });
    }
    if (counts.today + fresh.length > settings.daily_limit) {
      return errorJson('DAILY_LIMIT', 429, {
        'retry-after': retryAfterUntil(dayStart + 86_400_000, now),
      }, { remaining: Math.max(0, settings.daily_limit - counts.today) });
    }
    if (counts.queue + fresh.length > settings.queue_limit) {
      return errorJson('QUEUE_FULL', 429, { 'retry-after': '60' });
    }
  }

  const jobs = [];
  let created = 0;
  for (const entry of entries) {
    const duplicate = duplicates.get(entry.urlHash);
    if (duplicate) {
      jobs.push({
        id: duplicate.id,
        status: duplicate.status,
        position: duplicate.status === 'queued'
          ? await queuePosition(env, duplicate.seq)
          : 0,
        duplicate: true,
        indexes: entry.indexes,
        kind,
        audioFormat,
      });
      continue;
    }

    const id = randomHex(16);
    const seq = await insertJob(env, {
      id,
      url: entry.url,
      urlHash: entry.urlHash,
      host: entry.host,
      source: entry.source,
      createdAt: now,
      ipHash,
      kind,
      audioFormat,
    });
    jobs.push({
      id,
      status: 'queued',
      position: await queuePosition(env, seq),
      duplicate: false,
      indexes: entry.indexes,
      kind,
      audioFormat,
    });
    created += 1;
  }

  const after = await countsForSubmit(env, ipHash, vnDayStart(now), now - 3_600_000);

  // A cached copy of the old single-link page sends `url` and reads the job
  // from the top level. One branch keeps that client working.
  if (!Array.isArray(body.urls)) {
    const first = jobs[0];
    return json({
      id: first.id,
      status: first.status,
      position: first.position,
      duplicate: first.duplicate,
      kind,
      audioFormat,
      queue: after.queue,
      remaining: Math.max(0, settings.daily_limit - after.today),
    }, created > 0 ? 201 : 200);
  }

  return json({
    jobs,
    queue: after.queue,
    remaining: Math.max(0, settings.daily_limit - after.today),
    batchMax: limit,
  }, created > 0 ? 201 : 200);
}

export async function getJobStatus(request, env, id) {
  if (!ID_RE.test(id)) return errorJson('NOT_FOUND', 404);
  const row = await getJob(env, id);
  if (!row) return errorJson('NOT_FOUND', 404);

  const now = nowMs();
  let status = row.status;
  if (status === 'done' && (!row.expires_at || row.expires_at <= now)) {
    status = 'expired';
  }

  const payload = {
    id: row.id,
    status,
    kind: row.kind || 'video',
    audioFormat: row.audio_format || (row.kind === 'audio' ? 'm4a' : null),
    createdAt: row.created_at,
  };
  if (status === 'queued') payload.position = await queuePosition(env, row.seq);
  if (status === 'running') payload.position = 0;
  if (status === 'done') {
    payload.fileName = row.file_name;
    payload.size = row.file_size;
    payload.duration = row.duration;
    payload.fileMime = row.file_mime || 'video/mp4';
    payload.expiresAt = row.expires_at;
    payload.downloadUrl = `/api/file/${row.id}?t=${row.token}`;
  }
  if (status === 'error') payload.error = row.error_code || 'FAILED';

  return json(payload);
}

export async function downloadFile(request, env, id, url) {
  if (!ID_RE.test(id)) return errorJson('NOT_FOUND', 404);
  const token = url.searchParams.get('t') || '';
  const row = await getJob(env, id);
  if (!row || row.status !== 'done') return errorJson('NOT_FOUND', 404);
  if (!row.expires_at || row.expires_at <= nowMs()) {
    return errorJson('EXPIRED', 410);
  }
  if (!safeEqual(token, row.token || '')) return errorJson('BAD_TOKEN', 403);

  const requestedRange = request.headers.get('range');
  const object = requestedRange
    ? await env.DOWNLOADS.get(`dl/${id}`, { range: request.headers })
    : await env.DOWNLOADS.get(`dl/${id}`);
  if (!object) return errorJson('NOT_FOUND', 404);

  const partial = Boolean(requestedRange) && Boolean(object.range);
  // The download button and the <video> preview use the same token and the
  // same Range-capable endpoint; only the disposition differs. `inline` lets
  // the browser's media element play it, while the button still downloads.
  const disposition = contentDisposition(row.file_name || 'video.mp4');
  const mime = row.file_mime || 'video/mp4';
  const headers = {
    'content-type': mime,
    'content-disposition': url.searchParams.get('inline') === '1'
      ? disposition.replace(/^attachment/, 'inline')
      : disposition,
    'cache-control': 'private, no-store',
    'x-content-type-options': 'nosniff',
    'x-robots-tag': 'noindex, nofollow',
    'accept-ranges': 'bytes',
  };
  if (partial) {
    headers['content-range'] =
      `bytes ${object.range.offset}-${object.range.offset + object.range.length - 1}/${object.size}`;
    headers['content-length'] = String(object.range.length);
  } else {
    headers['content-length'] = String(object.size);
  }

  return new Response(request.method === 'HEAD' ? null : object.body, {
    status: partial ? 206 : 200,
    headers,
  });
}

export async function getStatus(env) {
  const now = nowMs();
  const settings = await readSettings(env);
  const counts = await publicCounts(env, vnDayStart(now), now);
  const online = counts.lastSeen >= now - 90_000 || counts.running > 0;
  return json({
    online,
    enabled: Boolean(settings.enabled),
    queue: counts.queue,
    today: counts.today,
    limit: settings.daily_limit,
    batchMax: batchLimit(settings),
  });
}

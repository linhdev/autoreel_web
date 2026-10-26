/**
 * The public side of the download API: create a job, watch it, fetch the file.
 */
import {
  clientIp, contentDisposition, errorJson, hashIp, json, nowMs, randomHex,
  readJson, safeEqual, sameOriginRequest, sha256Hex, vnDayStart,
} from './http.js';
import { normalizeUrl } from './urls.js';
import {
  countsForSubmit, createJob as insertJob, findDuplicate, getJob,
  publicCounts, queuePosition, readSettings, workerOnline,
} from './store.js';

const ID_RE = /^[a-f0-9]{32}$/;

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

  const parsed = await readJson(request);
  if (parsed.error) return errorJson(parsed.error, 400);
  const { body } = parsed;

  const normalized = normalizeUrl(body.url);
  if (!normalized.ok) return errorJson(normalized.code, 400);

  const ip = clientIp(request);
  if (!(await verifyTurnstile(env, body.turnstileToken, ip))) {
    return errorJson('TURNSTILE_FAILED', 403);
  }

  const now = nowMs();
  const settings = await readSettings(env);
  if (!settings.enabled) return errorJson('MAINTENANCE', 503);

  const ipHash = await hashIp(env, request);
  const urlHash = await sha256Hex(normalized.url);

  // Before quotas: asking for the same url twice should hand back the job
  // already working on it, not consume another slot.
  const duplicate = await findDuplicate(env, urlHash, now);
  if (duplicate) {
    const position = duplicate.status === 'queued'
      ? await queuePosition(env, duplicate.seq)
      : 0;
    return json({
      id: duplicate.id,
      status: duplicate.status,
      position,
      duplicate: true,
    });
  }

  const worker = await workerOnline(env, now);
  if (!worker.online) {
    return errorJson('WORKER_OFFLINE', 503, { 'retry-after': '120' });
  }

  const dayStart = vnDayStart(now);
  const counts = await countsForSubmit(env, ipHash, dayStart, now - 3_600_000);

  if (counts.ipHour >= settings.hourly_per_ip) {
    return errorJson('IP_HOURLY', 429, { 'retry-after': '600' });
  }
  if (counts.ipDay >= settings.daily_per_ip) {
    return errorJson('IP_DAILY', 429, {
      'retry-after': retryAfterUntil(dayStart + 86_400_000, now),
    });
  }
  if (counts.today >= settings.daily_limit) {
    return errorJson('DAILY_LIMIT', 429, {
      'retry-after': retryAfterUntil(dayStart + 86_400_000, now),
    });
  }
  if (counts.queue >= settings.queue_limit) {
    return errorJson('QUEUE_FULL', 429, { 'retry-after': '60' });
  }

  const id = randomHex(16);
  const seq = await insertJob(env, {
    id,
    url: normalized.url,
    urlHash,
    host: normalized.host,
    source: normalized.source,
    createdAt: now,
    ipHash,
  });
  const position = await queuePosition(env, seq);

  return json({
    id,
    status: 'queued',
    position,
    queue: counts.queue + 1,
    remaining: Math.max(0, settings.daily_limit - counts.today - 1),
  }, 201);
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
    createdAt: row.created_at,
  };
  if (status === 'queued') payload.position = await queuePosition(env, row.seq);
  if (status === 'running') payload.position = 0;
  if (status === 'done') {
    payload.fileName = row.file_name;
    payload.size = row.file_size;
    payload.duration = row.duration;
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
  const headers = {
    'content-type': 'video/mp4',
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
  });
}

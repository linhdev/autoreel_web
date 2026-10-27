/**
 * Small shared helpers for the public download API.
 *
 * Everything in `src/api` runs in the Worker. Keep this file free of Node
 * APIs: no `fs`, no `process`, no Buffer. The Worker's Web Crypto is the only
 * source of randomness and hashing here.
 */

const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
  'x-content-type-options': 'nosniff',
  'x-robots-tag': 'noindex, nofollow',
};

export function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...headers },
  });
}

export function errorJson(code, status, headers = {}, extra = {}) {
  return json({ error: { code }, ...extra }, status, headers);
}

export function nowMs() {
  return Date.now();
}

export function hexFrom(buffer) {
  return [...new Uint8Array(buffer)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export function randomHex(bytes = 16) {
  return hexFrom(crypto.getRandomValues(new Uint8Array(bytes)));
}

export async function sha256Hex(value) {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(String(value)),
  );
  return hexFrom(digest);
}

export async function hmacHex(secret, value) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(String(secret)),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(String(value)),
  );
  return hexFrom(signature);
}

/**
 * Compare two strings without returning early on the first differing byte.
 *
 * The values compared here are high-entropy tokens, so a timing attack is not
 * the realistic threat; the loop is cheap and keeps the habit honest.
 */
export function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) {
    return false;
  }
  let difference = 0;
  for (let index = 0; index < a.length; index += 1) {
    difference |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return difference === 0;
}

/** Midnight in Vietnam (UTC+7) as a Unix millisecond timestamp. */
export function vnDayStart(ms) {
  const offset = 7 * 60 * 60 * 1000;
  return Math.floor((ms + offset) / 86_400_000) * 86_400_000 - offset;
}

export function clientIp(request) {
  return request.headers.get('cf-connecting-ip') || '0.0.0.0';
}

export async function hashIp(env, request) {
  return hmacHex(String(env.IP_PEPPER || '').trim(), clientIp(request));
}

/**
 * A filename that can go in a header and on every filesystem we might touch.
 *
 * The source title is untrusted (it is whatever the platform published), so
 * control characters, separators and quotes become spaces. The name stays
 * UTF-8; `contentDisposition` carries the ASCII fallback as well.
 */
export function sanitizeFilename(name, fallback = 'video.mp4', ext = '.mp4') {
  let clean = String(name || '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/[\\/:*?"<>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean) clean = fallback;
  if (!/\.(mp4|m4a|mp3|wav|jpg|jpeg|png|webp|srt|vtt)$/i.test(clean)) clean += ext;
  return clean.slice(0, 80);
}

export function contentDisposition(name) {
  const safe = sanitizeFilename(name);
  const fallback = safe.replace(/[^\x20-\x7e]/g, '_').replace(/["\\]/g, '_');
  const encoded = encodeURIComponent(safe).replace(
    /['()*]/g,
    (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`,
  );
  return `attachment; filename="${fallback}"; filename*=UTF-8''${encoded}`;
}

/**
 * Reject a request that did not come from the site's own page.
 *
 * There are no cookies to ride, so this is defence in depth rather than the
 * primary control (Turnstile and the quotas are). It also keeps a curl loop
 * from being the first thing a scanner tries.
 */
export function sameOriginRequest(request, env) {
  if (env.ENVIRONMENT !== 'production') return true;
  const origin = request.headers.get('origin');
  if (origin) {
    return origin === 'https://autoreelvn.com'
      || origin === 'https://www.autoreelvn.com';
  }
  return request.headers.get('sec-fetch-site') === 'same-origin';
}

/**
 * Read a small JSON body, refusing anything that could become a memory problem.
 *
 * `Content-Length` is required on purpose: a chunked body has no upper bound
 * we can check before reading it, and every legitimate client here (the page)
 * sends a length.
 */
export async function readJson(request, maxBytes = 4096) {
  const type = (request.headers.get('content-type') || '').toLowerCase();
  if (!type.startsWith('application/json')) {
    return { error: 'BAD_CONTENT_TYPE' };
  }
  const length = Number(request.headers.get('content-length') || 0);
  if (!Number.isFinite(length) || length <= 0 || length > maxBytes) {
    return { error: 'BAD_BODY' };
  }
  const text = await request.text();
  if (text.length > maxBytes) return { error: 'BAD_BODY' };
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    return { error: 'BAD_BODY' };
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'BAD_BODY' };
  }
  return { body };
}

export function isIpLiteral(hostname) {
  if (!hostname) return true;
  if (hostname.includes(':')) return true; // IPv6 (bracketed hostnames keep the colons)
  return /^\d{1,3}(?:\.\d{1,3}){3}$/.test(hostname);
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Web Push for the free download queue.
 *
 * The browser subscribes; the Worker stores the endpoint and asks a push
 * service to deliver one short message when the job finishes. The download
 * token is deliberately not in that message: a push service may keep it until
 * the TTL expires, and the page can fetch the tokenised URL itself once it is
 * open.
 *
 * Encryption and VAPID are `@block65/webcrypto-web-push`, which implements
 * RFC 8291 `aes128gcm` on Web Crypto. That matters for Safari, whose push
 * service rejects the older `aesgcm` encoding.
 */
import { buildPushPayload } from '@block65/webcrypto-web-push';

import { isIpLiteral } from './http.js';
import {
  getJob, markPushFailed, markPushSent, pushTargetsFor, readSettings,
} from './store.js';

const MAX_ENDPOINT = 2048;
const MAX_TARGETS = 10;

/** Only the services a real browser uses; a subscription is a URL we fetch. */
export function isAllowedPushEndpoint(endpoint) {
  let url;
  try {
    url = new URL(String(endpoint || ''));
  } catch {
    return false;
  }
  if (url.protocol !== 'https:') return false;
  if (url.port && url.port !== '443') return false;
  if (url.username || url.password) return false;
  if (String(endpoint).length > MAX_ENDPOINT) return false;
  const host = url.hostname.toLowerCase();
  if (!host || isIpLiteral(host)) return false;
  return host === 'fcm.googleapis.com'
    || host === 'updates.push.services.mozilla.com'
    || host.endsWith('.push.services.mozilla.com')
    || host.endsWith('.push.apple.com')
    || host.endsWith('.notify.windows.com');
}

function bytesFromBase64Url(value) {
  const text = String(value || '').replace(/-/g, '+').replace(/_/g, '/');
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(text)) return null;
  const padded = text + '='.repeat((4 - (text.length % 4)) % 4);
  try {
    const binary = atob(padded);
    return Uint8Array.from(binary, (char) => char.charCodeAt(0));
  } catch {
    return null;
  }
}

/** The browser's PushSubscription, narrowed to the fields we can trust. */
export function validateSubscription(value) {
  const sub = value && typeof value === 'object' ? value : {};
  const endpoint = String(sub.endpoint || '');
  if (!isAllowedPushEndpoint(endpoint)) return null;
  const keys = sub.keys && typeof sub.keys === 'object' ? sub.keys : {};
  const p256dh = bytesFromBase64Url(keys.p256dh);
  const auth = bytesFromBase64Url(keys.auth);
  if (!p256dh || p256dh.length !== 65 || p256dh[0] !== 4) return null;
  if (!auth || auth.length !== 16) return null;
  return {
    endpoint,
    p256dh: String(keys.p256dh),
    auth: String(keys.auth),
    expirationTime: Number.isFinite(sub.expirationTime)
      ? Number(sub.expirationTime) : null,
  };
}

export function normalizeLanguage(value) {
  return String(value || '').toLowerCase() === 'en' ? 'en' : 'vi';
}

function formatBytes(value) {
  const size = Number(value || 0);
  if (!size) return '';
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export function buildNotification(job, { lang = 'vi', origin = 'https://autoreelvn.com' } = {}) {
  const language = normalizeLanguage(lang);
  const base = language === 'en' ? '/en/downloads/' : '/downloads/';
  const url = `${origin}${base}?job=${job.id}`;
  const size = formatBytes(job.file_size);
  const title = language === 'en' ? 'Your video is ready' : 'Video đã sẵn sàng';
  const body = [job.file_name || '', size].filter(Boolean).join(' · ')
    || (language === 'en' ? 'Download it now.' : 'Bấm để tải về.');
  return {
    // Declarative Web Push on iOS 18.4+ reads this shape; browsers that do
    // not know it fall back to the service worker's `push` handler.
    web_push: 8030,
    notification: {
      title,
      body: body.slice(0, 180),
      navigate: url,
      lang: language,
      tag: job.id,
      icon: `${origin}/downloads/icon-512.png`,
      data: { jobId: job.id, url },
    },
  };
}

async function sendOne(env, target, job) {
  const payload = await buildPushPayload(
    {
      data: buildNotification(job, {
        lang: target.lang,
        origin: target.origin,
      }),
      options: { ttl: 1500, urgency: 'high', topic: job.id },
    },
    {
      endpoint: target.endpoint,
      expirationTime: null,
      keys: { p256dh: target.p256dh, auth: target.auth },
    },
    {
      subject: env.VAPID_SUBJECT,
      publicKey: env.VAPID_PUBLIC_KEY,
      privateKey: env.VAPID_PRIVATE_KEY,
    },
  );
  const response = await fetch(target.endpoint, {
    method: payload.method,
    headers: payload.headers,
    body: payload.body,
    redirect: 'manual',
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) {
    const error = new Error(`push service returned ${response.status}`);
    error.status = response.status;
    throw error;
  }
}

/**
 * Send every pending target for one finished job.
 *
 * Safe to call twice: a target with `sent_at` is not selected again, and a job
 * that is not done yet is a no-op. Callers use `ctx.waitUntil`, so a push
 * service's latency never delays the worker's upload response.
 */
export async function notifyJob(env, id) {
  try {
    const settings = await readSettings(env);
    if (!settings.push_enabled) return;
    if (!env.VAPID_PRIVATE_KEY || !env.VAPID_PUBLIC_KEY || !env.VAPID_SUBJECT) {
      return;
    }
    const job = await getJob(env, id);
    const now = Date.now();
    if (!job || job.status !== 'done') return;
    if (!job.expires_at || job.expires_at <= now) return;
    const targets = await pushTargetsFor(env, id);
    for (const target of targets.slice(0, MAX_TARGETS)) {
      try {
        await sendOne(env, target, job);
        await markPushSent(env, id, target.id, Date.now());
      } catch (error) {
        const status = Number(error?.status || 0);
        await markPushFailed(env, id, target.id, String(error?.message || error),
          Date.now(), { disable: status === 404 || status === 410 });
      }
    }
  } catch (error) {
    // A push is a convenience; it must never turn a successful download into
    // an error response or a logged stack trace with a subscription endpoint.
    console.error('push', id.slice(0, 8), String(error?.message || error));
  }
}

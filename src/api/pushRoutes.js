/**
 * The two public push endpoints: ask for the key, and attach a device to a
 * batch. Both are same-origin; neither needs a Turnstile token because the
 * token was already spent creating the jobs these notifications are about.
 */
import {
  errorJson, hashIp, json, readJson, sameOriginRequest,
} from './http.js';
import { notifyJob, normalizeLanguage, validateSubscription } from './push.js';
import {
  countPushSubscriptions, deletePushSubscription, findPushSubscription,
  getJob, linkPushTargets, readSettings, upsertPushSubscription,
} from './store.js';

const ID = /^[a-f0-9]{32}$/;
const MAX_JOBS = 10;
const MAX_SUBSCRIPTIONS_PER_IP = 20;

export async function pushKey(env) {
  const settings = await readSettings(env);
  const enabled = Boolean(settings.push_enabled)
    && Boolean(env.VAPID_PUBLIC_KEY);
  return json({
    enabled,
    publicKey: enabled ? env.VAPID_PUBLIC_KEY : '',
  });
}

export async function subscribePush(request, env) {
  if (!sameOriginRequest(request, env)) return errorJson('BAD_ORIGIN', 403);
  const parsed = await readJson(request, 16_384);
  if (parsed.error) return errorJson(parsed.error, 400);
  const settings = await readSettings(env);
  if (!settings.push_enabled) return errorJson('PUSH_DISABLED', 503);
  const body = parsed.body || {};
  const subscription = validateSubscription(body.subscription);
  if (!subscription) return errorJson('BAD_SUBSCRIPTION', 400);

  const rawIds = Array.isArray(body.jobIds) ? body.jobIds : [];
  const jobIds = [...new Set(rawIds.filter((id) => ID.test(String(id))))]
    .slice(0, MAX_JOBS);
  if (jobIds.length === 0) return errorJson('BAD_JOB', 400);

  const now = Date.now();
  const ipHash = await hashIp(env, request);
  const existing = await findPushSubscription(env, subscription.endpoint);
  if (!existing
      && await countPushSubscriptions(env, ipHash) >= MAX_SUBSCRIPTIONS_PER_IP) {
    return errorJson('PUSH_LIMIT', 429);
  }
  const origin = new URL(request.url).origin;
  const subscriptionId = await upsertPushSubscription(env, {
    ...subscription,
    ipHash,
    lang: normalizeLanguage(body.lang),
    origin,
    now,
  });
  if (!subscriptionId) return errorJson('PUSH_UNAVAILABLE', 503);

  const linked = [];
  for (const id of jobIds) {
    const job = await getJob(env, id);
    if (job) linked.push(id);
  }
  if (linked.length === 0) return errorJson('BAD_JOB', 400);
  await linkPushTargets(env, linked, subscriptionId, now);

  // A subscription can arrive after the job has already finished (a slow
  // permission prompt, or a retry). Sending here closes that race; the
  // upload's own `waitUntil` covers the other order.
  for (const id of linked) {
    const job = await getJob(env, id);
    if (job?.status === 'done') await notifyJob(env, id);
  }
  return json({ ok: true, linked: linked.length });
}

export async function unsubscribePush(request, env) {
  if (!sameOriginRequest(request, env)) return errorJson('BAD_ORIGIN', 403);
  const parsed = await readJson(request, 4096);
  if (parsed.error) return errorJson(parsed.error, 400);
  const endpoint = String(parsed.body?.endpoint || '');
  if (!endpoint) return errorJson('BAD_SUBSCRIPTION', 400);
  await deletePushSubscription(env, endpoint, await hashIp(env, request));
  return json({ ok: true });
}

/**
 * The `/api/*` router. One place that maps a path to a handler, so the main
 * Worker file stays the two lines it was before the download tool existed.
 */
import { errorJson } from './http.js';
import { createJob, downloadFile, getJobStatus, getStatus } from './jobs.js';
import { failJob, nextJob, uploadFile } from './worker.js';
import { pushKey, subscribePush, unsubscribePush } from './pushRoutes.js';
import { cleanup } from './store.js';

const JOB = /^\/api\/jobs\/([a-f0-9]{32})$/;
const FILE = /^\/api\/file\/([a-f0-9]{32})$/;
const UPLOAD = /^\/api\/worker\/jobs\/([a-f0-9]{32})\/file$/;
const FAIL = /^\/api\/worker\/jobs\/([a-f0-9]{32})\/error$/;

export async function handleApi(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname;

  try {
    if (path === '/api/jobs' && request.method === 'POST') {
      return await createJob(request, env);
    }
    if (path === '/api/status' && request.method === 'GET') {
      return await getStatus(env);
    }
    if (path === '/api/push/key' && request.method === 'GET') {
      return await pushKey(env);
    }
    if (path === '/api/push/subscribe' && request.method === 'POST') {
      return await subscribePush(request, env);
    }
    if (path === '/api/push/unsubscribe' && request.method === 'POST') {
      return await unsubscribePush(request, env);
    }

    const job = JOB.exec(path);
    if (job && request.method === 'GET') {
      return await getJobStatus(request, env, job[1]);
    }

    const file = FILE.exec(path);
    if (file && (request.method === 'GET' || request.method === 'HEAD')) {
      return await downloadFile(request, env, file[1], url);
    }

    if (path === '/api/worker/next' && request.method === 'GET') {
      return await nextJob(request, env, url);
    }

    const upload = UPLOAD.exec(path);
    if (upload && request.method === 'POST') {
      return await uploadFile(request, env, upload[1], ctx);
    }

    const fail = FAIL.exec(path);
    if (fail && request.method === 'POST') {
      return await failJob(request, env, fail[1]);
    }

    return errorJson('NOT_FOUND', 404);
  } catch (error) {
    // Never return the exception text: it can contain a storage key or a
    // platform message. The detail stays in the Worker log.
    console.error('api', path, String(error?.message || error));
    return errorJson('INTERNAL', 500);
  }
}

export async function runCleanup(env) {
  await cleanup(env, Date.now());
}

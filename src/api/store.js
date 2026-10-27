/**
 * Every D1 statement the download API runs.
 *
 * Keeping the SQL here makes the edge handler readable and gives the tests one
 * place to look. All values are bound; no statement is built from user input.
 */

const DEFAULT_SETTINGS = {
  enabled: 1,
  daily_limit: 300,
  // A visitor may send several links at once. Six an hour leaves room for one
  // full batch plus a single; twenty a day is four batches.
  hourly_per_ip: 6,
  daily_per_ip: 20,
  batch_max: 5,
  audio_enabled: 1,
  cover_enabled: 1,
  subtitle_enabled: 1,
  share_enabled: 1,
  push_enabled: 1,
  audio_formats: 'm4a,mp3,wav',
  queue_limit: 30,
  max_seconds: 1200,
  max_bytes: 99_614_720,
};

export async function readSettings(env) {
  const settings = { ...DEFAULT_SETTINGS };
  try {
    const { results } = await env.DB.prepare('SELECT key, value FROM settings').all();
    for (const row of results || []) {
      if (row.key === 'audio_formats') {
        settings.audio_formats = String(row.value || '');
      } else if ([
        'enabled', 'audio_enabled', 'cover_enabled', 'subtitle_enabled',
        'share_enabled', 'push_enabled',
      ].includes(row.key)) {
        settings[row.key] = row.value === '1' || row.value === 'true' ? 1 : 0;
      } else if (row.key in settings) {
        const number = Number(row.value);
        if (Number.isFinite(number)) settings[row.key] = number;
      }
    }
  } catch {
    // A missing settings table must not take the page down; the defaults are
    // the same numbers the migration seeds.
  }
  return settings;
}

export async function createJob(env, job) {
  await env.DB.prepare(
    `INSERT INTO jobs
       (id, url, url_hash, host, source, status, created_at, ip_hash, kind, audio_format)
     VALUES (?, ?, ?, ?, ?, 'queued', ?, ?, ?, ?)`,
  )
    .bind(
      job.id,
      job.url,
      job.urlHash,
      job.host,
      job.source,
      job.createdAt,
      job.ipHash,
      job.kind || 'video',
      job.audioFormat || null,
    )
    .run();
  const row = await env.DB.prepare('SELECT seq FROM jobs WHERE id = ?')
    .bind(job.id)
    .first();
  return row ? row.seq : 0;
}

export async function findDuplicates(env, urlHashes, now, kind = 'video', audioFormat = 'm4a') {
  if (urlHashes.length === 0) return new Map();
  const placeholders = urlHashes.map(() => '?').join(', ');
  const { results = [] } = await env.DB.prepare(
    `SELECT id, status, expires_at, seq, url_hash, kind, audio_format
       FROM jobs
      WHERE url_hash IN (${placeholders})
        AND kind = ?
        AND COALESCE(audio_format, 'm4a') = ?
        AND (status IN ('queued', 'running')
             OR (status = 'done' AND expires_at > ?))
      ORDER BY seq DESC`,
  )
    .bind(...urlHashes, kind, audioFormat, now)
    .all();

  // Newest first, so the first row seen for a hash is the one to reuse.
  const byHash = new Map();
  for (const row of results) {
    if (!byHash.has(row.url_hash)) byHash.set(row.url_hash, row);
  }
  return byHash;
}

export async function countsForSubmit(env, ipHash, dayStart, hourStart) {
  const row = await env.DB.prepare(
    `SELECT
       (SELECT COUNT(*) FROM jobs WHERE created_at >= ?) AS today,
       (SELECT COUNT(*) FROM jobs WHERE ip_hash = ? AND created_at >= ?) AS ip_hour,
       (SELECT COUNT(*) FROM jobs WHERE ip_hash = ? AND created_at >= ?) AS ip_day,
       (SELECT COUNT(*) FROM jobs WHERE status IN ('queued', 'running')) AS queue`,
  )
    .bind(dayStart, ipHash, hourStart, ipHash, dayStart)
    .first();
  return {
    today: Number(row?.today || 0),
    ipHour: Number(row?.ip_hour || 0),
    ipDay: Number(row?.ip_day || 0),
    queue: Number(row?.queue || 0),
  };
}

export async function publicCounts(env, dayStart, now) {
  const row = await env.DB.prepare(
    `SELECT
       (SELECT COUNT(*) FROM jobs WHERE created_at >= ?) AS today,
       (SELECT COUNT(*) FROM jobs WHERE status IN ('queued', 'running')) AS queue,
       (SELECT last_seen FROM worker_state WHERE id = 'worker') AS last_seen,
       (SELECT COUNT(*) FROM jobs
         WHERE status = 'running' AND claimed_at > ?) AS running`,
  )
    .bind(dayStart, now - 50 * 60 * 1000)
    .first();
  return {
    today: Number(row?.today || 0),
    queue: Number(row?.queue || 0),
    lastSeen: Number(row?.last_seen || 0),
    running: Number(row?.running || 0),
  };
}

export async function queuePosition(env, seq) {
  const row = await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM jobs WHERE status = 'queued' AND seq < ?",
  )
    .bind(seq)
    .first();
  return Number(row?.n || 0) + 1;
}

export async function workerOnline(env, now) {
  const row = await env.DB.prepare(
    `SELECT
       (SELECT last_seen FROM worker_state WHERE id = 'worker') AS last_seen,
       (SELECT COUNT(*) FROM jobs
         WHERE status = 'running' AND claimed_at > ?) AS running`,
  )
    .bind(now - 50 * 60 * 1000)
    .first();
  const lastSeen = Number(row?.last_seen || 0);
  return {
    online: lastSeen >= now - 90_000 || Number(row?.running || 0) > 0,
    lastSeen,
  };
}

async function reclaim(env, now) {
  const stale = now - 50 * 60 * 1000;
  await env.DB.prepare(
    `UPDATE jobs
        SET status = 'queued', worker = NULL, claimed_at = NULL
      WHERE status = 'running' AND claimed_at < ? AND attempts < 2`,
  )
    .bind(stale)
    .run();
  await env.DB.prepare(
    `UPDATE jobs
        SET status = 'error', error_code = 'TIMEOUT', finished_at = ?, url = ''
      WHERE status = 'running' AND claimed_at < ? AND attempts >= 2`,
  )
    .bind(now, stale)
    .run();
}

/** Claim one queued job for the worker, or null when the queue is empty. */
export async function claimNext(env, now, workerId) {
  await reclaim(env, now);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const row = await env.DB.prepare(
      "SELECT id FROM jobs WHERE status = 'queued' ORDER BY seq LIMIT 1",
    ).first();
    if (!row) return null;

    const result = await env.DB.prepare(
      `UPDATE jobs
          SET status = 'running', claimed_at = ?, worker = ?,
              attempts = attempts + 1
        WHERE id = ? AND status = 'queued'`,
    )
      .bind(now, workerId, row.id)
      .run();
    if (result.meta?.changes === 1) {
      return env.DB.prepare('SELECT id, url, created_at, kind, audio_format FROM jobs WHERE id = ?')
        .bind(row.id)
        .first();
    }
  }
  return null;
}

export async function markDone(env, id, file) {
  const result = await env.DB.prepare(
    `UPDATE jobs
        SET status = 'done', finished_at = ?, file_key = ?, file_name = ?,
            file_size = ?, duration = ?, token = ?, expires_at = ?,
            file_mime = ?, url = ''
      WHERE id = ? AND status = 'running'`,
  )
    .bind(
      file.finishedAt,
      file.fileKey,
      file.fileName,
      file.size,
      file.duration,
      file.token,
      file.expiresAt,
      file.fileMime || 'video/mp4',
      id,
    )
    .run();
  return result.meta?.changes === 1;
}

export async function markError(env, id, code, detail, now) {
  const result = await env.DB.prepare(
    `UPDATE jobs
        SET status = 'error', error_code = ?, error_detail = ?,
            finished_at = ?, url = ''
      WHERE id = ? AND status = 'running'`,
  )
    .bind(code, String(detail || '').slice(0, 1000), now, id)
    .run();
  return result.meta?.changes === 1;
}

export async function getJob(env, id) {
  return env.DB.prepare(
    `SELECT seq, id, status, created_at, claimed_at, file_name, file_size,
            duration, token, expires_at, error_code, kind, file_mime, audio_format
       FROM jobs WHERE id = ?`,
  )
    .bind(id)
    .first();
}

export async function touchWorker(env, now, version) {
  await env.DB.prepare(
    `INSERT INTO worker_state (id, last_seen, version) VALUES ('worker', ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       last_seen = excluded.last_seen, version = excluded.version`,
  )
    .bind(now, String(version || '').slice(0, 32))
    .run();
}

export async function cleanup(env, now) {
  const { results = [] } = await env.DB.prepare(
    `SELECT id, file_key FROM jobs
      WHERE status = 'done' AND file_key IS NOT NULL AND finished_at < ?
      ORDER BY finished_at LIMIT 50`,
  )
    .bind(now - 2 * 60 * 60 * 1000)
    .all();

  for (const job of results) {
    try {
      await env.DOWNLOADS.delete(job.file_key);
    } catch {
      // The object may already be gone (lifecycle rule); the row still needs
      // its key cleared so the next sweep does not retry it forever.
    }
    await env.DB.prepare('UPDATE jobs SET file_key = NULL WHERE id = ?')
      .bind(job.id)
      .run();
  }

  await env.DB.prepare(
    `DELETE FROM jobs
      WHERE id IN (SELECT id FROM jobs WHERE created_at < ? LIMIT 200)`,
  )
    .bind(now - 7 * 24 * 60 * 60 * 1000)
    .run();

  await cleanupPush(env, now);
}

/* ------------------------------------------------------------------ push */

export async function upsertPushSubscription(env, sub) {
  await env.DB.prepare(
    `INSERT INTO push_subscriptions
       (endpoint, p256dh, auth, ip_hash, lang, origin, created_at, last_used_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(endpoint) DO UPDATE SET
       p256dh = excluded.p256dh,
       auth = excluded.auth,
       ip_hash = excluded.ip_hash,
       lang = excluded.lang,
       origin = excluded.origin,
       last_used_at = excluded.last_used_at,
       disabled_at = NULL,
       fail_count = 0`,
  )
    .bind(
      sub.endpoint,
      sub.p256dh,
      sub.auth,
      sub.ipHash,
      sub.lang,
      sub.origin,
      sub.now,
      sub.now,
    )
    .run();
  const row = await env.DB.prepare(
    'SELECT id FROM push_subscriptions WHERE endpoint = ?',
  )
    .bind(sub.endpoint)
    .first();
  return row ? Number(row.id) : 0;
}

export async function countPushSubscriptions(env, ipHash) {
  const row = await env.DB.prepare(
    'SELECT COUNT(*) AS n FROM push_subscriptions WHERE ip_hash = ? AND disabled_at IS NULL',
  )
    .bind(ipHash)
    .first();
  return Number(row?.n || 0);
}

export async function findPushSubscription(env, endpoint) {
  const row = await env.DB.prepare(
    'SELECT id FROM push_subscriptions WHERE endpoint = ?',
  )
    .bind(endpoint)
    .first();
  return row ? Number(row.id) : 0;
}

/** Link up to a batch's jobs to one device. Existing links are left alone. */export async function linkPushTargets(env, jobIds, subscriptionId, now) {
  if (jobIds.length === 0 || !subscriptionId) return;
  const statements = jobIds.map((id) => env.DB.prepare(
    `INSERT OR IGNORE INTO push_targets
       (job_id, subscription_id, created_at) VALUES (?, ?, ?)`,
  ).bind(id, subscriptionId, now));
  await env.DB.batch(statements);
}

export async function pushTargetsFor(env, jobId) {
  const { results = [] } = await env.DB.prepare(
    `SELECT s.id, s.endpoint, s.p256dh, s.auth, s.lang, s.origin
       FROM push_targets t
       JOIN push_subscriptions s ON s.id = t.subscription_id
      WHERE t.job_id = ?
        AND t.sent_at IS NULL
        AND s.disabled_at IS NULL
        AND s.fail_count < 3
      ORDER BY t.created_at
      LIMIT 10`,
  )
    .bind(jobId)
    .all();
  return results;
}

export async function markPushSent(env, jobId, subscriptionId, now) {
  await env.DB.prepare(
    `UPDATE push_targets
        SET sent_at = ?, attempts = attempts + 1, last_error = NULL
      WHERE job_id = ? AND subscription_id = ?`,
  )
    .bind(now, jobId, subscriptionId)
    .run();
}

export async function markPushFailed(env, jobId, subscriptionId, error, now,
  { disable = false } = {}) {
  await env.DB.prepare(
    `UPDATE push_targets
        SET attempts = attempts + 1, last_error = ?
      WHERE job_id = ? AND subscription_id = ?`,
  )
    .bind(String(error || '').slice(0, 300), jobId, subscriptionId)
    .run();
  if (disable) {
    await env.DB.prepare(
      `UPDATE push_subscriptions
          SET disabled_at = ?, fail_count = fail_count + 1
        WHERE id = ?`,
    )
      .bind(now, subscriptionId)
      .run();
    return;
  }
  await env.DB.prepare(
    `UPDATE push_subscriptions
        SET fail_count = fail_count + 1,
            disabled_at = CASE WHEN fail_count + 1 >= 3 THEN ? ELSE disabled_at END
      WHERE id = ?`,
  )
    .bind(now, subscriptionId)
    .run();
}

export async function deletePushSubscription(env, endpoint, ipHash) {
  await env.DB.prepare(
    `DELETE FROM push_targets
      WHERE subscription_id IN (
        SELECT id FROM push_subscriptions
         WHERE endpoint = ? AND ip_hash = ?)`,
  )
    .bind(endpoint, ipHash)
    .run();
  await env.DB.prepare(
    'DELETE FROM push_subscriptions WHERE endpoint = ? AND ip_hash = ?',
  )
    .bind(endpoint, ipHash)
    .run();
}

/** Drop targets with the jobs, and device rows nothing has used for a month. */
async function cleanupPush(env, now) {
  await env.DB.prepare(
    'DELETE FROM push_targets WHERE created_at < ?',
  )
    .bind(now - 7 * 24 * 60 * 60 * 1000)
    .run();
  await env.DB.prepare(
    `DELETE FROM push_subscriptions
      WHERE created_at < ?
        AND id NOT IN (SELECT subscription_id FROM push_targets)`,
  )
    .bind(now - 30 * 24 * 60 * 60 * 1000)
    .run();
}

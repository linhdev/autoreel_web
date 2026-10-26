/**
 * Every D1 statement the download API runs.
 *
 * Keeping the SQL here makes the edge handler readable and gives the tests one
 * place to look. All values are bound; no statement is built from user input.
 */

const DEFAULT_SETTINGS = {
  enabled: 1,
  daily_limit: 300,
  hourly_per_ip: 3,
  daily_per_ip: 10,
  queue_limit: 30,
  max_seconds: 1200,
  max_bytes: 99_614_720,
};

export async function readSettings(env) {
  const settings = { ...DEFAULT_SETTINGS };
  try {
    const { results } = await env.DB.prepare('SELECT key, value FROM settings').all();
    for (const row of results || []) {
      if (row.key === 'enabled') {
        settings.enabled = row.value === '1' || row.value === 'true' ? 1 : 0;
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
       (id, url, url_hash, host, source, status, created_at, ip_hash)
     VALUES (?, ?, ?, ?, ?, 'queued', ?, ?)`,
  )
    .bind(
      job.id,
      job.url,
      job.urlHash,
      job.host,
      job.source,
      job.createdAt,
      job.ipHash,
    )
    .run();
  const row = await env.DB.prepare('SELECT seq FROM jobs WHERE id = ?')
    .bind(job.id)
    .first();
  return row ? row.seq : 0;
}

export async function findDuplicate(env, urlHash, now) {
  return env.DB.prepare(
    `SELECT id, status, expires_at, seq
       FROM jobs
      WHERE url_hash = ?
        AND (status IN ('queued', 'running')
             OR (status = 'done' AND expires_at > ?))
      ORDER BY seq DESC
      LIMIT 1`,
  )
    .bind(urlHash, now)
    .first();
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
      return env.DB.prepare('SELECT id, url, created_at FROM jobs WHERE id = ?')
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
            file_size = ?, duration = ?, token = ?, expires_at = ?, url = ''
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
            duration, token, expires_at, error_code
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
}

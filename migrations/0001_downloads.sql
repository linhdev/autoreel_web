-- The public download queue.
--
-- One row per submitted video. `url` is cleared as soon as the job reaches a
-- terminal state; `url_hash` stays for the duplicate check and contains no
-- recoverable address. `ip_hash` is a keyed HMAC, never the address itself.
CREATE TABLE IF NOT EXISTS jobs (
  seq INTEGER PRIMARY KEY AUTOINCREMENT,
  id TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  url_hash TEXT NOT NULL,
  host TEXT NOT NULL,
  source TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('queued', 'running', 'done', 'error')),
  created_at INTEGER NOT NULL,
  claimed_at INTEGER,
  finished_at INTEGER,
  attempts INTEGER NOT NULL DEFAULT 0,
  worker TEXT,
  file_key TEXT,
  file_name TEXT,
  file_size INTEGER,
  duration REAL,
  token TEXT,
  expires_at INTEGER,
  error_code TEXT,
  error_detail TEXT,
  ip_hash TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS jobs_queue ON jobs(status, seq);
CREATE INDEX IF NOT EXISTS jobs_url ON jobs(url_hash, created_at);
CREATE INDEX IF NOT EXISTS jobs_ip ON jobs(ip_hash, created_at);
CREATE INDEX IF NOT EXISTS jobs_created ON jobs(created_at);

CREATE TABLE IF NOT EXISTS worker_state (
  id TEXT PRIMARY KEY,
  last_seen INTEGER NOT NULL,
  version TEXT
);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

INSERT OR IGNORE INTO settings (key, value) VALUES
  ('enabled', '1'),
  ('daily_limit', '300'),
  ('hourly_per_ip', '3'),
  ('daily_per_ip', '10'),
  ('queue_limit', '30'),
  ('max_seconds', '1200'),
  ('max_bytes', '99614720');

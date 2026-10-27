-- Web Push: one row per browser subscription, one target per job it asked
-- about. The endpoint is the device; the job id is the thing that finishes.
--
-- No file token is ever stored here: a notification says a job is ready and
-- the page fetches the tokenised URL itself, so a push service never holds a
-- download credential.
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  ip_hash TEXT NOT NULL,
  lang TEXT NOT NULL DEFAULT 'vi',
  origin TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  last_used_at INTEGER,
  disabled_at INTEGER,
  fail_count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS push_subs_ip
  ON push_subscriptions(ip_hash, created_at);
CREATE INDEX IF NOT EXISTS push_subs_live
  ON push_subscriptions(disabled_at);

CREATE TABLE IF NOT EXISTS push_targets (
  job_id TEXT NOT NULL,
  subscription_id INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  sent_at INTEGER,
  attempts INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  PRIMARY KEY (job_id, subscription_id)
);

CREATE INDEX IF NOT EXISTS push_targets_pending
  ON push_targets(sent_at, created_at);
CREATE INDEX IF NOT EXISTS push_targets_sub
  ON push_targets(subscription_id);

INSERT OR IGNORE INTO settings (key, value) VALUES ('push_enabled', '1');

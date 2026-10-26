-- Several links per submission.
--
-- `batch_max` is the page's own ceiling; the Worker also clamps it to 5 and
-- the dashboard can only lower it. The two per-IP limits move with it: three
-- videos an hour made a five-video batch impossible to submit at all.
--
-- The UPDATEs are conditional so a value someone tuned by hand is left alone.
INSERT OR IGNORE INTO settings (key, value) VALUES ('batch_max', '5');
UPDATE settings SET value = '6' WHERE key = 'hourly_per_ip' AND value = '3';
UPDATE settings SET value = '20' WHERE key = 'daily_per_ip' AND value = '10';

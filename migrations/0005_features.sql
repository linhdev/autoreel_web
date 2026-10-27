-- Which extra file kinds and sharing features are on.
--
-- `audio_formats` is a comma-separated allow-list; the API falls back to
-- `m4a` when the row is missing or empty. Existing installs get the defaults
-- here; the dashboard writes the same keys.
INSERT OR IGNORE INTO settings (key, value) VALUES
  ('audio_enabled', '1'),
  ('cover_enabled', '1'),
  ('share_enabled', '1'),
  ('audio_formats', 'm4a,mp3,wav');

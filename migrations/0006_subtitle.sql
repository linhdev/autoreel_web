-- Platform-provided subtitles as a fourth file kind.
--
-- No jobs-table change: `kind` is a text column and `findDuplicates` already
-- keys on it. The setting is seeded here so the API's default and the
-- dashboard's toggle have a row on an existing install.
INSERT OR IGNORE INTO settings (key, value) VALUES ('subtitle_enabled', '1');

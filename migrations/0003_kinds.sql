-- What a job produces: a video, its audio, or a cover still.
--
-- `file_mime` is what the file endpoint serves and what the browser needs to
-- play an audio row or show a cover; without it every download was announced
-- as video/mp4, which makes an m4a unplayable inline and a jpg unviewable.
ALTER TABLE jobs ADD COLUMN kind TEXT NOT NULL DEFAULT 'video';
ALTER TABLE jobs ADD COLUMN file_mime TEXT;

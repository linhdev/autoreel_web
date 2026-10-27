-- The audio export format, chosen per audio job.
--
-- NULL for video and cover jobs. Existing audio rows are NULL too and read as
-- m4a, which is the format they were produced in.
ALTER TABLE jobs ADD COLUMN audio_format TEXT;

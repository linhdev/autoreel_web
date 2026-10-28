/**
 * Two use-case landing pages that point at a specific file kind.
 *
 * They exist because "tải nhạc TikTok" and "tải ảnh bìa YouTube" are searches
 * in their own right; sending both to a generic video page answers neither.
 * The form is a plain GET to `/downloads/` with `kind` and `audioFormat`
 * already filled in, so the tool opens on the right switch.
 */

export const USE_CASE_PAGES = [
  {
    key: 'tiktok-audio',
    label: 'TikTok',
    kind: 'audio',
    audioFormat: 'mp3',
    accent: '#22d3ee',
    path: { vi: '/tai-nhac-tiktok/', en: '/en/download-tiktok-audio/' },
    placeholder: 'https://www.tiktok.com/@kenh/video/…',
    meta: {
      vi: {
        title: 'Tải nhạc TikTok về máy MP3 miễn phí | AutoReel',
        description:
          'Dán link TikTok, chọn Âm thanh → MP3 và tải file nhạc về máy. Miễn phí, không cần đăng nhập, không cần cài app.',
      },
      en: {
        title: 'Download TikTok audio as MP3 free | AutoReel',
        description:
          'Paste a TikTok link, choose Audio → MP3 and save the sound. Free, no login, no app to install.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải nhạc TikTok về máy',
        lead:
          'Dán link video TikTok công khai, chọn Âm thanh → MP3, rồi tải file nhạc về máy. Không cần tách bằng phần mềm dựng.',
        points: ['Nhạc từ video công khai', 'Chọn MP3, M4A hoặc WAV', 'Không cần tài khoản'],
        intro:
          'Âm thanh trong video TikTok thường là thứ người dùng cần giữ lại: nhạc nền, câu nói, hiệu ứng. Trang này tải video công khai rồi tách đúng track âm thanh thành file MP3, không lấy hình. Với video ngắn, file thường chỉ vài trăm KB.',
        steps: [
          ['Sao chép link video', 'Mở video TikTok, bấm Chia sẻ → Sao chép liên kết.'],
          ['Chọn Âm thanh → MP3', 'Dán link vào ô, chọn loại file Âm thanh và định dạng MP3.'],
          ['Tải file nhạc', 'Chờ vài chục giây, xem trước rồi bấm Download.'],
        ],
        notes: [
          'Chỉ video công khai; video cần đăng nhập sẽ không tải được.',
          'MP3 là bản chuyển từ track của video, không phải file nhạc gốc của tác giả.',
          'Tối đa 20 phút và 95MB mỗi file; tối đa 5 link một lần.',
          'File trên máy chủ tự xoá sau khoảng 2 giờ; link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Có tách được nhạc nền khỏi giọng nói không?', 'Không. Trang trả toàn bộ track âm thanh của video; muốn tách riêng nhạc và giọng cần công cụ khác.'],
          ['Nên chọn MP3 hay M4A?', 'MP3 tương thích rộng với máy nghe nhạc và trình dựng; M4A nhỏ hơn và giữ chất lượng AAC. WAV chỉ nên dùng cho clip ngắn vì file rất lớn.'],
          ['Có cần tài khoản TikTok không?', 'Không. Chỉ cần link video công khai.'],
          ['File nhạc có bị gắn logo không?', 'Không. File là track âm thanh tách từ video nguồn.'],
        ],
      },
      en: {
        h1: 'Download TikTok audio to your device',
        lead:
          'Paste a public TikTok link, choose Audio → MP3, and save the sound. No editing software needed.',
        points: ['Audio from public videos', 'MP3, M4A or WAV', 'No account'],
        intro:
          'The sound is often what people want to keep from a TikTok: the music, a line, an effect. This page downloads the public video and extracts its audio track as an MP3, without the picture. Short videos usually produce a file of a few hundred KB.',
        steps: [
          ['Copy the video link', 'Open the TikTok video, tap Share → Copy link.'],
          ['Choose Audio → MP3', 'Paste the link, choose Audio and MP3.'],
          ['Save the sound', 'Wait a few dozen seconds, preview, then press Download.'],
        ],
        notes: [
          'Public videos only; login-only videos cannot be fetched.',
          'The MP3 is converted from the video track, not the artist’s original master.',
          'Up to 20 minutes and 95MB per file; up to five links at a time.',
          'Server files are deleted after about 2 hours; links expire after 30 minutes.',
        ],
        faq: [
          ['Can it separate music from voice?', 'No. The page returns the whole audio track; splitting music from speech needs a different tool.'],
          ['MP3 or M4A?', 'MP3 is the most compatible with players and editors; M4A is smaller and keeps the AAC quality. WAV is only for short clips because it is large.'],
          ['Do I need a TikTok account?', 'No. A public video link is enough.'],
          ['Is a logo added?', 'No. The file is the audio track from the source video.'],
        ],
      },
    },
  },
  {
    key: 'youtube-cover',
    label: 'YouTube',
    kind: 'cover',
    accent: '#ef4444',
    path: { vi: '/tai-anh-bia-youtube/', en: '/en/download-youtube-thumbnail/' },
    placeholder: 'https://www.youtube.com/watch?v=…',
    meta: {
      vi: {
        title: 'Tải ảnh bìa YouTube về máy miễn phí | AutoReel',
        description:
          'Dán link YouTube để tải ảnh bìa JPEG về máy. Lấy thumbnail công khai của video; nếu không có thì lấy khung hình ở giây thứ 2.',
      },
      en: {
        title: 'Download YouTube thumbnails free | AutoReel',
        description:
          'Paste a YouTube link and save the cover as a JPEG. Uses the public thumbnail, or a frame at second two when none exists.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải ảnh bìa YouTube về máy',
        lead:
          'Dán link video YouTube công khai để lấy ảnh bìa JPEG. Trang ưu tiên thumbnail của video; nếu nguồn không có, lấy khung hình ở giây thứ 2.',
        points: ['Ảnh JPEG về máy', 'Ưu tiên thumbnail công khai', 'Không cần đăng nhập'],
        intro:
          'Ảnh bìa là thứ hay bị bỏ quên khi lưu video: dùng để làm thumbnail cho bài đăng lại, ảnh xem trước, hoặc tư liệu. Trang này lấy ảnh bìa mà nền tảng công khai cho video; nếu video không có thumbnail, máy cắt một khung hình ở khoảng giây thứ hai để vẫn có ảnh dùng được.',
        steps: [
          ['Sao chép link video', 'Dùng nút Chia sẻ của YouTube hoặc sao chép địa chỉ.'],
          ['Chọn Ảnh bìa', 'Dán link, chọn loại file Ảnh bìa, rồi gửi.'],
          ['Tải JPEG', 'Xem trước ảnh, bấm Download để lưu file JPEG.'],
        ],
        notes: [
          'Chỉ video công khai; video riêng tư hoặc cần thành viên sẽ không tải được.',
          'Ảnh bìa là thumbnail do nền tảng cung cấp; kích thước phụ thuộc video.',
          'Không có thumbnail thì file là một khung hình của video, không phải ảnh chính thức.',
          'Tối đa 5 link một lần; file ảnh thường rất nhẹ.',
        ],
        faq: [
          ['Ảnh có đúng là thumbnail gốc không?', 'Thường có. Trang lấy thumbnail công khai trong metadata; nếu nguồn không trả, file là khung hình ở giây thứ 2.'],
          ['Tải được ảnh bìa Shorts không?', 'Có, nếu video Shorts công khai và nền tảng trả thumbnail.'],
          ['Ảnh có bị chèn logo AutoReel không?', 'Không. File JPEG là ảnh nguồn, không thêm chữ hay logo.'],
          ['Có tải được nhiều ảnh một lần không?', 'Có, tối đa 5 link mỗi lần; mỗi video một file JPEG.'],
        ],
      },
      en: {
        h1: 'Download YouTube thumbnails to your device',
        lead:
          'Paste a public YouTube link to save the cover as a JPEG. The video’s public thumbnail is preferred; if none exists, a frame at second two is used.',
        points: ['JPEG to your device', 'Public thumbnail first', 'No login'],
        intro:
          'The cover is the part people forget when they save a video: it is useful for a repost thumbnail, a preview image, or reference. This page takes the thumbnail the platform publishes for the video; when there is none, the machine cuts a frame around the second second so there is still an image to use.',
        steps: [
          ['Copy the video link', 'Use YouTube’s Share button or copy the address.'],
          ['Choose Cover', 'Paste the link, choose the Cover file type, and submit.'],
          ['Save the JPEG', 'Preview the image, then press Download.'],
        ],
        notes: [
          'Public videos only; private or members-only videos cannot be fetched.',
          'The cover is the platform’s thumbnail; its size depends on the video.',
          'Without a thumbnail, the file is a video frame, not the official image.',
          'Up to five links at a time; image files are small.',
        ],
        faq: [
          ['Is it the official thumbnail?', 'Usually. The page reads the public thumbnail from metadata; if the source returns none, the file is a frame at second two.'],
          ['Do Shorts covers work?', 'Yes, when the Short is public and the platform exposes a thumbnail.'],
          ['Is a logo added?', 'No. The JPEG is the source image with nothing added.'],
          ['Can I download several covers at once?', 'Yes, up to five links per submission, one JPEG per video.'],
        ],
      },
    },
  },
  {
    key: 'youtube-subtitle',
    label: 'YouTube',
    kind: 'subtitle',
    accent: '#ef4444',
    path: { vi: '/tai-phu-de-youtube/', en: '/en/download-youtube-subtitles/' },
    placeholder: 'https://www.youtube.com/watch?v=…',
    meta: {
      vi: {
        title: 'Tải phụ đề YouTube (SRT/VTT) miễn phí | AutoReel',
        description:
          'Dán link YouTube công khai để tải phụ đề do nền tảng cung cấp. Miễn phí, không cần đăng nhập; không bịa phụ đề bằng AI khi video không có.',
      },
      en: {
        title: 'Download YouTube subtitles (SRT/VTT) free | AutoReel',
        description:
          'Paste a public YouTube link to save the captions the platform provides. Free, no login; no AI-generated subtitles when a video has none.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải phụ đề YouTube về máy',
        lead:
          'Dán link video YouTube công khai, chọn Phụ đề, rồi tải file phụ đề mà nền tảng đang cung cấp. Không cần đăng nhập, không cần cài tiện ích.',
        points: ['Phụ đề do nền tảng cung cấp', 'Giữ định dạng gốc', 'Không cần tài khoản'],
        intro:
          'Phụ đề trên YouTube có hai loại: bản do người tạo video tải lên và bản do YouTube tự tạo. Trang này đọc track phụ đề mà video đang công khai; nếu video không có track nào, nó báo không có phụ đề thay vì tự sinh ra một bản bằng AI. Định dạng file phụ thuộc nguồn — thường là SRT hoặc VTT, có video trả ASS, TTML/DFXP hoặc TT.',
        steps: [
          ['Sao chép link video', 'Mở video YouTube, bấm Chia sẻ → Sao chép liên kết.'],
          ['Chọn Phụ đề', 'Dán link vào ô, chọn loại file Phụ đề, rồi gửi.'],
          ['Tải file phụ đề', 'Chờ vài giây, xem trước nếu có, rồi bấm Download.'],
        ],
        notes: [
          'Chỉ video công khai; video riêng tư hoặc chỉ thành viên xem sẽ không lấy được.',
          'Phụ đề là track do YouTube cung cấp, gồm cả bản tự tạo khi nền tảng trả về; trang không tạo phụ đề bằng AI.',
          'Định dạng theo nguồn: SRT, VTT, ASS, TTML/DFXP hoặc TT. Tên file giữ phần mở rộng gốc.',
          'Tối đa 5 link một lần. File phụ đề rất nhẹ; file trên máy chủ tự xoá sau khoảng 2 giờ và link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Tải phụ đề YouTube có cần đăng nhập không?', 'Không. Chỉ cần link video công khai và video có track phụ đề.'],
          ['File phụ đề có định dạng gì?', 'Tuỳ nguồn. Phổ biến nhất là SRT và VTT; một số video trả ASS, TTML/DFXP hoặc TT. Trang giữ đúng định dạng nền tảng trả về, không ép sang một định dạng khác.'],
          ['Video không có phụ đề thì sao?', 'Trang báo không có phụ đề. Nó không tự sinh phụ đề bằng AI, vì bản tự sinh có thể sai nghĩa và người dùng không biết mình đang tải bản gì.'],
          ['Có tải được phụ đề tự động của YouTube không?', 'Được, nếu video đang công khai track phụ đề tự động. Chất lượng phụ thuộc YouTube, không phải trang này.'],
          ['Có tải nhiều video một lần không?', 'Có, tối đa 5 link mỗi lần; mỗi video một file phụ đề.'],
        ],
      },
      en: {
        h1: 'Download YouTube subtitles',
        lead:
          'Paste a public YouTube link, choose Subtitles, and save the caption track the platform provides. No login and no browser extension.',
        points: ['Platform-provided captions', 'Original format kept', 'No account needed'],
        intro:
          'YouTube captions come from two places: a track the creator uploaded, or one YouTube generated. This page reads the caption track the video exposes publicly; when there is none it reports that instead of inventing subtitles with AI. The file format follows the source — usually SRT or VTT, sometimes ASS, TTML/DFXP or TT.',
        steps: [
          ['Copy the video link', 'Open the YouTube video, press Share → Copy link.'],
          ['Choose Subtitles', 'Paste the link, choose the Subtitles file type, and submit.'],
          ['Save the file', 'Wait a few seconds, preview if available, then press Download.'],
        ],
        notes: [
          'Public videos only; private or members-only videos cannot be fetched.',
          'The captions are the track YouTube provides, including auto-generated ones when the platform exposes them. The page does not generate subtitles with AI.',
          'Format follows the source: SRT, VTT, ASS, TTML/DFXP or TT. The file name keeps the original extension.',
          'Up to five links at a time. Subtitle files are tiny; server files are deleted after about 2 hours and download links expire after 30 minutes.',
        ],
        faq: [
          ['Do I need a YouTube account?', 'No. A public video link and a video that has a caption track are enough.'],
          ['What format is the subtitle file?', 'Depends on the source. SRT and VTT are the most common; some videos return ASS, TTML/DFXP or TT. The page keeps the format the platform returns rather than forcing one.'],
          ['What if the video has no subtitles?', 'The page reports that there are none. It does not generate subtitles with AI, because an invented transcript can be wrong in ways the person downloading it cannot see.'],
          ['Can it download YouTube auto-captions?', 'Yes, when the public video exposes the auto-generated track. Their accuracy is YouTube’s, not this page’s.'],
          ['Can I download several videos at once?', 'Yes, up to five links per submission, one subtitle file per video.'],
        ],
      },
    },
  },
  {
    key: 'bilibili-subtitle',
    label: 'Bilibili',
    kind: 'subtitle',
    accent: '#00a1d6',
    path: { vi: '/tai-phu-de-bilibili/', en: '/en/download-bilibili-subtitles/' },
    placeholder: 'https://www.bilibili.com/video/BV…',
    meta: {
      vi: {
        title: 'Tải phụ đề Bilibili miễn phí | AutoReel',
        description:
          'Dán link Bilibili công khai để tải phụ đề do nền tảng cung cấp. Miễn phí, không đăng nhập; video không có phụ đề sẽ báo lỗi thay vì tạo bằng AI.',
      },
      en: {
        title: 'Download Bilibili subtitles free | AutoReel',
        description:
          'Paste a public Bilibili link to save the subtitles the platform provides. Free, no login; videos without subtitles report that instead of inventing them.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải phụ đề Bilibili về máy',
        lead:
          'Dán link video Bilibili công khai, chọn Phụ đề, rồi tải file phụ đề mà video đang cung cấp. Không cần đăng nhập.',
        points: ['Phụ đề do nền tảng cung cấp', 'Giữ định dạng gốc', 'Không cần tài khoản'],
        intro:
          'Bilibili thường có phụ đề tiếng Trung do người đăng tải lên, nhưng không phải video nào cũng có. Trang này đọc track phụ đề mà video công khai; nếu không có, nó báo không có phụ đề thay vì tự sinh bằng AI. Định dạng phụ thuộc nguồn — thường là SRT, VTT hoặc ASS.',
        steps: [
          ['Sao chép link video', 'Mở video trên bilibili.com, sao chép địa chỉ dạng /video/BV…'],
          ['Chọn Phụ đề', 'Dán link, chọn loại file Phụ đề, rồi gửi.'],
          ['Tải file phụ đề', 'Chờ vài giây rồi bấm Download.'],
        ],
        notes: [
          'Chỉ video công khai; video cần đăng nhập, video thành viên hoặc bị giới hạn khu vực có thể không lấy được.',
          'Phụ đề là track do Bilibili cung cấp; trang không tạo phụ đề bằng AI.',
          'Định dạng theo nguồn: SRT, VTT hoặc ASS. Tên file giữ phần mở rộng gốc.',
          'Tối đa 5 link một lần; file phụ đề rất nhẹ, tự xoá sau khoảng 2 giờ và link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Tải phụ đề Bilibili có cần tài khoản không?', 'Không. Chỉ cần link video công khai và video có track phụ đề.'],
          ['Video Bilibili không có phụ đề thì sao?', 'Trang báo không có phụ đề. Nó không tự sinh phụ đề bằng AI.'],
          ['File phụ đề Bilibili có tiếng Việt không?', 'Phụ đề là bản nền tảng đang có, thường là tiếng Trung nếu người đăng tải lên bản đó. Trang không dịch phụ đề.'],
          ['Có tải được nhiều video một lần không?', 'Có, tối đa 5 link mỗi lần; mỗi video một file.'],
        ],
      },
      en: {
        h1: 'Download Bilibili subtitles',
        lead:
          'Paste a public Bilibili video link, choose Subtitles, and save the caption track the video provides. No login.',
        points: ['Platform-provided subtitles', 'Original format kept', 'No account needed'],
        intro:
          'Bilibili videos often carry Chinese subtitles uploaded by the creator, but not all of them do. This page reads the caption track the public video exposes; when there is none it reports that instead of generating one with AI. The format follows the source — usually SRT, VTT or ASS.',
        steps: [
          ['Copy the video link', 'Open the video on bilibili.com and copy the /video/BV… address.'],
          ['Choose Subtitles', 'Paste the link, choose the Subtitles file type, and submit.'],
          ['Save the file', 'Wait a few seconds, then press Download.'],
        ],
        notes: [
          'Public videos only; login-only, members-only or region-restricted videos may not be fetched.',
          'The captions are the track Bilibili provides; the page does not generate subtitles with AI.',
          'Format follows the source: SRT, VTT or ASS. The file name keeps the original extension.',
          'Up to five links at a time; subtitle files are tiny, deleted after about 2 hours, with download links valid for 30 minutes.',
        ],
        faq: [
          ['Do I need a Bilibili account?', 'No. A public video link and a video with a caption track are enough.'],
          ['What if the Bilibili video has no subtitles?', 'The page reports that there are none. It does not generate subtitles with AI.'],
          ['Are Bilibili subtitles in Vietnamese?', 'They are whatever the platform carries, usually Chinese when the creator uploaded a Chinese track. The page does not translate subtitles.'],
          ['Can I download several videos at once?', 'Yes, up to five links per submission, one file per video.'],
        ],
      },
    },
  },
];

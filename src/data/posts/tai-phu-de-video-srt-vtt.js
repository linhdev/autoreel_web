/**
 * Blog post — "Tải phụ đề video: SRT, VTT và track nền tảng".
 *
 * Supports the two subtitle downloader pages. The point is to separate three
 * things people call "subtitles": the sidecar file, the burned-in captions, and
 * the platform's auto-generated track — and to be honest that the downloader
 * returns the last one and never invents a transcript.
 */
export default {
  slug: {
    vi: 'tai-phu-de-video-srt-vtt',
    en: 'download-video-subtitles',
  },
  title: {
    vi: 'Tải phụ đề video: SRT, VTT và track của nền tảng',
    en: 'Downloading video subtitles: SRT, VTT and platform tracks',
  },
  description: {
    vi: 'Phụ đề SRT/VTT là gì, nền tảng nào cung cấp track phụ đề, cách tải về và dùng trong trình dựng — cùng giới hạn: không tự sinh phụ đề bằng AI.',
    en: 'What SRT and VTT subtitles are, which platforms expose a track, how to download one and use it in an editor — and the limit: no AI-generated transcripts.',
  },
  date: '2026-10-27',
  minutes: { vi: 7, en: 7 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: 'Có ba thứ thường được gọi chung là “phụ đề”: file phụ đề rời, phụ đề đã cháy vào hình, và track phụ đề do nền tảng tự tạo. Chúng không giống nhau, và chỉ một trong ba là thứ bạn tải về rồi mở trong trình dựng được. Bài này nói rõ loại nào là loại nào và cách lấy đúng loại.',
    en: 'Three different things are called “subtitles”: a sidecar file, captions burned into the picture, and a track the platform generated. They are not the same, and only one of them is something you can download and open in an editor. This article separates them and shows how to get the right one.',
  },
  body: {
    vi: [
      { h2: 'Ba nghĩa của chữ “phụ đề”' },
      {
        p: 'File phụ đề rời là một file văn bản chứa thời gian và lời thoại, đi kèm video nhưng không nằm trong hình. Nó sửa được, dịch được, đổi font được. Đây là thứ trình dựng cần.',
      },
      {
        p: 'Phụ đề cháy vào hình là chữ đã được render vào từng khung. Bạn nhìn thấy nó, nhưng không tách ra thành file được — muốn sửa phải che đi hoặc dựng lại. Nhiều video ngắn trên TikTok và Reels dùng cách này vì nó hiển thị giống nhau trên mọi máy.',
      },
      {
        p: 'Track phụ đề của nền tảng là dữ liệu đi kèm video trên YouTube, Bilibili hoặc một nền tảng khác. Nó có thể do người đăng tải lên hoặc do nền tảng tự tạo. Trang tải phụ đề của AutoReel đọc đúng track này; nó không đọc chữ đã cháy trong hình và không tự sinh phụ đề mới.',
      },
      {
        note: 'Nếu video chỉ có phụ đề cháy vào hình, không có cách tải “file phụ đề” từ nó. Cần một bước nhận dạng giọng nói riêng, và bước đó không nằm trong công cụ tải video.',
      },

      { h2: 'Nền tảng nào có track phụ đề?' },
      {
        p: 'YouTube là nguồn ổn định nhất: phần lớn video có track do người tạo tải lên hoặc bản tự tạo. Bilibili thường có phụ đề tiếng Trung do người đăng tải, nhưng không phải video nào cũng có. TikTok đôi khi có caption do người tạo thêm, nhưng không phổ biến như YouTube. Douyin và iQiyi thường không cung cấp track phụ đề công khai; nếu không có, trang báo không có phụ đề thay vì tạo một bản bằng AI.',
      },
      {
        p: 'Đây là lý do nên thử đúng video mình cần trước khi dựng cả quy trình quanh việc tải phụ đề. Một video không có track sẽ không có file, dù tool tốt đến đâu.',
      },

      { h2: 'SRT, VTT, ASS: chọn định dạng nào' },
      {
        ul: [
          'SRT là định dạng phổ biến nhất: chỉ có thời gian, số thứ tự và lời thoại. Hầu hết trình dựng, YouTube và phụ đề mềm đều đọc được. Ít style, nên hợp với phụ đề cần sửa nội dung.',
          'VTT giống SRT nhưng có thêm header và hỗ trợ style/cue nhất định. Đây là định dạng chuẩn cho web và thường được trình phát HTML5 dùng.',
          'ASS mang được style, vị trí và hiệu ứng. Nó mạnh khi cần trình bày đẹp, nhưng không phải trình dựng nào cũng đọc đúng; nhập vào có thể mất style.',
          'TTML/DFXP và TT thường gặp ở phụ đề của các nền tảng lớn hoặc phụ đề truyền hình. Nếu cần dùng trong trình dựng, thường phải chuyển sang SRT/VTT trước.',
        ],
      },
      {
        p: 'Trang tải phụ đề giữ đúng định dạng nền tảng trả về, không ép sang một định dạng khác. Nếu bạn cần SRT mà nguồn trả VTT, hãy chuyển đổi sau khi tải; ép ở phía tool dễ làm mất thời gian hoặc mất dòng.',
      },

      { h2: 'Chuyển đổi định dạng mà không làm hỏng thời gian' },
      {
        p: 'Nếu file nguồn không phải định dạng trình dựng cần, hãy chuyển đổi sau khi tải và kiểm tra lại thời gian ở ba chỗ: dòng đầu, dòng giữa và dòng cuối. Lỗi chuyển đổi thường không làm mất chữ; nó làm lệch giờ hoặc gộp hai dòng thành một.',
      },
      {
        ul: [
          'Giữ file gốc cho đến khi bản chuyển đổi đã được kiểm tra. Chuyển đổi qua nhiều bước dễ mất dòng hơn một bước.',
          'Lưu bằng UTF-8. Tên riêng tiếng Việt và tiếng Trung sẽ hỏng nếu file bị lưu bằng bảng mã cũ.',
          'Giữ mỗi dòng dưới khoảng 42 ký tự nếu phụ đề sẽ hiển thị trên điện thoại; dòng dài sẽ bị xuống hàng ở chỗ bạn không kiểm soát.',
          'Nếu file có style ASS, hãy kiểm tra xem trình dựng có đọc style không. Không đọc thì chuyển sang SRT để giữ nội dung, chấp nhận mất style.',
        ],
      },

      { h2: 'Cách tải phụ đề từ YouTube và Bilibili' },
      {
        p: 'Với YouTube, mở video công khai, sao chép link, dán vào [trang tải phụ đề YouTube](/tai-phu-de-youtube/), chọn loại file Phụ đề, rồi tải. Với Bilibili, làm tương tự trên [trang tải phụ đề Bilibili](/tai-phu-de-bilibili/). Không cần đăng nhập, không cần cài tiện ích.',
      },
      {
        p: 'Công cụ nhận tối đa 5 link một lần; mỗi video một file. File phụ đề rất nhẹ, nên thời gian chờ chủ yếu là thời gian lấy metadata, không phải thời gian tải file. File trên máy chủ tự xoá sau khoảng 2 giờ và link tải hết hạn sau 30 phút — hãy tải về trước khi đi ăn trưa, đừng để qua ngày.',
      },
      {
        p: 'Nếu bạn cần tải cả video, [công cụ tải video](/downloads/) làm được việc đó; còn phụ đề là một loại file riêng, không phải một tuỳ chọn của video. Chọn đúng tab trước khi gửi link để không phải chờ hai lần.',
      },

      { h2: 'Dùng file phụ đề sau khi tải' },
      {
        p: 'Trong CapCut, Premiere hoặc DaVinci, file SRT/VTT thường được nhập như một track phụ đề riêng, không phải Track 1. Giữ file gốc, đừng sửa trực tiếp lên nó; tạo bản sao nếu cần chỉnh thời gian. Nếu phụ đề lệch vài giây so với hình, sửa offset của cả track thay vì kéo từng dòng.',
      },
      {
        p: 'Nếu bạn dùng phụ đề để làm lời bình, hãy đọc lại và viết lại. Phụ đề của nền tảng thường là bản ghi lời thoại, không phải lời bình; nó thiếu chủ ngữ, thiếu ngữ cảnh và sai tên riêng. Xem [phụ đề và chữ trên video ngắn](/blog/phu-de-va-chu-tren-video-ngan/) để biết cách rút gọn câu cho màn hình dọc.',
      },

      { h2: 'Khi video không có phụ đề' },
      {
        p: 'Có ba lựa chọn, và không lựa chọn nào là “tool tự sinh phụ đề”: nhờ người tạo video bật phụ đề, tự gõ lại từ đoạn thoại, hoặc dùng một công cụ nhận dạng giọng nói riêng rồi tự chịu trách nhiệm về độ chính xác. AutoReel không làm bước nhận dạng này trong công cụ tải video, vì một bản phụ đề bịa sẽ khó phát hiện hơn một file không có.',
      },
      {
        p: 'Với video của chính bạn, cách rẻ nhất là bật phụ đề ngay trên nền tảng trước khi tải. Với video của người khác, hãy kiểm tra quyền sử dụng trước khi tải phụ đề về và dùng lại — phụ đề cũng là tác phẩm, không chỉ là dữ liệu.',
      },
    ],
    en: [
      { h2: 'Three meanings of “subtitles”' },
      {
        p: 'A sidecar subtitle file is a text file of timings and lines that travels with the video but is not inside the picture. It can be edited, translated and restyled. This is what an editor needs.',
      },
      {
        p: 'Burned-in subtitles are characters rendered into every frame. You can see them, but you cannot extract them into a file; changing them means covering them or rebuilding the video. Many TikTok and Reels videos use this because it looks the same on every device.',
      },
      {
        p: 'A platform subtitle track is data attached to the video on YouTube, Bilibili or another platform. It may be uploaded by the creator or generated by the platform. AutoReel’s subtitle downloader reads this track; it does not read burned-in text and does not invent a new transcript.',
      },
      {
        note: 'If a video only has burned-in subtitles, there is no “subtitle file” to download from it. That needs a separate speech-recognition step, and that step is not part of a video downloader.',
      },

      { h2: 'Which platforms expose a track?' },
      {
        p: 'YouTube is the most reliable: most videos have a creator-uploaded track or an auto-generated one. Bilibili often has Chinese subtitles uploaded by the creator, but not every video. TikTok sometimes has captions added by the creator, though less consistently than YouTube. Douyin and iQiyi rarely expose a public subtitle track; when there is none, the page reports that instead of generating one with AI.',
      },
      {
        p: 'That is why you should test the exact video you need before building a process around subtitle downloads. A video with no track has no file, however good the tool is.',
      },

      { h2: 'SRT, VTT, ASS: which format' },
      {
        ul: [
          'SRT is the most common: timings, an index and the line. Most editors, YouTube and soft-subtitle players read it. It carries little styling, which makes it good for subtitles whose text you need to edit.',
          'VTT is close to SRT but has a header and some styling/cue support. It is the web standard and what HTML5 players usually expect.',
          'ASS carries styling, position and effects. It is powerful for presentation, but not every editor reads it correctly; importing it may drop the styling.',
          'TTML/DFXP and TT appear in subtitles from large platforms or broadcast. Using them in an editor usually means converting to SRT or VTT first.',
        ],
      },
      {
        p: 'The downloader keeps the format the platform returns rather than forcing one. If you need SRT and the source returns VTT, convert it after downloading; forcing it on the tool side is a good way to lose timings or lines.',
      },

      { h2: 'Converting without breaking the timing' },
      {
        p: 'If the source file is not the format your editor needs, convert it after downloading and check the timing in three places: the first line, the middle and the last. A conversion error usually does not drop text; it shifts the time or merges two lines into one.',
      },
      {
        ul: [
          'Keep the original until the converted file has been checked. Converting through several steps loses lines more often than one step.',
          'Save as UTF-8. Vietnamese and Chinese names break if the file is saved in an old code page.',
          'Keep each line under about 42 characters if the subtitles will be read on a phone; longer lines wrap where you cannot control them.',
          'If the file uses ASS styling, check whether the editor reads it. If not, convert to SRT to keep the text and accept losing the styling.',
        ],
      },

      { h2: 'How to download from YouTube and Bilibili' },
      {
        p: 'For YouTube, open a public video, copy the link, paste it into the [YouTube subtitle page](/en/download-youtube-subtitles/), choose Subtitles, and download. For Bilibili, do the same on the [Bilibili subtitle page](/en/download-bilibili-subtitles/). No login and no extension.',
      },
      {
        p: 'The tool accepts up to five links at a time, one file per video. Subtitle files are tiny, so the wait is mostly metadata, not transfer. Server files are deleted after about two hours and download links expire after thirty minutes — save the file before lunch, not the next day.',
      },
      {
        p: 'If you need the video too, the [video downloader](/en/downloads/) does that; subtitles are a separate file type, not an option on the video. Choose the right tab before submitting so you do not wait twice.',
      },

      { h2: 'Using the file afterwards' },
      {
        p: 'In CapCut, Premiere or DaVinci, an SRT/VTT file is usually imported as a separate subtitle track, not Track 1. Keep the original file and edit a copy if you need to change timings. If the subtitles drift by a few seconds, change the offset of the whole track instead of dragging each line.',
      },
      {
        p: 'If you use subtitles as a script, read and rewrite them. Platform subtitles are a transcript of dialogue, not narration; they lack subjects, context and often get names wrong. See [subtitles and on-screen text](/en/blog/subtitles-and-on-screen-text/) for shortening lines for a vertical screen.',
      },

      { h2: 'When a video has no subtitles' },
      {
        p: 'There are three options, and none is “the tool invents subtitles”: ask the creator to enable them, type them out yourself, or use a separate speech-recognition tool and own the accuracy. AutoReel does not run speech recognition inside the video downloader, because a fabricated transcript is harder to notice than a missing file.',
      },
      {
        p: 'For your own videos, the cheapest route is to enable subtitles on the platform before downloading. For someone else’s video, check the rights before downloading and reusing the subtitles — a subtitle file is a work too, not just data.',
      },
    ],
  },
  faq: {
    vi: [
      ['Tải phụ đề YouTube có cần đăng nhập không?', 'Không. Chỉ cần link video công khai và video có track phụ đề. Trang tải phụ đề YouTube nhận tối đa 5 link một lần.'],
      ['File tải về là SRT hay VTT?', 'Tuỳ nguồn. Trang giữ định dạng nền tảng trả về; phổ biến là SRT hoặc VTT, có video trả ASS, TTML/DFXP hoặc TT.'],
      ['Video không có phụ đề thì có cách nào tải không?', 'Không có file để tải. Cần nhờ người tạo bật phụ đề, tự gõ lại, hoặc dùng công cụ nhận dạng giọng nói riêng. AutoReel không tự sinh phụ đề bằng AI.'],
      ['Có tải được phụ đề của video riêng tư không?', 'Không. Công cụ chỉ đọc video công khai; video riêng tư hoặc chỉ thành viên xem sẽ không lấy được.'],
      ['Phụ đề tải về dùng trong CapCut được không?', 'Được, nếu là SRT hoặc VTT. Nhập như một track phụ đề riêng và giữ file gốc; ASS có thể mất style tuỳ phiên bản trình dựng.'],
    ],
    en: [
      ['Do I need to log in to download YouTube subtitles?', 'No. A public video link and a video with a caption track are enough. The YouTube subtitle page accepts up to five links at a time.'],
      ['Is the file SRT or VTT?', 'Depends on the source. The page keeps the platform’s format; SRT and VTT are the most common, while some videos return ASS, TTML/DFXP or TT.'],
      ['What if a video has no subtitles?', 'There is no file to download. Ask the creator to enable them, type them out, or use a separate speech-recognition tool. AutoReel does not generate subtitles with AI.'],
      ['Can I download subtitles from a private video?', 'No. The tool only reads public videos; private or members-only videos cannot be fetched.'],
      ['Can I use the file in CapCut?', 'Yes, if it is SRT or VTT. Import it as a separate subtitle track and keep the original; ASS may lose styling depending on the editor version.'],
    ],
  },
};

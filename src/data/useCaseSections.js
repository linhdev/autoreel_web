/**
 * Long-form copy for the two non-subtitle use-case pages.
 *
 * `downloadUseCases.js` gives each page its hero, form and first FAQ. Those
 * pages were 389–465 words, which is thin for a page whose whole job is to
 * answer "how do I get the audio / the cover". These blocks add the part a
 * searcher actually needs: when to use this output instead of the video, which
 * format to pick, and what the file does not give you.
 *
 * Keys match `USE_CASE_PAGES[].key`; the builder falls back to
 * `SUBTITLE_SECTIONS` for the subtitle pages, so the two data sets stay
 * separate rather than one file pretending to be about both.
 */
export const USE_CASE_SECTIONS = {
  'tiktok-audio': {
    vi: {
      sections: [
        {
          h2: 'Khi nào nên tải âm thanh thay vì video',
          paragraphs: [
            'Nếu bạn chỉ cần nhạc nền, câu nói hoặc hiệu ứng, tải cả video rồi tách âm thanh là thêm một bước và thêm dung lượng. Trang này trả thẳng file âm thanh.',
            'Âm thanh phù hợp để nghe lại, làm nhạc nền cho video khác, hoặc lưu một câu nói làm tư liệu. Nó không thay thế bản gốc của tác giả và không làm bạn sở hữu đoạn nhạc đó.',
          ],
          bullets: [
            'Cần nghe lại một đoạn podcast hoặc clip: tải MP3.',
            'Cần ghép vào video khác: M4A hoặc WAV.',
            'Cần lưu câu nói hoặc voice: MP3 là đủ.',
            'Không cần hình: đừng tải cả video.',
          ],
        },
        {
          h2: 'MP3, M4A hay WAV',
          paragraphs: [
            'Ba định dạng khác nhau ở dung lượng và cách dùng, không phải ở chuyện “định dạng này cao cấp hơn”. File được chuyển từ track âm thanh của video, không phải master của tác giả.',
            'Chất lượng file không vượt qua chất lượng nguồn: chuyển một track bitrate thấp sang WAV không làm nó chi tiết hơn.',
          ],
          table: {
            head: ['Định dạng', 'Dung lượng', 'Phù hợp'],
            rows: [
              ['MP3', 'Nhỏ', 'Nghe, chia sẻ, làm nhạc nền'],
              ['M4A', 'Nhỏ hơn MP3 cùng chất lượng', 'Ghép vào video, giữ chất lượng AAC'],
              ['WAV', 'Rất lớn', 'Clip ngắn cần xử lý tiếp'],
            ],
          },
        },
        {
          h2: 'Dùng âm thanh đúng cách',
          paragraphs: [
            'Tải được không có nghĩa là được dùng lại. Nhạc và giọng trong video thuộc về tác giả hoặc nền tảng; bạn cần quyền nếu dùng cho mục đích công khai.',
            'Giữ lại link nguồn và tên tác giả để biết mình đang dùng gì. Nếu dùng cho video thương mại, kiểm tra giấy phép trước khi đăng.',
          ],
          bullets: [
            'Dùng cá nhân: nghe lại, ghi chú, lưu trữ.',
            'Dùng công khai: cần quyền hoặc nhạc royalty-free.',
            'Không đăng lại nguyên bản nhạc của người khác.',
            'Không gỡ watermark hoặc DRM.',
          ],
        },
        {
          h2: 'Lỗi thường gặp',
          bullets: [
            'Video riêng tư: không tải được; đổi sang link công khai.',
            'Video dài quá 20 phút: cắt bớt hoặc dùng công cụ khác.',
            'File quá 95MB: chọn video ngắn hơn.',
            'MP3 im hoặc lỗi: kiểm tra video gốc có tiếng không.',
          ],
        },
      ],
      table: {
        head: ['Thông số', 'Giá trị'],
        rows: [
          ['Loại link', 'tiktok.com/@kenh/video/…, vm.tiktok.com/…'],
          ['Định dạng', 'MP3, M4A, WAV'],
          ['Thời lượng tối đa', '20 phút'],
          ['Dung lượng tối đa', '95MB'],
          ['Thời gian xử lý', '30–60 giây'],
          ['Lưu file trên máy chủ', 'khoảng 2 giờ'],
        ],
      },
      related: [
        { href: '/tai-video-tiktok/', label: 'Tải video TikTok' },
        { href: '/blog/reup-video-khong-bi-danh-ban-quyen/', label: 'Reup video không bị đánh bản quyền' },
        { href: '/blog/phu-de-va-chu-tren-video-ngan/', label: 'Phụ đề và chữ trên video ngắn' },
        { href: '/downloads/', label: 'Công cụ tải video' },
      ],
      faq: [
        [
          'Có tách được nhạc nền khỏi giọng nói không?',
          'Không. Trang trả toàn bộ track âm thanh của video; muốn tách riêng nhạc và giọng cần công cụ khác.',
        ],
        [
          'Có tải được âm thanh từ video riêng tư không?',
          'Không. Chỉ video công khai mới tải được.',
        ],
        [
          'File MP3 có bị gắn logo không?',
          'Không. File là track âm thanh tách từ video nguồn, không thêm logo hay giọng đọc.',
        ],
        [
          'Có dùng cho video thương mại được không?',
          'Chỉ khi bạn có quyền sử dụng. Tải file không tạo ra quyền với nội dung của tác giả.',
        ],
      ],
    },
    en: {
      sections: [
        {
          h2: 'When to take the audio instead of the video',
          paragraphs: [
            'If you only need the music, a line or an effect, downloading the whole video and then extracting the sound is an extra step and extra disk. This page returns the audio file directly.',
            'Audio is useful for listening back, for a music bed in another video, or for keeping a line as reference. It does not replace the creator’s original, and it does not make you the owner of the track.',
          ],
          bullets: [
            'Listening back to a podcast or clip: MP3.',
            'Putting it under another video: M4A or WAV.',
            'Keeping a line or a voice: MP3 is enough.',
            'You do not need the picture: do not download the whole video.',
          ],
        },
        {
          h2: 'MP3, M4A or WAV',
          paragraphs: [
            'The three differ in size and use, not in which one is “more professional”. The file is converted from the video’s audio track, not the artist’s master.',
            'The file cannot exceed the source: converting a low-bitrate track to WAV does not make it more detailed.',
          ],
          table: {
            head: ['Format', 'Size', 'Best for'],
            rows: [
              ['MP3', 'Small', 'Listening, sharing, a music bed'],
              ['M4A', 'Smaller than MP3 at the same quality', 'Putting under video, keeping AAC quality'],
              ['WAV', 'Very large', 'Short clips that need further processing'],
            ],
          },
        },
        {
          h2: 'Using the audio lawfully',
          paragraphs: [
            'Being able to download it does not mean you may republish it. The music and voice belong to the creator or the platform; you need permission for public use.',
            'Keep the source link and the creator’s name so you know what you are using. For commercial video, check the licence before publishing.',
          ],
          bullets: [
            'Personal use: listening back, notes, an archive.',
            'Public use: permission or royalty-free music.',
            'Do not repost someone else’s track as your own.',
            'Do not remove watermarks or DRM.',
          ],
        },
        {
          h2: 'Common failures',
          bullets: [
            'Private video: cannot be fetched; use a public link.',
            'Longer than 20 minutes: trim it or use another tool.',
            'File over 95MB: pick a shorter video.',
            'Silent or broken MP3: check that the source video has sound.',
          ],
        },
      ],
      table: {
        head: ['Fact', 'Value'],
        rows: [
          ['Link types', 'tiktok.com/@channel/video/…, vm.tiktok.com/…'],
          ['Formats', 'MP3, M4A, WAV'],
          ['Maximum length', '20 minutes'],
          ['Maximum size', '95MB'],
          ['Processing time', '30–60 seconds'],
          ['Server retention', 'about 2 hours'],
        ],
      },
      related: [
        { href: '/en/download-tiktok/', label: 'Download TikTok videos' },
        { href: '/en/blog/reuploading-without-copyright-strikes/', label: 'Reuploading without copyright strikes' },
        { href: '/en/blog/subtitles-and-on-screen-text/', label: 'Subtitles and on-screen text' },
        { href: '/en/downloads/', label: 'The video downloader' },
      ],
      faq: [
        [
          'Can it separate music from voice?',
          'No. The page returns the whole audio track; separating music from speech needs a different tool.',
        ],
        [
          'Can it download audio from a private video?',
          'No. Public videos only.',
        ],
        [
          'Is a logo added to the MP3?',
          'No. The file is the audio track taken from the source video; no logo or voice-over is added.',
        ],
        [
          'Can I use it in commercial video?',
          'Only if you have the rights. Downloading the file does not grant rights to the creator’s content.',
        ],
      ],
    },
  },

  'youtube-cover': {
    vi: {
      sections: [
        {
          h2: 'Khi nào cần ảnh bìa',
          paragraphs: [
            'Ảnh bìa dùng để làm thumbnail cho bài đăng lại, ảnh xem trước hoặc tư liệu. Nếu chỉ cần một khung hình, không cần tải cả video.',
            'Trang ưu tiên thumbnail công khai của video; nếu video không có thumbnail, lấy khung hình ở khoảng giây thứ hai.',
          ],
          bullets: [
            'Cần thumbnail cho bài đăng lại: dùng ảnh bìa chính thức.',
            'Cần ảnh minh hoạ cho ghi chú: dùng khung hình giây thứ hai.',
            'Cần ảnh đúng khung hình bạn muốn: tự chụp từ video.',
            'Không cần hình động: đừng tải cả video.',
          ],
        },
        {
          h2: 'Ảnh bìa lấy từ đâu',
          bullets: [
            'Thumbnail do nền tảng cung cấp: đúng ảnh chủ video chọn.',
            'Khung hình giây thứ hai: ảnh của video, không phải ảnh chính thức.',
            'Kích thước phụ thuộc video; không phải video nào cũng có ảnh lớn.',
            'Không tải được ảnh bìa của video riêng tư.',
          ],
          paragraphs: [
            'Vì vậy, cùng một link có thể ra ảnh bìa khác nhau tuỳ video. Nếu cần ảnh lớn để in hoặc thiết kế, kiểm tra kích thước file trước khi dùng.',
            'Nếu ảnh quá nhỏ để dùng, cách chắc nhất là mở video và chụp đúng khung bạn cần.',
          ],
        },
        {
          h2: 'Dùng ảnh bìa đúng cách',
          paragraphs: [
            'Ảnh bìa thuộc quyền của tác giả hoặc nền tảng. Dùng lại công khai cần quyền, trừ khi bạn là chủ video hoặc có giấy phép.',
          ],
          bullets: [
            'Không dùng ảnh bìa của người khác làm thumbnail cho video của bạn.',
            'Giữ link nguồn để ghi nguồn khi cần.',
            'Ảnh có thể chứa chữ hoặc logo; kiểm tra trước khi dùng.',
            'Không chỉnh sửa để gây hiểu nhầm về nguồn.',
          ],
        },
        {
          h2: 'Ảnh bìa và ảnh chụp khung hình khác gì',
          table: {
            head: ['Loại', 'Nguồn', 'Dùng cho'],
            rows: [
              ['Ảnh bìa', 'Thumbnail nền tảng', 'Thumbnail, ảnh xem trước'],
              ['Khung hình giây 2', 'Cắt từ video', 'Tư liệu, ảnh minh hoạ'],
              ['Ảnh chụp màn hình', 'Tự chụp', 'So sánh, ghi chú'],
            ],
          },
          paragraphs: [
            'Nếu cần ảnh đúng ý, tự chụp khung hình hoặc dùng ảnh bìa chính thức từ chủ video.',
          ],
        },
      ],
      table: {
        head: ['Thông số', 'Giá trị'],
        rows: [
          ['Loại link', 'youtube.com/watch?v=…, youtu.be/…'],
          ['Định dạng', 'JPEG'],
          ['Nguồn ảnh', 'Thumbnail công khai hoặc khung hình giây 2'],
          ['Kích thước', 'Tuỳ video'],
          ['Thời gian xử lý', 'vài giây'],
        ],
      },
      related: [
        { href: '/tai-video-youtube/', label: 'Tải video YouTube' },
        { href: '/tai-phu-de-youtube/', label: 'Tải phụ đề YouTube' },
        { href: '/blog/video-doc-hay-video-ngang/', label: 'Video dọc hay video ngang' },
        { href: '/downloads/', label: 'Công cụ tải video' },
      ],
      faq: [
        [
          'Có lấy được ảnh bìa chất lượng cao nhất không?',
          'Trang trả ảnh bìa mà nền tảng cung cấp. Nếu video không có bản lớn, file sẽ nhỏ hơn.',
        ],
        [
          'Video không có ảnh bìa thì sao?',
          'Trang lấy một khung hình ở khoảng giây thứ hai để vẫn có ảnh dùng được.',
        ],
        [
          'Có tải được ảnh bìa video riêng tư không?',
          'Không. Chỉ video công khai mới tải được.',
        ],
        [
          'Ảnh có logo hoặc tên kênh không?',
          'Có thể. Ảnh là ảnh nguồn; trang không xoá logo hay chữ có sẵn.',
        ],
      ],
    },
    en: {
      sections: [
        {
          h2: 'When you need the cover',
          paragraphs: [
            'A cover is useful as a thumbnail for a repost, a preview image or reference. If you only need one frame, there is no reason to download the whole video.',
            'The page prefers the video’s public thumbnail; when there is none, it takes a frame at about the second mark.',
          ],
          bullets: [
            'A thumbnail for a repost: use the official cover.',
            'An illustration for notes: use the frame at second two.',
            'A specific frame you want: capture it yourself.',
            'You do not need moving pictures: do not download the video.',
          ],
        },
        {
          h2: 'Where the cover comes from',
          bullets: [
            'The platform thumbnail: the image the creator chose.',
            'The frame at second two: a picture from the video, not the official cover.',
            'Size depends on the video; not every video has a large image.',
            'Private videos cannot be fetched.',
          ],
          paragraphs: [
            'So the same kind of link can produce different covers depending on the video. If you need a large image for print or design, check the file dimensions before using it.',
            'If the image is too small to use, the surest route is to open the video and capture the exact frame you need.',
          ],
        },
        {
          h2: 'Using a cover lawfully',
          paragraphs: [
            'The cover belongs to the creator or the platform. Reusing it publicly needs permission unless you own the video or have a licence.',
          ],
          bullets: [
            'Do not use someone else’s cover as the thumbnail for your own video.',
            'Keep the source link so you can credit it.',
            'The image may contain text or a logo; check before using it.',
            'Do not edit it to mislead people about the source.',
          ],
        },
        {
          h2: 'Cover versus a captured frame',
          table: {
            head: ['Type', 'Source', 'Used for'],
            rows: [
              ['Cover', 'Platform thumbnail', 'Thumbnail, preview image'],
              ['Frame at second two', 'Cut from the video', 'Reference, illustration'],
              ['Screenshot', 'You capture it', 'Comparison, notes'],
            ],
          },
          paragraphs: [
            'If you need an exact image, capture the frame yourself or use the official cover from the creator.',
          ],
        },
      ],
      table: {
        head: ['Fact', 'Value'],
        rows: [
          ['Link types', 'youtube.com/watch?v=…, youtu.be/…'],
          ['Format', 'JPEG'],
          ['Image source', 'Public thumbnail or a frame at second two'],
          ['Size', 'Depends on the video'],
          ['Processing time', 'a few seconds'],
        ],
      },
      related: [
        { href: '/en/download-youtube/', label: 'Download YouTube videos' },
        { href: '/en/download-youtube-subtitles/', label: 'Download YouTube subtitles' },
        { href: '/en/blog/vertical-or-horizontal/', label: 'Vertical or horizontal video' },
        { href: '/en/downloads/', label: 'The video downloader' },
      ],
      faq: [
        [
          'Can it get the highest-resolution cover?',
          'The page returns the cover the platform provides. If the video has no large version, the file is smaller.',
        ],
        [
          'What if the video has no cover?',
          'It takes a frame at about the second mark so there is still an image to use.',
        ],
        [
          'Can it download a private video’s cover?',
          'No. Public videos only.',
        ],
        [
          'Does the image contain a logo or channel name?',
          'It may. The image is the source image; the page does not remove existing logos or text.',
        ],
      ],
    },
  },
};

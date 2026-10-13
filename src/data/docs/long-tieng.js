/**
 * Lồng tiếng — one source, N languages, N videos.
 *
 * The sidebar's word is **Lồng tiếng** (`ui.nav.translate`) and the page's own
 * heading is **Dịch video** (`vt.title`); both are named in the prose, because
 * a reader with the app open has to reconcile the two. Everything else is read
 * off `translations.py` — the two source radios are `vt.source_link` and
 * `vt.source_file`, the run button is `vt.translate`, and the engine labels
 * come from the voice-engine registry so they move with the language.
 *
 * The ceiling is not prose: `MAX_JOBS_PER_BATCH = 40` in the screen's own file,
 * and the app refuses the run before starting it rather than dropping the jobs
 * that do not fit.
 */
export default {
  key: 'long-tieng',
  group: 'rework',
  slug: { vi: 'long-tieng', en: 'translate' },
  updated: '2026-10-13',
  order: 1,
  title: { vi: 'Lồng tiếng', en: 'Dubbing' },
  description: {
    vi: 'Lồng tiếng một hoặc nhiều video sang ngôn ngữ khác: chọn nguồn, chọn giọng, và những giới hạn cần biết trước khi bấm Dịch.',
    en: 'Dub one video or a batch into other languages: choosing the source, the voice, and the limits worth knowing before you press Translate.',
  },
  lead: {
    vi: 'Một video nguồn, ba ngôn ngữ đích — ba video. Màn này **không cắt gì của bản gốc**: nó đọc lời, dịch, rồi đọc lại bằng giọng mới.',
    en: 'One source video, three target languages — three videos. This screen **changes nothing about the original**: it reads the speech, translates it, and speaks it again in a new voice.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/long-tieng-01-screen-vi.webp',
          alt: 'Màn Lồng tiếng trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Chọn nguồn' },
      {
        p: 'Sidebar gọi màn này là **Lồng tiếng**; tựa trong trang là **Dịch video**. Cùng một màn hình, và nó nhận cả một danh sách nguồn một lúc.',
      },
      {
        steps: [
          {
            title: 'Chọn nguồn ở ô Nguồn',
            body: 'Hai lựa chọn: **Link video (YouTube / TikTok / Douyin)** hoặc **File trong máy**. Chọn cái nào thì ô nhập của cái đó hiện ra.',
          },
          {
            title: 'Dán link',
            body: 'Vào ô **Link video (mỗi dòng một link)** — một link một dòng, dán cả danh sách trong một lần.',
          },
          {
            title: 'Hoặc chọn file',
            body: 'Ở ô **File video — chọn hoặc kéo thả nhiều file một lúc**. Kéo thả nhiều file cùng lúc cũng được, không phải làm từng cái.',
          },
        ],
      },

      { h2: 'Giọng đọc và ngôn ngữ đích' },
      {
        steps: [
          {
            title: 'Chọn engine',
            body: '**Engine đọc văn bản thành tiếng** liệt kê các engine của app. Engine nào bản dựng này không chạy được thì tên có thêm đuôi **— không khả dụng**. Nút **Nghe thử** đọc một câu mẫu bằng đúng engine, ngôn ngữ và tốc độ đang chọn — nghe trước rồi hãy dịch cả loạt.',
          },
          {
            title: 'Chọn ngôn ngữ đích',
            body: 'Ô **Ngôn ngữ** chọn được nhiều ngôn ngữ một lúc. Mỗi ngôn ngữ sinh ra một video riêng từ cùng một nguồn, nên hai video nguồn với ba ngôn ngữ là sáu video.',
          },
          {
            title: 'Chọn giọng và tốc độ',
            body: 'Ô **Giọng đọc** chọn giọng trong danh sách của engine. Thanh **Tốc độ đọc** chỉnh nhanh chậm: **1.0 là tốc độ gốc của giọng đọc**, lớn hơn là nhanh hơn.',
          },
        ],
      },
      {
        note: 'Hai engine chạy trên máy — **ZeroTTS (chạy trên máy, tiếng Việt)** và **VieNeu TTS (chạy trên máy, tiếng Việt)** — **chỉ nói được tiếng Việt**. Chọn ngôn ngữ đích nào khác ở ô **Ngôn ngữ** thì app chặn ngay tại chỗ, bằng câu nói rõ engine đó hỗ trợ những ngôn ngữ nào.',
      },

      { h2: 'Ba tuỳ chọn thêm' },
      {
        p: 'Cả ba đều mặc định tắt, và cả ba đều là việc làm thêm trên bản gốc trước khi lồng tiếng.',
      },
      {
        steps: [
          {
            title: 'Ghi phụ đề lên video',
            body: 'Tick **Ghi phụ đề lên video** để phụ đề cháy thẳng vào hình của bản dịch.',
          },
          {
            title: 'Xoá logo / watermark',
            body: 'Tick **Xoá logo / watermark** nếu hình có sẵn chữ hoặc logo cháy cứng cần bỏ đi. Ô **Vùng cần tìm (không bắt buộc)** hiện ra ngay dưới — để trống thì tự dò, hoặc ghi tên vùng nếu biết nó nằm ở đâu.',
          },
          {
            title: 'Chèn chữ & logo',
            body: 'Khối **Chèn chữ & logo** chọn template đóng dấu ở ô **Template đóng dấu**. Để nguyên **Không — giữ nguyên video** thì video đi thẳng đường cũ, không encode thêm lần nào.',
          },
        ],
      },

      { h2: 'Chạy và lấy kết quả' },
      {
        steps: [
          {
            title: 'Bấm Dịch',
            body: 'Mỗi job một ô trong lưới kết quả, và chúng đi theo hàng đợi. Hàng phía trên lưới đếm bao nhiêu đã xong, đang chạy, đang chờ và bao nhiêu lỗi. Nút **Huỷ** nằm cạnh nút **Dịch**.',
          },
          {
            title: 'Tải từng video',
            body: 'Video nào xong thì hiện trong ô của nó, tải riêng được ngay.',
          },
          {
            title: 'Lấy cả lượt',
            body: 'Khối **Lưu kết quả**: nút **Tải tất cả** nén mọi video đã xong của lượt này thành một file, và nút **Xoá kết quả trên màn hình** chỉ dọn các ô khỏi màn — file vẫn còn trong Thư viện.',
          },
          {
            title: 'Đưa sang chỗ đăng',
            body: 'Hai nút **Đưa sang Shopee** và **Đưa sang Facebook** lấy danh sách video của lượt này đưa sang hai màn đó.',
          },
        ],
      },
      {
        check: 'Sau khi chạy xong, **Thư viện video** có đúng số video bằng số nguồn nhân số ngôn ngữ, mỗi cái ghi loại **Lồng tiếng**.',
      },
      {
        p: 'Một lượt chạy có trần: **40 job**. Nhiều hơn thì app từ chối ngay từ lúc bấm **Dịch** và nói rõ phép tính — bao nhiêu video nhân bao nhiêu ngôn ngữ — chứ không chạy phần vừa đủ rồi bỏ phần còn lại.',
      },
      {
        note: 'Màn này **không có danh sách các lượt cũ**. Tải lại trang thì nó vẽ lại lượt gần nhất; lượt trước đó không xem lại được ở đây. Muốn giữ thì tải về, hoặc mở **Thư viện video** — video vẫn nằm đó.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'thu-vien-video' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/long-tieng-01-screen-en.webp',
          alt: 'The Translate screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Choosing the source' },
      {
        p: 'The sidebar calls this screen **Translate**; the page itself is headed **Translate videos**. Same screen, and it takes a whole list of sources at once.',
      },
      {
        steps: [
          {
            title: 'Pick a source under Source',
            body: 'Two answers: **Video link (YouTube / TikTok / Douyin)** or **Video files (local)**. Whichever you pick, its input appears.',
          },
          {
            title: 'Paste links',
            body: 'Into **Video links (one per line)** — one link to a line, the whole list in one paste.',
          },
          {
            title: 'Or choose files',
            body: 'In **Video files — select or drop several at once**. Dropping several files together works, so there is no need to do them one at a time.',
          },
        ],
      },

      { h2: 'Voice and target languages' },
      {
        steps: [
          {
            title: 'Pick an engine',
            body: '**Text to speech engine** lists the app\'s engines. One that this build cannot run has **— unavailable** appended to its name. **Preview** reads a sample through exactly the engine, language and speed you have selected — listen before dubbing a whole batch.',
          },
          {
            title: 'Choose the target languages',
            body: '**Language** takes several at once. Each language makes its own video from the same source, so two sources and three languages is six videos.',
          },
          {
            title: 'Choose a voice and a speed',
            body: '**Voice** picks from the engine\'s own list. The **Reading speed** slider sets pace: 1.0 is the voice\'s own, and higher is faster.',
          },
        ],
      },
      {
        note: 'The two engines that run on this machine — **ZeroTTS (on this machine, Vietnamese)** and **VieNeu TTS (on this machine, Vietnamese)** — **speak Vietnamese only**. Choose any other target language under **Language** and the app refuses on the spot, naming the languages that engine does support.',
      },

      { h2: 'Three optional extras' },
      {
        p: 'All three are off by default, and all three are extra work on the source before the dubbing happens.',
      },
      {
        steps: [
          {
            title: 'Caption video',
            body: 'Tick **Caption video** to burn subtitles straight into the dubbed picture.',
          },
          {
            title: 'Remove logo / watermark',
            body: 'Tick **Remove logo / watermark** when the picture already carries burned-in text or a logo that has to go. **Where to look (optional)** appears underneath — leave it empty to find the mark automatically, or name the area if you know where it sits.',
          },
          {
            title: 'Add text & logo',
            body: 'The **Add text & logo** group picks a template under **Branding template**. Left at **None - leave the video alone**, the video goes down the old path with no extra encode at all.',
          },
        ],
      },

      { h2: 'Running it and collecting the results' },
      {
        steps: [
          {
            title: 'Press Translate',
            body: 'Each job gets a cell in the results grid and they go through the queue. The line above the grid counts how many are finished, running, waiting and failed. **Cancel** sits beside **Translate**.',
          },
          {
            title: 'Download one at a time',
            body: 'A video appears in its own cell as soon as it is done, ready to download on its own.',
          },
          {
            title: 'Take the whole run',
            body: 'Under **Save the results**, **Download all** packs every finished video of this run into one file, and **Clear the results** only takes the cells off the screen — the files stay in the library.',
          },
          {
            title: 'Hand them on',
            body: '**Send to Shopee** and **Send to Facebook** take this run\'s videos over to those two screens.',
          },
        ],
      },
      {
        check: 'When the run finishes, the **Video library** holds exactly as many videos as sources times languages, each tagged **Translate**.',
      },
      {
        p: 'One run has a ceiling of **40 jobs**. More than that and the app refuses at the moment you press **Translate**, spelling out the arithmetic — how many videos times how many languages — rather than running what fits and dropping the rest.',
      },
      {
        note: 'This screen keeps **no list of older runs**. Reloading redraws the most recent one; earlier ones cannot be seen here again. To keep work, download it or open the **Video library** — the videos are still in it.',
      },

      { h2: 'What next' },
      { link: 'thu-vien-video' },
    ],
  },
};

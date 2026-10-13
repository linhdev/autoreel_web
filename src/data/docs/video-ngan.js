/**
 * Video ngắn — the screen that starts from nothing: a topic in, videos out.
 *
 * Labels are read off `translations.py` rather than remembered. The sidebar
 * calls the screen **Video ngắn** while the page heads itself
 * **Tạo video ngắn từ một chủ đề** (`sa.title`); the four columns are
 * `sa.sec_topic` … `sa.sec_extras`, and `sa.create` is the button that runs it.
 * Somebody following this with the app open has to be able to find each one.
 *
 * No speech-rate control here: the older prose guide mentions one on this
 * screen, and the screen does not have one — the run takes no rate, and the
 * engines that offer one offer it on the other screens. Nothing is named below
 * that is not drawn.
 */
export default {
  key: 'video-ngan',
  group: 'make',
  slug: { vi: 'video-ngan', en: 'shorts' },
  updated: '2026-10-13',
  order: 1,
  title: { vi: 'Video ngắn', en: 'Shorts' },
  description: {
    vi: 'Từ một chủ đề ra video hoàn chỉnh: bốn cột cần điền, những câu app báo khi thiếu thứ gì, và cách lấy video về.',
    en: 'From a topic to a finished video: the four columns to fill, what the app says when something is missing, and getting the videos back.',
  },
  lead: {
    vi: 'Màn này **tự viết kịch bản** từ chủ đề bạn đưa, đọc thành tiếng, rồi ghép hình và nhạc lấy từ kho **Tư liệu**.',
    en: 'This screen **writes its own script** from the topic you give it, reads it aloud, and cuts it over pictures and music taken from **Assets**.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/video-ngan-01-screen-vi.webp',
          alt: 'Màn Video ngắn trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Trước khi bấm gì' },
      {
        p: 'Sidebar gọi màn này là **Video ngắn**; tựa trong trang là **Tạo video ngắn từ một chủ đề**. Cùng một màn hình, và ba thứ phải có trước:',
      },
      {
        ul: [
          '**Khoá AI** ở màn **Cấu hình** — kịch bản do model viết, nên thiếu khoá thì lượt chạy dừng ngay.',
          'Ít nhất một **video nền** trong kho **Tư liệu**.',
          'Ít nhất một **nhạc nền** trong kho **Tư liệu**.',
        ],
      },
      {
        note: 'Hai ô **Chọn video nền** và **Chọn nhạc nền** đọc thẳng từ kho **Tư liệu**, không đọc từ ổ đĩa. Kho trống thì hai ô trống, và lượt chạy dừng ở câu **Hãy chọn ít nhất một video nền.**',
      },

      { h2: 'Bốn cột, điền theo thứ tự' },
      {
        p: 'Màn chia làm bốn cột, mỗi cột có tiêu đề in ở đầu: **1 · Chủ đề**, **2 · Giọng đọc**, **3 · Hình ảnh**, **4 · Logo và nhạc**.',
      },
      {
        steps: [
          {
            title: 'Cột 1 — số lượng và kiểu video',
            body: 'Ô **Số video ngắn** đặt số video cho lượt này. Ô **Kiểu video ngắn** chọn một trong bốn kiểu: **Truyện Reddit**, **Sự kiện lịch sử**, **Sự kiện khoa học**, **Sự kiện tự chọn**. Chọn **Sự kiện tự chọn** thì ô **Nhập chủ đề cho video sự kiện (ví dụ: Bóng đá)** hiện ra ngay bên dưới — gõ chủ đề vào đó.',
          },
          {
            title: 'Cột 2 — giọng đọc',
            body: 'Chọn engine ở ô **Engine đọc văn bản thành tiếng**, rồi chọn **Ngôn ngữ** và **Giọng đọc** trong khung vừa hiện ra. Nút **Nghe thử** đọc một câu mẫu trước khi bạn dựng cả video.\n\nHai engine chạy trên máy — **ZeroTTS (chạy trên máy, tiếng Việt)** và **VieNeu TTS (chạy trên máy, tiếng Việt)** — chỉ nói tiếng Việt, và video đầu tiên của mỗi engine phải tải model về: khoảng một GB và khoảng 600 MB.',
          },
          {
            title: 'Cột 3 — hình ảnh',
            body: 'Tick **Dùng ảnh** nếu muốn ảnh chèn vào giữa các cảnh, rồi chọn **Số ảnh mỗi video**: 5, 10 hoặc 25. Ô **Chọn video nền** lấy từ kho **Tư liệu** — chọn được nhiều video một lúc.',
          },
          {
            title: 'Cột 4 — logo và nhạc',
            body: 'Ô **Chọn nhạc nền** cũng lấy từ kho **Tư liệu**. Tick **Thêm watermark** rồi gõ tên kênh vào ô **Watermark (tên kênh của bạn)** nếu muốn đóng dấu lên video.',
          },
          {
            title: 'Bấm Tạo video ngắn',
            body: 'Nút **Tạo video ngắn** nằm ngay dưới bốn cột. Trong lúc chạy, dòng trạng thái đếm từng video và từng bước đang làm.',
          },
        ],
      },
      {
        check: 'Video đầu tiên hiện ra trong khối **Các video ngắn đã xong** ngay khi làm xong, kèm nút tải riêng của nó.',
      },
      {
        note: 'Nút **Dừng** không cắt ngang bước đang chạy: app báo **Sẽ dừng khi hết bước đang chạy…** rồi mới dừng, và video đang làm dở bị bỏ. Việc dựng chạy trong chính tiến trình của app, nên khởi động lại app giữa chừng cũng cắt lượt chạy và bỏ phần còn lại của hàng đợi — muốn dừng thì bấm **Dừng**, đừng tắt app.',
      },

      { h2: 'Lấy video về' },
      {
        p: 'Xong video nào là video đó hiện ra ngay, không phải chờ hết lượt.',
      },
      {
        steps: [
          {
            title: 'Tải từng video',
            body: 'Mỗi thẻ có một nút tải riêng, tải đúng video đó.',
          },
          {
            title: 'Tải cả lượt',
            body: 'Nút **Tải tất cả** nén mọi video đã xong của lượt này thành một file zip và trình duyệt tải về.',
          },
          {
            title: 'Dọn màn hình',
            body: 'Nút **Xoá kết quả trên màn hình** chỉ bỏ các thẻ khỏi màn — file vẫn còn trong Thư viện.',
          },
        ],
      },
      {
        p: 'Video cũng được ghi vào **Thư viện video** với loại **Video ngắn**. Cạnh mỗi video còn một file `.txt` cùng tên, chứa tiêu đề và mô tả YouTube mà model viết cho nó — chép thẳng sang phần mô tả khi đăng.',
      },
      {
        p: 'Hai nút **Đưa sang Shopee** và **Đưa sang Facebook** lấy danh sách video vừa xong của lượt này đưa sang hai màn đó, để đăng mà không phải tự tìm lại.',
      },

      { h2: 'Khi nó không chạy' },
      {
        table: {
          head: ['Câu app báo', 'Nghĩa là'],
          rows: [
            ['**Chưa có khoá AI. Vào màn Cấu hình để thêm — kịch bản do model viết.**', 'Chưa dán khoá AI. Dán rồi chạy lại.'],
            ['**Hãy chọn ít nhất một video nền.**', 'Ô **Chọn video nền** đang trống — thêm video vào kho **Tư liệu** trước.'],
            ['**Hãy chọn ít nhất một nhạc nền.**', 'Ô **Chọn nhạc nền** đang trống.'],
            ['**Hãy nhập chủ đề cho video sự kiện.**', 'Đang chọn kiểu **Sự kiện tự chọn** mà ô chủ đề để trống.'],
            ['**Watermark chỉ được chứa chữ và số.**', 'Tên kênh có dấu hoặc ký tự đặc biệt. Watermark chỉ nhận chữ và số, dài 3–25 ký tự.'],
            ['**Đang chọn giọng ElevenLabs nhưng chưa có khoá. Vào màn Cấu hình để thêm.**', 'Engine ElevenLabs cần khoá riêng của nó, không dùng khoá AI.'],
          ],
        },
      },

      { h2: 'Việc tiếp theo' },
      { link: 'thu-vien-video' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/video-ngan-01-screen-en.webp',
          alt: 'The Shorts screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Before you press anything' },
      {
        p: 'The sidebar calls this screen **Shorts**; the page itself is headed **Make a short from a topic**. Same screen, and three things have to be in place first:',
      },
      {
        ul: [
          'An **AI key**, in **Settings** — the script is written by a model, so without one the run stops immediately.',
          'At least one **background video** in **Assets**.',
          'At least one **background music** track in **Assets**.',
        ],
      },
      {
        note: 'The two pickers, **Choose background video** and **Choose background music**, read straight out of **Assets** rather than off your disk. An empty store leaves both empty, and the run stops at **Select at least one background video.**',
      },

      { h2: 'Four columns, filled in order' },
      {
        p: 'The screen is four columns, each with its heading printed at the top: **1 · Topic**, **2 · Voice**, **3 · Pictures**, **4 · Logo and music**.',
      },
      {
        steps: [
          {
            title: 'Column 1 — how many, and what kind',
            body: '**Number of shorts** sets how many this run makes. **Type of shorts generated** picks one of four: **Reddit Story shorts**, **Historical Facts shorts**, **Scientific Facts shorts**, **Custom Facts shorts**. Choosing Custom Facts brings up **Write a subject for your facts (example: Football facts)** underneath it — type the subject there.',
          },
          {
            title: 'Column 2 — the voice',
            body: 'Pick an engine under **Text to speech engine**, then choose **Language** and **Voice** in the panel that appears. **Preview** reads a sample sentence aloud before you commit to a whole video.\n\nThe two engines that run on this machine — **ZeroTTS (on this machine, Vietnamese)** and **VieNeu TTS (on this machine, Vietnamese)** — speak Vietnamese only, and each one downloads its model on the first video: about 1 GB and about 600 MB.',
          },
          {
            title: 'Column 3 — the pictures',
            body: 'Tick **Use images** to cut stills in among the footage, then choose **Number of images per short**: 5, 10 or 25. **Choose background video** reads from **Assets**, and takes several at once.',
          },
          {
            title: 'Column 4 — logo and music',
            body: '**Choose background music** also reads from **Assets**. Tick **Add watermark** and type your channel name into **Watermark (your channel name)** to stamp it on the video.',
          },
          {
            title: 'Press Create Shorts',
            body: '**Create Shorts** sits under the four columns. While the run is going, the status line counts off each video and the step it is on.',
          },
        ],
      },
      {
        check: 'The first video appears in **The finished shorts** the moment it is made, with its own download button.',
      },
      {
        note: '**Stop** does not cut into the step that is running: the app says **Stopping at the end of the step it is on…**, then stops, and the video being made is abandoned. Rendering happens inside the app\'s own process, so restarting the app mid-run also cuts the run and drops the rest of the queue — to stop, press **Stop** rather than closing the app.',
      },

      { h2: 'Getting the videos back' },
      {
        p: 'Each video appears as it is finished, rather than all of them at the end.',
      },
      {
        steps: [
          {
            title: 'One at a time',
            body: 'Every card has its own download button, which hands over that one video.',
          },
          {
            title: 'The whole run',
            body: '**Download all** packs every finished video of this run into one zip and your browser saves it.',
          },
          {
            title: 'Clearing the screen',
            body: '**Clear the results** takes the cards off the screen and nothing else — the files stay in the library.',
          },
        ],
      },
      {
        p: 'The videos are also recorded in the **Video library**, under the kind **Shortcut**. Beside each one is a `.txt` file of the same name holding the YouTube title and description the model wrote for it — good to paste straight into the description box.',
      },
      {
        p: '**Send to Shopee** and **Send to Facebook** hand this run\'s finished videos to those two screens, so posting them does not mean finding them again.',
      },

      { h2: 'When it refuses to start' },
      {
        table: {
          head: ['What the app says', 'What it means'],
          rows: [
            ['**No AI key is set. Add one in the Config screen — the script is written by a model.**', 'No AI key has been pasted. Paste one and run it again.'],
            ['**Select at least one background video.**', '**Choose background video** is empty — put something in **Assets** first.'],
            ['**Select at least one background music.**', '**Choose background music** is empty.'],
            ['**Write down your facts short\'s subject.**', 'Custom Facts is selected and the subject box was left empty.'],
            ['**A watermark may only contain letters and numbers.**', 'The channel name has accents or punctuation. A watermark takes letters and digits, 3 to 25 characters.'],
            ['**ElevenLabs is the chosen voice but its key is not set. Add it in the Config screen.**', 'ElevenLabs uses its own key rather than the AI key.'],
          ],
        },
      },

      { h2: 'What next' },
      { link: 'thu-vien-video' },
    ],
  },
};

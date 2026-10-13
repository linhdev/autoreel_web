/**
 * Video tự động — the control panel for a renderer that lives in its own
 * container, which is the one fact that explains everything else on the screen.
 *
 * Labels are read off `translations.py`: the sidebar says **Video tự động** and
 * the page heads itself **Tạo video từ một chủ đề** (`mpt.title`); the three
 * step buttons are `mpt.step_script` … `mpt.step_run`, the two that matter are
 * `mpt.generate` and `mpt.stop`. The renderer is named in `product.py` —
 * `f'{BRAND_NAME} Engine'` — and the screen prints whichever name it was built
 * with, so this page says **AutoReel Engine** and means that string.
 */
export default {
  key: 'video-tu-dong',
  group: 'make',
  slug: { vi: 'video-tu-dong', en: 'auto-video' },
  updated: '2026-10-13',
  order: 2,
  title: { vi: 'Video tự động', en: 'Auto video' },
  description: {
    vi: 'Ba bước của màn Video tự động: viết kịch bản, đặt cấu hình, rồi theo dõi engine dựng và lấy video về.',
    en: 'The three steps of the Auto video screen: write a script, set the options, then watch the renderer work and collect the videos.',
  },
  lead: {
    vi: 'Màn này **không tự dựng video**. Nó gửi việc sang **AutoReel Engine** — một container riêng chạy cạnh app — và chờ kết quả gửi về.',
    en: 'This screen **does not render anything itself**. It hands the job to **AutoReel Engine**, a container of its own running beside the app, and waits for the files to come back.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/video-tu-dong-01-screen-vi.webp',
          alt: 'Màn Video tự động trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Bảng điều khiển của một container khác' },
      {
        p: 'Sidebar gọi màn này là **Video tự động**; tựa trong trang là **Tạo video từ một chủ đề**. Ba nút **1 · Kịch bản**, **2 · Cấu hình**, **3 · Kết quả** không phải ba trang — bấm cái nào thì cột đó mở ra, và bạn đi qua lại giữa chúng bao nhiêu lần cũng được.',
      },
      {
        ul: [
          '**Khoá AI** ở màn **Cấu hình** — bước 1 viết kịch bản bằng model.',
          '**Khoá Pexels**, cùng màn **Cấu hình**, khối **Khoá khác**, ô **KHOÁ PEXELS** — chỉ cần khi để **Nguồn hình** là **Pexels**.',
          '**AutoReel Engine** đang chạy. Chưa chạy thì đầu màn hiện dòng báo không kết nối được, và nút **Tạo video** bị mờ.',
        ],
      },
      {
        note: 'Thiếu khoá Pexels thì app **không báo lỗi** — nó chỉ trả về video không có cảnh quay nào. Dán khoá vào ô **KHOÁ PEXELS** rồi bấm **Lưu**; dòng trạng thái của mục đó nói rõ khoá đã được gửi sang engine hay chưa.',
      },

      { h2: 'Bước 1 · Kịch bản' },
      {
        p: 'Nút **1 · Kịch bản** mở cột trái. Đây là chỗ duy nhất bạn phải nghĩ, phần còn lại là tuỳ chọn.',
      },
      {
        steps: [
          {
            title: 'Nhập chủ đề',
            body: 'Ô **Chủ đề video** — vài chữ là đủ, ví dụ gợi ý của chính ô đó: *ba điều thú vị về đại dương*.',
          },
          {
            title: 'Bấm Viết kịch bản bằng AI',
            body: 'Kịch bản chạy ra ô **Kịch bản video** bên dưới, kèm câu **Đã viết xong kịch bản. Đọc lại trước khi tạo video.** Muốn tự viết thì gõ thẳng vào ô đó — dòng gợi ý nói rõ: để trống thì hệ thống tự viết.',
          },
          {
            title: 'Hoặc lấy kịch bản từ một video có sẵn',
            body: 'Mở **Lấy kịch bản từ video**, dán link vào ô **Link video** (mỗi dòng một link — YouTube, TikTok hoặc Douyin) hoặc chọn file ở **Hoặc file trong máy**, rồi bấm nút **Lấy kịch bản từ video**. Cách này chạy qua bản phiên âm có sẵn, nên đừng bấm hai lần liền — app sẽ báo **Đang đọc một video rồi. Chờ lượt đó xong đã.**',
          },
          {
            title: 'Chọn số video cho lượt này',
            body: 'Ô **Số video tạo cùng lúc** nhận từ 1 đến 25; mỗi cái là một video hoàn chỉnh. Ô **Kịch bản** quyết định dùng **Một kịch bản cho mọi video** hay **Mỗi video một kịch bản** — chọn kiểu thứ hai thì mỗi video có một dòng riêng với ô **Hướng** và ô kịch bản của nó.',
          },
        ],
      },
      {
        check: 'Ô **Kịch bản video** có chữ trước khi sang bước 2. Không có gì trong đó thì lượt chạy dừng ở câu **Hãy viết hoặc dán kịch bản trước.**',
      },

      { h2: 'Bước 2 · Cấu hình' },
      {
        p: 'Nút **2 · Cấu hình** mở cột giữa, chia làm ba khối: **Cài đặt video**, **Cài đặt âm thanh**, **Cài đặt phụ đề**. Tất cả đều có mặc định dùng được, nên bỏ qua bước này cũng không sao.',
      },
      {
        steps: [
          {
            title: 'Hình lấy từ đâu',
            body: '**Nguồn hình** chọn **Pexels**, **Pixabay**, **Coverr**, hay **File trên máy** — chọn nguồn trên máy thì phải tải file lên ở ô **Tải file hình lên**. **Khung hình** chọn **Dọc 9:16** hoặc **Ngang 16:9**. **Độ dài mỗi cảnh (giây)** đặt độ dài mỗi cảnh quay.',
          },
          {
            title: 'Tiếng',
            body: '**Kiểu lồng tiếng** có ba lựa chọn: **Tự động lồng tiếng**, **Tải file lồng tiếng lên**, hoặc **Không lồng tiếng**. Chọn tự động thì chọn tiếp **Dịch vụ giọng đọc**, **Giọng đọc**, **Tốc độ đọc** và **Âm lượng giọng đọc**; nhạc nền nằm ở **Nguồn nhạc nền** và **Âm lượng nhạc nền**.',
          },
          {
            title: 'Phụ đề',
            body: 'Tick **Bật phụ đề** rồi chỉnh **Phông chữ**, **Vị trí**, và **Kiểu hiển thị** — **Theo câu** hoặc **Từng từ một**.',
          },
        ],
      },

      { h2: 'Bước 3 · Kết quả' },
      {
        p: 'Nút **3 · Kết quả** mở cột phải. Cột này chỉ có việc sau khi bạn bấm **Tạo video**.',
      },
      {
        steps: [
          {
            title: 'Bấm Tạo video',
            body: 'Nút **Tạo video** nằm ở cuối bước 1. Bỏ trống chủ đề thì app báo **Hãy nhập chủ đề video trước.**; chưa có kịch bản thì báo **Chưa có kịch bản nào để dựng — viết một cái trước.**',
          },
          {
            title: 'Theo dõi',
            body: 'Dòng trạng thái đếm phần trăm và thời gian đã chạy, và phía trên lưới kết quả là hàng đợi: bao nhiêu đang chạy, đang chờ, và bao nhiêu lỗi. Đóng tab cũng được — engine vẫn dựng tiếp bên kia.',
          },
          {
            title: 'Video về máy',
            body: 'Xong cái nào là cái đó được copy về đây, nằm trong khối **Các video đã xong**, phát và tải được ngay tại chỗ. Nút **Tải tất cả** lấy cả lượt; **Xoá kết quả trên màn hình** chỉ dọn thẻ khỏi màn.',
          },
          {
            title: 'Khi không thấy video nào',
            body: 'Câu **Không tạo được video — lần chạy dừng trước khi xong.** có nghĩa lượt chạy đã chết; lý do nằm trong khung ngay dưới nó. Nếu khung chỉ ghi engine dừng mà không nói lý do thì phải xem nhật ký của container đó, chứ màn này không biết thêm gì.',
          },
        ],
      },
      {
        check: 'Khối **Các video đã xong** có ít nhất một video phát được. Chưa có gì thì đọc dòng trạng thái ở bước 3 trước khi chạy lại.',
      },
      {
        note: '**Ngừng theo dõi** chỉ ngừng trang này xem tiến độ — dòng xác nhận nói thẳng rằng video vẫn đang được dựng. Engine không có nút dừng nào để bấm, nên cách duy nhất để dừng thật là dừng container của nó; sau đó bấm **Làm mới** để màn hình đọc lại trạng thái.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'thu-vien-video' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/video-tu-dong-01-screen-en.webp',
          alt: 'The Auto video screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'A control panel for another container' },
      {
        p: 'The sidebar calls this screen **Auto video**; the page itself is headed **Make a video from a subject**. The three buttons **1 · The script**, **2 · Settings**, **3 · Results** are not three pages — each opens its column, and you can move back and forth between them as often as you like.',
      },
      {
        ul: [
          'An **AI key**, in **Settings** — step 1 writes the script with a model.',
          'A **Pexels key**, on the same screen, in **Other keys**, in the **PEXELS API KEY** field — only needed when **Video Source** is set to **Pexels**.',
          '**AutoReel Engine** running. If it is not, the top of the screen says it cannot be reached and **Make the video** stays greyed out.',
        ],
      },
      {
        note: 'A missing Pexels key is **not an error** — it produces a video with no footage in it at all. Paste the key into **PEXELS API KEY** and press Save; the status line under that field says whether the key has reached the renderer yet.',
      },

      { h2: 'Step 1 · The script' },
      {
        p: '**1 · The script** opens the left column. This is the only part that needs thought; the rest is optional.',
      },
      {
        steps: [
          {
            title: 'Give it a subject',
            body: 'The **Video Subject** field — a few words will do, along the lines of the hint it carries: *three facts about the ocean*.',
          },
          {
            title: 'Press Write the script with AI',
            body: 'The script lands in **Video Script** below, with **Script written. Read it before making the video.** You can also type into that field yourself: leaving it empty is what tells the app to write one.',
          },
          {
            title: 'Or read a script from a video you already have',
            body: 'Open **Read a script from a video**, paste links into **Video links** (one per line — YouTube, TikTok or Douyin) or pick files under **Or files on this machine**, then press **Read the script from the video**. It goes through speech recognition, so do not press it twice in a row: the app answers **A video is already being read. Wait for it to finish.**',
          },
          {
            title: 'Choose how many videos this run makes',
            body: '**Videos Generated Simultaneously** takes 1 to 25, and each one is a whole video. **Scripts** decides between **One script for every video** and **A script for each video** — the second gives every video its own row with a **Direction** box and its own script.',
          },
        ],
      },
      {
        check: '**Video Script** has something in it before you move to step 2. An empty one stops the run at **Write or paste a script first.**',
      },

      { h2: 'Step 2 · Settings' },
      {
        p: '**2 · Settings** opens the middle column, in three blocks: **Video Settings**, **Audio Settings** and **Subtitle Settings**. Every default in here works, so skipping the step is a real option.',
      },
      {
        steps: [
          {
            title: 'Where the footage comes from',
            body: '**Video Source** is **Pexels**, **Pixabay**, **Coverr** or **Local file** — the local one needs files added under **Upload Local Files**. **Video Ratio** picks **Portrait 9:16** or **Landscape 16:9**, and **Clip Duration** sets how long each shot runs.',
          },
          {
            title: 'Sound',
            body: '**Voiceover Mode** has three answers: **Automatic Voiceover**, **Upload a Voiceover**, or **No Voiceover**. On automatic, the choices below it are **Voiceover Service**, **Voice**, **Voiceover Speed** and **Voiceover Volume**; the music is **Background Music Source** and **Background Music Volume**.',
          },
          {
            title: 'Subtitles',
            body: 'Tick **Enable Subtitles**, then set **Font**, **Position** and **Display Mode** — **Sentence by Sentence** or **Single Word (Word by Word)**.',
          },
        ],
      },

      { h2: 'Step 3 · Results' },
      {
        p: '**3 · Results** opens the right column, which has nothing to do until you press **Make the video**.',
      },
      {
        steps: [
          {
            title: 'Press Make the video',
            body: 'The button is at the foot of step 1. With no subject the app answers **Give it a subject, or a script.**; with no script, **No script to build from — write one first.**',
          },
          {
            title: 'Watch it go',
            body: 'The status line counts percent and elapsed time, and above the results grid the queue reports how many are running, waiting, and failed. Closing the tab is fine — the renderer carries on without you.',
          },
          {
            title: 'Collect the videos',
            body: 'Each finished video is copied back here into **The finished videos**, ready to play and download on the spot. **Download all** takes the run in one file; **Clear the results** only takes the cards off the screen.',
          },
          {
            title: 'When nothing arrives',
            body: '**Nothing was made — the run stopped before it finished.** means the run died; the reason is in the box directly under it. If that box only says the renderer stopped without saying why, the answer is in that container\'s log — this screen has nothing more to tell you.',
          },
        ],
      },
      {
        check: '**The finished videos** holds at least one video that plays. If it is empty, read the step 3 status line before starting another run.',
      },
      {
        note: '**Stop watching** stops this page watching and nothing else — its own confirmation says the video is still being made. The renderer has no stop button to press, so the only way to stop it for real is to stop its container; press **Refresh** afterwards to read the state again.',
      },

      { h2: 'What next' },
      { link: 'thu-vien-video' },
    ],
  },
};

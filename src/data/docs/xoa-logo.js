/**
 * Xoá logo — the one screen that removes something instead of adding it.
 *
 * The screen's own description is the honest one and is quoted rather than
 * paraphrased: `wipe.subtitle` says it finds text burned into the picture and
 * paints over it, and that it cannot touch a subtitle that lives in its own
 * file. The six area names are the app's own list (`wipe.regions_hint`), typed
 * into the box as English words whatever language the app is in.
 *
 * Two messages on this path are English in both languages, because they come
 * from the integration rather than the translation table: the empty-mask
 * failure in `integrations/wipe.py` and the one-job-at-a-time refusal in
 * `integrations/wipe_jobs.py`. Both are quoted, because somebody who has just
 * seen one needs to recognise it.
 */
export default {
  key: 'xoa-logo',
  group: 'rework',
  slug: { vi: 'xoa-logo', en: 'remove-logo' },
  updated: '2026-10-13',
  order: 3,
  title: { vi: 'Xoá logo', en: 'Removing logos' },
  description: {
    vi: 'Bỏ logo kênh hoặc phụ đề cháy cứng trên video: sáu tên vùng cần tìm, và hai câu báo bằng tiếng Anh bạn sẽ gặp.',
    en: 'Take a channel logo or a hardcoded subtitle off a video: the six area names, and the two English messages you will meet.',
  },
  lead: {
    vi: 'Màn này **xoá chữ đã cháy vào hình**: logo kênh, phụ đề ghi cứng, con số thời gian. Nó không đụng được vào phụ đề để riêng một file.',
    en: 'This screen **removes text burned into the picture**: a channel logo, a hardcoded subtitle, a timestamp. It cannot touch a subtitle that lives in its own file.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/xoa-logo-01-screen-vi.webp',
          alt: 'Màn Xoá logo trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Nó xoá được gì' },
      {
        p: 'Sidebar gọi màn này là **Xoá logo**; tựa trong trang là **Xoá logo hoặc phụ đề cháy sẵn trên video**. Cách làm là tìm chữ trong hình rồi **vẽ đè lên** chỗ đó.',
      },
      {
        ul: [
          'Xoá được **chữ nằm trong hình**: logo kênh, phụ đề ghi cứng, con số thời gian.',
          'Không xoá được **phụ đề để riêng một file** — loại đó vốn không nằm trong hình.',
          'Nó chạy qua cả video, và tiến trình hiện theo phần trăm, nên video càng dài càng lâu.',
        ],
      },

      { h2: 'Đưa video vào' },
      {
        p: 'Khối **Video** nhận hai kiểu nguồn, dùng cái nào cũng được.',
      },
      {
        steps: [
          {
            title: 'Tải một file lên',
            body: 'Bấm **Hoặc tải lên một file** rồi chọn file trên máy.',
          },
          {
            title: 'Hoặc dán link',
            body: 'Vào ô **Hoặc dán link** — mỗi dòng một link, YouTube, TikTok hoặc Douyin. Dán nhiều link một lúc thì mỗi cái là một video riêng.',
          },
        ],
      },

      { h2: 'Vùng cần tìm' },
      {
        p: 'Khối **Tuỳ chọn** có ô **Vùng cần tìm**. Để trống thì app tự dò chữ trong hình — đó là mặc định và là cách dùng thường ngày. Ghi vào ô đó khi bạn đã biết chữ nằm ở đâu: ô này nhận **sáu tên vùng**, gõ bằng tiếng Anh, đúng như app liệt kê.',
      },
      {
        table: {
          head: ['Ghi vào ô', 'Vùng'],
          rows: [
            ['`top`', 'dải trên của khung'],
            ['`bottom`', 'dải dưới của khung'],
            ['`top-left`', 'góc trên trái'],
            ['`top-right`', 'góc trên phải'],
            ['`bottom-left`', 'góc dưới trái'],
            ['`bottom-right`', 'góc dưới phải'],
          ],
        },
      },
      {
        note: 'Nếu app không tìm thấy gì, câu báo sẽ có **hai nửa**: nửa đầu là tiếng Việt, nửa sau là tiếng Anh — *No logo or caption was found in this video, so there was nothing to take off.* — và nửa tiếng Anh đó chỉ vào ô **"Where to look"**. Ô mà nó nói tới chính là **Vùng cần tìm** ở trên, không phải một ô nào khác.',
      },

      { h2: 'Xoá và lấy kết quả' },
      {
        steps: [
          {
            title: 'Đóng dấu trước, nếu muốn',
            body: 'Khối **Chèn chữ & logo** trong **Tuỳ chọn** vẽ chữ hoặc logo lên bản đã xoá. Để nguyên **Không — giữ nguyên video** thì file ra đúng là bản đã xoá, không encode thêm lần nào.',
          },
          {
            title: 'Bấm Xoá đi',
            body: 'Tiến trình hiện theo phần trăm. Nút **Huỷ** bên cạnh không dừng ngay: app báo **Sẽ dừng sau bước đang chạy…** rồi mới báo **Đã huỷ.**',
          },
          {
            title: 'Xem qua trước khi dùng',
            body: 'Kết quả nằm trong khối **Video đã xoá**, phát được ngay tại chỗ. Bộ xoá làm tốt với chữ trên nền phẳng và kém hơn với chữ trên nền rối, nên hãy xem lại từng video.',
          },
          {
            title: 'Mang video đi',
            body: 'Nút **Tải tất cả** lấy cả lượt; hai nút **Đưa sang Shopee** và **Đưa sang Facebook** đưa thẳng sang hai màn đó.',
          },
        ],
      },
      {
        check: 'Video trong khối **Video đã xoá** phát được, và chỗ có chữ đã được vẽ kín — không còn logo mờ mờ hay vệt nhoè ở góc.',
      },
      {
        p: 'File nằm trong thư mục `videos/cleaned/` của dữ liệu app, và **không được ghi vào Thư viện video**. Muốn giữ thì tải về ngay trên màn này, bằng nút tải hoặc một trong hai nút bàn giao.',
      },
      {
        note: 'Màn này **chỉ chạy một video một lúc**. Bấm khi đang có lượt chạy thì app từ chối bằng câu tiếng Anh: *A video is already being cleaned. Wait for it to finish, or cancel it.* — hãy chờ hoặc bấm **Huỷ**, chứ không có hàng đợi nào để xếp vào.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'dang-facebook' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/xoa-logo-01-screen-en.webp',
          alt: 'The Remove logo screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'What it can remove' },
      {
        p: 'The sidebar calls this screen **Remove logo**; the page itself is headed **Take a logo or a caption off a video**. It works by finding the text in the picture and **painting over it** where it sits.',
      },
      {
        ul: [
          'It removes text **that is in the picture**: a channel logo, a hardcoded subtitle, a timestamp.',
          'It cannot remove **a subtitle that lives in its own file** — that was never in the picture to begin with.',
          'It walks the whole video, and progress is shown as a percentage, so a longer video takes longer.',
        ],
      },

      { h2: 'Getting a video in' },
      {
        p: 'The block labelled **The video** takes either kind of source; use whichever you have.',
      },
      {
        steps: [
          {
            title: 'Upload one',
            body: 'Press **Or upload one** and choose the file.',
          },
          {
            title: 'Or paste links',
            body: 'Into **Or paste links** — one per line, YouTube, TikTok or Douyin. Several links at once means several separate videos.',
          },
        ],
      },

      { h2: 'Where to look' },
      {
        p: 'The **Options** block holds the **Where to look** box. Left empty, the app finds the text itself — that is the default and the everyday way to use it. Fill it in when you already know where the mark sits: it takes **six area names**, spelled exactly as the app lists them.',
      },
      {
        table: {
          head: ['Write this', 'The area'],
          rows: [
            ['`top`', 'the top band of the frame'],
            ['`bottom`', 'the bottom band of the frame'],
            ['`top-left`', 'the top-left corner'],
            ['`top-right`', 'the top-right corner'],
            ['`bottom-left`', 'the bottom-left corner'],
            ['`bottom-right`', 'the bottom-right corner'],
          ],
        },
      },
      {
        note: 'When nothing is found, the message comes in **two halves**: *No logo or caption was found in this video, so there was nothing to take off.* followed by a pointer at the **"Where to look"** box. That box is the **Where to look** field above, and in the Vietnamese interface it is labelled **Vùng cần tìm** — the message keeps its English either way.',
      },

      { h2: 'Removing it, and collecting the result' },
      {
        steps: [
          {
            title: 'Add a mark first, if you want one',
            body: 'The **Add text & logo** group under **Options** draws text or a logo onto the cleaned file. Left alone at **None - leave the video alone**, what comes out is the cleaned video with no extra encode.',
          },
          {
            title: 'Press Remove it',
            body: 'Progress runs as a percentage. **Cancel** beside it does not stop it instantly: the app says **Stopping after the current step…** and then **Cancelled.**',
          },
          {
            title: 'Look before you use it',
            body: 'The results are in **The cleaned video**, ready to play on the spot. The remover does well with text over a flat background and less well over a busy one, so watch each one.',
          },
          {
            title: 'Take them away',
            body: '**Download all** takes the whole run; **Send to Shopee** and **Send to Facebook** take it straight to those screens.',
          },
        ],
      },
      {
        check: 'The video in **The cleaned video** plays, and the place the text was is painted over — no ghost of a logo or a smeared patch left in the corner.',
      },
      {
        p: 'The files land in the app\'s `videos/cleaned/` folder, and they are **not recorded in the Video library**. To keep one, download it from this screen — the download button, or one of the two hand-off buttons.',
      },
      {
        note: 'This screen **runs one video at a time**. Pressing it while a run is going is refused with: *A video is already being cleaned. Wait for it to finish, or cancel it.* Wait, or press **Cancel** — there is no queue to join.',
      },

      { h2: 'What next' },
      { link: 'dang-facebook' },
    ],
  },
};

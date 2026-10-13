/**
 * Link sản phẩm — the reading screen, and the one dependency people miss.
 *
 * Reading a Shopee listing is not a fetch: it happens inside a Chrome window
 * the person opened and signed in to themselves, which is why the topic starts
 * there instead of at the textbox. The file names in that step are the ones in
 * the install folder (`open-chrome.bat`, `open-chrome.sh`,
 * `Mở Chrome Shopee.command`), not the ones the app's own internal messages
 * use, because the reader has that folder and not this repository.
 *
 * The 470px limit is `MIN_MATERIAL_SIDE` in `shortGPT/agent/tools.py`, which
 * is where the refusal message gets its `{side}`; the 20-link limit is
 * `MAX_LINKS` in `gui/ui_tab_catalog.py`.
 */
export default {
  key: 'link-san-pham',
  group: 'sell',
  slug: { vi: 'link-san-pham', en: 'product-links' },
  updated: '2026-10-13',
  order: 4,
  title: { vi: 'Link sản phẩm', en: 'Product links' },
  description: {
    vi: 'Đọc tên, giá và ảnh của một loạt link Shopee, rồi đưa những ảnh bạn chọn sang màn Video tự động để dựng video.',
    en: 'Read a batch of Shopee links for their names, prices and pictures, then hand the pictures you tick to the Auto video screen.',
  },
  lead: {
    vi: 'Màn này đọc qua một **cửa sổ Chrome đã đăng nhập Shopee**, mở suốt lúc đọc. Không có cửa sổ đó thì nút đọc không chạy.',
    en: 'This screen reads through a **Chrome window already signed in to Shopee**, open while it works. Without that window the read button does not run.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/link-san-pham-01-screen-vi.webp',
          alt: 'Màn Link sản phẩm trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Một cửa sổ Chrome riêng để đăng nhập' },
      {
        p: 'Shopee không cho đọc trang sản phẩm bằng một request trần. Việc đọc xảy ra trong một cửa sổ Chrome riêng — không phải trình duyệt bạn đang dùng — nên phiên đăng nhập của bạn ở đó không bị đụng tới và bạn không phải đóng trình duyệt nào.',
      },
      {
        steps: [
          {
            title: 'Mở cửa sổ đó',
            body: 'Trong thư mục AutoReel, nhấp đôi **`open-chrome.bat`** (Windows) hoặc chạy **`./open-chrome.sh`** (macOS — cũng có thể nhấp đôi **`Mở Chrome Shopee.command`**). Một cửa sổ Chrome mở ra ở trang shopee.vn.',
          },
          {
            title: 'Đăng nhập Shopee trong cửa sổ vừa hiện',
            body: 'Đăng nhập một lần. Phiên nằm trong hồ sơ **`.chrome-shopee`** cạnh file đó, nên những lần sau chỉ cần mở lại cửa sổ là xong.',
          },
          {
            title: 'Để cửa sổ đó mở',
            body: 'Giữ nó mở trong lúc app đọc link. Đóng cửa sổ là nút đọc ngừng chạy — và nó cũng không tự mở lại được.',
          },
        ],
      },
      {
        p: 'Màn **Link sản phẩm** có hai nút cho việc này: **Đăng nhập Shopee** — mở cửa sổ đăng nhập một lần, và **Cập nhật file cookie** — đọc lại phiên đang có khi cửa sổ kia vẫn mở mà app báo chưa đăng nhập. Khi app không thấy cửa sổ nào, cả hai nút bị khoá và màn hình nói lý do.',
      },
      {
        note: 'Trong lúc cửa sổ đó mở, **ai vào được máy này thì điều khiển được nó** — và nó đang đăng nhập Shopee. Dùng xong thì đóng lại.',
      },

      { h2: 'Đọc một loạt link' },
      {
        steps: [
          {
            title: 'Dán link vào ô Link sản phẩm',
            body: 'Mỗi dòng một link, **tối đa 20 link** một lượt. Quá số đó app bảo chia làm hai lần.',
          },
          {
            title: 'Bấm Đọc',
            body: 'App mở từng link trong cửa sổ Chrome kia và lấy tên, giá và ảnh của sản phẩm.',
          },
          {
            title: 'Xem bảng Đã đọc được gì',
            body: 'Mỗi link một dòng, bốn cột: **Link**, **Sản phẩm**, **Giá**, **Kết quả**. Link nào không đọc được thì cột **Kết quả** nói lý do, còn những link khác vẫn đọc bình thường.',
          },
        ],
      },
      {
        check: 'Dòng trạng thái phía trên báo **Đọc được 3 trong 4 link.** — con số đó phải khớp với số dòng đọc được trong bảng. Chưa đọc gì thì bảng trống và màn hình nhắc dán link rồi bấm **Đọc**.',
      },

      { h2: 'Từ sản phẩm ra video' },
      {
        p: 'Đọc xong, màn này làm được một việc nữa: đưa ảnh của sản phẩm sang màn **Video tự động** để dựng thành video.',
      },
      {
        steps: [
          {
            title: 'Chọn sản phẩm ở ô Sản phẩm để dựng video',
            body: 'Danh sách này là những sản phẩm vừa đọc được. Chưa chọn gì mà bấm nút bên cạnh thì app nhắc **Hãy chọn một sản phẩm trước.**',
          },
          {
            title: 'Tick ảnh ở ô Ảnh dùng để dựng video',
            body: 'Mặc định tick hết. Bỏ tick những ảnh không muốn đưa vào video.',
          },
          {
            title: 'Tải ảnh về nếu cần',
            body: 'Nút **Tải ảnh về** lấy những ảnh đang tick ra thành file trên máy — dùng khi bạn muốn tự dựng clip, hoặc muốn giữ ảnh lại. Bước này không bắt buộc.',
          },
          {
            title: 'Bấm Đưa ảnh sang màn Video tự động',
            body: 'App chuyển ảnh sang màn **Video tự động** và mở màn đó: tài liệu đã để ở chế độ file trong máy, ảnh đã nằm trong danh sách, và **Chủ đề video** đã điền tên sản phẩm. Kiểm lại **Số video tạo cùng lúc** và **Giọng đọc**, rồi bấm **Tạo video** tại chỗ.',
          },
        ],
      },
      {
        note: 'Ảnh nào **nhỏ hơn 470×470** thì bên làm video không dùng, nên app bỏ lại và nói rõ đã bỏ bao nhiêu. Cả sản phẩm không còn ảnh nào đủ lớn thì nút đó không chuyển gì cả.',
      },

      { h2: 'Những chỗ dễ mắc' },
      {
        table: {
          head: ['Hiện tượng', 'Nghĩa là'],
          rows: [
            ['Hai nút đăng nhập bị khoá, màn hình báo không có cửa sổ trình duyệt nào', 'Chưa mở cửa sổ Chrome bằng `open-chrome.bat` / `open-chrome.sh`, hoặc đã đóng nó'],
            ['Cột Kết quả báo không đọc được', 'Cửa sổ Chrome chưa đăng nhập Shopee, phiên đã hết, hoặc link không phải link sản phẩm. Đăng nhập lại rồi bấm **Cập nhật file cookie**'],
            ['Nhiều hơn … link rồi. Chia làm hai lần.', '**Tối đa 20 link** một lượt'],
            ['Không ảnh nào đủ lớn — … không dùng ảnh nhỏ hơn 470×470.', 'Sản phẩm toàn ảnh nhỏ. Chọn sản phẩm khác'],
            ['Sản phẩm này không có ảnh nào để dựng video.', 'Link đó không có ảnh nào app lấy được'],
            ['Hãy chọn một sản phẩm trước.', 'Ô **Sản phẩm để dựng video** còn trống'],
          ],
        },
      },

      { h2: 'Việc tiếp theo' },
      {
        p: 'Luồng affiliate làm cả dây chuyền này từ đầu tới cuối — đọc link, dựng video cho từng sản phẩm, và đăng — chỉ bằng một lần bấm.',
      },
      { link: 'luong-affiliate' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/link-san-pham-01-screen-en.webp',
          alt: 'The Shop links screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'A Chrome window of its own' },
      {
        p: 'Shopee does not serve a product page to a bare request. The reading happens inside a separate Chrome window — not the browser you use every day — so your own session is not touched and nothing of yours has to be closed.',
      },
      {
        steps: [
          {
            title: 'Open that window',
            body: 'In the AutoReel folder, double-click **`open-chrome.bat`** (Windows) or run **`./open-chrome.sh`** (macOS — double-clicking **`Mở Chrome Shopee.command`** does the same). A Chrome window opens on shopee.vn.',
          },
          {
            title: 'Sign in to Shopee in it',
            body: 'Once. The session lives in the **`.chrome-shopee`** profile beside that file, so next time you only reopen the window.',
          },
          {
            title: 'Leave it open',
            body: 'Keep it open while the app reads. Closing it stops the read button working — and the app cannot open one for you.',
          },
        ],
      },
      {
        p: 'The **Shop links** screen has two buttons for this: **Sign in to Shopee** — opens the sign-in window once, and **Refresh the cookie file** — re-reads the session when the window is open but the app still says you are signed out. With no window reachable, both buttons are disabled and the screen says why.',
      },
      {
        note: 'While that window is open, **anyone who can reach this machine can drive it** — and it is signed in to Shopee. Close it when you are done with it.',
      },

      { h2: 'Reading a batch' },
      {
        steps: [
          {
            title: 'Paste the links into Product links',
            body: 'One per line, **at most 20** in a run. Past that the app tells you to do them in two goes.',
          },
          {
            title: 'Press Read them',
            body: 'The app opens each link in that Chrome window and takes the product\'s name, price and pictures.',
          },
          {
            title: 'Read the What was read table',
            body: 'One row per link, four columns: **Link**, **Product**, **Price**, **Result**. A link that cannot be read says why in the **Result** column, and the other links are read as usual.',
          },
        ],
      },
      {
        check: 'The status line above the table reads **Read 3 of 4 links.** — that number has to match the rows that were read. Before anything is read the table is empty and the screen asks for a link and a press of **Read them**.',
      },

      { h2: 'From a product to a video' },
      {
        p: 'Once the links are read, the screen does one more thing: it hands a product\'s pictures to the **Auto video** screen to be made into a video.',
      },
      {
        steps: [
          {
            title: 'Choose the product under Which product to build from',
            body: 'The list holds the products that were just read. Pressing the button beside it with nothing chosen gets you **Choose a product first.**',
          },
          {
            title: 'Tick the pictures under Pictures to build it from',
            body: 'All of them are ticked to start with. Untick the ones you do not want in the video.',
          },
          {
            title: 'Download them if you want them',
            body: 'The **Download the pictures** button writes the ticked pictures out as files on your machine — for building a clip yourself, or just keeping them. This step is optional.',
          },
          {
            title: 'Press Send these pictures to Auto video',
            body: 'The app moves the pictures to the **Auto video** screen and opens it: the material is already set to local files, the pictures are in the list, and **Video Subject** is filled with the product\'s name. Check **Videos Generated Simultaneously** and **Voice**, then press **Make the video** there.',
          },
        ],
      },
      {
        note: 'A picture **smaller than 470×470** is not used by the video side, so the app leaves it out and tells you how many it dropped. A product with no picture big enough hands nothing over at all.',
      },

      { h2: 'Where it goes wrong' },
      {
        table: {
          head: ['What you see', 'What it means'],
          rows: [
            ['Both sign-in buttons disabled, and the screen says no browser window is reachable', 'The Chrome window was never opened with `open-chrome.bat` / `open-chrome.sh`, or it has been closed'],
            ['The Result column says the link could not be read', 'The Chrome window is not signed in to Shopee, the session has expired, or the link is not a product link. Sign in again, then press **Refresh the cookie file**'],
            ['That is more than … links. Do them in two goes.', '**At most 20 links** in a run'],
            ['None of those pictures is big enough — … will not use one smaller than 470×470.', 'The listing is all small pictures. Try another product'],
            ['That product has no pictures to build a video from.', 'That link carries no picture the app can take'],
            ['Choose a product first.', '**Which product to build from** is still empty'],
          ],
        },
      },

      { h2: 'What next' },
      {
        p: 'The affiliate flow runs this whole chain end to end — read the links, make a video from each product, post them — on one press.',
      },
      { link: 'luong-affiliate' },
    ],
  },
};

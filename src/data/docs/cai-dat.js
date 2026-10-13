/**
 * Cài đặt AutoReel — the first topic, and the shape every other one copies.
 *
 * The `body` is the blog's block vocabulary (`src/data/posts.js`) plus the
 * blocks an instruction needs and an article does not: `steps`, `code`,
 * `check`, `table` and `link`. Those five are documented in
 * `scripts/build-docs.mjs`, which is the only thing that renders them.
 *
 * `figure.src` is a plain string when the picture is the same in both
 * languages — a terminal, a folder in Finder, a Windows settings window, none
 * of which are translated — and `{ vi, en }` when it is a photograph of this
 * app, because the app speaks whichever language it was set to and there is no
 * such thing as one screenshot of it. `verify-build.mjs` enforces that split.
 */
export default {
  key: 'cai-dat',
  group: 'start',
  slug: { vi: 'cai-dat', en: 'install' },
  updated: '2026-10-13',
  order: 1,
  title: { vi: 'Cài đặt AutoReel', en: 'Installing AutoReel' },
  description: {
    vi: 'Cài AutoReel trên Windows và macOS: cần gì trước, chạy install.sh, và năm bước sau khi cài xong.',
    en: 'Install AutoReel on Windows and macOS: what you need first, running install.sh, and the five steps afterwards.',
  },
  lead: {
    vi: 'Khoảng **15 phút**, phần lớn là thời gian máy tải về. Bạn cần **Docker Desktop**, và trên Windows thêm **Git for Windows**.',
    en: 'About **15 minutes**, most of it downloading. You need **Docker Desktop**, and on Windows also **Git for Windows**.',
  },

  body: {
    vi: [
      { h2: 'Cần gì trước khi bắt đầu' },
      {
        ul: [
          '**Windows 10/11** hoặc **macOS** — Intel hay Apple Silicon đều được.',
          'Khoảng **15 GB** trống: ảnh của app cộng với model giọng đọc và nhận dạng tiếng nói.',
          'Kết nối mạng. Lần đầu tải ảnh và model, sau đó thì không cần nữa.',
          'Một **điện thoại Android** — chỉ khi bạn muốn đăng bài lên Shopee Video.',
        ],
      },
      {
        note: 'Không cần cài Python, không cần Git trên macOS, và không cần biết gì về dòng lệnh. Bạn chỉ gõ đúng một câu lệnh, một lần.',
      },

      { h2: 'Bước 1 — Tải thư mục cài đặt' },
      {
        p: 'Bạn nhận được một thư mục tên **AutoReel**. Đặt nó ở đâu cũng được — Desktop, Documents, một ổ đĩa khác. Miễn là **còn 15 GB trống** ở ổ đó, vì toàn bộ dữ liệu sẽ nằm trong đó chứ không nằm rải rác trong máy.',
      },

      { h2: 'Bước 2 — Cài Docker Desktop' },
      {
        p: 'AutoReel chạy trong Docker, nên đây là thứ duy nhất bạn phải cài tay.',
      },
      {
        steps: [
          {
            title: 'Tải Docker Desktop',
            body: 'Vào [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) và tải bản cho máy bạn. Bản miễn phí là đủ — AutoReel không cần gói trả tiền.',
          },
          {
            title: 'Cài như mọi phần mềm khác',
            body: 'Nhấp đôi file vừa tải, bấm Next tới hết. Trên macOS thì kéo biểu tượng Docker vào thư mục **Applications**.',
          },
          {
            title: 'Mở Docker Desktop lên',
            // No picture here, and it is the one step in the section without
            // one. A screenshot of Docker Desktop would have to be taken on
            // somebody's own machine, in their own theme, at their own window
            // size - and the whole instruction is "the whale stops moving",
            // which is a sentence rather than a diagram. Everything that *is*
            // photographed below is this app, which looks the same everywhere.
            body: 'Sau khi cài, mở nó ra và **để nó chạy**. Biểu tượng cá voi ở khay hệ thống (Windows) hoặc thanh menu trên cùng (macOS) phải đứng yên, không nhấp nháy.\n\nĐứng yên là Docker đã sẵn sàng. Nhấp nháy là còn đang khởi động — chờ thêm một lúc.',
          },
        ],
      },
      {
        check: 'Mở được Docker Desktop và thấy biểu tượng của nó đứng yên. Nếu chưa, bước sau sẽ báo `Docker chưa chạy` — cứ mở Docker rồi làm lại.',
      },

      { h2: 'Bước 3 — Chạy install.sh' },
      {
        p: 'Đây là câu lệnh duy nhất bạn phải gõ. Nó kiểm tra từng thứ, cài cái còn thiếu, tải ảnh và model về, rồi in một bảng tổng kết.',
      },
      { h2: 'Trên Windows' },
      {
        steps: [
          {
            title: 'Cài Git for Windows',
            body: 'Tải ở [git-scm.com/download/win](https://git-scm.com/download/win), cài như bình thường. Nó cho bạn **Git Bash** — cửa sổ dòng lệnh để chạy script.',
          },
          {
            title: 'Mở thư mục AutoReel',
            body: 'Nhấp chuột **phải** vào khoảng trống trong thư mục, chọn **Open Git Bash here**.',
          },
          {
            title: 'Gõ câu lệnh',
            body: 'Cửa sổ đen hiện ra, gõ đúng dòng này rồi Enter. Script chạy 10–20 phút tuỳ tốc độ mạng.',
            code: './install.sh',
          },
        ],
      },
      { h2: 'Trên macOS' },
      {
        steps: [
          {
            title: 'Kéo thư mục ra khỏi file .dmg',
            body: 'Nếu bạn nhận được file **AutoReel.dmg**, nhấp đôi để mở nó ra, rồi **kéo thư mục AutoReel bên trong ra Desktop**. Xong thì đóng cửa sổ đó lại.',
            note: '**Bước này không bỏ được.** File `.dmg` khi mở ra là ổ **chỉ đọc**. Chạy thẳng từ trong đó thì script chết ngay ở bước đầu với dòng `Read-only file system` — nghe như hỏng đĩa chứ không như "quên kéo thư mục ra".',
          },
          {
            title: 'Mở Terminal và đi tới thư mục đó',
            body: 'Mở **Terminal**, gõ `cd ` (có dấu cách ở cuối), rồi **kéo thư mục AutoReel vào cửa sổ Terminal** — đường dẫn tự điền vào. Enter.',
          },
          {
            title: 'Gõ câu lệnh',
            body: 'Y như trên Windows:',
            code: './install.sh',
          },
        ],
      },
      {
        check: 'Cuối script có một bảng tổng kết với `✓` cho việc xong, `!` cho việc cần để ý, `x` cho việc chưa xong. Chỉ cần không có dòng `x` nào là bạn đi tiếp được.',
      },
      {
        note: 'Chạy lại `./install.sh` lúc nào cũng được — nó không cài trùng. Muốn xem máy đang thiếu gì mà **không** cài gì: `./install.sh check`.',
      },

      { h2: 'Bước 4 — Mở app' },
      {
        steps: [
          {
            title: 'Windows',
            body: 'Nhấp đôi **`start.bat`** trong thư mục AutoReel. Một cửa sổ dòng lệnh hiện ra và trình duyệt tự mở.',
          },
          {
            title: 'macOS',
            body: 'Gõ `./start.sh` trong Terminal, hoặc nhấp đôi **`Mở AutoReel.command`** nếu macOS chịu mở nó.',
          },
          {
            title: 'Địa chỉ của app',
            body: 'App chạy ngay trên máy bạn, ở địa chỉ này. Ghi nhớ nó — mọi màn hình trong tài liệu này đều nằm trong đó.',
            code: 'http://localhost:31415',
          },
        ],
      },
      {
        note: '`start.sh` **tự kiểm tra bản mới mỗi lần khởi động**: có thì tải về, không thì chạy luôn. Mất mạng thì nó báo không kiểm tra được rồi vẫn mở app bằng bản đang có.',
      },

      { h2: 'Bước 5 — Năm việc sau khi cài xong' },
      {
        p: 'Cài xong là app chạy được ngay, nhưng để dùng hết thì còn năm việc nữa. Mỗi việc có một trang riêng:',
      },
      {
        table: {
          head: ['Việc', 'Khi nào cần', 'Xem trang'],
          rows: [
            ['Nhập mã kích hoạt', 'Luôn luôn', 'Kích hoạt bản quyền'],
            ['Dán khoá AI', 'Trước video đầu tiên', 'Khoá AI'],
            ['Nối Facebook', 'Chỉ khi đăng lên Page', 'Tạo app Meta'],
            ['Dựng bot Telegram', 'Chỉ khi muốn điều khiển từ điện thoại', 'Bot Telegram'],
            ['Ghép điện thoại Android', 'Chỉ khi đăng lên Shopee Video', 'Ghép điện thoại'],
          ],
        },
      },
      { link: 'kich-hoat-ban-quyen' },

      { h2: 'Dữ liệu của bạn nằm ở đâu' },
      {
        p: 'Tất cả trong thư mục **`data/`** bên trong thư mục AutoReel. Không có gì nằm trong Docker, nên cập nhật hay xoá app cũng không mất:',
      },
      {
        table: {
          head: ['Thư mục', 'Nội dung'],
          rows: [
            ['`data/videos`', 'Video đã dựng xong'],
            ['`data/database`', 'Mã kích hoạt, lịch sử, danh sách sản phẩm'],
            ['`data/input`', 'Phim dài để cắt highlight — thả file vào đây'],
            ['`data/models`', 'Model giọng đọc và nhận dạng tiếng nói'],
            ['`data/logs`', 'Nhật ký, kể cả bằng chứng từng lượt đăng Shopee'],
          ],
        },
      },
      {
        note: 'Sao lưu thì chép cả thư mục `data/`. Chỉ cần chép thư mục đó là đủ — phần còn lại tải lại được từ mạng.',
      },

      { h2: 'Khi có trục trặc' },
      {
        table: {
          head: ['Hiện tượng', 'Xem gì'],
          rows: [
            ['App không mở được', 'Docker Desktop đã chạy chưa — biểu tượng dưới khay hệ thống'],
            ['Báo cổng 31415 đang bận', 'Điền `SHORTGPT_PORT=31416` vào file `.env` rồi chạy lại'],
            ['Script báo `permission denied`', 'Gõ `chmod +x *.sh` rồi chạy lại'],
            ['macOS báo `Read-only file system`', 'Chưa kéo thư mục ra khỏi file `.dmg` — xem lại bước 3'],
            ['Máy chạy rất chậm', 'Máy Mac dùng chip Apple Silicon — kiểm tra script có báo đúng kiến trúc không'],
          ],
        },
      },
    ],

    en: [
      { h2: 'What you need first' },
      {
        ul: [
          '**Windows 10/11** or **macOS** — Intel and Apple Silicon both work.',
          'About **15 GB** free: the application image plus the voice and speech-recognition models.',
          'An internet connection. The first run downloads the image and the models; after that it does not need one.',
          'An **Android phone** — only if you want to post to Shopee Video.',
        ],
      },
      {
        note: 'No Python, no Git on macOS, and nothing to know about the command line. You will type exactly one command, once.',
      },

      { h2: 'Step 1 — Get the install folder' },
      {
        p: 'You have been given a folder named **AutoReel**. Put it wherever you like — Desktop, Documents, another drive. Anywhere with **15 GB free** will do, because everything this application stores lives inside that folder rather than scattered around your machine.',
      },

      { h2: 'Step 2 — Install Docker Desktop' },
      { p: 'AutoReel runs in Docker, so this is the one thing you install by hand.' },
      {
        steps: [
          {
            title: 'Download Docker Desktop',
            body: 'From [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/), the build for your machine. The free tier is enough — AutoReel needs nothing paid.',
          },
          {
            title: 'Install it like any other application',
            body: 'Double-click the file and click Next to the end. On macOS, drag the Docker icon into **Applications**.',
          },
          {
            title: 'Open Docker Desktop and leave it running',
            body: 'The whale icon in the system tray (Windows) or the menu bar (macOS) has to sit still, not blink.\n\nA still icon means Docker is ready. A blinking one means it is still starting — give it a moment.',
          },
        ],
      },
      {
        check: 'Docker Desktop opens and its icon has settled. If not, the next step will tell you `Docker is not running` — start Docker and run it again.',
      },

      { h2: 'Step 3 — Run install.sh' },
      {
        p: 'This is the only command you type. It checks each requirement, installs what is missing, downloads the image and the models, and prints a summary.',
      },
      { h2: 'On Windows' },
      {
        steps: [
          {
            title: 'Install Git for Windows',
            body: 'From [git-scm.com/download/win](https://git-scm.com/download/win). It gives you **Git Bash**, the command window the script runs in.',
          },
          {
            title: 'Open the AutoReel folder',
            body: '**Right-click** on empty space inside the folder and choose **Open Git Bash here**.',
          },
          {
            title: 'Type the command',
            body: 'A black window opens. Type this line and press Enter. It takes 10–20 minutes depending on your connection.',
            code: './install.sh',
          },
        ],
      },
      { h2: 'On macOS' },
      {
        steps: [
          {
            title: 'Drag the folder out of the .dmg',
            body: 'If you were given an **AutoReel.dmg**, double-click it and **drag the AutoReel folder inside it to your Desktop**. Then close that window.',
            note: '**This step is not optional.** A `.dmg` opens as a **read-only** disk. Running the script from inside it fails at the first step with `Read-only file system`, which reads like a broken disk rather than like a folder that was never copied out.',
          },
          {
            title: 'Open Terminal and go to the folder',
            body: 'Open **Terminal**, type `cd ` (with a space), then **drag the AutoReel folder into the Terminal window** — the path fills itself in. Press Enter.',
          },
          {
            title: 'Type the command',
            body: 'The same as on Windows:',
            code: './install.sh',
          },
        ],
      },
      {
        check: 'The script ends with a summary table: `✓` for done, `!` for worth a look, `x` for not done. As long as there is no `x`, you can carry on.',
      },
      {
        note: 'You can run `./install.sh` again at any time — it will not install anything twice. To see what is missing **without** installing it: `./install.sh check`.',
      },

      { h2: 'Step 4 — Open the app' },
      {
        steps: [
          {
            title: 'Windows',
            body: 'Double-click **`start.bat`** in the AutoReel folder. A command window opens and your browser follows.',
          },
          {
            title: 'macOS',
            body: 'Type `./start.sh` in Terminal, or double-click **`Mở AutoReel.command`** if macOS agrees to open it.',
          },
          {
            title: 'The address',
            body: 'The app runs on your own machine, at this address. Remember it — every screen in this documentation lives inside it.',
            code: 'http://localhost:31415',
          },
        ],
      },
      {
        note: '`start.sh` **checks for a new version every time it starts**: it downloads one if there is one, and starts straight away if there is not. With no connection it says so and starts the version you already have.',
      },

      { h2: 'Step 5 — Five things to do afterwards' },
      {
        p: 'The app works the moment it is installed, but five things get you the rest of it. Each has its own page:',
      },
      {
        table: {
          head: ['What', 'When you need it', 'Page'],
          rows: [
            ['Enter your licence key', 'Always', 'Activating your licence'],
            ['Paste an AI key', 'Before your first video', 'AI keys'],
            ['Connect Facebook', 'Only to post to a Page', 'Creating a Meta app'],
            ['Set up the Telegram bot', 'Only to drive it from your phone', 'Telegram bot'],
            ['Pair an Android phone', 'Only to post to Shopee Video', 'Pairing a phone'],
          ],
        },
      },
      { link: 'kich-hoat-ban-quyen' },

      { h2: 'Where your data lives' },
      {
        p: 'All of it in the **`data/`** folder inside the AutoReel folder. Nothing lives inside Docker, so updating or removing the app cannot lose it:',
      },
      {
        table: {
          head: ['Folder', 'What is in it'],
          rows: [
            ['`data/videos`', 'Finished videos'],
            ['`data/database`', 'Licence key, history, product list'],
            ['`data/input`', 'Long films to cut highlights from — drop files here'],
            ['`data/models`', 'Voice and speech-recognition models'],
            ['`data/logs`', 'Logs, including the record of every Shopee post'],
          ],
        },
      },
      {
        note: 'To back up, copy the whole `data/` folder. That folder is all you need — the rest downloads again.',
      },

      { h2: 'If something goes wrong' },
      {
        table: {
          head: ['Symptom', 'What to check'],
          rows: [
            ['The app will not open', 'Is Docker Desktop running — the icon in your system tray'],
            ['Port 31415 is already in use', 'Put `SHORTGPT_PORT=31416` in `.env` and start again'],
            ['The script says `permission denied`', 'Type `chmod +x *.sh` and run it again'],
            ['macOS says `Read-only file system`', 'The folder is still inside the `.dmg` — see step 3'],
            ['Everything is very slow', 'On an Apple Silicon Mac, check the script reported the right architecture'],
          ],
        },
      },
    ],
  },
};

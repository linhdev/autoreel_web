/**
 * Cài đặt AutoReel — the first topic, and the one a beginner meets before
 * anything else. It leads with the Windows installer because that is the path
 * that actually exists for a non-technical customer: double-click, follow the
 * wizard, no Git and no terminal. The manual `install.sh` route stays as a
 * fallback for macOS and for people who prefer it.
 */
export default {
  key: 'cai-dat',
  group: 'start',
  slug: { vi: 'cai-dat', en: 'install' },
  updated: '2026-10-20',
  order: 1,
  title: { vi: 'Cài đặt AutoReel', en: 'Installing AutoReel' },
  description: {
    vi: 'Cài AutoReel trên Windows bằng bộ cài AutoReel-Setup.exe, hoặc trên macOS bằng install.sh. Không cần Git hay dòng lệnh trên Windows.',
    en: 'Install AutoReel on Windows with the AutoReel-Setup.exe wizard, or on macOS with install.sh. No Git or command line on Windows.',
  },
  lead: {
    vi: 'Trên **Windows**, bộ cài `AutoReel-Setup.exe` lo mọi thứ — không cần Git, không cần terminal, không cần biết Docker. Trên **macOS**, bạn cần Docker Desktop và Terminal cho đúng một câu lệnh. Lần đầu tải khoảng **11 GB**, mất **10–30 phút** tuỳ mạng.',
    en: 'On **Windows**, the `AutoReel-Setup.exe` installer does everything — no Git, no terminal, no Docker knowledge. On **macOS**, you need Docker Desktop and Terminal for one command. The first run downloads about **11 GB** and takes **10–30 minutes**, depending on your connection.',
  },

  body: {
    vi: [
      { h2: 'Cần gì trước khi bắt đầu' },
      {
        ul: [
          '**Windows 10 21H2 trở lên hoặc Windows 11**, hoặc **macOS** — Intel hay Apple Silicon đều được.',
          'Ít nhất **8 GB RAM** — 16 GB thì thoải mái hơn.',
          'Khoảng **25 GB trống** trên ổ đĩa: image, model giọng đọc và dữ liệu làm việc.',
          'Kết nối mạng cho lần cài đầu. Sau đó app chạy được không mạng, trừ các tính năng cần mạng như đọc link YouTube/TikTok.',
          '**Mã kích hoạt** dạng `AR-XXXX-XXXX-XXXX-XXXX`. Bạn cần mua license trước để nhận link tải bộ cài; mã được hiện cùng link trên trang cảm ơn.',
          'Một **điện thoại Android** — chỉ khi bạn muốn đăng bài lên Shopee Video.',
        ],
      },
      {
        note: 'Nếu bạn không rành máy tính, hãy dùng **bộ cài Windows**. Bạn không phải mở Terminal, không phải gõ lệnh, không phải cài Git.',
      },
      {
        note: 'Chưa quen? Xem [hình minh hoạ và video 72 giây](/tai-lieu/cai-dat/visual/) trước khi bắt đầu.',
      },

      { h2: 'Cách 1 — Bộ cài Windows (khuyến nghị)' },
      {
        p: 'Đây là đường đi của phần lớn khách hàng. Bạn mua license trước, nhận link tải trên trang cảm ơn, rồi bộ cài tự kiểm tra máy, cài Docker nếu thiếu và mở app.',
      },
      {
        steps: [
          {
            title: 'Mua license và nhận link tải',
            body: 'Mở [trang chọn gói](https://autoreelvn.com/bang-gia-phan-mem-tao-video/), chọn gói và thanh toán. Sau khi thanh toán thành công, trang cảm ơn hiện **mã kích hoạt**, nút **Tải AutoReel cho Windows** và **SHA256**. Link tải chỉ hiện sau khi thanh toán.',
          },
          {
            title: 'Nhấp đôi file vừa tải',
            body: 'Windows có thể hiện hộp thoại **SmartScreen** vì file tải từ Internet. Bấm **More info** rồi **Run anyway** để tiếp tục. Đây là cảnh báo mặc định của Windows với file chưa ký số, không phải báo virus.',
          },
          {
            title: 'Làm theo wizard',
            body: 'Wizard có bảy bước: **Bắt đầu → Kiểm tra máy → Bản quyền → Key AI → Đang cài đặt → Điện thoại → Hoàn tất**. Cứ bấm **Tiếp**; bước nào không cần thì bỏ qua.',
          },
          {
            title: 'Kiểm tra máy',
            body: 'Wizard kiểm tra phiên bản Windows, RAM, dung lượng trống, Docker/WSL và cổng mạng. Nếu máy chưa có Docker Desktop, wizard cài giúp. Docker có thể yêu cầu **khởi động lại máy** — cứ làm theo, rồi mở lại bộ cài; wizard sẽ tiếp tục từ chỗ đang dở.',
          },
          {
            title: 'Nhập bản quyền và key AI',
            body: 'Dán mã kích hoạt `AR-...` nếu có. Key AI (DeepSeek/OpenAI/Gemini) có thể bỏ trống và dán sau trong app. Không có key AI thì app vẫn mở, nhưng các tính năng viết kịch bản/chú thích sẽ chưa chạy.',
          },
          {
            title: 'Để máy cài',
            body: 'Bước này tải khoảng **11 GB** và có thể mất **10–30 phút**. Cứ để máy chạy; có thể thu nhỏ cửa sổ và quay lại sau. Đừng tắt máy giữa chừng.',
          },
          {
            title: 'Xong — mở app',
            body: 'Khi wizard báo hoàn tất, bấm **Mở AutoReel**. Trình duyệt mở app tại địa chỉ bên dưới. Nếu cổng 31415 đang bận, wizard tự chọn cổng khác và hiện địa chỉ đúng trên màn hình.',
            code: 'http://localhost:31415',
          },
        ],
      },
      {
        check: 'Wizard kết thúc không còn dấu `x` đỏ, và trình duyệt mở được **http://localhost:31415**. Nếu app không mở, xem mục *Khi có trục trặc* bên dưới.',
      },
      {
        note: 'Cài lại lần hai lên cùng máy là an toàn: bộ cài không ghi đè `.env`, không xoá dữ liệu trong thư mục `data/`, và không tải lại 11 GB nếu image đã có.',
      },

      { h2: 'Cách 2 — macOS' },
      {
        p: 'macOS chưa có bộ cài một chạm như Windows. Bạn cần Docker Desktop và Terminal, nhưng chỉ gõ đúng một câu lệnh.',
      },
      {
        steps: [
          {
            title: 'Tải file .dmg và kéo thư mục ra ngoài',
            body: 'Mở file **AutoReel.dmg** vừa tải, rồi **kéo thư mục AutoReel ra Desktop** (hoặc Documents). Đóng cửa sổ .dmg lại.',
            note: '**Không bỏ qua bước này.** File `.dmg` khi mở là ổ **chỉ đọc**. Chạy thẳng từ trong đó, script chết với `Read-only file system` — nghe như hỏng đĩa chứ không như "quên kéo ra".',
          },
          {
            title: 'Cài Docker Desktop',
            body: 'Tải [Docker Desktop cho Mac](https://www.docker.com/products/docker-desktop/), cài như ứng dụng bình thường, rồi mở nó lên. Chờ đến khi biểu tượng cá voi trên thanh menu **đứng yên**, không còn nhấp nháy.',
          },
          {
            title: 'Mở Terminal và đi tới thư mục',
            body: 'Mở **Terminal**, gõ `cd ` (có dấu cách ở cuối), rồi **kéo thư mục AutoReel vào cửa sổ Terminal** — đường dẫn tự điền. Enter.',
          },
          {
            title: 'Chạy install.sh',
            body: 'Gõ đúng dòng này rồi Enter. Script kiểm tra từng thứ, cài phần còn thiếu và in bảng tổng kết.',
            code: './install.sh',
          },
          {
            title: 'Mở app',
            body: 'Gõ `./start.sh`, hoặc nhấp đôi **Mở AutoReel.command** nếu macOS cho phép. App chạy tại địa chỉ này:',
            code: 'http://localhost:31415',
          },
        ],
      },
      {
        check: 'Cuối `install.sh` có bảng tổng kết với `✓` cho việc xong, `!` cho việc cần để ý, `x` cho việc chưa xong. Không có dòng `x` là đi tiếp được.',
      },
      {
        note: 'Nếu Terminal báo `permission denied`, gõ `chmod +x *.sh` rồi chạy lại. Nếu macOS chặn file `.command`, dùng Terminal như trên — đường đó không bị chặn.',
      },

      { h2: 'Cách 3 — Thủ công trên Windows (chỉ khi cần)' },
      {
        p: 'Chỉ dùng cách này nếu bạn không muốn dùng bộ cài `.exe`, hoặc đang làm theo một bản hướng dẫn cũ. Bạn cần cài **Docker Desktop** và **Git for Windows** trước.',
      },
      {
        steps: [
          {
            title: 'Mở Git Bash trong thư mục AutoReel',
            body: 'Nhấp chuột **phải** vào khoảng trống trong thư mục, chọn **Open Git Bash here**.',
          },
          {
            title: 'Chạy install.sh',
            body: 'Gõ đúng dòng này rồi Enter:',
            code: './install.sh',
          },
        ],
      },
      {
        note: 'Cách này chỉ dành cho người quen dòng lệnh. Nếu bạn mới dùng máy, hãy quay lại **Cách 1**.',
      },

      { h2: 'Sau khi cài — năm việc tiếp theo' },
      {
        p: 'Cài xong là app chạy được, nhưng để dùng hết thì còn năm việc. Mỗi việc có một trang riêng:',
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
        p: 'Tất cả nằm trong thư mục **`data/`** bên trong thư mục AutoReel. Không có gì nằm trong Docker, nên cập nhật hay xoá app cũng không mất:',
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
        note: 'Sao lưu thì chép cả thư mục `data/`. Phần còn lại tải lại được từ mạng.',
      },

      { h2: 'Khi có trục trặc' },
      {
        table: {
          head: ['Hiện tượng', 'Xem gì'],
          rows: [
            ['Windows chặn file cài', 'Bấm **More info → Run anyway**. Đối chiếu SHA256 với trang Releases nếu muốn chắc.'],
            ['Wizard báo Docker chưa chạy', 'Mở Docker Desktop, chờ biểu tượng cá voi đứng yên, rồi bấm Kiểm tra lại.'],
            ['Máy vừa cài Docker và được yêu cầu khởi động lại', 'Khởi động lại, mở lại bộ cài — wizard tiếp tục từ chỗ dở.'],
            ['App không mở được', 'Docker Desktop đã chạy chưa; thử mở lại app hoặc xem log trong thư mục `data/logs`.'],
            ['Báo cổng 31415 đang bận', 'Wizard tự chọn cổng khác. Nếu chạy thủ công, điền `SHORTGPT_PORT=31416` vào `.env` rồi chạy lại.'],
            ['Script báo `permission denied`', 'Gõ `chmod +x *.sh` rồi chạy lại.'],
            ['macOS báo `Read-only file system`', 'Chưa kéo thư mục ra khỏi file `.dmg` — xem lại Cách 2.'],
            ['Đĩa đầy', 'Cần thêm dung lượng; xoá bớt video cũ trong `data/videos` hoặc dọn Docker.'],
          ],
        },
      },
    ],

    en: [
      { h2: 'What you need first' },
      {
        ul: [
          '**Windows 10 21H2 or later, or Windows 11**, or **macOS** — Intel and Apple Silicon both work.',
          'At least **8 GB RAM** — 16 GB is more comfortable.',
          'About **25 GB free** on the drive: images, voice models and working data.',
          'An internet connection for the first install. After that the app works offline, except for features that fetch links from YouTube/TikTok.',
          'An **activation key** in the form `AR-XXXX-XXXX-XXXX-XXXX`. You need to buy a licence first to receive the installer link; the key is shown with the link on the success page.',
          'An **Android phone** — only if you want to post to Shopee Video.',
        ],
      },
      {
        note: 'If you are not comfortable with computers, use the **Windows installer**. You do not open Terminal, type commands or install Git.',
      },
      {
        note: 'New to this? See the [visual guide and 72-second video](/tai-lieu/cai-dat/visual/) before you start.',
      },

      { h2: 'Option 1 — Windows installer (recommended)' },
      {
        p: 'This is the path most customers take. Buy a licence first, get the download link on the success page, then the installer checks the machine, installs Docker if needed and opens the app.',
      },
      {
        steps: [
          {
            title: 'Buy a licence and get the download link',
            body: 'Open the [pricing page](https://autoreelvn.com/en/pricing/), choose a plan and pay. The success page then shows the **activation key**, a **Download AutoReel for Windows** button and the **SHA256**. The download link appears only after payment.',
          },
          {
            title: 'Double-click the file',
            body: 'Windows may show **SmartScreen** because the file came from the internet. Click **More info**, then **Run anyway**. This is Windows’ default warning for an unsigned file, not a virus report.',
          },
          {
            title: 'Follow the wizard',
            body: 'The wizard has seven steps: **Welcome → Check machine → Licence → AI keys → Installing → Phone → Done**. Click **Next**; skip any step you do not need.',
          },
          {
            title: 'Check the machine',
            body: 'The wizard checks Windows version, RAM, free disk, Docker/WSL and the network port. If Docker Desktop is missing, it installs it. Docker may ask to **restart the machine** — do that, then reopen the installer; the wizard resumes where it stopped.',
          },
          {
            title: 'Licence and AI keys',
            body: 'Paste your `AR-...` key if you have one. AI keys (DeepSeek/OpenAI/Gemini) can be left empty and added later in the app. Without an AI key the app opens, but script and caption generation will not run yet.',
          },
          {
            title: 'Let it install',
            body: 'This step downloads about **11 GB** and may take **10–30 minutes**. Leave it running; you can minimise the window and come back. Do not shut down the machine midway.',
          },
          {
            title: 'Done — open the app',
            body: 'When the wizard finishes, click **Open AutoReel**. The browser opens the app at the address below. If port 31415 is busy, the wizard picks another port and shows the correct address on screen.',
            code: 'http://localhost:31415',
          },
        ],
      },
      {
        check: 'The wizard ends with no red `x`, and the browser opens **http://localhost:31415**. If the app does not open, see *Troubleshooting* below.',
      },
      {
        note: 'Installing again on the same machine is safe: the installer does not overwrite `.env`, does not delete data in `data/`, and does not re-download 11 GB if the images are already there.',
      },

      { h2: 'Option 2 — macOS' },
      {
        p: 'macOS does not have the one-click installer yet. You need Docker Desktop and Terminal, but only one command.',
      },
      {
        steps: [
          {
            title: 'Open the .dmg and drag the folder out',
            body: 'Open the **AutoReel.dmg** you downloaded, then **drag the AutoReel folder to the Desktop** (or Documents). Close the .dmg window.',
            note: '**Do not skip this.** A mounted `.dmg` is **read-only**. Running from inside it fails with `Read-only file system` — which reads like a broken disk, not like “you forgot to drag it out”.',
          },
          {
            title: 'Install Docker Desktop',
            body: 'Download [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/), install it like any application, and open it. Wait until the whale icon in the menu bar is **still**, not blinking.',
          },
          {
            title: 'Open Terminal and go to the folder',
            body: 'Open **Terminal**, type `cd ` (with a trailing space), then **drag the AutoReel folder into the Terminal window** — the path fills in. Press Enter.',
          },
          {
            title: 'Run install.sh',
            body: 'Type this line and press Enter. The script checks everything, installs what is missing and prints a summary.',
            code: './install.sh',
          },
          {
            title: 'Open the app',
            body: 'Run `./start.sh`, or double-click **Mở AutoReel.command** if macOS allows it. The app runs here:',
            code: 'http://localhost:31415',
          },
        ],
      },
      {
        check: '`install.sh` ends with a summary using `✓` for done, `!` for attention and `x` for not done. No `x` means you can continue.',
      },
      {
        note: 'If Terminal says `permission denied`, run `chmod +x *.sh` and try again. If macOS blocks the `.command` file, use Terminal — that path is not blocked.',
      },

      { h2: 'Option 3 — Manual Windows install (only if needed)' },
      {
        p: 'Use this only if you do not want the `.exe`, or you are following an older guide. Install **Docker Desktop** and **Git for Windows** first.',
      },
      {
        steps: [
          {
            title: 'Open Git Bash in the AutoReel folder',
            body: 'Right-click an empty area of the folder and choose **Open Git Bash here**.',
          },
          {
            title: 'Run install.sh',
            body: 'Type this line and press Enter:',
            code: './install.sh',
          },
        ],
      },
      {
        note: 'This route is for people comfortable with a command line. If you are new to computers, go back to **Option 1**.',
      },

      { h2: 'After installation — five next steps' },
      {
        p: 'The app runs after installation, but five things make it useful. Each has its own page:',
      },
      {
        table: {
          head: ['Task', 'When', 'Page'],
          rows: [
            ['Enter the activation key', 'Always', 'Activating a licence'],
            ['Add an AI key', 'Before the first video', 'AI keys'],
            ['Connect Facebook', 'Only for posting to a Page', 'Create a Meta app'],
            ['Set up the Telegram bot', 'Only for phone control', 'Telegram bot'],
            ['Pair an Android phone', 'Only for Shopee Video', 'Pairing a phone'],
          ],
        },
      },
      { link: 'kich-hoat-ban-quyen' },

      { h2: 'Where your data lives' },
      {
        p: 'Everything lives in the **`data/`** folder inside the AutoReel folder. Nothing is stored inside Docker, so updating or removing the app does not lose it:',
      },
      {
        table: {
          head: ['Folder', 'Contents'],
          rows: [
            ['`data/videos`', 'Finished videos'],
            ['`data/database`', 'Licence, history, product lists'],
            ['`data/input`', 'Long films for highlight cutting — drop files here'],
            ['`data/models`', 'Voice and speech-recognition models'],
            ['`data/logs`', 'Logs, including evidence of each Shopee posting run'],
          ],
        },
      },
      {
        note: 'To back up, copy the whole `data/` folder. Everything else can be downloaded again.',
      },

      { h2: 'Troubleshooting' },
      {
        table: {
          head: ['Symptom', 'What to check'],
          rows: [
            ['Windows blocks the installer', 'Click **More info → Run anyway**. Compare the SHA256 with the Releases page if you want certainty.'],
            ['The wizard says Docker is not running', 'Open Docker Desktop, wait for the whale icon to stop moving, then click Check again.'],
            ['Docker asked for a restart', 'Restart, reopen the installer — the wizard resumes.'],
            ['The app does not open', 'Is Docker Desktop running? Try opening the app again, or read `data/logs`.'],
            ['Port 31415 is busy', 'The wizard picks another port. For a manual install, set `SHORTGPT_PORT=31416` in `.env` and retry.'],
            ['Script says `permission denied`', 'Run `chmod +x *.sh` and retry.'],
            ['macOS says `Read-only file system`', 'The folder is still inside the `.dmg` — drag it out first.'],
            ['Disk is full', 'Free space: remove old videos in `data/videos` or clean Docker.'],
          ],
        },
      },
    ],
  },
};

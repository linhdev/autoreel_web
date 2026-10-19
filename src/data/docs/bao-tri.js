/**
 * Bảo trì — the topic somebody opens when something is wrong, which is why it
 * is written as instructions rather than as an explanation.
 *
 * Two things shape it. The first is that the app is not a program the customer
 * can see: it is containers under Docker Desktop, so "restart it" means
 * restarting something they have never opened. The steps below are Docker
 * Desktop's own interface, described by what is on screen, because that is the
 * only surface a customer has.
 *
 * The second is the job rule, which is the one way this page can lose
 * somebody's work: a render runs inside the app, so a restart cancels it and
 * clears the queue. That is said twice - once beside "restarting loses
 * nothing", which is true of the data and false of a running job, and once in
 * the failure table - because a sentence that is right about one thing and
 * wrong about the next is read as being about the whole thing.
 *
 * No pictures. Docker Desktop is the customer's own machine, in their own
 * theme, at their own window size - the same argument `cai-dat.js` makes for
 * the one step there that has no screenshot. What is photographed on this site
 * is the app, which looks the same everywhere.
 */
export default {
  key: 'bao-tri',
  group: 'care',
  slug: { vi: 'bao-tri', en: 'maintenance' },
  updated: '2026-10-19',
  order: 1,
  title: { vi: 'Bảo trì và khắc phục sự cố', en: 'Maintenance and troubleshooting' },
  description: {
    vi: 'Giữ AutoReel chạy êm: khởi động lại app bằng nút trong sidebar hoặc trên Docker Desktop, dọn đĩa, sao lưu dữ liệu, và cách xử lý bảy lỗi hay gặp.',
    en: 'Keeping AutoReel running: restarting it from the sidebar button or Docker Desktop, clearing disk space, backing up, and what to do about the seven failures people hit.',
  },
  lead: {
    vi: 'Phần lớn sự cố của AutoReel là sự cố của **Docker Desktop** — thứ chạy bên dưới nó. Bài này nói về việc bảo trì định kỳ, cách khởi động lại, và những lỗi gặp nhiều nhất.',
    en: 'Most AutoReel problems are **Docker Desktop** problems — it is what runs underneath. This page is the routine upkeep, how to restart it, and the failures that come up most.',
  },

  body: {
    vi: [
      { h2: 'Bảo trì định kỳ' },
      {
        p: 'AutoReel không cần chăm sóc hằng ngày. Ba việc dưới đây là tất cả những gì bạn phải để ý, và việc thứ hai thì app tự làm.',
      },
      {
        table: {
          head: ['Việc', 'Bao lâu một lần', 'Cách làm'],
          rows: [
            ['Xem chỗ trống trên ổ đĩa', 'Mỗi tháng', 'Vào **Thư viện video**, xoá những video đã đăng và không dùng nữa'],
            ['Lấy bản mới', 'Mỗi lần mở app', 'Không phải làm gì — `start.bat` và `start.sh` tự kiểm tra bản mới mỗi lần khởi động'],
            ['Sao lưu', 'Trước khi cài lại máy', 'Chép cả thư mục **`data`** trong thư mục AutoReel sang một ổ khác'],
          ],
        },
      },
      {
        note: 'Thư mục **`data`** là toàn bộ những gì bạn tạo ra: video đã dựng, lịch sử, mã kích hoạt, danh sách sản phẩm. Phần còn lại của thư mục AutoReel tải lại được từ mạng — nên sao lưu chỉ cần chép đúng thư mục đó.',
      },

      { h2: 'Khởi động lại' },
      {
        p: 'App chạy trong **container** — những tiến trình riêng do Docker Desktop quản lý. Khởi động lại chúng là việc bình thường và **không mất gì**: video, lịch sử và khoá nằm trong thư mục `data` trên ổ đĩa của bạn, không nằm trong container.',
      },
      {
        note: '**Nhưng đừng khởi động lại giữa lúc đang chạy.** Việc dựng video chạy bên trong app chứ không chạy trong trình duyệt — nên đóng tab thì không sao, còn khởi động lại thì việc đang chạy bị huỷ và hàng đợi phía sau bị xoá sạch. Chạy xong rồi hãy khởi động lại.',
      },
      {
        note: '**Cách nhanh nhất: bấm nút ↻ Khởi động lại ở góc dưới sidebar.** App hỏi xác nhận, khởi động lại container rồi tự mở lại sau khoảng nửa phút. Cách này chỉ dùng được khi app còn mở — app không mở được thì làm theo các bước Docker Desktop bên dưới.',
      },
      {
        steps: [
          {
            title: 'Mở Docker Desktop',
            body: 'Biểu tượng con cá voi ở khay hệ thống (Windows) hoặc thanh menu trên cùng (macOS). Chưa chạy thì mở nó lên và chờ cá voi đứng yên.',
          },
          {
            title: 'Vào mục Containers',
            body: 'Cột bên trái, dòng **Containers**. Danh sách hiện ra là mọi thứ AutoReel đang chạy: app, bộ dựng video, và bot Telegram nếu bạn có dùng.',
          },
          {
            title: 'Chọn rồi bấm Restart',
            body: 'Đưa chuột vào một dòng, ô vuông bên trái hiện ra — tick vào. Tick những dòng của AutoReel rồi bấm **Restart** ở thanh trên cùng. Hoặc nhanh hơn: bấm nút **⋮** ở cuối dòng và chọn **Restart** cho từng cái.',
          },
          {
            title: 'Chờ app dậy',
            body: 'Mỗi dòng có một chấm màu; xanh là đang chạy. App cần khoảng **nửa phút** để mở lại — lâu hơn một chút ở lần đầu sau khi khởi động máy.',
          },
        ],
      },
      {
        check: 'Mở **http://localhost:31415**. Thấy sidebar và đủ màn hình là xong. Còn xoay mãi không ra thì đọc mục dưới.',
      },
      {
        note: 'Không muốn mở Docker Desktop thì trong thư mục AutoReel có sẵn hai file: chạy **`stop.bat`** rồi **`start.bat`** (macOS: `./stop.sh` rồi `./start.sh`). Cách này tắt hẳn rồi dựng lại, và `start` còn kiểm tra bản mới luôn.',
      },

      { h2: 'Khi Docker Desktop không chạy' },
      {
        p: 'App không phải một chương trình chạy nền. Nó chỉ sống khi **Docker Desktop đang mở** — nên đây là thứ đầu tiên cần kiểm khi app không mở được.',
      },
      {
        ul: [
          'Mở **Docker Desktop**. Sau khi khởi động lại máy nó thường tự mở; nếu không thì tìm nó trong menu Start (Windows) hoặc Applications (macOS).',
          'Chờ biểu tượng cá voi **đứng yên**. Còn nhấp nháy nghĩa là Docker đang khởi động, và lúc đó chưa có gì chạy cả.',
          'Ba container chính được đặt chế độ tự dậy cùng Docker, nên phần lớn trường hợp chỉ cần chờ. Không thấy chúng đâu thì chạy **`start.bat`** (hoặc `./start.sh`).',
        ],
      },

      { h2: 'Bảy lỗi hay gặp' },
      {
        table: {
          head: ['Hiện tượng', 'Nguyên nhân', 'Cách xử lý'],
          rows: [
            ['Mở địa chỉ app mà trang trắng, hoặc không mở được', 'Docker Desktop chưa chạy', 'Mở Docker Desktop, chờ cá voi đứng yên, rồi mở lại **http://localhost:31415**'],
            ['Màn nào cũng báo **AutoReel Engine: không kết nối được**', 'Bộ dựng video chưa chạy', 'Khởi động lại như mục trên. Vẫn vậy thì bộ dựng video đang lỗi — lấy log ở mục cuối'],
            ['Đang dựng thì render hỏng, không có câu nào nói hết chỗ', 'Ổ đĩa đầy', 'Xoá bớt video cũ trong **Thư viện video**. Máy cài nhiều thứ thì thêm `docker system df` rồi `docker builder prune`'],
            ['Việc đang chạy tự nhiên mất, và bị đánh dấu là lỗi', 'Vừa khởi động lại giữa lúc nó đang chạy', 'Chạy lại khi hàng đợi trống. Việc dở không tự chạy tiếp — chạy tiếp có thể đăng hai lần, nên app cố ý để nguyên như vậy'],
            ['Báo **cổng 31415 đang bận**', 'Một chương trình khác đang giữ cổng đó', 'Mở file `.env`, đổi thành `SHORTGPT_PORT=31416`, rồi chạy lại `start.bat`'],
            ['Container không chịu khởi động, báo `could not select device driver`', 'Đang dùng file compose có khai GPU trên máy chưa có driver NVIDIA', 'Quay lại **`docker-compose.yml`** gốc. File `docker-compose.nvidia.yml` chỉ dành cho máy đã cài driver NVIDIA đủ mới'],
            ['Dán khoá vào màn Cấu hình mà không ăn', 'Một giá trị cũ đang nằm trong file `.env`', 'Sửa ở màn **Cấu hình** rồi bấm **Lưu** và nhìn dòng trạng thái. Riêng cặp khoá Facebook thì `.env` mới là cái thắng'],
          ],
        },
      },

      { h2: 'Khi cần hỏi' },
      {
        p: 'Gửi kèm **log** thì gần như lần nào cũng ra ngay. Cách lấy: mở **Docker Desktop → Containers**, bấm vào dòng **`autoreel-engine`**, chọn tab **Logs**, rồi chép đoạn cuối — hoặc chụp màn hình. Gửi tới **support@autoreelvn.com**, hoặc Zalo **0326012999**, kèm một câu nói bạn vừa làm gì.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'cai-dat' },
    ],

    en: [
      { h2: 'Routine upkeep' },
      {
        p: 'AutoReel needs nothing daily. The three things below are all it asks of you, and the second one it does itself.',
      },
      {
        table: {
          head: ['What', 'How often', 'How'],
          rows: [
            ['Check the free space', 'Once a month', 'Open the **Video library** and delete videos you have already posted and no longer need'],
            ['Take the new version', 'Every time you start it', 'Nothing to do — `start.bat` and `start.sh` check for a new version on every start'],
            ['Back up', 'Before reinstalling the machine', 'Copy the **`data`** folder out of the AutoReel folder onto another drive'],
          ],
        },
      },
      {
        note: 'The **`data`** folder is everything you have made: finished videos, history, your licence key, the product list. The rest of the AutoReel folder downloads again — so that one folder is the whole backup.',
      },

      { h2: 'Restarting' },
      {
        p: 'The app runs in **containers** — processes Docker Desktop looks after. Restarting them is ordinary and **loses nothing**: the videos, the history and your keys live in the `data` folder on your own disk, not inside a container.',
      },
      {
        note: '**Do not restart in the middle of a run, though.** A render runs inside the app, not in your browser — so closing the tab is fine, while a restart cancels the job that is running and clears the queue behind it. Restart once the queue is empty.',
      },
      {
        note: '**The quickest way: press ↻ Restart at the foot of the sidebar.** The app asks for confirmation, restarts the container and opens itself again in about half a minute. That needs the app to be open — when it will not open at all, use the Docker Desktop steps below.',
      },
      {
        steps: [
          {
            title: 'Open Docker Desktop',
            body: 'The whale in the system tray (Windows) or the menu bar (macOS). If it is not running, start it and wait for the whale to sit still.',
          },
          {
            title: 'Go to Containers',
            body: 'The left column, the **Containers** entry. What it lists is everything AutoReel is running: the app, the video renderer, and the Telegram bot if you use it.',
          },
          {
            title: 'Select, then Restart',
            body: 'Hover a row and a checkbox appears on its left — tick it. Tick the AutoReel rows and press **Restart** in the bar along the top. Or quicker: the **⋮** button at the end of a row, then **Restart**, one at a time.',
          },
          {
            title: 'Wait for it to come back',
            body: 'Each row carries a coloured dot; green means running. The app needs about **half a minute** to be up again — a little longer on the first start after a reboot.',
          },
        ],
      },
      {
        check: 'Open **http://localhost:31415**. A sidebar with every screen in it means you are done. A page that keeps spinning means read on.',
      },
      {
        note: 'If you would rather not open Docker Desktop, the AutoReel folder has two files for exactly this: run **`stop.bat`** and then **`start.bat`** (macOS: `./stop.sh`, then `./start.sh`). That takes everything down and builds it again, and `start` checks for a new version as well.',
      },

      { h2: 'When Docker Desktop is not running' },
      {
        p: 'The app is not a background program. It is alive only while **Docker Desktop is open** — which makes that the first thing to check when it will not open.',
      },
      {
        ul: [
          'Open **Docker Desktop**. After a reboot it usually starts itself; if it does not, it is in the Start menu (Windows) or Applications (macOS).',
          'Wait for the whale to **sit still**. A blinking whale means Docker is still starting, and nothing is up yet.',
          'The three main containers are set to come back with Docker, so most of the time waiting is all it takes. If none of them appear, run **`start.bat`** (or `./start.sh`).',
        ],
      },

      { h2: 'Seven failures worth knowing' },
      {
        table: {
          head: ['Symptom', 'What it is', 'What to do'],
          rows: [
            ['The app address opens a blank page, or will not open at all', 'Docker Desktop is not running', 'Start Docker Desktop, wait for the whale to settle, then open **http://localhost:31415** again'],
            ['Every screen says **AutoReel Engine: không kết nối được**', 'The video renderer is not up', 'Restart as above. If it stays that way the renderer is failing — take the log, last section'],
            ['A render fails out of nowhere, with nothing saying the disk is full', 'The disk is full', 'Delete old videos in the **Video library**. On a machine with more installed: `docker system df`, then `docker builder prune`'],
            ['A job disappears on its own and is marked failed', 'It was running when you restarted', 'Run it again with an empty queue. A half-finished job never resumes by itself — resuming can post twice, which is why the app leaves it failed on purpose'],
            ['It reports **port 31415 is already in use**', 'Something else holds that port', 'Open `.env`, set `SHORTGPT_PORT=31416`, and start again with `start.bat`'],
            ['A container refuses to start: `could not select device driver`', 'A compose file with a GPU in it, on a machine with no NVIDIA driver', 'Go back to the plain **`docker-compose.yml`**. `docker-compose.nvidia.yml` is for machines with a recent NVIDIA driver only'],
            ['A key pasted on the Settings screen has no effect', 'An older value is still sitting in `.env`', 'Edit it on the **Cấu hình** screen, press **Lưu** and watch the status line. The Facebook pair is the exception — there `.env` wins'],
          ],
        },
      },

      { h2: 'Asking for help' },
      {
        p: 'Sending the **log** shortens almost every conversation. To get it: **Docker Desktop → Containers**, click the **`autoreel-engine`** row, open the **Logs** tab, and copy the tail — or take a screenshot of it. Send that to **support@autoreelvn.com**, or Zalo **0326012999**, with one line about what you had just done.',
      },

      { h2: 'What next' },
      { link: 'cai-dat' },
    ],
  },
};

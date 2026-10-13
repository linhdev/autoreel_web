/**
 * Nối Facebook bằng app Meta của chính bạn — the long way, and the one that
 * keeps working by itself.
 *
 * Converted from `HUONG-DAN-FACEBOOK.md` in the install folder, which was
 * written while doing this and carries the four mistakes that cost the most
 * time. Nothing here is written from memory of how the Meta dashboard looks:
 * an interface that changes is a page that has to be re-read against the real
 * thing, and every field name below was checked against the guide.
 *
 * No screenshots, on purpose: everything on this page is Meta's own console,
 * which is not this app and does not look the same from one account to the
 * next. The steps name the fields instead.
 */
export default {
  key: 'facebook-meta-app',
  group: 'connect',
  slug: { vi: 'facebook-meta-app', en: 'facebook-app' },
  updated: '2026-10-13',
  order: 2,
  title: { vi: 'Nối Facebook bằng app Meta', en: 'Connecting Facebook with a Meta app' },
  description: {
    vi: 'Tạo app Meta của chính bạn, bật ba quyền, khai địa chỉ quay về, rồi nối vào AutoReel. Khoảng 10 phút, làm một lần.',
    en: 'Create your own Meta app, enable three permissions, register the redirect address, and connect it to AutoReel. About 10 minutes, once.',
  },
  lead: {
    vi: 'Khoảng **10 phút**, làm **một lần** cho mỗi máy. Cần một tài khoản Facebook là **admin của Page** bạn muốn đăng lên.',
    en: 'About **10 minutes**, done **once** per machine. You need a Facebook account that is an **admin of the Page** you want to post to.',
  },

  body: {
    vi: [
      { h2: 'Chuyện gì thật sự xảy ra ở đây' },
      {
        p: 'Bài đăng đi thẳng từ máy bạn lên Facebook, bằng **app Meta của chính bạn**. App Secret nằm trên máy bạn và không gửi cho ai khác.\n\nĐịa chỉ `autoreelvn.com/facebook/callback/` chỉ là một **trang tĩnh** mà Facebook trả trình duyệt về. Nó không nhận, không lưu, không gửi mã đăng nhập của bạn đi đâu cả — bạn tự chép địa chỉ từ đó dán vào app, và app đổi mã ngay trên máy bạn.',
      },
      {
        note: 'Nếu máy bạn không có tên miền riêng, hoặc Meta chặn luồng này, có **đường ngắn hơn không cần tên miền** — xem [Nối Facebook bằng token] ở cuối trang.',
      },

      { h2: 'Bước 1 — Tạo app Meta' },
      {
        steps: [
          {
            title: 'Mở trang quản lý app',
            body: 'Vào **developers.facebook.com/apps** và đăng nhập bằng tài khoản Facebook của bạn.',
          },
          {
            title: 'Tạo app mới',
            body: 'Bấm **Create app**, chọn loại **Other** (một số giao diện gọi là **Business**), đặt tên gì cũng được — `ShortGPT của <tên bạn>` chẳng hạn — rồi bấm **Create app**.',
          },
          {
            title: 'Ghi lại App ID và App Secret',
            body: 'Vào **App Settings → Basic**. **App ID** là một dãy số. **App Secret** là dãy chữ và số dài, phải bấm **Show** mới thấy.',
          },
        ],
      },
      {
        note: 'App ID và App Secret là **của bạn**. Đừng dùng chung với người khác — ai có App Secret là người đó điều khiển được app.',
      },

      { h2: 'Bước 2 — Thêm Facebook Login' },
      {
        p: 'Meta có hai kiểu giao diện; nhìn sidebar bên trái để biết bạn đang ở kiểu nào.',
      },
      {
        table: {
          head: ['Sidebar có mục', 'Làm gì'],
          rows: [
            ['**Use cases**', 'Bấm **Add use case**, chọn use case có chữ **Facebook Login**'],
            ['**Products**', 'Bấm **+ Add Product**, tìm **Facebook Login**, bấm **Set up**, chọn nền tảng **Web**'],
          ],
        },
      },

      { h2: 'Bước 3 — Bật ba quyền' },
      {
        p: 'Trong **Use cases** (hoặc trong **Facebook Login** nếu giao diện cũ): mở use case quản lý Page — **Manage everything on your Page** → **Customize** → **Permissions and features**. Bấm **Add** cho đủ ba quyền dưới đây, tới khi trạng thái là **Ready for testing**.',
      },
      {
        table: {
          head: ['Quyền', 'Dùng để'],
          rows: [
            ['`pages_show_list`', 'Đọc danh sách Page bạn quản lý'],
            ['`pages_read_engagement`', 'Đọc thông tin Page'],
            ['`pages_manage_posts`', '**Đăng video** lên Page'],
          ],
        },
      },
      {
        note: '**Meta không báo lỗi khi thiếu quyền.** Nó âm thầm bỏ quyền đó khỏi màn hình cấp quyền và chỉ cảnh báo cho nhà phát triển bằng một dải vàng mà người dùng được dặn là phớt lờ. Kết nối vẫn báo thành công, rồi tới lúc đăng bài mới hỏng. Nếu app báo *"Facebook không cấp các quyền sau: pages_manage_posts…"* thì là chỗ này chưa xong.',
      },

      { h2: 'Bước 4 — Khai địa chỉ quay về' },
      {
        p: 'Hai chỗ, và cả hai đều phải bấm Save.',
      },
      {
        steps: [
          {
            title: 'Facebook Login → Settings',
            body: 'Đặt **Client OAuth Login** thành **Yes**, **Web OAuth Login** thành **Yes**, rồi dán đúng chuỗi này vào **Valid OAuth Redirect URIs**. Bấm **Save Changes** ở góc dưới bên phải.',
            code: 'https://autoreelvn.com/facebook/callback/',
          },
          {
            title: 'App Settings → Basic',
            body: 'Điền **App Domains** là `autoreelvn.com` — **tên miền trần**, không có `https://`, không có dấu `/`, không có đường dẫn. Điền **Privacy Policy URL** là `https://autoreelvn.com/privacy/` (bắt buộc khi chuyển app sang Live). Bấm **Save Changes**.',
          },
        ],
      },
      {
        note: '**Trang Basic không tự lưu.** Bấm Save rồi **F5** kiểm lại — giá trị biến mất nghĩa là chưa lưu, thường vì ô App Domains là ô dạng "thẻ": gõ xong phải bấm **Enter** cho chữ thành một thẻ rồi mới Save được.\n\nVà địa chỉ trong **Valid OAuth Redirect URIs** phải khớp **từng ký tự**, **kể cả dấu `/` ở cuối** — Meta so chuỗi, không thông cảm.',
      },
      {
        check: 'Sau khi Save và F5, ô **App Domains** vẫn còn `autoreelvn.com`. Không còn là chưa lưu — làm lại, nhớ bấm Enter cho chữ thành thẻ.',
      },

      { h2: 'Bước 5 — Nối vào app' },
      {
        steps: [
          {
            title: 'Dán App ID và App Secret',
            body: 'Mở app, vào màn **Cấu hình**, tìm khối **Khoá khác**, dán **FACEBOOK APP ID** và **FACEBOOK APP SECRET**, rồi bấm **lưu**.',
          },
          {
            title: 'Bấm Connect Facebook',
            body: 'Sang màn **Facebook**, bấm **Connect Facebook**. Trình duyệt mở trang đăng nhập của Facebook.',
          },
          {
            title: 'Đăng nhập và cấp quyền',
            body: 'Đăng nhập, chọn Page bạn muốn đăng lên, rồi bấm đồng ý cấp quyền.',
          },
          {
            title: 'Chép địa chỉ quay về',
            body: 'Trình duyệt dừng ở trang **autoreelvn.com/facebook/callback/**. Bấm nút **Copy**, hoặc chép nguyên dòng địa chỉ trên thanh trình duyệt.',
          },
          {
            title: 'Dán lại vào app',
            body: 'Quay lại app, mở mục **"Nếu đăng nhập không tự quay về"**, dán vào ô **"Địa chỉ, hoặc chỉ mã"**, rồi bấm **Hoàn tất kết nối**.',
          },
          {
            title: 'Tick Page',
            body: 'Danh sách Page hiện ra. **Tick những Page muốn đăng lên** — chưa tick thì job không có đích.',
          },
        ],
      },
      {
        note: 'Dán trong vòng **10 phút** kể từ lúc bấm Connect. Quá hạn thì bấm **Connect Facebook** lần nữa để lấy link mới; link cũ đã hết hiệu lực.',
      },
      {
        check: 'Danh sách Page hiện ra ở màn Facebook, và **Kiểm tra** báo kết nối còn sống. Nút **Kiểm tra** hỏi thẳng Facebook chứ không đọc lại thứ đã lưu trên máy.',
      },

      { h2: 'Muốn người ngoài nhìn thấy bài' },
      {
        p: 'Mặc định app Meta ở **Development mode**: bài **vẫn lên thật**, nhưng chỉ tài khoản có role trên app nhìn thấy. Muốn công khai thì điền **Privacy Policy URL** ở bước 4, rồi gạt công tắc **App Mode** ở đầu dashboard sang **Live**.',
      },
      {
        note: 'Sau khi Live, `http://localhost` **hết** được Meta chấp nhận. Nếu bạn có điền `FB_REDIRECT_URI` trong file `.env` thì giữ nguyên, đừng xoá.',
      },
      {
        table: {
          head: ['Giới hạn', 'Con số'],
          rows: [
            ['Số reel mỗi Page mỗi ngày', '**30** trong 24 giờ — vượt là Facebook từ chối, không phải lỗi của app'],
            ['Tuổi thọ token người dùng', 'Khoảng **60 ngày** — hết hạn thì bấm Connect lại, không mất gì'],
          ],
        },
      },

      { h2: 'Việc tiếp theo' },
      { link: 'dang-facebook' },
    ],

    en: [
      { h2: 'What is actually happening here' },
      {
        p: 'Posts go straight from your machine to Facebook, through **your own Meta app**. The App Secret stays on your machine and is not sent anywhere else.\n\nThe address `autoreelvn.com/facebook/callback/` is only a **static page** Facebook sends the browser back to. It does not receive, store or forward your login code — you copy the address from it yourself, paste it into the app, and the app exchanges the code locally.',
      },
      {
        note: 'If you have no domain of your own, or Meta blocks this flow, there is a **shorter route that needs no domain** — see [Connecting with a token] at the bottom of this page.',
      },

      { h2: 'Step 1 — Create a Meta app' },
      {
        steps: [
          {
            title: 'Open the app dashboard',
            body: 'Go to **developers.facebook.com/apps** and sign in with your Facebook account.',
          },
          {
            title: 'Create the app',
            body: 'Press **Create app**, choose the type **Other** (some interfaces call it **Business**), give it any name — `ShortGPT của <your name>` will do — and press **Create app**.',
          },
          {
            title: 'Note the App ID and App Secret',
            body: 'Go to **App Settings → Basic**. **App ID** is a number. **App Secret** is a long string of letters and digits, and you have to press **Show** to see it.',
          },
        ],
      },
      {
        note: 'The App ID and App Secret are **yours**. Do not share them — whoever holds the App Secret controls the app.',
      },

      { h2: 'Step 2 — Add Facebook Login' },
      { p: 'Meta has two interface layouts; look at the left sidebar to see which one you have.' },
      {
        table: {
          head: ['Sidebar says', 'What to do'],
          rows: [
            ['**Use cases**', 'Press **Add use case** and choose the one containing **Facebook Login**'],
            ['**Products**', 'Press **+ Add Product**, find **Facebook Login**, press **Set up**, choose the **Web** platform'],
          ],
        },
      },

      { h2: 'Step 3 — Enable three permissions' },
      {
        p: 'In **Use cases** (or in **Facebook Login** on the older layout): open the Page-management use case — **Manage everything on your Page** → **Customize** → **Permissions and features**. Press **Add** for all three below, until each reads **Ready for testing**.',
      },
      {
        table: {
          head: ['Permission', 'What it is for'],
          rows: [
            ['`pages_show_list`', 'Reading the list of Pages you manage'],
            ['`pages_read_engagement`', 'Reading a Page\'s details'],
            ['`pages_manage_posts`', '**Posting video** to a Page'],
          ],
        },
      },
      {
        note: '**Meta does not report a missing permission.** It silently drops it from the consent screen and warns only the developer, in a yellow strip that users are told to ignore. The connection still reports success, and the failure turns up later when you try to post. If the app says *"Facebook did not grant: pages_manage_posts…"*, this step is incomplete.',
      },

      { h2: 'Step 4 — Register the redirect address' },
      { p: 'Two places, and both have to be saved.' },
      {
        steps: [
          {
            title: 'Facebook Login → Settings',
            body: 'Set **Client OAuth Login** to **Yes** and **Web OAuth Login** to **Yes**, then paste exactly this string into **Valid OAuth Redirect URIs**. Press **Save Changes** at the bottom right.',
            code: 'https://autoreelvn.com/facebook/callback/',
          },
          {
            title: 'App Settings → Basic',
            body: 'Set **App Domains** to `autoreelvn.com` — the **bare domain**, with no `https://`, no slash and no path. Set **Privacy Policy URL** to `https://autoreelvn.com/privacy/` (required before the app can go Live). Press **Save Changes**.',
          },
        ],
      },
      {
        note: '**The Basic page does not save itself.** Press Save, then press **F5** and check — a value that has gone means it was never saved, usually because App Domains is a chip field: after typing you must press **Enter** to turn the text into a chip before Save will take it.\n\nAnd the address in **Valid OAuth Redirect URIs** must match **character for character**, **including the trailing slash**. Meta compares strings.',
      },
      {
        check: 'After Save and F5, **App Domains** still reads `autoreelvn.com`. If it is gone, it was not saved — do it again, and press Enter to make the chip first.',
      },

      { h2: 'Step 5 — Connect it to the app' },
      {
        steps: [
          {
            title: 'Paste the App ID and App Secret',
            body: 'Open the app, go to **Cấu hình** (Settings), find the **Khoá khác** (other keys) block, paste **FACEBOOK APP ID** and **FACEBOOK APP SECRET**, then press **lưu** (save).',
          },
          {
            title: 'Press Connect Facebook',
            body: 'Go to the **Facebook** screen and press **Connect Facebook**. Your browser opens Facebook\'s login page.',
          },
          {
            title: 'Sign in and grant',
            body: 'Sign in, choose the Page you want to post to, and agree to the permissions.',
          },
          {
            title: 'Copy the address you came back to',
            body: 'The browser stops at **autoreelvn.com/facebook/callback/**. Press **Copy**, or copy the whole address out of the address bar.',
          },
          {
            title: 'Paste it back into the app',
            body: 'Back in the app, open **"Nếu đăng nhập không tự quay về"** ("if the login did not come back by itself"), paste into **"Địa chỉ, hoặc chỉ mã"**, and press **Hoàn tất kết nối**.',
          },
          {
            title: 'Tick the Pages',
            body: 'The list of Pages appears. **Tick the ones you want to post to** — with nothing ticked, a job has no destination.',
          },
        ],
      },
      {
        note: 'Paste within **10 minutes** of pressing Connect. Past that, press **Connect Facebook** again for a fresh link; the old one has expired.',
      },
      {
        check: 'The Page list appears on the Facebook screen and **Kiểm tra** (check) reports the connection is alive. That button asks Facebook directly rather than reading back what was stored.',
      },

      { h2: 'Making the posts public' },
      {
        p: 'A Meta app starts in **Development mode**: posts **do** go up, but only accounts with a role on the app can see them. To make them public, fill in the **Privacy Policy URL** from step 4, then flip the **App Mode** switch at the top of the dashboard to **Live**.',
      },
      {
        note: 'Once Live, `http://localhost` is **no longer** accepted by Meta. If you set `FB_REDIRECT_URI` in `.env`, leave it as it is.',
      },
      {
        table: {
          head: ['Limit', 'The number'],
          rows: [
            ['Reels per Page per day', '**30** in 24 hours — past that Facebook refuses, and it is not the app\'s error'],
            ['User token lifetime', 'About **60 days** — when it lapses, press Connect again; nothing is lost'],
          ],
        },
      },

      { h2: 'What next' },
      { link: 'dang-facebook' },
    ],
  },
};

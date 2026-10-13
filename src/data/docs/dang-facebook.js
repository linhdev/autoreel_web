/**
 * Đăng Facebook — the flow with no hardware behind it.
 *
 * The contrast with the Shopee page next door is the point of the opening
 * section: this one is an API call, so what can go wrong is account-shaped
 * rather than phone-shaped. The Meta-app walkthrough is summarised in five
 * rows and links to the topic that walks it properly — this page is about
 * posting, and the reader arriving here does not need the dashboard again.
 *
 * The failure strings are `fb.err.*` from `translations.py`, quoted because
 * that is what lands in the Result column; the fixed 30-second gap and the 30
 * Reels per Page per rolling 24 hours are in `shortGPT/social/models.py`.
 */
export default {
  key: 'dang-facebook',
  group: 'sell',
  slug: { vi: 'dang-facebook', en: 'facebook-posting' },
  updated: '2026-10-13',
  order: 6,
  title: { vi: 'Đăng Facebook', en: 'Posting to Facebook' },
  description: {
    vi: 'Nối tài khoản Facebook của bạn, tick Page cần đăng, rồi đưa video lên dạng Reel hoặc video thường — không cần trình duyệt, không cần điện thoại.',
    en: 'Connect your own Facebook account, tick the Pages, then put videos up as Reels or ordinary videos — no browser and no phone involved.',
  },
  lead: {
    vi: 'Bài đăng đi thẳng từ máy bạn lên Page **qua Graph API**. Không mở trình duyệt, không nhập mật khẩu, không cần điện thoại.',
    en: 'Posts go straight from your machine to the Page **through the Graph API**. No browser opens, no password is typed, no phone is involved.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/dang-facebook-01-screen-vi.webp',
          alt: 'Màn Facebook trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Không cần trình duyệt, không cần điện thoại' },
      {
        p: 'Màn **Facebook** đăng video lên Page bằng Graph API của Meta. Nghĩa là khác hẳn màn Shopee: không có điện thoại nào bị điều khiển, không có màn hình nào bị bấm hộ, và không có gì để bạn phải ngồi canh.',
      },
      {
        ul: [
          '**Một tài khoản Facebook là admin của Page** bạn muốn đăng.',
          '**App Meta của chính bạn** — xem mục dưới. Ba quyền, một địa chỉ quay về, làm một lần.',
          '**Video trong máy hoặc trong Thư viện video.** Không cần điện thoại, không cần cáp.',
          '**Một chú thích và một danh sách Page** — cả hai đều chọn trên chính màn này.',
        ],
      },

      { h2: 'App Meta — việc làm một lần' },
      {
        p: 'Bài đăng đi qua app Meta **của bạn**, nên App Secret nằm trên máy bạn chứ không gửi cho ai. Năm bước, khoảng 10 phút, và chỉ làm một lần cho mỗi máy:',
      },
      {
        table: {
          head: ['Bước', 'Việc'],
          rows: [
            ['**1. Tạo app Meta**', 'Vào `developers.facebook.com/apps`, bấm **Create app**, đặt tên bất kỳ. Ghi lại **App ID** và **App Secret** ở App Settings → Basic'],
            ['**2. Thêm Facebook Login**', 'Thêm sản phẩm **Facebook Login** cho nền tảng **Web**'],
            ['**3. Bật ba quyền**', '`pages_show_list` (đọc danh sách Page), `pages_read_engagement` (đọc thông tin Page), `pages_manage_posts` (đăng video lên Page)'],
            ['**4. Khai địa chỉ quay về**', 'Khai **Valid OAuth Redirect URIs** và **App Domains** đúng từng ký tự như app chỉ — cả dấu `/` ở cuối'],
            ['**5. Nối vào app**', 'Dán **App ID** và **App Secret** ở màn **Cấu hình**, sang màn **Facebook** bấm **Connect Facebook**, rồi dán địa chỉ quay về vào ô **Địa chỉ, hoặc chỉ mã** và bấm **Hoàn tất kết nối** — trong vòng 10 phút'],
          ],
        },
      },
      {
        note: '**Khi app Meta còn ở Development mode, chỉ người có role trên app mới nhìn thấy bài nó đăng.** Video vẫn lên thật, nhưng bài chỉ hiện với những tài khoản đó cho tới khi bạn chuyển app sang Live trong dashboard của Meta. Đừng tưởng bài không lên.',
      },

      { h2: 'Đăng một lô' },
      {
        steps: [
          {
            title: 'Kiểm tra kết nối',
            body: 'Khối **Tài khoản Facebook** phải nói **Đang kết nối bằng …**. Chưa có gì thì bấm **Connect Facebook**; kết nối cũ hỏng thì app tự nói và cũng nút đó cấp quyền lại. **Kiểm tra kết nối** hỏi lại cho chắc, **Ngắt kết nối** xoá hẳn.',
          },
          {
            title: 'Tick Page cần đăng',
            body: 'Ở khối **Các Page**, tick trong **Đăng lên những Page này**. Danh sách trống thì bấm **Đọc lại danh sách Page**. Page nào tài khoản không đăng được sẽ bị bỏ qua và app nói rõ bỏ qua bao nhiêu.',
          },
          {
            title: 'Viết chú thích',
            body: 'Dán chú thích vào ô **Chú thích cho mọi dòng** rồi bấm **Chép chú thích xuống mọi dòng**, hoặc để AI viết: điền **Chủ đề / sản phẩm** ở mục **Chủ đề & yêu cầu cho AI**, bấm **Viết chú thích bằng AI**, đọc lại và sửa. **Viết cho từng dòng** viết lại thành mỗi video một câu khác.',
          },
          {
            title: 'Thêm video vào danh sách',
            body: '**Chọn video từ máy tính**, hoặc **Lấy từ thư viện video** cho những video app đã dựng. Mỗi dòng một video với **Đường dẫn video** và **Chú thích**; tick ở cột **Xoá** là đánh dấu dòng không đăng lần này.',
          },
          {
            title: 'Chọn dạng bài và bấm Bắt đầu đăng',
            body: '**Đăng dưới dạng** nhận **Tự chọn theo từng video**, **Luôn là Reel**, hoặc **Luôn là video thường**. Rồi bấm **Bắt đầu đăng**. Dòng nào lỗi thì sửa rồi bấm **Chạy lại phần lỗi**; **Dừng** thì dừng sau bài đang đăng.',
          },
        ],
      },
      {
        p: '**Mỗi video đi tới mọi Page bạn đã tick.** Danh sách video không có cột Page — Page chọn một lần ở trên, nên 5 video với 3 Page là 15 bài. Giữa hai bài có khoảng nghỉ **30 giây**, cố định, không có ô chỉnh: Facebook cho **30 Reel mỗi Page trong 24 giờ**, và app cảnh báo trước nếu lô này vượt con số đó — nhưng vẫn cho chạy, phần dư sẽ bị Facebook từ chối.',
      },
      {
        check: 'Khối **Tiến độ** đếm **x / y đã đăng**, và bảng kết quả có một dòng cho mỗi cặp video–Page với **Trạng thái**, **Bước**, **Kết quả** và cột **Bài đăng** kèm nút **Mở** để mở bài vừa lên. Bằng chứng từng bài nằm trong `data/logs/social/facebook/`.',
      },

      { h2: 'Khi một bài không lên' },
      {
        table: {
          head: ['Kết quả nói gì', 'Nghĩa là'],
          rows: [
            ['Chưa kết nối tài khoản. Bấm Connect Facebook ở khối Tài khoản.', 'Chưa nối, hoặc kết nối đã bị ngắt. Bấm **Connect Facebook**'],
            ['Phiên đăng nhập đã hết hạn. Bấm Connect Facebook để cấp quyền lại.', 'Token hết hạn. Bấm **Connect Facebook** là xong, không phải làm lại app Meta'],
            ['Quyền đã bị thu hồi - có thể bạn vừa đổi mật khẩu Facebook, hoặc bị bỏ khỏi Page. Cấp quyền lại rồi chạy tiếp.', 'Đổi mật khẩu Facebook cũng thu hồi quyền của app. Cấp quyền lại rồi chạy tiếp'],
            ['Tài khoản này không có quyền đăng bài lên Page đó. Cần quyền CREATE_CONTENT trên Page, và cần tick Page lúc cấp quyền.', 'Tài khoản không phải admin, hoặc lúc cấp quyền bạn không tick Page đó'],
            ['Tài khoản này không quản lý Page nào, hoặc chưa tick Page nào lúc cấp quyền.', 'Tick lại Page trong lúc cấp quyền, rồi **Đọc lại danh sách Page**'],
            ['Facebook không nhận định dạng này. Cần MP4 (H.264 hoặc H.265).', 'File không phải MP4 chuẩn. Dựng lại video bằng app'],
            ['Đọc không được thông tin của video. File có thể hỏng hoặc đang bị chương trình khác giữ.', 'Đóng chương trình đang mở file, hoặc dùng file khác'],
            ['Đăng video lên Facebook thất bại. Mạng có thể đã đứt giữa đường.', 'Mạng đứt giữa lúc tải lên. Bấm **Chạy lại phần lỗi**'],
            ['Facebook nhận file nhưng xử lý không xong. Thử lại, hoặc thử một video khác để biết là lỗi file hay lỗi hệ thống.', 'Facebook nhận rồi không xử lý được. Thử lại, hoặc thử video khác để biết là lỗi file hay lỗi hệ thống'],
            ['Facebook tạm chặn vì đăng quá nhanh. Mỗi Page chỉ nhận 30 Reel trong 24 giờ. Đợi rồi chạy lại phần lỗi.', 'Vượt **30 Reel mỗi Page trong 24 giờ**. Chờ rồi chạy lại phần lỗi'],
            ['Facebook đã nhận video nhưng chưa xác nhận bài đã lên. Mở Page kiểm tra trước khi bấm chạy lại - bài có thể đã đăng rồi.', '**Mở Page xem trước** — chạy lại là đăng trùng'],
          ],
        },
      },
      {
        note: 'Token người dùng sống khoảng **60 ngày**; hết hạn thì chỉ cần bấm **Connect Facebook** lần nữa. Token **Page** lấy từ Graph API Explorer thì không hết hạn — đó là lý do có đường dán token ở mục **Nếu đăng nhập không tự quay về**.',
      },

      { h2: 'Việc tiếp theo' },
      {
        p: 'Nếu chưa nối được, hoặc Meta báo thiếu quyền, trang **Tạo app Meta** đi qua từng bước một — kể cả đường dán token không cần tên miền.',
      },
      { link: 'facebook-meta-app' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/dang-facebook-01-screen-en.webp',
          alt: 'The Facebook screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'No browser, no phone' },
      {
        p: 'The **Facebook** screen posts videos to a Page through Meta\'s Graph API. That makes it the opposite of the Shopee screen: no phone is driven, no screen is tapped on your behalf, and there is nothing to sit and watch.',
      },
      {
        ul: [
          '**A Facebook account that is an admin of the Page** you want to post to.',
          '**A Meta app of your own** — see below. Three permissions and one redirect address, done once.',
          '**Videos on this machine, or in the video library.** No phone and no cable.',
          '**A caption and a list of Pages** — both chosen on this screen.',
        ],
      },

      { h2: 'The Meta app — once' },
      {
        p: 'Posts go out through **your** Meta app, so the App Secret sits on your machine and is not sent anywhere else. Five steps, about ten minutes, and once per machine:',
      },
      {
        table: {
          head: ['Step', 'What you do'],
          rows: [
            ['**1. Create a Meta app**', 'At `developers.facebook.com/apps`, press **Create app**, name it anything. Note the **App ID** and **App Secret** under App Settings → Basic'],
            ['**2. Add Facebook Login**', 'Add the **Facebook Login** product for the **Web** platform'],
            ['**3. Enable three permissions**', '`pages_show_list` (read the Pages you manage), `pages_read_engagement` (read Page details), `pages_manage_posts` (post videos to a Page)'],
            ['**4. Register the return address**', 'Fill in **Valid OAuth Redirect URIs** and **App Domains** exactly as the app shows them — including the trailing `/`'],
            ['**5. Connect it to the app**', 'Paste the **App ID** and **App Secret** on the **Settings** screen, go to the **Facebook** screen and press **Connect Facebook**, then paste the return address into **The address, or just the code** and press **Finish connecting** — within ten minutes'],
          ],
        },
      },
      {
        note: '**While the Meta app is in Development mode, only people with a role on it can see what it publishes.** The videos do go up — they are visible only to those accounts until you switch the app to Live in Meta\'s dashboard. Do not read that as the post having failed.',
      },

      { h2: 'Posting a batch' },
      {
        steps: [
          {
            title: 'Check the connection',
            body: 'The group headed **The Facebook account** has to read **Connected as …**. With nothing there, press **Connect Facebook**; when an old connection breaks the app says so and the same button re-grants it. **Check the connection** asks again to be sure, and **Disconnect** removes it entirely.',
          },
          {
            title: 'Tick the Pages',
            body: 'Under **The Pages**, tick them in **Post to these Pages**. With an empty list, press **Read the Pages again**. A Page this account cannot post to is left out, and the app says how many were.',
          },
          {
            title: 'Write the caption',
            body: 'Paste one into **Caption for every row** and press **Copy the caption to every row**, or let the AI write it: fill in **Subject / product** under **Subject & instructions for the AI**, press **Write the caption with AI**, read it and fix it. **Write one per row** rewrites it as a different sentence per video.',
          },
          {
            title: 'Add the videos',
            body: '**Choose videos from this computer**, or **Fill from the video library** for the ones the app made. One video per row with its **Video path** and **Caption**; ticking the **Delete** column marks a row you do not want posted this time.',
          },
          {
            title: 'Choose the kind and press Start posting',
            body: '**Post them as** takes **Decide per video**, **Always a Reel**, or **Always an ordinary video**. Then press **Start posting**. A row that failed can be fixed and retried with **Retry failed**; **Stop** stops after the post in flight.',
          },
        ],
      },
      {
        p: '**Every video goes to every Page you ticked.** The video list has no Page column — the Pages are chosen once above, so 5 videos across 3 Pages is 15 posts. Between two posts there is a fixed **30-second** gap with no control to change it: Facebook allows **30 Reels per Page per 24 hours**, and the app warns beforehand when a run would go past that — it still runs, and the excess is what Facebook refuses.',
      },
      {
        check: 'The **Progress** group counts **x / y posted**, and the results table has a row per video-and-Page pair with **State**, **Step**, **Result** and a **Post** column holding an **Open** link to the post that went up. The record of each post is in `data/logs/social/facebook/`.',
      },

      { h2: 'When a post does not go up' },
      {
        table: {
          head: ['What the Result column says', 'What it means'],
          rows: [
            ['No account is connected. Press Connect Facebook in the Account block.', 'Nothing is connected, or the connection was dropped. Press **Connect Facebook**'],
            ['The sign-in has expired. Press Connect Facebook to grant access again.', 'The token expired. **Connect Facebook** fixes it — the Meta app does not need doing again'],
            ['Access was revoked — you may have changed your Facebook password, or been removed from the Page. Grant access again and run on.', 'Changing your Facebook password also revokes the app. Grant access again and carry on'],
            ['This account cannot post to that Page. It needs CREATE_CONTENT on the Page, and the Page has to be ticked when access is granted.', 'The account is not an admin, or that Page was not ticked while granting access'],
            ['This account manages no Page, or no Page was ticked when access was granted.', 'Tick the Pages again during consent, then press **Read the Pages again**'],
            ['Facebook does not take this format. It needs MP4 (H.264 or H.265).', 'The file is not a standard MP4. Render it again with the app'],
            ['The video could not be read. The file may be damaged, or open in another program.', 'Close whatever holds the file, or use another one'],
            ['Uploading to Facebook failed. The connection may have dropped part way.', 'The network dropped during the upload. Press **Retry failed**'],
            ['Facebook took the file and could not finish with it. Try again, or try another video, to tell a bad file from a bad day.', 'Facebook accepted it and could not process it. Try again, or try another video, to tell a bad file from a bad day'],
            ['Facebook is throttling: too many posts too fast. A Page takes 30 Reels in 24 hours. Wait, then retry the ones that failed.', 'Past **30 Reels per Page per 24 hours**. Wait, then retry the failed ones'],
            ['Facebook took the video but never confirmed the post went up. Open the Page and look before running again — it may already be live.', '**Open the Page first** — retrying can post it twice'],
          ],
        },
      },
      {
        note: 'A user token lasts about **60 days**; when it expires, pressing **Connect Facebook** again is the whole fix. A **Page** token taken from the Graph API Explorer never expires — which is what the token route under **If the sign-in does not come back** is for.',
      },

      { h2: 'What next' },
      {
        p: 'If the connection will not come up, or Meta says a permission is missing, **Creating a Meta app** walks it a step at a time — including the token route that needs no domain of your own.',
      },
      { link: 'facebook-meta-app' },
    ],
  },
};

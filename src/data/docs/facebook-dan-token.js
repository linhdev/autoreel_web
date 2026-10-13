/**
 * Nối Facebook bằng token — the short route, and the one that outlives the long one.
 *
 * It needs no domain, no redirect address and no App Domains, which is exactly
 * why it exists: the flow on the other page fails, when it fails, on a string
 * that has to match character for character, and this one has no such string
 * in it.
 *
 * The last section is the part worth reading even if the Connect flow worked
 * for you: a Page token taken this way does not expire, so the connection is
 * made once and not revisited in sixty days.
 */
export default {
  key: 'facebook-dan-token',
  group: 'connect',
  slug: { vi: 'facebook-dan-token', en: 'facebook-token' },
  updated: '2026-10-13',
  order: 3,
  title: { vi: 'Nối Facebook bằng token', en: 'Connecting Facebook with a token' },
  description: {
    vi: 'Đường ngắn để nối Facebook: lấy token ở Graph API Explorer rồi dán vào app. Không cần tên miền, không cần địa chỉ quay về.',
    en: 'The short route to connecting Facebook: take a token from the Graph API Explorer and paste it in. No domain, no redirect address.',
  },
  lead: {
    vi: 'Không cần tên miền riêng, không cần khai địa chỉ quay về. Cũng làm một lần.',
    en: 'No domain of your own, and no redirect address to register. Also done once.',
  },

  body: {
    vi: [
      { h2: 'Khi nào dùng đường này' },
      {
        ul: [
          'Máy bạn **không có tên miền riêng**, hoặc không muốn dựng một cái.',
          'Luồng **Connect Facebook** bị Meta chặn vì tên miền, dù đã khai đủ.',
          'Bạn muốn token **không bao giờ hết hạn**, khỏi phải nối lại sau 60 ngày.',
        ],
      },
      {
        note: 'Bạn vẫn cần **một app Meta** cho đường này — nó là chỗ chứa token. Nhưng không cần khai **App Domains** hay **Valid OAuth Redirect URIs** ở đó.',
      },

      { h2: 'Lấy token' },
      {
        steps: [
          {
            title: 'Mở Graph API Explorer',
            body: 'Vào **developers.facebook.com/tools/explorer**, và chọn app của bạn ở ô **Meta App** phía trên bên phải.',
          },
          {
            title: 'Tick đủ ba quyền',
            body: 'Ở mục **Permissions**, tick `pages_show_list`, `pages_read_engagement` và `pages_manage_posts`.',
          },
          {
            title: 'Bấm Generate Access Token',
            body: 'Đăng nhập, chọn Page, rồi đồng ý cấp quyền. Ô token hiện ra một chuỗi rất dài.',
          },
          {
            title: 'Chép chuỗi đó',
            body: 'Chép **toàn bộ** chuỗi token. Thiếu một ký tự là hỏng, và nó không báo là thiếu ký tự.',
          },
        ],
      },

      { h2: 'Dán vào app' },
      {
        steps: [
          {
            title: 'Mở màn Facebook',
            body: 'Trong app, vào nhóm **Bán hàng**, màn **Facebook**.',
          },
          {
            title: 'Mở mục dành cho đường này',
            body: 'Mở mục **"Nếu đăng nhập không tự quay về"** — cùng chỗ với đường dán địa chỉ.',
          },
          {
            title: 'Dán vào ô Token để dán',
            body: 'Dán chuỗi vừa chép vào ô **"Token để dán"**, rồi bấm **Kết nối bằng token này**.',
          },
          {
            title: 'Tick Page',
            body: 'Danh sách Page hiện ra. **Tick những Page muốn đăng lên.**',
          },
        ],
      },
      {
        check: 'Danh sách Page hiện ra sau khi bấm **Kết nối bằng token này**. App tự đổi token người dùng sang bản 60 ngày rồi đọc danh sách Page — không cần `Valid OAuth Redirect URIs`, không cần App Domains.',
      },

      { h2: 'Muốn token không bao giờ hết hạn' },
      {
        p: 'Token lấy ở trên là **token người dùng**, sống khoảng 60 ngày. Muốn nó không hết hạn thì lấy **token Page** — mỗi Page có một cái riêng, và nó chỉ chết nếu bạn đổi mật khẩu Facebook hoặc thu hồi quyền của app.',
      },
      {
        steps: [
          {
            title: 'Kéo dài token người dùng',
            body: 'Dán token vào **developers.facebook.com/tools/debug/accesstoken**, rồi bấm **Extend Access Token**. Được bản dài hạn khoảng 60 ngày.',
          },
          {
            title: 'Đổi đường dẫn thành me/accounts',
            body: 'Trong Graph API Explorer, đổi đường dẫn thành `me/accounts` rồi bấm gửi. Kết quả trả về danh sách Page, mỗi Page có một `access_token` riêng.',
            code: 'me/accounts',
          },
          {
            title: 'Chép token của Page',
            body: 'Đó là **token Page**. Chép nó và dán vào app y như trên.',
          },
          {
            title: 'Kiểm lại bằng Debugger',
            body: 'Dán token Page vào Access Token Debugger. Dòng **Expires** phải hiện **Never**.',
          },
        ],
      },
      {
        note: 'Token Page không hết hạn nghĩa là nối **một lần rồi thôi** — không phải quay lại sau 60 ngày.',
      },

      { h2: 'Sáu câu báo lỗi hay gặp' },
      {
        table: {
          head: ['Câu hiện ra', 'Nghĩa là', 'Sửa thế nào'],
          rows: [
            ['*The domain of this URL isn\'t included in the app\'s domains*', 'App Domains thiếu, sai định dạng, hoặc chưa Save', 'Điền `autoreelvn.com` ở App Settings → Basic, bấm Enter cho thành thẻ, Save, F5 kiểm lại'],
            ['*Invalid Scopes: pages_show_list, …*', 'Ba quyền chưa được thêm vào use case', 'Xem bước 3 của trang app Meta'],
            ['App báo *"Cái này không giống địa chỉ đăng nhập Facebook"*', 'Thứ dán vào không có `?code=…` — chép thiếu', 'Chép **nguyên dòng địa chỉ** trên thanh trình duyệt'],
            ['App báo *"Phiên uỷ quyền không khớp hoặc đã quá hạn"*', 'Quá 10 phút, hoặc dùng link của lần bấm trước', 'Bấm **Connect Facebook** lại rồi làm tiếp cho liền mạch'],
            ['*Token đã hết hạn*', 'Token người dùng sống khoảng 60 ngày', 'Bấm **Connect Facebook** lại, hoặc lấy token Page ở trên'],
            ['Đã Live mà Connect vẫn bị chặn vì tên miền', 'Redirect URI hoặc App Domains chưa khớp', 'Dùng **đường dán token** — nó không cần tên miền'],
          ],
        },
      },

      { h2: 'Kiểm tra và ngắt kết nối' },
      {
        p: 'Màn **Facebook** có nút **Kiểm tra** — nó hỏi thẳng Facebook xem kết nối còn sống không, chứ không đọc lại thứ đã lưu trên máy. Nút **Ngắt kết nối** xoá kết nối đã lưu; lần sau phải nối lại từ đầu.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'dang-facebook' },
    ],

    en: [
      { h2: 'When to use this route' },
      {
        ul: [
          'Your machine has **no domain of its own**, or you would rather not set one up.',
          'The **Connect Facebook** flow is blocked by Meta over a domain, even after registering everything.',
          'You want a token that **never expires**, so there is no reconnection in sixty days.',
        ],
      },
      {
        note: 'You still need **a Meta app** for this route — it is what the token belongs to. But you do not need to register **App Domains** or **Valid OAuth Redirect URIs** on it.',
      },

      { h2: 'Getting a token' },
      {
        steps: [
          {
            title: 'Open the Graph API Explorer',
            body: 'Go to **developers.facebook.com/tools/explorer** and choose your app in the **Meta App** box at the top right.',
          },
          {
            title: 'Tick all three permissions',
            body: 'Under **Permissions**, tick `pages_show_list`, `pages_read_engagement` and `pages_manage_posts`.',
          },
          {
            title: 'Press Generate Access Token',
            body: 'Sign in, choose a Page, and agree. The token box fills with a very long string.',
          },
          {
            title: 'Copy that string',
            body: 'Copy the **whole** token. One missing character breaks it, and nothing says a character is missing.',
          },
        ],
      },

      { h2: 'Pasting it into the app' },
      {
        steps: [
          {
            title: 'Open the Facebook screen',
            body: 'In the app, the **Bán hàng** (Selling) group, then the **Facebook** screen.',
          },
          {
            title: 'Open the section for this route',
            body: 'Open **"Nếu đăng nhập không tự quay về"** — the same place the address goes.',
          },
          {
            title: 'Paste into the token box',
            body: 'Paste the token into **"Token để dán"** and press **Kết nối bằng token này** ("connect with this token").',
          },
          {
            title: 'Tick the Pages',
            body: 'The Page list appears. **Tick the ones you want to post to.**',
          },
        ],
      },
      {
        check: 'The Page list appears after pressing **Kết nối bằng token này**. The app exchanges the user token for a 60-day one and reads the Page list — no `Valid OAuth Redirect URIs`, no App Domains.',
      },

      { h2: 'Making the token never expire' },
      {
        p: 'The token above is a **user token**, good for about 60 days. To get one that does not expire, take a **Page token** — each Page has its own, and it dies only if you change your Facebook password or revoke the app.',
      },
      {
        steps: [
          {
            title: 'Extend the user token',
            body: 'Paste the token into **developers.facebook.com/tools/debug/accesstoken** and press **Extend Access Token**. That gives you a long-lived one, about 60 days.',
          },
          {
            title: 'Change the path to me/accounts',
            body: 'In the Graph API Explorer, change the path to `me/accounts` and submit. The result lists your Pages, and each one carries its own `access_token`.',
            code: 'me/accounts',
          },
          {
            title: 'Copy the Page token',
            body: 'That is the **Page token**. Copy it and paste it into the app exactly as before.',
          },
          {
            title: 'Check it in the Debugger',
            body: 'Paste the Page token into the Access Token Debugger. The **Expires** line has to read **Never**.',
          },
        ],
      },
      {
        note: 'A Page token that does not expire means the connection is made **once and not revisited** — no coming back in sixty days.',
      },

      { h2: 'Six messages worth recognising' },
      {
        table: {
          head: ['The message', 'What it means', 'The fix'],
          rows: [
            ['*The domain of this URL isn\'t included in the app\'s domains*', 'App Domains is missing, malformed, or was never saved', 'Set `autoreelvn.com` in App Settings → Basic, press Enter to make the chip, Save, then F5 to check'],
            ['*Invalid Scopes: pages_show_list, …*', 'The three permissions were never added to the use case', 'See step 3 of the Meta app page'],
            ['The app says the address is not a Facebook login', 'What was pasted has no `?code=…` — the copy was short', 'Copy the **whole address** out of the browser\'s address bar'],
            ['The app says the session does not match or has expired', 'More than 10 minutes passed, or the link is from an earlier attempt', 'Press **Connect Facebook** again and finish in one go'],
            ['*Token đã hết hạn* (token expired)', 'A user token lasts about 60 days', 'Press **Connect Facebook** again, or take a Page token above'],
            ['Live, and Connect is still blocked over the domain', 'The redirect URI or App Domains still does not match', 'Use the **token route** — it needs no domain at all'],
          ],
        },
      },

      { h2: 'Checking, and disconnecting' },
      {
        p: 'The **Facebook** screen has a **Kiểm tra** button — it asks Facebook directly whether the connection is alive, rather than reading back what was stored. **Ngắt kết nối** erases the stored connection; the next time you have to connect from the beginning.',
      },

      { h2: 'What next' },
      { link: 'dang-facebook' },
    ],
  },
};

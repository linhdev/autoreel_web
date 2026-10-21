/**
 * Mở app lần đầu — what you see, and the two things worth knowing before you
 * touch anything: where the sidebar groups things, and that every screen is
 * reachable from it.
 */
export default {
  key: 'mo-ung-dung',
  group: 'start',
  slug: { vi: 'mo-ung-dung', en: 'opening-the-app' },
  updated: '2026-10-21',
  order: 2,
  title: { vi: 'Mở app lần đầu', en: 'Opening the app for the first time' },
  description: {
    vi: 'Giao diện AutoReel có gì: sidebar chia nhóm thế nào, mỗi màn làm gì, và thanh chạy ở dưới cùng.',
    en: 'What the AutoReel interface contains: how the sidebar is grouped, what each screen does, and the job bar along the bottom.',
  },
  lead: {
    vi: 'Mọi thứ nằm trong **một cửa sổ trình duyệt**. Không có phần mềm nào phải cài thêm sau bước cài đặt.',
    en: 'Everything lives in **one browser window**. There is no second application to install after the setup step.',
  },

  body: {
    vi: [
      { h2: 'Mở app' },
      {
        p: 'Nhấp đôi **`start.bat`** (Windows) hoặc gõ **`./start.sh`** (macOS) trong thư mục AutoReel. Trình duyệt tự mở ở địa chỉ `http://localhost:31415`.',
      },
      {
        note: '**Ghi nhớ địa chỉ đó.** App không phải một trang web trên mạng — nó chạy trên chính máy bạn. Đóng tab đi rồi mở lại bằng địa chỉ này, không cần chạy lại script.',
      },

      { h2: 'Cột bên trái — toàn bộ app nằm ở đây' },
      {
        p: 'Mười sáu màn hình, chia làm năm nhóm theo **việc bạn đang làm** chứ không theo thứ tự nào khác:',
      },
      {
        table: {
          head: ['Nhóm', 'Trong đó có', 'Khi nào dùng'],
          rows: [
            ['**Tạo video**', 'Video ngắn · Video tự động', 'Khi bạn có một ý tưởng và chưa có gì khác'],
            ['**Từ video có sẵn**', 'Lồng tiếng · Cắt highlight · Xoá logo · Chèn chữ & logo', 'Khi bạn đã có video và muốn làm lại nó'],
            ['**Bán hàng**', 'Affiliate flow · Luồng reup · Luồng review · Link sản phẩm · Shopee · Facebook', 'Khi video đi kèm sản phẩm và phải lên kênh'],
            ['**Kho của bạn**', 'Link từ kênh · Tư liệu · Thư viện video', 'Nguyên liệu và thành phẩm — để dành, tìm lại'],
            ['**Ứng dụng**', 'Cấu hình', 'Khoá, thiết bị, bản quyền'],
          ],
        },
      },
      {
        figure: {
          src: {
            vi: '/docs-img/mo-ung-dung-01-sidebar-vi.webp',
            en: '/docs-img/mo-ung-dung-01-sidebar-en.webp',
          },
          alt: { vi: 'Sidebar của AutoReel với năm nhóm màn hình', en: 'The AutoReel sidebar with its five groups' },
          caption: { vi: 'Năm nhóm, mười tám màn. Nhóm cuối cùng luôn nằm dưới cùng, cạnh nút đổi ngôn ngữ.', en: 'Five groups, eighteen screens. The last one always sits at the bottom, beside the language switch.' },
          width: 228,
          height: 458,
        },
      },
      {
        note: 'Bấm vào tên nhóm để mở ra. Màn đang mở được tô sáng, nên lúc nào cũng biết mình đang ở đâu.',
      },

      { h2: 'Thanh dưới cùng — việc đang chạy' },
      {
        p: 'Dựng video mất vài phút, nên app không bắt bạn ngồi chờ. Mỗi việc bạn bắt đầu sẽ chạy ở phía sau, và thanh dưới cùng là chỗ nó báo cáo.',
      },
      {
        ul: [
          'Bạn **đóng tab cũng được** — việc vẫn chạy tiếp.',
          'Việc của mọi màn hình nằm chung ở đây, nên bắt đầu ở màn này rồi sang màn khác làm tiếp là chuyện bình thường.',
          'Việc xong thì thành phẩm nằm ở **Thư viện video**.',
        ],
      },
      {
        check: 'Bấm thử một việc bất kỳ rồi nhìn thanh dưới cùng: nó phải hiện tên việc và tiến độ. Nếu thanh trống trơn, chưa có gì được bắt đầu.',
      },

      { h2: 'Đổi ngôn ngữ' },
      {
        p: 'Nút **VI | EN** nằm ở góc dưới sidebar. Đổi sang tiếng Anh thì toàn bộ giao diện đổi theo — còn video bạn dựng ra vẫn giữ nguyên ngôn ngữ bạn đã chọn cho nó.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'kich-hoat-ban-quyen' },
    ],

    en: [
      { h2: 'Opening it' },
      {
        p: 'Double-click **`start.bat`** (Windows) or type **`./start.sh`** (macOS) inside the AutoReel folder. Your browser opens at `http://localhost:31415`.',
      },
      {
        note: '**Remember that address.** This app is not a website on the internet — it runs on your own machine. Close the tab and come back with that address; there is no need to run the script again.',
      },

      { h2: 'The left column — the whole app is here' },
      {
        p: 'Sixteen screens, in five groups named after **the work you are doing** rather than anything else:',
      },
      {
        table: {
          head: ['Group', 'Contains', 'When you use it'],
          rows: [
            ['**Make a video**', 'Shorts · Auto video', 'When you have an idea and nothing else yet'],
            ['**From a video you have**', 'Translate · Highlights · Remove logo · Add text & logo', 'When you already have footage and want it to be something else'],
            ['**Selling**', 'Affiliate flow · Reup flow · Review flow · Shop links · Shopee · Facebook', 'When the video carries a product and has to go somewhere'],
            ['**Your material**', 'Channel links · Assets · Video library', 'Ingredients and finished work — to keep, and to find again'],
            ['**The app**', 'Settings', 'Keys, devices, licence'],
          ],
        },
      },
      {
        figure: {
          src: {
            vi: '/docs-img/mo-ung-dung-01-sidebar-vi.webp',
            en: '/docs-img/mo-ung-dung-01-sidebar-en.webp',
          },
          alt: { vi: 'Sidebar của AutoReel với năm nhóm màn hình', en: 'The AutoReel sidebar with its five groups' },
          caption: { vi: 'Năm nhóm, mười tám màn. Nhóm cuối cùng luôn nằm dưới cùng, cạnh nút đổi ngôn ngữ.', en: 'Five groups, eighteen screens. The last one always sits at the bottom, beside the language switch.' },
          width: 228,
          height: 458,
        },
      },
      {
        note: 'Click a group name to open it. The screen you are on is highlighted, so you always know where you are.',
      },

      { h2: 'The bar along the bottom — work in progress' },
      {
        p: 'Rendering takes minutes, so the app does not make you wait for it. Every job you start runs in the background, and that bar is where it reports.',
      },
      {
        ul: [
          'You can **close the tab** — the job keeps running.',
          'Jobs from every screen appear in the same place, so starting something here and going elsewhere to start something else is ordinary.',
          'When a job finishes, what it made is in the **Video library**.',
        ],
      },
      {
        check: 'Start any job and watch the bottom bar: it should show the job and its progress. An empty bar means nothing has been started.',
      },

      { h2: 'Switching language' },
      {
        p: 'The **VI | EN** switch is at the bottom of the sidebar. Switching to English changes the whole interface — the videos you render keep the language you chose for them.',
      },

      { h2: 'What next' },
      { link: 'kich-hoat-ban-quyen' },
    ],
  },
};

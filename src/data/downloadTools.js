/**
 * Copy for `/tai-video-nhanh/` (the bookmarklet and embed page).
 *
 * The two tools on it are links back to the same downloader: a bookmarklet
 * for someone who is already looking at a video, and an embed card for a
 * blogger or shop. Neither needs an account, a key or a script of their own.
 */

export const DOWNLOAD_TOOLS = {
  vi: {
    title: 'Tải video nhanh bằng bookmarklet | AutoReel',
    description:
      'Kéo nút Tải video này lên thanh dấu trang để mở công cụ với link đang xem, hoặc nhúng nút tải video miễn phí vào blog/shop.',
    h1: 'Tải video bằng một cú bấm',
    lead:
      'Đang xem một video và muốn tải ngay? Kéo nút dưới đây lên thanh dấu trang. Lần sau, bấm nút đó trên trang video là công cụ mở ra với link đã điền sẵn.',
    bookmarkletTitle: 'Nút Tải video này',
    bookmarkletText:
      'Kéo nút này lên thanh dấu trang (bookmarks bar). Trên điện thoại, tạo một bookmark mới rồi dán mã bên dưới vào ô địa chỉ.',
    dragLabel: 'Tải video này',
    codeTitle: 'Mã bookmarklet',
    copy: 'Sao chép',
    copied: 'Đã sao chép',
    steps: [
      ['Hiện thanh dấu trang', 'Trên Chrome/Edge: Ctrl+Shift+B (Windows) hoặc Cmd+Shift+B (Mac).'],
      ['Kéo nút', 'Kéo nút “Tải video này” lên thanh dấu trang.'],
      ['Bấm khi đang xem video', 'Mở video công khai, bấm bookmark; trang tải mở ra với link đã điền.'],
    ],
    mobileTitle: 'Trên điện thoại',
    mobileText:
      'Hầu hết trình duyệt di động không cho kéo thả. Tạo bookmark mới, đặt tên “Tải video”, rồi dán mã bookmarklet vào ô địa chỉ của bookmark.',
    embedTitle: 'Nhúng vào blog hoặc shop',
    embedText:
      'Dán đoạn mã này vào nơi bạn muốn hiện nút tải video. Khách bấm là sang trang tải của AutoReel; không cần cài gì thêm.',
    embedSnippet: '<div id="autoreel-download"></div>\n<script src="https://autoreelvn.com/embed.js" async></script>',
    embedNote: 'Xem trước bên dưới. Nút mở trang tải trong tab mới.',
    sections: [
      {
        h2: 'Khi nào bookmarklet hợp hơn dán link',
        paragraphs: [
          'Bạn đang xem một video và không muốn copy link rồi mở tab khác. Bookmarklet lấy địa chỉ hiện tại và mở công cụ với link đã điền sẵn.',
          'Nếu bạn có nhiều link cần tải một lần, dán trực tiếp vào trang tải nhanh hơn: một lần dán, tối đa năm link.',
        ],
        bullets: [
          'Đang xem video trên máy tính: dùng bookmarklet.',
          'Tải nhiều link cùng lúc: mở trang tải và dán.',
          'Trên điện thoại: tạo bookmark thủ công hoặc dán link.',
          'Trên blog hoặc shop: nhúng nút tải.',
        ],
      },
      {
        h2: 'Nhúng nút tải vào blog hoặc shop',
        paragraphs: [
          'Đoạn nhúng là một thẻ div và một script công khai. Khách bấm là sang trang tải của AutoReel; bạn không cần tài khoản, không cần giữ file, không cần API key.',
          'Nên đặt ở cuối bài hướng dẫn, cạnh video, hoặc trên trang sản phẩm nơi khách có thể muốn lưu nội dung.',
        ],
        bullets: [
          'Không lưu dữ liệu khách trên blog của bạn.',
          'Nút mở tab mới; kiểm tra lại trên điện thoại.',
          'Không dùng để tải nội dung riêng tư.',
          'Không cần cài thêm thư viện.',
        ],
      },
      {
        h2: 'Giới hạn của bookmarklet',
        paragraphs: [
          'Bookmarklet chỉ đọc địa chỉ trang đang mở, không đọc nội dung trang và không chạy nền. Nếu trình duyệt chặn javascript:, hãy dán link thủ công.',
        ],
        bullets: [
          'Không hoạt động trên trang chặn javascript:.',
          'Không tải được video cần đăng nhập.',
          'Không bỏ qua giới hạn 20 phút hoặc 95MB.',
          'Không phải tiện ích cài đặt, không cần quyền.',
        ],
      },
      {
        h2: 'Khi nào không nên dùng bookmarklet',
        paragraphs: [
          'Nếu bạn cần tải cả kênh hoặc nhiều video từ một danh sách, mở từng video rồi bấm bookmark là quá chậm. Dùng trang tải với danh sách link, hoặc lấy danh sách kênh rồi xử lý theo lô.',
          'Bookmarklet không lưu lịch sử, không tạo tài khoản và không gửi link đến đâu ngoài trang tải. Nếu bạn không muốn cài bất cứ thứ gì, đây là cách nhẹ nhất.',
          'Nó là một bookmark, không phải dịch vụ chạy nền: chỉ chạy khi bạn bấm, và trình duyệt có thể xoá nó như mọi bookmark khác.',
        ],
        bullets: [
          'Cần tải cả kênh: dùng tính năng link từ kênh trong app.',
          'Cần tải 5 link: dán vào trang tải.',
          'Cần tải video riêng tư: không công cụ nào làm được.',
          'Cần file gốc: trang chỉ trả bản công khai.',
        ],
      },
    ],
    faqTitle: 'Câu hỏi thường gặp',
    faq: [
      ['Bookmarklet có an toàn không?', 'Nó chỉ đọc địa chỉ trang đang mở và mở autoreelvn.com/downloads với link đó. Không đọc nội dung trang, không gửi gì đi nơi khác.'],
      ['Có phải cài tiện ích không?', 'Không. Bookmarklet là một bookmark bình thường; không cần quyền, không cần cập nhật.'],
      ['Có dùng được trên điện thoại không?', 'Có, nhưng phải tạo bookmark thủ công và dán mã, vì trình duyệt di động không kéo thả bookmarklet.'],
      ['Nhúng nút có mất phí không?', 'Không. Đoạn mã là một thẻ div và một script công khai; không cần tài khoản.'],
    ],
    ctaTitle: 'Mở công cụ tải video',
    ctaText: 'Dán link trực tiếp, không cần bookmarklet. Tối đa 5 link một lần, miễn phí.',
    ctaLabel: 'Mở trang tải video',
    terms: 'Chỉ video công khai · Dùng đúng mục đích · Tôn trọng bản quyền',
  },
  en: {
    title: 'Quick download bookmarklet | AutoReel',
    description:
      'Drag the Download this video button to your bookmarks bar, or embed a free download button on your blog or shop.',
    h1: 'Download a video in one click',
    lead:
      'Watching a video and want it now? Drag the button below to your bookmarks bar. Next time, press it on a video page and the tool opens with the link already filled in.',
    bookmarkletTitle: 'The Download this video button',
    bookmarkletText:
      'Drag this button to your bookmarks bar. On a phone, create a bookmark and paste the code below into its address field.',
    dragLabel: 'Download this video',
    codeTitle: 'Bookmarklet code',
    copy: 'Copy',
    copied: 'Copied',
    steps: [
      ['Show the bookmarks bar', 'Chrome/Edge: Ctrl+Shift+B (Windows) or Cmd+Shift+B (Mac).'],
      ['Drag the button', 'Drag “Download this video” onto the bookmarks bar.'],
      ['Press it on a video', 'Open a public video, press the bookmark, and the downloader opens with the link filled in.'],
    ],
    mobileTitle: 'On a phone',
    mobileText:
      'Most mobile browsers do not support dragging. Create a new bookmark, name it “Download video”, and paste the bookmarklet code into its address field.',
    embedTitle: 'Embed it on a blog or shop',
    embedText:
      'Paste this snippet where the download button should appear. A click takes the visitor to the AutoReel downloader; there is nothing else to install.',
    embedSnippet: '<div id="autoreel-download"></div>\n<script src="https://autoreelvn.com/embed.js" async></script>',
    embedNote: 'Preview below. The button opens the downloader in a new tab.',
    sections: [
      {
        h2: 'When the bookmarklet beats pasting a link',
        paragraphs: [
          'You are watching a video and do not want to copy the link and open another tab. The bookmarklet reads the current address and opens the tool with the link already filled in.',
          'If you have several links to fetch at once, pasting them into the downloader is faster: one paste, up to five links.',
        ],
        bullets: [
          'Watching on a desktop: use the bookmarklet.',
          'Fetching several links: open the downloader and paste.',
          'On a phone: create the bookmark manually or paste the link.',
          'On a blog or shop: embed the button.',
        ],
      },
      {
        h2: 'Embedding the button on a blog or shop',
        paragraphs: [
          'The embed is one div and one public script. A click takes the visitor to the AutoReel downloader; you need no account, no file storage and no API key.',
          'Put it at the end of a guide, beside a video, or on a product page where a visitor may want to keep the content.',
        ],
        bullets: [
          'It does not store visitor data on your blog.',
          'The button opens a new tab; test it on a phone.',
          'Do not use it for private content.',
          'No extra library to install.',
        ],
      },
      {
        h2: 'Bookmarklet limits',
        paragraphs: [
          'The bookmarklet reads only the address of the open page; it does not read page content and does not run in the background. If the browser blocks javascript:, paste the link manually.',
        ],
        bullets: [
          'It does not work on pages that block javascript:.',
          'It cannot fetch login-only videos.',
          'It does not bypass the 20-minute or 95MB limit.',
          'It is not an extension and needs no permissions.',
        ],
      },
      {
        h2: 'When not to use the bookmarklet',
        paragraphs: [
          'If you need a whole channel or a list of videos, opening each one and pressing a bookmark is too slow. Use the downloader with a list of links, or pull the channel list and process it in a batch.',
          'It stores no history, creates no account and sends the link nowhere except the downloader. If you do not want to install anything, it is the lightest option.',
          'It is a bookmark, not a background service: it runs only when you press it, and the browser can delete it like any other bookmark.',
        ],
        bullets: [
          'A whole channel: use the channel-link feature in the app.',
          'Five links: paste them into the downloader.',
          'A private video: no tool can fetch it.',
          'The original master file: the page returns the public copy only.',
        ],
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      ['Is the bookmarklet safe?', 'It reads the address of the page you are on and opens autoreelvn.com/downloads with that link. It does not read page content or send anything elsewhere.'],
      ['Do I need to install an extension?', 'No. A bookmarklet is an ordinary bookmark: no permissions and no updates.'],
      ['Does it work on a phone?', 'Yes, but you have to create the bookmark manually and paste the code; mobile browsers do not support dragging bookmarklets.'],
      ['Is the embed free?', 'Yes. It is one div and one public script; no account is required.'],
    ],
    ctaTitle: 'Open the download tool',
    ctaText: 'Paste a link directly, no bookmarklet needed. Up to five links at a time, free.',
    ctaLabel: 'Open the downloader',
    terms: 'Public videos only · Use it lawfully · Respect copyright',
  },
};

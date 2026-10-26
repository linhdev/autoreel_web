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

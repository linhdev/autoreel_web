/**
 * The public download page: URL, SEO copy and the words the builder writes.
 *
 * The interactive labels (queue position, error messages) live in
 * `public/downloads/app.js` so the page can stay a static document. This file
 * is the long-form, indexable half.
 */

export const DOWNLOADS = {
  path: { vi: '/downloads/', en: '/en/downloads/' },
};

/** The bookmarklet and embed instructions, written by `build-download-tools.mjs`. */
export const QUICK = {
  path: { vi: '/tai-video-nhanh/', en: '/en/quick-download/' },
};

/**
 * Public Turnstile site key for the AUTOREELVN widget (domain autoreelvn.com).
 * Site keys are public by design — they are embedded in every page — so the
 * production key is the default. That matters because the old fallback was
 * Cloudflare's "always passes" test key: a build that forgot the environment
 * variable silently shipped a widget reading "For testing only".
 *
 * Set TURNSTILE_SITE_KEY to the test key in local development when the widget
 * is being worked on; production builds need no variable.
 */
export const TURNSTILE_SITE_KEY =
  process.env.TURNSTILE_SITE_KEY || '0x4AAAAAAFmRDi9HzZJVqvrJ';

export const downloads = {
  vi: {
    title: 'Tải video TikTok, Douyin, YouTube miễn phí — AutoReel',
    description:
      'Dán link video công khai để tải về máy: TikTok, Douyin, YouTube, Bilibili, Hongguoduanju, iQiyi. Miễn phí, không cần đăng nhập, tối đa 20 phút.',
    badge: 'MIỄN PHÍ · KHÔNG CẦN ĐĂNG NHẬP',
    h1: 'Tải video về máy',
    lead:
      'Dán một hoặc nhiều link video công khai, chờ vài chục giây, tải file MP4 về máy. Không cần cài đặt, không cần đăng nhập.',
    freeLabel: 'Miễn phí',
    trust: [
      'Không lưu file',
      'Link tải hết hạn sau 30 phút',
      'IP được băm một chiều',
    ],
    timeline: ['Xếp hàng', 'Đang tải', 'Hoàn tất'],
    form: {
      heading: 'Dán link video',
      label: 'Link video (mỗi dòng một link)',
      placeholder: 'Mỗi dòng một link video công khai',
      button: 'Download',
      note: 'Mỗi video tối đa 20 phút · 95MB',
      hint: 'Mỗi dòng một link.',
      kindLabel: 'Chọn loại file',
      kinds: { video: 'Video', audio: 'Âm thanh', cover: 'Ảnh bìa', subtitle: 'Phụ đề' },
      audioFormatLabel: 'Định dạng âm thanh',
      audioFormats: {
        m4a: 'M4A (nhỏ, phổ biến)',
        mp3: 'MP3 (tương thích rộng)',
        wav: 'WAV (chất lượng gốc, file lớn)',
      },
      audioFormatNote: 'WAV có thể vượt 95MB với video dài.',
      quick: 'Cài nút “Tải video này” cho trình duyệt',
      reference: 'Cần làm video mới theo video mẫu? Xem 拍同款 →',
      pushLabel: 'Báo khi tải xong',
      pushHint: 'Trình duyệt sẽ báo khi file sẵn sàng. Trên iPhone, thêm trang vào màn hình chính trước.',
      pushDenied: 'Trình duyệt đã chặn thông báo.',
    },
    stepsTitle: 'Cách dùng',
    steps: [
      {
        title: 'Dán link',
        text: 'Một hoặc nhiều link công khai từ một trong sáu nền tảng bên dưới.',
      },
      {
        title: 'Xác minh',
        text: 'Một bước kiểm tra ngắn để chặn bot. Không cần tài khoản.',
      },
      {
        title: 'Tải về',
        text: 'Video được xếp hàng và xử lý lần lượt. Thường 30–60 giây.',
      },
    ],
    featuresTitle: 'Không chỉ tải video',
    featuresLead:
      'AutoReel làm tiếp phần còn lại: xoá logo, tạo video từ kịch bản, thêm giọng đọc tiếng Việt và đăng thẳng lên Shopee/Facebook.',
    featuresCta: 'Xem tất cả tính năng',
    platformsTitle: 'Nền tảng hỗ trợ',
    platforms: ['TikTok', 'Douyin', 'YouTube', 'Bilibili', 'Hongguoduanju', 'iQiyi'],
    platformsNote:
      'Một số video cần đăng nhập hoặc bị nền tảng chặn có thể không tải được. Thử video khác nếu gặp lỗi.',
    limitsTitle: 'Giới hạn',
    limits: [
      'Video công khai, tối đa 20 phút.',
      'Tối đa 95MB.',
      'Tối đa 5 video mỗi lần gửi; 6 video/giờ và 20 video/ngày mỗi IP.',
      'Không nhận playlist, livestream hoặc video riêng tư.',
    ],
    queueTitle: 'Vì sao phải chờ?',
    queueText:
      'Máy chủ tải xử lý lần lượt để giữ tốc độ và tránh bị nền tảng chặn. Hàng đợi thường ngắn; nếu đông, bạn sẽ thấy vị trí của mình.',
    faqTitle: 'Câu hỏi thường gặp',
    faq: [
      {
        q: 'Có mất phí không?',
        a: 'Không. Công cụ miễn phí và không cần tài khoản.',
      },
      {
        q: 'Video có bị lưu lại không?',
        a: 'Không. File được xoá sau khoảng 2 giờ; link tải hết hạn sau 30 phút.',
      },
      {
        q: 'Video dài bao lâu thì tải được?',
        a: 'Tối đa 20 phút và 95MB mỗi video.',
      },
      {
        q: 'Có tải được nhiều video một lần không?',
        a: 'Có. Mỗi lần gửi tối đa 5 link, mỗi dòng một link. Các video được xếp hàng và trả về lần lượt.',
      },
      {
        q: 'Có tải được phụ đề không?',
        a: 'Có, nếu video có phụ đề do nền tảng cung cấp (YouTube, TikTok, Bilibili…). Video không có phụ đề sẽ báo lỗi thay vì tạo phụ đề bằng AI.',
      },
      {
        q: 'Vì sao có video không tải được?',
        a: 'Nền tảng có thể chặn IP, yêu cầu đăng nhập, hoặc video không công khai. Hãy thử video khác.',
      },
      {
        q: 'Trang này có xoá logo không?',
        a: 'Không. Trang chỉ tải video gốc. AutoReel có công cụ xoá logo riêng.',
      },
      {
        q: 'Được dùng cho mục đích gì?',
        a: 'Chỉ video công khai, cho mục đích cá nhân hoặc khi bạn có quyền sử dụng; tôn trọng bản quyền.',
      },
    ],
    privacyTitle: 'Quyền riêng tư',
    privacyText:
      'IP được băm một chiều, không lưu IP thô. URL chỉ lưu tạm để xử lý và được xoá khi job kết thúc. Trang dùng Google AdSense để hiển thị quảng cáo; Google có thể dùng cookie và dữ liệu trình duyệt theo chính sách của Google.',
    legalText: 'Điều khoản sử dụng',
    legalHref: '/dieu-khoan/',
    ctaTitle: 'Cần nhiều hơn một video?',
    ctaText:
      'AutoReel tải hàng loạt, tạo video và đăng lên Shopee/Facebook tự động.',
    ctaLabel: 'Xem AutoReel',
    ctaRoute: 'pricing',
  },
  en: {
    title: 'Download TikTok, Douyin, YouTube videos free — AutoReel',
    description:
      'Paste a public video link and save it: TikTok, Douyin, YouTube, Bilibili, Hongguoduanju, iQiyi. Free, no login, up to 20 minutes.',
    badge: 'FREE · NO LOGIN NEEDED',
    h1: 'Download videos to your device',
    lead:
      'Paste one or several public video links, wait a few dozen seconds, and save the MP4 files. No installation, no account.',
    freeLabel: 'Free',
    trust: [
      'No file storage',
      'Download links expire in 30 minutes',
      'IPs are hashed',
    ],
    timeline: ['Queued', 'Downloading', 'Ready'],
    form: {
      heading: 'Paste a video link',
      label: 'Video links (one per line)',
      placeholder: 'One public video link per line',
      button: 'Download',
      note: 'Up to 20 minutes · 95MB per video',
      hint: 'One link per line.',
      kindLabel: 'File type',
      kinds: { video: 'Video', audio: 'Audio', cover: 'Cover', subtitle: 'Subtitles' },
      audioFormatLabel: 'Audio format',
      audioFormats: {
        m4a: 'M4A (small, common)',
        mp3: 'MP3 (widely compatible)',
        wav: 'WAV (original quality, large)',
      },
      audioFormatNote: 'WAV can exceed 95MB for a long video.',
      quick: 'Get the “Download this video” bookmarklet',
      reference: 'Need a video at a reference’s pace? See the feature →',
      pushLabel: 'Notify me when it finishes',
      pushHint: 'Your browser will tell you when the file is ready. On iPhone, add this page to the Home Screen first.',
      pushDenied: 'Notifications are blocked in this browser.',
    },
    stepsTitle: 'How it works',
    steps: [
      {
        title: 'Paste the link',
        text: 'One or more public links from one of the six platforms below.',
      },
      {
        title: 'Verify',
        text: 'A short bot check. No account needed.',
      },
      {
        title: 'Save',
        text: 'The video is queued and processed in order; usually 30–60 seconds.',
      },
    ],
    featuresTitle: 'More than a downloader',
    featuresLead:
      'AutoReel handles the rest: logo removal, script-to-video, Vietnamese voice, and publishing straight to Shopee/Facebook.',
    featuresCta: 'See all features',
    platformsTitle: 'Supported platforms',
    platforms: ['TikTok', 'Douyin', 'YouTube', 'Bilibili', 'Hongguoduanju', 'iQiyi'],
    platformsNote:
      'Some videos need a login or are blocked by the platform and may not download. Try another video if one fails.',
    limitsTitle: 'Limits',
    limits: [
      'Public videos, up to 20 minutes.',
      'Up to 95MB.',
      'Up to 5 videos per submission; 6 videos/hour and 20 videos/day per IP.',
      'No playlists, livestreams or private videos.',
    ],
    queueTitle: 'Why is there a queue?',
    queueText:
      'The download machine processes one job at a time to keep quality predictable and avoid platform blocks. The queue is usually short; if it is not, you will see your position.',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'Is it free?',
        a: 'Yes. The tool is free and needs no account.',
      },
      {
        q: 'Do you keep the video?',
        a: 'No. The file is deleted after about 2 hours and the download link expires after 30 minutes.',
      },
      {
        q: 'How long can a video be?',
        a: 'Up to 20 minutes and 95MB per video.',
      },
      {
        q: 'Can I download several videos at once?',
        a: 'Yes. Send up to 5 links at a time, one per line. They are queued and delivered one after another.',
      },
      {
        q: 'Can I download subtitles?',
        a: 'Yes, when the video has subtitles provided by the platform (YouTube, TikTok, Bilibili…). A video with none reports that instead of generating them with AI.',
      },
      {
        q: 'Why did a video fail?',
        a: 'The platform may block the address, require a login, or the video may not be public. Try another video.',
      },
      {
        q: 'Does this remove logos or watermarks?',
        a: 'No. This page downloads the source video. AutoReel has a separate logo-removal tool.',
      },
      {
        q: 'What may I use it for?',
        a: 'Public videos only, for personal use or when you have the rights; respect copyright.',
      },
    ],
    privacyTitle: 'Privacy',
    privacyText:
      'IP addresses are stored only as a one-way hash, never raw. The URL is kept only while the job runs and is cleared when it ends. The page uses Google AdSense to show ads; Google may use cookies and browser data under its own policies.',
    legalText: 'Terms of use',
    legalHref: '/en/terms/',
    ctaTitle: 'Need more than one video?',
    ctaText:
      'AutoReel downloads in bulk, creates videos and publishes to Shopee/Facebook automatically.',
    ctaLabel: 'See AutoReel',
    ctaRoute: 'pricing',
  },
};

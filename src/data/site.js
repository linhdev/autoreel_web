/**
 * Site-wide content: brand, navigation, hero, how-it-works, demo, proof, CTA, footer.
 * All copy is kept verbatim from the approved v6 landing page so it stays editable in one place.
 */

export const site = {
  name: 'AutoReel',
  tagline: 'AI Content Automation Platform',
  domain: 'autoreelvn.com',
  email: 'support@autoreelvn.com',
  phone: '0326012999',
  zaloUrl: 'https://zalo.me/0326012999',
  whatsappUrl: 'https://wa.me/84326012999',
  linkedinUrl: 'https://www.linkedin.com/in/linhbui291298',
  brandLine: 'Create. Process. Publish. Automate.',
};

/** Registered business details shown in the footer (required for VN commercial pages). */
export const businessInfo = {
  name: 'HỘ KINH DOANH BQL',
  lines: [
    'Mã số kinh doanh: 037098008905',
    'Đăng ký lần đầu: 21/05/2026',
    'Đăng ký tại: Hà Nội, Việt Nam',
    'Nơi cấp: Phòng Kinh Tế Hạ Tầng Và Đô Thị',
  ],
};

export const navLinks = [
  { label: 'Workflow', href: '#workflows' },
  { label: 'Lợi ích', href: '#benefits' },
  { label: 'Demo', href: '#demo' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  badge: 'AI CONTENT AUTOMATION',
  headlineLine1: 'Tạo video hàng loạt.',
  headlineLine2: 'Xử lý tự động. Đăng thẳng lên nền tảng.',
  subheadline: {
    before: 'Biến ',
    strong1: 'sản phẩm, video có sẵn hoặc ý tưởng',
    middle: ' thành nội dung hoàn chỉnh và tự động đăng lên ',
    strong2: 'Shopee, Facebook/Reels',
    after: ' chỉ trong một workflow.',
  },
  support: 'Không cần chuyển qua nhiều tool. Không cần đăng thủ công từng video.',
  primaryCta: { label: 'Xem Demo', href: '#demo' },
  secondaryCta: { label: 'Dùng thử AutoReel', href: '#pricing' },
  trustChips: [
    'Affiliate Flow',
    'Reup Flow',
    'AI Review',
    'AI Voice tiếng Việt',
    'Auto Publish',
  ],
};

/**
 * Hero workflow visual — rendered as connected cards with an animated light trail.
 * `icon` maps to a lucide-react icon name resolved in HeroVisual.jsx.
 */
export const heroFlow = [
  {
    icon: 'Package',
    title: 'PRODUCT / VIDEO / IDEA',
    caption: 'Nguồn đầu vào của bạn',
  },
  {
    icon: 'Bot',
    title: 'AUTOREEL',
    caption: 'AI Content Automation',
  },
  {
    icon: 'Cog',
    title: 'CREATE + PROCESS',
    caption: 'Script · Voice · Subtitle · Highlight · Branding',
  },
  {
    icon: 'Clapperboard',
    title: 'FINAL VIDEO + CAPTION',
    caption: 'Sẵn sàng publish',
  },
  {
    icon: 'Rocket',
    title: 'SHOPEE / FACEBOOK',
    caption: 'Auto Publish',
  },
];

export const howItWorks = {
  titleBefore: 'Chỉ',
  titleHighlight: '4 bước',
  titleAfter: 'từ input đến publish',
  steps: [
    { num: '01', title: 'Input', description: 'Sản phẩm, URL hoặc video.' },
    { num: '02', title: 'Chọn Flow', description: 'Affiliate, Reup hoặc Review.' },
    {
      num: '03',
      title: 'AutoReel xử lý',
      description: 'AI Content, Video, Voice, Subtitle, Branding, Caption.',
    },
    { num: '04', title: 'Publish', description: 'Shopee / Facebook / Reels.' },
  ],
};

export const demo = {
  badge: 'DEMO THỰC TẾ',
  headline: 'Xem AutoReel hoạt động thay vì chỉ đọc tính năng.',
  subheadline: 'Từ input → tạo/xử lý video → AI Caption → Auto Publish.',
  examples: [
    'Affiliate: 10 sản phẩm → 10 video → Publish',
    'Reup: Video dài → Highlight → Branding → Reels',
    'Review: 1 video → AI Analyze → nhiều video mới',
  ],
  cta: { label: 'Xem Demo', href: '#contact' },
  /**
   * The 16:9 cut, recorded from the running app: `tools/record-demo.mjs --set
   * short` in the ShortGPT repo, then `tools/demo-stitch.mjs --set short`.
   * 1m34s, 1080p, Vietnamese narration with a burned-in subtitle band.
   *
   * Here rather than on YouTube on purpose: the player is `preload="none"`,
   * so a visitor who does not press play downloads none of the 10 MB, and
   * nobody's consent is needed to load it. If it moves to YouTube instead,
   * clear `videoSrc`, set `youtubeId`, and the facade below swaps over
   * without touching the component.
   */
  videoSrc: '/demo/autoreel-demo.mp4',
  youtubeId: '',
  videoTitle: 'Video demo AutoReel',
  placeholder: {
    title: 'Video Demo Placeholder',
    caption: 'Nhúng YouTube hoặc MP4 demo AutoReel tại đây.',
  },
};

export const proof = {
  headline: 'Được xây dựng từ nhu cầu làm content thực tế',
  subheadline: 'Chỉ hiển thị số liệu thật. Không dùng testimonial giả.',
  /**
   * Real figures, counted from the app's own database on 2026-10-09 — not
   * estimated and not rounded up. The note below only renders while a metric
   * is still a placeholder, so it is gone now; it stays here for the day a
   * number has to come back out.
   *
   *   501  rows in `videos`, every one `status = generated`, the oldest
   *        2026-09-20 and the newest the morning this was counted.
   *   189  of 241 rows in `jobs` finished `succeeded` (43 failed, 9 cancelled
   *        — a workflow that breaks is not a workflow completed, so they are
   *        not in the figure).
   *     2  Shopee Video and Facebook/Reels, which is what this page already
   *        calls "nền tảng" in the FAQ.
   *
   * The `+` carries the ones that arrive after this was written.
   */
  metrics: [
    { value: 501, placeholder: '', suffix: '+', label: 'Video đã tạo' },
    { value: 189, placeholder: '', suffix: '+', label: 'Workflow đã hoàn thành' },
    { value: 2, placeholder: '', suffix: '', label: 'Nền tảng được hỗ trợ' },
  ],
  note: 'Hãy thay “XX” bằng số liệu thực tế trước khi publish.',
};

export const finalCta = {
  badge: 'AUTOREEL',
  headline: 'Đừng dành cả ngày cho những thao tác có thể tự động hóa.',
  flowLine: 'Tạo → Xử lý → Đăng.',
  supporting:
    'Để AutoReel xử lý workflow video, còn bạn tập trung vào nội dung, sản phẩm và tăng trưởng.',
  primaryCta: { label: 'Liên hệ Zalo', href: 'https://zalo.me/0326012999' },
  secondaryCta: { label: 'WhatsApp', href: 'https://wa.me/84326012999' },
  contactNote: 'Zalo / WhatsApp: 0326012999',
  brandLine: 'AutoReel — AI Content Automation',
  brandTagline: 'Create. Process. Publish. Automate.',
};

export const footer = {
  links: [
    { label: 'Workflow', href: '#workflows' },
    { label: 'Demo', href: '#demo' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  copyright: '© 2026 AutoReel. All rights reserved.',
};

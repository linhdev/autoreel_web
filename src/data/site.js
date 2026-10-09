/**
 * Site-wide content: brand, navigation, hero, how-it-works, demo, proof, CTA, footer.
 *
 * **Every translatable block is `{ vi, en }`.** Vietnamese is the default and
 * the original; the English is a translation written to sell rather than to
 * match word for word, so a sentence may be split or reordered — that is why
 * emphasis lives inside the string as `**markers**` and not in `before` /
 * `highlight` / `after` fields. See `rich()` in `ui/RichText.jsx`.
 *
 * Anything language-neutral — the brand block, contact details, the registered
 * business lines, icon names, route keys — stays a plain export. It is not that
 * those never change, it is that they do not change *with the language*, and
 * wrapping them would invite a translator to edit a phone number.
 *
 * Read through `useCopy()` from `src/i18n/copy.jsx`, never imported directly by
 * a component: importing this file gets you both languages at once.
 */

/** Brand and contact details. Not translated — a domain and a phone number read the same everywhere. */
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

/**
 * Registered business details shown in the footer (required for VN commercial pages).
 * Vietnamese on purpose, and marked `lang="vi"` where it renders on the English page:
 * this is the wording on the registration certificate, not a description of the product.
 */
export const businessInfo = {
  name: 'HỘ KINH DOANH BQL',
  lines: [
    'Mã số kinh doanh: 037098008905',
    'Đăng ký lần đầu: 21/05/2026',
    'Đăng ký tại: Hà Nội, Việt Nam',
    'Nơi cấp: Phòng Kinh Tế Hạ Tầng Và Đô Thị',
  ],
};

/**
 * `to` is a key from `src/data/routes.js`, not a URL — the language decides
 * which slug it becomes. See `useHref`.
 */
export const navLinks = {
  vi: [
    { label: 'Workflow', to: 'workflow' },
    { label: 'Lợi ích', to: 'benefits' },
    { label: 'Demo', to: 'demo' },
    { label: 'Bảng giá', to: 'pricing' },
    { label: 'FAQ', to: 'faq' },
  ],
  en: [
    { label: 'Workflow', to: 'workflow' },
    { label: 'Benefits', to: 'benefits' },
    { label: 'Demo', to: 'demo' },
    { label: 'Pricing', to: 'pricing' },
    { label: 'FAQ', to: 'faq' },
  ],
};

export const hero = {
  vi: {
    badge: 'AI CONTENT AUTOMATION PLATFORM',
    headlineLine1: 'Tạo video hàng loạt.',
    headlineLine2: 'Xử lý tự động. Đăng thẳng lên nền tảng.',
    subheadline:
      'Biến **sản phẩm, video có sẵn hoặc ý tưởng** thành nội dung hoàn chỉnh và tự động đăng lên **Shopee, Facebook/Reels** chỉ trong một workflow.',
    support: 'Không cần chuyển qua nhiều tool. Không cần đăng thủ công từng video.',
    primaryCta: { label: 'Xem Demo', to: 'demo' },
    secondaryCta: { label: 'Dùng thử AutoReel', to: 'pricing' },
    trustChips: [
      'Affiliate Flow',
      'Reup Flow',
      'AI Review',
      'AI Voice tiếng Việt',
      'Auto Publish',
    ],
  },
  en: {
    badge: 'AI CONTENT AUTOMATION PLATFORM',
    // Kept as short as the claim allows. The Vietnamese runs to two lines here;
    // a longer English headline wraps to five and pushes the buttons off the
    // bottom of a laptop screen, which is the one thing the hero may not do.
    headlineLine1: 'Create video in bulk.',
    headlineLine2: 'Processed and published, automatically.',
    subheadline:
      'Turn **a product, an existing video or an idea** into finished content and publish it to **Shopee, Facebook/Reels** automatically — in one workflow.',
    support: 'No switching between tools. No uploading each video by hand.',
    primaryCta: { label: 'Watch the demo', to: 'demo' },
    secondaryCta: { label: 'Try AutoReel', to: 'pricing' },
    trustChips: ['Affiliate Flow', 'Reup Flow', 'AI Review', 'Vietnamese AI Voice', 'Auto Publish'],
  },
};

/**
 * Hero workflow visual — rendered as connected cards with an animated light trail.
 * `icon` maps to a lucide-react icon name resolved in HeroVisual.jsx.
 * The node titles are product vocabulary and read the same in both languages,
 * so only the captions are translated.
 */
export const heroFlow = {
  vi: [
    { icon: 'Package', title: 'PRODUCT / VIDEO / IDEA', caption: 'Nguồn đầu vào của bạn' },
    { icon: 'Bot', title: 'AUTOREEL', caption: 'AI Content Automation Platform' },
    {
      icon: 'Cog',
      title: 'CREATE + PROCESS',
      caption: 'Script · Voice · Subtitle · Highlight · Branding',
    },
    { icon: 'Clapperboard', title: 'FINAL VIDEO + CAPTION', caption: 'Sẵn sàng publish' },
    { icon: 'Rocket', title: 'SHOPEE / FACEBOOK', caption: 'Auto Publish' },
  ],
  en: [
    { icon: 'Package', title: 'PRODUCT / VIDEO / IDEA', caption: 'Whatever you start from' },
    { icon: 'Bot', title: 'AUTOREEL', caption: 'AI Content Automation Platform' },
    {
      icon: 'Cog',
      title: 'CREATE + PROCESS',
      caption: 'Script · Voice · Subtitle · Highlight · Branding',
    },
    { icon: 'Clapperboard', title: 'FINAL VIDEO + CAPTION', caption: 'Ready to publish' },
    { icon: 'Rocket', title: 'SHOPEE / FACEBOOK', caption: 'Auto Publish' },
  ],
};

/**
 * The hero's running line. Language-neutral: a number is a number.
 *
 * `batchSize` is the same 30 the Team and Personal plans advertise
 * (`pricing.js`), and it is repeated here rather than imported because the two
 * mean different things — one is a cap you buy, this one is a counter on an
 * animation. If the plans ever diverge, this one should follow the smaller.
 */
export const line = {
  batchSize: 30,
  /** Must match the `10s` on the station keyframes in `globals.css`. */
  cycleMs: 10000,
};

export const howItWorks = {
  vi: {
    title: 'Chỉ **4 bước** từ input đến publish',
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
  },
  en: {
    title: 'Just **4 steps** from input to publish',
    steps: [
      { num: '01', title: 'Input', description: 'A product, a URL or a video.' },
      { num: '02', title: 'Pick a flow', description: 'Affiliate, Reup or Review.' },
      {
        num: '03',
        title: 'AutoReel works',
        description: 'AI Content, Video, Voice, Subtitle, Branding, Caption.',
      },
      { num: '04', title: 'Publish', description: 'Shopee / Facebook / Reels.' },
    ],
  },
};

export const demo = {
  vi: {
    badge: 'DEMO THỰC TẾ',
    headline: 'Xem AutoReel hoạt động thay vì chỉ đọc tính năng.',
    subheadline: 'Từ input → tạo/xử lý video → AI Caption → Auto Publish.',
    examples: [
      // The batch figure is the plan's, so it matches `pricing.js`. An example
      // promising 10 next to a table promising 30 is the kind of gap a buyer
      // notices and nobody can answer.
      'Affiliate: 10 sản phẩm → 30 video → Publish',
      'Reup: Video dài → Highlight → Branding → Reels',
      'Review: 1 video → AI Analyze → nhiều video mới',
    ],
    cta: { label: 'Xem Demo', to: 'contact' },
    videoTitle: 'Video demo AutoReel',
    placeholder: {
      title: 'Video Demo Placeholder',
      caption: 'Nhúng YouTube hoặc MP4 demo AutoReel tại đây.',
    },
  },
  en: {
    badge: 'REAL DEMO',
    headline: 'Watch AutoReel run instead of reading a feature list.',
    subheadline: 'From input → video created and processed → AI caption → auto publish.',
    examples: [
      'Affiliate: 10 products → 30 videos → Publish',
      'Reup: Long video → Highlight → Branding → Reels',
      'Review: 1 video → AI analyse → many new videos',
    ],
    cta: { label: 'Watch the demo', to: 'contact' },
    videoTitle: 'AutoReel demo video',
    placeholder: {
      title: 'Video Demo Placeholder',
      caption: 'Embed a YouTube video or an AutoReel MP4 here.',
    },
  },
  /**
   * The 16:9 cut, recorded from the running app: `tools/record-demo.mjs --set
   * short` in the ShortGPT repo, then `tools/demo-stitch.mjs --set short`.
   * 1m34s, 1080p, **Vietnamese narration with a Vietnamese subtitle band burned
   * into the picture** — so the English page plays the same Vietnamese video.
   * A second, English recording is a separate job: change `say` in
   * `tools/demo/short.mjs` and re-run it.
   *
   * Served from this site rather than YouTube on purpose: the player is
   * `preload="none"`, so a visitor who does not press play downloads none of the
   * 10 MB. If it moves to YouTube instead, clear `videoSrc`, set `youtubeId`,
   * and the facade below swaps over without touching the component.
   */
  videoSrc: '/demo/autoreel-demo.mp4',
  youtubeId: '',
};

export const proof = {
  vi: {
    headline: 'Được xây dựng từ nhu cầu làm content thực tế',
    subheadline: 'Chỉ hiển thị số liệu thật. Không dùng testimonial giả.',
    metrics: [
      { value: 501, placeholder: '', suffix: '+', label: 'Video đã tạo' },
      { value: 189, placeholder: '', suffix: '+', label: 'Workflow đã hoàn thành' },
      { value: 2, placeholder: '', suffix: '', label: 'Nền tảng được hỗ trợ' },
    ],
    note: 'Hãy thay “XX” bằng số liệu thực tế trước khi publish.',
  },
  en: {
    headline: 'Built from real content work',
    subheadline: 'Real figures only. No invented testimonials.',
    metrics: [
      { value: 501, placeholder: '', suffix: '+', label: 'Videos created' },
      { value: 189, placeholder: '', suffix: '+', label: 'Workflows completed' },
      { value: 2, placeholder: '', suffix: '', label: 'Platforms supported' },
    ],
    note: 'Replace “XX” with the real figure before publishing.',
  },
  /**
   * Real figures, counted from the app's own database on 2026-10-09 — not
   * estimated and not rounded up. The note above only renders while a metric is
   * still a placeholder, so it is gone now; it stays for the day a number has
   * to come back out.
   *
   *   501  rows in `videos`, every one `status = generated`, the oldest
   *        2026-09-20 and the newest the morning this was counted.
   *   189  of 241 rows in `jobs` finished `succeeded` (43 failed, 9 cancelled
   *        — a workflow that breaks is not a workflow completed, so they are
   *        not in the figure).
   *     2  Shopee Video and Facebook/Reels, which is what this page already
   *        calls "nền tảng" in the FAQ.
   *
   * The `+` carries the ones that arrive after this was written. The numbers are
   * the same in both languages and live in the tables above; this comment is the
   * record of where they came from.
   */
};

export const finalCta = {
  vi: {
    badge: 'AUTOREEL',
    headline: 'Đừng dành cả ngày cho những thao tác có thể tự động hóa.',
    flowLine: 'Tạo → Xử lý → Đăng.',
    supporting:
      'Để AutoReel xử lý workflow video, còn bạn tập trung vào nội dung, sản phẩm và tăng trưởng.',
    contactNote: 'Zalo / WhatsApp: 0326012999',
    brandTagline: 'Create. Process. Publish. Automate.',
    primaryCtaLabel: 'Liên hệ Zalo',
  },
  en: {
    badge: 'AUTOREEL',
    headline: 'Stop spending the day on work a machine can do.',
    flowLine: 'Create → Process → Publish.',
    supporting:
      'Let AutoReel run the video workflow while you focus on the content, the product and the growth.',
    contactNote: 'Zalo / WhatsApp: 0326012999',
    brandTagline: 'Create. Process. Publish. Automate.',
    primaryCtaLabel: 'Message on Zalo',
  },
  // The two buttons are the same wherever you are reading: same app, same number.
  primaryCta: { href: 'https://zalo.me/0326012999' },
  secondaryCta: { label: 'WhatsApp', href: 'https://wa.me/84326012999' },
  brandLine: 'AutoReel — AI Content Automation Platform',
};

export const footer = {
  vi: {
    links: [
      { label: 'Workflow', to: 'workflow' },
      { label: 'Demo', to: 'demo' },
      { label: 'Bảng giá', to: 'pricing' },
      { label: 'FAQ', to: 'faq' },
      { label: 'Liên hệ', to: 'contact' },
    ],
    columns: { links: 'Liên kết', contact: 'Liên hệ' },
    copyright: '© 2026 AutoReel. All rights reserved.',
  },
  en: {
    links: [
      { label: 'Workflow', to: 'workflow' },
      { label: 'Demo', to: 'demo' },
      { label: 'Pricing', to: 'pricing' },
      { label: 'FAQ', to: 'faq' },
      { label: 'Contact', to: 'contact' },
    ],
    columns: { links: 'Links', contact: 'Contact' },
    copyright: '© 2026 AutoReel. All rights reserved.',
  },
};

/**
 * The strings React components used to carry inline — aria-labels, the skip
 * link, the button that opens the menu. They were invisible to a reader but
 * still spoken aloud, so they belong here with everything else.
 */
export const ui = {
  vi: {
    skipToContent: 'Bỏ qua điều hướng',
    backToTop: 'về đầu trang',
    mainNav: 'Điều hướng chính',
    mobileNav: 'Điều hướng di động',
    contact: 'Liên hệ',
    menuOpen: 'Mở menu',
    menuClose: 'Đóng menu',
    languageLabel: 'Ngôn ngữ',
    lineRunning: 'Đang chạy',
    videoUnsupported: 'Trình duyệt của bạn không hỗ trợ phát video.',
    playVideo: 'Phát',
    heroVisual:
      'Workflow AutoReel: nguồn vào PRODUCT / VIDEO / IDEA, qua AUTOREEL, qua bước CREATE + PROCESS, tạo FINAL VIDEO + CAPTION và Auto Publish lên SHOPEE / FACEBOOK.',
  },
  en: {
    skipToContent: 'Skip navigation',
    backToTop: 'back to top',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageLabel: 'Language',
    lineRunning: 'Running',
    videoUnsupported: 'Your browser cannot play this video.',
    playVideo: 'Play',
    heroVisual:
      'The AutoReel workflow: input is a PRODUCT / VIDEO / IDEA, it goes through AUTOREEL and the CREATE + PROCESS stage, producing a FINAL VIDEO + CAPTION that is auto-published to SHOPEE / FACEBOOK.',
  },
};

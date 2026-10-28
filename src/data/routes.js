/**
 * Every URL the site answers on — one per section of the page — and the
 * search-engine copy for each.
 *
 * The page is a single scroll, so each of these URLs renders *the same*
 * sections; what differs is which one the browser lands on and what the
 * `<head>` says. That is the point: Google treats everything after a `#` as
 * part of the URL it already indexed, so `/#pricing`, `/#faq` and `/` are one
 * page with one title. Giving each section its own path gives each its own
 * title, its own description and its own entry in the sitemap.
 *
 * This file is the **single source**: the React app imports it for links and
 * for the document title, and `scripts/build-routes.mjs` imports it after
 * `vite build` to write the static HTML for every path and the sitemap. A URL
 * that is wrong here is wrong in one place.
 *
 * Slugs are Vietnamese and keyword-heavy on purpose — `/bang-gia-phan-mem-tao-video`
 * rather than `/pricing`. They are also permanent: changing one later means the
 * old URL 404s unless a redirect is added, so treat them as fixed.
 */

/** Canonical host. Every absolute URL in the head and the sitemap is built from this. */
export const SITE_URL = 'https://autoreelvn.com';

/** Vietnamese is the default and lives at the root; English is prefixed with `/en`. */
export const DEFAULT_LANG = 'vi';

/**
 * Which languages actually have pages.
 *
 * This drives everything at once: which HTML files `scripts/build-routes.mjs`
 * writes, whether `hreflang` and `og:locale:alternate` appear at all, and
 * whether the language switch renders. Adding a language here without adding
 * its half of every data file would ship pages of the wrong language, so the
 * parity check in `scripts/verify-build.mjs` refuses that combination.
 */
export const LOCALES = ['vi', 'en'];

/** `<html lang>` and `og:locale` differ from the URL prefix. */
export const LOCALE_TAGS = {
  vi: { html: 'vi', og: 'vi_VN' },
  en: { html: 'en', og: 'en_US' },
};

/**
 * `section` is the DOM id the route scrolls to — `null` means the top of the page.
 *
 * `meta` holds the title and description the search result shows. The Vietnamese
 * ones lead with what somebody would actually type; the English ones do the same
 * for an English query rather than translating the Vietnamese word for word.
 *
 * Trailing slashes are deliberate. Cloudflare Pages serves `slug/index.html` at
 * `/slug/` and redirects `/slug` to it, so the slash form is the one that costs
 * no redirect and the one the canonical tag names.
 */
const baseRoutes = [
  {
    key: 'home',
    section: null,
    slug: { vi: '/', en: '/en/' },
    meta: {
      vi: {
        title: 'AutoReel - AI Content Automation | Tạo và đăng video tự động',
        description:
          'AutoReel giúp Affiliate và Creator tạo, xử lý và đăng video tự động lên Shopee và Facebook/Reels trong một workflow.',
      },
      en: {
        // Kept under ~60 characters: past that Google truncates the tail, and
        // the tail is where the keyword sits.
        title: 'AutoReel - AI Content Automation | Auto-publish video',
        description:
          'AutoReel creates, processes and publishes videos to Shopee and Facebook/Reels automatically, from one workflow.',
      },
    },
  },
  {
    key: 'workflow',
    section: 'workflows',
    slug: { vi: '/quy-trinh-tao-video-hang-loat/', en: '/en/bulk-video-workflow/' },
    meta: {
      vi: {
        title: 'Quy trình tạo video hàng loạt tự động | AutoReel',
        description:
          'Ba workflow chính của AutoReel: Affiliate Flow, Reup/Repurpose Flow và AI Review Flow — biến sản phẩm, video có sẵn hoặc ý tưởng thành video hoàn chỉnh.',
      },
      en: {
        title: 'Bulk video automation workflow | AutoReel',
        description:
          'Three workflows in one tool: Affiliate, Reup/Repurpose and AI Review — turn products, existing videos or a single idea into finished videos at scale.',
      },
    },
  },
  {
    key: 'benefits',
    section: 'benefits',
    slug: { vi: '/loi-ich-tu-dong-hoa-video/', en: '/en/video-automation-benefits/' },
    meta: {
      vi: {
        title: 'Lợi ích tự động hoá sản xuất video | AutoReel',
        description:
          'Tiết kiệm thời gian, xử lý hàng loạt, AI Voice tiếng Việt, branding tự động, auto publish và Telegram Remote — những việc AutoReel làm thay bạn.',
      },
      en: {
        title: 'Benefits of automating video production | AutoReel',
        description:
          'Save time, process in batches, Vietnamese AI voice, automatic branding, auto publish and Telegram Remote — what AutoReel does in your place.',
      },
    },
  },
  {
    key: 'features',
    section: 'features',
    slug: { vi: '/tat-ca-tinh-nang/', en: '/en/all-features/' },
    meta: {
      vi: {
        title: 'Toàn bộ tính năng của AutoReel | Danh sách đầy đủ',
        description:
          'Mọi thứ AutoReel làm được: ba luồng trọn gói Affiliate, Reup và Review, mười hai màn làm từng việc lẻ, cùng hàng đợi chạy song song và giọng đọc tiếng Việt.',
      },
      en: {
        title: 'All AutoReel features | The complete list',
        description:
          'Everything AutoReel does: the Affiliate, Reup and Review flows, twelve single-job screens, plus a parallel job queue and Vietnamese AI voices.',
      },
    },
  },
  {
    key: 'demo',
    section: 'demo',
    slug: { vi: '/video-demo-thuc-te/', en: '/en/video-demo/' },
    meta: {
      vi: {
        title: 'Video demo thực tế AutoReel | Tạo và đăng video tự động',
        description:
          'Xem AutoReel chạy thật: từ link sản phẩm Shopee tới video hoàn chỉnh rồi tự đăng lên Shopee và Facebook/Reels.',
      },
      en: {
        title: 'AutoReel video demo | Create and publish automatically',
        description:
          'Watch AutoReel run for real: from a Shopee product link to a finished video, published to Shopee and Facebook/Reels.',
      },
    },
  },
  {
    key: 'pricing',
    section: 'pricing',
    slug: { vi: '/bang-gia-phan-mem-tao-video/', en: '/en/pricing/' },
    meta: {
      vi: {
        title: 'Bảng giá phần mềm tạo video tự động | AutoReel',
        description:
          'Thuê theo tháng từ 99.000đ, hoặc mua đứt 1.490.000đ. Gói Full 259.000đ/tháng làm video rồi tự đăng lên Shopee và Facebook/Reels.',
      },
      en: {
        title: 'Pricing | AutoReel video automation software',
        description:
          'Rent from $6.99 a month, or buy outright for $61.99. Full at $10.99/month makes the video and publishes it to Shopee and Facebook/Reels.',
      },
    },
  },
  {
    key: 'faq',
    section: 'faq',
    slug: { vi: '/cau-hoi-thuong-gap/', en: '/en/faq/' },
    meta: {
      vi: {
        title: 'Câu hỏi thường gặp về AutoReel | Tạo video tự động',
        description:
          'AutoReel có mất phí hàng tháng không, chạy ở đâu, có tự đăng video không, có hỗ trợ tiếng Việt không — giải đáp đầy đủ.',
      },
      en: {
        title: 'Frequently asked questions | AutoReel',
        description:
          'Is there a monthly fee, where does AutoReel run, does it publish by itself, does it support Vietnamese — the full answers.',
      },
    },
  },
  {
    key: 'contact',
    section: 'contact',
    slug: { vi: '/lien-he-tu-van/', en: '/en/contact/' },
    meta: {
      vi: {
        title: 'Liên hệ tư vấn AutoReel | Zalo 0326012999',
        description:
          'Liên hệ Zalo hoặc WhatsApp 0326012999 để được tư vấn, xem demo và dùng thử AutoReel.',
      },
      en: {
        title: 'Contact AutoReel | Zalo 0326012999',
        description:
          'Reach us on Zalo or WhatsApp at 0326012999 for advice, a demo or a trial of AutoReel.',
      },
    },
  },
];

/**
 * Copy and layout for the seven section routes.
 *
 * **A route is a page now, not a scroll position.** Before this table, every
 * route rendered the same one-pager and only its `<head>` differed; Google saw
 * sixteen near-duplicate pages with one shared `<h1>`. Each entry here gives a
 * route its own headline and says which sections belong on it. `section: null`
 * (applied below) also stops the router from scrolling past that headline to a
 * section id on a cold load.
 *
 * Home deliberately has no entry: it keeps the full one-pager and the hero copy
 * in `site.js`. `App.jsx` falls back to the full section list when `sections`
 * is absent, so adding a route without an entry still renders something rather
 * than an empty main.
 *
 * The CTA labels and trust chips stay in `site.js`: a route changes what the
 * page is about, not what the site asks a visitor to do.
 */
const routePages = {
  workflow: {
    updated: '2026-10-28',
    sections: ['workflow', 'deepDive', 'cta'],
    hero: {
      vi: {
        badge: 'QUY TRÌNH',
        headlineLine1: 'Tạo video hàng loạt,',
        headlineLine2: 'từ input đến bản hoàn chỉnh.',
        subheadline:
          'Ba workflow — Affiliate, Reup/Repurpose và AI Review — nhận **sản phẩm, video có sẵn hoặc một ý tưởng** rồi trả về video đã dựng xong.',
        support: 'Chọn nguồn, cấu hình một lần, chạy cả lô.',
      },
      en: {
        badge: 'WORKFLOW',
        headlineLine1: 'Make video in bulk,',
        headlineLine2: 'from input to finished cut.',
        subheadline:
          'Three workflows — Affiliate, Reup/Repurpose and AI Review — take a **product, an existing video or a single idea** and return finished videos.',
        support: 'Pick a source, configure once, run the batch.',
      },
    },
  },
  benefits: {
    updated: '2026-10-27',
    sections: ['benefits', 'proof', 'cta'],
    hero: {
      vi: {
        badge: 'LỢI ÍCH',
        headlineLine1: 'Ít thao tác hơn,',
        headlineLine2: 'nhiều video hơn mỗi ngày.',
        subheadline:
          'Việc lặp lại — cắt, lồng tiếng, phụ đề, đóng dấu, đăng bài — chuyển sang máy. **Thời gian còn lại dành cho chọn sản phẩm và viết lời.**',
        support: 'Một job chạy song song, không cần ngồi canh từng video.',
      },
      en: {
        badge: 'BENEFITS',
        headlineLine1: 'Fewer manual steps,',
        headlineLine2: 'more videos every day.',
        subheadline:
          'The repeatable work — cutting, voice-over, subtitles, branding, publishing — moves to the machine. **The time left goes to product picks and scripts.**',
        support: 'Parallel jobs, without watching each video render.',
      },
    },
  },
  features: {
    updated: '2026-10-28',
    sections: ['features', 'deepDive', 'cta'],
    hero: {
      vi: {
        badge: 'TÍNH NĂNG',
        headlineLine1: 'Mọi thứ AutoReel',
        headlineLine2: 'làm được, trong một app.',
        subheadline:
          'Ba luồng trọn gói, mười hai màn làm từng việc lẻ, giọng đọc tiếng Việt, phụ đề, branding và đăng thẳng lên **Shopee, Facebook/Reels**.',
        support: 'Danh sách đầy đủ, không chia tab, không giấu sau form.',
      },
      en: {
        badge: 'FEATURES',
        headlineLine1: 'Everything AutoReel',
        headlineLine2: 'does, in one app.',
        subheadline:
          'Three end-to-end flows, twelve single-job screens, Vietnamese voice-over, subtitles, branding, and publishing straight to **Shopee and Facebook/Reels**.',
        support: 'The complete list, with nothing hidden behind a form.',
      },
    },
  },
  demo: {
    updated: '2026-10-27',
    sections: ['demo', 'proof', 'cta'],
    hero: {
      vi: {
        badge: 'DEMO THỰC TẾ',
        headlineLine1: 'Xem AutoReel chạy',
        headlineLine2: 'trên một job thật.',
        subheadline:
          'Từ link sản phẩm tới video hoàn chỉnh rồi tự đăng lên Shopee và Facebook/Reels. **Video quay từ app đang chạy**, không phải mockup.',
        support: '1 phút 34 giây, 1080p, tiếng Việt.',
      },
      en: {
        badge: 'REAL DEMO',
        headlineLine1: 'Watch AutoReel run',
        headlineLine2: 'on a real job.',
        subheadline:
          'From a product link to a finished video, then published to Shopee and Facebook/Reels. **Recorded from the running app**, not a mockup.',
        support: '1 minute 34 seconds, 1080p, Vietnamese narration.',
      },
    },
  },
  pricing: {
    updated: '2026-10-28',
    sections: ['pricing', 'deepDive', 'cta'],
    hero: {
      vi: {
        badge: 'BẢNG GIÁ',
        headlineLine1: 'Chọn gói theo',
        headlineLine2: 'cách bạn làm việc.',
        subheadline:
          'Thuê theo tháng từ 99.000đ, hoặc mua đứt 1.490.000đ. **Không tính phí theo từng video**, không có đồng hồ chạy khi bạn dựng.',
        support: 'Giá và quyền lợi lấy từ cùng một file với bảng bên dưới.',
      },
      en: {
        badge: 'PRICING',
        headlineLine1: 'Pick the plan that',
        headlineLine2: 'matches how you work.',
        subheadline:
          'Rent from $6.99 a month, or buy outright for $61.99. **No per-video charge**, and no meter running while you edit.',
        support: 'Prices and entitlements come from the same file as the table below.',
      },
    },
  },
  faq: {
    updated: '2026-10-28',
    sections: ['faq', 'deepDive', 'cta'],
    hero: {
      vi: {
        badge: 'CÂU HỎI THƯỜNG GẶP',
        headlineLine1: 'Câu hỏi thường gặp',
        headlineLine2: 'về AutoReel.',
        subheadline:
          'Có mất phí hàng tháng không, chạy ở đâu, có tự đăng video không, có hỗ trợ tiếng Việt không — **trả lời đầy đủ, không né.**',
        support: 'Không thấy câu bạn cần? Gọi Zalo 0326012999.',
      },
      en: {
        badge: 'FREQUENTLY ASKED',
        headlineLine1: 'Frequently asked questions',
        headlineLine2: 'about AutoReel.',
        subheadline:
          'Is there a monthly fee, where does it run, does it publish by itself, does it support Vietnamese — **answered in full.**',
        support: 'Still stuck? Message us on Zalo at 0326012999.',
      },
    },
  },
  contact: {
    updated: '2026-10-27',
    sections: ['cta', 'faq'],
    hero: {
      vi: {
        badge: 'LIÊN HỆ',
        headlineLine1: 'Cần tư vấn?',
        headlineLine2: 'Nói chuyện với người làm ra nó.',
        subheadline:
          'Gửi link sản phẩm hoặc mô tả công việc bạn đang làm; **chúng tôi trả lời bằng cách chỉ đúng workflow**, không bán gói trước khi biết bạn cần gì.',
        support: 'Zalo, WhatsApp hoặc email — trong giờ làm việc.',
      },
      en: {
        badge: 'CONTACT',
        headlineLine1: 'Need advice?',
        headlineLine2: 'Talk to the person who built it.',
        subheadline:
          'Send a product link or describe the work you do; **we answer by pointing at the right workflow**, not by selling a plan before we know what you need.',
        support: 'Zalo, WhatsApp or email — during working hours.',
      },
    },
  },
};

/**
 * The exported route table: the hand-written rows above, plus each section
 * route's page copy and section list.
 *
 * A route with an entry is a standalone page, so `section` is cleared: its
 * headline is the top of the page and scrolling to the old section id would
 * hide it. Home keeps `section: null` from its own row and gets no extra copy.
 */
export const routes = baseRoutes.map((route) => {
  const page = routePages[route.key];
  return page ? { ...route, ...page, section: null } : route;
});

/** The route every unmatched path falls back to. */
export const homeRoute = routes[0];

export function routeByKey(key) {
  return routes.find((route) => route.key === key) || homeRoute;
}

/** `/en/pricing/` and `/en/pricing` are the same page; so are `/` and ``. */
function normalize(pathname) {
  if (!pathname) return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/**
 * `'en'` for anything under `/en`, Vietnamese for everything else.
 *
 * The slash matters: `startsWith('/en')` alone would also claim a Vietnamese
 * slug that happened to begin with those letters, and the failure would be a
 * page rendering in the wrong language with no error anywhere.
 */
export function langOf(pathname) {
  const path = normalize(pathname);
  return path === '/en' || path.startsWith('/en/') ? 'en' : DEFAULT_LANG;
}

/**
 * The route a pathname belongs to, or `null` if nothing claims it.
 *
 * A miss is not an error to throw on: the dev server hands every unknown path
 * to `index.html`, so a typo arrives here as a pathname no route knows. The
 * caller renders the home page and puts `/` back in the address bar, which is
 * also what keeps a stray URL from becoming a second page with the same content.
 */
export function routeForPath(pathname) {
  const path = normalize(pathname);
  const lang = langOf(path);
  // Compared against the whole path, not the part left after stripping the
  // language prefix: an English slug already carries `/en` (`/en/pricing/`), so
  // stripping the prefix and comparing would match nothing and every English
  // URL would fall through to "unknown path" — which looks exactly like the
  // site redirecting you home when you press EN.
  return routes.find((route) => normalize(route.slug[lang]) === path) || null;
}

/** The URL for a route in a given language — what every internal link points at. */
export function pathFor(key, lang = DEFAULT_LANG) {
  const route = routeByKey(key);
  return route.slug[lang] || route.slug[DEFAULT_LANG];
}

/** The same page in the other language, for the `hreflang` tags and the switcher. */
export function alternateFor(route, lang) {
  const other = lang === 'vi' ? 'en' : 'vi';
  return { lang: other, path: route.slug[other] || route.slug[DEFAULT_LANG] };
}

/** Absolute URL, for canonical, `og:url` and the sitemap. */
export function absolute(path) {
  return `${SITE_URL}${path}`;
}

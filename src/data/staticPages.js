/**
 * Indexable pages that are neither a React route nor an article.
 *
 * Their HTML lives in `public/` or is written by a small builder, so they never
 * passed through `routes.js`; the sitemap therefore never listed them, even
 * though they are canonical, indexable pages. The two legal pages are a
 * translation pair; the visual install guide exists in Vietnamese only, which
 * is why `path.en` is absent rather than pointing at a page that is not there.
 *
 * `updated` is the date the content last changed, not the build date. A sitemap
 * whose every `lastmod` moves on every deploy tells a crawler nothing.
 */
export const STATIC_PAGES = [
  {
    key: 'terms',
    path: { vi: '/dieu-khoan/', en: '/en/terms/' },
    updated: '2026-10-27',
  },
  {
    key: 'visual',
    path: { vi: '/tai-lieu/cai-dat/visual/' },
    updated: '2026-10-21',
  },
  {
    key: 'about',
    path: { vi: '/gioi-thieu/', en: '/en/about/' },
    updated: '2026-10-28',
  },
  {
    key: 'privacy',
    path: { vi: '/chinh-sach-bao-mat/', en: '/en/privacy/' },
    updated: '2026-10-27',
  },
];

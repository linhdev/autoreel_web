/**
 * The blog: the list of articles, and the one place their URLs come from.
 *
 * One file per article under `posts/`, and this file imports them. That is more
 * typing than a glob would be, and it is the same trade `routes.js` makes: an
 * import that fails is a build that stops, where a glob that matches nothing
 * produces a blog index with no articles on it and exits zero.
 *
 * **These pages are not part of the one-pager.** Every route in `routes.js`
 * renders the same scroll with a different `<head>`; an article is a page of
 * its own, with its own body, and it is written out as real HTML by
 * `scripts/build-posts.mjs` — no React, no client routing. So they are not in
 * `routes.js`, and the app's router deliberately knows nothing about them: a
 * link to `/blog/` is a normal link that loads a normal page.
 *
 * The `body` of an article is an array of small objects (`{ h2 }`, `{ p }`,
 * `{ ul }`, `{ ol }`, `{ note }`) rather than one HTML string or one Markdown
 * blob. Three reasons, in order of how much they matter: the build script and
 * any future renderer get the structure without parsing anything; nothing can
 * put a raw `<script>` on the page by accident, because the renderer escapes
 * every string it is handed; and an author cannot invent markup that the page
 * has no styles for.
 */

import cachTaoVideoAffiliate from './posts/tao-video-affiliate-shopee-hang-loat.js';
import meoDangShopeeVideo from './posts/meo-dang-shopee-video-hieu-qua.js';
import reupKhongBanQuyen from './posts/reup-video-khong-bi-danh-ban-quyen.js';
import dangHangLoatFacebook from './posts/dang-video-hang-loat-facebook-reels.js';
import videoReviewBangAi from './posts/video-review-san-pham-bang-ai.js';
import tuDongHoaLaGi from './posts/tu-dong-hoa-video-ban-hang-la-gi.js';
import kiemTienAffiliate from './posts/kiem-tien-affiliate-shopee-cho-nguoi-moi.js';
import chayOCauHinhMay from './posts/autoreel-chay-o-dau-can-cau-hinh-may-the-nao.js';
import dieuKhienTuXaTelegram from './posts/dieu-khien-tao-video-tu-xa-bang-telegram.js';
import tuLamHayDungPhanMem from './posts/tu-lam-video-hay-dung-phan-mem.js';

/** Everything above, newest first — the order the index and the footer draw. */
export const posts = [
  cachTaoVideoAffiliate,
  meoDangShopeeVideo,
  reupKhongBanQuyen,
  dangHangLoatFacebook,
  videoReviewBangAi,
  tuDongHoaLaGi,
  kiemTienAffiliate,
  chayOCauHinhMay,
  dieuKhienTuXaTelegram,
  tuLamHayDungPhanMem,
].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** The blog's own URL, its name in the nav, and what its index says in a search result. */
export const BLOG = {
  path: '/blog/',
  title: 'Blog AutoReel | Kinh nghiệm làm video bán hàng và affiliate',
  description:
    'Hướng dẫn và kinh nghiệm làm video affiliate Shopee, reup video, đăng Reels hàng loạt và tự động hoá sản xuất video — viết cho người làm nghề.',
  heading: 'Blog AutoReel',
  lede:
    'Kinh nghiệm làm video bán hàng, affiliate Shopee và tự động hoá — viết cho người đang làm, không phải để lấp đầy trang.',
};

/** `/blog/<slug>/` — the only place an article's URL is spelled. */
export function postPath(slug) {
  return `/blog/${slug}/`;
}

export function postBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null;
}

/** The articles to show under one article: the next few, and never itself. */
export function relatedPosts(slug, count = 3) {
  const others = posts.filter((post) => post.slug !== slug);
  if (!others.length) return [];
  // Starting where this article sits in the list, rather than always at the
  // top: otherwise every page in the blog ends with the same three links, and
  // the oldest article is the one nobody ever reaches.
  const at = Math.max(0, posts.findIndex((post) => post.slug === slug));
  return [...others.slice(at % others.length), ...others].slice(0, count);
}

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
 * `{ ul }`, `{ ol }`, `{ note }`, `{ figure }`) rather than one HTML string or
 * one Markdown blob. Three reasons, in order of how much they matter: the build
 * script and any future renderer get the structure without parsing anything;
 * nothing can put a raw `<script>` on the page by accident, because the renderer
 * escapes every string it is handed; and an author cannot invent markup that the
 * page has no styles for.
 *
 * `{ figure }` is the one block whose markup is not entirely escaped — its
 * `src` is a path in `public/blog/`, written through as-is — which is exactly
 * why it is a block type here rather than something an author can type.
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

// Architecture, kept at the level a customer needs — layers, principles and
// trade-offs, never how any of it is built. `scripts/verify-build.mjs` has a
// list of internal words these articles may not contain.
import kienTrucHeThong from './posts/kien-truc-he-thong-san-xuat-video-tu-dong.js';
import hangDoiVaChaySongSong from './posts/hang-doi-job-va-chay-song-song.js';
import motLoiNhieuCuaRa from './posts/mot-loi-nhieu-cua-ra.js';
import giamSatHeThong from './posts/lam-sao-biet-he-thong-dang-chay-hay-da-dung.js';
import dangBaiKhongApi from './posts/tu-dong-dang-bai-khi-nen-tang-khong-mo-api.js';

// The engine room: the same subject one level down, written for the reader who
// wants to know how a system like this is put together — process boundaries,
// language choices, engines, licences, and what the AI is allowed to decide.
// Still nothing internal: `scripts/verify-build.mjs` keeps its list of words
// these articles may not contain, and these five live closest to that line.
import kienTrucTachTienTrinh from './posts/kien-truc-tach-tien-trinh-va-chiu-loi.js';
import chonNgonNguTheoTang from './posts/chon-ngon-ngu-lap-trinh-cho-tung-tang.js';
import tanDungEngine from './posts/tan-dung-engine-thay-vi-tu-viet.js';
import maNguonMo from './posts/ma-nguon-mo-dung-va-tra-lai.js';
import aiDieuPhoiAi from './posts/ai-dieu-phoi-ai.js';
import benTrongMotJob from './posts/ben-trong-mot-job-bon-tang-engine-va-hai-cho-goi-ai.js';

// Doing the work: picking products, writing, voice, subtitles, reuse.
import chonSanPhamAffiliate from './posts/chon-san-pham-affiliate-shopee-de-lam-video.js';
import congThucKichBan30Giay from './posts/cong-thuc-kich-ban-video-ban-hang-30-giay.js';
import giongDocTiengViet from './posts/giong-doc-tieng-viet-cho-video-ban-hang.js';
import phuDeVaChuTrenVideo from './posts/phu-de-va-chu-tren-video-ngan.js';
import taiSuDungVideoCu from './posts/tai-su-dung-video-cu-thanh-nhieu-video-moi.js';

// Running it as a habit: cadence, scheduling, frame, channels.
import viSaoVideoKhongCoNguoiXem from './posts/vi-sao-video-khong-co-nguoi-xem.js';
import baoNhieuVideoMotNgay from './posts/bao-nhieu-video-mot-ngay-la-du.js';
import lenLichDangVideo from './posts/len-lich-dang-video-cho-nguoi-ban-hang.js';
import videoDocHayVideoNgang from './posts/video-doc-hay-video-ngang.js';
import dangNhieuNenTang from './posts/dang-video-len-nhieu-nen-tang-cung-luc.js';

// The money side: what a video costs, who makes it, and what it returns.
import chiPhiMotVideo from './posts/mot-video-ban-hang-ton-bao-nhieu-tien.js';
import videoKhongLoMat from './posts/video-affiliate-khong-can-lo-mat.js';
import lamVideoChoNhieuShop from './posts/lam-video-cho-nhieu-shop-cung-luc.js';
import tuLuotXemToiDonHang from './posts/tu-luot-xem-toi-don-hang.js';
import doLuongHieuQuaVideo from './posts/do-luong-hieu-qua-video-ban-hang.js';

/**
 * Everything above, newest first — the order the index and the footer draw.
 *
 * Thirty-five articles share one date, and `posts.sort` is stable, so the order
 * written here is the order the index shows: the newer groups first, the ten
 * the blog opened with at the bottom.
 */
export const posts = [
  benTrongMotJob,
  kienTrucTachTienTrinh,
  chonNgonNguTheoTang,
  tanDungEngine,
  maNguonMo,
  aiDieuPhoiAi,
  kienTrucHeThong,
  hangDoiVaChaySongSong,
  motLoiNhieuCuaRa,
  giamSatHeThong,
  dangBaiKhongApi,
  chonSanPhamAffiliate,
  congThucKichBan30Giay,
  giongDocTiengViet,
  phuDeVaChuTrenVideo,
  taiSuDungVideoCu,
  viSaoVideoKhongCoNguoiXem,
  baoNhieuVideoMotNgay,
  lenLichDangVideo,
  videoDocHayVideoNgang,
  dangNhieuNenTang,
  chiPhiMotVideo,
  videoKhongLoMat,
  lamVideoChoNhieuShop,
  tuLuotXemToiDonHang,
  doLuongHieuQuaVideo,
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

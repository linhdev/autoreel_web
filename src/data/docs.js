/**
 * The documentation: the list of topics, the groups they sit in, and the one
 * place their URLs come from.
 *
 * **These pages are not part of the one-pager**, for the same reason the blog
 * is not. Every route in `routes.js` renders the same scroll with a different
 * `<head>`; a documentation topic is a document of its own and is written out
 * as real HTML by `scripts/build-docs.mjs` — no React, no client routing. So
 * they are not in `routes.js`, and the app's router deliberately knows nothing
 * about them.
 *
 * That is not a stylistic choice, it is a hazard avoided. A docs page that
 * carried the app's bundle would boot React, `routeForPath('/tai-lieu/...')`
 * would return null, and the router's own fallback would `replaceState('/')`
 * and teleport the reader to the landing page. `verify-build.mjs` asserts
 * against it.
 *
 * One file per topic under `docs/`, imported explicitly rather than by glob —
 * the same trade `posts.js` and `routes.js` both make: an import that fails is
 * a build that stops, where a glob that matches nothing produces a documentation
 * index with no topics on it and exits zero.
 */

import caiDat from './docs/cai-dat.js';
import moUngDung from './docs/mo-ung-dung.js';
import kichHoatBanQuyen from './docs/kich-hoat-ban-quyen.js';
import khoaApiAi from './docs/khoa-api-ai.js';
import facebookMetaApp from './docs/facebook-meta-app.js';
import facebookDanToken from './docs/facebook-dan-token.js';
import ghepDienThoaiShopee from './docs/ghep-dien-thoai-shopee.js';
import videoNgan from './docs/video-ngan.js';
import videoTuDong from './docs/video-tu-dong.js';
import longTieng from './docs/long-tieng.js';
import catHighlight from './docs/cat-highlight.js';
import xoaLogo from './docs/xoa-logo.js';
import chenChuVaLogo from './docs/chen-chu-va-logo.js';
import linkTuKenh from './docs/link-tu-kenh.js';
import tuLieu from './docs/tu-lieu.js';
import thuVienVideo from './docs/thu-vien-video.js';
import cauHinh from './docs/cau-hinh.js';
import telegramBot from './docs/telegram-bot.js';
import luongAffiliate from './docs/luong-affiliate.js';
import luongReup from './docs/luong-reup.js';
import luongReview from './docs/luong-review.js';
import linkSanPham from './docs/link-san-pham.js';
import dangShopee from './docs/dang-shopee.js';
import dangFacebook from './docs/dang-facebook.js';

/** Where the section lives. Trailing slashes, like every other URL here. */
export const DOCS = {
  path: { vi: '/tai-lieu/', en: '/en/docs/' },
  label: { vi: 'Tài liệu', en: 'Docs' },
  heading: { vi: 'Tài liệu AutoReel', en: 'AutoReel documentation' },
  lede: {
    vi: 'Từng bước một, kèm ảnh chụp màn hình thật: cài đặt, cấu hình khoá, '
      + 'và cách dùng từng màn.',
    en: 'Step by step, with real screenshots: installing, configuring the keys, '
      + 'and how each screen is used.',
  },
};

/**
 * The sidebar's sections, in the order they are shown.
 *
 * Four of these are the app's own words, taken from `ui.group.*` in its
 * translations, so the sidebar someone reads here is the sidebar they see
 * after installing. The first two have no counterpart in the app: installing
 * and connecting accounts are things you do *to* the app rather than screens
 * inside it, and the app's own list starts at "make a video".
 */
export const DOC_GROUPS = [
  { key: 'start', label: { vi: 'Bắt đầu', en: 'Getting started' } },
  { key: 'connect', label: { vi: 'Kết nối', en: 'Connecting your accounts' } },
  { key: 'make', label: { vi: 'Tạo video', en: 'Make a video' } },
  { key: 'rework', label: { vi: 'Từ video có sẵn', en: 'From a video you have' } },
  { key: 'sell', label: { vi: 'Bán hàng', en: 'Selling' } },
  { key: 'store', label: { vi: 'Kho của bạn', en: 'Your material' } },
  { key: 'app', label: { vi: 'Ứng dụng', en: 'The app' } },
];

/** Every topic, in the order they are written. `group` places them in the sidebar. */
export const docs = [
  caiDat,
  moUngDung,
  kichHoatBanQuyen,
  khoaApiAi,
  facebookMetaApp,
  facebookDanToken,
  ghepDienThoaiShopee,
  videoNgan,
  videoTuDong,
  longTieng,
  catHighlight,
  xoaLogo,
  chenChuVaLogo,
  linkTuKenh,
  tuLieu,
  thuVienVideo,
  cauHinh,
  telegramBot,
  luongAffiliate,
  luongReup,
  luongReview,
  linkSanPham,
  dangShopee,
  dangFacebook,
];

/**
 * Every topic, flattened out of the groups and in reading order.
 *
 * The sidebar, the prev/next pager and the index all read this, so there is
 * one answer to "what comes after this one" rather than three that can
 * disagree.
 *
 * A group with no topics in it is skipped rather than refused. The section was
 * written a group at a time, and a build that refused to run until all seven
 * were populated would have meant writing twenty-four topics before seeing
 * whether the first one rendered. `verify-build.mjs` is where "a group exists
 * and has nothing in it" is caught, and by then it is a mistake rather than a
 * stage of the work.
 */
export const docsInOrder = DOC_GROUPS.flatMap((group) =>
  docs
    .filter((doc) => doc.group === group.key)
    .sort((a, b) => a.order - b.order),
);

for (const doc of docs) {
  if (!DOC_GROUPS.some((group) => group.key === doc.group)) {
    throw new Error(`docs: ${doc.key} is in unknown group ${JSON.stringify(doc.group)}`);
  }
}

const seen = new Set();
for (const doc of docs) {
  if (seen.has(doc.key)) throw new Error(`docs: two topics share the key ${doc.key}`);
  seen.add(doc.key);
}

/** A topic by its key, for the prev/next links and for cross-references. */
export function docByKey(key) {
  const found = docs.find((doc) => doc.key === key);
  if (!found) throw new Error(`docs: no topic ${JSON.stringify(key)}`);
  return found;
}

/** The address of one topic in one language. */
export function docPath(doc, lang) {
  return `${DOCS.path[lang]}${doc.slug[lang]}/`;
}

/** The topic before and after this one, or null at either end. */
export function docNeighbours(key) {
  const at = docsInOrder.findIndex((doc) => doc.key === key);
  if (at < 0) throw new Error(`docs: ${key} is not in the reading order`);
  return {
    previous: at > 0 ? docsInOrder[at - 1] : null,
    next: at < docsInOrder.length - 1 ? docsInOrder[at + 1] : null,
  };
}

/** The topics in one group, in order. */
export function docsInGroup(key) {
  return docsInOrder.filter((doc) => doc.group === key);
}

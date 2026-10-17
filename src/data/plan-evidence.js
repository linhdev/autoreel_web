/**
 * The screenshots the pricing cards show as evidence.
 *
 * **Imported rather than referenced by path on purpose.** `public/` files are
 * served unhashed and `_headers` gives every `.webp` on the site a year of
 * `immutable`, so a screenshot that is re-taken at the same address is a
 * screenshot returning customers never see again. See
 * `scripts/lib/docs-images.mjs` for the measurement that found this. An import
 * from `src/` goes through vite, which writes the content hash into the file
 * name - the address changes when the picture does, and a year of caching
 * becomes true rather than fought.
 *
 * Each entry holds both languages: the screenshots are of the interface, and
 * the interface is in the language the reader chose.
 */
import catHighlightEn from '../assets/plans/cat-highlight-en.webp';
import catHighlightVi from '../assets/plans/cat-highlight-vi.webp';
import dangFacebookEn from '../assets/plans/dang-facebook-en.webp';
import dangFacebookVi from '../assets/plans/dang-facebook-vi.webp';
import dangShopeeEn from '../assets/plans/dang-shopee-en.webp';
import dangShopeeVi from '../assets/plans/dang-shopee-vi.webp';
import linkTuKenhEn from '../assets/plans/link-tu-kenh-en.webp';
import linkTuKenhVi from '../assets/plans/link-tu-kenh-vi.webp';
import luongReupEn from '../assets/plans/luong-reup-en.webp';
import luongReupVi from '../assets/plans/luong-reup-vi.webp';
import taiVideoEn from '../assets/plans/tai-video-en.webp';
import taiVideoVi from '../assets/plans/tai-video-vi.webp';
import thuVienEn from '../assets/plans/thu-vien-video-en.webp';
import thuVienVi from '../assets/plans/thu-vien-video-vi.webp';

export const evidenceImages = {
  'tai-video': { vi: taiVideoVi, en: taiVideoEn },
  'cat-highlight': { vi: catHighlightVi, en: catHighlightEn },
  'link-tu-kenh': { vi: linkTuKenhVi, en: linkTuKenhEn },
  'luong-reup': { vi: luongReupVi, en: luongReupEn },
  'dang-facebook': { vi: dangFacebookVi, en: dangFacebookEn },
  'dang-shopee': { vi: dangShopeeVi, en: dangShopeeEn },
  'thu-vien-video': { vi: thuVienVi, en: thuVienEn },
};

/** `{image: 'tai-video'}` -> the picture for the language being read. */
export function evidenceFor(one, lang) {
  const pair = evidenceImages[one.image];
  return pair ? pair[lang] || pair.vi : '';
}

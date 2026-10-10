/**
 * The one place a component asks "what does this page say?".
 *
 * Every data file exports `{ vi, en }`, so a component that imported one
 * directly would get both languages and no way to choose. This module picks a
 * language once, flattens the chosen halves into a single object, and hands it
 * down through context — so `const { hero } = useCopy()` reads exactly like the
 * `import { hero } from '../../data/site.js'` it replaces, except the words are
 * the reader's.
 *
 * Both bundles are built at module load. That is deliberate: they are plain
 * objects of strings, a few kilobytes each, and building the second one lazily
 * would buy a promise to await on every render path in exchange for nothing a
 * visitor would notice. The measuring stick for this site is Lighthouse, not
 * the last 3 KB.
 */
import { createContext, useContext } from 'react';
import { DEFAULT_LANG } from '../data/routes.js';
import { useRouter } from './router.jsx';
import {
  businessInfo,
  demo,
  finalCta,
  footer,
  hero,
  heroFlow,
  howItWorks,
  line,
  navLinks,
  proof,
  site,
  ui,
} from '../data/site.js';
import { benefits, benefitsSection } from '../data/features.js';
import { allFeatures, allFeaturesSection } from '../data/allFeatures.js';
import { workflows, workflowSection } from '../data/workflows.js';
import { CURRENCY_LOCALE, PRICE_SUFFIX, plans, pricingSection } from '../data/pricing.js';
import { faqHeadline, faqs } from '../data/faq.js';

/**
 * Merge the language-neutral fields of a `{ vi, en }` export with the chosen
 * language's prose. Anything not split by language — a video path, a Zalo URL
 * — has to be carried through by hand here, which is also the reminder that it
 * exists.
 */
function bundle(lang) {
  return {
    lang,
    site,
    businessInfo,
    navLinks: navLinks[lang],
    hero: hero[lang],
    heroFlow: heroFlow[lang],
    howItWorks: howItWorks[lang],
    line,
    demo: { ...demo[lang], videoSrc: demo.videoSrc, youtubeId: demo.youtubeId },
    proof: proof[lang],
    finalCta: {
      ...finalCta[lang],
      primaryCta: { label: finalCta[lang].primaryCtaLabel, href: finalCta.primaryCta.href },
      secondaryCta: finalCta.secondaryCta,
      brandLine: finalCta.brandLine,
    },
    footer: footer[lang],
    ui: ui[lang],
    workflows: workflows[lang],
    workflowSection: workflowSection[lang],
    benefits: benefits[lang],
    benefitsSection: benefitsSection[lang],
    allFeatures: allFeatures[lang],
    allFeaturesSection: allFeaturesSection[lang],
    pricingSection: pricingSection[lang],
    plans: plans[lang],
    faqHeadline: faqHeadline[lang],
    faqs: faqs[lang],
  };
}

const COPY = { vi: bundle('vi'), en: bundle('en') };

const CopyContext = createContext(COPY[DEFAULT_LANG]);

/**
 * The language comes from the URL, not from a setting of its own — `/en/pricing/`
 * *is* the English version of that page, and a toggle that disagreed with the
 * address bar would make the two impossible to keep in step. So with no `lang`
 * prop this reads the router, which means one less thing for `App` to wire up.
 * The prop stays for the rare caller that has to force a language.
 */
export function CopyProvider({ lang, children }) {
  const router = useRouter();
  const chosen = lang || router.lang || DEFAULT_LANG;

  return (
    <CopyContext.Provider value={COPY[chosen] || COPY[DEFAULT_LANG]}>{children}</CopyContext.Provider>
  );
}

export function useCopy() {
  return useContext(CopyContext);
}

/**
 * The price as it is written, from the number that also feeds the JSON-LD.
 *
 * `1.490.000đ` and `1,490,000₫` are the same money; a stored string per language
 * would be a second copy of a figure that must never disagree with the one in
 * the structured data.
 */
export function formatPrice(plan, lang) {
  const amount = new Intl.NumberFormat(CURRENCY_LOCALE[lang] || CURRENCY_LOCALE.vi).format(
    plan.priceValue,
  );
  return `${amount}${PRICE_SUFFIX[lang] || PRICE_SUFFIX.vi}`;
}

/** `Intl` locale for the count-up figures, which group digits differently. */
export function numberLocale(lang) {
  return CURRENCY_LOCALE[lang] || CURRENCY_LOCALE.vi;
}

/**
 * What AutoReel costs: the subscription tiers, the two lifetime licences, and
 * the one place a price is written down.
 *
 * **`priceValue` is đồng, whichever language is reading.** The đồng figure is
 * what the business set, what the invoice quotes and what the Vietnamese page
 * shows. The dollar figure on the English page comes from the same explicit
 * USD table the licence server charges; it is not a straight conversion,
 * because PayPal adds a cross-border fee, a fixed fee and an FX spread. The
 * fallback below is only for a plan the API has not priced yet.
 *
 * `usdCentsFor()` is the single answer to "what does this plan cost in USD":
 * the live API's `usdCents` if present, then the table, then the old 26,000₫
 * conversion for an unknown/coming-soon plan. That is what keeps the price on
 * the card and the price PayPal charges from being two different numbers.
 *
 * `id`, `group`, `icon`, `billing`, `priceValue`, `saves` and `paybackAgainst`
 * are structural: they pick the layout, split the grid into groups, choose a
 * lucide glyph, tell the search engine how the charge recurs, and let two of
 * the cards quote a number that is *computed* rather than typed. They sit
 * outside the language split, and `scripts/verify-build.mjs` compares the two
 * halves position by position — a plan whose `id` moved to a different entry in
 * one language is a card with the wrong name on it.
 */

/**
 * How many đồng one US dollar is worth, on this site.
 *
 * 26.000, not 26: the arithmetic below is in đồng, and a rate that reads as
 * "26" beside a price of `259000` is an invitation to divide by the wrong power
 * of ten.
 */
export const VND_PER_USD = 26000;

/**
 * The dollar price of a đồng amount, worked out **in cents**.
 *
 * In cents because a dong price almost never divides into a whole number of
 * dollars, and doing the rounding in floating point gives `3.807692…` for what
 * a person reads as `3.81`. Rounding to an integer number of cents first means
 * the only arithmetic left is a division by 100, which is exact enough for
 * `Intl` to print the figure that was intended.
 */
export function usdCents(vnd) {
  return Math.round(vnd / (VND_PER_USD / 100));
}

/**
 * The USD prices the server charges, for the static build and the first paint.
 *
 * These are deliberately not derived from `priceValue`: the licence server
 * grosses them up for PayPal's fee and FX spread. Keep this table in step with
 * `packages/shared/src/catalog.ts` in the licence repo; the live API overrides
 * it in the browser, and `usdCentsFor` uses it only before that request lands.
 */
const USD_CENTS_BY_PLAN = {
  edit: 699,
  creator: 849,
  full: 1099,
  'full-2-may': 1399,
  'full-3-thang': 2899,
  personal: 6199,
};

export function usdCentsFor(plan) {
  const live = plan && plan.usdCents;
  if (Number.isSafeInteger(live) && live > 0) return live;
  const fixed = plan && USD_CENTS_BY_PLAN[plan.id];
  if (Number.isSafeInteger(fixed) && fixed > 0) return fixed;
  return usdCents(plan.priceValue);
}

/**
 * A price in the currency of the language reading it.
 *
 * The page, the price formatter and the structured data all ask this question
 * rather than each deciding for itself.
 */
export function priceIn(plan, lang) {
  if (lang === 'en') return { amount: usdCentsFor(plan) / 100, currency: 'USD' };
  return { amount: plan.priceValue, currency: 'VND' };
}

/** `1.490.000đ` in Vietnamese, `$61.99` in English — the same money. */
export const PRICE_SUFFIX = { vi: 'đ', en: '$' };
export const CURRENCY_LOCALE = { vi: 'vi-VN', en: 'en-US' };

/**
 * One đồng amount as a person reads it in that language.
 *
 * Takes the đồng number rather than a plan, because two of the cards quote an
 * amount that belongs to no plan: what the three-month pack saves, and how long
 * the lifetime licence takes to pay for itself.
 */
export function formatMoney(vnd, lang, usdOverride) {
  if (lang === 'en') {
    const cents =
      Number.isSafeInteger(usdOverride) && usdOverride > 0 ? usdOverride : usdCents(vnd);
    return formatUsdCents(cents);
  }
  return `${new Intl.NumberFormat(CURRENCY_LOCALE.vi).format(vnd)}${PRICE_SUFFIX.vi}`;
}

/**
 * One amount already in cents, printed the way the English page prints money.
 *
 * `formatMoney` takes đồng and converts; a saving computed from two USD prices
 * is already in cents, and converting it again would apply the exchange rate a
 * second time. That is exactly how the three-month card came to advertise
 * $3.00 while its own two prices differed by $3.98.
 */
export function formatUsdCents(cents) {
  return `${PRICE_SUFFIX.en}${new Intl.NumberFormat(CURRENCY_LOCALE.en, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cents / 100)}`;
}

/**
 * The two groups the grid is drawn in, in the order they are shown.
 *
 * Subscriptions first, because that is the smaller decision: a reader who is
 * still deciding should meet the option that costs a month's money before the
 * one that costs a year's. The lifetime cards then read as the upgrade rather
 * than as the entry fee.
 */
export const pricingGroups = {
  vi: [
    {
      key: 'monthly',
      title: 'Thuê bao',
      note: 'Trả theo tháng, dừng lúc nào cũng được. Trả trước ba tháng thì rẻ hơn.',
    },
    {
      key: 'lifetime',
      title: 'Mua đứt',
      note: 'Trả một lần, dùng vĩnh viễn — không gia hạn, không phí tháng.',
    },
  ],
  en: [
    {
      key: 'monthly',
      title: 'Subscription',
      note: 'Pay by the month and stop whenever you like. Three months up front costs less.',
    },
    {
      key: 'lifetime',
      title: 'Buy outright',
      note: 'One payment, yours for good — nothing renews and there is no monthly fee.',
    },
  ],
};

export const pricingSection = {
  vi: {
    headline: 'Bảng giá: thuê theo tháng hoặc mua đứt',
    subheadline:
      'AutoReel không giới hạn số video; khác nhau ở bộ tính năng và số máy được cài. Giá hiện tại nằm trên từng gói bên dưới.',
    // `{amount}` and `{months}` are filled in by `Pricing.jsx` from the numbers
    // in this file — see the note on `saves` and `paybackAgainst` below.
    saveTemplate: 'Tiết kiệm {amount} so với trả từng tháng',
    paybackTemplate: 'So với thuê theo tháng, gói này hoàn vốn sau {months} tháng',
    note: 'Thuê bao gia hạn theo tháng và dừng lúc nào cũng được. Giá niêm yết bằng VND; bản tiếng Anh quy đổi theo tỷ giá 26.000đ = 1 USD. Chi phí AI/API hoặc dịch vụ bên thứ ba, nếu sử dụng, thanh toán riêng theo nhà cung cấp.',
    // The card opens into a panel; these are its own words. They live here
    // rather than in the plan data because they are the same for every plan -
    // a heading repeated six times is six chances to drift.
    detailCta: 'Xem chi tiết gói',
    detailClose: 'Đóng',
    detailKicker: 'Chi tiết gói',
    detailCanDo: 'Bạn làm được gì',
    detailBenefits: 'Vì sao đáng tiền',
    detailEvidence: 'Màn hình thật trong app',
  },
  en: {
    headline: 'Pricing: rent by the month or buy outright',
    subheadline:
      'AutoReel does not cap how many videos you make; what differs is which features you get and how many machines you may install on. The current price is on each plan below.',
    saveTemplate: 'Save {amount} against paying monthly',
    paybackTemplate: 'Against the monthly plans, this pays for itself in {months} months',
    note: 'Subscriptions renew monthly and can be stopped at any time. Prices are in US dollars; the Vietnamese page shows the đồng price. Any AI/API or third-party service you use is paid separately to that provider.',
    detailCta: 'See what is in this plan',
    detailClose: 'Close',
    detailKicker: 'Plan details',
    detailCanDo: 'What you can do',
    detailBenefits: 'Why it is worth it',
    detailEvidence: 'Real screens from the app',
  },
};

/**
 * The plans, cheapest first inside each group.
 *
 * Two of the cards quote an arithmetic result rather than a sentence somebody
 * typed, and both are declared here instead:
 *
 *   `saves`           the three-month pack is not three monthly payments, and
 *                     the difference is not written down anywhere — it is
 *                     `3 × Full − this pack`, so changing the Full price moves
 *                     the advertised saving with it.
 *   `paybackAgainst`  the lifetime licence is advertised as paying for itself
 *                     after N months of renting. N is `ceil(lifetime ÷
 *                     monthly)`, for the same reason.
 *
 * A hand-typed `tiết kiệm 78.000đ` is correct exactly once, and the day a price
 * changes it becomes a lie that nothing catches.
 */
export const plans = {
  vi: [
    {
      id: 'edit',
      group: 'monthly',
      icon: 'Clapperboard',
      name: 'Edit',
      priceValue: 99000,
      billing: 'month',
      priceNote: 'mỗi tháng',
      audience: 'Cho người đã có video, chỉ cần dựng và xử lý lại.',
      popular: false,
      available: true,
      // Every line here is a screen the app can actually close, not a promise:
      // the licence carries one code per screen (`shortGPT/licensing/features.py`),
      // and a tier is a set of those codes. A bullet nobody can enforce is a
      // bullet that will be argued about at refund time.
      features: [
        'Tải video từ link hoặc tệp',
        'Cắt highlight',
        'Xoá logo và chữ cứng',
        'Lồng tiếng và dịch, nhiều ngôn ngữ đích',
        'Chèn chữ và logo',
        'Đọc link sản phẩm Shopee',
        'Kho tư liệu và thư viện video',
        '1 máy tính',
      ],
      cta: { label: 'Chọn gói Edit', to: 'contact' },
    },
    {
      id: 'creator',
      group: 'monthly',
      icon: 'Sparkles',
      name: 'Creator',
      priceValue: 199000,
      billing: 'month',
      priceNote: 'mỗi tháng',
      audience: 'Cho người tự làm nội dung: có video sẵn, hoặc chỉ có một ý tưởng.',
      popular: false,
      available: true,
      features: [
        'Tất cả trong Edit',
        'Video ngắn từ chủ đề',
        'Video tự động: một chủ đề, nhiều video',
        'Affiliate Flow: từ link Shopee ra video',
        'Reup / Repurpose Flow',
        'AI Review Flow',
        'Link từ kênh YouTube',
        'Phụ đề tự động, giọng đọc tiếng Việt',
        'Hàng đợi chạy song song',
        '1 máy tính',
      ],
      cta: { label: 'Chọn gói Creator', to: 'contact' },
    },
    {
      id: 'full',
      group: 'monthly',
      icon: 'Rocket',
      name: 'Full',
      priceValue: 259000,
      billing: 'month',
      priceNote: 'mỗi tháng',
      audience: 'Cho người bán hàng: làm video rồi đăng thẳng lên Shopee và Facebook/Reels.',
      popular: true,
      badge: 'Phổ biến nhất',
      available: true,
      features: [
        'Tất cả trong Creator',
        'Đăng Shopee Video kèm link sản phẩm',
        'Đăng Facebook / Reels, nhiều Page cùng lúc',
        'Điều khiển từ Telegram',
        'Trợ lý AI trong app',
        'AI Vận Hành: chiến dịch tự tìm, dựng, đăng, đo',
        'Nhiều tài khoản, nhiều shop cùng lúc',
        '30 video mỗi lô',
        '1 máy tính',
      ],
      cta: { label: 'Chọn gói Full', to: 'contact' },
    },
    {
      id: 'full-2-may',
      group: 'monthly',
      icon: 'MonitorSmartphone',
      name: 'Full 2 máy',
      priceValue: 329000,
      billing: 'month',
      priceNote: 'mỗi tháng',
      audience: 'Cho nhà có hai máy — một máy dựng, một máy đăng — hoặc hai người cùng làm.',
      popular: false,
      available: true,
      features: [
        'Tất cả trong Full',
        'AI Vận Hành trên cả hai máy',
        'Cài trên 2 máy tính',
        'Mỗi máy một hàng đợi riêng',
        'Rẻ hơn mua hai gói Full',
      ],
      cta: { label: 'Chọn gói 2 máy', to: 'contact' },
    },
    {
      id: 'full-3-thang',
      group: 'monthly',
      icon: 'Repeat',
      name: 'Full 3 tháng',
      priceValue: 699000,
      billing: 'once',
      // Structural, not prose: the saving on the card is computed from this in
      // `Pricing.jsx`, so the sentence cannot outlive the prices it describes.
      saves: { against: 'full', months: 3 },
      priceNote: 'một lần, dùng 3 tháng',
      audience: 'Trả trước ba tháng để chốt giá, không phải nhớ gia hạn.',
      popular: false,
      available: true,
      features: [
        'Tất cả trong Full',
        'Dùng đủ 3 tháng',
        'Không tự động gia hạn',
        '1 máy tính',
      ],
      cta: { label: 'Chọn gói 3 tháng', to: 'contact' },
    },
    {
      id: 'personal',
      group: 'lifetime',
      icon: 'User',
      name: 'Personal',
      priceValue: 1490000,
      billing: 'once',
      paybackAgainst: 'full',
      priceNote: 'Mua một lần, dùng vĩnh viễn',
      audience: 'Dành cho Affiliate & Creator cá nhân.',
      popular: false,
      available: true,
      features: [
        'Toàn bộ tính năng, không cắt bớt',
        'Không gia hạn, không phí tháng',
        'Shopee + Facebook/Reels',
        'Telegram Remote',
        '1 máy tính',
        '1 tài khoản Shopee chạy cùng lúc',
        'Nhiều Facebook Page',
        '30 video mỗi lô',
        '1 job chạy cùng lúc',
      ],
      cta: { label: 'Chọn Personal', to: 'contact' },
    },
    {
      id: 'team',
      group: 'lifetime',
      icon: 'Users',
      name: 'Team',
      priceValue: 3990000,
      billing: 'once',
      priceNote: 'Mua một lần, dùng vĩnh viễn',
      audience: 'Dành cho team content, shop và nhóm Affiliate.',
      popular: false,
      // The Team plan is not shipping yet, so the badge says so instead of
      // claiming it is the popular choice — and it stays in English on the
      // Vietnamese page, where the phrase is already read as a status label.
      badge: 'Coming soon',
      available: false,
      features: [
        'Tất cả trong Personal',
        '3 máy tính',
        '5 tài khoản Shopee',
        'Nhiều Facebook Page',
        '30 video mỗi lô',
        'Các account chạy đồng thời',
        'Multi-account',
        'Campaign Management',
        'Scheduler',
        'Priority Support',
      ],
      // "Chọn Team" would promise a plan nobody can buy yet; the button asks for
      // a way to reach them instead.
      cta: { label: 'Đăng ký nhận thông báo', to: 'contact' },
    },
  ],
  en: [
    {
      id: 'edit',
      group: 'monthly',
      icon: 'Clapperboard',
      name: 'Edit',
      priceValue: 99000,
      billing: 'month',
      priceNote: 'per month',
      audience: 'For anyone who already has footage and only needs to cut and process it.',
      popular: false,
      available: true,
      features: [
        'Download video from a link or a file',
        'Highlight cutting',
        'Logo and burned-in text removal',
        'Dubbing and translation, several target languages',
        'Text and logo overlay',
        'Shopee product link reader',
        'Footage library and video library',
        '1 computer',
      ],
      cta: { label: 'Choose Edit', to: 'contact' },
    },
    {
      id: 'creator',
      group: 'monthly',
      icon: 'Sparkles',
      name: 'Creator',
      priceValue: 199000,
      billing: 'month',
      priceNote: 'per month',
      audience: 'For people who make their own content — from footage you have, or from an idea.',
      popular: false,
      available: true,
      features: [
        'Everything in Edit',
        'Short video from a topic',
        'Automatic video: one topic, several videos',
        'Affiliate Flow: a Shopee link into a video',
        'Reup / Repurpose Flow',
        'AI Review Flow',
        'Channel links from YouTube',
        'Automatic subtitles and Vietnamese AI voices',
        'Parallel job queue',
        '1 computer',
      ],
      cta: { label: 'Choose Creator', to: 'contact' },
    },
    {
      id: 'full',
      group: 'monthly',
      icon: 'Rocket',
      name: 'Full',
      priceValue: 259000,
      billing: 'month',
      priceNote: 'per month',
      audience: 'For sellers: make the video and publish it straight to Shopee and Facebook/Reels.',
      popular: true,
      badge: 'Most popular',
      available: true,
      features: [
        'Everything in Creator',
        'Post to Shopee Video with the product attached',
        'Post to Facebook / Reels, several Pages at once',
        'Telegram control',
        'The in-app AI assistant',
        'AI Operations: a campaign that finds, builds, posts and measures',
        'Multiple accounts, several shops at once',
        '30 videos per batch',
        '1 computer',
      ],
      cta: { label: 'Choose Full', to: 'contact' },
    },
    {
      id: 'full-2-may',
      group: 'monthly',
      icon: 'MonitorSmartphone',
      name: 'Full · 2 computers',
      priceValue: 329000,
      billing: 'month',
      priceNote: 'per month',
      audience: 'For a household with two machines — one to edit on, one to publish from — or two people working together.',
      popular: false,
      available: true,
      features: [
        'Everything in Full',
        'AI Operations on both machines',
        'Install on 2 computers',
        'Each machine has its own job queue',
        'Cheaper than two Full plans',
      ],
      cta: { label: 'Choose 2 computers', to: 'contact' },
    },
    {
      id: 'full-3-thang',
      group: 'monthly',
      icon: 'Repeat',
      name: 'Full · 3 months',
      priceValue: 699000,
      billing: 'once',
      saves: { against: 'full', months: 3 },
      priceNote: 'one payment, 3 months',
      audience: 'Pay three months up front to fix the price and stop thinking about renewals.',
      popular: false,
      available: true,
      features: [
        'Everything in Full',
        'A full three months',
        'Nothing renews by itself',
        '1 computer',
      ],
      cta: { label: 'Choose 3 months', to: 'contact' },
    },
    {
      id: 'personal',
      group: 'lifetime',
      icon: 'User',
      name: 'Personal',
      priceValue: 1490000,
      billing: 'once',
      paybackAgainst: 'full',
      priceNote: 'One payment, yours for good',
      audience: 'For individual affiliates and creators.',
      popular: false,
      available: true,
      features: [
        'Every feature, nothing held back',
        'Nothing renews, no monthly fee',
        'Shopee + Facebook/Reels',
        'Telegram Remote',
        '1 computer',
        '1 Shopee account at a time',
        'Multiple Facebook Pages',
        '30 videos per batch',
        '1 concurrent job',
      ],
      cta: { label: 'Choose Personal', to: 'contact' },
    },
    {
      id: 'team',
      group: 'lifetime',
      icon: 'Users',
      name: 'Team',
      priceValue: 3990000,
      billing: 'once',
      priceNote: 'One payment, yours for good',
      audience: 'For content teams, shops and affiliate groups.',
      popular: false,
      badge: 'Coming soon',
      available: false,
      features: [
        'Everything in Personal',
        '3 computers',
        '5 Shopee accounts',
        'Multiple Facebook Pages',
        '30 videos per batch',
        'Accounts running at the same time',
        'Multi-account',
        'Campaign Management',
        'Scheduler',
        'Priority Support',
      ],
      cta: { label: 'Notify me', to: 'contact' },
    },
  ],
};

/** One plan by its structural id, for the cards that quote another plan's price. */
export function planById(id, lang) {
  return (plans[lang] || plans.vi).find((plan) => plan.id === id) || null;
}

/**
 * The checkout lives on the licence Worker, not on this site.
 *
 * Keeping it there means the success page can read a licence key as a
 * same-origin request, so the licence API never has to answer a browser's
 * preflight. The landing only has to send the buyer to the right plan.
 *
 * `team` is excluded by `available: false`; its CTA stays the contact form.
 */
export const CHECKOUT_BASE = 'https://license.autoreelvn.com/buy?plan=';

/**
 * Where the current prices come from.
 *
 * The landing is static, but the price is not: an operator can change it in the
 * licence dashboard. `Pricing.jsx` reads this endpoint after mount and falls
 * back to the values in this file if it is unreachable, so the page still
 * renders offline and still shows a sensible number.
 */
export const STORE_PLANS_API = 'https://license.autoreelvn.com/api/v1/store/plans';

/**
 * The plan chooser. The download button points here rather than at an
 * installer: the executable is delivered after payment, and the page it lands
 * on is where the buyer picks a licence.
 */
export const BUY_PLANS = 'https://license.autoreelvn.com/buy';

/**
 * The plan chooser keeps the reader's language.
 *
 * The licence server is a separate origin and cannot read the landing's path,
 * so the language has to travel in the URL. Without this, an English visitor
 * clicks a dollar-priced card and lands on a Vietnamese checkout.
 */
export function buyPlansHref(lang = 'vi') {
  return lang === 'en' ? `${BUY_PLANS}?lang=en` : BUY_PLANS;
}

export function checkoutHref(plan, lang = 'vi') {
  if (!plan || !plan.available) return null;
  const suffix = lang === 'en' ? '&lang=en' : '';
  return `${CHECKOUT_BASE}${encodeURIComponent(plan.id)}${suffix}`;
}

/**
 * What the three-month pack saves against paying monthly: đồng on the
 * Vietnamese page, cents on the English one.
 *
 * The unit follows the page because the two pages do not share a currency
 * table: the English plan prices are the USD amounts PayPal charges, not a
 * conversion of the đồng price. Subtracting đồng and then converting the
 * difference would advertise a saving the two cards do not actually offer.
 *
 * `null` when the plan declares no `saves`, which is every card but one — so
 * the caller asks "is there a saving to show" with a truthiness test rather
 * than by knowing which card it is.
 */
export function savingFor(plan, lang, lookup = planById) {
  if (!plan.saves) return null;
  const base = lookup(plan.saves.against, lang);
  if (!base) return null;
  if (lang === 'en') {
    return usdCentsFor(base) * plan.saves.months - usdCentsFor(plan);
  }
  return base.priceValue * plan.saves.months - plan.priceValue;
}

/**
 * How many months of the monthly plan the lifetime licence takes to pay for
 * itself, rounded up — the number the lifetime cards advertise.
 *
 * Rounded up because the honest claim is "it is paid off by then", and 5.75
 * months is a figure nobody can act on.
 */
export function paybackMonths(plan, lang, lookup = planById) {
  if (!plan.paybackAgainst) return null;
  const base = lookup(plan.paybackAgainst, lang);
  if (!base || !base.priceValue) return null;
  // The English page quotes USD plan prices; the ratio of those is the ratio a
  // buyer can check against the two cards. In đồng the numbers happen to round
  // to the same month today, but that is luck, not a rule.
  if (lang === 'en') {
    const baseCents = usdCentsFor(base);
    if (!baseCents) return null;
    return Math.ceil(usdCentsFor(plan) / baseCents);
  }
  return Math.ceil(plan.priceValue / base.priceValue);
}

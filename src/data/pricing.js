/**
 * What AutoReel costs: the subscription tiers, the two lifetime licences, and
 * the one place a price is written down.
 *
 * **`priceValue` is đồng, whichever language is reading.** The đồng figure is
 * what the business set, what the invoice quotes and what the JSON-LD block
 * publishes; the dollar figure on the English page is *derived* from it by
 * `priceIn()` at the rate below. Storing a second hand-typed number for the
 * English page would be two numbers that have to agree, and the failure is
 * silent: a page that quotes one price to a Vietnamese reader and another to an
 * English one, with nothing anywhere to say which is right.
 *
 * That derivation is also why `26.000` is a constraint rather than a
 * preference. Change it and every English price on the site moves, including
 * the ones inside structured data that Google may already be showing.
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
 * dollars, and doing the rounding in floating point gives `6.114999…` for what
 * a person reads as `6.12`. Rounding to an integer number of cents first means
 * the only arithmetic left is a division by 100, which is exact enough for
 * `Intl` to print the figure that was intended.
 */
export function usdCents(vnd) {
  return Math.round(vnd / (VND_PER_USD / 100));
}

/**
 * A price in the currency of the language reading it.
 *
 * The whole of the "English prices are in dollars" rule, in four lines: the
 * page, the price formatter and the structured data all ask this question
 * rather than each deciding for itself.
 */
export function priceIn(plan, lang) {
  if (lang === 'en') return { amount: usdCents(plan.priceValue) / 100, currency: 'USD' };
  return { amount: plan.priceValue, currency: 'VND' };
}

/** `1.490.000đ` in Vietnamese, `$57.31` in English — the same money. */
export const PRICE_SUFFIX = { vi: 'đ', en: '$' };
export const CURRENCY_LOCALE = { vi: 'vi-VN', en: 'en-US' };

/**
 * One đồng amount as a person reads it in that language.
 *
 * Takes the đồng number rather than a plan, because two of the cards quote an
 * amount that belongs to no plan: what the three-month pack saves, and how long
 * the lifetime licence takes to pay for itself.
 */
export function formatMoney(vnd, lang) {
  if (lang === 'en') {
    return `${PRICE_SUFFIX.en}${new Intl.NumberFormat(CURRENCY_LOCALE.en, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(usdCents(vnd) / 100)}`;
  }
  return `${new Intl.NumberFormat(CURRENCY_LOCALE.vi).format(vnd)}${PRICE_SUFFIX.vi}`;
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
      'Bắt đầu từ 159.000đ một tháng. AutoReel không giới hạn số video; khác nhau ở bộ tính năng và số máy được cài.',
    // `{amount}` and `{months}` are filled in by `Pricing.jsx` from the numbers
    // in this file — see the note on `saves` and `paybackAgainst` below.
    saveTemplate: 'Tiết kiệm {amount} so với trả từng tháng',
    paybackTemplate: 'So với thuê theo tháng, gói này hoàn vốn sau {months} tháng',
    note: 'Thuê bao gia hạn theo tháng và dừng lúc nào cũng được. Giá niêm yết bằng VND; bản tiếng Anh quy đổi theo tỷ giá 26.000đ = 1 USD. Chi phí AI/API hoặc dịch vụ bên thứ ba, nếu sử dụng, thanh toán riêng theo nhà cung cấp.',
  },
  en: {
    headline: 'Pricing: rent by the month or buy outright',
    subheadline:
      'From $6.12 a month. AutoReel does not cap how many videos you make; what differs is which features you get and how many machines you may install on.',
    saveTemplate: 'Save {amount} against paying monthly',
    paybackTemplate: 'Against the monthly plans, this pays for itself in {months} months',
    note: 'Subscriptions renew monthly and can be stopped at any time. Prices are in US dollars, converted at 26,000₫ = $1. Any AI/API or third-party service you use is paid separately to that provider.',
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
      priceValue: 159000,
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
      priceValue: 159000,
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
 * What the three-month pack saves against paying monthly, in đồng.
 *
 * `null` when the plan declares no `saves`, which is every card but one — so
 * the caller asks "is there a saving to show" with a truthiness test rather
 * than by knowing which card it is.
 */
export function savingFor(plan, lang) {
  if (!plan.saves) return null;
  const base = planById(plan.saves.against, lang);
  if (!base) return null;
  return base.priceValue * plan.saves.months - plan.priceValue;
}

/**
 * How many months of the monthly plan the lifetime licence takes to pay for
 * itself, rounded up — the number the lifetime cards advertise.
 *
 * Rounded up because the honest claim is "it is paid off by then", and 5.75
 * months is a figure nobody can act on.
 */
export function paybackMonths(plan, lang) {
  if (!plan.paybackAgainst) return null;
  const base = planById(plan.paybackAgainst, lang);
  if (!base || !base.priceValue) return null;
  return Math.ceil(plan.priceValue / base.priceValue);
}

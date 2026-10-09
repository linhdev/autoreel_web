/**
 * Two lifetime packages. Team is the visually promoted plan.
 * `icon` values map to lucide-react icons inside Pricing.jsx.
 *
 * `id`, `icon`, `priceValue` and `available` are facts, not copy: they drive the
 * layout, the licence term and the JSON-LD offers that `scripts/build-routes.mjs`
 * writes into every page. They live once, outside the language split.
 *
 * The feature lists are mostly product vocabulary that reads the same either
 * way ("Multi-account", "Scheduler"); only the sentences are translated.
 */
export const pricingSection = {
  vi: {
    headline: 'Bảng giá đơn giản, phù hợp từ cá nhân đến team nhỏ',
    subheadline:
      'Không giới hạn video theo tháng bởi AutoReel; khác biệt chủ yếu nằm ở quy mô vận hành.',
    note: 'Không có phí thuê bao AutoReel bắt buộc hàng tháng. License lifetime cho phiên bản đã mua. Chi phí AI/API hoặc dịch vụ bên thứ ba, nếu sử dụng, thanh toán riêng theo nhà cung cấp.',
  },
  en: {
    headline: 'Simple pricing, from one person to a small team',
    subheadline:
      'AutoReel does not cap videos per month; what differs is how much you can run at once.',
    note: 'No mandatory monthly subscription to AutoReel. The licence for the version you buy is lifetime. Any AI/API or third-party service you use is paid separately to that provider.',
  },
};

export const plans = {
  vi: [
    {
      id: 'personal',
      icon: 'User',
      name: 'Personal',
      priceValue: 1490000,
      priceNote: 'Lifetime License',
      audience: 'Dành cho Affiliate & Creator cá nhân.',
      popular: false,
      available: true,
      features: [
        'Affiliate / Reup / AI Review',
        'AI Video + Vietnamese Voice',
        'Highlight + Branding + AI Caption',
        'Shopee + Facebook/Reels',
        'Telegram Remote',
        '1 PC',
        '1 Shopee Account (concurrent)',
        'Multiple Facebook Pages',
        '30 videos/batch',
        '1 concurrent job',
      ],
      cta: { label: 'Chọn Personal', to: 'contact' },
    },
    {
      id: 'team',
      icon: 'Users',
      name: 'Team',
      priceValue: 3990000,
      priceNote: 'Lifetime License',
      audience: 'Dành cho team content, shop và nhóm Affiliate.',
      popular: true,
      // The Team plan is not shipping yet, so the badge says so instead of
      // claiming it is the popular choice — and it stays in English on the
      // Vietnamese page, where the phrase is already read as a status label.
      popularLabel: 'Coming soon',
      available: false,
      features: [
        'Tất cả trong Personal',
        '3 PCs',
        '5 Shopee Accounts',
        'Multiple Facebook Pages',
        '30 videos/batch',
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
      id: 'personal',
      icon: 'User',
      name: 'Personal',
      priceValue: 1490000,
      priceNote: 'Lifetime License',
      audience: 'For individual affiliates and creators.',
      popular: false,
      available: true,
      features: [
        'Affiliate / Reup / AI Review',
        'AI Video + Vietnamese Voice',
        'Highlight + Branding + AI Caption',
        'Shopee + Facebook/Reels',
        'Telegram Remote',
        '1 PC',
        '1 Shopee Account (concurrent)',
        'Multiple Facebook Pages',
        '30 videos/batch',
        '1 concurrent job',
      ],
      cta: { label: 'Choose Personal', to: 'contact' },
    },
    {
      id: 'team',
      icon: 'Users',
      name: 'Team',
      priceValue: 3990000,
      priceNote: 'Lifetime License',
      audience: 'For content teams, shops and affiliate groups.',
      popular: true,
      popularLabel: 'Coming soon',
      available: false,
      features: [
        'Everything in Personal',
        '3 PCs',
        '5 Shopee Accounts',
        'Multiple Facebook Pages',
        '30 videos/batch',
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

/** `1.490.000đ` in Vietnamese, `1,490,000₫` in English — same number, same money. */
export const PRICE_SUFFIX = { vi: 'đ', en: '₫' };
export const CURRENCY_LOCALE = { vi: 'vi-VN', en: 'en-US' };

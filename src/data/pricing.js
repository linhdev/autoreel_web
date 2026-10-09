/**
 * Two lifetime packages. Team is the visually promoted plan.
 * `icon` values map to lucide-react icons inside Pricing.jsx.
 */
export const pricingSection = {
  headline: 'Bảng giá đơn giản, phù hợp từ cá nhân đến team nhỏ',
  subheadline:
    'Không giới hạn video theo tháng bởi AutoReel; khác biệt chủ yếu nằm ở quy mô vận hành.',
  note: 'Không có phí thuê bao AutoReel bắt buộc hàng tháng. License lifetime cho phiên bản đã mua. Chi phí AI/API hoặc dịch vụ bên thứ ba, nếu sử dụng, thanh toán riêng theo nhà cung cấp.',
};

export const plans = [
  {
    id: 'personal',
    icon: 'User',
    name: 'Personal',
    price: '1.490.000đ',
    priceNote: 'Lifetime License',
    audience: 'Dành cho Affiliate & Creator cá nhân.',
    popular: false,
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
    cta: { label: 'Chọn Personal', href: '#contact' },
  },
  {
    id: 'team',
    icon: 'Users',
    name: 'Team',
    price: '3.990.000đ',
    priceNote: 'Lifetime License',
    audience: 'Dành cho team content, shop và nhóm Affiliate.',
    popular: true,
    popularLabel: 'MOST POPULAR',
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
    cta: { label: 'Chọn Team', href: '#contact' },
  },
];

/**
 * The three core AutoReel workflows.
 * `icon` values map to lucide-react icons inside WorkflowCard.jsx.
 */
export const workflows = [
  {
    id: 'affiliate',
    icon: 'ShoppingBag',
    title: 'Affiliate Flow',
    headline: 'Từ sản phẩm → Video → Đăng bán',
    description:
      'Nhập link sản phẩm, chọn số lượng video, giọng đọc, tốc độ, nhạc nền và nền tảng.',
    miniFlow: 'Sản phẩm → AI Content → Video → Caption → Shopee / Facebook',
    features: [
      'Tạo hàng loạt video sản phẩm',
      'AI Voice + Subtitle',
      'AI Caption',
      'Auto Publish',
    ],
  },
  {
    id: 'repurpose',
    icon: 'Repeat',
    title: 'Reup / Repurpose Flow',
    headline: 'Biến video có sẵn thành nội dung mới',
    description:
      'Nhập link YouTube/TikTok hoặc upload video, sau đó chọn các bước xử lý cần thiết.',
    miniFlow: 'Video nguồn → Highlight / Dub / Branding → Final Video → Publish',
    features: [
      'AI cắt Highlight',
      'Lồng tiếng Việt',
      'Subtitle + Branding',
      'Logo / text trên dưới',
    ],
  },
  {
    id: 'review',
    icon: 'Clapperboard',
    title: 'AI Review Flow',
    headline: 'Một video nguồn → Nhiều video mới',
    description:
      'AI phân tích nội dung/kịch bản gốc và viết lại nhiều phiên bản theo số lượng bạn yêu cầu.',
    miniFlow: '1 Video → AI Analyze → Rewrite → N Scripts → N Videos → Publish',
    features: [
      'Nhân bản nội dung theo số lượng',
      'Voice + Speed + Music',
      'Tùy chỉnh độ dài/style',
      'Publish kèm AI Caption',
    ],
  },
];

export const workflowSection = {
  title: 'Một AutoReel.',
  titleHighlight: 'Ba workflow chính.',
  subtitle: 'Chọn mục tiêu của bạn, cấu hình một lần và để AutoReel xử lý phần còn lại.',
};

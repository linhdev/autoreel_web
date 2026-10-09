/**
 * The three core AutoReel workflows.
 *
 * `id` and `icon` are structural — they build DOM ids and pick a lucide icon —
 * so they sit outside the language split and must never be translated. The
 * flow names ("Affiliate Flow") are the product's own vocabulary and stay as
 * they are in both languages; everything a reader parses as a sentence is
 * translated.
 */
const shape = {
  affiliate: { id: 'affiliate', icon: 'ShoppingBag', title: 'Affiliate Flow' },
  repurpose: { id: 'repurpose', icon: 'Repeat', title: 'Reup / Repurpose Flow' },
  review: { id: 'review', icon: 'Clapperboard', title: 'AI Review Flow' },
};

export const workflows = {
  vi: [
    {
      ...shape.affiliate,
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
      ...shape.repurpose,
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
      ...shape.review,
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
  ],
  en: [
    {
      ...shape.affiliate,
      headline: 'Product → Video → Listed for sale',
      description:
        'Paste the product link, then choose how many videos, which voice, the speed, the music bed and the platforms.',
      miniFlow: 'Product → AI Content → Video → Caption → Shopee / Facebook',
      features: ['Product videos in bulk', 'AI Voice + Subtitle', 'AI Caption', 'Auto Publish'],
    },
    {
      ...shape.repurpose,
      headline: 'Turn a video you already have into something new',
      description:
        'Paste a YouTube/TikTok link or upload a file, then tick the processing steps you want.',
      miniFlow: 'Source video → Highlight / Dub / Branding → Final Video → Publish',
      features: [
        'AI highlight cutting',
        'Vietnamese dubbing',
        'Subtitle + Branding',
        'Logo / top and bottom text',
      ],
    },
    {
      ...shape.review,
      headline: 'One source video → Many new videos',
      description:
        'The AI reads the original script and rewrites it into as many versions as you ask for.',
      miniFlow: '1 Video → AI Analyze → Rewrite → N Scripts → N Videos → Publish',
      features: [
        'Duplicate content to order',
        'Voice + Speed + Music',
        'Adjustable length and style',
        'Publish with an AI caption',
      ],
    },
  ],
};

export const workflowSection = {
  vi: {
    title: 'Một AutoReel. **Ba workflow chính.**',
    subtitle: 'Chọn mục tiêu của bạn, cấu hình một lần và để AutoReel xử lý phần còn lại.',
  },
  en: {
    title: 'One AutoReel. **Three core workflows.**',
    subtitle: 'Pick your goal, set it up once, and let AutoReel do the rest.',
  },
};

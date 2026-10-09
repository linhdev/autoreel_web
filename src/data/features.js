/**
 * Benefit grid (8 items).
 *
 * `icon` is structural — it picks the lucide icon — so it is repeated in both
 * lists rather than hoisted: the two arrays are then the same shape, and a
 * check in `verify-build.mjs` compares them position by position, which it
 * could not do if one language carried the icons and the other did not.
 */
export const benefits = {
  vi: [
    {
      icon: 'Zap',
      title: 'Tiết kiệm thời gian',
      description: 'Giảm copy, download, upload và các bước thủ công lặp lại.',
    },
    {
      icon: 'Boxes',
      title: 'Xử lý hàng loạt',
      description: 'Tạo và xử lý nhiều video trong cùng một job.',
    },
    {
      icon: 'BrainCircuit',
      title: 'AI linh hoạt',
      description: 'Hỗ trợ DeepSeek, OpenAI và Google Gemini tùy cấu hình.',
    },
    {
      icon: 'AudioLines',
      title: 'AI Voice tiếng Việt',
      description: 'Nhiều giọng đọc, hỗ trợ workflow chạy local.',
    },
    {
      icon: 'Palette',
      title: 'Branding tự động',
      description: 'Logo, template, text trên/dưới và subtitle.',
    },
    {
      icon: 'Rocket',
      title: 'Auto Publish',
      description: 'Đăng trực tiếp lên Shopee và Facebook/Reels.',
    },
    {
      icon: 'Send',
      title: 'Telegram Remote',
      description: 'Giao việc và theo dõi AutoReel từ xa.',
    },
    {
      icon: 'MonitorSmartphone',
      title: 'Local-first',
      description: 'Phần lớn workflow chạy trực tiếp trên máy tính của bạn.',
    },
  ],
  en: [
    {
      icon: 'Zap',
      title: 'Save time',
      description: 'Fewer copies, downloads, uploads and repeated manual steps.',
    },
    {
      icon: 'Boxes',
      title: 'Work in batches',
      description: 'Create and process many videos inside one job.',
    },
    {
      icon: 'BrainCircuit',
      title: 'Flexible AI',
      description: 'Works with DeepSeek, OpenAI and Google Gemini, whichever you configure.',
    },
    {
      icon: 'AudioLines',
      title: 'Vietnamese AI voice',
      description: 'Several voices, and the workflow runs locally.',
    },
    {
      icon: 'Palette',
      title: 'Automatic branding',
      description: 'Logo, template, text above and below, and subtitles.',
    },
    {
      icon: 'Rocket',
      title: 'Auto Publish',
      description: 'Posts straight to Shopee and Facebook/Reels.',
    },
    {
      icon: 'Send',
      title: 'Telegram Remote',
      description: 'Hand over jobs and follow progress from anywhere.',
    },
    {
      icon: 'MonitorSmartphone',
      title: 'Local-first',
      description: 'Most of the workflow runs on your own computer.',
    },
  ],
};

export const benefitsSection = {
  vi: { title: 'Làm nhiều hơn. **Thao tác ít hơn.**' },
  en: { title: 'Do more. **Click less.**' },
};

/**
 * The home page's signature block for AI Vận Hành.
 *
 * Every other section on the one-pager sells a *job* — paste a link, cut a
 * clip, dub a video. This one is the product's own idea: a campaign that runs
 * the whole loop with one press, and it gets its own shape on the page
 * (`AIOperations.jsx`) because a card in the feature grid would file it beside
 * the twelve single-job screens it is supposed to rise above.
 *
 * **The six steps are product behaviour, not decoration.** They match the
 * loop on `/ai-van-hanh/`: find, build, check, post, measure, learn. The five
 * checkpoints are 1h / 6h / 24h / 72h / 168h, the same five the campaign
 * screen shows. The plan gate is real too — Full and above. If one of these
 * changes in the app, this copy changes with it.
 */
export const aiOperationsSection = {
  vi: {
    kicker: 'TÍNH NĂNG ĐẶC TRƯNG',
    title: 'AI Vận Hành — **cả vòng lặp**, không chỉ một công cụ',
    lede:
      'Một chiến dịch, một lần bấm. AI Vận Hành tự tìm nguồn, dựng video, kiểm, đăng lên Page, đo số rồi mang bài học sang lượt sau — chạy mỗi ngày mà bạn không phải ngồi trước máy.',
    points: [
      '**Tự tìm nguồn** mới từ Bilibili, Douyin, YouTube, iQiyi',
      '**Tự dựng đúng chế độ**: review, tóm tắt, lồng tiếng, cắt highlight',
      '**Tự đo ở 5 mốc** 1h · 6h · 24h · 72h · 168h rồi điều chỉnh lượt sau',
    ],
    loopLabel: 'Một vòng lặp, sáu bước',
    loopCenter: { strong: '1 lần bấm', small: 'chạy mỗi ngày' },
    steps: [
      { icon: 'Search', title: 'Tìm nguồn' },
      { icon: 'Clapperboard', title: 'Dựng video' },
      { icon: 'ShieldCheck', title: 'Kiểm' },
      { icon: 'Send', title: 'Đăng' },
      { icon: 'Gauge', title: 'Đo số' },
      { icon: 'BrainCircuit', title: 'Học' },
    ],
    primaryCta: { label: 'Xem AI Vận Hành hoạt động', to: 'aiOperations' },
    secondaryCta: { label: 'Xem video demo', to: 'demo' },
    note: 'Có trong gói Full trở lên · Duyệt trước hay đăng ngay, tuỳ bạn',
  },
  en: {
    kicker: 'SIGNATURE FEATURE',
    title: 'AI Operations — **the whole loop**, not another tool',
    lede:
      'One campaign, one press. AI Operations finds the source, builds the video, checks it, posts to your Page, measures the numbers and carries the lesson into the next run — every day, without you at the desk.',
    points: [
      '**Finds new sources** on Bilibili, Douyin, YouTube and iQiyi',
      '**Builds each mode**: review, recap, dubbing, highlight cutting',
      '**Measures at 5 checkpoints** 1h · 6h · 24h · 72h · 168h, then adjusts the next run',
    ],
    loopLabel: 'One loop, six steps',
    loopCenter: { strong: 'One press', small: 'runs daily' },
    steps: [
      { icon: 'Search', title: 'Find source' },
      { icon: 'Clapperboard', title: 'Build' },
      { icon: 'ShieldCheck', title: 'Check' },
      { icon: 'Send', title: 'Post' },
      { icon: 'Gauge', title: 'Measure' },
      { icon: 'BrainCircuit', title: 'Learn' },
    ],
    primaryCta: { label: 'See AI Operations in action', to: 'aiOperations' },
    secondaryCta: { label: 'Watch the demo', to: 'demo' },
    note: 'Included in Full and above · Pre-approve or post straight away, your call',
  },
};

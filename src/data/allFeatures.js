/**
 * Every feature the app has, in one list — the section a reader lands on when
 * the question is "does it do X".
 *
 * Three groups rather than one flat grid, because the three answer different
 * questions: the flows are what you buy, the single screens are what you reach
 * for when you only need one thing done, and the last group is what is true of
 * the whole app rather than of any one screen.
 *
 * `id` and `icon` are structural — they build anchors and pick a lucide icon —
 * so they sit outside the language split, and **the item icons are repeated in
 * both lists on purpose**: the two halves are then the same shape, and
 * `scripts/verify-build.mjs` compares them position by position, which it could
 * not do if one language carried the icons and the other did not. That is the
 * same trade `features.js` makes for the benefit cards.
 *
 * A card with no icon is a paragraph in a box: the icon is what makes forty
 * entries scannable rather than readable, so each one picks a glyph that says
 * what the job is rather than one that merely looks good next to it.
 *
 * Two screens are deliberately absent: the Video library, which is where finished
 * videos are listed and downloaded, and Assets, which is where your own footage
 * and music are kept. Both are places you look something up rather than jobs you
 * choose to run, and a feature list is a list of jobs.
 */
const shape = {
  flows: { id: 'flows', icon: 'Boxes' },
  single: { id: 'single', icon: 'Sparkles' },
  shared: { id: 'shared', icon: 'Cog' },
};

export const allFeatures = {
  vi: [
    {
      ...shape.flows,
      title: 'Luồng trọn gói',
      note: 'Một lần bấm, chạy hết từ đầu tới lúc đăng.',
      items: [
        {
          icon: 'ShoppingBag',
          name: 'Affiliate Flow',
          line: 'Dán link sản phẩm Shopee và số video muốn có. Hệ thống đọc sản phẩm, viết kịch bản, dựng video, viết caption rồi đăng lên Shopee hoặc Facebook.',
        },
        {
          icon: 'Repeat',
          name: 'Reup / Repurpose Flow',
          line: 'Đưa một video có sẵn bằng link hoặc tệp, rồi tick những bước muốn làm: cắt highlight, xoá logo, lồng tiếng, chèn chữ. Ra bản mới, rồi đăng.',
        },
        {
          icon: 'Clapperboard',
          name: 'AI Review Flow',
          line: 'Đưa một video, AI đọc lời thoại và viết lại thành nhiều kịch bản khác nhau. Mỗi kịch bản ra một video riêng, có giọng đọc và caption.',
        },
      ],
    },
    {
      ...shape.single,
      title: 'Từng việc lẻ',
      note: 'Mỗi màn làm một việc; dùng riêng cũng được, không phải chạy cả luồng.',
      items: [
        {
          icon: 'Sparkles',
          name: 'Video ngắn từ chủ đề',
          line: 'Nhập một chủ đề, chọn giọng đọc — ra video dọc có phụ đề, dựng từ tư liệu.',
        },
        {
          icon: 'Boxes',
          name: 'Video tự động',
          line: 'Một chủ đề, nhiều video một lúc. Hình lấy từ kho tư liệu, có nhạc nền và phụ đề.',
        },
        {
          icon: 'AudioLines',
          name: 'Lồng tiếng',
          line: 'Giữ nguyên hình, thay tiếng bằng giọng tổng hợp. Chọn được nhiều ngôn ngữ đích trong cùng một lượt.',
        },
        {
          icon: 'Play',
          name: 'Cắt highlight',
          line: 'Đưa video dài, hệ thống tự tìm những đoạn đáng giữ rồi cắt thành clip ngắn. Tự chỉnh được thế nào là một đoạn hay.',
        },
        {
          icon: 'Eraser',
          name: 'Xoá logo và chữ cứng',
          line: 'Gỡ watermark, tên kênh và phụ đề cháy cứng khỏi hình — vẽ đè chứ không cắt cúp khung.',
        },
        {
          icon: 'Type',
          name: 'Chèn chữ và logo',
          line: 'Chọn một trong tám mẫu có sẵn, gõ chữ trên và chữ dưới, và nhìn thấy khung hình sẽ ra sao ngay khi chọn.',
        },
        {
          icon: 'Package',
          name: 'Đọc link sản phẩm',
          line: 'Dán link Shopee, nhận về bảng tiêu đề, giá và ảnh của sản phẩm — kèm ảnh tải về được.',
        },
        {
          icon: 'Rocket',
          name: 'Đăng Shopee Video',
          line: 'Đăng video lên Shopee kèm link sản phẩm, qua chiếc điện thoại nối với máy bạn.',
        },
        {
          icon: 'Send',
          name: 'Đăng Facebook / Reels',
          line: 'Đăng lên một hoặc nhiều Page cùng lúc, mỗi video một caption riêng.',
        },
        {
          icon: 'Link',
          name: 'Link từ kênh',
          line: 'Dán link một kênh YouTube, lấy về danh sách video để dùng làm nguồn.',
        },
        {
          icon: 'MessageCircle',
          name: 'Điều khiển từ Telegram',
          line: 'Giao việc và xem tiến độ từ điện thoại, không cần mở máy tính.',
        },
        {
          icon: 'Cog',
          name: 'Cấu hình',
          line: 'Khai khoá AI, chọn nhà cung cấp mô hình, và bấm kiểm tra kết nối trước khi chạy thật.',
        },
      ],
    },
    {
      ...shape.shared,
      title: 'Nền dùng chung',
      note: 'Không thuộc màn nào; có mặt ở mọi màn.',
      items: [
        {
          icon: 'Layers',
          name: 'Hàng đợi chạy song song',
          line: 'Nhiều video chạy cùng lúc, theo dõi được từng job, dừng giữa đường mà không mất phần đã xong.',
        },
        {
          icon: 'Mic',
          name: 'Giọng đọc tiếng Việt',
          line: 'Nhiều giọng và nhiều tốc độ; có giọng chạy hoàn toàn trên máy nên không tốn phí theo câu.',
        },
        {
          icon: 'Captions',
          name: 'Phụ đề tự động',
          line: 'Sinh từ lời thoại, cháy lên hình, chỉnh được cỡ chữ và vị trí.',
        },
        {
          icon: 'Languages',
          name: 'Hai ngôn ngữ giao diện',
          line: 'Tiếng Việt và tiếng Anh, đổi ngay tại chỗ không cần tải lại trang.',
        },
      ],
    },
  ],
  en: [
    {
      ...shape.flows,
      title: 'End-to-end flows',
      note: 'One press, from the first step to the published video.',
      items: [
        {
          icon: 'ShoppingBag',
          name: 'Affiliate Flow',
          line: 'Paste a Shopee product link and how many videos you want. It reads the product, writes the script, builds the video, writes the caption and posts to Shopee or Facebook.',
        },
        {
          icon: 'Repeat',
          name: 'Reup / Repurpose Flow',
          line: 'Hand it a video you already have — a link or a file — and tick the steps you want: cut highlights, remove a logo, dub it, add text. Out comes a new version, then it posts.',
        },
        {
          icon: 'Clapperboard',
          name: 'AI Review Flow',
          line: 'Give it one video; the AI reads the spoken words and rewrites them into as many scripts as you ask for. Each script becomes its own video, with a voice and a caption.',
        },
      ],
    },
    {
      ...shape.single,
      title: 'One job at a time',
      note: 'Each screen does one thing, and works on its own — you do not have to run a whole flow.',
      items: [
        {
          icon: 'Sparkles',
          name: 'Short video from a topic',
          line: 'Type a topic, pick a voice, get a vertical video with burned-in subtitles, built from stock footage.',
        },
        {
          icon: 'Boxes',
          name: 'Automatic video',
          line: 'One topic, several videos at once. Footage comes from your library, with a music bed and subtitles.',
        },
        {
          icon: 'AudioLines',
          name: 'Dubbing',
          line: 'Keep the picture, replace the sound with a synthetic voice. Several target languages can be chosen in one run.',
        },
        {
          icon: 'Play',
          name: 'Highlight cutting',
          line: 'Hand it a long video and it finds the parts worth keeping, then cuts them into short clips. You can tune what counts as a good part.',
        },
        {
          icon: 'Eraser',
          name: 'Logo and burned-in text removal',
          line: 'Takes a watermark, a channel name or hard-coded subtitles off the picture — painted over, never cropped away.',
        },
        {
          icon: 'Type',
          name: 'Text and logo overlay',
          line: 'Pick one of eight templates, type the top and bottom lines, and see the frame you will get the moment you choose.',
        },
        {
          icon: 'Package',
          name: 'Product link reader',
          line: 'Paste a Shopee link and get back a table of the title, the price and the pictures — with the images downloadable.',
        },
        {
          icon: 'Rocket',
          name: 'Post to Shopee Video',
          line: 'Publishes to Shopee with the product attached, through the phone paired with your machine.',
        },
        {
          icon: 'Send',
          name: 'Post to Facebook / Reels',
          line: 'Publishes to one Page or many at once, with a caption written for each video.',
        },
        {
          icon: 'Link',
          name: 'Channel links',
          line: 'Paste a YouTube channel link and get back the list of its videos to use as sources.',
        },
        {
          icon: 'MessageCircle',
          name: 'Telegram control',
          line: 'Hand out work and watch progress from your phone, without opening the computer.',
        },
        {
          icon: 'Cog',
          name: 'Settings',
          line: 'Enter your AI keys, choose the model provider, and test the connection before a real run.',
        },
      ],
    },
    {
      ...shape.shared,
      title: 'Platform underneath',
      note: 'Not part of any one screen; true of all of them.',
      items: [
        {
          icon: 'Layers',
          name: 'Parallel job queue',
          line: 'Several videos run at once, every job can be watched, and stopping halfway keeps what is already done.',
        },
        {
          icon: 'Mic',
          name: 'Vietnamese AI voices',
          line: 'Several voices and speeds; some run entirely on your machine, so they cost nothing per sentence.',
        },
        {
          icon: 'Captions',
          name: 'Automatic subtitles',
          line: 'Generated from the spoken words, burned into the picture, with adjustable size and position.',
        },
        {
          icon: 'Languages',
          name: 'Two interface languages',
          line: 'Vietnamese and English, switched in place without reloading the page.',
        },
      ],
    },
  ],
};

export const allFeaturesSection = {
  vi: {
    title: 'Toàn bộ tính năng **đang có**.',
    subtitle:
      'Xếp theo việc bạn cần làm: ba luồng chạy trọn gói, mười hai màn làm từng việc lẻ, và phần nền có mặt ở mọi màn.',
  },
  en: {
    title: 'Every feature **in the app**.',
    subtitle:
      'Sorted by the job in front of you: three end-to-end flows, twelve single-job screens, and the platform underneath all of them.',
  },
};

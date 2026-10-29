/**
 * Long-form copy for `/tat-ca-tinh-nang/`.
 *
 * The route renders `FeatureList`, which is also the feature section of the
 * home page. Adding a second list of the same features would not help; this
 * block answers the questions the list cannot: which entry point fits which
 * job, what the app deliberately does not do, and which plan unlocks what.
 *
 * The plan matrix is derived from `pricing.js` rather than typed from memory.
 * If a plan changes there, this table is the copy that must be revisited.
 */
export default {
  vi: {
    title: 'Chọn tính năng theo việc, **không theo menu**',
    faqTitle: 'Câu hỏi nhanh',
    subtitle:
      'Danh sách trên trang chủ chia theo nhóm. Phần này chia theo việc bạn đang cần làm, kèm giới hạn và gói nào có.',
    blocks: [
      {
        h2: 'Bốn việc, bốn đường vào',
        paragraphs: [
          'Cùng một app, nhưng đường vào khác nhau tuỳ thứ bạn đang có trong tay. Chọn sai đường không làm hỏng gì; nó chỉ làm bạn đi qua nhiều bước hơn cần thiết.',
        ],
        table: {
          head: ['Việc bạn cần', 'Đường vào', 'Đầu ra'],
          rows: [
            ['Bán hàng Shopee', 'Affiliate Flow', 'Video + caption + bài đăng kèm link sản phẩm'],
            ['Làm lại video có sẵn', 'Reup / Repurpose Flow', 'Bản mới: highlight, xoá logo, lồng tiếng, chèn chữ'],
            ['Tóm tắt phim hoặc series', 'Tóm tắt phim', 'Video kể lại có lời bình tiếng Việt'],
            ['Làm video từ một chủ đề', 'Video ngắn / Video tự động', 'Video dọc có phụ đề, dựng từ tư liệu'],
            ['Chỉ cần một bước', 'Màn lẻ', 'Đúng một file, không chạy cả luồng'],
          ],
        },
        paragraphsAfter: [
          'Nếu bạn chỉ cần cắt highlight hoặc xoá logo, đừng chạy cả Affiliate Flow. Màn lẻ làm đúng một việc và dừng.',
        ],
      },
      {
        h2: 'Luồng trọn gói và màn lẻ khác gì',
        table: {
          head: ['', 'Luồng trọn gói', 'Màn lẻ'],
          rows: [
            ['Số bước', '4–6 bước tự động', '1 bước'],
            ['Kiểm soát', 'Kiểm ở đầu và cuối', 'Kiểm từng tham số'],
            ['Phù hợp', 'Lô lớn, ít thay đổi', 'Việc cụ thể, cần sửa tay'],
            ['Ví dụ', '20 video từ một link Shopee', 'Cắt 5 clip từ một video dài'],
          ],
        },
        paragraphsAfter: [
          'Luồng trọn gói không phải “tự động hết mọi thứ”. Nó tự động phần lặp lại, còn quyết định nội dung vẫn ở bạn.',
        ],
      },
      {
        h2: 'Những giới hạn cần biết',
        bullets: [
          'Không phải editor timeline; không thay CapCut cho dựng tay nhiều lớp.',
          'Không sinh footage từ AI; hình lấy từ video nguồn, kho tư liệu hoặc Pexels.',
          'Không đăng TikTok hoặc YouTube trực tiếp; hiện chỉ có Shopee Video và Facebook/Reels.',
          'Không tách nhạc khỏi giọng; không phải tool downloader đa năng.',
          'Chạy local trên Windows hoặc macOS; cần tối thiểu 8GB RAM và khoảng 25GB trống.',
          'Không bao gồm phí AI/API bên thứ ba; phần đó trả riêng cho nhà cung cấp bạn chọn.',
        ],
        paragraphsAfter: [
          'Mỗi dòng trên là một giới hạn thật, không phải disclaimer. Nếu việc của bạn cần đúng một trong những thứ đó, AutoReel không phải công cụ phù hợp.',
        ],
      },
      {
        h2: 'Gói nào có tính năng nào',
        table: {
          head: ['Tính năng', 'Edit', 'Creator', 'Full', 'Personal'],
          rows: [
            ['Tải video 6 nguồn, cắt highlight, xoá logo, lồng tiếng, chèn chữ', '✓', '✓', '✓', '✓'],
            ['Video từ chủ đề, ba flow trọn gói, tóm tắt phim', '—', '✓', '✓', '✓'],
            ['Đăng Shopee Video và Facebook/Reels', '—', '—', '✓', '✓'],
            ['Telegram Remote và trợ lý AI trong app', '—', '—', '✓', '✓'],
            ['AI Vận Hành: chiến dịch tự tìm, dựng, đăng và đo', '—', '—', '✓', '✓'],
            ['Nhiều shop, nhiều Page cùng lúc', '—', '—', '✓', '✓'],
            ['30 video mỗi lô', '—', '—', '✓', '✓'],
            ['Mua đứt, không gia hạn', '—', '—', '—', '✓'],
            ['Số máy tính', '1', '1', '1', '1'],
          ],
        },
        paragraphsAfter: [
          'Bảng này chỉ để chọn đúng gói; chi tiết từng gói và giá nằm ở trang bảng giá.',
        ],
      },
      {
        h2: 'Tính năng nào dùng hằng ngày, tính năng nào để dành',
        paragraphs: [
          'Đừng chọn gói theo độ dài danh sách. Nhìn vào việc bạn làm mỗi ngày: tải nguồn, cắt, lồng tiếng, phụ đề, đăng. Đó là phần đáng trả tiền.',
        ],
        bullets: [
          'Hằng ngày: tải video, cắt highlight, lồng tiếng, phụ đề, đăng Shopee/Facebook.',
          'Theo lô: Affiliate/Reup Flow, hàng đợi, 30 video mỗi lô.',
          'Khi cần: xoá logo, tách âm thanh, tóm tắt phim, template chữ và logo.',
          'Ít dùng: đổi ngôn ngữ giao diện, cấu hình model AI.',
        ],
        paragraphsAfter: [
          'Nếu bạn chỉ dùng nhóm đầu, Edit đủ. Nếu nhóm thứ hai là công việc chính, Creator. Nếu cần đăng bài, Full.',
        ],
      },
      {
        h2: 'Một số tính năng ít người để ý',
        bullets: [
          '**Link từ kênh YouTube** — lấy cả danh sách video của một kênh làm nguồn, thay vì copy từng link.',
          '**Hàng đợi** — dừng giữa đường không mất phần đã xong; chạy lại từ bước dừng.',
          '**Giọng đọc chạy trên máy** — không tốn phí theo câu; ElevenLabs là tuỳ chọn, không bắt buộc.',
          '**Phụ đề cháy lên hình** — chỉnh được cỡ chữ và vị trí, không phải file phụ đề rời.',
          '**Mười ba mẫu chữ và logo** — xem khung hình trước khi chọn, không phải đoán.',
          '**Hai ngôn ngữ giao diện** — đổi ngay tại chỗ, không tải lại trang.',
        ],
        paragraphsAfter: [
          'Đây là những thứ không bán được bằng một dòng “AI làm video”, nhưng là thứ quyết định có dùng được hàng ngày hay không.',
        ],
      },
      {
        h2: 'Khi nào không nên mua',
        bullets: [
          'Bạn cần dựng tay từng khung, nhiều hiệu ứng: dùng editor.',
          'Bạn chỉ làm một hai video mỗi tháng: công cụ miễn phí có thể đủ.',
          'Bạn cần đăng TikTok hoặc YouTube trực tiếp: hiện chưa có.',
          'Bạn không muốn trả phí AI/API bên thứ ba: vẫn cần key cho phần viết, dù giọng đọc có thể chạy local.',
        ],
        paragraphsAfter: [
          'Nếu câu trả lời là “không” với cả bốn, AutoReel có thể tiết kiệm cho bạn vài giờ mỗi tuần.',
        ],
      },
    ],
    faq: [
      [
        'Có dùng màn lẻ mà không cần mua Full không?',
        'Có. Edit đã có các màn xử lý cơ bản; flow trọn gói và phần đăng bài cần Creator hoặc Full.',
      ],
      [
        'AutoReel có phải phần mềm dựng phim không?',
        'Không. Đây là dây chuyền sản xuất video hàng loạt; nó không thay editor timeline cho dựng tay phức tạp.',
      ],
      [
        'Có tự đăng YouTube hoặc TikTok không?',
        'Chưa. Hiện tích hợp Shopee Video và Facebook/Reels.',
      ],
      [
        'Máy 8GB RAM có chạy được không?',
        'Được, nhưng nên chạy ít job song song và tránh video dài. 16GB thoải mái hơn.',
      ],
      [
        'Có cần GPU không?',
        'Không bắt buộc. GPU giúp render nhanh hơn, nhưng app vẫn chạy bằng CPU.',
      ],
    ],
  },
  en: {
    title: 'Pick features by the job, **not by the menu**',
    faqTitle: 'Quick answers',
    subtitle:
      'The list on the home page is grouped by what the app contains. This is grouped by what you are trying to do, with the limits and the plan each feature needs.',
    blocks: [
      {
        h2: 'Four jobs, four entry points',
        paragraphs: [
          'One app, but a different way in depending on what you already have. Picking the wrong entry point does not break anything; it just makes you walk through more steps than necessary.',
        ],
        table: {
          head: ['What you need', 'Where to start', 'What comes out'],
          rows: [
            ['Selling on Shopee', 'Affiliate Flow', 'Video + caption + a post carrying the product link'],
            ['Repurposing an existing video', 'Reup / Repurpose Flow', 'A new version: highlights, logo removal, dubbing, text'],
            ['Recapping a film or a series', 'Movie recap', 'A narrated recap in Vietnamese'],
            ['Making a video from a topic', 'Short video / Automatic video', 'A vertical video with subtitles, built from stock footage'],
            ['Doing one step only', 'Single-job screen', 'One file, without running a whole flow'],
          ],
        },
        paragraphsAfter: [
          'If you only need to cut highlights or remove a logo, do not run the whole Affiliate Flow. A single-job screen does one thing and stops.',
        ],
      },
      {
        h2: 'End-to-end flows versus single screens',
        table: {
          head: ['', 'End-to-end flow', 'Single screen'],
          rows: [
            ['Steps', '4–6 automatic steps', 'One step'],
            ['Control', 'Check at the start and the end', 'Check every parameter'],
            ['Fits', 'Large batches, little variation', 'A specific job that needs a manual touch'],
            ['Example', '20 videos from one Shopee link', 'Cut 5 clips from one long video'],
          ],
        },
        paragraphsAfter: [
          'An end-to-end flow is not “everything automatic”. It automates the repeated part; the editorial decision is still yours.',
        ],
      },
      {
        h2: 'Limits worth knowing',
        bullets: [
          'It is not a timeline editor; it does not replace CapCut for multi-layer manual editing.',
          'It does not generate footage with AI; pictures come from the source, your library or Pexels.',
          'It does not post directly to TikTok or YouTube; only Shopee Video and Facebook/Reels are integrated.',
          'It does not separate music from voice; it is not a general-purpose downloader.',
          'It runs locally on Windows or macOS; at least 8GB of RAM and about 25GB of free disk are required.',
          'Third-party AI/API charges are not included; you pay that provider directly.',
        ],
        paragraphsAfter: [
          'Each line is a real limit, not a disclaimer. If your job needs one of those things, AutoReel is not the right tool.',
        ],
      },
      {
        h2: 'Which plan has which feature',
        table: {
          head: ['Feature', 'Edit', 'Creator', 'Full', 'Personal'],
          rows: [
            ['Download from 6 sources, cut highlights, remove logos, dub, add text', '✓', '✓', '✓', '✓'],
            ['Video from a topic, the three end-to-end flows, movie recap', '—', '✓', '✓', '✓'],
            ['Post to Shopee Video and Facebook/Reels', '—', '—', '✓', '✓'],
            ['Telegram Remote and the in-app AI assistant', '—', '—', '✓', '✓'],
            ['AI Operations: a campaign that finds, builds, posts and measures', '—', '—', '✓', '✓'],
            ['Several shops and Pages at once', '—', '—', '✓', '✓'],
            ['30 videos per batch', '—', '—', '✓', '✓'],
            ['One-off licence, nothing renews', '—', '—', '—', '✓'],
            ['Computers', '1', '1', '1', '1'],
          ],
        },
        paragraphsAfter: [
          'This table is only for choosing the right plan; the full entitlement list and prices are on the pricing page.',
        ],
      },
      {
        h2: 'What you use daily, and what you keep for later',
        paragraphs: [
          'Do not pick a plan by the length of a list. Look at what you do every day: fetch the source, cut, dub, subtitle, publish. That is what you are paying for.',
        ],
        bullets: [
          'Daily: download, highlight cutting, dubbing, subtitles, posting to Shopee/Facebook.',
          'In batches: Affiliate/Reup Flow, the queue, 30 videos per batch.',
          'When needed: logo removal, audio extraction, movie recap, text and logo templates.',
          'Rarely: switching the interface language, configuring the AI model.',
        ],
        paragraphsAfter: [
          'If you only use the first group, Edit is enough. If the second group is your main work, Creator. If you need publishing, Full.',
        ],
      },
      {
        h2: 'Features people tend to miss',
        bullets: [
          '**Channel links** — pull a YouTube channel’s video list as sources instead of copying links one by one.',
          '**The queue** — stopping halfway keeps finished work; running again resumes from the step that stopped.',
          '**On-machine voices** — no per-sentence charge; ElevenLabs is optional, not required.',
          '**Burned-in subtitles** — adjustable size and position, not a separate subtitle file.',
          '**Thirteen text and logo templates** — see the frame before choosing, instead of guessing.',
          '**Two interface languages** — switch in place, without reloading the page.',
        ],
        paragraphsAfter: [
          'These are the things a one-line “AI makes videos” pitch cannot sell, but they decide whether the app is usable every day.',
        ],
      },
      {
        h2: 'When not to buy',
        bullets: [
          'You need to build every frame by hand, with many effects: use an editor.',
          'You make one or two videos a month: free tools may be enough.',
          'You need to post directly to TikTok or YouTube: not supported yet.',
          'You do not want to pay a third-party AI/API: you still need a key for the writing step, even if the voice runs locally.',
        ],
        paragraphsAfter: [
          'If the answer is “no” to all four, AutoReel can save you a few hours every week.',
        ],
      },
    ],
    faq: [
      [
        'Can I use single screens without buying Full?',
        'Yes. Edit includes the basic processing screens; end-to-end flows and publishing need Creator or Full.',
      ],
      [
        'Is AutoReel a video editor?',
        'No. It is a bulk video production line; it does not replace a timeline editor for complex manual work.',
      ],
      [
        'Does it post to YouTube or TikTok?',
        'Not yet. Shopee Video and Facebook/Reels are the integrations today.',
      ],
      [
        'Will it run on 8GB of RAM?',
        'Yes, but keep the number of parallel jobs low and avoid long videos. 16GB is more comfortable.',
      ],
      [
        'Does it need a GPU?',
        'Not required. A GPU makes rendering faster, but the app runs on the CPU.',
      ],
    ],
  },
};

/**
 * What each pricing card opens into.
 *
 * The card answers "what do I get"; this answers "what can I actually do with
 * it, and why is that worth the money". Kept apart from `pricing.js` for the
 * same reason the price maths lives there: the card is a summary and this is
 * the argument, and a file where the two are interleaved is a file where one
 * of them gets shortened to fit.
 *
 * **Every claim here is a screen that exists.** The six download sources are
 * the six lines of the box's placeholder in `gui/ui_tab_download.py`; the
 * posting screens, the highlight review grid and the library are the screens
 * whose documentation pages name them. Nothing lists a capability the app
 * does not have, because a plan page is where a refund argument starts.
 *
 * `evidence[].image` is a key into `plan-evidence.js`, not a path: the same
 * screenshot exists in both languages and is imported so vite can hash it.
 */
export const planDetails = {
  vi: {
    edit: {
      headline: 'Đã có nguồn video — phần còn lại để máy làm',
      intro:
        'Edit là gói dựng và xử lý: tải video từ các nguồn lớn về máy, cắt lấy đoạn hay, xoá logo, lồng tiếng Việt, đóng dấu thương hiệu. Một app thay cho cả chồng công cụ rời.',
      canDo: [
        'Dán link YouTube, TikTok, Douyin, Bilibili, Hongguoduanju, iQiyi — chọn độ cao tối đa, nhận file về máy.',
        'Cắt highlight từ phim, podcast, livestream: app nghe hết rồi đề xuất những đoạn đáng lên.',
        'Xoá logo và phụ đề cứng trước khi đăng lại.',
        'Lồng tiếng Việt hoặc dịch sang ngôn ngữ khác, chọn giọng đọc và tốc độ.',
        'Chèn chữ, logo, khung theo template — xuất đúng khung dọc cho TikTok, Reels, Shorts.',
        'Dán link sản phẩm Shopee để lấy ảnh và thông tin sản phẩm.',
        'Giữ tư liệu trong kho và tìm lại mọi video đã làm trong thư viện.',
      ],
      benefits: [
        {
          title: 'Nguồn Trung về thẳng máy',
          body:
            'Douyin, Bilibili, Hongguoduanju, iQiyi — những nguồn thường phải tải thủ công hoặc qua trang trung gian, giờ chỉ là một dòng link.',
        },
        {
          title: 'Không phải mua thêm công cụ',
          body:
            'Tải, cắt, xoá logo, lồng tiếng, đóng dấu nằm trong cùng một app. Không cần bản Pro của phần mềm dựng, không cần tool xoá logo riêng.',
        },
        {
          title: 'Không giới hạn số video',
          body:
            'Gói tính theo tháng, không đếm đầu video. Trong thời gian thuê, làm bao nhiêu cũng được.',
        },
      ],
      evidence: [
        {
          image: 'tai-video',
          alt: 'Màn Tải video trong AutoReel',
          caption:
            'Tải video: dán link, chọn độ cao tối đa, nhận file — sáu nguồn trong cùng một ô.',
        },
        {
          image: 'cat-highlight',
          alt: 'Màn Cắt highlight trong AutoReel',
          caption:
            'Cắt highlight: mỗi đoạn ứng viên có khung xem trước, mốc thời gian và độ mạnh.',
        },
      ],
    },

    creator: {
      headline: 'Từ một ý tưởng — hoặc một link kênh — ra cả loạt video',
      intro:
        'Creator có mọi thứ của Edit, cộng thêm phần làm ra video từ đầu: từ một chủ đề, từ link Shopee, từ link kênh, hoặc từ video cũ cần làm lại.',
      canDo: [
        'Tất cả trong Edit.',
        'Nhập một chủ đề → nhận video ngắn có tiếng, có phụ đề.',
        'Video tự động: một chủ đề, máy viết kịch bản rồi dựng nhiều video.',
        'Affiliate Flow: từ link Shopee ra video giới thiệu sản phẩm.',
        'Reup / Repurpose: làm lại video có sẵn theo kênh của bạn.',
        'AI Review Flow: biến một video review dài thành các clip ngắn.',
        'Tóm tắt phim: một hoặc nhiều phim — hoặc cả series — thành video kể lại có lời bình tiếng Việt.',
        'Dán link kênh YouTube → lấy cả danh sách video để làm tiếp.',
        'Phụ đề tự động, giọng đọc tiếng Việt, hàng đợi chạy song song.',
      ],
      benefits: [
        {
          title: 'Không cần có sẵn video',
          body:
            'Chỉ một câu chủ đề cũng ra được video đầu tiên. Đây là khác biệt lớn nhất so với Edit.',
        },
        {
          title: 'Một link kênh là cả kho nguyên liệu',
          body:
            'Lấy danh sách video từ kênh rồi đưa thẳng vào các luồng làm lại, thay vì copy từng link một.',
        },
        {
          title: 'Chạy song song',
          body:
            'Hàng đợi xử lý nhiều video cùng lúc, không phải ngồi chờ từng cái xong mới tới cái sau.',
        },
      ],
      evidence: [
        {
          image: 'link-tu-kenh',
          alt: 'Màn lấy danh sách video từ link kênh',
          caption:
            'Một link kênh: app trả về danh sách video kèm thời lượng để chọn làm tiếp.',
        },
        {
          image: 'luong-reup',
          alt: 'Luồng reup trong AutoReel',
          caption:
            'Luồng reup: tải, xoá logo, lồng tiếng, đóng dấu — chạy thành một dây chuyền.',
        },
      ],
    },

    full: {
      headline: 'Làm xong là đăng — không rời khỏi app',
      intro:
        'Full có toàn bộ Creator, cộng phần đăng bài: Shopee Video kèm link sản phẩm, Facebook/Reels nhiều Page, hẹn giờ, và điều khiển từ Telegram.',
      canDo: [
        'Tất cả trong Creator.',
        'Đăng Shopee Video kèm link sản phẩm, chọn shop và tài khoản.',
        'Đăng Facebook/Reels lên nhiều Page cùng lúc, chú thích riêng cho từng nơi.',
        'Hẹn giờ đăng — app giữ nhịp, không cần ngồi canh.',
        'Điều khiển từ Telegram: xem tiến trình và ra lệnh từ điện thoại.',
        'Trợ lý AI trong app: hỏi cách làm, nhờ chạy việc.',
        'Nhiều tài khoản, nhiều shop cùng lúc; 30 video mỗi lô.',
      ],
      benefits: [
        {
          title: 'Bỏ khâu copy file ra ngoài',
          body:
            'Video dựng xong đi thẳng sang màn đăng, kèm chú thích và link sản phẩm — không tải file về rồi upload lại bằng tay.',
        },
        {
          title: 'Nhiều Page, một lần bấm',
          body:
            'Cùng một video đi nhiều Page, mỗi nơi một chú thích riêng.',
        },
        {
          title: 'Đăng đều, kể cả khi bạn bận',
          body:
            'Hẹn giờ và hàng đợi giữ nhịp đăng; bạn chỉ cần duyệt nội dung.',
        },
      ],
      evidence: [
        {
          image: 'dang-facebook',
          alt: 'Màn đăng Facebook trong AutoReel',
          caption:
            'Đăng Facebook: chọn nhiều Page, dán chú thích một lần, hẹn giờ cho cả loạt.',
        },
        {
          image: 'dang-shopee',
          alt: 'Màn đăng Shopee trong AutoReel',
          caption:
            'Đăng Shopee Video: chọn shop, kèm link sản phẩm, xếp hàng chờ đăng.',
        },
      ],
    },

    'full-2-may': {
      headline: 'Hai máy: một máy dựng, một máy đăng',
      intro:
        'Giống Full, nhưng cài được trên hai máy tính. Mỗi máy một hàng đợi riêng — máy khoẻ dựng video, máy còn lại lo đăng bài.',
      canDo: [
        'Tất cả trong Full.',
        'Cài trên 2 máy tính.',
        'Mỗi máy một hàng đợi riêng.',
        'Rẻ hơn mua hai gói Full.',
      ],
      benefits: [
        {
          title: 'Chia việc theo máy',
          body:
            'Dựng nặng ở máy khoẻ, đăng nhẹ ở máy còn lại — hai việc không tranh nhau CPU.',
        },
        {
          title: 'Hai người cùng làm',
          body: 'Mỗi người một máy, cùng một bản quyền.',
        },
        {
          title: 'Rẻ hơn hai Full',
          body: 'Tiết kiệm so với mua hai gói Full riêng lẻ.',
        },
      ],
      evidence: [
        {
          image: 'thu-vien-video',
          alt: 'Thư viện video trong AutoReel',
          caption:
            'Thư viện video: cả hai máy cùng thấy thành phẩm, kèm thư mục chứa file.',
        },
      ],
    },

    'full-3-thang': {
      headline: 'Ba tháng, trả một lần',
      intro:
        'Toàn bộ Full trong ba tháng, trả trước một lần và không tự động gia hạn.',
      canDo: [
        'Tất cả trong Full.',
        'Dùng đủ 3 tháng.',
        'Không tự động gia hạn.',
        '1 máy tính.',
      ],
      benefits: [
        {
          title: 'Chốt giá ba tháng',
          body: 'Không phải nhớ gia hạn, không sợ giá đổi giữa kỳ.',
        },
        {
          title: 'Rẻ hơn trả từng tháng',
          body: 'Số tiết kiệm được tính ngay trên thẻ, so với giá Full tháng.',
        },
        {
          title: 'Hết ba tháng thì quyết',
          body: 'Không bị trừ tiền tự động.',
        },
      ],
      evidence: [],
    },

    personal: {
      headline: 'Mua một lần, dùng mãi',
      intro:
        'Toàn bộ tính năng, không cắt bớt, không phí tháng. Dành cho affiliate và creator cá nhân làm việc trên một máy.',
      canDo: [
        'Toàn bộ tính năng của gói Full.',
        'Shopee + Facebook/Reels.',
        'Telegram Remote.',
        '1 máy tính, 1 tài khoản Shopee chạy cùng lúc.',
        'Nhiều Facebook Page.',
        '30 video mỗi lô.',
        '1 job chạy cùng lúc.',
      ],
      benefits: [
        {
          title: 'Không bao giờ gia hạn',
          body: 'Trả một lần, dùng vĩnh viễn. Không có tháng nào bị trừ tiền.',
        },
        {
          title: 'Hoàn vốn sau vài tháng',
          body: 'So với thuê Full theo tháng, số tháng hoàn vốn được tính ngay trên thẻ.',
        },
        {
          title: 'Toàn bộ tính năng',
          body: 'Không có gói nào cao hơn để phải nâng cấp.',
        },
      ],
      evidence: [
        {
          image: 'thu-vien-video',
          alt: 'Thư viện video trong AutoReel',
          caption:
            'Mọi video đã làm nằm trong thư viện, kèm đường dẫn thư mục trên máy bạn.',
        },
      ],
    },

    team: {
      headline: 'Cho nhóm content và shop nhiều tài khoản',
      intro:
        'Bản dành cho team: nhiều máy, nhiều tài khoản Shopee, quản lý chiến dịch và hỗ trợ ưu tiên. Đang mở đăng ký trước.',
      canDo: [
        'Tất cả trong Personal.',
        '3 máy tính.',
        '5 tài khoản Shopee.',
        'Nhiều Facebook Page.',
        'Các tài khoản chạy đồng thời.',
        'Quản lý chiến dịch và lịch đăng.',
        'Hỗ trợ ưu tiên.',
      ],
      benefits: [
        {
          title: 'Nhiều người, một hệ thống',
          body:
            'Ba máy và năm tài khoản Shopee chạy cùng lúc, mỗi người một việc.',
        },
        {
          title: 'Quản lý theo chiến dịch',
          body:
            'Gom video, tài khoản và lịch đăng theo từng đợt bán hàng thay vì theo từng file.',
        },
        {
          title: 'Đăng ký trước',
          body:
            'Gói chưa mở bán. Để lại liên hệ và nhận thông báo khi mở.',
        },
      ],
      evidence: [],
    },
  },

  en: {
    edit: {
      headline: 'You have the footage — let the machine do the rest',
      intro:
        'Edit is the cut-and-process plan: fetch video from the big sources, pull the good moments out, remove logos, dub into Vietnamese, add your mark. One app instead of a stack of separate tools.',
      canDo: [
        'Paste a YouTube, TikTok, Douyin, Bilibili, Hongguoduanju or iQiyi link — pick a maximum height and get the file.',
        'Cut highlights out of a film, podcast or stream: the app listens to all of it and suggests the moments worth posting.',
        'Remove logos and burned-in subtitles before reposting.',
        'Dub into Vietnamese or translate into other languages, with the voice and speed you choose.',
        'Add text, logos and frames from a template — in the vertical shape TikTok, Reels and Shorts want.',
        'Paste a Shopee product link to pull the images and the product details.',
        'Keep material in the asset library and find every finished video in the video library.',
      ],
      benefits: [
        {
          title: 'Chinese sources, straight to your machine',
          body:
            'Douyin, Bilibili, Hongguoduanju, iQiyi — the sources that usually mean manual downloads or a middleman site are one line of link here.',
        },
        {
          title: 'No extra tools to buy',
          body:
            'Download, cut, remove logos, dub and brand all live in the same app. No editor subscription on the side, no separate logo remover.',
        },
        {
          title: 'No cap on how many videos',
          body:
            'The plan is priced by the month, not by the video. Make as many as you like while it runs.',
        },
      ],
      evidence: [
        {
          image: 'tai-video',
          alt: 'The Download videos screen in AutoReel',
          caption:
            'Download: paste links, pick a maximum height, get the files — six sources in one box.',
        },
        {
          image: 'cat-highlight',
          alt: 'The Highlights screen in AutoReel',
          caption:
            'Highlights: every candidate has a preview frame, a time range and a strength score.',
        },
      ],
    },

    creator: {
      headline: 'From one idea — or one channel link — to a whole batch',
      intro:
        'Creator has everything in Edit, plus the part that makes the video in the first place: from a topic, from a Shopee link, from a channel, or from footage that needs reworking.',
      canDo: [
        'Everything in Edit.',
        'Type a topic and get a short video with voice and subtitles.',
        'Automatic videos: one topic, a written script, several videos.',
        'Affiliate Flow: from a Shopee link to a product video.',
        'Reup / Repurpose: rework existing footage for your own channel.',
        'AI Review Flow: turn one long review video into short clips.',
        'Movie recap: one film or several — or a whole series — retold with a Vietnamese narration.',
        'Paste a YouTube channel link and get the whole video list to work from.',
        'Automatic subtitles, Vietnamese voice, and a queue that runs in parallel.',
      ],
      benefits: [
        {
          title: 'You do not need footage first',
          body:
            'A single sentence of topic is enough for the first video. That is the largest difference from Edit.',
        },
        {
          title: 'One channel link is a whole shelf of material',
          body:
            'Take the video list from a channel and feed it straight into the rework flows instead of copying links one at a time.',
        },
        {
          title: 'Runs in parallel',
          body:
            'The queue works on several videos at once, so you are not waiting for one to finish before the next starts.',
        },
      ],
      evidence: [
        {
          image: 'link-tu-kenh',
          alt: 'The channel link screen in AutoReel',
          caption:
            'One channel link: the app returns the video list, with durations, to work from.',
        },
        {
          image: 'luong-reup',
          alt: 'The reup flow in AutoReel',
          caption:
            'The reup flow: fetch, remove logos, dub, brand — one pipeline.',
        },
      ],
    },

    full: {
      headline: 'Finished is published — without leaving the app',
      intro:
        'Full has everything in Creator, plus publishing: Shopee Video with the product link, Facebook/Reels across many Pages, scheduling, and control from Telegram.',
      canDo: [
        'Everything in Creator.',
        'Post Shopee Video with the product link, choosing the shop and account.',
        'Post Facebook/Reels to several Pages at once, with a caption for each.',
        'Schedule posts — the app keeps the rhythm while you are elsewhere.',
        'Control it from Telegram: watch progress and issue commands from your phone.',
        'Ask the built-in AI assistant how to do something, or to run it.',
        'Several accounts and shops at once; 30 videos per batch.',
      ],
      benefits: [
        {
          title: 'No copying files out',
          body:
            'A finished video goes straight to the posting screen with its caption and product link — no download-then-upload by hand.',
        },
        {
          title: 'Many Pages, one press',
          body: 'The same video goes to several Pages, each with its own caption.',
        },
        {
          title: 'Keeps posting when you are busy',
          body:
            'Scheduling and the queue hold the rhythm; you only approve the content.',
        },
      ],
      evidence: [
        {
          image: 'dang-facebook',
          alt: 'The Facebook posting screen in AutoReel',
          caption:
            'Facebook posting: choose several Pages, write the caption once, schedule the batch.',
        },
        {
          image: 'dang-shopee',
          alt: 'The Shopee posting screen in AutoReel',
          caption:
            'Shopee Video posting: choose the shop, attach the product link, queue it.',
        },
      ],
    },

    'full-2-may': {
      headline: 'Two machines: one renders, one publishes',
      intro:
        'Full, installable on two computers. Each machine gets its own queue — the fast one renders, the other publishes.',
      canDo: [
        'Everything in Full.',
        'Install on 2 computers.',
        'A separate queue per machine.',
        'Cheaper than two Full plans.',
      ],
      benefits: [
        {
          title: 'Split the work by machine',
          body:
            'Heavy rendering on the fast machine, light publishing on the other — they stop competing for the CPU.',
        },
        {
          title: 'Two people, one licence',
          body: 'Each person works on their own machine.',
        },
        {
          title: 'Cheaper than two Fulls',
          body: 'Less than buying two separate Full plans.',
        },
      ],
      evidence: [
        {
          image: 'thu-vien-video',
          alt: 'The video library in AutoReel',
          caption:
            'The video library: both machines see the finished videos, with the folder each one is in.',
        },
      ],
    },

    'full-3-thang': {
      headline: 'Three months, paid once',
      intro:
        'All of Full for three months, paid up front, with no automatic renewal.',
      canDo: [
        'Everything in Full.',
        'A full three months.',
        'No automatic renewal.',
        '1 computer.',
      ],
      benefits: [
        {
          title: 'Locks the price for three months',
          body: 'Nothing to remember, and no mid-term price change.',
        },
        {
          title: 'Less than paying monthly',
          body: 'The saving is computed on the card against the monthly Full price.',
        },
        {
          title: 'Decide when it ends',
          body: 'Nothing is charged automatically.',
        },
      ],
      evidence: [],
    },

    personal: {
      headline: 'Buy once, keep it',
      intro:
        'Every feature, nothing cut down, no monthly fee. For an affiliate or creator working on one machine.',
      canDo: [
        'Every feature in the Full plan.',
        'Shopee + Facebook/Reels.',
        'Telegram Remote.',
        '1 computer, 1 Shopee account running at a time.',
        'Many Facebook Pages.',
        '30 videos per batch.',
        '1 job at a time.',
      ],
      benefits: [
        {
          title: 'Never renews',
          body: 'Pay once and use it for good. No month ever charges you again.',
        },
        {
          title: 'Pays for itself in months',
          body:
            'Against renting Full monthly, the number of months is computed on the card.',
        },
        {
          title: 'The whole feature set',
          body: 'There is no higher tier to upgrade to later.',
        },
      ],
      evidence: [
        {
          image: 'thu-vien-video',
          alt: 'The video library in AutoReel',
          caption:
            'Every finished video sits in the library, with the folder it is in on your machine.',
        },
      ],
    },

    team: {
      headline: 'For content teams and multi-account shops',
      intro:
        'The team edition: several machines, several Shopee accounts, campaign management and priority support. Pre-registration is open.',
      canDo: [
        'Everything in Personal.',
        '3 computers.',
        '5 Shopee accounts.',
        'Many Facebook Pages.',
        'Accounts running at the same time.',
        'Campaign management and scheduling.',
        'Priority support.',
      ],
      benefits: [
        {
          title: 'Several people, one system',
          body:
            'Three machines and five Shopee accounts at once, each with its own job.',
        },
        {
          title: 'Managed by campaign',
          body:
            'Group videos, accounts and schedules by campaign instead of by file.',
        },
        {
          title: 'Register ahead',
          body:
            'The plan is not on sale yet. Leave a contact and hear when it opens.',
        },
      ],
      evidence: [],
    },
  },
};

/**
 * Blog post — "Tự động đăng bài khi nền tảng không mở API".
 *
 * Architecture level: why platforms keep this door shut, the two routes that
 * remain (a real device, a browser), what each costs, and when an official API
 * is the more durable choice. No protocol or internal detail about how the
 * publish layer drives a device.
 */
export default {
  slug: {
    vi: 'tu-dong-dang-bai-khi-nen-tang-khong-mo-api',
    en: 'posting-without-an-api',
  },
  title: {
    vi: 'Nền tảng không mở API thì phải đăng qua trình duyệt thật',
    en: 'When a platform has no API, you post through a real browser',
  },
  description: {
    vi: 'Nhiều nền tảng không mở API để đăng video. Bài này nói rõ hai đường đi khi không có API, cái giá của mỗi đường, và khi nào API là lựa chọn bền hơn.',
    en: 'Plenty of platforms never open an API for posting video. Here are the two routes that remain, what each one costs, and when an official API is the sturdier choice.',
  },
  date: '2026-10-10',
  minutes: { vi: 6, en: 6 },
  tag: {
    vi: 'Công nghệ',
    en: 'How it works',
  },
  lead: {
    vi: 'Muốn tự động đăng video, câu hỏi đầu tiên không phải dùng công cụ nào, mà nền tảng đó có cho phép hay không. Vì sao nhiều nơi đóng cửa, còn lại những đường nào, và mỗi đường có cái giá gì.',
    en: 'The first question about automated posting is not which tool to use, but whether the platform allows it at all. Why so many keep the door shut, which routes are left, and what each one costs.',
  },
  body: {
    vi: [
    {
      h2: 'Nền tảng đóng cửa vì mở ra là mất quyền kiểm soát, không phải vì thiếu kỹ thuật',
    },
    {
      p: 'Một cái API mở cho bên ngoài đăng bài là một quyền lực được trao đi. Nền tảng mất quyền kiểm soát ai đăng, đăng bao nhiêu, đăng cái gì, và mất luôn phần trải nghiệm mà họ muốn giữ trong ứng dụng của mình. Với nội dung video bán hàng — thứ dễ bị lạm dụng nhất — việc đóng cửa là lựa chọn có lý của họ, không phải một sự cố kỹ thuật.',
    },
    {
      ul: [
        'Chống spam và nội dung trùng lặp: mở cửa là mở đường cho đăng hàng loạt.',
        'Giữ người dùng trong ứng dụng: mỗi bài đăng là một lượt người dùng mở app.',
        'Chi phí kiểm duyệt: mở cho bên ngoài nghĩa là phải kiểm soát thêm một lượng lớn bài.',
        'Mô hình kinh doanh: đôi khi cửa đóng lại đơn giản vì mở ra không mang lại gì cho nền tảng.',
      ],
    },
    {
      h2: 'Không có API thì còn đúng hai đường: qua thiết bị thật, hoặc qua trình duyệt',
    },
    {
      p: 'Đường thứ nhất là đi qua thiết bị thật: dùng một chiếc điện thoại có ứng dụng của nền tảng, đăng nhập bằng chính tài khoản của bạn, và thực hiện đúng các bước mà một người dùng vẫn làm khi đăng bài. Đường thứ hai là đi qua trình duyệt: mở trang đăng bài, đăng nhập, và làm tương tự.\n\nCả hai đường đều có một điểm chung: bạn đi bằng cửa trước, bằng tài khoản của bạn, với quyền của bạn. Đó không phải là lách. Nó chỉ là làm thay việc bạn vẫn làm, nhưng tự động và đúng nhịp.',
    },
    {
      h2: 'Đi nhờ cửa trước thì đường đó chậm, dễ vỡ, và cần thiết bị',
    },
    {
      ul: [
        'Cần thiết bị thật: nền tảng di động thì phải có một chiếc điện thoại kết nối với máy tính và sẵn sàng trong lúc đăng.',
        'Dễ vỡ khi ứng dụng đổi giao diện: một lần cập nhật của nền tảng có thể làm hỏng đường đăng, và phải sửa theo.',
        'Phải giãn cách: đăng dồn là hành vi bị soi, nên đường này buộc phải chậm và rải ra.',
        'Khó chạy trên máy chủ thuê: máy chủ không có thiết bị thật để cắm vào, và một môi trường lạ cũng dễ bị nền tảng nhận ra.',
        'Khó mở rộng số tài khoản: mỗi tài khoản cần một ngữ cảnh riêng, không thể nhân bản bằng cách chạy thêm một bản sao.',
        'Chậm hơn API: các bước diễn ra theo nhịp của ứng dụng, không theo nhịp của máy bạn.',
      ],
    },
    {
      h2: 'Thứ bị phạt là hành vi đăng, không phải công cụ đăng',
    },
    {
      p: 'Đăng tự động không phải thứ bị phạt; hành vi đăng mới là thứ bị đánh giá. Một tài khoản đẩy hai chục video trong một buổi sáng trông giống spam dù người đăng là bạn hay phần mềm. Vì vậy giãn cách không phải một tính năng phụ — nó là điều kiện để đường đi nhờ còn dùng được lâu dài.\n\nĐăng tự động mà rải đều và nội dung khác nhau thì an toàn hơn nhiều so với đăng tay ồ ạt.',
    },
    {
      h2: 'Bốn trường hợp API bền hơn đường đi nhờ',
    },
    {
      ul: [
        'Khi nền tảng có API chính thức cho đúng việc bạn cần, chứ không phải API cho việc khác.',
        'Khi bạn cần chạy trên máy chủ, nơi không có thiết bị nào để cắm vào.',
        'Khi số lượng lớn và cần độ ổn định: API ít bị ảnh hưởng bởi những thay đổi giao diện nhỏ.',
        'Khi cần quản nhiều tài khoản cùng lúc với phân quyền rõ ràng.',
      ],
    },
    {
      p: 'Nhưng API cũng không phải tự do: nó có hạn mức, có quyền được cấp, có xét duyệt ứng dụng, và có thể bị thu hồi. API bền hơn ở chỗ nó là một hợp đồng — đổi lại, bạn phải tuân theo điều khoản của hợp đồng đó.',
    },
    {
      h2: 'Bốn câu hỏi nên hỏi trước khi mua một công cụ đăng bài',
    },
    {
      ul: [
        'Hỏi rõ công cụ đăng qua đường nào, cho từng nền tảng.',
        'Hỏi cái gì cần có trên máy bạn: có cần điện thoại không, có phải mở máy suốt không.',
        'Hỏi khi nền tảng đổi thì ai sửa, và bản cập nhật có mất phí không.',
        'Đừng tin câu đăng được mọi nền tảng. Câu đó thường có nghĩa là chưa ai thử kỹ.',
      ],
    },
    {
      note: 'Nói thẳng giới hạn: đường đi nhờ không phù hợp nếu bạn muốn thuê máy chủ chạy hai mươi bốn trên bảy mà không cần thiết bị nào, và cũng không phù hợp nếu bạn cần đăng lên nơi chỉ cấp quyền cho đối tác doanh nghiệp. Còn nếu bạn muốn một công cụ đăng được mọi nền tảng mà không cần biết nó đi đường nào, bạn đang mua một lời hứa chứ không mua một cách làm.',
    },
    {
      p: 'Điện thoại hay trình duyệt, cả hai đều là đường đi nhờ: bạn vào bằng cửa trước, bằng tài khoản của bạn, với quyền của bạn. Nơi nào nền tảng mở API thì đi thẳng, nơi nào không mở thì đi nhờ — và cái giá của việc đi nhờ là đường đó có thể đóng lại bất cứ lúc nào.',
    },
    ],
    en: [
    {
      h2: 'Platforms keep the door shut to hold on to control, not because the technology is missing',
    },
    {
      p: 'An API that lets outside software post on your behalf hands over power. The platform loses control of who posts, how much, and what — and loses the experience it wants to keep inside its own app. For sales video, the most abused kind of content there is, closing the door is a rational choice rather than an engineering failure.',
    },
    {
      ul: [
        'Against spam and duplicates: an open door is an open road for bulk posting.',
        'Keeping people inside the app: every post is a user opening the app.',
        'Moderation cost: opening up means handling a much larger volume of posts.',
        'Business model: sometimes the door is shut simply because opening it earns the platform nothing.',
      ],
    },
    {
      h2: 'With no API there are exactly two routes: a real device, or a browser',
    },
    {
      p: 'The first route runs through a real device: a phone with the platform’s app on it, signed in as you, doing the same steps a person does when they post. The second goes through a browser: open the posting page, sign in, and do the same thing there.\n\nBoth routes share one property: you go through the front door, with your account, using your permissions. This is not a workaround. It is the same job you would do by hand, done automatically and at a steady pace.',
    },
    {
      h2: 'Borrowing the front door means a route that is slow, fragile and needs hardware',
    },
    {
      ul: [
        'It needs a real device: a mobile-first platform means a phone connected to your computer and available while posting.',
        'It breaks when the app changes its screens: one platform update can break the route, and it has to be fixed to match.',
        'It has to be spaced out: bursts of posting are watched for, so this route is forced to be slow and spread out.',
        'It is hard to run on a rented server: a server has no real device to plug in, and an unusual environment is easier for the platform to spot.',
        'It is hard to scale across accounts: each account needs its own context, and cannot be duplicated by running another copy.',
        'It is slower than an API: the steps move at the app’s pace, not at your machine’s.',
      ],
    },
    {
      h2: 'What gets penalised is the posting behaviour, not the tool doing the posting',
    },
    {
      p: 'Automated posting is not what gets punished; the pattern of posting is what gets judged. An account pushing twenty videos in one morning looks like spam whether a person or a program sent them. Spacing is therefore not a nice extra — it is the condition that lets this route keep working for years.\n\nAutomated posting, spread evenly, with content that differs from video to video, is far safer than posting by hand in bulk.',
    },
    {
      h2: 'Four cases where an official API holds up better',
    },
    {
      ul: [
        'When the platform offers an official API for exactly what you need, rather than one for something else.',
        'When you need to run on a server, where there is no device to plug in.',
        'When volume is high and stability matters: an API is less disturbed by small interface changes.',
        'When you need to manage many accounts at once with clear permissions.',
      ],
    },
    {
      p: 'An API is not freedom either: it comes with rate limits, granted permissions, app review, and the possibility of being revoked. Its advantage is that it is a contract — and the price of that is living by the contract’s terms.',
    },
    {
      h2: 'Four questions worth asking before you buy a posting tool',
    },
    {
      ul: [
        'Ask which route the tool uses for each platform, specifically.',
        'Ask what has to be present on your machine: a phone, or a computer that stays on all day.',
        'Ask who fixes it when a platform changes, and whether the update costs you anything.',
        'Do not believe “posts to every platform”. That line usually means nobody tested it properly.',
      ],
    },
    {
      note: 'The limits, stated plainly: this route does not suit you if you want to rent a server to run around the clock with no device attached, and it does not suit you if you need to post somewhere that only grants access to business partners. And if you want a tool that posts everywhere without you having to know which route it takes, you are buying a promise rather than a method.',
    },
    {
      p: 'Phone or browser, both are borrowed routes: you go through the front door, with your account, under your permissions. Where a platform opens an API you walk straight through; where it does not, you borrow the door — and the price of borrowing is that the door can close at any time.',
    },
    ],
  },
  faq: {
    vi: [
    {
      q: 'Đăng tự động có vi phạm điều khoản của nền tảng không?',
      a: 'Bạn đang dùng chính tài khoản của mình để làm việc mình vẫn làm. Vấn đề nằm ở hành vi: đăng dồn, nội dung trùng lặp, nhiều tài khoản chồng chéo. Giãn cách hợp lý và nội dung khác nhau thì an toàn hơn đăng tay ồ ạt.',
    },
    {
      q: 'Vì sao không thuê máy chủ chạy cho nhàn?',
      a: 'Vì đường đăng qua thiết bị thật cần thiết bị thật, mà máy chủ thuê thì không có. Một số nền tảng còn nhận ra môi trường lạ. Nếu bạn cần chạy mà không cần thiết bị, hãy tìm nền tảng có API chính thức.',
    },
    {
      q: 'Khi nền tảng đổi giao diện thì sao?',
      a: 'Đường đăng có thể hỏng và phải sửa theo. Đây là cái giá của việc đi nhờ cửa trước, và là lý do nên chọn công cụ có cập nhật đều và nói rõ chính sách cập nhật của họ.',
    },
    {
      q: 'API có phải lúc nào cũng tốt hơn không?',
      a: 'Không. API bền hơn khi nền tảng có API chính thức cho đúng việc bạn cần, nhưng nó đi kèm hạn mức, quyền được cấp và xét duyệt ứng dụng. Với nền tảng không mở API, đường qua thiết bị thật là cách duy nhất còn lại.',
    },
    {
      q: 'AutoReel đăng bài qua đường nào?',
      a: 'Với AutoReel hiện tại, Shopee Video đi qua một điện thoại Android kết nối với máy tính, còn Facebook đăng qua Page nên không cần thiết bị. Cả hai đều xuất phát từ máy bạn. Muốn hỏi kỹ đường đăng nào hợp với cách làm của mình, nhắn Zalo hoặc WhatsApp 0326012999, hoặc xem thêm ở autoreelvn.com.',
    },
    ],
    en: [
    {
      q: 'Does automated posting break the platform’s terms?',
      a: 'You are using your own account to do a job you already do. What gets judged is behaviour: bursts of posting, duplicated content, overlapping accounts. Sensible spacing and content that differs is safer than posting by hand in bulk.',
    },
    {
      q: 'Why not just rent a server and leave it running?',
      a: 'Because the device route needs a device, and a rented server has none. Some platforms also notice an unfamiliar environment. If you need to run without hardware, look for a platform with an official API.',
    },
    {
      q: 'What happens when a platform changes its screens?',
      a: 'The posting route can break and has to be fixed to match. That is the price of borrowing the front door, and the reason to pick a tool that updates regularly and says clearly how updates work.',
    },
    {
      q: 'Is an API always the better choice?',
      a: 'No. An API is sturdier when the platform offers an official one for exactly your job, but it comes with limits, granted permissions and app review. For a platform that never opens one, the real-device route is the only road left.',
    },
    {
      q: 'Which route does AutoReel use to post?',
      a: 'As it stands, Shopee Video goes through an Android phone connected to your computer, while Facebook posts through a Page and needs no device. Both start from your machine. To talk through which route fits how you work, message Zalo or WhatsApp 0326012999, or look at autoreelvn.com.',
    },
    ],
  },
};

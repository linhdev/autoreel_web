/**
 * Blog post — "Một video, nhiều cửa ra".
 *
 * Architecture level: why the render step and the publish step are separate
 * layers, what each destination constrains, and the honest cost of keeping
 * every outlet up to date.
 */
export default {
  slug: {
    vi: 'mot-loi-nhieu-cua-ra',
    en: 'one-input-many-outputs',
  },
  title: {
    vi: 'Một video dựng một lần, đăng được nhiều nơi',
    en: 'One video, built once, posted through several doors',
  },
  description: {
    vi: 'Mỗi nền tảng có khung hình, độ dài, chú thích và cách đăng riêng. Tách khâu dựng khỏi khâu đăng để một video đi được nhiều cửa mà không phải làm lại.',
    en: 'Every platform has its own frame, length, caption and posting route. Split the build from the post and one video reaches several outlets without a rebuild.',
  },
  date: '2026-10-10',
  minutes: { vi: 5, en: 5 },
  tag: {
    vi: 'Công nghệ',
    en: 'How it works',
  },
  lead: {
    vi: 'Cùng một video, đăng chỗ này ổn mà chỗ kia không — vì mỗi cửa ra có bộ ràng buộc riêng. Bài này nói rõ mỗi cửa đòi gì, và cái giá phải trả khi bạn mở thêm nơi đăng.',
    en: 'The same video works in one place and fails in another, because every outlet has its own rules. Here is what each one asks for, and what it costs to open another.',
  },
  body: {
    vi: [
    {
      h2: 'Cùng một video, chỗ này nhận chỗ kia từ chối, và lý do không nằm ở video',
    },
    {
      p: 'Bạn dựng một video tốt, đăng lên chỗ này ổn, đăng lên chỗ kia không. Không phải vì video dở, mà vì mỗi nền tảng có bộ ràng buộc riêng: khung hình, độ dài, cách viết chú thích, cách gắn sản phẩm, và cả cách bài được đẩy lên.\n\nĐây là chỗ người bán mất thời gian nhất, vì ai cũng coi đó là việc nhỏ. Nó không nhỏ — nó là một tầng riêng của hệ thống.',
    },
    {
      h2: 'Video là tài sản, cửa ra chỉ là phần dịch tài sản đó',
    },
    {
      p: 'Cách xử lý gọn nhất là xem video thành phẩm và cửa ra là hai thứ khác nhau. Video là tài sản chung: một file hoàn chỉnh, đúng nội dung, đúng bộ nhận diện. Cửa ra là phần dịch tài sản đó sang yêu cầu của từng nơi — đúng khung, đúng độ dài, chú thích riêng, tài khoản riêng.\n\nNếu nhét luật của nền tảng vào khâu dựng, mỗi lần nền tảng đổi — đổi tỉ lệ, đổi độ dài, đổi cách gắn sản phẩm — bạn phải dựng lại mọi video đã làm. Còn khi đã tách, bạn chỉ sửa phần cửa ra, và toàn bộ video cũ vẫn dùng được.',
    },
    {
      ul: [
        'Một video dựng một lần, dùng cho nhiều nơi.',
        'Luật nền tảng đổi thì sửa một chỗ, không đụng tới video gốc.',
        'Cửa ra hỏng không làm hỏng thành phẩm — file vẫn còn nguyên trên máy bạn.',
        'Thêm một cửa ra mới chỉ là thêm một phần nhỏ, không phải làm lại cả dây chuyền.',
        'Bạn xem được cái gì đã đăng ở đâu, thay vì phải nhớ trong đầu.',
      ],
    },
    {
      h2: 'Mỗi cửa ra có bộ luật riêng, và bộ luật đó không do bạn viết',
    },
    {
      ul: [
        'Khung hình và độ dài: có nơi chỉ hợp khung dọc, có nơi nhận ngang; mỗi nơi có độ dài hợp lý riêng cho nội dung bán hàng.',
        'Chú thích và hashtag: mỗi nơi đọc chú thích theo một cách, nên chú thích phải viết riêng chứ không dán y hệt.',
        'Gắn sản phẩm: nơi nào bán hàng được thì phải nối đúng sản phẩm vào đúng video.',
        'Tài khoản: đăng qua trang của shop khác với đăng qua tài khoản cá nhân.',
        'Thiết bị: nền tảng di động thì bắt buộc có một thiết bị thật kết nối với máy tính, còn nơi đăng qua trang quản lý thì không cần.',
        'Giãn cách: mỗi nơi chịu được một nhịp đăng khác nhau, và vượt nhịp là tự làm khó mình.',
      ],
    },
    {
      h2: 'Đổi nền tảng không nên là lý do để làm lại video',
    },
    {
      p: 'Làm lại một video không chỉ là thời gian dựng. Nó còn là công chọn lại hình, viết lại lời, nghe lại giọng, và bỏ đi một bản gốc. Nhân lên vài ba chục video, bạn sẽ thấy chi phí thật của việc trộn hai khâu vào nhau.\n\nKhi đã tách, cùng một file gốc cho ra được nhiều bản: bản dọc cho nơi xem trên điện thoại, bản dài cho nơi người xem chịu ngồi lâu, mỗi bản mang một chú thích khác nhau. Bạn không làm lại video, bạn chỉ xuất nó qua một cửa khác.',
    },
    {
      h2: 'Tách ra thì phải chăm nhiều chỗ hơn, và đó là cái giá thật',
    },
    {
      ul: [
        'Phải theo dõi luật của từng nơi, và chấp nhận rằng không có cửa ra nào làm một lần là xong.',
        'Chú thích phải viết khác nhau cho từng nơi, nên phần chữ không dùng chung hoàn toàn được.',
        'Cửa ra nào đi qua thiết bị thật thì dễ vỡ khi ứng dụng đổi giao diện, và lúc nào cũng cần thiết bị đó sẵn sàng.',
        'Phải bỏ ý nghĩ đăng mọi nơi một nội dung y hệt — vừa dễ bị coi là trùng lặp, vừa không hiệu quả.',
      ],
    },
    {
      note: 'Nếu bạn chỉ định đăng một nơi duy nhất và không có kế hoạch mở thêm, phần tách này là công thừa — bạn không phải trả gì cho nó, nhưng cũng đừng chọn công cụ chỉ vì con số nền tảng. Ngược lại, nếu bạn đang đăng từ hai nơi trở lên, hoặc sẽ mở thêm trong vài tháng tới, tách từ đầu rẻ hơn nhiều so với chắp vá về sau.',
    },
    {
      p: 'Cách kiểm tra nhanh: mở lại lịch sử đăng của hai tuần vừa rồi và đếm xem bạn thật sự có bài mới ở mấy nơi. Đó là số cửa ra bạn đang chăm, không phải số cửa ra bạn định chăm. Con số thứ hai thường lớn hơn con số thứ nhất, và khoảng cách giữa hai con số đó chính là chỗ bạn đang bỏ dở.',
    },
    ],
    en: [
    {
      h2: 'The same video works here and gets refused there, and the video is not the problem',
    },
    {
      p: 'You build a good video, post it in one place and it works, post it in another and it does not. Not because the video is weak, but because every platform carries its own set of constraints: frame, length, how the caption is read, how a product gets attached, and even how the post is distributed.\n\nThis is where sellers lose the most time, because everyone treats it as a small chore. It is not small — it is a layer of the system in its own right.',
    },
    {
      h2: 'The video is the asset; an outlet is just the part that translates it',
    },
    {
      p: 'The tidy way to handle this is to treat the finished video and the outlet as two different things. The video is the shared asset: one complete file, right content, right branding. The outlet is the part that translates that asset into one place’s requirements — right frame, right length, its own caption, its own account.\n\nPush platform rules into the build step and every platform change — a new aspect ratio, a new length, a new way to attach a product — forces you to rebuild videos you already made. Split them and you only touch the outlet layer, while every old video still works.',
    },
    {
      ul: [
        'Build a video once, use it in several places.',
        'When platform rules change, one place in the system changes and the source video is untouched.',
        'A broken outlet does not damage the finished file — it is still sitting on your machine.',
        'Adding a new outlet is a small piece of work, not a rebuild of the whole line.',
        'You can see what has been posted where, instead of keeping it in your head.',
      ],
    },
    {
      h2: 'Every outlet has its own rulebook, and you do not get to write it',
    },
    {
      ul: [
        'Frame and length: some places only suit vertical, some accept horizontal, and each has its own sensible length for sales content.',
        'Caption and hashtags: each place reads a caption its own way, so the caption has to be written per place rather than copied across.',
        'Product attachment: wherever selling is supported, the right product has to be connected to the right video.',
        'Account: posting through a shop page is not the same as posting through a personal account.',
        'Device: a mobile-first platform requires a real device connected to your computer; a place you post to through a management page does not.',
        'Spacing: each place tolerates a different posting rhythm, and going past it only makes your own life harder.',
      ],
    },
    {
      h2: 'Changing platform should never mean rebuilding the video',
    },
    {
      p: 'Rebuilding a video is not only the time spent building. It is choosing the footage again, rewriting the lines, listening to the voice again, and throwing away a master. Multiply that by twenty or thirty videos and the real cost of mixing the two steps together becomes obvious.\n\nSplit them and one master file yields several versions: a vertical cut for places watched on a phone, a longer cut for audiences willing to sit, each one carrying a different caption. You are not remaking the video, you are exporting it through another door.',
    },
    {
      h2: 'Splitting means tending more places, and that is the real cost',
    },
    {
      ul: [
        'You have to follow the rules of every outlet, and accept that none of them is a one-time setup.',
        'Captions have to be written separately for each place, so the text never becomes fully shared work.',
        'Any outlet that runs through a real device breaks easily when the app changes its screens, and that device has to stay available.',
        'You have to drop the idea of posting identical content everywhere — it reads as duplication and it does not perform.',
      ],
    },
    {
      note: 'If you only ever post in one place and have no plan to open another, this split is wasted work — it costs you nothing, but do not pick a tool for its number of platforms either. On the other hand, if you already post in two places or more, or will open another within a few months, splitting from the start is far cheaper than patching it in later.',
    },
    {
      p: 'A quick way to check: open your posting history for the last two weeks and count how many places actually got a new post. That is the number of outlets you are tending, not the number you meant to tend. The second number is usually the larger one, and the gap between them is exactly what you are leaving half-finished.',
    },
    ],
  },
  faq: {
    vi: [
    {
      q: 'Một video có đăng được cho cả Shopee lẫn Facebook không?',
      a: 'Được, nhưng không nên đăng y hệt. Cùng một file gốc, mỗi cửa ra nhận một bản với khung hình, độ dài và chú thích phù hợp với nơi đó.',
    },
    {
      q: 'Đổi nền tảng có phải dựng lại video không?',
      a: 'Không, nếu hệ thống tách khâu dựng khỏi khâu đăng. Bạn xuất lại từ file gốc theo yêu cầu của cửa mới, thay vì làm lại từ đầu.',
    },
    {
      q: 'Vì sao đăng Shopee cần điện thoại mà Facebook thì không?',
      a: 'Vì Shopee Video là nền tảng di động, nên đường đăng phải đi qua một chiếc điện thoại Android kết nối với máy tính. Facebook đăng qua Page nên không cần thiết bị.',
    },
    {
      q: 'Có nên đăng cùng lúc lên thật nhiều nền tảng?',
      a: 'Chỉ nên mở những cửa ra bạn thật sự chăm được. Mỗi cửa có nhịp đăng và cách viết chú thích riêng; mở nhiều mà bỏ bê thì không nơi nào lên.',
    },
    {
      q: 'AutoReel đang đăng được lên những nền tảng nào?',
      a: 'Hai cửa ra: Shopee Video và Facebook/Reels. Shopee Video cần một điện thoại Android kết nối với máy tính, còn Facebook đăng qua Page nên không cần điện thoại. TikTok chưa nằm trong danh sách. Cả hai đều chạy từ máy bạn. Muốn hỏi cách chạy nhiều cửa ra cùng lúc, nhắn Zalo hoặc WhatsApp 0326012999.',
    },
    ],
    en: [
    {
      q: 'Can one video go to both Shopee and Facebook?',
      a: 'Yes, but not identically. From the same master file, each outlet should get a version with the frame, the length and the caption that suit that place.',
    },
    {
      q: 'Does changing platform mean rebuilding the video?',
      a: 'No, as long as the build step and the posting step are separate. You export again from the master file to fit the new outlet, instead of starting over.',
    },
    {
      q: 'Why does posting to Shopee need a phone when Facebook does not?',
      a: 'Because Shopee Video is a mobile platform, so the posting route has to go through an Android phone connected to your computer. Facebook posts through a Page, which needs no device.',
    },
    {
      q: 'Should I post to as many platforms at once as I can?',
      a: 'Open only the outlets you will genuinely keep up. Each has its own rhythm and its own way of writing a caption; open many and neglect them and none of them grows.',
    },
    {
      q: 'Which platforms can AutoReel post to right now?',
      a: 'Two outlets: Shopee Video and Facebook/Reels. Shopee Video needs an Android phone connected to your computer; Facebook posts through a Page and needs no phone. TikTok is not on the list. Both run from your machine. To ask about running several outlets at once, message Zalo or WhatsApp 0326012999.',
    },
    ],
  },
};

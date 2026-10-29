/**
 * Blog post — reading post numbers.
 *
 * The measurement article: the five checkpoints, the latest-checkpoint rule,
 * why the first hour is noise, what "Refresh numbers" does, and the
 * read_insights permission. No benchmarks and no promised view counts.
 */
export default {
  slug: {
    vi: 'doc-so-lieu-sau-khi-dang',
    en: 'reading-post-numbers',
  },
  title: {
    vi: 'Đọc số sau khi đăng: năm mốc và một luật so sánh',
    en: 'Reading post numbers: five checkpoints, one rule',
  },
  description: {
    vi: 'Số ở giờ thứ nhất chưa nói được gì. Năm mốc đo, vì sao bảng chỉ hiện mốc mới nhất, nút Cập nhật số, và quyền read_insights cần có.',
    en: 'The one-hour number tells you almost nothing. Five checkpoints, why the table shows only the latest, what Refresh numbers does, and the read_insights permission.',
  },
  date: '2026-10-29',
  minutes: { vi: 7, en: 7 },
  tag: {
    vi: 'Hướng dẫn',
    en: 'How-to',
  },
  lead: {
    vi: 'Một video vừa đăng được vài chục lượt xem, và bạn muốn biết nó có tốt không. Câu trả lời trung thực là: chưa biết. Bài này nói nên đọc số ở mốc nào, so thế nào cho đúng, và khi nào một con số chỉ là nhiễu.',
    en: 'A video posted an hour ago has a few dozen views, and you want to know whether it is any good. The honest answer is that you cannot tell yet. This is which checkpoint to read, how to compare fairly, and when a number is just noise.',
  },
  body: {
    vi: [
      { h2: 'Năm mốc, và mốc đầu tiên là mốc dễ đọc sai nhất' },
      {
        p: 'Sau khi đăng, app đọc số của bài viết ở năm mốc tính từ lúc đăng. Mỗi mốc trả lời một câu khác nhau.',
      },
      {
        ul: [
          '1 giờ — bài có được phân phối không. Số còn quá nhỏ để kết luận.',
          '6 giờ — hướng đi ban đầu, vẫn còn nhiễu.',
          '24 giờ — mốc đầu tiên đủ ổn định để so giữa các video.',
          '72 giờ — đường cong đã rõ; phần lớn video đã nhận xong lượt xem chính.',
          '168 giờ — bức tranh một tuần, dùng để chốt bài học.',
        ],
      },
      {
        p: 'Năm mốc này không phải năm lần bạn phải mở app. Chúng chạy theo lịch; bạn chỉ cần biết mốc nào đáng đọc.',
      },
      { h2: 'Bảng chỉ hiện mốc mới nhất, và đó là chủ ý' },
      {
        p: 'Mỗi video trong bảng kết quả hiện đúng một dòng, với số của mốc mới nhất. Không có năm cột để bạn tự chọn — vì chọn sai cột là cách nhanh nhất để kết luận sai.',
      },
      {
        p: 'So một video mới đăng một giờ với một video đã chạy bảy ngày là so thời gian, không phải so nội dung. Video thứ hai luôn thắng, kể cả khi nó tệ hơn.',
      },
      {
        p: 'Muốn so công bằng, đợi cả hai qua cùng một mốc. Nếu video cũ đã ở mốc 168 giờ còn video mới ở mốc 24 giờ, hãy đọc số của video cũ ở mốc 24 giờ nếu bạn còn lưu, hoặc đợi video mới đủ 168 giờ. Nghe chậm, nhưng đó là cách duy nhất để phép so có nghĩa.',
      },
      { h2: 'Vì sao một giờ chưa nói được gì' },
      {
        p: 'Trong giờ đầu, bài thường mới được phân phối cho một nhóm nhỏ. Vài chục lượt xem là mẫu quá nhỏ: một người quen chia sẻ cũng đủ làm con số nhảy gấp đôi, và một lần chia sẻ không nói gì về nội dung.',
      },
      {
        p: 'Số ở mốc 1 giờ có một việc dùng được: phát hiện bài không được phân phối chút nào. Nếu sau một giờ vẫn không có lượt xem nào, kiểm lại bài đăng, quyền của Page và nội dung. Đừng dùng mốc này để quyết định video hay hay dở.',
      },
      {
        note: 'Đọc số ở giờ thứ nhất rồi sửa nội dung là phản ứng với tiếng ồn. Bạn sẽ đổi một thứ đang tốt, và lần sau không biết vì sao nó tốt.',
      },
      { h2: 'Nút Cập nhật số làm gì' },
      {
        p: 'Nút này đọc lại số ngay, không đợi mốc kế tiếp. Nó hữu ích khi bạn vừa thấy bài bắt đầu chạy và muốn con số hiện tại, hoặc khi bạn vừa kết nối lại Page.',
      },
      {
        p: 'Nó không đổi lịch đo và không tạo ra mốc mới. Bấm liên tục trong mười phút chỉ cho bạn thấy nhiễu, không phải xu hướng.',
      },
      { h2: 'Số lấy từ đâu, và khi nào nó trống' },
      {
        p: 'Số lấy từ Facebook Insights, qua Page token có quyền read_insights. App xin quyền này khi bạn kết nối Page; nếu quyền bị thu hồi, app có nút kết nối lại.',
      },
      {
        p: 'Thiếu quyền thì đăng vẫn chạy, chỉ phần đo là trống. Đó là lựa chọn có chủ ý: không đo được không nên chặn việc đăng, nhưng bạn cần biết mình đang mất phần nào.',
      },
      {
        p: 'Quyền này chỉ đọc số của Page bạn quản lý. Nó không cho app xem Page của người khác, và không thay đổi quyền đăng bài.',
      },
      { h2: 'Đọc số để ra quyết định' },
      {
        p: 'Bốn cách đọc dưới đây dùng được với mọi video, không cần bảng riêng.',
      },
      {
        ul: [
          'So cùng mốc: 24 giờ với 24 giờ, 72 giờ với 72 giờ.',
          'Tỉ lệ xem hết: thời gian xem trung bình chia cho độ dài video. Thấp nghĩa là đoạn mở đầu không giữ được người xem.',
          'Tương tác trên mỗi lượt xem: so giữa các video, đừng so con số tuyệt đối.',
          'Follow trên 1.000 lượt xem: video có mang người mới về Page hay chỉ được xem rồi thôi.',
        ],
      },
      {
        p: 'Một video không phải dữ liệu; nó là một quan sát. Ba video cùng điều kiện mới là một mẫu đủ để bạn đổi cách làm.',
      },
      { h2: 'Đổi gì khi số nói điều gì' },
      {
        p: 'Nếu tỉ lệ xem hết thấp ở phần lớn video, vấn đề nằm ở phần mở đầu: câu đầu, hình đầu, nhịp đầu. Nếu lượt xem thấp nhưng tỉ lệ xem hết cao, bài không được phân phối hoặc không khớp người theo dõi Page. Nếu follow thấp, nội dung đang giải trí cho người xem chứ không cho họ lý do ở lại.',
      },
      {
        p: 'Đổi một thứ mỗi lần. Đổi phần mở đầu và đổi giờ đăng cùng lúc thì kết quả tuần sau không nói được cái nào có tác dụng.',
      },
      { h2: 'Đừng đo nếu không định làm gì với con số' },
      {
        p: 'Nếu bạn biết mình sẽ không đổi gì dù số thế nào, đừng mở bảng mỗi ngày. Đo mà không dẫn tới quyết định nào chỉ làm bạn lo thêm, và làm bạn sửa những thứ đang ổn.',
      },
    ],
    en: [
      { h2: 'Five checkpoints, and the first one is the easiest to misread' },
      {
        p: 'After posting, the app reads the post’s numbers at five checkpoints measured from publication. Each checkpoint answers a different question.',
      },
      {
        ul: [
          '1 hour — whether the post is being distributed at all. The numbers are too small to conclude anything.',
          '6 hours — an early direction, still noisy.',
          '24 hours — the first checkpoint stable enough to compare videos.',
          '72 hours — the curve is clear; most videos have taken their main views.',
          '168 hours — the one-week picture, used to settle the lesson.',
        ],
      },
      {
        p: 'These five are not five times you have to open the app. They run on a schedule; you only need to know which one is worth reading.',
      },
      { h2: 'The table shows only the latest checkpoint, and that is deliberate' },
      {
        p: 'Each video in the results table gets exactly one row, with the latest checkpoint’s numbers. There are not five columns for you to pick from, because picking the wrong column is the fastest way to a wrong conclusion.',
      },
      {
        p: 'Comparing a video one hour old with one that has run seven days compares time, not content. The second one always wins, even when it is worse.',
      },
      {
        p: 'To compare fairly, wait until both have passed the same checkpoint. If the older video is at 168 hours and the new one at 24, read the older video’s 24-hour numbers if you kept them, or wait for the new one to reach 168 hours. It feels slow, but it is the only way the comparison means anything.',
      },
      { h2: 'Why the first hour tells you nothing' },
      {
        p: 'In the first hour, a post is usually being shown to a small group. A few dozen views is a sample that is far too small: one friend sharing it can double the number, and one share says nothing about the content.',
      },
      {
        p: 'The one-hour number has exactly one use: spotting a post that is not being distributed at all. If there are no views after an hour, check the post, the Page permissions and the content. Do not use this checkpoint to decide whether the video is any good.',
      },
      {
        note: 'Reading the number at one hour and editing the content is a reaction to noise. You will change something that was working, and next time you will not know why it worked.',
      },
      { h2: 'What Refresh numbers does' },
      {
        p: 'The button reads the numbers again now, without waiting for the next checkpoint. It is useful when a post has just started moving and you want the current figure, or after you have reconnected the Page.',
      },
      {
        p: 'It does not change the schedule and does not create a checkpoint. Pressing it repeatedly for ten minutes shows you noise, not a trend.',
      },
      { h2: 'Where the numbers come from, and when they are empty' },
      {
        p: 'The numbers come from Facebook Insights, through a Page token with the read_insights permission. The app asks for it when you connect the Page; if the permission is revoked, there is a reconnect button.',
      },
      {
        p: 'Without the permission, publishing still runs; only measurement is empty. That is a deliberate choice: being unable to measure should not block posting, but you should know which part you are missing.',
      },
      {
        p: 'The permission only reads the numbers of Pages you manage. It does not let the app see somebody else’s Page, and it does not change posting rights.',
      },
      { h2: 'Reading the numbers to make a decision' },
      {
        p: 'These four readings work on any video, with no extra table.',
      },
      {
        ul: [
          'Compare the same checkpoint: 24 hours with 24 hours, 72 with 72.',
          'Watch-through: average watch time divided by the video length. Low means the opening is not holding people.',
          'Engagement per view: compare videos, not absolute counts.',
          'Follows per 1,000 views: whether the video brings new people to the Page or is only watched once.',
        ],
      },
      {
        p: 'One video is not data; it is an observation. Three videos under the same conditions are a sample big enough to change how you work.',
      },
      { h2: 'What to change when the numbers say what' },
      {
        p: 'If watch-through is low across most videos, the problem is the opening: the first line, the first shot, the first beat. If views are low but watch-through is high, the post is not being distributed, or it does not match the Page’s followers. If follows are low, the content is entertaining people without giving them a reason to stay.',
      },
      {
        p: 'Change one thing at a time. Change the opening and the posting time together and next week’s result cannot tell you which one worked.',
      },
      { h2: 'Do not measure if you will not act on it' },
      {
        p: 'If you already know you will change nothing whatever the numbers say, do not open the table every day. Measuring with no decision attached only makes you worry more, and makes you edit things that were fine.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Bao lâu thì số liệu ổn định?',
        a: 'Mốc 24 giờ là mốc đầu tiên đủ ổn định để so giữa các video. 72 giờ cho thấy đường cong đã rõ; 168 giờ là bức tranh một tuần.',
      },
      {
        q: 'Vì sao bảng không hiện cả năm mốc?',
        a: 'Vì so các video ở các mốc khác nhau là so sai. Bảng giữ mốc mới nhất của mỗi video để bạn không vô tình so một video một giờ với một video bảy ngày.',
      },
      {
        q: 'Bấm Cập nhật số có tạo thêm mốc không?',
        a: 'Không. Nó đọc lại số hiện tại, không đổi lịch đo và không ghi thêm mốc mới.',
      },
      {
        q: 'Thiếu quyền read_insights thì có đăng được không?',
        a: 'Được. Đăng vẫn chạy bình thường, chỉ phần đo là trống. App xin quyền khi kết nối Page và có nút kết nối lại nếu quyền bị thu hồi.',
      },
      {
        q: 'Số này có phải số bán hàng không?',
        a: 'Không. Đây là lượt xem, tỉ lệ xem hết, tương tác và follow. Đơn hàng và doanh thu nằm ở báo cáo bán hàng của bạn, không nằm trong bảng này.',
      },
    ],
    en: [
      {
        q: 'How long until the numbers settle?',
        a: 'The 24-hour checkpoint is the first one stable enough to compare videos. 72 hours shows the curve clearly; 168 hours is the one-week picture.',
      },
      {
        q: 'Why does the table not show all five checkpoints?',
        a: 'Because comparing videos at different checkpoints is a wrong comparison. The table keeps the latest checkpoint per video so you do not accidentally compare a one-hour video with a seven-day one.',
      },
      {
        q: 'Does pressing Refresh numbers add a checkpoint?',
        a: 'No. It reads the current numbers; it does not change the schedule and does not record a new checkpoint.',
      },
      {
        q: 'Can I post without the read_insights permission?',
        a: 'Yes. Publishing runs normally; only measurement is empty. The app asks for the permission when you connect the Page and offers a reconnect button if it is revoked.',
      },
      {
        q: 'Are these sales numbers?',
        a: 'No. These are views, watch-through, engagement and follows. Orders and revenue live in your own sales reports, not in this table.',
      },
    ],
  },
};

/**
 * Blog post — "Đăng video hàng loạt Facebook Reels".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 */
export default {
  slug: {
    vi: 'dang-video-hang-loat-facebook-reels',
    en: 'posting-reels-in-bulk',
  },
  title: {
    vi: 'Đăng Facebook Reels hàng loạt: trần 30 Reels mỗi Page',
    en: 'Posting Reels in bulk: 30 per Page is a hard limit',
  },
  description: {
    vi: 'Đăng video hàng loạt Facebook Reels: trần 30 Reels mỗi Page trong 24 giờ, cách quản nhiều Page, chú thích, hashtag và cách giãn cách để không bị coi là spam.',
    en: 'Posting Reels in bulk: the 30-per-Page cap in 24 hours, running several Pages, captions and hashtags, and how to space posts so they do not read as spam.',
  },
  date: '2026-10-10',
  minutes: { vi: 5, en: 5 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: 'Facebook cho mỗi Page đăng tối đa 30 Reels trong 24 giờ, và đó chỉ là một trong những con số bạn phải tính trước khi lên lịch. Bài này nói cách xếp lịch quanh nó, khi bạn chạy một Page hay cả dàn Page cùng lúc.',
    en: 'Facebook lets each Page post at most 30 Reels in 24 hours, and that is only one of the numbers you have to plan around. Here is how to schedule when you are running one Page, or a whole set of them.',
  },
  body: {
    vi: [
      { h2: 'Reels đi tới cả người chưa theo dõi Page, video thường thì không' },
      {
        ul: [
          'Reels là định dạng video ngắn, dựng dọc, và được phân phối cho cả người chưa theo dõi Page. Video thường chủ yếu tới người đã theo dõi bạn.',
          'Reels cần khung dọc và vào việc nhanh. Một video quay ngang đăng dưới dạng Reels thường trông lệch và bị cắt mất chữ.',
          'Cùng một video có thể đăng được cả hai dạng, nhưng đừng đăng trùng lặp lên cùng một Page trong thời gian ngắn.',
          'Khi lên lịch cho cả loạt, xếp Reels trước và video thường sau. Reels là phần dễ tiếp cận người mới, còn video thường giữ chân người đã biết bạn.',
        ],
      },
      { h2: 'Trần 30 Reels trong 24 giờ là giới hạn cứng, và nó tính theo từng Page' },
      {
        p: 'Mỗi Page được đăng tối đa 30 Reels trong 24 giờ. Đây là giới hạn cứng của Facebook, tính riêng cho từng Page, và không có công cụ nào vượt được nó.\n\nBa mươi nghe thì nhiều, nhưng rất dễ chạm nếu bạn đang chạy nhiều chiến dịch cùng lúc hoặc đăng lại nội dung cũ. Cách lên kế hoạch: đếm số Reels bạn thật sự muốn đăng mỗi ngày cho mỗi Page, cộng thêm phần dự phòng cho video đăng bù, rồi xem tổng đó có vượt 30 không. Nếu vượt, cắt bớt hoặc chia sang Page khác ngay từ lúc lên lịch — đừng để tới lúc chạy mới phát hiện.\n\nMột chỗ dễ bỏ sót: trần này còn bị tính cùng với các hoạt động khác của Page. Một Page vừa đăng bài, vừa chạy quảng cáo, vừa đăng Reels dồn dập sẽ dễ bị hạn chế phân phối hơn một Page có nhịp đều.',
      },
      { h2: 'Chạy nhiều Page thì mỗi Page phải có danh sách riêng' },
      {
        ul: [
          'Mỗi Page một danh sách bài riêng. Đừng gộp chung rồi đẩy hết một lượt, vì mỗi Page có trần riêng và bị đánh giá riêng.',
          'Theo dõi trạng thái từng bài: đã đăng, đang chờ, lỗi. Biết bài nào đã lên là cách duy nhất để không đăng trùng.',
          'Giữ danh sách nội dung riêng cho từng Page. Đăng y hệt một video lên năm Page cùng lúc là cách nhanh nhất để bị hạn chế.',
          'Nếu một Page đang bị hạn chế phân phối, đừng dồn thêm. Giảm tần suất ở Page đó và giữ nhịp bình thường ở các Page còn lại.',
        ],
      },
      { h2: 'Chú thích phải đủ nghĩa ngay ở câu đầu, vì phần sau bị rút gọn' },
      {
        ul: [
          'Chú thích nên đủ nghĩa ngay ở câu đầu, vì phần sau thường bị rút gọn khi hiển thị.',
          'Hashtag dùng 3 đến 5 cái, sát chủ đề. Hashtag chung chung không giúp video tới đúng người.',
          'Giữ khung dọc 9:16 và chừa vùng an toàn trên dưới, vì giao diện Reels che mất phần đó bằng chữ và các nút.',
          'Nên có phụ đề, kể cả khi video đã có tiếng. Phần lớn người xem lướt qua mà không bật âm thanh.',
        ],
      },
      {
        note: 'Đừng đăng nhiều Page cùng một thời điểm. Một loạt video giống nhau, đăng trong cùng vài phút, là mẫu hành vi dễ bị coi là spam, và Facebook có thể hạn chế phân phối. Cách giãn đơn giản: mỗi Page cách nhau vài chục phút, và trong từng Page cũng giãn các Reels ra, đừng đẩy liền một lúc. Có nhiều Page thì hãy nghĩ theo lịch cả ngày, thay vì theo một lần bấm. Giãn cách tốn thêm thời gian chờ, nhưng rẻ hơn rất nhiều so với việc cả dàn Page cùng bị hạn chế đúng lúc bạn đang cần đăng.',
      },
    ],
    en: [
      { h2: 'Reels reach people who do not follow the Page; ordinary videos do not' },
      {
        ul: [
          'Reels is the short vertical format, and it is shown to people who do not follow the Page yet. An ordinary video mostly reaches the people who already follow you.',
          'Reels needs a vertical frame and a fast start. A video shot horizontally and posted as a Reel usually looks off and loses the text off the sides.',
          'The same video can go out in both formats, but do not post it twice on the same Page in a short window.',
          'When you schedule a batch, put the Reels first and the ordinary videos after. Reels is the part that reaches new people; ordinary video keeps the ones who already know you.',
        ],
      },
      { h2: 'Facebook caps each Page at 30 Reels in 24 hours, and the cap is hard' },
      {
        p: 'Each Page can post at most 30 Reels in 24 hours. That is a hard Facebook limit, counted per Page, and no tool gets around it.\n\nThirty sounds like a lot, but it is easy to hit if you are running several campaigns at once or reposting older content. Plan it like this: count the Reels you genuinely want to post per day for each Page, add the spare you want for catch-up videos, and see whether the total crosses 30. If it does, cut it down or move some to another Page while you are still planning — not after the run has started.\n\nOne easy thing to miss: the cap sits alongside everything else the Page does. A Page that is posting, running ads and pushing Reels all at once is more likely to get its reach limited than a Page with a steady rhythm.',
      },
      { h2: 'Running several Pages means one list per Page' },
      {
        ul: [
          'Each Page gets its own list. Do not merge them and push everything in one go — every Page has its own cap and is judged on its own.',
          'Track every post: posted, waiting, failed. Knowing what has gone up is the only way to avoid posting it twice.',
          'Keep a separate content list per Page. Posting the identical video to five Pages at once is the fastest way to get limited.',
          'If one Page is already having its reach limited, do not push more into it. Slow that Page down and keep the others at their normal rhythm.',
        ],
      },
      { h2: 'The caption has to carry its meaning in the first line, because the rest gets cut' },
      {
        ul: [
          'The first line should make sense on its own, because the rest is usually collapsed when the post is shown.',
          'Use three to five hashtags, close to the subject. Generic hashtags do not bring the video to the right people.',
          'Keep the frame vertical at 9:16 and leave a safe margin top and bottom, because the Reels interface covers that area with text and buttons.',
          'Add subtitles even if the video has sound. Most people scroll with the sound off.',
        ],
      },
      {
        note: 'Do not post to several Pages at the same moment. A set of similar videos, all going out within a few minutes, is a pattern that reads as spam, and Facebook can limit the reach of the Pages involved. The simple fix: leave a few dozen minutes between Pages, and inside each Page space the Reels out too, rather than pushing them one after another. If you have a lot of Pages, think in terms of a whole day’s schedule rather than one run. Spacing costs you waiting time; it is far cheaper than a whole set of Pages getting limited exactly when you need to post.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Giới hạn 30 Reels tính theo Page hay theo tài khoản?',
        a: 'Theo từng Page. Mỗi Page có trần riêng, nên nhiều Page thì tổng số video bạn đăng được trong ngày nhiều hơn — nhưng rủi ro cũng nhiều hơn nếu bạn đăng dồn.',
      },
      {
        q: 'Đăng Reels tự động có bị Facebook phạt không?',
        a: 'Facebook hạn chế hành vi đăng quá nhiều và nội dung trùng lặp, không hạn chế việc bạn dùng công cụ. Đăng tự động mà vẫn giãn cách và mỗi Page có nội dung riêng thì an toàn hơn đăng tay ồ ạt.',
      },
      {
        q: 'Làm sao biết bài nào đã đăng rồi?',
        a: 'Giữ một danh sách theo từng Page, có trạng thái cho mỗi video. AutoReel cho bạn theo dõi tiến độ đăng, và bạn có thể giao việc rồi xem tiến độ từ xa qua Telegram khi máy tính chạy AutoReel vẫn đang bật. Danh sách này cũng là căn cứ để biết Page nào đã gần chạm trần 30 Reels trong ngày.',
      },
      {
        q: 'Một video có nên đăng lên nhiều Page không?',
        a: 'Nếu các Page phục vụ nhóm khách khác nhau, hãy sửa phần mở đầu và chú thích cho từng nơi. Đăng y hệt cùng lúc lên nhiều Page dễ bị coi là spam, và cũng làm các Page cạnh tranh với nhau.',
      },
    ],
    en: [
      {
        q: 'Is the 30-Reel limit per Page or per account?',
        a: 'Per Page. Each Page has its own cap, so more Pages means more videos you can post in a day — and more risk if you push them all out at once.',
      },
      {
        q: 'Does posting Reels automatically get me penalised by Facebook?',
        a: 'Facebook limits the behaviour — posting too much, duplicating content — not the use of a tool. Automated posting with real spacing and separate content per Page is safer than posting by hand in bulk.',
      },
      {
        q: 'How do I know which videos have already gone out?',
        a: 'Keep one list per Page, with a status for each video. AutoReel tracks posting progress for you, and you can hand off the work and watch that progress over Telegram while the computer running AutoReel stays on. The same list tells you which Page is close to its 30-Reel cap for the day.',
      },
      {
        q: 'Should one video go to several Pages?',
        a: 'If the Pages serve different groups of buyers, change the opening and the caption for each one. Posting the identical video to several Pages at the same time reads as spam, and it also sets your Pages up to compete with each other.',
      },
    ],
  },
};

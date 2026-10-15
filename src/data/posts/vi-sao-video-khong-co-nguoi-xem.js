/**
 * Blog post — "Vì sao video không có người xem".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 *
 * The eight causes are ordered as a checklist, not as a list of ideas: the order
 * is the advice, and the checks are written so a reader can run each one on a
 * video they already posted.
 */
export default {
  slug: {
    vi: 'vi-sao-video-khong-co-nguoi-xem',
    en: 'why-nobody-watches',
  },
  title: {
    vi: 'Vì sao video không có người xem: 8 nguyên nhân nên kiểm',
    en: 'Why nobody watches: eight causes, in the order to check',
  },
  description: {
    vi: 'Video không có người xem thường do vài lỗi nhỏ cộng lại. Tám nguyên nhân xếp theo thứ tự nên kiểm, kèm cách kiểm từng cái và lúc nào đừng kết luận vội.',
    en: 'No views is rarely one big mistake. Eight causes in the order worth checking, how to test each one, and when it is too early to conclude anything.',
  },
  date: '2026-10-10',
  minutes: { vi: 6, en: 6 },
  tag: {
    vi: 'Kinh nghiệm',
    en: 'Field notes',
  },
  lead: {
    vi: 'Video ít người xem hiếm khi do một lý do lớn. Nó là vài lỗi nhỏ cộng lại, và lỗi nặng nhất thường nằm ở chỗ bạn ít nghĩ tới nhất. Tám nguyên nhân dưới đây xếp theo thứ tự nên sửa, không theo mức độ dễ thấy.',
    en: 'A video with no views is rarely one big mistake. It is several small ones stacked, and the worst of them is usually the one you never suspected. These eight are ordered by what to fix first, not by what is easiest to see.',
  },
  body: {
    vi: [
    {
      p: 'Thứ tự quan trọng gần bằng chính danh sách. Nếu bạn đi sửa phần chữ trong khi video đang tới tay sai người, bạn mất một tuần mà không thấy gì đổi. Kiểm từ trên xuống, cái nào sai thì sửa cái đó trước, rồi mới tới cái tiếp theo.\n\nMột nguyên tắc trước khi bắt đầu: mỗi tuần chỉ đổi một thứ. Đổi năm thứ cùng lúc thì số liệu lên bạn không biết ơn ai, mà số liệu xuống cũng không biết cái nào vừa làm hỏng.',
    },
    {
      h2: 'Tám nguyên nhân xếp theo thứ tự nên sửa, không theo mức độ dễ thấy',
    },
    {
      ol: [
        'Sai người xem: video tới tay người không có nhu cầu với món bạn bán.',
        'Ba giây đầu không nói được video nói về cái gì.',
        'Chữ trên màn hình quá nhỏ để đọc trên điện thoại.',
        'Video dọc bị đăng vào chỗ chỉ chạy khung ngang, hoặc ngược lại.',
        'Đăng dồn quá nhiều video trong một khoảng thời gian ngắn.',
        'Chú thích không cho người xem lý do để xem tiếp.',
        'Sản phẩm không ai tìm, hoặc không ai tìm bằng cách bạn đang nói.',
        'Tài khoản còn quá mới, chưa có tín hiệu nào cho nền tảng.',
      ],
    },
    {
      h2: 'Sai người xem là lỗi đắt nhất, còn ba giây đầu là lỗi rẻ nhất để sửa',
    },
    {
      p: 'Sai người xem bị bỏ qua nhiều nhất vì sửa nó tốn công hơn sửa chữ. Cách kiểm: mở danh sách người đã xem video gần nhất và tự hỏi trong đó có bao nhiêu người thật sự có nhu cầu với món bạn bán. Bạn bán đồ cho mẹ có con nhỏ mà video toàn tới tay sinh viên đang học thì mọi thứ phía sau đều vô nghĩa.\n\nBa giây đầu quyết định người xem ở lại hay lướt tiếp. Cách kiểm rẻ nhất: mở video, che phần chữ, tắt tiếng, xem đúng ba giây đầu rồi tự hỏi người lạ có hiểu đang nói về chuyện gì không. Nếu phải tới giây thứ tám mới hiểu, phần mở đầu đang làm mất người.',
    },
    {
      h2: 'Chữ nhỏ, sai khung và chú thích vô nghĩa là ba lỗi bạn tự kiểm được trong mười phút',
    },
    {
      ul: [
        'Chữ quá nhỏ. Kiểm bằng cách mở video trên chính chiếc điện thoại bạn dùng để xem, không phải trên màn hình máy tính. Chữ khiến bạn phải nheo mắt là chữ phải to lên gấp đôi.',
        'Sai khung. Video ngang đăng vào chỗ chạy dọc sẽ bị viền đen hoặc cắt mất hai bên, và phần bị cắt thường đúng là phần có chữ. Kiểm bằng cách xem bản xem trước đúng tỉ lệ trước khi đăng.',
        'Chú thích vô nghĩa. Câu đầu phải cho người xem biết video nói về cái gì và vì sao nên xem tiếp. Kiểm bằng cách đọc chú thích mà không xem video: nếu chính bạn cũng không hiểu gì, người xem cũng vậy.',
      ],
    },
    {
      note: 'Chỗ tốn thời gian nhất mà ít ai để ý: sửa năm thứ trong cùng một tuần. Số liệu lên thì bạn không biết cái nào đáng giữ, số liệu xuống thì không biết cái nào vừa phá hỏng. Tuần này chỉ đổi phần mở đầu, tuần sau chỉ đổi chú thích, rồi so với tuần trước bằng số liệu của chính bạn. Chậm hơn, nhưng bạn biết chắc cái gì có tác dụng thay vì đoán.',
    },
    {
      h2: 'Đăng dồn, chọn sai sản phẩm và tài khoản quá mới là ba lỗi không nằm trong video',
    },
    {
      p: 'Đăng dồn. Mười video trong một buổi tối khiến các video cạnh tranh lượt xem của nhau, và trên Shopee đây là hành vi có khung phạt, mức nặng có thể khoá tài khoản tới 30 ngày. Cách kiểm: mở lại lịch đăng ba ngày gần nhất. Nếu có ngày trên năm video và có ngày không có cái nào, bạn đang đăng dồn chứ không phải đang đăng đều.',
    },
    {
      p: 'Sản phẩm không ai tìm. Không phần mở đầu nào cứu được một món mà người ta không có nhu cầu. Cách kiểm: làm ba video cho ba món khác nhau trong cùng một nhóm hàng, giữ nguyên cách dựng và cùng một nhịp đăng. Món nào lên rõ rệt thì đó là nhu cầu, không phải tài nói của bạn.',
    },
    {
      p: 'Tài khoản mới chưa có tín hiệu. Một tài khoản vừa lập, chưa có video nào, đăng video đầu tiên thì nền tảng chưa có gì để biết nên đưa nội dung của bạn cho ai. Cách kiểm: xem lại bạn đã đăng đều được hai ba tuần chưa. Nếu chưa, vấn đề không nằm ở video mà ở chỗ bạn đang kết luận quá sớm.',
    },
    {
      h2: 'Có hai lúc đừng kết luận gì từ lượt xem',
    },
    {
      p: 'Video mới đăng được vài giờ, hoặc bạn mới có dưới mười video: đừng kết luận gì. Ở giai đoạn đó chưa có đủ dữ liệu, và sửa liên tục theo một con số còn nhiễu còn tệ hơn là giữ nguyên cách làm trong ba tuần rồi nhìn lại.\n\nCách kiểm này cũng không hợp khi kênh của bạn đang bị hạn chế phân phối. Lúc đó lượt xem thấp không phải vì nội dung, mà vì tài khoản đang bị siết. Xử lý chuyện đó trước, đừng đi sửa video.',
    },
    ],
    en: [
    {
      p: 'The order matters almost as much as the list. If you rewrite the on-screen text while the video is reaching the wrong people, you will lose a week and see nothing move. Work from the top down: fix whatever is wrong there first, and only then move to the next one.\n\nOne rule before you start: change one thing a week. Change five at once and you cannot tell what earned the improvement, or which one caused the drop.',
    },
    {
      h2: 'These eight are ordered by what to fix first, not by what is easiest to see',
    },
    {
      ol: [
        'Wrong viewers: the video reaches people with no use for what you sell.',
        'The first three seconds do not say what the video is about.',
        'On-screen text too small to read on a phone.',
        'A vertical video posted where only horizontal runs, or the other way round.',
        'Posting a pile of videos inside one short window.',
        'A caption that gives nobody a reason to keep watching.',
        'A product nobody searches for, or nobody searches for the way you describe it.',
        'An account too new to carry any signal to the platform.',
      ],
    },
    {
      h2: 'Wrong viewers is the expensive mistake; the first three seconds is the cheap one',
    },
    {
      p: 'Wrong viewers gets skipped the most, because fixing it is harder than editing text. How to check: open the audience list on your most recent video and ask how many of those people actually need what you sell. If you sell baby clothes and the video is reaching students, nothing further down this list matters.\n\nThe first three seconds decide whether someone stays or swipes. Cheapest check: open the video, cover the text, mute the sound, watch exactly three seconds, and ask whether a stranger would know what it is about. If it takes eight seconds to find out, your opening is losing people.',
    },
    {
      h2: 'Small text, the wrong frame and a meaningless caption are three mistakes you can check in ten minutes',
    },
    {
      ul: [
        'Text too small. Check it on the phone you actually watch on, not on a computer screen. If it makes you squint, it needs to be twice the size.',
        'The wrong frame. A horizontal video posted where the feed is vertical gets black bars or loses both sides — and the sides are usually where the text sits. Check with a preview at the right ratio before you post.',
        'A caption with no meaning. The first line has to tell a viewer what this is and why to keep watching. Check it by reading the caption without the video: if you cannot tell, neither can they.',
      ],
    },
    {
      note: 'The part that costs the most time and almost nobody watches for: changing five things in one week. If the numbers rise you do not know which change to keep; if they fall you do not know which one broke it. Change the opening this week, the caption next week, and compare against your own numbers from the week before. Slower, but you end up knowing what works instead of guessing.',
    },
    {
      h2: 'Burst posting, the wrong product and a brand new account are three causes outside the video',
    },
    {
      p: 'Burst posting. Ten videos in one evening make them compete with each other for the same views, and on Shopee that behaviour sits inside a penalty framework whose severe end can lock an account for up to 30 days. How to check: look at your last three days of posting. If one day has more than five videos and another has none, you are posting in bursts, not posting steadily.',
    },
    {
      p: 'A product nobody is looking for. No opening saves an item that nobody wants. How to check: make three videos for three different items in the same category, same edit style, same posting rhythm. Whichever one clearly outperforms is demand, not your delivery.',
    },
    {
      p: 'An account with no history. On a brand new account with no videos, the platform has nothing to tell it who should see your first post. How to check: look at whether you have posted steadily for two or three weeks. If you have not, the problem is not the video — you are concluding too early.',
    },
    {
      h2: 'There are two moments when views tell you nothing',
    },
    {
      p: 'A video a few hours old, or an account with fewer than ten videos: conclude nothing. There is not enough data yet, and changing things in response to a noisy number is worse than keeping your method for three weeks and looking again.\n\nThis checklist also fails when your account is being held back. Then the low views are not about the content — the account is being throttled. Deal with that first; do not go and edit the video.',
    },
    ],
  },
  faq: {
    vi: [
    {
      q: 'Video đăng bao lâu thì biết là không hiệu quả?',
      a: 'Đừng đánh giá trong vài giờ. Hãy để qua vài ngày rồi so với chính các video khác của bạn, thay vì so với con số ai đó khoe. Nếu sau một tuần vẫn không ai bấm vào sản phẩm, vấn đề thường nằm ở phần mở đầu hoặc ở việc chọn sản phẩm, không phải ở số lượng video.',
    },
    {
      q: 'Xoá video ít lượt xem rồi đăng lại có tốt hơn không?',
      a: 'Không. Đăng lại cùng nội dung chỉ tạo thêm một lần đăng trùng, và nếu bạn làm vậy nhiều lần thì đó chính là mẫu hành vi dễ bị coi là spam. Cách tốt hơn là giữ video cũ lại, sửa phần mở đầu và chú thích cho lần làm sau.',
    },
    {
      q: 'Nên sửa phần mở đầu hay đổi sản phẩm trước?',
      a: 'Nhìn hai con số để quyết. Lượt xem thấp nghĩa là nội dung chưa tới được người, hãy sửa phần mở đầu và cách chọn nhóm người xem. Lượt xem ổn mà không ai bấm vào sản phẩm thì vấn đề nằm ở chú thích hoặc ở chính món hàng, sửa phần mở đầu sẽ không giúp gì.',
    },
    {
      q: 'Có nên đăng lên nhiều tài khoản để tăng lượt xem?',
      a: 'Không nên đăng y hệt. Nếu bạn có nhiều gian hàng Shopee hoặc nhiều Page, hãy đổi phần mở đầu và chú thích cho từng nơi, vì đăng trùng nội dung vừa dễ bị coi là spam vừa khiến các tài khoản cạnh tranh với nhau. AutoReel hỗ trợ đăng lên Shopee Video và Facebook/Reels với chú thích riêng cho từng bài. Xem thêm ở autoreelvn.com hoặc nhắn Zalo 0326012999.',
    },
    ],
    en: [
    {
      q: 'How long before I know a video is not working?',
      a: 'Do not judge it within hours. Give it a few days and compare it with your own other videos, not with a number somebody bragged about. If a week passes and nobody clicks through to the product, the problem is usually the opening or the product choice, not the number of videos.',
    },
    {
      q: 'Should I delete a video with few views and post it again?',
      a: 'No. Re-posting the same content only adds another duplicate, and doing it repeatedly is exactly the pattern that reads as spam. Better: keep the old video, and fix the opening and the caption on the next one.',
    },
    {
      q: 'Should I fix the opening or change the product first?',
      a: 'Let two numbers decide. Low views mean the content is not reaching people, so fix the opening and who you are aiming at. Decent views with no clicks mean the caption or the product itself — a new opening will not help.',
    },
    {
      q: 'Should I post the same video to several accounts for more views?',
      a: 'Not identically. If you run several Shopee shops or Pages, give each one its own opening and caption: duplicate content reads as spam and sets your own accounts against each other. AutoReel posts to Shopee Video and Facebook/Reels with a separate caption for each post. More at autoreelvn.com or Zalo 0326012999.',
    },
    ],
  },
};

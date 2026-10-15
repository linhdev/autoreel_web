/**
 * Blog post — "Đăng Shopee Video: 9 việc nên làm".
 *
 * **The exemplar for this folder.** Every other article was rewritten to match
 * it, and the notes below are the ones worth copying. Read `VOICE.md` first;
 * this file is what that document looks like in practice.
 *
 * Three things it does that the first draft of every article here did not:
 *
 *   - **A heading is a claim, not a label.** "Chú thích, hashtag và việc gắn
 *     sản phẩm" is a noun phrase a table of contents could have generated.
 *     "Chú thích viết cho một người, không phải cho một danh mục" tells you
 *     what the section is going to argue.
 *   - **Every section has a number, a name or a consequence in it.** Not "nên
 *     đăng đều" but "ba video một ngày rồi nghỉ bốn ngày thường tệ hơn một
 *     video mỗi ngày". A reader can check a specific claim; nobody can check
 *     an adjective.
 *   - **It says the uncomfortable thing out loud.** The gap between videos is
 *     the part that costs people their accounts, and it gets a section and a
 *     `{ note }` rather than a clause in a list.
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`, each prose field in `{ vi, en }`. The renderer walks `body` in
 * order and switches on whichever single key a block carries — no markup inside
 * the strings, and no `**`, which is escaped rather than rendered.
 */
export default {
  slug: {
    vi: 'meo-dang-shopee-video-hieu-qua',
    en: 'shopee-video-posting-tips',
  },
  title: {
    vi: 'Đăng Shopee Video: 9 việc nên làm, theo đúng thứ tự',
    en: 'Posting to Shopee Video: nine things to do, in order',
  },
  description: {
    vi: 'Chín việc cụ thể để video Shopee có người xem: khung 9:16, độ dài, chú thích, hashtag, gắn sản phẩm, giờ đăng — và phần dễ bỏ qua nhất là giãn cách.',
    en: 'Nine things that decide whether a Shopee video gets watched: 9:16 framing, length, captions, hashtags, product tagging, timing — and the spacing rule most skip.',
  },
  date: '2026-10-10',
  minutes: { vi: 6, en: 6 },
  tag: { vi: 'Kinh nghiệm', en: 'Field notes' },
  lead: {
    vi: 'Shopee không thưởng cho người đăng nhiều. Nó thưởng cho người đăng đều và đúng. Dưới đây là chín việc, xếp theo thứ tự nên làm — trong đó việc thứ năm là chỗ người ta mất tài khoản mà không hiểu vì sao.',
    en: 'Shopee does not reward the people who post the most. It rewards the ones who post steadily and get the details right. Here are nine things to do, in the order worth doing them — and the fifth is the one people lose accounts over without understanding why.',
  },
  body: {
    vi: [
      { h2: 'Chốt khung hình và độ dài trước khi nghĩ tới nội dung' },
      {
        p: 'Hai thứ này phải quyết trước, vì sửa lại sau nghĩa là dựng lại từ đầu. Chúng cũng là hai thứ dễ chốt nhất, nên không có lý do gì để làm sau.',
      },
      {
        ul: [
          'Dựng theo khung dọc 9:16. Video ngang khi xem trên điện thoại sẽ bị viền đen hai bên, hoặc bị cắt mất chữ — và bị cắt mất chữ là kiểu hỏng tệ hơn, vì bạn chỉ phát hiện ra khi đã đăng.',
          'Giữ phần lớn video trong khoảng 15 đến 30 giây. Ngắn hơn thì chưa kịp nói gì, dài hơn thì người xem rời đi trước khi tới phần hay.',
          'Đặt câu quan trọng nhất trong một đến hai giây đầu, dưới dạng chữ lớn trên màn hình. Phần lớn người xem Shopee mở video ở nơi không tiện bật tiếng.',
          'Bật phụ đề. Không phải vì phụ đề đẹp, mà vì nó là thứ duy nhất giữ được người đang xem trong im lặng.',
        ],
      },
      { h2: 'Chú thích viết cho một người, không phải cho một danh mục' },
      {
        p: 'Chú thích hay nhất đọc như một câu bạn nói với người đang đứng trước mặt, không phải như một dòng trong bảng liệt kê. Nêu một lợi ích và một chi tiết cụ thể — giá, kích cỡ, chất liệu, thời gian giao. "Áo thun cotton, form rộng, 139k" nói được nhiều hơn "Chất lượng cao, giá tốt" dù ngắn hơn.',
      },
      {
        ul: [
          'Hashtag dùng 3 đến 5 cái, bám sát sản phẩm và nhóm khách. Nhồi hai chục hashtag không làm video tới đúng người hơn; nó chỉ làm chú thích khó đọc.',
          'Gắn đúng sản phẩm vào đúng video, và kiểm lại tên cùng biến thể trước khi bấm đăng. Gắn sai là mất ghi nhận cho toàn bộ công sức làm video.',
          'Chọn ảnh bìa là khung có sản phẩm rõ và chữ ngắn. Đừng để hệ thống tự lấy — nó hay lấy đúng khung đang chuyển động hoặc khung mờ.',
        ],
      },
      {
        note: 'Đây là chỗ dễ mất tài khoản nhất, và cũng là chỗ ít người để ý nhất: Shopee có khung phạt cho việc đăng quá nhiều video trong thời gian ngắn, mức nặng có thể khoá tài khoản tới 30 ngày. Nếu bạn có hai chục video muốn đăng hôm nay, hãy chia ra nhiều ngày. Đăng dồn không giúp video nào lên nhanh hơn; nó chỉ làm chúng cạnh tranh lượt xem của nhau.',
      },
      { h2: 'Giờ đăng: đừng chọn theo thói quen của người khác' },
      {
        p: 'Ai cũng nói hai khung đông người xem là quanh bữa trưa và buổi tối. Điều đó đúng một cách vô ích: nó đúng với tất cả mọi người, nên nó không nói gì về bạn.\n\nCách làm có ích hơn: thử ba khung giờ khác nhau trong hai tuần, ghi lại video nào lên, rồi dồn vào khung thắng. Bạn mất hai tuần và có một câu trả lời đúng cho riêng mình — thứ mà không bài viết nào trên mạng cho bạn được.',
      },
      { h2: 'Tần suất: đều quan trọng hơn nhiều' },
      {
        p: 'Ba video một ngày rồi nghỉ bốn ngày thường tệ hơn một video mỗi ngày, dù tổng số video bằng nhau. Cả hệ thống gợi ý lẫn người xem đều đọc được sự đều đặn, và cả hai đều thích nó.\n\nVậy nên hãy chọn nhịp bạn giữ được cả tháng, kể cả những ngày bận. Một nhịp chậm mà không bao giờ đứt tốt hơn một nhịp nhanh mà hai tuần sau bạn bỏ. Và trong cùng một ngày, để các video cách nhau vài giờ — đăng ba video trong mười phút là tự tạo ra đúng cái mẫu hành vi mà Shopee đang tìm cách hạn chế.',
      },
      { h2: 'Giờ đầu sau khi đăng quyết định nhiều hơn bạn tưởng' },
      {
        ul: [
          'Trả lời bình luận thật nhanh trong một giờ đầu, nhất là câu hỏi về giá, kích cỡ và cách dùng. Câu trả lời của bạn cũng là nội dung cho người tới sau đọc.',
          'Đừng xoá video ít lượt xem sau vài giờ. Video bán hàng hay lên muộn, khi người ta bắt đầu mua và để lại đánh giá.',
        ],
      },
      { h2: 'Mỗi tuần nhìn lại một lần, và ghi lại cái bạn thấy' },
      {
        p: 'Cuối tuần, chia video thành hai nhóm: nhóm có lượt xem và lượt mua tốt, và nhóm đứng yên. Làm thêm nội dung giống nhóm đầu, dừng hẳn nhóm sau. Việc này mất mười phút và nó là thứ duy nhất trong bài này thực sự làm bạn khá lên theo thời gian.\n\nRồi ghi lại mẫu chung của nhóm đang lên: loại sản phẩm, kiểu mở đầu, độ dài, khung giờ. Ba dòng mỗi tuần là đủ. Đó là dữ liệu của riêng bạn, và nó đáng tin hơn mọi lời khuyên chung — kể cả bài này.',
      },
    ],
    en: [
      { h2: 'Settle the frame and the length before you think about content' },
      {
        p: 'These two have to be decided first, because changing them later means rebuilding the video from scratch. They are also the two easiest decisions on this page, so there is no reason to leave them until last.',
      },
      {
        ul: [
          'Shoot vertical, 9:16. Horizontal video gets black bars on a phone, or gets cropped — and cropping is the worse failure, because you only find out after you have posted it.',
          'Keep most videos between 15 and 30 seconds. Shorter and you have not said anything yet; longer and people leave before the good part.',
          'Put the single most important sentence in the first second or two, as large text on screen. Most Shopee viewers open a video somewhere they cannot turn the sound on.',
          'Turn subtitles on. Not because they look good, but because they are the only thing holding a silent viewer in place.',
        ],
      },
      { h2: 'Write the caption for one person, not for a category' },
      {
        p: 'The best caption reads like a sentence you would say to somebody standing in front of you, not like a line in a spreadsheet. Name one benefit and one concrete detail — the price, the size, the material, how long delivery takes. "Cotton tee, oversized fit, 139k" says more than "high quality, great value", in fewer words.',
      },
      {
        ul: [
          'Use three to five hashtags, close to the product and the kind of buyer you want. Twenty hashtags do not reach more of the right people; they just make the caption unreadable.',
          'Attach the right product to the right video, and check the name and the variant before you press post. Attaching the wrong one throws away the credit for all the work that went into the video.',
          'Choose a cover frame where the product is clear and the text is short. Do not let the system pick — it tends to pick a frame that is either blurred or mid-motion.',
        ],
      },
      {
        note: 'This is the easiest way to lose an account, and the one nobody watches for: Shopee penalises posting many videos in a short window, and at the severe end that can lock the account for up to 30 days. If you have twenty videos ready today, spread them over several days. Posting them all at once does not make any of them perform better; it only makes them compete with each other for the same views.',
      },
      { h2: 'Posting time: do not copy somebody else’s habit' },
      {
        p: 'Everybody says the busy windows are around lunch and in the evening. That is true in a useless way: it is true of everyone, so it tells you nothing about your audience.\n\nWhat actually helps is to try three different windows over two weeks, write down which videos performed, and then concentrate on the winner. It costs you two weeks and it buys you an answer that is correct for your shop — which is something no article online can hand you.',
      },
      { h2: 'Frequency: steady beats heavy' },
      {
        p: 'Three videos a day followed by four days off is usually worse than one video a day, even when the totals match. Both the recommendation system and your viewers can read regularity, and both prefer it.\n\nSo pick a rhythm you can hold for a month, including the busy days. A slow rhythm that never breaks beats a fast one you abandon in two weeks. And within a single day, leave a few hours between videos — three videos in ten minutes manufactures exactly the pattern Shopee is trying to discourage.',
      },
      { h2: 'The first hour after posting matters more than you think' },
      {
        ul: [
          'Answer comments quickly for the first hour, especially questions about price, size and how to use it. Your answers are also content for everyone who arrives later.',
          'Do not delete a video that has few views after a few hours. Sales videos often pick up late, once people start buying and leaving reviews.',
        ],
      },
      { h2: 'Look back once a week, and write down what you see' },
      {
        p: 'At the end of the week, split your videos in two: the ones with real views and orders, and the ones that sat still. Make more like the first group and stop making the second. That takes ten minutes, and it is the only thing on this page that reliably makes you better over time.\n\nThen write down what the group that works has in common: product type, opening style, length, time of day. Three lines a week is enough. That is your own data, and it is worth more than any general advice — including this article.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Có nên đăng cùng một video lên nhiều tài khoản Shopee không?',
        a: 'Không nên đăng y hệt. Nếu bạn có nhiều gian hàng, hãy đổi phần mở đầu và chú thích cho từng nơi. Đăng trùng nội dung vừa dễ bị coi là spam, vừa khiến bạn cạnh tranh với chính mình.',
      },
      {
        q: 'Video bao lâu thì biết là không hiệu quả?',
        a: 'Đừng đánh giá trong vài giờ. Hãy để qua vài ngày rồi so với chính các video khác của bạn, thay vì so với con số ai đó khoe. Nếu sau một tuần vẫn không ai bấm vào sản phẩm, vấn đề thường nằm ở phần mở đầu hoặc ở khâu chọn sản phẩm — không phải ở độ dài video.',
      },
      {
        q: 'Đăng tự động có bị Shopee phạt không?',
        a: 'Shopee phạt hành vi đăng dồn và nội dung trùng lặp, không phạt việc bạn dùng công cụ. Đăng tự động mà vẫn giãn cách hợp lý và nội dung khác nhau thì an toàn hơn đăng tay ồ ạt — vì máy không quên giãn cách, còn người thì quên.',
      },
      {
        q: 'Cần chuẩn bị gì trước khi đăng loạt đầu tiên?',
        a: 'Một điện thoại Android đã kết nối với máy tính nếu bạn muốn AutoReel đăng tự động lên Shopee Video, danh sách sản phẩm đã chọn, và một nhịp đăng bạn giữ được. AutoReel chạy trên máy bạn và dữ liệu nằm trên máy bạn.',
      },
    ],
    en: [
      {
        q: 'Should I post the same video to several Shopee accounts?',
        a: 'Not identically. If you run more than one shop, change the opening and the caption for each. Duplicate content is both easy to read as spam and a way of competing with yourself.',
      },
      {
        q: 'How long before I know a video is not working?',
        a: 'Do not judge it within hours. Give it a few days and compare it with your own other videos rather than with a number somebody bragged about. If a week passes and nobody clicks through to the product, the problem is usually the opening or the product choice — not the length.',
      },
      {
        q: 'Does posting automatically get me penalised by Shopee?',
        a: 'Shopee penalises bursts of posting and duplicate content, not the use of a tool. Automated posting with sensible spacing and varied content is safer than posting by hand in bulk — a machine does not forget to leave a gap, and people do.',
      },
      {
        q: 'What do I need before the first batch?',
        a: 'An Android phone paired with your computer if you want AutoReel to publish to Shopee Video for you, a list of products you have already chosen, and a posting rhythm you can keep. AutoReel runs on your machine, and your data stays there.',
      },
    ],
  },
};

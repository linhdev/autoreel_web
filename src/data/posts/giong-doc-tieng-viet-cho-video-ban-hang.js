/**
 * Blog post — "Giọng đọc tiếng Việt cho video bán hàng".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 */
export default {
  slug: 'giong-doc-tieng-viet-cho-video-ban-hang',
  title: 'Giọng đọc tiếng Việt cho video bán hàng: đọc sao cho tự nhiên',
  description:
    'Giọng đọc tiếng Việt cho video bán hàng: cách chọn giọng, tốc độ đọc, ngắt nghỉ, chỗ cần nhấn, cách viết lời để máy đọc tự nhiên và khi nào nên tự thu giọng mình.',
  date: '2026-10-10',
  minutes: 5,
  tag: 'Hướng dẫn',
  lead:
    'Giọng đọc đều đều là lý do rất nhiều video bán hàng bị lướt qua, dù hình đẹp và nội dung đúng. Bài này nói cách chọn giọng, cách chỉnh tốc độ và ngắt nghỉ, và cách viết lời thoại để máy đọc nghe như người nói.',
  body: [
    { h2: 'Giọng đọc là thứ người xem nghe nhiều nhất' },
    {
      p: 'Trong một video 30 giây, người xem có thể không nhớ mặt bạn, không nhớ sản phẩm, nhưng họ nhớ giọng đã nói với họ. Giọng đọc quyết định video nghe như một người đang tư vấn hay như một bản tin đọc từ giấy.\n\nĐiều này càng đúng với video dài hơn một phút. Khi lời đọc không có chỗ lên, chỗ xuống, người xem không rời đi vì ghét nội dung — họ rời đi vì không có gì giữ tai họ lại.',
    },
    { h2: 'Chọn giọng: ba câu hỏi trước khi nghe thử' },
    {
      ul: [
        'Ai là người mua? Nếu khách của bạn là mẹ có con nhỏ, một giọng nữ trẻ đọc nhanh thường hợp hơn một giọng nam trầm. Nếu bạn bán đồ câu cá cho đàn ông trung niên, giọng nam trầm lại dễ được tin hơn.',
        'Bạn muốn người xem thấy mình đang nghe ai? Một người bán hàng quen, một chuyên gia, hay một người bạn. Ba kiểu này cho ba giọng khác nhau, và bạn nên chọn một kiểu rồi giữ nó cho cả kênh.',
        'Giọng đó chịu được nghe lặp lại không? Đây là câu ít ai hỏi và cũng là câu quan trọng nhất. Bạn sẽ phải nghe giọng này hàng trăm lần khi dựng video. Nếu nghe ba lần đã thấy mệt, hãy đổi.',
      ],
    },
    { h2: 'Tốc độ đọc: chỗ dễ sai nhất' },
    {
      p: 'Mức mặc định thường là 1.0. Với video bán hàng trên điện thoại, đọc nhanh hơn một chút — khoảng 1.05 đến 1.1 — thường nghe tỉnh và dễ theo hơn, nhất là khi người xem đang lướt.\n\nNhưng có một giới hạn: nếu mức đọc nhanh tới mức bạn phải tập trung mới nghe kịp, người xem cũng vậy, và họ sẽ lướt. Cách kiểm tra rất đơn giản: phát video một lần trong lúc bạn đang làm việc khác. Nếu vẫn nghe hiểu mà không cần nhìn màn hình, tốc độ đó ổn.\n\nĐừng tăng tốc độ để nhét thêm lời vào video. Muốn nói thêm thì cắt bớt ý khác.',
    },
    { h2: 'Ngắt nghỉ và chỗ cần nhấn' },
    {
      ul: [
        'Dấu phẩy là một nhịp nghỉ ngắn, dấu chấm là một nhịp dài. Máy đọc theo đúng dấu câu bạn gõ, nên dấu câu ở đây là chỉ dẫn cho nhịp đọc, không phải chuyện hình thức.',
        'Câu dài quá hai mươi lăm chữ thì nên tách. Một câu dài hai dòng khi đọc lên sẽ không có chỗ thở, và nghe như máy đọc số.',
        'Chỗ cần nhấn: con số, lợi ích chính, và câu nói về điều người xem đang gặp. Cách nhấn dễ nhất với giọng máy là tách ý đó thành một câu riêng, ngắn, đứng một mình.',
        'Tránh ngoặc đơn và gạch ngang trong lời thoại. Chúng tạo ra những đoạn ngắt kỳ lạ mà bạn khó lường trước khi nghe lại.',
        'Xuống dòng giữa hai ý lớn để lấy một khoảng nghỉ trước khi sang ý mới. Với video bán hàng, khoảng nghỉ đúng chỗ đáng giá hơn một câu nói thêm.',
      ],
    },
    { h2: 'Vì sao giọng đều đều làm người xem rời đi' },
    {
      p: 'Giọng đều đều không sai về thông tin. Nó sai ở chỗ không cho người xem biết đoạn nào là đoạn quan trọng. Người nghe dựa vào sự lên xuống của giọng để biết khi nào cần chú ý, giống như dựa vào dấu câu khi đọc.\n\nKhi mọi câu đều được đọc giống nhau, người xem xếp video vào loại nội dung để nền, rồi chuyển sang việc khác mà không cần quyết định gì. Đó là lý do một video có nội dung tốt vẫn có thể có lượt xem thấp: người ta không rời đi vì ghét, họ chỉ không ở lại.',
    },
    {
      note: 'Một ví dụ đọc lên là thấy khác ngay. Câu gốc: "Sản phẩm này có thiết kế nhỏ gọn, tiện lợi và giá cả phải chăng, phù hợp với mọi gia đình." Câu viết lại: "Nó nhỏ, để vừa góc bếp. Chén úp xuống là ráo nước. Giá để dưới link." Câu thứ hai có câu ngắn, có chi tiết cụ thể và có chỗ để giọng nhấn — cùng một thông tin, nghe khác hẳn.',
    },
    { h2: 'Viết lời thoại để máy đọc tự nhiên' },
    {
      ul: [
        'Câu ngắn, mỗi câu một ý. Đây là luật quan trọng nhất, và cũng là luật hay bị phá nhất khi bạn viết theo thói quen viết văn.',
        'Viết đủ chữ, đừng viết tắt. "sp", "km", "đt", "ko" sẽ bị đọc sai hoặc đọc thành chữ cái rời rạc. Mười giây tiết kiệm khi gõ không đáng so với một video nghe sai.',
        'Tránh ký hiệu trong lời thoại: dấu phần trăm, dấu và, dấu cộng, đơn vị viết tắt. Viết hết ra chữ. Phần trăm thì viết thành "phần trăm".',
        'Từ khó đọc thì thay bằng từ dễ. Từ ngoại lai không có cách đọc thống nhất nên được thay bằng từ tiếng Việt, hoặc viết theo cách bạn muốn máy đọc.',
        'Đọc to lên trước khi dựng. Chỗ nào bạn phải dừng lại để lấy hơi là chỗ máy cũng sẽ đọc sai nhịp.',
      ],
    },
    { h2: 'Khi nào nên tự thu giọng mình' },
    {
      p: 'Nên tự thu khi giọng bạn là một phần của sản phẩm: bạn bán đồ cho khách quen, bạn là người trực tiếp tư vấn, hoặc bạn bán bằng sự tin cậy cá nhân. Một giọng thật, kể cả chưa tròn vành, nhiều khi thuyết phục hơn một giọng máy hoàn hảo.\n\nCách này không hợp nếu bạn cần ra số lượng lớn trong thời gian ngắn, hoặc nếu bạn nghe lại giọng mình và thấy không tự nhiên tới mức không dám đăng. Khi đó, hãy để giọng máy đọc phần thân video và chỉ tự thu phần mở đầu — hai giây đầu bằng giọng thật thường đã đủ để người xem thấy có một người đang nói với họ.',
    },
  ],
  faq: [
    {
      q: 'Giọng đọc máy có làm video mất tự nhiên không?',
      a: 'Nó nghe ra là giọng máy nếu bạn đưa cho nó một câu văn viết. Cùng giọng đó, đọc một câu ngắn, có dấu câu rõ và có chỗ nhấn, thì nghe khác hẳn. Phần lớn vấn đề nằm ở lời thoại, không nằm ở giọng.',
    },
    {
      q: 'Nên dùng một giọng cho cả kênh hay đổi theo video?',
      a: 'Giữ một giọng cho phần lớn video giúp người xem nhận ra bạn khi lướt qua. Đổi giọng khi bạn đổi nhóm khách hoặc đổi kiểu nội dung. Điều nên tránh là mỗi video một giọng, vì lúc đó kênh không có gì để nhớ.',
    },
    {
      q: 'Giọng nam hay giọng nữ dễ bán hơn?',
      a: 'Không có câu trả lời chung, và cũng đừng chọn theo số đông. Chọn theo người mua và theo sản phẩm. Cách biết chắc là làm thử hai phiên bản cùng nội dung, khác giọng, đăng cách nhau vài ngày, rồi so lượt xem và lượt bấm của chính bạn.',
    },
    {
      q: 'AutoReel đọc tiếng Việt ngay trên máy được không?',
      a: 'Được. AutoReel có giọng đọc tiếng Việt chạy trên máy bạn, nhiều giọng để chọn, kèm mức tốc độ đọc, nhạc nền và phụ đề. Kịch bản do AI viết, bạn chọn DeepSeek, OpenAI hoặc Google Gemini tuỳ cấu hình. Cần hỏi thêm thì nhắn Zalo hoặc WhatsApp 0326012999.',
    },
  ],
};

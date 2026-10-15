/**
 * Blog post — "Giọng đọc tiếng Việt cho video bán hàng".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 */
export default {
  slug: {
    vi: 'giong-doc-tieng-viet-cho-video-ban-hang',
    en: 'vietnamese-voiceover',
  },
  title: {
    vi: 'Giọng đọc tiếng Việt cho video bán hàng: đọc cho tự nhiên',
    en: 'Vietnamese voiceover for sales videos: sound like a person',
  },
  description: {
    vi: 'Giọng đọc tiếng Việt: ba câu hỏi để chọn giọng, mức tốc độ, chỗ ngắt nghỉ, cách viết lời để máy đọc nghe như người nói, và khi nào nên tự thu giọng mình.',
    en: 'Choosing a Vietnamese voiceover for sales videos: three questions, speed, pauses, how to write lines a machine reads naturally, and when to record your own.',
  },
  date: '2026-10-10',
  minutes: { vi: 7, en: 7 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: 'Giọng đọc đều đều là lý do rất nhiều video bán hàng bị lướt qua, dù hình đẹp và nội dung đúng. Bài này nói cách chọn giọng, cách chỉnh tốc độ và ngắt nghỉ, và cách viết lời thoại để máy đọc nghe như người nói.',
    en: 'A flat voice is why plenty of sales videos get scrolled past even when the footage is fine and the content is right. This is how to pick a voice, set the pace and the pauses, and write lines that a machine reads like a person talking.',
  },
  body: {
    vi: [
      { h2: 'Người xem quên mặt bạn, quên tên sản phẩm, nhưng nhớ giọng đã nói với họ' },
      {
        p: 'Trong một video 30 giây, giọng đọc là thứ duy nhất chạy từ đầu tới cuối. Nó quyết định video nghe như một người đang tư vấn hay như một bản tin đọc từ giấy.\n\nĐiều này càng đúng với video dài hơn một phút. Khi lời đọc không có chỗ lên, chỗ xuống, người xem không rời đi vì ghét nội dung — họ rời đi vì không có gì giữ tai họ lại.',
      },
      { h2: 'Ba câu hỏi phải trả lời trước khi nghe thử một giọng' },
      {
        ul: [
          'Ai là người mua? Nếu khách của bạn là mẹ có con nhỏ, một giọng nữ trẻ đọc nhanh thường hợp hơn một giọng nam trầm. Nếu bạn bán đồ câu cá cho đàn ông trung niên, giọng nam trầm lại dễ được tin hơn.',
          'Bạn muốn người xem thấy mình đang nghe ai? Một người bán hàng quen, một chuyên gia, hay một người bạn. Ba kiểu này cho ba giọng khác nhau, và bạn nên chọn một kiểu rồi giữ nó cho cả kênh.',
          'Giọng đó chịu được nghe lặp lại không? Đây là câu ít ai hỏi và cũng là câu quan trọng nhất. Bạn sẽ phải nghe giọng này hàng trăm lần khi dựng video. Nếu nghe ba lần đã thấy mệt, hãy đổi.',
        ],
      },
      { h2: 'Nhanh hơn mức mặc định một chút thì tỉnh, nhanh hơn nữa thì mất người xem' },
      {
        p: 'Mức mặc định thường là 1.0. Với video bán hàng trên điện thoại, đọc nhanh hơn một chút — khoảng 1.05 đến 1.1 — thường nghe tỉnh và dễ theo hơn, nhất là khi người xem đang lướt.\n\nNhưng có một giới hạn: nếu mức đọc nhanh tới mức bạn phải tập trung mới nghe kịp, người xem cũng vậy, và họ sẽ lướt. Cách kiểm tra rất đơn giản: phát video một lần trong lúc bạn đang làm việc khác. Nếu vẫn nghe hiểu mà không cần nhìn màn hình, tốc độ đó ổn.\n\nĐừng tăng tốc độ để nhét thêm lời vào video. Muốn nói thêm thì cắt bớt ý khác.',
      },
      { h2: 'Dấu câu bạn gõ chính là nhịp đọc của máy' },
      {
        ul: [
          'Dấu phẩy là một nhịp nghỉ ngắn, dấu chấm là một nhịp dài. Máy đọc theo đúng dấu câu bạn gõ, nên dấu câu ở đây là chỉ dẫn cho nhịp đọc, không phải chuyện hình thức.',
          'Câu dài quá hai mươi lăm chữ thì nên tách. Một câu dài hai dòng khi đọc lên sẽ không có chỗ thở, và nghe như máy đọc số.',
          'Chỗ cần nhấn: con số, lợi ích chính, và câu nói về điều người xem đang gặp. Cách nhấn dễ nhất với giọng máy là tách ý đó thành một câu riêng, ngắn, đứng một mình.',
          'Tránh ngoặc đơn và gạch ngang trong lời thoại. Chúng tạo ra những đoạn ngắt kỳ lạ mà bạn khó lường trước khi nghe lại.',
          'Xuống dòng giữa hai ý lớn để lấy một khoảng nghỉ trước khi sang ý mới. Với video bán hàng, khoảng nghỉ đúng chỗ đáng giá hơn một câu nói thêm.',
        ],
      },
      { h2: 'Giọng đều đều không sai thông tin, nó chỉ không nói chỗ nào quan trọng' },
      {
        p: 'Người nghe dựa vào sự lên xuống của giọng để biết khi nào cần chú ý, giống như dựa vào dấu câu khi đọc. Khi mọi câu đều được đọc giống nhau, người xem xếp video vào loại nội dung để nền, rồi chuyển sang việc khác mà không cần quyết định gì.\n\nĐó là lý do một video có nội dung tốt vẫn có thể có lượt xem thấp: người ta không rời đi vì ghét, họ chỉ không ở lại.',
      },
      {
        note: 'Đọc lên là thấy khác ngay. Câu gốc: "Sản phẩm này có thiết kế nhỏ gọn, tiện lợi và giá cả phải chăng, phù hợp với mọi gia đình." Câu viết lại: "Nó nhỏ, để vừa góc bếp. Chén úp xuống là ráo nước. Giá để dưới link." Câu thứ hai có câu ngắn, có chi tiết cụ thể và có chỗ để giọng nhấn — cùng một thông tin, nghe khác hẳn. Nếu video của bạn đang bị lướt qua, hãy sửa lời thoại trước khi đi tìm giọng khác.',
      },
      { h2: 'Lời thoại viết theo lối văn viết là lời thoại bị đọc sai' },
      {
        ul: [
          'Câu ngắn, mỗi câu một ý. Đây là luật quan trọng nhất, và cũng là luật hay bị phá nhất khi bạn viết theo thói quen viết văn.',
          'Viết đủ chữ, đừng viết tắt. "sp", "km", "đt", "ko" sẽ bị đọc sai hoặc đọc thành chữ cái rời rạc. Mười giây tiết kiệm khi gõ không đáng so với một video nghe sai.',
          'Tránh ký hiệu trong lời thoại: dấu phần trăm, dấu và, dấu cộng, đơn vị viết tắt. Viết hết ra chữ. Phần trăm thì viết thành "phần trăm".',
          'Từ khó đọc thì thay bằng từ dễ. Từ ngoại lai không có cách đọc thống nhất nên được thay bằng từ tiếng Việt, hoặc viết theo cách bạn muốn máy đọc.',
          'Đọc to lên trước khi dựng. Chỗ nào bạn phải dừng lại để lấy hơi là chỗ máy cũng sẽ đọc sai nhịp.',
        ],
      },
      { h2: 'Khi giọng bạn là một phần của sản phẩm thì nên tự thu' },
      {
        p: 'Nên tự thu khi bạn bán đồ cho khách quen, khi bạn là người trực tiếp tư vấn, hoặc khi bạn bán bằng sự tin cậy cá nhân. Một giọng thật, kể cả chưa tròn vành, nhiều khi thuyết phục hơn một giọng máy hoàn hảo.\n\nCách này không hợp nếu bạn cần ra số lượng lớn trong thời gian ngắn, hoặc nếu bạn nghe lại giọng mình và thấy không tự nhiên tới mức không dám đăng. Khi đó, hãy để giọng máy đọc phần thân video và chỉ tự thu phần mở đầu — hai giây đầu bằng giọng thật thường đã đủ để người xem thấy có một người đang nói với họ.',
      },
    ],
    en: [
      { h2: 'Viewers forget your face and the product name, but they remember the voice' },
      {
        p: 'In a 30-second video, the voice is the only thing that runs from the first frame to the last. It decides whether the video sounds like somebody advising you or like a bulletin read off a page.\n\nThat goes double past one minute. When the read has no rise and no fall, people do not leave because they dislike the content — they leave because nothing is holding their ear.',
      },
      { h2: 'Three questions to answer before you audition a voice' },
      {
        ul: [
          'Who is buying? If your customers are mothers with small children, a younger female voice reading briskly usually fits better than a deep male one. If you sell fishing gear to middle-aged men, the deep male voice is easier to trust.',
          'Who should the viewer feel they are listening to? A familiar seller, an expert, or a friend. Those are three different voices, and you should pick one and keep it across the channel.',
          'Can you stand hearing it again and again? This is the question nobody asks and the one that matters most. You will hear this voice hundreds of times while building videos. If three listens already tire you, change it.',
        ],
      },
      { h2: 'A little faster than default sounds awake; much faster loses people' },
      {
        p: 'The default is usually 1.0. For sales videos on a phone, a little quicker — around 1.05 to 1.1 — usually sounds more alert and is easier to follow, especially when the viewer is scrolling.\n\nThere is a ceiling. If the pace is fast enough that you have to concentrate to keep up, so does the viewer, and they scroll. The test is simple: play the video once while you are doing something else. If you can still follow it without looking at the screen, the speed is fine.\n\nDo not raise the speed to fit more words in. If you want to say more, cut something else.',
      },
      { h2: 'The punctuation you type is the pacing the voice reads' },
      {
        ul: [
          'A comma is a short pause, a full stop is a longer one. The voice reads the punctuation exactly as you type it, so it is an instruction for the read, not a formatting detail.',
          'Any sentence over about twenty-five words should be split. A two-line sentence has nowhere to breathe, and it sounds like a machine reading numbers.',
          'Where to add emphasis: numbers, the main benefit, and the line about what the viewer is dealing with. The easiest way to push a machine voice is to break that idea into its own short sentence and let it stand alone.',
          'Avoid brackets and dashes in the script. They produce odd breaks you cannot predict until you hear the result.',
          'Put a line break between two big ideas to buy a pause before the next one. In a sales video, a pause in the right place is worth more than another sentence.',
        ],
      },
      { h2: 'A flat read is not wrong about the facts, it just never says what matters' },
      {
        p: 'Listeners use the rise and fall of a voice to know when to pay attention, the same way they use punctuation when reading. When every sentence is delivered the same way, the viewer files the video under background and moves on without deciding anything.\n\nThat is how a video with good content still gets few views. People did not leave because they hated it. They just never stayed.',
      },
      {
        note: 'Read these two out loud and the difference is immediate. Original: "This product features a compact design, convenient use and an affordable price, suitable for every family." Rewritten: "It is small, so it fits in the corner. Turn a bowl upside down and it dries. Price is at the link." The second one has short sentences, concrete detail and somewhere for the voice to push. Same information, completely different listen. If your videos are being scrolled past, fix the script before you go shopping for another voice.',
      },
      { h2: 'A script written like prose is a script the voice gets wrong' },
      {
        ul: [
          'Short sentences, one idea each. This is the most important rule and the one most often broken by people who write well.',
          'Write words out. Abbreviations get misread or spelled out letter by letter. Ten seconds saved while typing is not worth a video that sounds wrong.',
          'No symbols in the script: percent signs, ampersands, plus signs, short units. Write them as words. "Phần trăm", not the symbol.',
          'Swap hard words for easy ones. Foreign words with no settled pronunciation should be replaced with Vietnamese, or spelled the way you want them read.',
          'Read it aloud before you build. Anywhere you have to stop for breath is a place the voice will break the rhythm too.',
        ],
      },
      { h2: 'Record your own voice when your voice is part of the product' },
      {
        p: 'Record yourself when you sell to regular customers, when you are the person who answers questions, or when the sale runs on personal trust. A real voice, even an imperfect one, often persuades better than a flawless machine.\n\nIt stops being the right call when you need volume quickly, or when you hear yourself back and it sounds so unnatural that you would not post it. In that case let the machine read the body of the video and record only the opening — two seconds in your own voice is usually enough for the viewer to feel that a person is talking to them.',
      },
    ],
  },
  faq: {
    vi: [
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
    en: [
      {
        q: 'Does a machine voice make the video sound fake?',
        a: 'It sounds like a machine when you hand it a written sentence. The same voice reading a short line with clear punctuation and a place to push sounds completely different. Most of the problem lives in the script, not the voice.',
      },
      {
        q: 'One voice for the whole channel, or a different one per video?',
        a: 'Keep one voice for most videos so people recognise you while scrolling. Change it when you change audience or change the kind of content. What to avoid is a new voice every video — then the channel has nothing to be remembered by.',
      },
      {
        q: 'Do male or female voices sell better?',
        a: 'There is no general answer, and do not pick by what most people do. Pick by who is buying and what you are selling. The only way to know is to make two versions of the same video with different voices, post them a few days apart, and compare your own views and clicks.',
      },
      {
        q: 'Can AutoReel do Vietnamese voices on my own machine?',
        a: 'Yes. AutoReel has Vietnamese voices that run on your computer, several to choose from, with a speed setting, background music and subtitles. The script is written by AI — you pick DeepSeek, OpenAI or Google Gemini depending on your setup. If you want to ask something, message Zalo or WhatsApp on 0326012999.',
      },
    ],
  },
};

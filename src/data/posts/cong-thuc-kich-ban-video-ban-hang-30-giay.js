/**
 * Blog post — "Công thức kịch bản video bán hàng 30 giây".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 */
export default {
  slug: {
    vi: 'cong-thuc-kich-ban-video-ban-hang-30-giay',
    en: '30-second-sales-script',
  },
  title: {
    vi: 'Kịch bản video bán hàng 30 giây: năm phần, mốc giây cụ thể',
    en: 'A 30-second sales script: five parts, second by second',
  },
  description: {
    vi: 'Kịch bản 30 giây chia theo năm mốc giây: mở đầu, vấn đề, sản phẩm, bằng chứng, lời kêu gọi, kèm một kịch bản đầy đủ và ba lỗi hay gặp.',
    en: 'How to split a 30-second sales video into five timed beats — hook, problem, product, proof, call to action — plus a full example script and three mistakes.',
  },
  date: '2026-10-10',
  minutes: { vi: 6, en: 6 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: 'Ba mươi giây không nhiều, nhưng đủ để mất người xem ở giây thứ tư. Bài này chia 30 giây thành năm phần có mốc giây cụ thể, viết ra một kịch bản đầy đủ, và chỉ ra ba lỗi khiến video bán hàng không bán được.',
    en: 'Thirty seconds is not much, but it is enough room to lose a viewer at second four. Here is how to split it into five parts with real timings, a full script written out, and the three mistakes that keep a sales video from selling.',
  },
  body: {
    vi: [
      { h2: 'Ba mươi giây là độ dài dễ làm nhất và cũng dễ xem hết nhất' },
      {
        p: 'Nó đủ để nói một vấn đề, một cách giải quyết và một lời mời. Không đủ để kể lể, giới thiệu bản thân hay đi vòng vo.\n\nNếu bạn mới làm, hãy bám đúng 30 giây trong khoảng mười video đầu. Khi đã quen nhịp, bạn có thể giãn lên 45 giây với những sản phẩm cần giải thích, hoặc rút xuống 15 giây khi video chỉ để nhắc lại một món khán giả đã biết.',
      },
      { h2: 'Chia 30 giây thành năm phần, mỗi phần một việc' },
      {
        ul: [
          '0 đến 3 giây — mở đầu. Nói thẳng cái người xem nhận được, hoặc cái đang làm họ khó chịu. Một câu, không chào hỏi.',
          '3 đến 8 giây — vấn đề. Nói rõ chuyện đó xảy ra khi nào và với ai. Càng cụ thể càng tốt: không phải "bếp bừa" mà "chén úp trên kệ nhựa để lâu bị ố".',
          '8 đến 18 giây — sản phẩm. Cho thấy món đó là gì và nó giải quyết vấn đề bằng cách nào. Đây là phần dài nhất, và cũng là phần cần hình ảnh thật nhất.',
          '18 đến 25 giây — bằng chứng. Một chi tiết khiến người xem tin: cận cảnh chất liệu, một lần dùng thật, một điểm ai nhìn cũng thấy. Kèm một điểm chưa hợp lý nếu có.',
          '25 đến 30 giây — lời kêu gọi. Một câu, nói rõ người xem bấm vào đâu. Nhắc lại lần nữa trong phần chú thích.',
        ],
      },
      {
        p: 'Tỉ trọng giữa các phần quan trọng hơn bạn tưởng. Nếu phần sản phẩm chiếm mười tám giây còn phần bằng chứng chỉ có hai giây, video nghe như một lời khen dài. Ngược lại, nếu phần mở đầu mất bảy giây, bạn đã mất một phần người xem trước khi kịp nói tới sản phẩm.',
      },
      { h2: 'Đọc một kịch bản viết đủ ra sẽ thấy mỗi dòng chỉ làm một việc' },
      {
        p: 'Kịch bản dưới đây viết cho một chiếc kệ úp chén inox. Đọc theo đúng mốc giây, và để ý mỗi dòng chỉ làm một việc.',
      },
      {
        ol: [
          '0 đến 3 giây: "Chén úp trên kệ nhựa để lâu là ố vàng, có cái còn mốc."',
          '3 đến 8 giây: "Nhà nào rửa xong úp chồng lên nhau cũng gặp, nhất là khi trời nồm."',
          '8 đến 18 giây: "Kệ này bằng inox, có khay hứng nước ở dưới. Rửa xong cứ úp lên, nước chảy xuống khay, không chảy ra bàn."',
          '18 đến 25 giây: "Khay dưới tháo ra rửa riêng được, nên bạn không phải bê cả kệ đi."',
          '25 đến 30 giây: "Kệ để ở link dưới video, bấm vào là ra."',
        ],
      },
      {
        note: 'Kịch bản trên là mẫu để học nhịp, không phải lời để đọc nguyên. Mọi chi tiết về sản phẩm — chất liệu, kích thước, số tầng, giá — phải lấy từ đúng trang sản phẩm bạn đang bán. Và mọi câu kể trải nghiệm phải là chuyện bạn thật sự đã làm; nếu bạn chưa dùng món đó thì đừng kể, chỉ nói những gì bạn kiểm được.',
      },
      { h2: 'Ba lỗi hay gặp, và cả ba đều sửa được trong một lần dựng' },
      {
        ul: [
          'Nói quá nhiều trong năm giây đầu. Nhồi tên sản phẩm, giá, khuyến mãi và cả lời chào vào ba giây khiến không câu nào đọng lại. Ba giây đầu chỉ nên có một ý.',
          'Không có lý do để tin. Người xem nghe "tốt lắm, bền lắm" mà không thấy gì cụ thể. Thay bằng một chi tiết nhìn thấy được: cận cảnh mối hàn, cảnh tháo khay, cảnh úp chén thật.',
          'Kết thúc lửng. Video dừng ở câu cuối của phần sản phẩm và người xem không biết phải làm gì. Luôn có một câu nói rõ việc cần làm, và nói rõ làm ở đâu.',
        ],
      },
      { h2: 'Đọc thử bằng đồng hồ, rồi cắt chứ đừng đọc nhanh hơn' },
      {
        p: 'Bấm giây và đọc to lên. Ở tốc độ đọc bình thường, ba mươi giây thường rơi vào khoảng bảy mươi đến tám mươi lăm chữ tiếng Việt — con số này thay đổi theo tốc độ của từng người, nên hãy tự đọc một lần bằng đồng hồ của bạn.\n\nNếu dài hơn, đừng đọc nhanh hơn. Hãy cắt. Chỗ nên cắt trước là các từ đệm như "thì", "mà", "kiểu", và những câu giải thích lại điều vừa nói. Một video 30 giây nói chậm mà tròn ý luôn tốt hơn một video 35 giây đọc dồn.',
      },
      { h2: 'Cách này không hợp nếu sản phẩm cần giải thích nhiều bước' },
      {
        p: 'Đồ điện tử có nhiều chế độ, hoặc món cần hướng dẫn lắp, thường không nhét vừa ba mươi giây. Lúc đó nên làm một video dài hơn, rồi cắt thành vài video ngắn, mỗi cái nói một điểm.\n\nNó cũng không hợp nếu bạn bán thứ được mua theo cảm xúc ngay lập tức, như đồ ăn vặt hay phụ kiện rẻ. Những món đó thường bán bằng hình ảnh và số lượng cảnh, không bằng lập luận trong ba mươi giây.',
      },
    ],
    en: [
      { h2: 'Thirty seconds is the easiest length to make and the easiest to finish' },
      {
        p: 'It is enough for one problem, one fix and one ask. It is not enough for backstory, an introduction, or getting to the point slowly.\n\nIf you are new to this, hold to 30 seconds for your first ten videos. Once the rhythm is familiar you can stretch to 45 seconds for products that need explaining, or drop to 15 when the video is only reminding people of something they already know.',
      },
      { h2: 'Split the 30 seconds into five parts, one job each' },
      {
        ul: [
          '0 to 3 seconds — the hook. Say what the viewer gets, or what is annoying them right now. One sentence, no greeting.',
          '3 to 8 seconds — the problem. Say when it happens and to whom. Be specific: not "a messy kitchen" but "dishes left on a plastic rack go yellow".',
          '8 to 18 seconds — the product. Show what it is and how it solves the problem. This is the longest part, and the one that needs real footage most.',
          '18 to 25 seconds — the proof. One detail that makes them believe it: a close-up of the material, a real use, something anyone can see. Add one honest drawback if there is one.',
          '25 to 30 seconds — the ask. One sentence saying where to tap. Repeat it in the caption.',
        ],
      },
      {
        p: 'How you divide the time matters more than you think. Give the product eighteen seconds and the proof two, and the video sounds like one long compliment. Spend seven seconds on the hook, and you have lost part of the audience before you reach the product at all.',
      },
      { h2: 'Read a script written out in full and you see each line does one job' },
      {
        p: 'The script below is for a stainless steel dish rack, and it is meant to be spoken in Vietnamese. The lines are given here in English so you can follow the timings; read it against the clock and notice that every line does one thing.',
      },
      {
        ol: [
          '0 to 3 seconds: "Dishes left on a plastic rack go yellow after a while. Some of them go mouldy."',
          '3 to 8 seconds: "Anyone who stacks them wet after washing knows this, especially in damp weather."',
          '8 to 18 seconds: "This one is stainless steel, with a drip tray underneath. Wash, turn the bowl over, water runs into the tray instead of onto the counter."',
          '18 to 25 seconds: "The tray slides out so you can wash it on its own, without carrying the whole rack to the sink."',
          '25 to 30 seconds: "The rack is linked below the video. Tap it and you are there."',
        ],
      },
      {
        note: 'That script is a model for the rhythm, not lines to read out. Every product detail — material, size, how many tiers, price — has to come from the actual product page you are selling. And every line about experience has to be something you really did. If you have not used the thing, do not pretend: say only what you can check.',
      },
      { h2: 'Three common mistakes, and all three are fixed in one edit' },
      {
        ul: [
          'Talking too much in the first five seconds. Product name, price, promotion and a greeting all stuffed into three seconds leaves nothing sticking. The first three seconds should carry one idea.',
          'Nothing to believe. The viewer hears "it is great, it lasts" and sees nothing specific. Replace it with something visible: a close-up of the weld, the tray coming out, a bowl actually being set down.',
          'A flat ending. The video stops on the last line of the product section and the viewer does not know what to do. Always give one sentence that says what to do, and where to do it.',
        ],
      },
      { h2: 'Time yourself reading it, then cut — do not read faster' },
      {
        p: 'Start a timer and read it out loud. At a normal pace, thirty seconds holds roughly seventy to eighty-five Vietnamese words — that varies with the person, so read yours against your own clock once.\n\nIf it runs long, do not speed up. Cut. Start with filler: "thì", "mà", "kiểu", and any sentence that explains the sentence before it. A slow 30 seconds that lands beats a rushed 35 every time.',
      },
      { h2: 'This does not work when the product needs several steps explained' },
      {
        p: 'Electronics with a lot of modes, or anything that has to be assembled, rarely fits in thirty seconds. Make a longer video first, then cut it into several shorts, one point each.\n\nIt also does not work for things bought on impulse, like snacks or cheap accessories. Those sell on the image and the number of shots, not on an argument you make in thirty seconds.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Video 30 giây có đủ để bán hàng không?',
        a: 'Đủ cho một vấn đề và một cách giải quyết. Không đủ để so sánh nhiều sản phẩm hoặc giải thích cơ chế. Nếu bạn thấy phải nhồi ba ý vào ba mươi giây, hãy tách thành ba video.',
      },
      {
        q: 'Mở đầu thế nào để người xem không lướt qua?',
        a: 'Nói vào đúng cái đang làm họ khó chịu, bằng câu ngắn nhất có thể. Đừng chào, đừng giới thiệu kênh, đừng nói "hôm nay mình sẽ". Hãy xem lại vài video đang lên và để ý họ nói gì trong hai giây đầu.',
      },
      {
        q: 'Có nên đọc giá trong video không?',
        a: 'Nên, nếu giá là điểm mạnh; và phải đọc đúng giá đang bán tại thời điểm đăng. Nếu giá thay đổi thường xuyên, hãy nói khoảng giá kèm câu "giá hiện tại xem ở link" để người xem bấm vào không thấy số khác.',
      },
      {
        q: 'AutoReel có viết kịch bản theo công thức này không?',
        a: 'AutoReel dùng AI viết kịch bản cho từng sản phẩm theo cấu trúc mở, thân, kết, và bạn đọc lại sửa được trước khi dựng. Phần nhịp và số giây vẫn là việc bạn chỉnh, vì chỉ bạn biết khách của mình nghe thế nào. Cần hỏi thêm thì nhắn Zalo hoặc WhatsApp 0326012999.',
      },
    ],
    en: [
      {
        q: 'Is 30 seconds enough to sell anything?',
        a: 'Enough for one problem and one fix. Not enough to compare several products or explain how something works. If you feel you have to cram three ideas into thirty seconds, make three videos instead.',
      },
      {
        q: 'How do I open so people do not scroll past?',
        a: 'Start on the thing that is annoying them, in the shortest sentence you can manage. No greeting, no channel intro, no "today I am going to". Watch a few videos that are doing well and note what they say in the first two seconds.',
      },
      {
        q: 'Should I say the price in the video?',
        a: 'Yes, if the price is a selling point — and it has to be the price on the day you post. If the price moves around, give a range and add "current price at the link", so nobody clicks through and finds a different number.',
      },
      {
        q: 'Does AutoReel write scripts to this formula?',
        a: 'AutoReel uses AI to write a script per product with a beginning, a middle and an end, and you can read and edit it before the video is built. The pacing and the second counts stay yours to adjust, because only you know how your customers talk. If you want to ask something, message Zalo or WhatsApp on 0326012999.',
      },
    ],
  },
};

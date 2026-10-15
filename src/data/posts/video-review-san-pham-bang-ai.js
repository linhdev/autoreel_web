/**
 * Blog post — "Video review sản phẩm bằng AI".
 *
 * One file per post under `src/data/posts/`. The default export is the post's
 * whole content: `body` is a list of blocks (each block carries exactly one of
 * the keys `h2`, `p`, `ul`, `ol`, `note`) and `faq` is a list of question and
 * answer pairs. No markup anywhere — the renderer owns all styling.
 */
export default {
  slug: {
    vi: 'video-review-san-pham-bang-ai',
    en: 'ai-product-reviews',
  },
  title: {
    vi: 'Video review sản phẩm bằng AI: phần nào giao được cho máy',
    en: 'AI product reviews: which parts you can hand to the machine',
  },
  description: {
    vi: 'Video review sản phẩm bằng AI: máy lo kịch bản, giọng đọc, dựng hình và phụ đề, còn bạn phải kiểm giá, công dụng và mọi con số trước khi đăng.',
    en: 'AI product reviews: the machine handles the script, the voice, the edit and the subtitles — you still check the price, claims and every number before it goes out.',
  },
  date: '2026-10-10',
  minutes: { vi: 5, en: 5 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: 'Một video review bán được hàng không khó làm, nhưng rất dễ sai ở đúng những chỗ AI tỏ ra tự tin nhất. Bài này chia rõ phần nào giao cho máy, phần nào bạn phải tự kiểm, và một quy trình năm bước để ra video mà không phải nói dối khách.',
    en: 'A review video that sells is not hard to make, but it goes wrong in exactly the places AI sounds most confident. Here is what to hand to the machine, what you have to check yourself, and a five-step process that gets a video out without lying to your customers.',
  },
  body: {
    vi: [
      { h2: 'Người xem mở video review để tìm câu trả lời, không phải để nghe khen' },
      {
        p: 'Người xem không mở video review để nghe bạn khen sản phẩm. Trong đầu họ đang có một câu hỏi: cái này có hợp với mình không, và có đáng số tiền đó không. Video review tốt là video trả lời được câu hỏi đó trong thời gian ngắn nhất.\n\nVới video dọc đăng Shopee Video hoặc Facebook/Reels, độ dài hợp lý thường rơi vào khoảng 30 đến 60 giây. Ngắn hơn thì chưa kịp nói gì; dài hơn thì người xem đã trôi đi trước khi tới phần quan trọng nhất.',
      },
      {
        ul: [
          'Mở đầu bằng đúng vấn đề: hai giây đầu phải cho người xem biết video này nói về cái gì và nói cho ai.',
          'Có bằng chứng: cảnh quay thật sản phẩm, cận cảnh chi tiết, tình huống dùng thử. Lời nói không thay được hình ảnh.',
          'Nói cả nhược điểm. Một điểm chưa hợp lý khiến video đáng tin hơn mười lời khen.',
          'Nói giá và nơi mua, để người xem không phải tự đi tìm.',
          'Kết bằng một việc cụ thể: bấm vào link, xem mẫu khác, hoặc để lại câu hỏi.',
        ],
      },
      { h2: 'Máy viết, đọc và dựng nhanh hơn bạn — đó là phần lớn thời gian của một video' },
      {
        ul: [
          'Viết kịch bản từ thông tin sản phẩm: dựng bố cục mở, thân, kết, và chia lời thành từng câu ngắn để đọc.',
          'Đọc lời bằng giọng tiếng Việt, không cần bạn thu âm và không cần phòng kín.',
          'Dựng video và làm phụ đề: ghép ảnh, cảnh quay, nhạc, chữ trên và chữ dưới, logo theo một bộ nhận diện đặt trước.',
          'Cắt đoạn đáng chú ý từ một video dài thành video ngắn, và dịch video sang ngôn ngữ khác.',
          'Xử lý theo lô: cùng một sản phẩm ra nhiều phiên bản, hoặc một mẻ nhiều sản phẩm trong một lượt.',
        ],
      },
      { h2: 'Mọi con số và mọi lời hứa vẫn phải do bạn kiểm' },
      {
        note: 'Ba loại câu tuyệt đối không để AI tự viết: số liệu cụ thể (dung tích, trọng lượng, thời lượng pin, thời gian giao hàng), cam kết kết quả (trị hết, giảm ngay, bảo hành bao lâu), và mọi so sánh liên quan tới sức khoẻ. AI viết rất trôi chảy ở đúng những chỗ nó không có thông tin — đó là lý do nó nguy hiểm. Mọi con số và mọi lời hứa phải được bạn đối chiếu với trang sản phẩm hoặc hỏi thẳng nhà bán trước khi đăng.',
      },
      { h2: 'Năm bước, và bước viết lại bằng lời của bạn là bước không được bỏ' },
      {
        ol: [
          'Chọn sản phẩm và nguồn thông tin. Mở trang sản phẩm, đọc kỹ mô tả, xem đánh giá thật, ghi lại các thông số cần nói. Đây là nguyên liệu; máy chỉ sắp xếp lại chứ không tự biết thay bạn.',
          'Kiểm thông tin trước khi viết. Đối chiếu giá hiện tại, quà tặng, phí vận chuyển và tình trạng còn hàng. Nếu bạn dùng lại video review có sẵn của người khác, bước này phải làm chặt hơn: xem hết một lượt và ghi ra thông tin nào còn đúng, thông tin nào đã cũ.',
          'Viết lại bằng lời của bạn. Kể cả khi ý tưởng đến từ video của người khác, phần lời phải được viết lại theo cách bạn nói, với ví dụ của bạn. Giữ ý, đổi lời, đổi giọng đọc — đó là ranh giới giữa học hỏi và sao chép nguyên đoạn của người ta.',
          'Dựng video. Chọn ảnh hoặc cảnh quay thật, để máy đọc lời, thêm phụ đề và bộ nhận diện của bạn, rồi xem lại một lượt ở chế độ không tiếng để chắc rằng hình khớp với lời.',
          'Xem lại và đăng. Kiểm tra lần cuối giá, tên sản phẩm và link đã gắn đúng sản phẩm chưa. Với những món nhạy cảm như thực phẩm chức năng, mỹ phẩm hay đồ cho trẻ nhỏ, hãy nhờ người có chuyên môn đọc lại trước khi lên sóng.',
        ],
      },
    ],
    en: [
      { h2: 'People open a review video for an answer, not for praise' },
      {
        p: 'Nobody opens a review video to hear you admire a product. They have one question in their head: is this right for me, and is it worth the money. A good review video answers that question in the shortest possible time.\n\nFor vertical video on Shopee Video or Facebook/Reels, the useful length is usually 30 to 60 seconds. Shorter and you have not said anything; longer and people drift away before the part that matters most.',
      },
      {
        ul: [
          'Open on the actual problem: the first two seconds have to tell the viewer what this video is about and who it is for.',
          'Show evidence: real footage of the product, close-ups of the details, a situation where it gets used. Talking does not replace showing.',
          'Name a downside. One honest catch makes a video more believable than ten compliments.',
          'Say the price and where to buy, so the viewer does not have to go looking.',
          'End with one specific action: tap the link, look at another model, or leave a question.',
        ],
      },
      { h2: 'The machine writes, reads and edits faster than you — and that is most of a video’s work' },
      {
        ul: [
          'Writing the script from the product details: building the opening, the middle and the close, and breaking the words into short sentences you can read out.',
          'Reading it in a Vietnamese voice, with no recording session and no need for a quiet room.',
          'Building the video and the subtitles: assembling photos, footage, music, text top and bottom, and your logo from a set style.',
          'Cutting the interesting parts out of a long video, and translating video into another language.',
          'Working in batches: several versions of one product, or a whole set of different products in one run.',
        ],
      },
      { h2: 'Every number and every promise still has to be checked by you' },
      {
        note: 'Three kinds of sentence AI must never write for you: specific figures (capacity, weight, battery life, delivery time), promises about results (cures it, fixes it right away, warranty length), and any comparison that touches health. AI writes most fluently exactly where it has no information — that is what makes it dangerous. Every number and every promise has to be checked against the product page, or asked of the seller directly, before the video goes out.',
      },
      { h2: 'Five steps, and rewriting the words yourself is the one you cannot skip' },
      {
        ol: [
          'Pick the product and your sources. Open the product page, read the description properly, read the real reviews, write down the figures you need to mention. This is the raw material; the machine rearranges it, it does not know things on your behalf.',
          'Check the facts before writing. Confirm the current price, any free gift, the shipping fee and whether it is still in stock. If you are reusing somebody else’s review video, do this harder: watch it all the way through and write down which details still hold and which are out of date.',
          'Rewrite it in your own words. Even when the idea comes from someone else’s video, the words have to be written the way you talk, with your examples. Keep the point, change the wording, change the voice — that is the line between learning from someone and copying their paragraph.',
          'Build the video. Choose real photos or footage, have the machine read the script, add subtitles and your own look, then watch it back once with the sound off to be sure the picture matches the words.',
          'Review and post. Do a last check on the price, the product name, and whether the link points at the right product. For sensitive things — supplements, cosmetics, anything for small children — have someone qualified read it before it goes out.',
        ],
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Dùng AI làm video review có bị nền tảng đánh dấu là nội dung AI không?',
        a: 'Không có quy định nào cấm dùng AI để viết kịch bản hay đọc lời. Thứ bị siết là nội dung: thông tin sai, cam kết quá mức, hoặc nhiều video giống nhau đăng tràn lan. Bạn là người chịu trách nhiệm về video mình đăng, nên hãy kiểm thông tin trước.',
      },
      {
        q: 'Tôi không quay được sản phẩm thì làm video kiểu gì?',
        a: 'Bạn có thể dùng ảnh sản phẩm, ảnh từ đơn hàng của chính bạn, hoặc quay màn hình lúc đọc đánh giá. Cách này vẫn cho người xem thấy thứ thật, miễn là bạn nói rõ đâu là ảnh sản phẩm và đâu là trải nghiệm của bạn.',
      },
      {
        q: 'Làm sao để AI không bịa thông tin sản phẩm?',
        a: 'Không có cách nào chắc chắn tuyệt đối ngoài việc bạn đọc lại trước khi đăng. Hãy đưa thông tin thật vào kịch bản, rồi tự soát từng con số và từng lời hứa với trang sản phẩm. Máy viết nhanh, nhưng người kiểm mới là người bảo đảm video không sai.',
      },
      {
        q: 'AutoReel giúp được gì trong việc này?',
        a: 'AutoReel là phần mềm chạy trên máy của bạn: từ link sản phẩm, nó lo phần viết kịch bản, đọc lời tiếng Việt, dựng video, thêm phụ đề và bộ nhận diện, rồi có thể đăng lên Shopee Video hoặc Facebook/Reels. Bạn có thể xem thêm ở autoreelvn.com hoặc nhắn Zalo 0326012999.',
      },
    ],
    en: [
      {
        q: 'Will a platform mark an AI-made review as AI content?',
        a: 'Nothing forbids using AI to write a script or read the voice. What gets policed is the content: false information, promises you cannot keep, or the same video posted everywhere. You are responsible for what you publish, so check the facts first.',
      },
      {
        q: 'What if I cannot film the product myself?',
        a: 'You can use the product photos, photos from your own orders, or a screen recording while you read the reviews. That still shows people something real, as long as you are clear about which pictures are the product’s and which experience is yours.',
      },
      {
        q: 'How do I stop AI inventing product details?',
        a: 'There is no certainty except reading it back before you post. Feed the real details into the script, then check every figure and every promise against the product page. The machine writes fast, but the person checking is what keeps the video honest.',
      },
      {
        q: 'What does AutoReel do in all this?',
        a: 'AutoReel is software that runs on your own computer: from a product link it writes the script, reads the voice in Vietnamese, builds the video, adds subtitles and your own look, and can then post to Shopee Video or Facebook/Reels. You can read more at autoreelvn.com or message Zalo on 0326012999.',
      },
    ],
  },
};

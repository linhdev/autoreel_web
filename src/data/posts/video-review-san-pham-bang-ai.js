/**
 * Blog post — "Video review sản phẩm bằng AI".
 *
 * One file per post under `src/data/posts/`. The default export is the post's
 * whole content: `body` is a list of blocks (each block carries exactly one of
 * the keys `h2`, `p`, `ul`, `ol`, `note`) and `faq` is a list of question and
 * answer pairs. No markup anywhere — the renderer owns all styling.
 */
export default {
  slug: 'video-review-san-pham-bang-ai',
  title: 'Video review sản phẩm bằng AI: phần nào AI làm được',
  description:
    'Video review sản phẩm bằng AI: AI lo kịch bản, giọng đọc, dựng video và phụ đề, còn bạn phải kiểm giá, công dụng và mọi con số trước khi đăng.',
  date: '2026-10-10',
  minutes: 5,
  tag: 'Hướng dẫn',
  lead:
    'Một video review bán được hàng không khó làm, nhưng rất dễ sai ở đúng những chỗ AI tỏ ra tự tin nhất. Bài này chia rõ phần nào giao cho máy, phần nào bạn phải tự kiểm, và một quy trình 5 bước để ra video mà không phải nói dối khách.',
  body: [
    { h2: 'Một video review tốt cần gì' },
    {
      p:
        'Người xem không mở video review để nghe bạn khen sản phẩm. Trong đầu họ đang có một câu hỏi: cái này có hợp với mình không, và có đáng số tiền đó không. Video review tốt là video trả lời được câu hỏi đó trong thời gian ngắn nhất.\n\nVới video dọc đăng Shopee Video hoặc Facebook/Reels, độ dài hợp lý thường rơi vào khoảng 30 đến 60 giây. Ngắn hơn thì chưa kịp nói gì, dài hơn thì người xem đã trôi đi trước khi tới phần quan trọng nhất.',
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
    { h2: 'AI làm được phần nào' },
    {
      ul: [
        'Viết kịch bản từ thông tin sản phẩm: dựng bố cục mở, thân, kết và chia lời thành từng câu ngắn để đọc.',
        'Đọc lời bằng giọng tiếng Việt, không cần bạn thu âm và không cần phòng kín.',
        'Dựng video và làm phụ đề: ghép ảnh, cảnh quay, nhạc, chữ trên và dưới, logo theo một bộ nhận diện đặt trước.',
        'Cắt đoạn đáng chú ý từ video dài thành video ngắn, và dịch video sang ngôn ngữ khác.',
        'Xử lý theo lô: cùng một sản phẩm ra nhiều phiên bản, hoặc một mẻ nhiều sản phẩm trong một lượt.',
      ],
    },
    { h2: 'Phần bạn phải tự kiểm, không giao cho AI' },
    {
      note:
        'Ba loại câu tuyệt đối không để AI tự viết: số liệu cụ thể (dung tích, trọng lượng, thời lượng pin, thời gian giao hàng), cam kết kết quả (trị hết, giảm ngay, bảo hành bao lâu), và mọi so sánh liên quan tới sức khoẻ. AI viết rất trôi chảy ở đúng những chỗ nó không có thông tin, nên mọi con số và mọi lời hứa phải được bạn đối chiếu với trang sản phẩm hoặc hỏi thẳng nhà bán trước khi đăng.',
    },
    { h2: 'Quy trình 5 bước cho một video review bằng AI' },
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
  faq: [
    {
      q: 'Dùng AI làm video review có bị nền tảng đánh dấu là nội dung AI không?',
      a: 'Không có quy định cấm dùng AI để viết kịch bản hay đọc lời. Thứ bị siết là nội dung: thông tin sai, cam kết quá mức, hoặc nhiều video giống nhau đăng tràn lan. Bạn là người chịu trách nhiệm về video mình đăng, nên hãy kiểm thông tin trước.',
    },
    {
      q: 'Tôi không quay được sản phẩm thì làm video kiểu gì?',
      a: 'Bạn có thể dùng ảnh sản phẩm, ảnh từ đơn hàng của chính bạn, hoặc quay màn hình lúc đọc đánh giá. Cách này vẫn cho người xem thấy thứ thật, miễn là bạn nói rõ đâu là ảnh sản phẩm và đâu là trải nghiệm của bạn.',
    },
    {
      q: 'Làm sao để AI không bịa thông tin sản phẩm?',
      a: 'Không có cách nào chắc chắn tuyệt đối bằng cách đọc lại trước khi đăng. Hãy đưa thông tin thật vào kịch bản, rồi tự soát từng con số và từng lời hứa với trang sản phẩm. Máy viết nhanh, nhưng người kiểm mới là người bảo đảm video không sai.',
    },
    {
      q: 'AutoReel giúp được gì trong việc này?',
      a: 'AutoReel là phần mềm chạy trên máy của bạn: từ link sản phẩm, nó lo phần viết kịch bản, đọc lời tiếng Việt, dựng video, thêm phụ đề và bộ nhận diện, rồi có thể đăng lên Shopee Video hoặc Facebook/Reels. Bạn có thể xem thêm ở autoreelvn.com hoặc nhắn Zalo 0326012999.',
    },
  ],
};

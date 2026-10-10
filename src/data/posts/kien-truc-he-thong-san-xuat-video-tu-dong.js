/**
 * Blog post — "Kiến trúc một hệ thống sản xuất video tự động".
 *
 * Written at the architecture level: layers, principles and trade-offs, in the
 * words a customer needs — no file names, no libraries, no internal services.
 */
export default {
  slug: 'kien-truc-he-thong-san-xuat-video-tu-dong',
  title: 'Kiến trúc một hệ thống sản xuất video tự động',
  description:
    'Kiến trúc hệ thống sản xuất video tự động: năm tầng từ nhận nguồn tới theo dõi, vì sao phải tách tầng, và chỗ nào bắt buộc cần internet.',
  date: '2026-10-10',
  minutes: 5,
  tag: 'Công nghệ',
  lead:
    'Bài này giải thích một hệ thống làm video tự động được chia thành những tầng nào, vì sao phải chia như vậy, và phần nào chạy trên máy bạn còn phần nào buộc phải ra internet. Đọc xong bạn hiểu hệ thống vận hành ra sao mà không cần biết bên trong nó được viết bằng gì.',
  body: [
    { h2: 'Năm tầng của một dây chuyền làm video' },
    {
      p: 'Một hệ thống sản xuất video tự động, nói gọn, là một dây chuyền: nguyên liệu vào một đầu, video ra đầu kia. Nhìn từ ngoài nó trông như một nút bấm, nhưng bên trong luôn chia thành các tầng, mỗi tầng làm đúng một việc rồi trả kết quả cho tầng sau. Chia như vậy không phải để cho đẹp sơ đồ, mà để khi có chỗ hỏng thì biết hỏng ở đâu, và khi muốn đổi một thứ thì đổi đúng một chỗ.',
    },
    {
      ol: [
        'Nhận nguồn: một link sản phẩm, một video có sẵn, hay một chủ đề bạn gõ vào.',
        'Hiểu nội dung: đọc nguồn đó thành thông tin dùng được — sản phẩm là gì, lợi ích nào đáng nói, đoạn nào đáng giữ.',
        'Viết kịch bản: từ những thông tin trên, dựng thành lời thoại tiếng Việt có mở đầu, thân và kết.',
        'Dựng hình: ghép giọng đọc, hình ảnh, phụ đề, logo và template thành một file video hoàn chỉnh.',
        'Đăng và theo dõi: đẩy video lên từng nền tảng, rồi ghi lại cái gì đã đăng được, cái gì chưa.',
      ],
    },
    { h2: 'Vì sao phải tách tầng' },
    {
      p: 'Câu trả lời ngắn: vì mỗi tầng hỏng theo một kiểu khác nhau và thay đổi theo một nhịp khác nhau. Phần viết kịch bản phụ thuộc vào chất lượng câu chữ; phần dựng phụ thuộc vào máy; phần đăng phụ thuộc vào luật của nền tảng. Gộp cả ba vào một khối thì mỗi lần nền tảng đổi cách đăng, bạn phải chạm vào cả khâu dựng — và mọi thứ đang chạy tốt trước đó đều có nguy cơ hỏng theo.',
    },
    {
      ul: [
        'Tách tầng để thay một phần mà không phải làm lại phần khác.',
        'Tách tầng để biết lỗi nằm ở đâu: kịch bản dở, dựng lỗi, hay nền tảng từ chối.',
        'Tách tầng để chạy lại chỉ phần hỏng, thay vì làm lại từ đầu.',
        'Tách tầng để mỗi phần chạy đúng nhịp của nó: khâu nặng chạy chậm mà kỹ, khâu nhẹ chạy nhanh.',
      ],
    },
    { h2: 'Dữ liệu chảy một chiều' },
    {
      p: 'Trong một dây chuyền tử tế, dữ liệu chỉ đi một chiều: kết quả của tầng trước là đầu vào của tầng sau, và không có vòng quay ngược. Nghe có vẻ hiển nhiên, nhưng đây là quy tắc quan trọng nhất khi thiết kế.\n\nChảy một chiều cho bạn hai thứ. Thứ nhất, mỗi bước là một mốc kiểm tra: kịch bản xong thì giữ lại, giọng đọc xong thì giữ lại, nên sửa phụ đề không bắt bạn viết lại lời thoại. Thứ hai, khi kết quả cuối không như ý, bạn lần ngược theo đúng một đường để tìm bước làm sai, thay vì đoán.',
    },
    { h2: 'Chỗ nào chạy trên máy bạn, chỗ nào phải ra internet' },
    {
      ul: [
        'Trên máy bạn: dựng video, giọng đọc tiếng Việt, phụ đề, logo, template, và việc giữ file gốc lẫn thành phẩm. Đây là phần nặng nhất và cũng riêng tư nhất, nên nó ở lại chỗ bạn.',
        'Ra internet: nhờ AI viết kịch bản. Đây là việc cần một mô hình ngôn ngữ lớn, không phải thứ chạy gọn trong máy cá nhân, nên phần chữ đi ra theo nhà cung cấp AI bạn chọn — DeepSeek, OpenAI hoặc Google Gemini.',
        'Ra internet: bước đăng bài, vì dĩ nhiên phải gửi video lên nền tảng. Đây là bước duy nhất bắt buộc cần mạng trong cả dây chuyền.',
        'Không ra internet: danh sách sản phẩm, kịch bản đã viết, video đã dựng và lịch sử đăng bài. Những thứ này nằm trên máy bạn.',
      ],
    },
    { h2: 'Cái gì hệ thống cố tình không làm' },
    {
      p: 'Một kiến trúc tốt cũng là một danh sách những việc bị từ chối. Hệ thống không tự quyết định nội dung thay bạn: nó viết theo yêu cầu, còn đúng sai và hợp gu hay không vẫn do bạn duyệt. Nó không chạy mọi việc cùng lúc, vì mở hết chỉ làm mọi thứ chậm đi. Và nó không hứa đăng được lên nền tảng không cho phép, vì đó là chỗ phần mềm không thể tự quyết.\n\nNói cách khác: hệ thống lo phần lặp lại, bạn giữ phần phán đoán. Cách chia đó là lý do phần mềm chạy được lâu mà bạn không cần hiểu bên trong nó.',
    },
    {
      note: 'Nếu bạn muốn một dịch vụ chạy hoàn toàn trên mây, mở trình duyệt là dùng và không cần cài gì, thì kiến trúc này không phù hợp — nó được thiết kế để dữ liệu và phần nặng nằm trên máy bạn. Đổi lại, bạn không phải trả phí thuê hàng tháng và không phải tải video lên rồi tải về mỗi lần làm.',
    },
  ],
  faq: [
    {
      q: 'Hệ thống có tự quyết định nội dung video không?',
      a: 'Không. Hệ thống viết theo yêu cầu và dựng theo template bạn đặt, còn nội dung đúng hay sai, hợp gu hay không vẫn là bạn duyệt trước khi đăng.',
    },
    {
      q: 'Vì sao phần viết kịch bản cần internet mà phần dựng thì không?',
      a: 'Vì viết lời thoại cần một mô hình ngôn ngữ lớn chạy ở ngoài, còn dựng hình và giọng đọc tiếng Việt chạy gọn trên máy bạn. Khi mạng yếu, bạn vẫn dựng được video từ kịch bản đã có sẵn.',
    },
    {
      q: 'Dữ liệu của tôi đi ra ngoài ở những bước nào?',
      a: 'Chỉ phần chữ gửi cho nhà cung cấp AI bạn chọn để viết kịch bản, và phần video gửi lên nền tảng khi đăng bài. Video gốc, thành phẩm và danh sách sản phẩm nằm trên máy bạn.',
    },
    {
      q: 'Chia tầng như vậy có làm hệ thống chậm đi không?',
      a: 'Không đáng kể. Mỗi tầng thêm một bước bàn giao nhỏ, nhưng bù lại bạn chạy lại được đúng phần hỏng thay vì làm lại cả dây chuyền — khoản tiết kiệm đó lớn hơn nhiều.',
    },
  ],
};

/**
 * Blog post — "Tận dụng engine thay vì tự viết".
 *
 * Standing on other people's engines: video encoding, Vietnamese speech, and
 * language models. Which parts of this product are delegated, which are its own
 * code, and how an engine is judged before it is trusted. Names no library and
 * no upstream project.
 */
export default {
  slug: 'tan-dung-engine-thay-vi-tu-viet',
  title: 'Tận dụng engine thay vì tự viết: chỗ nào nên tự làm',
  description:
    'Dùng engine mã hoá, giọng đọc và mô hình ngôn ngữ thay vì tự viết: đâu là thứ nên mượn, đâu là thứ phải tự làm, và cách đánh giá một engine trước khi tin.',
  date: '2026-10-10',
  minutes: 6,
  tag: 'Công nghệ',
  lead:
    'Một sản phẩm làm video tự động không thể tự viết mọi thứ. Bài này nói rõ chỗ nào nên mượn engine có sẵn, chỗ nào bắt buộc phải là mã của mình, cách đánh giá một engine trước khi đưa vào dây chuyền, và vì sao phần keo nối mới là sản phẩm.',
  body: [
    { h2: 'Tự viết nghe oai, cho tới lúc phải bảo trì' },
    {
      p: 'Người mới thường muốn tự viết mọi khâu. Nghe thì hợp lý: mình hiểu, mình sửa được, không phụ thuộc ai. Nhưng hãy đếm xem bạn đang định tự viết cái gì. Một bộ mã hoá video tử tế là công trình của nhiều người trong nhiều năm, với hàng nghìn trường hợp biên mà bạn chỉ phát hiện ra khi gặp. Một engine giọng đọc tiếng Việt đúng dấu là một bài toán riêng, không phải một tính năng nhỏ.\n\nVấn đề không nằm ở việc bạn có viết nổi không. Vấn đề nằm ở chỗ: viết xong thì bạn phải bảo trì nó mãi. Mỗi lần hệ điều hành đổi, mỗi lần định dạng đầu vào mới xuất hiện, bạn là người duy nhất phải sửa. Sản phẩm có thêm một khâu không ai dùng, và một khâu nữa để hỏng.',
    },
    { h2: 'Ba thứ không nên tự viết' },
    {
      ol: [
        'Mã hoá video. Card đồ hoạ của bạn đã có sẵn chip mã hoá chuyên dụng, và bộ mã hoá phần mềm là thứ đã được tối ưu qua hàng chục phiên bản. Tự viết lại phần này là bài toán đã có lời giải tốt hơn bạn, ở mọi khía cạnh trừ một khía cạnh bạn chưa gặp.',
        'Giọng đọc tiếng Việt. Tiếng Việt có dấu, và đọc sai một dấu là sai nghĩa. Đây là loại việc mà chất lượng đến từ dữ liệu huấn luyện chứ không đến từ mã.',
        'Mô hình ngôn ngữ. Không ai viết một mô hình ngôn ngữ cho một sản phẩm làm video. Bạn dùng mô hình có sẵn qua nhà cung cấp, và giá trị bạn thêm vào nằm ở chỗ khác.',
      ],
    },
    {
      p: 'Điểm chung của ba thứ trên: chúng đều có lời giải tốt hơn ở ngoài, và chúng đều không phải chỗ bạn tạo ra khác biệt. Việc của bạn là biết dùng đúng chúng, không phải làm lại chúng.',
    },
    { h2: 'Dây chuyền, và engine nào làm việc gì' },
    {
      figure: {
        src: '/blog/engine-pipeline.svg',
        alt: 'Sơ đồ dây chuyền từ nguồn tới file hoàn chỉnh: viết kịch bản giao cho mô hình ngôn ngữ, giọng đọc giao cho engine chạy tại máy, dựng hình giao cho thư viện dựng video, và mã hoá giao cho chip mã hoá trên card đồ hoạ; phần sản phẩm tự viết chỉ là đường nối, thứ tự chạy và các bước kiểm tra.',
        caption:
          'Bốn việc, bốn engine. Phần thuộc về sản phẩm là dải nét đứt bên dưới: thứ tự, đường nối, và các bước kiểm tra kết quả.',
      },
    },
    { h2: 'Chỗ đáng tiền nhất: chip mã hoá trên card đồ hoạ' },
    {
      p: 'Trong cả dây chuyền, bước mã hoá là bước tốn thời gian nhất, và cũng là bước dễ cải thiện nhất. Cùng một video, mã hoá bằng vi xử lý và mã hoá bằng chip chuyên dụng trên card đồ hoạ cho ra hai khoảng thời gian chênh nhau nhiều lần — không phải vài phần trăm, mà là bội số.\n\nCái giá phải trả là chất lượng, và đây là chỗ nhiều người làm sai. Chip mã hoá phần cứng cho ra tệp to hơn một chút ở cùng mức chất lượng, và có những tham số phải tinh chỉnh bằng tay để hình không bị nhoè ở chuyển động nhanh. Chọn sai tham số thì bạn đổi thời gian lấy chất lượng thấy được bằng mắt.\n\nCách tôi xử lý: mặc định dùng chip phần cứng, nhưng để mức chất lượng đủ cao, và giữ đường mã hoá bằng vi xử lý làm phương án cho máy không có card đồ hoạ phù hợp. Một sản phẩm chỉ chạy được khi có card đồ hoạ là một sản phẩm đã đuổi nửa số khách hàng của mình đi.',
    },
    { h2: 'Giọng đọc: chỗ tôi chọn khác số đông' },
    {
      p: 'Phần lớn dịch vụ giọng đọc hiện nay chạy trên mây: bạn gửi câu chữ lên, nhận về tệp âm thanh. Cách đó nhanh, giọng đẹp, và không tốn máy. Nhưng nó có ba nhược điểm mà với người làm nghề bán hàng thì đều quan trọng.\n\nThứ nhất, mỗi video lại tốn tiền, và số tiền đó không có trần rõ ràng. Thứ hai, không có mạng thì không có video — trong khi phần dựng hình vẫn chạy tốt ở máy. Thứ ba, toàn bộ lời thoại của bạn đi ra khỏi máy bạn, từng câu một.\n\nNên engine giọng đọc ở đây chạy ngay tại máy. Chậm hơn một chút khi so với máy chủ mạnh, nhưng chạy bao nhiêu cũng được, không cần mạng, và câu chữ không đi đâu cả.',
    },
    { h2: 'Chỗ bắt buộc phải tự viết' },
    {
      p: 'Nếu không viết engine, vậy sản phẩm này thật ra là gì? Nó là phần keo, và phần keo mới là thứ khách hàng trả tiền:',
    },
    {
      ul: [
        'Thứ tự chạy. Việc nào trước, việc nào chờ, việc nào chạy lại khi lỗi. Đây là hiểu biết về nghề làm video bán hàng, không phải về mã hoá.',
        'Kiểm tra kết quả. Engine trả về một tệp và nói đã xong. Nhưng tệp đó có mở được không, có dài đúng không, có tiếng không, phụ đề có khớp không — engine không trả lời những câu đó.',
        'Kịch bản và nhịp. Một video ba mươi giây cho một sản phẩm Shopee có cấu trúc riêng. Cấu trúc đó do người làm nghề viết ra, không engine nào tự biết.',
        'Lắp ghép. Chữ ở đâu, logo ở đâu, giọng đọc khớp với hình thế nào, template áp vào ra sao. Đây là phần bạn nhìn thấy trên video, và là phần duy nhất không thể mua.',
        'Chính sách và giới hạn. Không tự bịa giá, không tự thêm lời hứa, không đăng khi chưa được duyệt. Engine không có khái niệm đó.',
      ],
    },
    { h2: 'Cách đánh giá một engine trước khi tin' },
    {
      ol: [
        'Giấy phép cho phép bạn dùng nó trong sản phẩm thương mại hay không. Đọc trước, không đọc sau.',
        'Có ai còn bảo trì không. Xem lần cập nhật gần nhất và số người đang làm. Một thư viện bị bỏ rơi là một khoản nợ, không phải một món quà.',
        'Có chạy được khi không có mạng không. Nếu câu trả lời là không, bạn vừa thêm một điểm hỏng nằm ngoài tầm kiểm soát của mình.',
        'Đầu ra có kiểm tra được bằng máy không. Nếu bạn không thể tự động xác nhận nó đã làm đúng, bạn sẽ phải kiểm bằng mắt từng video.',
        'Bỏ nó ra có tốn nhiều không. Mọi engine đều có thể phải thay. Nếu nó nằm rải rác khắp mã, bạn đã tự trói mình.',
      ],
    },
    { h2: 'Bản chất: bạn bán phần keo' },
    {
      p: 'Nói cho cùng, một sản phẩm đứng trên engine của người khác không phải là sản phẩm kém cỏi hơn. Nó là sản phẩm biết chỗ nào không nên cãi nhau với thế giới. Bạn mượn phần đã được giải quyết, và dồn công sức vào phần chưa ai giải quyết: biến một quy trình làm video thủ công thành một việc bấm nút, chạy được trên máy của người bán hàng, với câu chữ và nhịp đúng kiểu Việt Nam.',
    },
    {
      note: 'Nếu một sản phẩm khoe rằng nó tự viết mọi thứ từ đầu, hãy hỏi nó cập nhật lần cuối khi nào. Tự viết nhiều thường có nghĩa là bảo trì nhiều, chứ không có nghĩa là chạy tốt hơn.',
    },
  ],
  faq: [
    {
      q: 'Dùng engine có sẵn thì chất lượng video có kém hơn không?',
      a: 'Ngược lại là khác. Những engine đã được nhiều người dùng qua nhiều năm thường cho chất lượng cao hơn thứ tự viết, vì chúng đã gặp và xử lý rất nhiều trường hợp biên. Chất lượng video phụ thuộc vào tham số bạn chọn, không phụ thuộc vào việc engine do ai viết.',
    },
    {
      q: 'Sản phẩm có gửi lời thoại của tôi lên máy chủ nào không?',
      a: 'Phần giọng đọc và phần dựng hình chạy tại máy bạn, nên câu chữ không đi đâu cả. Chỉ phần nhờ mô hình ngôn ngữ viết kịch bản mới gửi chữ ra ngoài, qua nhà cung cấp AI do bạn chọn.',
    },
    {
      q: 'Máy tôi không có card đồ hoạ rời thì có dùng được không?',
      a: 'Được. Sản phẩm tự nhận biết máy có chip mã hoá phù hợp hay không. Có thì dùng để chạy nhanh hơn nhiều, không có thì chuyển sang mã hoá bằng vi xử lý — chậm hơn nhưng vẫn ra đúng kết quả.',
    },
    {
      q: 'Nếu engine bên ngoài ngừng hoạt động thì sao?',
      a: 'Phần chạy tại máy không phụ thuộc vào ai, nên kịch bản đã viết và video đã dựng vẫn còn nguyên. Chỉ bước nhờ mô hình ngôn ngữ viết kịch bản cần mạng, và bước đó không ảnh hưởng tới những video đã có sẵn kịch bản.',
    },
  ],
};

/**
 * Blog post — "Mỗi tầng một ngôn ngữ: chọn theo hệ sinh thái".
 *
 * Why this product is polyglot rather than loyal to one language, which
 * ecosystem decides each layer, and what the extra language costs. Names only
 * public technologies a reader already knows; no internal module names.
 */
export default {
  slug: 'chon-ngon-ngu-lap-trinh-cho-tung-tang',
  title: 'Mỗi tầng một ngôn ngữ: chọn theo hệ sinh thái',
  description:
    'Vì sao mỗi tầng của một sản phẩm dùng một ngôn ngữ khác nhau, chọn theo hệ sinh thái thư viện chứ không theo sở thích, và cái giá phải trả của việc đa ngôn ngữ.',
  date: '2026-10-10',
  minutes: 6,
  tag: 'Công nghệ',
  lead:
    'Không có ngôn ngữ nào tốt nhất cho mọi việc, và cũng không có chuyện một ngôn ngữ làm hết mọi tầng mà vẫn tử tế. Bài này nói về cách chọn ngôn ngữ cho từng tầng theo hệ sinh thái thư viện, chỗ nào tôi từ chối thêm ngôn ngữ mới, và cái giá thật của một sản phẩm đa ngôn ngữ.',
  body: [
    { h2: 'Ngôn ngữ không phải chuyện sở thích, mà là chuyện thư viện' },
    {
      p: 'Khi ai đó hỏi tôi chọn ngôn ngữ nào, câu trả lời thật là: chọn thư viện trước, ngôn ngữ theo sau. Bạn không viết bộ mã hoá video từ đầu, cũng không tự huấn luyện một mô hình ngôn ngữ. Bạn dùng thứ có sẵn, và thứ có sẵn chỉ có một hoặc hai ngôn ngữ dùng được thật sự. Ngôn ngữ chỉ là cái vỏ bạn gọi thư viện bằng.\n\nNên câu hỏi đúng không phải "ngôn ngữ nào đẹp nhất", mà là "việc này đã có ai làm rồi chưa, và họ viết bằng gì". Chọn theo sở thích ở đây đồng nghĩa với việc tự viết lại thứ người khác đã mất mười năm làm.',
    },
    { h2: 'Bốn tầng, và ngôn ngữ của mỗi tầng' },
    {
      figure: {
        src: '/blog/ngon-ngu-theo-tang.svg',
        alt: 'Bảng đối chiếu ba nhóm tầng với ngôn ngữ phụ trách: giao diện dùng TypeScript, tầng điều phối dùng Python, tầng engine nặng dùng Python gọi xuống thư viện viết bằng C và C++, và tầng cấu hình dùng chung một định dạng dữ liệu.',
        caption:
          'Không phải tầng nào cũng cần đủ ba ngôn ngữ. Cột trống trong bảng cũng là một quyết định: nó là chỗ tôi từ chối viết thêm mã.',
      },
    },
    {
      ul: [
        'Giao diện: TypeScript chạy trên trình duyệt. Đây không phải lựa chọn — trình duyệt chỉ có một ngôn ngữ, và cả hệ sinh thái giao diện nằm ở đó. Dùng TypeScript thay vì JavaScript thuần vì phần giao diện của một công cụ làm việc có rất nhiều trạng thái, và kiểu dữ liệu là cách rẻ nhất để bắt lỗi trước khi chạy.',
        'Điều phối: Python. Đây là tầng quyết định việc gì chạy trước, việc gì chờ, gọi bước nào tiếp theo. Nó nằm cạnh engine nặng nên khoảng cách giữa hai tầng này gần như bằng không.',
        'Engine nặng: Python gọi xuống các thư viện viết bằng C và C++. Không ai viết lại bộ mã hoá video bằng Python — nhưng cũng không ai viết phần điều khiển bằng C. Việc nặng chạy ở tầng dưới, việc sắp đặt chạy ở tầng trên.',
        'Cấu hình: không phải ngôn ngữ lập trình, mà là dữ liệu có cấu trúc. Template video, danh sách sản phẩm, nhãn trạng thái — những thứ này không nên viết bằng mã, vì bạn muốn sửa chúng mà không phải cài lại gì.',
      ],
    },
    { h2: 'Vì sao giao diện không được viết bằng Python' },
    {
      p: 'Một cách làm phổ biến là dựng giao diện bằng chính ngôn ngữ của phần nặng rồi mở nó trong trình duyệt. Cách đó tiết kiệm một ngôn ngữ, và trả giá bằng ba thứ.\n\nThứ nhất, mọi trạng thái giao diện đi vòng qua máy chủ, nên giao diện chậm theo đúng nhịp của máy chủ đó. Thứ hai, giao diện trở thành một trang web do máy chủ vẽ lại từng bước, không phải một ứng dụng bạn bấm nhanh được. Thứ ba, và quan trọng nhất với tôi: mỗi lần bạn muốn sửa một cái nút, bạn phải sửa mã của tiến trình đang chạy hàng giờ. Giao diện và khâu dựng dính vào nhau, và ranh giới chịu lỗi ở bài trước biến mất.',
    },
    { h2: 'Cái giá của đa ngôn ngữ, nói thẳng' },
    {
      ul: [
        'Hai bộ công cụ phải cài. Hai lần quản lý phiên bản thư viện, hai lần kiểm tra lỗ hổng, hai kiểu lỗi khác nhau khi cài đặt trên một máy mới.',
        'Ranh giới giữa hai ngôn ngữ phải là dữ liệu, không phải lời gọi hàm. Hai bên chỉ trao đổi bằng những cấu trúc dữ liệu có hình dạng rõ ràng, chứ không gọi thẳng vào hàm của nhau. Ai đó đổi một trường thì phải đổi ở cả hai phía, và không có trình biên dịch nào nhắc hộ.',
        'Kiểu dữ liệu không đi qua được ranh giới. Bên TypeScript tin rằng trường đó luôn có, bên Python có thể trả về rỗng, và lỗi chỉ hiện ra lúc chạy. Nên mọi giá trị đi qua ranh giới đều phải được kiểm tra ở phía nhận.',
        'Tuyển người khó hơn. Một người phải đọc được cả hai phía, và người như vậy đắt hơn người chỉ biết một.',
        'Lỗi ở ranh giới khó tìm nhất. Khi một việc chạy đúng ở phía này mà sai ở phía kia, chỗ hỏng thường không nằm ở mã, mà ở một giả định hai bên hiểu khác nhau.',
      ],
    },
    { h2: 'Chỗ tôi từ chối thêm ngôn ngữ' },
    {
      p: 'Một ngôn ngữ nữa chỉ nên vào khi nó mở ra một thứ không làm được bằng cách khác. Tôi từ chối thêm một ngôn ngữ để tăng tốc một khâu đã nhanh, để viết lại một thư viện đã tốt, hay để dùng một công cụ chỉ có vài sao. Ba lý do đó nghe đủ, nhưng cái giá phải trả là một ranh giới nữa, một bộ công cụ nữa, và một người nữa phải biết.\n\nNgược lại, chỗ duy nhất tôi chấp nhận thêm là tầng engine — và ở đó tôi không viết, tôi chỉ gọi. Khác biệt giữa gọi một thư viện viết bằng ngôn ngữ khác và tự viết một tầng bằng ngôn ngữ khác là rất lớn: gọi thì không phải bảo trì, viết thì phải bảo trì mãi.',
    },
    { h2: 'Bốn câu hỏi trước khi chọn' },
    {
      ol: [
        'Thư viện tốt nhất cho việc này viết bằng ngôn ngữ nào? Đây là câu trả lời cho 80% trường hợp.',
        'Tầng này có người khác phải đọc không? Phần giao diện sẽ có người sửa liên tục; phần điều phối thì ít. Tầng nào sửa nhiều thì chọn ngôn ngữ dễ đọc và dễ sửa.',
        'Ranh giới mới có trả được giá của nó không? Nếu một tầng chỉ để chuyển tiếp dữ liệu từ A sang B, nó không xứng đáng có ngôn ngữ riêng.',
        'Nếu phải viết lại trong một tuần thì có làm được không? Nếu câu trả lời là không, tầng đó đã quá lớn để là một tầng.',
      ],
    },
    {
      p: 'Sau cùng, đa ngôn ngữ không phải một tuyên ngôn, nó là hệ quả. Bạn chọn thư viện tốt nhất cho từng việc, rồi nhận ra mình đang đứng ở ba ngôn ngữ — và lúc đó việc phải làm là làm cho ba ranh giới đó rõ ràng, chứ không phải quay lại ép mọi thứ vào một ngôn ngữ cho dễ nói.',
    },
  ],
  faq: [
    {
      q: 'Sản phẩm dùng những ngôn ngữ nào?',
      a: 'Ba nhóm: TypeScript cho phần giao diện chạy trên trình duyệt, Python cho phần điều phối và gọi engine, và các thư viện viết bằng C hoặc C++ cho những việc nặng như mã hoá video và giọng đọc. Bạn không cần biết gì về chúng để dùng sản phẩm.',
    },
    {
      q: 'Vì sao không viết hết bằng một ngôn ngữ cho đơn giản?',
      a: 'Vì những thư viện làm được việc nặng — mã hoá video, giọng đọc, mô hình ngôn ngữ — chỉ có ở một vài ngôn ngữ. Viết hết bằng một ngôn ngữ nghĩa là tự viết lại những thư viện đó, và tự bảo trì chúng mãi về sau.',
    },
    {
      q: 'Đa ngôn ngữ có làm phần mềm chạy chậm hơn không?',
      a: 'Không đáng kể. Ranh giới giữa các tầng trao đổi bằng dữ liệu nhỏ, không phải luồng video. Chỗ chậm của cả dây chuyền nằm ở khâu mã hoá, không nằm ở việc đổi ngôn ngữ.',
    },
    {
      q: 'Tôi muốn tự viết thêm một tính năng thì dùng ngôn ngữ nào?',
      a: 'Tùy tính năng sửa vào đâu. Nếu là phần bạn nhìn thấy trên màn hình thì là tầng giao diện; nếu là một bước trong dây chuyền dựng video thì là tầng điều phối. Nguyên tắc là theo tầng, không theo ngôn ngữ bạn thích nhất.',
    },
  ],
};

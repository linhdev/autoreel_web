/**
 * Blog post — "Mã nguồn mở: dùng gì, giấy phép nói gì, trả lại thế nào".
 *
 * How a commercial product stands on open source without either pretending it
 * does not or treating it as free labour: what a licence actually asks for,
 * what a dependency costs in maintenance rather than money, and the ways a
 * small team gives back. Names no library and no upstream project.
 */
export default {
  slug: 'ma-nguon-mo-dung-va-tra-lai',
  title: 'Mã nguồn mở: dùng gì, giấy phép nói gì, trả lại thế nào',
  description:
    'Sản phẩm thương mại đứng trên mã nguồn mở: giấy phép thật ra yêu cầu gì, cái giá phi tiền của một thư viện, và những cách trả lại khi bạn không có tiền.',
  date: '2026-10-10',
  minutes: 6,
  tag: 'Công nghệ',
  lead:
    'Gần như mọi phần mềm bạn dùng hôm nay đều đứng trên mã nguồn mở, kể cả những phần mềm đóng nhất. Bài này nói về giấy phép bằng ngôn ngữ thường, cái giá thật của một thư viện không nằm ở tiền, và những cách trả lại mà một nhóm nhỏ vẫn làm được.',
  body: [
    { h2: 'Sản phẩm thương mại đứng trên mã nguồn mở là chuyện bình thường' },
    {
      p: 'Có một hiểu lầm hay gặp: dùng mã nguồn mở trong sản phẩm bán tiền là lợi dụng. Không phải. Gần như mọi tác giả của những thư viện đó viết ra chúng để người khác dùng — dùng trong sản phẩm thương mại cũng là dùng. Điều họ không muốn là bị coi như lao động miễn phí không tên tuổi, hoặc bị lấy mã rồi quay lại bán đúng thứ họ đang cho không.\n\nNên vấn đề không phải "có được dùng hay không", mà là "dùng cho đúng cách, và có trả lại gì không". Giấy phép là chỗ trả lời câu hỏi thứ nhất; phần còn lại của bài này là câu hỏi thứ hai.',
    },
    { h2: 'Giấy phép không phải thủ tục pháp lý xa vời, nó là điều kiện kỹ thuật' },
    {
      p: 'Giấy phép của một thư viện quyết định bạn được làm gì với nó, và nghĩa vụ của bạn là gì. Với người làm sản phẩm, chỉ cần phân biệt hai nhóm:',
    },
    {
      ul: [
        'Nhóm dễ tính (MIT, BSD, Apache 2.0): bạn được dùng, sửa, bán, đóng gói kín. Nghĩa vụ duy nhất là giữ lại phần ghi công và bản giấy phép gốc. Riêng Apache 2.0 có thêm một câu về bằng phát minh, và câu đó thường là lý do người ta chọn nó cho những thư viện lớn.',
        'Nhóm copyleft (GPL, AGPL): bạn vẫn được dùng, nhưng nếu bạn phát hành một sản phẩm dựa trên nó, bạn phải cho người nhận quyền có được mã nguồn của phần đó. AGPL mở rộng nghĩa vụ này sang trường hợp người dùng chỉ chạy nó trên mạng thay vì cài về máy.',
        'Chưa có giấy phép: mặc định là giữ toàn quyền. Không có giấy phép không có nghĩa là dùng thoải mái — nó có nghĩa là bạn chưa được phép gì cả.',
        'Giấy phép đổi giữa các phiên bản: cùng một thư viện, phiên bản cũ dễ tính và phiên bản mới chặt hơn. Nâng cấp mà không đọc lại là cách phổ biến nhất để tự đẩy mình vào rắc rối.',
      ],
    },
    {
      figure: {
        src: '/blog/ma-nguon-mo.svg',
        alt: 'Sơ đồ phụ thuộc hình cây: sản phẩm ở trên cùng, bên dưới là các thư viện dựng video, engine giọng đọc, mô hình ngôn ngữ, thư viện giao diện và công cụ dòng lệnh, mỗi thư viện mang một nhãn giấy phép, trong đó nhánh GPL được đánh dấu là nhánh làm thay đổi nghĩa vụ; một mũi tên cong đi ngược lên sản phẩm ghi các cách đóng góp trở lại.',
        caption:
          'Cây phụ thuộc của một sản phẩm cỡ nhỏ. Điều ràng buộc bạn không phải là mã của thư viện, mà là giấy phép gắn trên nó.',
      },
    },
    { h2: 'Bốn câu hỏi trước khi thêm một thư viện' },
    {
      ol: [
        'Giấy phép là gì, và nó có nằm trong nhóm copyleft không? Nếu có, câu hỏi tiếp theo là bạn có sẵn sàng công khai phần liên quan hay không. Nếu không sẵn sàng thì đừng thêm.',
        'Ai đang bảo trì nó, và lần cập nhật gần nhất là khi nào? Một thư viện không còn ai sửa là một thư viện sẽ không bao giờ có bản vá bảo mật.',
        'Nó kéo theo bao nhiêu thứ khác? Một thư viện nhỏ có thể kéo theo hai chục thư viện con, và bạn vừa nhận thêm hai chục giấy phép nữa để đọc.',
        'Nếu phải bỏ nó ra thì mất bao lâu? Chỗ nào khó bỏ nhất thì nên là chỗ được đọc kỹ nhất.',
      ],
    },
    { h2: 'Cái giá thật của một thư viện không nằm ở tiền' },
    {
      p: 'Mã nguồn mở miễn phí về tiền, nhưng không miễn phí. Cái bạn trả là thời gian, và nó đến từ bốn hướng.\n\nThứ nhất là nâng cấp. Một thư viện đổi phiên bản lớn có thể làm vỡ mã của bạn ở chỗ bạn không ngờ, và bạn chỉ biết khi chạy. Thứ hai là bị bỏ rơi: thư viện đứng yên trong khi hệ điều hành và trình biên dịch đi tiếp, vài năm sau nó không còn cài được nữa. Thứ ba là lỗ hổng bảo mật — bạn phải biết mình đang dùng gì để biết hôm nay phải cập nhật cái gì. Thứ tư, và ít ai nói tới, là sự hiểu nhầm: bạn tưởng thư viện làm việc A, thực ra nó làm việc B, và bạn phát hiện ra ở giai đoạn đã viết xong cả dây chuyền dựa trên giả định sai đó.',
    },
    {
      note: 'Một thư viện bị bỏ rơi rồi cũng là một khoản nợ, chỉ có điều người ta chỉ gọi tên nó khi đã quá muộn.',
    },
    { h2: 'Trả lại: vài cách, không chỉ là tiền' },
    {
      p: 'Không phải ai cũng có tiền tài trợ, và các tác giả cũng không chỉ cần tiền. Với một nhóm nhỏ, những việc sau đây có giá trị thật:',
    },
    {
      ul: [
        'Báo lỗi có tái hiện. Không phải "nó không chạy", mà là các bước để người khác nhìn thấy đúng lỗi đó, trên phiên bản nào. Một báo lỗi tốt tiết kiệm cho người bảo trì vài giờ, có khi vài ngày.',
        'Gửi bản vá kèm kiểm thử. Với thư viện bạn dùng hàng ngày, sửa một lỗi nhỏ rồi gửi lại là cách trả lại rẻ nhất — và người được lợi nhiều nhất là chính bạn, vì lần nâng cấp sau bạn không phải tự vá lại.',
        'Tài liệu và bản dịch. Nhiều thư viện tốt bị bỏ qua chỉ vì tài liệu khó đọc. Viết một ví dụ chạy được, hoặc dịch phần hướng dẫn cho người sau, là đóng góp không ai làm và ai cũng cần.',
        'Giữ lại phần ghi công. Đây không phải tùy chọn — nó là điều kiện của giấy phép, và cũng là phép lịch sự tối thiểu.',
        'Tài trợ định kỳ cho một hai thư viện bạn phụ thuộc nhất. Số tiền nhỏ nhưng đều, và nhắm đúng chỗ bạn thật sự không thể thiếu, có ý nghĩa hơn rải khắp nơi.',
      ],
    },
    { h2: 'Nói thẳng với khách hàng' },
    {
      p: 'Có một sai lầm nữa đáng tránh: im lặng. Khách hàng có quyền biết sản phẩm họ mua đứng trên nền nào, và một bản ghi công đầy đủ là cách nói điều đó mà không cần giải thích dài.\n\nNgược lại, đừng lấy mã nguồn mở làm nhãn dán tiếp thị. Miễn phí không tự động có nghĩa là tốt, cũng không tự động có nghĩa là an toàn. Nó chỉ có nghĩa là mã được viết công khai và ai cũng đọc được — phần đáng giá nằm ở việc có ai đó đã đọc nó hay chưa.',
    },
    {
      p: 'Với một sản phẩm nhỏ, làm đúng ba việc này đã là đủ: biết mình đang dùng gì và giấy phép là gì, giữ lại phần ghi công, và thỉnh thoảng sửa một lỗi rồi gửi lại. Ba việc đó không cần ngân sách, chỉ cần để ý.',
    },
  ],
  faq: [
    {
      q: 'Thư viện dùng giấy phép GPL thì tôi có được bán sản phẩm không?',
      a: 'Được, nhưng có điều kiện. Nếu bạn phát hành sản phẩm dựa trên nó, bạn phải cho người nhận quyền có được mã nguồn của phần liên quan. Nếu bạn không muốn điều đó thì đừng dùng thư viện đó — hoặc tìm một thư viện cùng chức năng với giấy phép dễ tính hơn. Đây không phải tư vấn pháp lý, nên với sản phẩm lớn hãy hỏi người làm luật.',
    },
    {
      q: 'Sản phẩm của các anh có công khai mã nguồn không?',
      a: 'Phần mã của chúng tôi thì không, và chúng tôi không hứa sẽ công khai. Những thư viện chúng tôi dùng vẫn giữ nguyên giấy phép của họ, phần ghi công được giữ đầy đủ, và chúng tôi gửi lại bản vá cho những lỗi mình gặp.',
    },
    {
      q: 'Dùng mã nguồn mở có rủi ro bảo mật cao hơn tự viết không?',
      a: 'Không hẳn. Mã công khai thì nhiều người đọc, và lỗ hổng thường được phát hiện nhanh hơn. Rủi ro thật nằm ở chỗ khác: một thư viện không còn ai bảo trì thì không có ai sửa lỗi, và một thư viện nhỏ ít người dùng thì không có ai đọc.',
    },
    {
      q: 'Tôi không có tiền thì trả lại bằng cách nào?',
      a: 'Báo lỗi có tái hiện, gửi bản vá nhỏ, viết ví dụ hoặc dịch tài liệu, và giữ đầy đủ phần ghi công khi dùng. Tất cả đều miễn phí và đều có giá trị thật với người bảo trì.',
    },
  ],
};

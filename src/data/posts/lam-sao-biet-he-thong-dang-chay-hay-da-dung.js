/**
 * Blog post — "Làm sao biết hệ thống đang chạy hay đã dừng".
 *
 * Architecture level: honest state reporting, why a live connection has to be
 * re-asked before work is handed over, progress by step instead of a made-up
 * percentage, and what an error message owes the person reading it.
 */
export default {
  slug: 'lam-sao-biet-he-thong-dang-chay-hay-da-dung',
  title: 'Làm sao biết hệ thống đang chạy hay đã dừng',
  description:
    'Trạng thái thật khác trạng thái tưởng: vì sao phải hỏi lại thiết bị, vì sao nên báo tiến độ theo bước thay vì phần trăm, và nhật ký giúp tìm đúng chỗ hỏng.',
  date: '2026-10-10',
  minutes: 5,
  tag: 'Công nghệ',
  lead:
    'Một màn hình hiện chữ đang kết nối không có nghĩa là đang kết nối. Bài này nói về chỗ khó nhất của việc theo dõi một hệ thống chạy tự động: phân biệt trạng thái thật với trạng thái tưởng, và báo cho người dùng đúng cái đang xảy ra.',
  body: [
    { h2: 'Trạng thái tưởng và trạng thái thật' },
    {
      p: 'Phần mềm nào cũng có lúc chỉ đang nhớ giá trị cuối cùng mà nó biết, và giá trị đó hoàn toàn có thể đã cũ từ lâu. Dây mạng bị rút, điện thoại ngủ, ứng dụng bị đóng — mà màn hình vẫn hiện trạng thái cũ vì chưa ai hỏi lại. Đây không phải lỗi riêng của phần mềm làm video; nó là cái bẫy của mọi hệ thống có hiển thị trạng thái.',
    },
    { h2: 'Vì sao trạng thái “đang kết nối” phải hỏi lại thiết bị' },
    {
      p: 'Kết nối không phải một thuộc tính lưu một lần rồi dùng mãi. Nó là một quan hệ đang sống, có thể đứt bất cứ lúc nào mà không ai báo trước. Vì vậy trạng thái kết nối chỉ đúng tại thời điểm vừa được hỏi lại. Một giá trị đọc lên êm tai nhưng sai thì tệ hơn hẳn một câu trả lời chậm.',
    },
    {
      ul: [
        'Hỏi lại ngay trước khi giao việc, thay vì tin vào giá trị đã lưu từ lúc mở máy.',
        'Khi không hỏi được thì nói thẳng là chưa xác nhận, đừng mặc định là vẫn ổn.',
        'Không đánh dấu thành công cho một việc chưa có bằng chứng hoàn thành.',
        'Cho người dùng thấy ngay lúc mở phần mềm, thay vì để họ phát hiện sau khi cả lô việc đã lỗi.',
      ],
    },
    { h2: 'Tiến độ theo bước, không theo phần trăm' },
    {
      p: 'Phần trăm là con số dễ làm hài lòng nhất và cũng dễ sai nhất. Khi không có thước đo thật, phần trăm chỉ là con số trang trí: đứng ở chín mươi phần trăm suốt hai mươi phút thì bạn không biết nó đang chạy hay đã treo. Một thanh tiến độ đẹp không giúp bạn quyết định được gì.\n\nBước thì khác, vì mỗi bước là một việc đã xong và kiểm tra được. Khi một bước đứng lâu bất thường, bạn biết chính xác đang chờ ở đâu, và biết nên chờ tiếp hay dừng lại.',
    },
    {
      ul: [
        'Kịch bản xong: đã có chữ để đọc, và bạn duyệt được trước khi tốn thời gian dựng.',
        'Giọng đọc xong: đây thường là bước nặng nhất, nên nó đứng lâu là bình thường.',
        'Dựng hình xong: file đã nằm trên ổ đĩa, mở xem được ngay.',
        'Đăng xong: chỉ tính khi nền tảng đã xác nhận, không tính theo lúc hệ thống gửi đi.',
      ],
    },
    { h2: 'Nhật ký để làm gì' },
    {
      p: 'Nhật ký là thứ trả lời câu hỏi chuyện gì đã xảy ra mà không cần ngồi đoán. Nó ghi lại việc nào đã chạy, lúc nào, dừng ở bước nào, và lỗi nói gì. Ba việc dùng thật của nó: phân biệt hệ thống hỏng với nền tảng từ chối nhận bài; chạy lại đúng phần đã hỏng thay vì làm lại cả video; và khi bạn cần người hỗ trợ xem giúp, bạn có cái để đưa thay vì mô tả bằng cảm giác.',
    },
    { h2: 'Báo lỗi cho người dùng nên nói gì' },
    {
      ul: [
        'Nói cái gì hỏng, ở bước nào. “Đăng Shopee lỗi ở bước gửi bài” hữu ích hơn “có lỗi xảy ra”.',
        'Nói bạn cần làm gì tiếp. Đa số lỗi có một hành động đi kèm: kiểm tra kết nối, thử lại, giảm số việc chạy cùng lúc.',
        'Không báo thành công khi chưa xác nhận. Một câu “chưa xác nhận được” trung thực hơn một dấu tích sai.',
        'Không im lặng. Một việc chạy mãi không có cập nhật là kiểu lỗi tệ nhất, vì người dùng chờ mà không biết mình đang chờ gì.',
      ],
    },
    {
      note: 'Giới hạn cần biết trước: hệ thống không thể báo cho bạn điều nó không đo được. Nếu nền tảng không trả lời, cách trung thực nhất là nói rõ chưa xác nhận. Nếu bạn muốn một màn hình chỉ toàn màu xanh và luôn báo thành công, bạn sẽ có một màn hình dễ chịu nhưng không dùng được để ra quyết định.',
    },
    {
      p: 'Khi bạn điều khiển từ xa qua Telegram, nguyên tắc này càng quan trọng: bạn không ngồi cạnh máy nên không thể tự nhìn. Một báo cáo trung thực — kể cả báo cáo nói việc đã dừng — có giá trị hơn một thông báo báo xong cho vui.',
    },
  ],
  faq: [
    {
      q: 'Vì sao phần mềm báo đang kết nối mà đăng vẫn lỗi?',
      a: 'Vì trạng thái kết nối chỉ đúng tại thời điểm được hỏi lại. Điện thoại ngủ, dây bị rút hay ứng dụng bị đóng đều làm kết nối đứt mà không ai báo trước. Vì vậy hệ thống hỏi lại ngay trước khi giao việc, và nói rõ khi chưa xác nhận được.',
    },
    {
      q: 'Vì sao không hiện phần trăm cho dễ nhìn?',
      a: 'Vì phần trăm không có thước đo thật thì chỉ là con số trang trí. Đứng ở chín mươi phần trăm suốt nửa tiếng không cho bạn biết nên chờ hay nên dừng, còn danh sách bước thì cho biết chính xác đang ở đâu.',
    },
    {
      q: 'Nhật ký có giúp gì khi mọi thứ vẫn chạy tốt?',
      a: 'Có, vì lúc đó bạn chưa cần đến nó. Khi có sự cố, nhật ký là thứ phân biệt hệ thống hỏng với nền tảng từ chối nhận bài, và cho phép chạy lại đúng phần đã hỏng. Không có nó, mọi chẩn đoán đều là đoán.',
    },
    {
      q: 'Điều khiển từ xa qua Telegram thì biết tiến độ bằng cách nào?',
      a: 'Bạn nhận cập nhật theo bước qua Telegram, kèm báo khi có việc lỗi. Vì không ngồi cạnh máy, một báo cáo trung thực — kể cả báo cáo nói việc đã dừng — có giá trị hơn một thông báo báo xong cho vui.',
    },
  ],
};

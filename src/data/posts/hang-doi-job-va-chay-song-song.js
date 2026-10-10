/**
 * Blog post — "Vì sao không nên chạy hết mọi việc cùng lúc".
 *
 * Architecture level: finite resources, what a queue buys the user, and why
 * the sensible number of parallel jobs is a property of the machine. No
 * internal queue names, no storage details, no measured throughput figures.
 */
export default {
  slug: 'hang-doi-job-va-chay-song-song',
  title: 'Vì sao không nên chạy hết mọi việc cùng lúc',
  description:
    'Chạy song song không phải cứ mở hết là nhanh: tài nguyên trên máy có hạn, phía nền tảng nhận bài cũng có giới hạn, và hàng đợi giúp mọi việc rõ ràng.',
  date: '2026-10-10',
  minutes: 5,
  tag: 'Công nghệ',
  lead:
    'Giao ba chục video rồi mong máy làm hết một lượt là phản xạ của người mới. Bài này giải thích vì sao mở hết mọi việc cùng lúc lại chậm hơn, hàng đợi thật ra làm gì cho bạn, và số việc chạy song song phụ thuộc vào những gì.',
  body: [
    { h2: 'Mở hết mọi việc cùng lúc: cảm giác nhanh, kết quả chậm' },
    {
      p: 'Nhìn qua thì rất hợp lý: nhiều việc chạy cùng lúc thì chắc phải xong sớm hơn. Nhưng thử một lần là thấy ngay — máy ì đi, mọi video cùng chậm, và không video nào xong trước. Vấn đề không nằm ở phần mềm. Nó nằm ở chỗ tất cả các việc đang giành nhau đúng một lượng tài nguyên có hạn, và lượng đó không tăng lên khi bạn giao thêm việc.',
    },
    { h2: 'Tài nguyên hữu hạn: cái gì đang bị chia' },
    {
      ul: [
        'Vi xử lý: mọi bước tính toán đều xếp vào đây, và số nhân thì cố định.',
        'Bộ nhớ: mỗi video đang dựng chiếm một phần; mở quá nhiều thì máy phải mượn ổ đĩa làm chỗ nhớ tạm và chậm hẳn đi.',
        'Ổ đĩa: đọc nguồn và ghi thành phẩm cùng lúc trên một ổ là chỗ nghẽn rất dễ bị bỏ qua.',
        'Card đồ hoạ: hữu ích cho khâu dựng, nhưng cũng chỉ có một; mười việc cùng tranh nó thì không việc nào nhanh hơn.',
        'Băng thông mạng: mọi lượt tải nguồn và đẩy bài lên đều đi qua cùng một đường.',
        'Phía bên kia: nền tảng nhận bài cũng có giới hạn của họ, và họ không thông báo trước cho bạn.',
      ],
    },
    { h2: 'Hàng đợi là gì, ở mức bạn cần biết' },
    {
      p: 'Hàng đợi là danh sách việc đang chờ tới lượt. Bạn giao ba chục video, hệ thống ghi nhận đủ ba chục, rồi mở đúng số việc mà máy chịu được — không phải mở hết. Việc nào xong thì việc kế tiếp vào chỗ trống. Bạn không phải ngồi canh, cũng không phải tự chia lô bằng tay.\n\nĐiểm quan trọng nhất của hàng đợi không phải tốc độ, mà là sự rõ ràng: mỗi việc luôn nằm ở một trạng thái bạn đọc được — đang chờ, đang chạy, xong, hay lỗi. Không việc nào biến mất, và không việc nào chạy hai lần.',
    },
    { h2: 'Vì sao 30 video không nên chạy 30 cùng lúc' },
    {
      ol: [
        'Tổng thời gian dài hơn, không phải ngắn hơn. Chia nhau một chiếc máy thì mọi việc chậm lại, kể cả những việc lẽ ra xong trong vài phút.',
        'Khâu nặng nhất không chia nhỏ được. Việc tạo giọng đọc và dựng hình gần như chạy nối tiếp nhau; mở thêm việc không làm khâu đó nhanh hơn, chỉ làm nó phải chờ lâu hơn.',
        'Bộ nhớ và ổ đĩa là chỗ vỡ trước. Máy hết chỗ nhớ thì việc đang chạy dừng giữa đường, và bạn phải chạy lại từ đầu.',
        'Phía nền tảng nhận bài cũng đếm. Đăng ba chục video trong mười phút là hành vi mà nền tảng tìm cách hạn chế, bất kể bạn đăng tay hay đăng tự động.',
        'Khi có lỗi, bạn không biết lỗi ở đâu. Ba chục việc cùng chạy thì một việc hỏng kéo theo cả loạt, và nguyên nhân trở nên khó lần ra.',
      ],
    },
    { h2: 'Bao nhiêu việc song song là hợp lý' },
    {
      p: 'Không có một con số đúng cho mọi máy, và ai nói có đều đang bán cho bạn một con số. Số việc chạy cùng lúc phụ thuộc vào cấu hình máy bạn, loại việc bạn đang chạy, và việc bạn có dùng máy để làm thứ khác hay không. Máy chỉ làm video và không ai đụng vào thì chịu được nhiều hơn hẳn một máy vừa dựng vừa họp trực tuyến.\n\nVới bản Personal, AutoReel chạy một việc một lúc. Đó là lựa chọn có chủ đích, không phải giới hạn để bán bản cao hơn: một việc chạy trọn vẹn nhanh hơn năm việc chạy dở dang, và thứ bạn nhận được là video, không phải một màn hình đầy thanh tiến độ.',
    },
    {
      note: 'Cách làm thực tế khi có lô lớn: giao cả lô rồi đi làm việc khác, để máy chạy vào lúc bạn không dùng — buổi tối hoặc qua đêm. Ba chục video là khối lượng của một buổi, không phải của mười phút. Nếu bạn cần xong trong mười phút thì đây không phải công cụ phù hợp, và ở mức giá này cũng không có công cụ nào phù hợp.',
    },
    {
      p: 'Cuối cùng, giới hạn chạy song song không phải để tiết kiệm tài nguyên của ai khác — toàn bộ chiếc máy là của bạn. Nó tồn tại vì vượt qua một ngưỡng nào đó, tổng thời gian sẽ dài hơn và tỉ lệ lỗi cao hơn. Chạy ít mà xong vẫn hơn chạy nhiều rồi phải làm lại.',
    },
  ],
  faq: [
    {
      q: 'Giao 30 video một lúc thì mất bao lâu?',
      a: 'Không có câu trả lời chung, vì thời gian phụ thuộc vào máy bạn và loại video. Cách nhìn thực tế: coi một lô ba chục video là việc của một buổi hoặc một đêm, và để máy chạy lúc bạn không dùng.',
    },
    {
      q: 'Máy tôi khoẻ thì chạy nhiều việc cùng lúc có nhanh hơn không?',
      a: 'Quá một ngưỡng thì thường là không. Máy khoẻ giúp mỗi việc chạy nhanh hơn, nhưng mở quá nhiều việc cùng lúc thì chúng vẫn chia nhau đúng ngần ấy tài nguyên, cộng thêm chi phí chuyển qua lại.',
    },
    {
      q: 'Tôi có phải tự chia lô không?',
      a: 'Không. Bạn giao cả danh sách, hệ thống tự xếp hàng và mở đúng số việc máy chịu được. Việc nào xong thì việc kế tiếp vào chỗ trống.',
    },
    {
      q: 'Vì sao bản Personal chỉ chạy một việc một lúc?',
      a: 'Vì một việc chạy trọn vẹn cho ra kết quả nhanh hơn nhiều việc chạy dở dang, và vì phần nặng nhất của dây chuyền gần như không chia nhỏ được. Gói Team dự kiến cho nhiều tài khoản chạy đồng thời, hiện chưa mở bán.',
    },
  ],
};

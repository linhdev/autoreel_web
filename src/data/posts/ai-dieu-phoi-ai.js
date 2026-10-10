/**
 * Blog post — "AI điều phối AI: chia việc, kiểm tra, và giới hạn".
 *
 * Using a language model to run the pipeline rather than only to write copy:
 * what an orchestrator actually decides, which checks are worth having, and the
 * hard edges of letting a model choose a next step. Names no model vendor as an
 * internal dependency beyond the ones a customer picks themselves.
 */
export default {
  slug: 'ai-dieu-phoi-ai',
  title: 'AI điều phối AI: chia việc, kiểm tra, và giới hạn',
  description:
    'Dùng AI để điều phối chứ không chỉ để viết chữ: chia việc cho từng engine, kiểm tra kết quả trả về, và những chỗ tuyệt đối không để mô hình tự quyết định.',
  date: '2026-10-10',
  minutes: 7,
  tag: 'Công nghệ',
  lead:
    'Nhờ AI viết một đoạn quảng cáo là việc ai cũng làm được. Dùng AI để quyết định việc gì chạy trước, kết quả trả về có dùng được không, và bước tiếp theo là gì — đó mới là phần khó. Bài này nói về cách một bộ điều phối làm việc, những gì nó được phép quyết, và giới hạn phải chấp nhận.',
  body: [
    { h2: 'Sinh chữ là phần dễ nhất' },
    {
      p: 'Khi mọi người nói về AI trong sản xuất nội dung, họ thường nói về phần sinh chữ: đưa một sản phẩm, nhận về một đoạn mô tả. Phần đó bây giờ gần như miễn phí, và ai cũng làm được bằng một lời nhắc đủ tốt.\n\nPhần khó nằm ở chỗ khác. Sau khi có đoạn chữ, còn hai chục việc nữa: chọn giọng đọc nào, dựng hình bằng gì, phụ đề đặt ở đâu, video ra có mở được không, nếu lỗi thì thử lại hay bỏ, đăng lúc nào. Một mô hình ngôn ngữ không tự biết những việc đó — nhưng nó có thể quyết định chúng, nếu bạn đưa cho nó đúng công cụ và đúng giới hạn.',
    },
    { h2: 'Một bộ điều phối làm bốn việc' },
    {
      ol: [
        'Chia việc. Từ một yêu cầu mơ hồ — "làm video cho lô sản phẩm này" — nó dựng ra danh sách việc cụ thể, mỗi việc có đầu vào rõ ràng và một engine chịu trách nhiệm.',
        'Gọi đúng engine. Mỗi việc chỉ có một đường đi đúng. Chọn sai engine thì không hỏng ngay, mà hỏng muộn và khó lần ra, nên phần này phải chặt chứ không được để mô hình tự diễn giải.',
        'Kiểm tra kết quả. Đây là phần đáng tiền nhất. Mỗi engine trả về một kết quả, và bộ điều phối phải tự trả lời câu hỏi: kết quả này có dùng được không.',
        'Quyết định bước tiếp. Đạt thì đi tiếp, chưa đạt thì chạy lại, hỏng hẳn thì dừng và báo. Không có bước này thì một lỗi nhỏ sẽ trôi hết cả dây chuyền.',
      ],
    },
    { h2: 'Một lượt chạy trông như thế nào' },
    {
      figure: {
        src: '/blog/ai-dieu-phoi.svg',
        alt: 'Biểu đồ tuần tự với năm tác nhân: người dùng, bộ điều phối, mô hình ngôn ngữ, engine dựng và nền tảng đăng. Người dùng giao một lô video, bộ điều phối yêu cầu mô hình ngôn ngữ viết kịch bản, nhận kịch bản trả về, tự kiểm tra kịch bản, rồi rẽ sang hai nhánh: nhánh đạt thì dựng video và đăng bài, nhánh lỗi thì xếp lại hàng đợi và thử lại sau.',
        caption:
          'Một lượt chạy, rút gọn. Chú ý chỗ bộ điều phối tự gọi chính nó: đó là bước kiểm tra, và là chỗ phân biệt một dây chuyền với một chuỗi lời nhắc.',
      },
    },
    { h2: 'Kiểm tra kết quả: chỗ đáng tiền nhất' },
    {
      p: 'Mô hình ngôn ngữ trả lời trôi chảy kể cả khi sai. Một kịch bản đọc lên rất hợp lý vẫn có thể thiếu giá, sai tên sản phẩm, hoặc dài gấp ba thời lượng cho phép. Nếu bạn dùng thẳng nó, bạn phát hiện ra lỗi ở chỗ đắt nhất: sau khi video đã dựng xong.\n\nNên phần kiểm tra được chia làm hai nhóm, và cả hai đều chạy tự động:',
    },
    {
      ul: [
        'Kiểm tra đọc được bằng máy: độ dài kịch bản có nằm trong khoảng cho phép không, số câu có khớp với số cảnh không, tên sản phẩm và giá có xuất hiện đúng như trong dữ liệu gốc không, có câu nào bị cấm không.',
        'Kiểm tra trên sản phẩm cuối: tệp video có mở được không, thời lượng có đúng không, có tiếng không, phụ đề có nằm trong khung hình không, có khung nào bị đen không.',
        'Kiểm tra chéo giữa các bước: giọng đọc có khớp với kịch bản đã duyệt không, hình có khớp với số cảnh không. Lỗi ở loại này hiếm khi xảy ra, nhưng khi xảy ra thì rất khó thấy bằng mắt.',
      ],
    },
    {
      p: 'Điểm quan trọng: việc kiểm tra không giao cho mô hình. Một mô hình có thể được hỏi "kịch bản này có ổn không", nhưng câu trả lời đó chỉ là một ý kiến thêm. Những gì chặn được dây chuyền phải là phép kiểm tra chạy bằng mã, cho ra đúng hai kết quả: đạt hoặc không đạt.',
    },
    { h2: 'Những chỗ tuyệt đối không để mô hình tự quyết' },
    {
      ul: [
        'Số liệu và lời hứa. Giá, khuyến mãi, bảo hành — mô hình chỉ được chép lại từ dữ liệu bạn đưa, không được tự nghĩ ra. Một con số sai trong video bán hàng không phải lỗi kỹ thuật, nó là lỗi với khách hàng.',
        'Hành động có tác dụng ra ngoài. Đăng bài, gửi tin, xoá tệp — đây là những việc không hoàn tác được. Mô hình có thể đề xuất, nhưng cú bấm cuối cùng phải là của con người hoặc của một luật đã viết sẵn.',
        'Chạy lại vô hạn. Một vòng lặp "chưa đạt thì thử lại" mà không có trần sẽ đốt tiền và thời gian của bạn. Số lần thử phải do bạn đặt trước, không do mô hình quyết định trong lúc chạy.',
        'Đổi cấu hình. Mô hình không được tự đổi template, đổi giọng đọc mặc định, hay đổi thứ tự bước. Nó chạy trong khuôn bạn dựng, và khuôn đó sửa bằng tay.',
      ],
    },
    { h2: 'Giới hạn của cách làm này' },
    {
      p: 'Nói cho công bằng, đây không phải một hệ thống tự chủ. Nó là một dây chuyền có một chỗ biết suy nghĩ. Bốn giới hạn nên biết trước khi kỳ vọng quá nhiều:',
    },
    {
      ul: [
        'Mô hình đổi tính cách theo phiên bản. Cùng một lời nhắc, kết quả khác đi sau một lần nhà cung cấp cập nhật. Vì vậy mọi chỗ phụ thuộc vào định dạng đầu ra đều phải kiểm tra lại, chứ không tin vào lời hứa của mô hình.',
        'Mô hình tự tin kể cả khi sai. Nó không có khái niệm "tôi không chắc". Nên câu hỏi không phải "mô hình nói gì", mà là "mình kiểm được gì".',
        'Chi phí tỉ lệ với số lần gọi. Mỗi bước nhờ mô hình là một lần trả tiền. Một dây chuyền gọi mô hình ở mọi bước sẽ đắt gấp nhiều lần một dây chuyền chỉ gọi ở đúng một bước.',
        'Chỉ kiểm được cái kiểm được. Bạn xác nhận được video có tiếng, đúng dài, đủ khung. Bạn không tự động xác nhận được nó có bán được hàng hay không. Phần phán đoán đó vẫn thuộc về bạn.',
      ],
    },
    { h2: 'Vì sao vẫn nên làm' },
    {
      p: 'Đổi lại, bộ điều phối giải quyết đúng vấn đề của người làm nghề: số lượng. Ba chục video một ngày không thể làm bằng tay, và cũng không thể làm bằng một chuỗi lời nhắc dán tay từng lần. Có người quyết định thứ tự và có máy kiểm tra kết quả thì chất lượng đều hơn — video thứ ba mươi giống video thứ nhất, thay vì phụ thuộc vào việc hôm đó bạn có đang vội hay không.\n\nVai trò của bạn trong hệ thống đó cũng đổi: bạn không ngồi làm từng video nữa, bạn duyệt. Một lô chạy qua đêm, sáng ra bạn xem qua, sửa hai ba cái, đăng phần còn lại. Đó là mức tự động hoá phù hợp với một người làm một mình — đủ để bỏ phần lặp lại, không đến mức bỏ luôn phần phán đoán.',
    },
    {
      note: 'Cách kiểm tra nhanh một sản phẩm có thật sự dùng AI để điều phối hay chỉ dán thêm một lớp chữ: hỏi nó làm gì khi kết quả trả về không dùng được. Nếu câu trả lời là "chạy lại từ đầu", thì đó chưa phải điều phối, chỉ là một nút thử lại.',
    },
  ],
  faq: [
    {
      q: 'AI có tự quyết định đăng video lên không?',
      a: 'Không. Đăng bài là hành động không hoàn tác được, nên nó nằm ngoài phần mô hình được quyết. Bạn duyệt nội dung trước, hoặc đặt trước một luật rõ ràng; còn cú bấm cuối cùng không do mô hình tự làm.',
    },
    {
      q: 'Nếu kịch bản do AI viết bị sai thì có bị dựng thành video luôn không?',
      a: 'Không. Kịch bản trả về phải qua các phép kiểm tra tự động về độ dài, tên sản phẩm và giá so với dữ liệu gốc. Không đạt thì việc đó được xếp lại hoặc dừng và báo lỗi, chứ không đi tiếp vào khâu dựng.',
    },
    {
      q: 'Tôi có phải trả thêm tiền cho phần AI điều phối này không?',
      a: 'Không. Chi phí duy nhất là phần gọi nhà cung cấp AI bạn chọn để viết kịch bản, và bạn trả thẳng cho họ. Phần điều phối chạy trên máy bạn, không tính thêm.',
    },
    {
      q: 'Dùng AI để kiểm tra kết quả có đáng tin hơn con người không?',
      a: 'Không, và đó là lý do những phép kiểm tra chặn dây chuyền đều chạy bằng mã chứ không bằng mô hình: đủ dài chưa, đúng tên sản phẩm chưa, tệp có mở được không. Mô hình có thể góp ý, nhưng không phải là người gác cổng.',
    },
  ],
};

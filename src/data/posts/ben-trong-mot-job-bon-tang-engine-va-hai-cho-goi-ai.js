/**
 * Blog post — "Bên trong một job: bốn tầng engine và hai chỗ gọi AI".
 *
 * The whole system walked through once, from the click to the published video,
 * for a reader who builds systems: which layer holds what, why Python sits in
 * the middle and not at the edges, and the two places a model is allowed to
 * decide anything. Solution-architect level — seams, trade-offs and what was
 * deliberately left out — not a code walkthrough.
 *
 * Names nothing from inside the build: `scripts/verify-build.mjs` holds the
 * list of words these articles may not contain.
 */
export default {
  slug: 'ben-trong-mot-job-bon-tang-engine-va-hai-cho-goi-ai',
  title: 'Bên trong một job: bốn tầng engine và hai chỗ gọi AI',
  description:
    'Đi hết một job từ lúc bấm nút tới lúc video được đăng: tầng nào giữ gì, vì sao phần điều phối viết bằng Python, và hai chỗ duy nhất mà mô hình được phép quyết định.',
  date: '2026-10-10',
  minutes: 8,
  tag: 'Công nghệ',
  lead:
    'Bài này đi theo một job từ đầu tới cuối và dừng ở mỗi ranh giới nó băng qua: dữ liệu vào, dữ liệu ra, ai chịu trách nhiệm khi hỏng. Không có đoạn mã nào ở đây — chỉ có các tầng, các đường nối, và lý do chúng nằm ở chỗ chúng nằm. Nếu bạn từng dựng một hệ thống chạy nền, bạn sẽ nhận ra gần hết những lựa chọn dưới đây.',
  body: [
    { h2: 'Một job, nhìn từ lúc bấm nút' },
    {
      p: 'Người dùng bấm một nút và đi uống cà phê. Việc đầu tiên hệ thống làm không phải là dựng video, mà là ghi lại một dòng: job này là gì, đầu vào ở đâu, ai yêu cầu, chạy tới đâu rồi. Từ giây phút đó, dòng đó — chứ không phải cái nút — là thứ đúng về job.\n\nLý do rất thực dụng. Một video mất hàng phút, có khi hàng chục phút. Trong khoảng thời gian đó, người dùng tải lại trang, đóng trình duyệt, mở máy khác, hoặc đi ngủ. Nếu trạng thái chỉ nằm trong phiên làm việc của một tab, thì vừa mất tab là vừa mất job. Còn nếu nó nằm trong một tệp dữ liệu trên máy, thì mọi thứ khác — màn hình, trình duyệt, tiến trình dựng — đều chỉ là người đọc và người ghi vào cùng một chỗ.',
    },
    { h2: 'Bốn tầng, và tầng nào giữ gì' },
    {
      figure: {
        src: '/blog/mot-job-qua-bon-tang.svg',
        alt: 'Sơ đồ bốn tầng xếp dọc: giao diện ở trên cùng, điều phối bằng Python ở giữa, tầng engine gồm các engine riêng cho từng việc, và tầng dữ liệu ở dưới cùng. Một job đi từ trên xuống, mỗi tầng chỉ nói chuyện với tầng liền kề, và chỉ có đúng hai mũi tên đi ngang ra ngoài internet: một ở tầng điều phối để gọi mô hình ngôn ngữ, một ở tầng engine để tìm tư liệu.',
        caption:
          'Bốn tầng, hai đường ra ngoài internet. Mọi thứ khác chạy trong máy bạn.',
      },
    },
    {
      ol: [
        'Giao diện. Mỏng, và cố tình mỏng: nó thu thập lựa chọn, gọi xuống dưới, rồi vẽ lại trạng thái đọc được từ tầng dữ liệu. Nó không tự quyết định gì và không giữ sự thật nào. Đổi giao diện không làm hỏng một job đang chạy — đó là tiêu chuẩn để biết tầng này đã đủ mỏng hay chưa.',
        'Điều phối. Đây là phần viết bằng Python, và là phần dày nhất. Nó giữ mô hình của một job, thứ tự các bước, số lần thử lại, các phép kiểm tra, và toàn bộ phần gọi ra ngoài. Nếu hệ thống có một bộ não thì nó nằm ở tầng này — nhưng là bộ não của một người thực thi kế hoạch, không phải của một người nghĩ ra kế hoạch.',
        'Engine. Mỗi việc nặng có một engine riêng: viết lời, đọc thành tiếng, dựng hình, vẽ phụ đề, đóng dấu, đăng bài. Mỗi engine là một tiến trình hoặc một dịch vụ độc lập, có đầu vào và đầu ra rõ ràng. Tầng này là chỗ duy nhất được phép ngốn card đồ hoạ và ngốn thời gian.',
        'Dữ liệu. Một tệp duy nhất trên máy bạn, giữ job, trạng thái, và thư viện video đã làm ra. Không có máy chủ nào ở giữa, nên không có chỗ nào để dữ liệu của bạn đi lạc.',
      ],
    },
    {
      p: 'Quy tắc xuyên suốt cả bốn tầng chỉ có một: tầng trên biết tầng dưới, tầng dưới không biết tầng trên. Engine không biết ai gọi nó; nó nhận đường dẫn và trả về đường dẫn. Nhờ vậy cùng một engine dùng được cho nhiều luồng khác nhau, và một engine hỏng không kéo theo cái nào khác.',
    },
    { h2: 'Vì sao Python nằm ở giữa' },
    {
      p: 'Chọn ngôn ngữ theo hệ sinh thái chứ không theo sở thích, và ở tầng điều phối thì hệ sinh thái ấy là của Python. Ba việc của tầng này đều cần đúng thứ Python mạnh nhất:\n\nThứ nhất, nó nói chuyện với rất nhiều thứ khác nhau — mô hình ngôn ngữ, dịch vụ tìm tư liệu, engine dựng hình, cơ sở dữ liệu, và cả một chiếc điện thoại. Mỗi thứ một giao thức, và Python có thư viện cho tất cả. Thứ hai, nó phải viết ra những phép kiểm tra đọc được bằng mắt người: đủ dài chưa, đúng giá chưa, tệp có mở được không. Đó là công việc của một ngôn ngữ viết nhanh, đọc rõ. Thứ ba, phần lớn engine nặng nhất mà hệ thống dùng cũng viết bằng Python, nên gọi chúng từ Python là gọi cùng nhà, không phải bắc cầu.\n\nChỗ Python không hợp thì hệ thống không dùng nó. Giao diện không viết bằng Python, vì hệ sinh thái giao diện của nó nghèo hơn hẳn. Phần nào cần chạy thật nhanh trên từng khung hình thì đẩy xuống engine, nơi có mã biên dịch sẵn. Ranh giới này là chủ ý, không phải tai nạn.',
    },
    { h2: 'Chỗ gọi AI thứ nhất: viết kịch bản' },
    {
      p: 'Kịch bản là chỗ mô hình được dùng đúng nghĩa: nhận dữ liệu thật của sản phẩm, trả về lời thoại chia theo từng cảnh. Nhưng cả hai đầu của lời gọi đều bị chặn bằng mã, không bằng thiện chí.\n\nĐầu vào là một bản hợp đồng, không phải một lời nhắc. Hệ thống đưa vào đúng những gì mô hình được phép dùng — tên sản phẩm, giá, chất liệu, vài đặc điểm — kèm yêu cầu về định dạng trả về. Mô hình không được tự thêm một con số nào; nếu lời thoại nhắc tới giá, con số đó phải khớp với dữ liệu gốc, và điều này được kiểm tra sau khi trả lời chứ không tin vào lời hứa trong lời nhắc.\n\nĐầu ra bị kiểm tra lại bằng mã, không bằng mô hình. Bốn phép kiểm tra rẻ tiền chặn được gần hết lỗi thật: định dạng trả về có đọc được không, số cảnh có khớp với số hình sẽ dựng không, độ dài có nằm trong khoảng thời lượng cho phép không, và tên sản phẩm hay giá có xuất hiện sai lệch so với dữ liệu gốc không. Trượt phép nào thì job dừng ở đó và báo — chứ không đi tiếp vào khâu dựng, nơi mọi lỗi đều đắt hơn hai chục lần.',
    },
    { h2: 'Chỗ gọi AI thứ hai: tìm hình' },
    {
      p: 'Chỗ thứ hai kín đáo hơn, và là chỗ nhiều hệ thống làm ẩu. Sau khi có lời thoại chia theo cảnh, mỗi cảnh cần hình. Hệ thống không hỏi mô hình "cảnh này nên là hình gì" — nó hỏi mô hình một danh sách từ khoá cho mỗi cảnh, rồi phần còn lại do luật quyết định.\n\nMô hình giỏi đổi ý thành chữ, và dở ở chỗ không biết cái gì có thật. Nên nó chỉ được làm phần đầu. Danh sách từ khoá đi qua một bộ lọc — bỏ từ quá chung, bỏ từ khoá trùng nhau giữa các cảnh, ưu tiên từ cụ thể — rồi mới tới chỗ tìm tư liệu.\n\nPhần chọn hình thì hoàn toàn không có AI, và đó là chủ ý: chọn theo thứ đo được. Độ phân giải có đủ không, thời lượng có phủ được cảnh không, khung hình có cắt được về dọc mà không mất chủ thể không, cảnh này đã dùng ở video trước chưa. Ba hình đầu tiên đạt hết các điều kiện thì lấy, không cần xếp hạng bằng cảm tính.\n\nCuối cùng là cái thang dự phòng, vì chỗ này hỏng thường xuyên hơn người ta tưởng: không có tư liệu khớp thì thử lại bằng từ khoá rộng hơn, vẫn không có thì lấy từ tư liệu bạn tự thêm vào, và nếu vẫn không có thì cảnh đó xuống cấp thành một khung hình tĩnh có chữ — xấu hơn, nhưng video vẫn ra đời thay vì chết giữa đường.',
    },
    { h2: 'Engine nào cũng trả về cùng một hình dạng' },
    {
      p: 'Đây là quyết định rẻ nhất và có giá trị nhất trong cả kiến trúc: mọi engine, kể cả engine của bên thứ ba, đều được bọc trong cùng một hình dạng. Nhận một đường dẫn vào, báo tiến độ theo phần trăm, trả về một đường dẫn ra, và khi hỏng thì ném lỗi kèm lý do đọc được.\n\nCái lợi không nằm ở vẻ đẹp. Nó nằm ở chỗ đổi engine không kéo theo đổi tầng điều phối: ngày mai có engine đọc tiếng tốt hơn, bạn thay đúng một tệp. Nó cũng nằm ở chỗ kiểm thử được: một engine giả trả về đường dẫn sau nửa giây cho phép chạy hết cả dây chuyền trong vài giây, thay vì chờ mười phút cho một video thật. Và nó nằm ở chỗ hỏng thì hỏng một chỗ: engine chết là một job chết, không phải cả hệ thống.',
    },
    { h2: 'Ranh giới chạy ở đâu' },
    {
      p: 'Câu hỏi kiến trúc hay bị trả lời muộn nhất, và trả lời sai thì trả giá lâu nhất: cái gì chạy ngay trong tiến trình điều phối, cái gì phải đẩy ra ngoài.\n\nNguyên tắc đơn giản: việc gì giữ tiến trình điều phối bận thì đẩy ra ngoài. Gọi mô hình là chờ mạng, nên nó chạy bất đồng bộ và có thời gian chờ rõ ràng. Việc dựng hình ngốn card đồ hoạ và có khi chạy hàng chục phút, nên nó nằm ở tiến trình riêng — chết thì khởi động lại, không kéo theo phần điều phối. Việc đăng bài thì phải nằm ngoài cùng, vì nó là hành động duy nhất không hoàn tác được.\n\nNgược lại, những việc nhỏ và nhanh — đọc dữ liệu sản phẩm, kiểm tra kịch bản, ghi trạng thái — thì để nguyên trong tiến trình, vì tách chúng ra chỉ thêm một chỗ để hỏng mà không được gì.',
    },
    { h2: 'Một job để lại dấu gì' },
    {
      p: 'Một hệ thống chạy qua đêm sẽ hỏng lúc ba giờ sáng, và người đọc log lúc đó là bạn. Nên mọi bước đều để lại dấu theo cùng một cách: bước nào, bắt đầu lúc nào, mất bao lâu, hỏng thì hỏng ở đâu.\n\nThứ đáng giá nhất không phải log, mà là bản ghi của từng job: nó dùng engine nào, mất bao nhiêu giây ở mỗi bước, hình lấy từ đâu. Nhìn một job thì biết nó chạy thế nào; nhìn ba chục job thì thấy được xu hướng — bước nào chậm dần, engine nào hay hỏng, khung giờ nào hay nghẽn. Đây là loại câu hỏi mà không có bản ghi thì chỉ còn cách đoán.',
    },
    { h2: 'Ba thứ cố tình không làm' },
    {
      ul: [
        'Không tách thành nhiều dịch vụ nhỏ. Với một máy và một người dùng, chia nhỏ chỉ đổi một tiến trình dễ sửa lấy mười tiến trình khó lần. Ranh giới duy nhất đáng tách là ranh giới chịu lỗi, và hệ thống tách đúng chỗ đó rồi dừng.',
        'Không phụ thuộc vào một nhà cung cấp AI. Mô hình là thứ thay đổi nhanh nhất trong cả hệ thống, nên nó nằm sau một lớp mỏng và bạn đổi được bằng cấu hình. Đây cũng là lý do các phép kiểm tra không giao cho mô hình: đổi nhà cung cấp không được làm đổi tiêu chuẩn.',
        'Không có chợ plugin. Một giao diện mở cho engine bên thứ ba nghe hấp dẫn cho tới khi bạn phải bảo đảm nó không phá vỡ phần còn lại. Cách mở rộng ở đây là thay engine có sẵn, không phải cài thêm thứ chưa ai kiểm.',
      ],
    },
    { h2: 'Cách đánh giá một kiến trúc như thế này trong mười phút' },
    {
      p: 'Nếu bạn đang đọc để quyết định có dùng hay không, bốn câu hỏi dưới đây cho biết nhiều hơn mọi danh sách tính năng. Chúng hỏi về đường nối, chứ không hỏi về tính năng — tính năng thì thêm được, đường nối sai thì sửa rất đắt.',
    },
    {
      ol: [
        'Job nằm ở đâu khi không ai nhìn? Nếu câu trả lời là "trong phiên làm việc của trình duyệt", mọi thứ khác không cần hỏi nữa.',
        'Đổi một engine mất bao lâu? Nếu câu trả lời là "sửa nhiều tệp ở nhiều tầng", thì tầng engine chưa thật sự tách.',
        'Kết quả của mô hình bị kiểm tra bằng gì? Nếu câu trả lời là "hỏi lại mô hình xem đúng chưa", thì chưa có phép kiểm tra nào cả.',
        'Hỏng giữa đường thì mất gì? Nếu câu trả lời là "chạy lại từ đầu", thì hàng đợi chưa được dùng đúng việc của nó.',
      ],
    },
    {
      note: 'Một kiến trúc tốt cho một người dùng không phải là kiến trúc của một công ty thu nhỏ lại. Nó là kiến trúc được thiết kế cho đúng một máy, một người, và một tá việc chạy qua đêm — bớt được tầng nào là bớt được một chỗ hỏng.',
    },
  ],
  faq: [
    {
      q: 'Hệ thống viết bằng ngôn ngữ gì?',
      a: 'Phần điều phối và phần engine viết bằng Python, vì đó là nơi tập trung các thư viện xử lý video, giọng đọc và gọi mô hình. Giao diện thì không — nó viết bằng ngôn ngữ khác vì hệ sinh thái giao diện phù hợp hơn. Việc chọn ngôn ngữ theo từng tầng là chủ ý, không phải trộn lẫn tuỳ tiện.',
    },
    {
      q: 'Tôi có tự thay engine được không?',
      a: 'Được, nếu engine đó trả về đúng hình dạng chung: nhận đường dẫn vào, báo tiến độ, trả đường dẫn ra. Vì tầng điều phối chỉ biết hình dạng đó, thay engine không kéo theo sửa gì ở các tầng khác.',
    },
    {
      q: 'AI có tự chọn hình cho video không?',
      a: 'AI chỉ đề xuất từ khoá cho từng cảnh. Việc chọn hình cụ thể thì theo các điều kiện đo được — độ phân giải, thời lượng, khung hình, cảnh đã dùng chưa — nên cùng một kịch bản chạy hai lần sẽ cho ra kết quả nhất quán, không phụ thuộc vào việc mô hình "thấy" gì hôm đó.',
    },
    {
      q: 'Kiến trúc này chạy trên máy cá nhân có ổn không?',
      a: 'Đó là kiểu máy nó được thiết kế cho. Bước nặng nhất là dựng hình, nên thứ quyết định tốc độ là card đồ hoạ; phần còn lại chạy tốt trên một máy để bàn bình thường. Vì mọi thứ nằm trong máy bạn, không có chi phí máy chủ và cũng không có dữ liệu nào đi ra ngoài ngoài những lời gọi bạn tự cấu hình.',
    },
  ],
};

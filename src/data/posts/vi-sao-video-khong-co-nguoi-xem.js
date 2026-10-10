/**
 * Blog post — "Vì sao video không có người xem".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 *
 * The eight causes are ordered as a checklist, not as a list of ideas: the order
 * is the advice, and the checks are written so a reader can run each one on a
 * video they already posted.
 */
export default {
  slug: 'vi-sao-video-khong-co-nguoi-xem',
  title: 'Vì sao video không có người xem: 8 nguyên nhân nên kiểm',
  description:
    'Video không có người xem thường do vài lỗi nhỏ cộng lại. Tám nguyên nhân xếp theo thứ tự nên kiểm, kèm cách kiểm từng cái và lúc nào đừng kết luận vội.',
  date: '2026-10-10',
  minutes: 5,
  tag: 'Kinh nghiệm',
  lead:
    'Video ít người xem hiếm khi do một lý do lớn. Nó thường là vài lỗi nhỏ cộng lại, và lỗi nặng nhất hay nằm ở chỗ bạn ít nghĩ tới nhất. Dưới đây là tám nguyên nhân xếp theo thứ tự nên kiểm.',
  body: [
    {
      p: 'Thứ tự quan trọng gần bằng chính danh sách. Nếu bạn đi sửa phần chữ trong khi video đang tới sai người xem, bạn sẽ tốn một tuần mà không thấy gì đổi. Kiểm từ trên xuống, cái nào sai thì sửa cái đó trước, rồi mới tới cái tiếp theo.\n\nMột lưu ý trước khi bắt đầu: mỗi tuần chỉ nên đổi một thứ. Đổi năm thứ cùng lúc thì khi số liệu lên bạn không biết ơn là nhờ cái nào, còn khi số liệu xuống thì không biết cái nào làm hỏng.',
    },
    { h2: 'Danh sách kiểm, theo đúng thứ tự' },
    {
      ol: [
        'Sai người xem — video tới tay người không có nhu cầu với món bạn bán.',
        'Ba giây đầu không nói được video nói về cái gì.',
        'Chữ trên màn hình quá nhỏ để đọc trên điện thoại.',
        'Video dọc bị đăng vào chỗ chỉ chạy khung ngang, hoặc ngược lại.',
        'Đăng dồn quá nhiều video trong một khoảng thời gian ngắn.',
        'Chú thích vô nghĩa, không cho người xem lý do để xem tiếp.',
        'Sản phẩm không ai tìm, hoặc không ai tìm bằng cách bạn đang nói.',
        'Tài khoản còn quá mới, chưa có tín hiệu nào cho nền tảng.',
      ],
    },
    { h2: 'Hai lỗi ở khâu chọn người xem và phần mở đầu' },
    {
      p: 'Sai người xem là lỗi nặng nhất và cũng bị bỏ qua nhiều nhất, vì sửa nó tốn công hơn sửa chữ. Cách kiểm: mở danh sách người đã xem video gần nhất và tự hỏi trong đó có bao nhiêu người thật sự có nhu cầu với món bạn bán. Bạn bán đồ cho mẹ có con nhỏ mà video toàn tới tay sinh viên đang học thì mọi thứ phía sau đều vô nghĩa.\n\nBa giây đầu quyết định người xem ở lại hay lướt tiếp. Cách kiểm rẻ nhất: mở video, che phần chữ và tắt tiếng, xem đúng ba giây đầu rồi tự hỏi người lạ có hiểu đang nói về chuyện gì không. Nếu phải tới giây thứ tám mới hiểu, phần mở đầu đang làm mất người.',
    },
    { h2: 'Ba lỗi ở phần hình và phần chú thích' },
    {
      ul: [
        'Chữ quá nhỏ. Kiểm bằng cách mở video trên chính chiếc điện thoại bạn dùng để xem, không phải trên màn hình máy tính. Chữ khiến bạn phải nheo mắt là chữ phải to lên gấp đôi.',
        'Sai khung. Video ngang đăng vào chỗ chạy dọc sẽ bị viền đen hoặc cắt mất hai bên, và phần bị cắt thường đúng là phần có chữ. Kiểm bằng cách xem bản xem trước đúng tỉ lệ trước khi đăng.',
        'Chú thích vô nghĩa. Câu đầu phải cho người xem biết video nói về cái gì và vì sao nên xem tiếp. Kiểm bằng cách đọc chú thích mà không xem video: nếu chính bạn cũng không hiểu gì, người xem cũng vậy.',
      ],
    },
    {
      note: 'Đừng sửa nhiều thứ trong cùng một tuần. Tuần này chỉ đổi phần mở đầu, tuần sau chỉ đổi chú thích, rồi so với tuần trước bằng số liệu của chính bạn. Cách này chậm hơn nhưng cho bạn biết chắc cái gì có tác dụng, thay vì đoán.',
    },
    { h2: 'Ba lỗi ít ai nghĩ là lỗi' },
    {
      p: 'Đăng dồn. Đăng mười video trong một buổi tối khiến các video cạnh tranh lượt xem của nhau, và trên Shopee đây là hành vi có khung phạt, mức nặng có thể khoá tài khoản tới 30 ngày. Cách kiểm: mở lại lịch đăng ba ngày gần nhất. Nếu có ngày trên năm video và có ngày không có cái nào, bạn đang đăng dồn chứ không phải đang đăng đều.',
    },
    {
      p: 'Sản phẩm không ai tìm. Không phần mở đầu nào cứu được một món mà người ta không có nhu cầu. Cách kiểm: làm ba video cho ba món khác nhau trong cùng một nhóm hàng, giữ nguyên cách dựng và cùng một nhịp đăng. Món nào lên rõ rệt thì đó là nhu cầu, không phải tài nói của bạn.',
    },
    {
      p: 'Tài khoản mới chưa có tín hiệu. Một tài khoản vừa lập, chưa có video nào, đăng video đầu tiên thì nền tảng chưa có gì để biết nên đưa nội dung của bạn cho ai. Cách kiểm: xem lại bạn đã đăng đều được hai ba tuần chưa. Nếu chưa, vấn đề không nằm ở video mà ở chỗ bạn đang kết luận quá sớm.',
    },
    { h2: 'Khi nào cách kiểm này không hợp' },
    {
      p: 'Nếu video mới đăng được vài giờ, hoặc bạn mới có dưới mười video, thì đừng kết luận gì từ lượt xem. Ở giai đoạn đó chưa có đủ dữ liệu, và việc sửa liên tục theo một con số còn nhiễu còn tệ hơn là giữ nguyên cách làm trong ba tuần rồi nhìn lại.\n\nCách kiểm này cũng không hợp khi kênh của bạn đang bị hạn chế phân phối. Lúc đó lượt xem thấp không phải vì nội dung, mà vì tài khoản đang bị siết. Xử lý chuyện đó trước, đừng đi sửa video.',
    },
  ],
  faq: [
    {
      q: 'Video đăng bao lâu thì biết là không hiệu quả?',
      a: 'Đừng đánh giá trong vài giờ. Hãy để qua vài ngày rồi so với chính các video khác của bạn, thay vì so với con số ai đó khoe. Nếu sau một tuần vẫn không ai bấm vào sản phẩm, vấn đề thường nằm ở phần mở đầu hoặc ở việc chọn sản phẩm, không phải ở số lượng video.',
    },
    {
      q: 'Xoá video ít lượt xem rồi đăng lại có tốt hơn không?',
      a: 'Không. Đăng lại cùng nội dung chỉ tạo thêm một lần đăng trùng, và nếu bạn làm vậy nhiều lần thì đó chính là mẫu hành vi dễ bị coi là spam. Cách tốt hơn là giữ video cũ lại, sửa phần mở đầu và chú thích cho lần làm sau.',
    },
    {
      q: 'Nên sửa phần mở đầu hay đổi sản phẩm trước?',
      a: 'Nhìn hai con số để quyết. Lượt xem thấp nghĩa là nội dung chưa tới được người, hãy sửa phần mở đầu và cách chọn nhóm người xem. Lượt xem ổn mà không ai bấm vào sản phẩm thì vấn đề nằm ở chú thích hoặc ở chính món hàng, sửa phần mở đầu sẽ không giúp gì.',
    },
    {
      q: 'Có nên đăng lên nhiều tài khoản để tăng lượt xem?',
      a: 'Không nên đăng y hệt. Nếu bạn có nhiều gian hàng Shopee hoặc nhiều Page, hãy đổi phần mở đầu và chú thích cho từng nơi, vì đăng trùng nội dung vừa dễ bị coi là spam vừa khiến các tài khoản cạnh tranh với nhau. AutoReel hỗ trợ đăng lên Shopee Video và Facebook/Reels với chú thích riêng cho từng bài. Xem thêm ở autoreelvn.com hoặc nhắn Zalo 0326012999.',
    },
  ],
};

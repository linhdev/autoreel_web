/**
 * Blog post — "Một video, nhiều cửa ra".
 *
 * Architecture level: why the render step and the publish step are separate
 * layers, what each destination constrains, and the honest cost of keeping
 * every outlet up to date.
 */
export default {
  slug: 'mot-loi-nhieu-cua-ra',
  title: 'Một video, nhiều cửa ra: kiến trúc đa nền tảng',
  description:
    'Mỗi nền tảng có khung hình, độ dài, chú thích và cách đăng riêng. Tách khâu dựng video khỏi khâu đăng giúp một video đi được nhiều cửa ra mà không phải làm lại.',
  date: '2026-10-10',
  minutes: 5,
  tag: 'Công nghệ',
  lead:
    'Cùng một video, đăng nơi này ổn mà nơi kia không — vì mỗi cửa ra có bộ ràng buộc riêng. Bài này nói vì sao nên tách khâu dựng khỏi khâu đăng, mỗi cửa ra đòi những gì, và cái giá phải trả khi bạn mở thêm nơi đăng.',
  body: [
    { h2: 'Cùng một nội dung, mỗi nơi đòi một kiểu' },
    {
      p: 'Bạn dựng một video tốt, đăng lên chỗ này ổn, đăng lên chỗ kia không. Không phải vì video dở, mà vì mỗi nền tảng có bộ ràng buộc riêng: khung hình, độ dài, cách viết chú thích, cách gắn sản phẩm, và cả cách bài được đẩy lên. Đây là chỗ nhiều người mất thời gian nhất, vì họ coi đó là việc nhỏ — trong khi nó là một tầng riêng của hệ thống.',
    },
    { h2: 'Tách phần làm video khỏi phần đăng' },
    {
      p: 'Cách xử lý gọn nhất là xem video thành phẩm và cửa ra là hai thứ khác nhau. Video là tài sản chung: một file hoàn chỉnh, đúng nội dung, đúng bộ nhận diện. Cửa ra là phần dịch tài sản đó sang yêu cầu của từng nơi — đúng khung, đúng độ dài, chú thích riêng, tài khoản riêng.\n\nNếu nhét luật của nền tảng vào khâu dựng, mỗi lần nền tảng đổi — đổi tỉ lệ, đổi độ dài, đổi cách gắn sản phẩm — bạn phải dựng lại mọi video đã làm. Còn khi đã tách, bạn chỉ sửa phần cửa ra, và toàn bộ video cũ vẫn dùng được.',
    },
    {
      ul: [
        'Một video dựng một lần, dùng cho nhiều nơi.',
        'Luật nền tảng đổi thì sửa một chỗ, không đụng tới video gốc.',
        'Cửa ra hỏng không làm hỏng thành phẩm — file vẫn còn nguyên trên máy bạn.',
        'Thêm một cửa ra mới là thêm một phần nhỏ, không phải làm lại cả dây chuyền.',
        'Bạn xem được cái gì đã đăng ở đâu, thay vì phải nhớ trong đầu.',
      ],
    },
    { h2: 'Mỗi cửa ra có ràng buộc riêng' },
    {
      ul: [
        'Khung hình và độ dài: có nơi chỉ hợp khung dọc, có nơi nhận ngang; mỗi nơi có độ dài hợp lý riêng cho nội dung bán hàng.',
        'Chú thích và hashtag: mỗi nơi đọc chú thích theo một cách, nên chú thích phải viết riêng chứ không dán y hệt.',
        'Gắn sản phẩm: nơi nào bán hàng được thì phải nối đúng sản phẩm vào đúng video.',
        'Tài khoản: đăng qua trang của shop khác với đăng qua tài khoản cá nhân.',
        'Thiết bị: nền tảng di động thì bắt buộc có thiết bị thật kết nối với máy tính, còn nơi đăng qua trang quản lý thì không cần.',
        'Giãn cách: mỗi nơi chịu được một nhịp đăng khác nhau, và vượt nhịp là tự làm khó mình.',
      ],
    },
    { h2: 'Vì sao đổi nền tảng không nên phải làm lại video' },
    {
      p: 'Làm lại một video không chỉ là thời gian dựng. Nó còn là công chọn lại hình, viết lại lời, nghe lại giọng, và bỏ đi một bản gốc. Nhân lên vài ba chục video, bạn sẽ thấy chi phí thật của việc trộn hai khâu vào nhau.\n\nKhi đã tách, cùng một file gốc cho ra được nhiều bản: bản dọc cho nơi xem trên điện thoại, bản dài cho nơi người xem chịu ngồi lâu, mỗi bản mang một chú thích khác nhau. Bạn không làm lại video, bạn chỉ xuất nó qua một cửa khác.',
    },
    { h2: 'Cái giá của cách làm này' },
    {
      ul: [
        'Phải theo dõi luật của từng nơi, và chấp nhận rằng không có cửa ra nào làm một lần là xong.',
        'Chú thích phải viết khác nhau cho từng nơi, nên phần chữ không dùng chung hoàn toàn được.',
        'Cửa ra nào đi qua thiết bị thật thì dễ vỡ khi ứng dụng đổi giao diện, và cần thiết bị đó luôn sẵn sàng.',
        'Phải bỏ ý nghĩ đăng mọi nơi một nội dung y hệt — vừa dễ bị coi là trùng lặp, vừa không hiệu quả.',
      ],
    },
    {
      note: 'Nếu bạn chỉ định đăng một nơi duy nhất và không có kế hoạch mở thêm, phần tách này là công thừa — bạn không phải trả gì cho nó, nhưng cũng đừng chọn công cụ chỉ vì con số nền tảng. Ngược lại, nếu bạn đang đăng từ hai nơi trở lên, hoặc sẽ mở thêm trong vài tháng tới, tách từ đầu rẻ hơn nhiều so với chắp vá về sau.',
    },
    {
      p: 'Hiện tại AutoReel có hai cửa ra: Shopee Video và Facebook/Reels. Shopee Video là nền tảng di động nên cần một điện thoại Android kết nối với máy tính; Facebook đăng qua Page nên không cần điện thoại. TikTok chưa nằm trong danh sách cửa ra. Nếu bạn cần tư vấn cách chạy nhiều cửa ra cùng lúc, nhắn Zalo hoặc WhatsApp 0326012999.',
    },
  ],
  faq: [
    {
      q: 'Một video có đăng được cho cả Shopee lẫn Facebook không?',
      a: 'Được, nhưng không nên đăng y hệt. Cùng một file gốc, mỗi cửa ra nhận một bản với khung hình, độ dài và chú thích phù hợp với nơi đó.',
    },
    {
      q: 'Đổi nền tảng có phải dựng lại video không?',
      a: 'Không, nếu hệ thống tách khâu dựng khỏi khâu đăng. Bạn xuất lại từ file gốc theo yêu cầu của cửa mới, thay vì làm lại từ đầu.',
    },
    {
      q: 'Vì sao đăng Shopee cần điện thoại mà Facebook thì không?',
      a: 'Vì Shopee Video là nền tảng di động, nên đường đăng phải đi qua một chiếc điện thoại Android kết nối với máy tính. Facebook đăng qua Page nên không cần thiết bị.',
    },
    {
      q: 'Có nên đăng cùng lúc lên thật nhiều nền tảng?',
      a: 'Chỉ nên mở những cửa ra bạn thật sự chăm được. Mỗi cửa có nhịp đăng và cách viết chú thích riêng; mở nhiều mà bỏ bê thì không nơi nào lên.',
    },
  ],
};

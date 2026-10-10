/**
 * Blog post — "Phụ đề và chữ trên video ngắn".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 */
export default {
  slug: 'phu-de-va-chu-tren-video-ngan',
  title: 'Phụ đề và chữ trên video ngắn: đặt sao cho không bị che',
  description:
    'Phụ đề và chữ trên video ngắn: vùng an toàn tránh nút và thanh của app, cỡ chữ, số chữ mỗi dòng, độ tương phản, và chữ nào chỉ làm rối mắt người xem.',
  date: '2026-10-10',
  minutes: 5,
  tag: 'Hướng dẫn',
  lead:
    'Thói quen xem phổ biến là mở video với tiếng tắt sẵn, nên chữ trên màn hình phải nói được điều mà tiếng không nói. Bài này là các con số cụ thể: đặt chữ ở đâu, cỡ bao nhiêu, mỗi dòng mấy chữ, và bỏ chữ nào đi.',
  body: [
    { h2: 'Video phải hiểu được khi tắt tiếng' },
    {
      p: 'Người xem mở Shopee Video và Reels ở trên xe, ở chỗ làm, lúc con đang ngủ, hoặc chỉ đơn giản là không muốn mở loa nơi công cộng. Nhiều người trong số đó xem hết video mà không nghe một câu nào.\n\nNghĩa là tiếng không phải kênh chính để truyền thông tin — hình ảnh và chữ mới là. Nếu bỏ tiếng đi mà video không còn hiểu được, bạn đang bỏ mất một phần người xem ngay từ giây đầu.',
    },
    { h2: 'Vùng an toàn: chỗ nào đừng đặt chữ' },
    {
      ul: [
        'Chừa khoảng một phần mười chiều cao khung ở phía trên. Khu vực này thường có tên tài khoản, nút theo dõi và các nút của hệ thống.',
        'Chừa khoảng một phần năm chiều cao khung ở phía dưới. Đây là chỗ chú thích, tên sản phẩm gắn kèm và thanh tiến trình — chữ đẹp nhất đặt vào đó cũng bị nuốt mất.',
        'Chừa khoảng một phần mười chiều rộng ở mỗi bên. Phụ đề dài chạm sát mép sẽ bị cắt khi xem trên máy nhỏ.',
        'Đặt phụ đề ở khoảng bảy mươi phần trăm chiều cao khung, phía trên vùng chú thích. Đó là chỗ mắt người xem đã quen tìm chữ, và cũng là chỗ ít bị các nút của app chạm tới nhất.',
        'Nhớ rằng chú thích của bạn cũng nằm trong vùng dưới. Đừng để chữ trên màn hình trùng chỗ với dòng chú thích đang chạy.',
        'Xem lại video trong chính app sẽ đăng, ở chế độ xem thật, chứ không phải trong phần mềm dựng. Đây là bước nhanh nhất để phát hiện chữ bị che.',
      ],
    },
    { h2: 'Cỡ chữ và số chữ mỗi dòng' },
    {
      ul: [
        'Trên khung dọc 1080 x 1920, phụ đề thường nằm trong khoảng 56 đến 72 điểm ảnh. Nhỏ hơn thì phải dí mắt, to hơn thì chữ chiếm mất hình.',
        'Mỗi dòng từ năm đến tám chữ, tối đa hai dòng một lần hiện. Ba dòng trở lên là quá nhiều để đọc kịp.',
        'Với phụ đề chạy theo từng cụm, cụm ba đến năm chữ đọc dễ hơn cả câu, và cũng khớp nhịp nói hơn.',
        'Chữ trên màn hình và phụ đề không nên cùng cỡ. Một loại để đọc, một loại để nhấn; chênh nhau khoảng một lần rưỡi là đủ phân biệt.',
        'Giữ mỗi lần hiện chữ ít nhất khoảng một giây. Chữ loé lên rồi mất trong nửa giây thì mắt không kịp đọc, mà người xem lại có cảm giác video bị giật.',
      ],
    },
    { h2: 'Độ tương phản: kiểm tra ở khung xấu nhất' },
    {
      p: 'Một cách chắc ăn: chữ trắng, có viền tối hoặc đổ bóng, đọc được trên gần như mọi nền. Chữ vàng trên nền vàng, chữ mảnh trên nền sáng, chữ thu nhỏ trong suốt — đều là những kiểu đẹp trên khung hình mẫu và mất hút trên khung thật.\n\nCách kiểm tra: chọn khung sáng nhất trong video — chỗ nắng chiếu vào, chỗ có tường trắng — rồi xem chữ ở đó. Nếu chữ vẫn đọc được ở khung xấu nhất, cả video sẽ đọc được.\n\nMột chi tiết ít ai để ý: nền video tối thì chữ trắng rất ổn, nhưng khi video chạy, khung sáng sẽ tới. Đừng chốt màu chữ bằng cách nhìn một khung đứng yên.',
    },
    { h2: 'Chữ nào cần' },
    {
      ul: [
        'Lợi ích chính, nói trong tối đa sáu chữ: "không còn ướt sàn", "gấp lại vừa ba lô".',
        'Con số quan trọng nếu có: giá, kích thước, số lượng, thời gian bảo hành — nhưng phải đúng với trang sản phẩm.',
        'Tên sản phẩm: một lần, đặt gần đầu video hoặc gần phần kết, không lặp lại liên tục.',
        'Lời mời cuối: một câu nói rõ cần làm gì, hiện ở hai giây cuối và giữ đủ lâu để đọc.',
      ],
    },
    { h2: 'Chữ nào thừa và nên bỏ' },
    {
      ul: [
        'Phụ đề lặp lại nguyên văn một dòng chữ lớn đang có trên màn hình. Hai lớp chữ giống nhau chỉ làm mắt mỏi.',
        'Câu chào, tên kênh, lời cảm ơn. Người xem không cần biết, và chúng chiếm chỗ của thông tin thật.',
        'Hashtag và tên tài khoản nằm trên hình. Chúng thuộc về phần chú thích.',
        'Cả một đoạn văn dài hiện trong một lần. Nếu bạn phải dừng video lại để đọc, chữ đó đang làm sai việc của nó.',
      ],
    },
    {
      note: 'Kiểm tra cuối cùng luôn là: mở video trong chính app sẽ đăng, xem ở chế độ thật, tắt tiếng. Nếu vẫn hiểu được nội dung khi đó thì video đã sẵn sàng. Đừng kiểm tra trong phần mềm dựng — phần mềm dựng không có các nút của app, mà đó lại đúng là thứ che chữ của bạn.',
    },
    { h2: 'Cách này không hợp nếu...' },
    {
      p: 'Cách này không hợp nếu video của bạn không có lời nói — ví dụ video chỉ có nhạc và hình. Lúc đó chữ phải làm toàn bộ phần kể, và bạn cần nhiều chữ hơn hẳn, không phải ít đi.\n\nNó cũng không hợp nếu bạn đang làm video dài hoặc video cho website, nơi người xem chủ động bật tiếng và ngồi trước màn hình lớn. Các con số về vùng an toàn ở trên là để tránh nút của app trên điện thoại; ở màn hình lớn, ràng buộc đó không còn.',
    },
  ],
  faq: [
    {
      q: 'Phụ đề nên đặt ở đâu cho an toàn?',
      a: 'Khoảng bảy mươi phần trăm chiều cao khung, phía trên vùng chú thích và thanh tiến trình. Đừng đặt sát mép dưới, vì đó là chỗ app dành cho tên sản phẩm, chú thích và các nút điều khiển.',
    },
    {
      q: 'Chữ trên màn hình khác gì phụ đề?',
      a: 'Phụ đề chạy theo lời nói, dùng để người xem theo kịp. Chữ trên màn hình đứng yên hoặc hiện theo nhịp, dùng để nhấn một ý. Hai việc khác nhau nên cỡ chữ, vị trí và thời lượng cũng khác nhau; đừng để chúng giống nhau.',
    },
    {
      q: 'Có nên để phụ đề chạy suốt video không?',
      a: 'Với video bán hàng, nên. Người xem có thể bật tiếng ở bất kỳ giây nào, và phụ đề giúp họ vào giữa video mà vẫn hiểu. Điều nên tránh là phụ đề sai chữ hoặc lệch nhịp, vì người xem nhận ra ngay và mất tin.',
    },
    {
      q: 'AutoReel có làm phụ đề và chữ trên màn hình không?',
      a: 'Có. AutoReel thêm phụ đề, logo, chữ trên và chữ dưới theo template bạn chọn, rồi dựng theo khung dọc để đăng lên Shopee Video hoặc Facebook/Reels. Bạn vẫn nên mở video trong app trước khi đăng để kiểm tra chữ có bị che không. Cần hỏi thêm thì nhắn Zalo hoặc WhatsApp 0326012999.',
    },
  ],
};

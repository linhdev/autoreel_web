/**
 * Blog post — "Vì sao phần nặng phải tách khỏi phần giao diện".
 *
 * Architecture, at the level a customer needs: two rhythms in one machine, what
 * a failure boundary buys them, and what the separation costs. No process
 * names, no storage details, no service names, no measured figures.
 */
export default {
  slug: 'kien-truc-tach-tien-trinh-va-chiu-loi',
  title: 'Vì sao phần nặng phải tách khỏi phần giao diện',
  description:
    'Kiến trúc tách tiến trình: vì sao khâu dựng video phải chạy riêng khỏi giao diện, ranh giới chịu lỗi đặt ở đâu, hàng đợi giữ gì, và cái giá phải trả khi tách.',
  date: '2026-10-10',
  minutes: 6,
  tag: 'Công nghệ',
  lead:
    'Phần giao diện và phần dựng video có hai nhịp sống khác nhau: một cái phải trả lời trong vài chục mili giây, một cái chạy hàng phút và ngốn gần hết máy. Bài này giải thích vì sao hai phần đó phải nằm ở hai tiến trình riêng, ranh giới chịu lỗi đặt ở đâu, và cái giá phải trả cho quyết định đó.',
  body: [
    { h2: 'Hai nhịp sống khác nhau trong cùng một máy' },
    {
      p: 'Một video bán hàng mất vài phút để dựng. Trong vài phút đó phần cứng bị chiếm gần hết: vi xử lý chạy liên tục, bộ nhớ tăng dần theo từng khung hình, ổ đĩa đọc và ghi cùng lúc. Nếu phần giao diện nằm chung một tiến trình với công việc đó, thì đúng lúc bạn bấm nút, máy đang bận nhất — và thứ bạn thấy là một cửa sổ đứng hình.\n\nKhông ai gọi đó là lỗi, nhưng nó là lỗi. Người dùng đọc một giao diện đứng hình là đọc một giao diện hỏng. Họ bấm lại, tắt đi, mở lại — trong khi phần mềm vẫn đang chạy đúng và chẳng có gì hỏng cả.',
    },
    { h2: 'Vấn đề thật sự không phải tốc độ, mà là phạm vi hỏng' },
    {
      p: 'Giả sử khâu dựng gặp một tệp nguồn hỏng và dừng lại. Nếu tất cả nằm trong một tiến trình, thứ dừng không phải một video — nó là cả chương trình. Bạn mất danh sách ba chục việc đang chờ, mất trạng thái từng việc, và phải bắt đầu lại từ đầu. Một tệp hỏng ở một video đã kéo theo cả lô.\n\nTách ra thì phạm vi hỏng thu lại còn đúng một việc. Tiến trình dựng dừng vì tệp đó, bộ điều phối đánh dấu việc ấy là lỗi, và đi tiếp việc sau. Phần giao diện không cần biết chuyện gì vừa xảy ra, ngoài việc một dòng trạng thái đổi màu.',
    },
    {
      figure: {
        src: '/blog/kien-truc-tach-tien-trinh.svg',
        alt: 'Sơ đồ kiến trúc ba tầng: giao diện người dùng ở trên, một hàng đợi công việc ở giữa, ba tiến trình dựng, giọng đọc và đăng bài chạy riêng bên dưới; tiến trình đăng bài bị đánh dấu lỗi nhưng hai tiến trình còn lại vẫn chạy bình thường.',
        caption:
          'Giao diện, hàng đợi và ba tiến trình công việc. Một việc hỏng chỉ dừng đúng tiến trình của nó — hai việc còn lại không biết gì.',
      },
    },
    { h2: 'Ba ranh giới chịu lỗi, không phải một' },
    {
      ul: [
        'Giữa giao diện và bộ điều phối: giao diện không giữ trạng thái thật của công việc. Nó chỉ hiển thị lại trạng thái đã được ghi xuống ổ đĩa, nên đóng cửa sổ rồi mở lại không làm mất gì và không làm sai gì.',
        'Giữa bộ điều phối và từng việc: mỗi việc chạy trong tiến trình của riêng nó, có thời gian chờ tối đa và số lần thử lại. Một việc treo không giữ chỗ của cả hàng đợi.',
        'Giữa từng việc và phần cứng: bước nặng nhất chạy một mình, không chia sẻ card đồ hoạ hay ổ đĩa với việc khác. Chậm hơn một chút khi chỉ có một việc, nhưng không bao giờ có cảnh hai việc giành nhau rồi cùng hỏng.',
      ],
    },
    {
      p: 'Ba ranh giới này được đặt ở đúng những chỗ có thể hỏng vì lý do bên ngoài: mạng đứt, nền tảng từ chối, một tệp nguồn tải về bị lỗi. Những chỗ đó không kiểm soát được, nên việc duy nhất làm được là giới hạn thiệt hại khi chúng xảy ra.',
    },
    { h2: 'Hàng đợi là bộ nhớ của hệ thống, không phải chỗ xếp hàng' },
    {
      p: 'Hàng đợi thường bị hiểu là một danh sách chờ cho đẹp mắt. Vai trò thật của nó là bộ nhớ: nó là thứ duy nhất biết cả lô đang ở đâu, việc nào đang chờ, việc nào đang chạy, việc nào đã xong.\n\nVì trạng thái được ghi xuống ổ đĩa ngay khi một việc đổi trạng thái, hàng đợi sống sót qua những lần không ai mong muốn: mất điện, người dùng tắt máy giữa chừng, một tiến trình bị hệ điều hành kết thúc. Mở lại, nó đọc trạng thái và biết chính xác phải làm tiếp từ đâu. Việc đang dở được chạy lại; việc đã xong không bị làm lại lần hai.',
    },
    {
      note: 'Đây là lý do một lô ba chục video không cần bạn ngồi canh. Giao xong rồi đóng máy tính vẫn được — việc đang dở sẽ được chạy lại ở lần mở sau, và những việc đã hoàn thành vẫn nằm nguyên ở đó.',
    },
    { h2: 'Cái giá phải trả' },
    {
      p: 'Không có lựa chọn kiến trúc nào miễn phí, và tách tiến trình thì không phải ngoại lệ. Cái giá là thật và nên nói thẳng:',
    },
    {
      ul: [
        'Thêm một bước bàn giao. Mỗi việc phải đi qua hàng đợi thay vì gọi thẳng, nên có thêm độ trễ nhỏ ở đầu và cuối mỗi việc.',
        'Trạng thái phải ghi ra đĩa thật sự. Giao diện không thể hỏi thẳng tiến trình đang chạy "xong chưa", nên mọi thay đổi phải được ghi lại — và phần đọc phải chịu được việc gặp một trạng thái cũ hơn thực tế một nhịp.',
        'Gỡ lỗi khó hơn. Một lỗi nằm ở ranh giới giữa hai tiến trình thì không có chỗ nào nhìn thấy nó cả; phải ghi log ở cả hai đầu và đối chiếu, thay vì đọc một dòng lỗi trong một khung gọi.',
        'Nhiều thứ phải cài hơn. Phần giao diện và phần dựng không dùng chung thư viện, nên mỗi lần cập nhật là hai lần kiểm tra phiên bản — và một bên lệch phiên bản thì phải sửa ở cả hai.',
        'Chậm hơn khi công việc nhỏ. Với một video dài ba giây thì chi phí khởi động một tiến trình còn lớn hơn chính công việc.',
      ],
    },
    { h2: 'Khi nào một tiến trình là đủ' },
    {
      p: 'Nếu bạn viết một công cụ dựng xong một video rồi thoát, tách tiến trình chỉ làm mọi thứ phức tạp thêm. Ranh giới chịu lỗi có giá trị khi thời gian chạy dài, khi có nhiều việc chạy nối tiếp nhau, và khi người dùng cần nhìn thấy tiến độ trong lúc chờ.\n\nCả ba điều đó đều đúng với một lô video bán hàng. Một lô hai chục video chạy qua đêm là quãng thời gian đủ dài để mọi thứ có thể xảy ra, và đủ dài để bạn không muốn một lỗi duy nhất xoá sạch công sức. Đó là lý do kiến trúc này được chọn, chứ không phải vì nó nghe hiện đại hơn.',
    },
    {
      p: 'Một cách nói khác cho dễ nhớ: tách tiến trình không làm phần mềm chạy nhanh hơn. Nó làm phần mềm chịu được chuyện xấu xảy ra — và trong một dây chuyền chạy hàng giờ, khả năng chịu đựng quan trọng hơn tốc độ đỉnh.',
    },
  ],
  faq: [
    {
      q: 'Tách tiến trình như vậy có làm máy tôi nặng hơn không?',
      a: 'Nặng hơn không đáng kể. Phần tài nguyên lớn nhất vẫn là khâu dựng video, và nó chiếm gần hết dù chạy chung hay chạy riêng. Cái tăng thêm chỉ là một vài tiến trình chờ, tốn vài chục đến vài trăm MB bộ nhớ.',
    },
    {
      q: 'Đang dựng video mà tôi đóng cửa sổ thì việc có mất không?',
      a: 'Không. Việc đang chạy vẫn tiếp tục, và trạng thái của nó đã được ghi lại. Mở lại cửa sổ, bạn thấy đúng chỗ nó đang ở. Nếu cả máy bị tắt giữa chừng thì việc đang dở sẽ được chạy lại ở lần mở sau.',
    },
    {
      q: 'Một video lỗi có làm cả lô dừng theo không?',
      a: 'Không. Mỗi việc chạy độc lập và được đánh dấu lỗi riêng, kèm lý do. Bạn chạy lại đúng việc đó, còn những việc khác vẫn xong bình thường.',
    },
    {
      q: 'Vì sao không chạy nhiều tiến trình cùng lúc cho nhanh hơn?',
      a: 'Vì tài nguyên trên máy có hạn và bước nặng nhất không chia nhỏ được. Mở nhiều việc cùng lúc chỉ làm mọi việc chậm đi và tăng nguy cơ hỏng. Con số việc chạy song song phụ thuộc cấu hình máy, không phải mong muốn.',
    },
  ],
};

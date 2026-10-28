/**
 * Blog post — "Mã nguồn mở: dùng gì, giấy phép nói gì, trả lại thế nào".
 *
 * How a commercial product stands on open source without either pretending it
 * does not or treating it as free labour: what a licence actually asks for,
 * what a dependency costs in maintenance rather than money, and the ways a
 * small team gives back. Names no library and no upstream project.
 */
export default {
  slug: {
    vi: 'ma-nguon-mo-dung-va-tra-lai',
    en: 'open-source-using-and-giving-back',
  },
  title: {
    vi: 'Mã nguồn mở: dùng gì, giấy phép nói gì, trả lại thế nào',
    en: 'Using open source, reading its licence, giving back',
  },
  description: {
    vi: 'Sản phẩm thương mại đứng trên mã nguồn mở: giấy phép thật ra yêu cầu gì, cái giá phi tiền của một thư viện, và năm cách trả lại khi bạn không có tiền.',
    en: 'What an open-source licence actually asks of a commercial product, why a dependency costs time rather than money, and five ways to give back.',
  },
  date: '2026-10-10',
  minutes: { vi: 7, en: 7 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Gần như mọi phần mềm bạn dùng hôm nay đều đứng trên mã nguồn mở, kể cả những phần mềm đóng nhất. Bài này nói về giấy phép bằng ngôn ngữ thường, cái giá thật của một thư viện không nằm ở tiền, và những cách trả lại mà một nhóm nhỏ vẫn làm được.',
    en: 'Almost every piece of software you use today stands on open source, including the most closed ones. This is what licences actually ask for, in ordinary words; why the real cost of a dependency is not money; and what a small team can give back.',
  },
  body: {
    vi: [
      {
        h2: 'Sản phẩm thương mại đứng trên mã nguồn mở là chuyện bình thường',
      },
      {
        p: 'Có một hiểu lầm hay gặp: dùng mã nguồn mở trong sản phẩm bán tiền là lợi dụng. Không phải. Gần như mọi tác giả của những thư viện đó viết ra chúng để người khác dùng — dùng trong sản phẩm thương mại cũng là dùng.\n\nĐiều họ không muốn là bị coi như lao động miễn phí không tên tuổi, hoặc bị lấy mã rồi quay lại bán đúng thứ họ đang cho không.\n\nNên vấn đề không phải "có được dùng hay không", mà là "dùng cho đúng cách, và có trả lại gì không". Giấy phép trả lời câu hỏi thứ nhất; phần còn lại của bài này là câu hỏi thứ hai.',
      },
      {
        h2: 'Giấy phép không phải thủ tục pháp lý xa vời, nó là điều kiện kỹ thuật',
      },
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
        figure: {"src":"/blog/ma-nguon-mo.svg","alt":"Sơ đồ phụ thuộc hình cây: sản phẩm ở trên cùng, bên dưới là các thư viện dựng video, engine giọng đọc, mô hình ngôn ngữ, thư viện giao diện và công cụ dòng lệnh, mỗi thư viện mang một nhãn giấy phép, trong đó nhánh GPL được đánh dấu là nhánh làm thay đổi nghĩa vụ; một mũi tên cong đi ngược lên sản phẩm ghi các cách đóng góp trở lại.","caption":"Cây phụ thuộc của một sản phẩm cỡ nhỏ. Điều ràng buộc bạn không phải là mã của thư viện, mà là giấy phép gắn trên nó."},
      },
      {
        h2: 'Trước khi thêm một thư viện, có bốn câu phải trả lời',
      },
      {
        ol: [
          'Giấy phép là gì, và nó có nằm trong nhóm copyleft không? Nếu có, câu hỏi tiếp theo là bạn có sẵn sàng công khai phần liên quan hay không. Không sẵn sàng thì đừng thêm.',
          'Ai đang bảo trì nó, và lần cập nhật gần nhất là khi nào? Một thư viện không còn ai sửa là một thư viện sẽ không bao giờ có bản vá bảo mật.',
          'Nó kéo theo bao nhiêu thứ khác? Một thư viện nhỏ có thể kéo theo hai chục thư viện con, và bạn vừa nhận thêm hai chục giấy phép nữa để đọc.',
          'Nếu phải bỏ nó ra thì mất bao lâu? Chỗ nào khó bỏ nhất thì nên là chỗ được đọc kỹ nhất.',
        ],
      },
      {
        h2: 'Cái giá thật của một thư viện không nằm ở tiền',
      },
      {
        p: 'Mã nguồn mở miễn phí về tiền, nhưng không miễn phí. Cái bạn trả là thời gian, và nó đến từ bốn hướng.\n\nThứ nhất là nâng cấp. Một thư viện đổi phiên bản lớn có thể làm vỡ mã của bạn ở chỗ bạn không ngờ, và bạn chỉ biết khi chạy.\n\nThứ hai là bị bỏ rơi: thư viện đứng yên trong khi hệ điều hành và trình biên dịch đi tiếp, vài năm sau nó không còn cài được nữa.\n\nThứ ba là lỗ hổng bảo mật — bạn phải biết mình đang dùng gì để biết hôm nay phải cập nhật cái gì.\n\nThứ tư, và ít ai nói tới, là sự hiểu nhầm: bạn tưởng thư viện làm việc A, thực ra nó làm việc B, và bạn phát hiện ra ở giai đoạn đã viết xong cả dây chuyền dựa trên giả định sai đó.',
      },
      {
        note: 'Một thư viện bị bỏ rơi rồi cũng là một khoản nợ, chỉ có điều người ta chỉ gọi tên nó khi đã quá muộn. Hoá đơn đến vào đúng lúc bạn đang cài sản phẩm lên máy một khách hàng mới, và không có bản vá nào để tải về cả.',
      },
      {
        h2: 'Có năm cách trả lại mà không cần đồng nào',
      },
      {
        p: 'Không phải ai cũng có tiền tài trợ, và các tác giả cũng không chỉ cần tiền. Với một nhóm nhỏ, những việc sau đây có giá trị thật:',
      },
      {
        ul: [
          'Báo lỗi có tái hiện. Không phải "nó không chạy", mà là các bước để người khác nhìn thấy đúng lỗi đó, trên phiên bản nào. Một báo lỗi tốt tiết kiệm cho người bảo trì vài giờ, có khi vài ngày.',
          'Gửi bản vá kèm kiểm thử. Với thư viện bạn dùng hàng ngày, sửa một lỗi nhỏ rồi gửi lại là cách trả lại rẻ nhất — và người được lợi nhiều nhất là chính bạn, vì lần nâng cấp sau bạn không phải tự vá lại.',
          'Tài liệu và bản dịch. Nhiều thư viện tốt bị bỏ qua chỉ vì tài liệu khó đọc. Viết một ví dụ chạy được, hoặc dịch phần hướng dẫn cho người sau, là đóng góp không ai làm và ai cũng cần.',
          'Giữ lại phần ghi công. Đây không phải tuỳ chọn — nó là điều kiện của giấy phép, và cũng là phép lịch sự tối thiểu.',
          'Tài trợ định kỳ cho một hai thư viện bạn phụ thuộc nhất. Số tiền nhỏ nhưng đều, và nhắm đúng chỗ bạn thật sự không thể thiếu, có ý nghĩa hơn rải khắp nơi.',
        ],
      },
      {
        h2: 'Khách hàng có quyền biết sản phẩm đứng trên nền nào',
      },
      {
        p: 'Có một sai lầm nữa đáng tránh: im lặng. Người mua có quyền biết sản phẩm họ trả tiền đứng trên nền nào, và một bản ghi công đầy đủ là cách nói điều đó mà không cần giải thích dài.\n\nNgược lại, đừng lấy mã nguồn mở làm nhãn dán tiếp thị. Miễn phí không tự động có nghĩa là tốt, cũng không tự động có nghĩa là an toàn. Nó chỉ có nghĩa là mã được viết công khai và ai cũng đọc được — phần đáng giá nằm ở việc có ai đó đã đọc nó hay chưa.',
      },
      {
        p: 'Với một sản phẩm nhỏ, làm đúng ba việc này đã là đủ: biết mình đang dùng gì và giấy phép là gì, giữ lại phần ghi công, và thỉnh thoảng sửa một lỗi rồi gửi lại. Ba việc đó không cần ngân sách, chỉ cần để ý.',
      },
    ],
    en: [
      {
        h2: 'A commercial product standing on open source is normal',
      },
      {
        p: 'There is a common misunderstanding: that using open source inside a product you sell is taking advantage. It is not. Almost everyone who wrote those libraries wrote them to be used — and being used in commercial software is still being used.\n\nWhat they do not want is to be treated as unnamed free labour, or to have somebody take the code and sell back the very thing they are giving away.\n\nSo the question is not "am I allowed to use this" but "am I using it properly, and giving anything back". The licence answers the first; the rest of this article is the second.',
      },
      {
        h2: 'A licence is not distant legal paperwork, it is an engineering condition',
      },
      {
        p: 'A library’s licence decides what you may do with it and what you owe in return. If you build products, you only need to tell two groups apart:',
      },
      {
        ul: [
          'The permissive group (MIT, BSD, Apache 2.0): use it, change it, sell it, ship it closed. Your only obligation is to keep the attribution and the original licence text. Apache 2.0 adds a sentence about patents, and that sentence is usually why people pick it for large libraries.',
          'The copyleft group (GPL, AGPL): you may still use it, but if you ship a product built on it, whoever receives that product must be able to get the source of that part. AGPL extends the obligation to the case where people only run it over a network instead of installing it.',
          'No licence at all: by default, all rights are reserved. No licence does not mean use it freely — it means you have not been granted anything.',
          'Licences that change between versions: the same library, permissive in an old version and stricter in a new one. Upgrading without re-reading is the most common way to walk into trouble.',
        ],
      },
      {
        figure: {"src":"/blog/ma-nguon-mo-en.svg","alt":"A tree-shaped dependency diagram: the product on top, below it libraries for video rendering, speech engines, language models, the interface and command-line tools, each carrying a licence label, with the GPL branch marked as the one that changes your obligations; a curved arrow runs back up to the product listing ways to contribute.","caption":"The dependency tree of a small product. What constrains you is not the library’s code but the licence attached to it."},
      },
      {
        h2: 'Before adding a library, there are four questions to answer',
      },
      {
        ol: [
          'What is the licence, and is it in the copyleft group? If it is, the next question is whether you are willing to publish the related part. If you are not, do not add it.',
          'Who maintains it, and when was the last update? A library nobody edits is a library that will never get a security fix.',
          'How much else does it drag in? A small library can pull in twenty others, and you have just signed up to read twenty more licences.',
          'How long would removing it take? Whatever is hardest to remove should be what you read most carefully.',
        ],
      },
      {
        h2: 'The real cost of a library is not money',
      },
      {
        p: 'Open source is free as in money, but it is not free. What you pay is time, and it arrives from four directions.\n\nThe first is upgrades. A library releasing a major version can break your code somewhere you never expected, and you only find out when it runs.\n\nThe second is abandonment: the library stands still while the operating system and the compiler move on, and a few years later it no longer installs.\n\nThe third is security: you have to know what you depend on in order to know what needs updating today.\n\nThe fourth, and the one nobody mentions, is misunderstanding. You think a library does job A, it actually does job B, and you discover that after building the whole pipeline on the wrong assumption.',
      },
      {
        note: 'An abandoned library is still a debt — people just do not name it until it is too late. The bill arrives exactly when you are installing your product on a new customer’s machine, and there is no patch to download.',
      },
      {
        h2: 'There are five ways to give back without spending anything',
      },
      {
        p: 'Not everybody has money to sponsor with, and authors do not only need money. For a small team, the following are worth something real:',
      },
      {
        ul: [
          'A bug report somebody can reproduce. Not "it does not work", but the steps that show the same failure, on which version. A good report saves the maintainer hours, sometimes days.',
          'A patch with a test. For a library you use daily, fixing a small bug and sending it back is the cheapest way to repay — and the biggest beneficiary is you, because the next upgrade will not need your patch again.',
          'Documentation and translation. Plenty of good libraries get passed over only because their docs are hard to read. A working example, or a translated guide for whoever comes next, is a contribution nobody makes and everybody needs.',
          'Keeping the attribution. This is not optional — it is the condition of the licence, and the minimum courtesy.',
          'A small regular donation to the one or two libraries you depend on most. Small but steady, aimed where you genuinely cannot do without, means more than scattering it around.',
        ],
      },
      {
        h2: 'Customers have a right to know what the product stands on',
      },
      {
        p: 'There is one more mistake worth avoiding: silence. The people who pay you have a right to know what the product stands on, and a complete attribution file says that without a long explanation.\n\nThe other direction is worse: do not use open source as a marketing badge. Free does not automatically mean good, and it does not automatically mean safe. It only means the code is public and anyone can read it — what matters is whether anyone actually has.',
      },
      {
        p: 'For a small product, doing three things is enough: know what you use and under what licence, keep the attribution, and every so often fix a bug and send it back. None of that needs a budget, only attention.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Thư viện dùng giấy phép GPL thì tôi có được bán sản phẩm không?',
        a: 'Được, nhưng có điều kiện. Nếu bạn phát hành sản phẩm dựa trên nó, bạn phải cho người nhận quyền có được mã nguồn của phần liên quan. Không muốn điều đó thì đừng dùng thư viện đó — hoặc tìm một thư viện cùng chức năng với giấy phép dễ tính hơn. Đây không phải tư vấn pháp lý, nên với sản phẩm lớn hãy hỏi người làm luật.',
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
        a: 'Báo lỗi có tái hiện, gửi bản vá nhỏ, viết ví dụ hoặc dịch tài liệu, và giữ đầy đủ phần ghi công khi dùng. Tất cả đều không tốn tiền và đều có giá trị thật với người bảo trì.',
      },
    ],
    en: [
      {
        q: 'A library uses the GPL. Can I still sell my product?',
        a: 'Yes, with conditions. If you ship a product built on it, whoever receives that product must be able to get the source of the related part. If you do not want that, do not use that library — or find one that does the same job under a permissive licence. This is not legal advice, so for anything large, ask a lawyer.',
      },
      {
        q: 'Is your product open source?',
        a: 'Our own code is not, and we do not promise it will be. The libraries we use keep their own licences, attribution is kept complete, and we send patches back for the bugs we hit.',
      },
      {
        q: 'Is open source riskier for security than writing it yourself?',
        a: 'Not really. Public code gets read by more people, and holes tend to be found faster. The real risk is elsewhere: a library nobody maintains has nobody fixing it, and a small, rarely used library has nobody reading it.',
      },
      {
        q: 'I have no money. How do I give back?',
        a: 'Reproducible bug reports, small patches, examples and translations, and keeping the attribution complete when you use something. All of it costs nothing and all of it is worth something to a maintainer.',
      },
    ],
  },
};

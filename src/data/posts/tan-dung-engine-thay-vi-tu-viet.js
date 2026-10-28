/**
 * Blog post — "Tận dụng engine thay vì tự viết".
 *
 * Standing on other people's engines: video encoding, Vietnamese speech, and
 * language models. Which parts of this product are delegated, which are its own
 * code, and how an engine is judged before it is trusted. Names no library and
 * no upstream project.
 */
export default {
  slug: {
    vi: 'tan-dung-engine-thay-vi-tu-viet',
    en: 'reuse-an-engine',
  },
  title: {
    vi: 'Tận dụng engine thay vì tự viết: chỗ nào nên tự làm',
    en: 'Reusing engines: what to borrow, what to build',
  },
  description: {
    vi: 'Dùng engine mã hoá, giọng đọc và mô hình ngôn ngữ thay vì tự viết: đâu là thứ nên mượn, đâu là thứ buộc phải tự làm, và năm câu hỏi để đánh giá một engine.',
    en: 'Which encoding, speech and language engines are worth borrowing, what you must build yourself, and five questions to ask before trusting one.',
  },
  date: '2026-10-10',
  minutes: { vi: 8, en: 8 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Một sản phẩm làm video tự động không thể tự viết mọi thứ. Bài này nói rõ chỗ nào nên mượn engine có sẵn, chỗ nào buộc phải là mã của mình, cách đánh giá một engine trước khi đưa vào dây chuyền, và vì sao phần keo nối mới là sản phẩm.',
    en: 'A product that makes videos automatically cannot write every part of itself. This is where to borrow an engine, where the code has to be yours, how to judge an engine before it goes into the pipeline, and why the glue is the product.',
  },
  body: {
    vi: [
      {
        h2: 'Tự viết nghe oai, cho tới lúc phải bảo trì',
      },
      {
        p: 'Người mới thường muốn tự viết mọi khâu. Nghe thì hợp lý: mình hiểu, mình sửa được, không phụ thuộc ai. Nhưng hãy đếm xem bạn đang định tự viết cái gì.\n\nMột bộ mã hoá video tử tế là công trình của nhiều người trong nhiều năm, với hàng nghìn trường hợp biên mà bạn chỉ phát hiện ra khi gặp. Một engine giọng đọc tiếng Việt đúng dấu là một bài toán riêng, không phải một tính năng nhỏ.\n\nVấn đề không nằm ở chỗ bạn có viết nổi không. Vấn đề nằm ở chỗ: viết xong thì bạn phải bảo trì nó mãi.\n\nMỗi lần hệ điều hành đổi, mỗi lần một định dạng đầu vào mới xuất hiện, bạn là người duy nhất phải sửa. Sản phẩm có thêm một khâu không ai dùng, và thêm một chỗ để hỏng.',
      },
      {
        h2: 'Ba thứ không nên tự viết',
      },
      {
        ol: [
          'Mã hoá video. Card đồ hoạ của bạn đã có sẵn chip mã hoá chuyên dụng, và bộ mã hoá chạy bằng vi xử lý là thứ đã được tối ưu qua hàng chục phiên bản. Tự viết lại phần này nghĩa là bạn đi giải một bài toán đã có lời giải tốt hơn, ở mọi khía cạnh trừ khía cạnh bạn chưa từng gặp.',
          'Giọng đọc tiếng Việt. Tiếng Việt có dấu, và đọc sai một dấu là sai nghĩa. Đây là loại việc mà chất lượng đến từ dữ liệu huấn luyện chứ không đến từ mã.',
          'Mô hình ngôn ngữ. Không ai viết một mô hình ngôn ngữ cho một sản phẩm làm video. Bạn dùng mô hình có sẵn qua một nhà cung cấp, và giá trị bạn thêm vào nằm ở chỗ khác.',
        ],
      },
      {
        p: 'Điểm chung của ba thứ trên: chúng đều đã có lời giải tốt hơn ở ngoài, và không thứ nào là chỗ bạn tạo ra khác biệt. Việc của bạn là biết dùng đúng chúng, không phải làm lại chúng.',
      },
      {
        h2: 'Cả dây chuyền có bốn việc, và cả bốn đều đã có người làm tốt hơn',
      },
      {
        figure: {"src":"/blog/engine-pipeline.svg","alt":"Sơ đồ dây chuyền từ nguồn tới file hoàn chỉnh: viết kịch bản giao cho mô hình ngôn ngữ, giọng đọc giao cho engine chạy tại máy, dựng hình giao cho thư viện dựng video, và mã hoá giao cho chip mã hoá trên card đồ hoạ; phần sản phẩm tự viết chỉ là đường nối, thứ tự chạy và các bước kiểm tra.","caption":"Bốn việc, bốn engine. Phần thuộc về sản phẩm là dải nét đứt bên dưới: thứ tự, đường nối, và các bước kiểm tra kết quả."},
      },
      {
        h2: 'Bước mã hoá là chỗ đáng tiền nhất',
      },
      {
        p: 'Trong cả dây chuyền, mã hoá là bước tốn thời gian nhất, và cũng là bước dễ cải thiện nhất. Cùng một video, mã hoá bằng vi xử lý và mã hoá bằng chip chuyên dụng trên card đồ hoạ cho ra hai khoảng thời gian chênh nhau nhiều lần — không phải vài phần trăm, mà là bội số.\n\nCái giá phải trả là chất lượng, và đây là chỗ nhiều người làm sai. Chip mã hoá phần cứng cho ra tệp to hơn một chút ở cùng mức chất lượng, và có những tham số phải tinh chỉnh bằng tay để hình không bị nhoè ở chuyển động nhanh. Chọn sai tham số thì bạn đã đổi thời gian lấy chất lượng nhìn thấy được bằng mắt.\n\nCách tôi xử lý: mặc định dùng chip phần cứng, nhưng để mức chất lượng đủ cao, và giữ đường mã hoá bằng vi xử lý làm phương án cho máy không có card đồ hoạ phù hợp. Một sản phẩm chỉ chạy được khi có card đồ hoạ là một sản phẩm đã tự đuổi nửa số khách hàng của mình đi.',
      },
      {
        h2: 'Giọng đọc chạy ngay tại máy, ngược với phần lớn dịch vụ hiện nay',
      },
      {
        p: 'Phần lớn dịch vụ giọng đọc hiện nay chạy trên mây: bạn gửi câu chữ lên, nhận về tệp âm thanh. Cách đó nhanh, giọng đẹp, và không tốn máy. Nhưng nó có ba nhược điểm mà với người làm nghề bán hàng thì đều quan trọng.\n\nThứ nhất, mỗi video lại tốn tiền, và số tiền đó không có trần rõ ràng. Thứ hai, không có mạng thì không có video — trong khi phần dựng hình vẫn chạy tốt ở máy. Thứ ba, toàn bộ lời thoại của bạn đi ra khỏi máy bạn, từng câu một.\n\nNên engine giọng đọc ở đây chạy ngay tại máy. Chậm hơn một chút khi so với một máy chủ mạnh, nhưng chạy bao nhiêu cũng được, không cần mạng, và câu chữ không đi đâu cả.',
      },
      {
        h2: 'Phần bắt buộc phải tự viết là phần keo',
      },
      {
        p: 'Nếu không viết engine, vậy sản phẩm này thật ra là gì? Nó là phần keo nối, và phần keo mới là thứ khách hàng trả tiền:',
      },
      {
        ul: [
          'Thứ tự chạy. Việc nào trước, việc nào chờ, việc nào chạy lại khi lỗi. Đây là hiểu biết về nghề làm video bán hàng, không phải về mã hoá.',
          'Kiểm tra kết quả. Engine trả về một tệp và nói đã xong. Nhưng tệp đó có mở được không, có dài đúng không, có tiếng không, phụ đề có khớp không — engine không trả lời những câu đó.',
          'Kịch bản và nhịp. Một video ba mươi giây cho một sản phẩm Shopee có cấu trúc riêng. Cấu trúc đó do người làm nghề viết ra, không engine nào tự biết.',
          'Lắp ghép. Chữ ở đâu, logo ở đâu, giọng đọc khớp với hình thế nào, template áp vào ra sao. Đây là phần bạn nhìn thấy trên video, và là phần duy nhất không thể mua.',
          'Chính sách và giới hạn. Không tự bịa giá, không tự thêm lời hứa, không đăng khi chưa được duyệt. Engine không có khái niệm đó.',
        ],
      },
      {
        h2: 'Năm câu hỏi để đánh giá một engine trước khi tin',
      },
      {
        ol: [
          'Giấy phép có cho phép bạn dùng nó trong sản phẩm thương mại hay không. Đọc trước, đừng đọc sau.',
          'Còn ai bảo trì nó không. Xem lần cập nhật gần nhất và số người đang làm. Một thư viện bị bỏ rơi là một khoản nợ, không phải một món quà.',
          'Nó có chạy được khi không có mạng không. Nếu câu trả lời là không, bạn vừa thêm một điểm hỏng nằm ngoài tầm kiểm soát của mình.',
          'Đầu ra có kiểm tra được bằng máy không. Nếu bạn không thể tự động xác nhận nó đã làm đúng, bạn sẽ phải ngồi kiểm bằng mắt từng video.',
          'Bỏ nó ra có tốn nhiều không. Mọi engine đều có thể phải thay. Nếu nó nằm rải rác khắp mã, bạn đã tự trói mình.',
        ],
      },
      {
        h2: 'Bạn bán phần keo, và đó không phải là sản phẩm kém cỏi hơn',
      },
      {
        p: 'Nói cho cùng, một sản phẩm đứng trên engine của người khác không phải là sản phẩm kém cỏi hơn. Nó là sản phẩm biết chỗ nào không nên cãi nhau với thế giới. Bạn mượn phần đã được giải quyết, và dồn công sức vào phần chưa ai giải quyết: biến một quy trình làm video thủ công thành một việc bấm nút, chạy được trên máy của người bán hàng, với câu chữ và nhịp đúng kiểu Việt Nam.',
      },
      {
        note: 'Nếu một sản phẩm khoe rằng nó tự viết mọi thứ từ đầu, hãy hỏi nó cập nhật lần cuối khi nào. Tự viết nhiều thường có nghĩa là bảo trì nhiều, chứ không có nghĩa là chạy tốt hơn — và một khâu tự viết đã bị bỏ rơi thì tệ hơn hẳn một engine có người chăm.',
      },
    ],
    en: [
      {
        h2: 'Writing it yourself sounds impressive until you have to maintain it',
      },
      {
        p: 'People new to this want to write every part themselves. It sounds reasonable: I understand it, I can fix it, I depend on nobody. But count what you are about to write.\n\nA decent video encoder is years of work by a lot of people, with thousands of edge cases you only meet by hitting them. A Vietnamese speech engine that gets the tones right is its own research problem, not a small feature.\n\nThe problem is not whether you can write it. The problem is that once it is written, you maintain it forever.\n\nEvery time the operating system changes, every time a new input format shows up, you are the only person who fixes it. The product gains a step nobody uses and one more place to break.',
      },
      {
        h2: 'Three things you should not write yourself',
      },
      {
        ol: [
          'Video encoding. Your graphics card already has a dedicated encoder chip, and the software encoder has been optimised across dozens of releases. Rewriting it means solving a problem that already has a better answer, in every respect except the one case you have not met yet.',
          'Vietnamese speech. Vietnamese carries tones, and the wrong tone is the wrong word. This is the kind of work where quality comes from training data, not from code.',
          'Language models. Nobody writes a language model for a video product. You use one through a provider and put your effort into the part that is yours.',
        ],
      },
      {
        p: 'What those three have in common: each already has a better answer outside your code, and none of them is where you are different. Your job is to use them well, not to rebuild them.',
      },
      {
        h2: 'The whole pipeline is four jobs, and all four already have someone better at them',
      },
      {
        figure: {"src":"/blog/engine-pipeline-en.svg","alt":"A pipeline diagram from source material to a finished file: writing the script goes to a language model, the voice goes to an engine running on the machine, the picture goes to a video library, and encoding goes to the encoder chip on the graphics card; the only code belonging to the product is the wiring, the order of steps and the checks between them.","caption":"Four jobs, four engines. What belongs to the product is the dashed band underneath: the order, the wiring, and the checks on each result."},
      },
      {
        h2: 'Encoding is the step worth the most money',
      },
      {
        p: 'Across the whole pipeline, encoding takes the most time and is the easiest step to improve. The same video, encoded on the processor and encoded on the dedicated chip, comes out as two very different durations — not a few percent, but a multiple.\n\nWhat you pay is quality, and this is where a lot of people get it wrong. A hardware encoder produces a slightly larger file at the same quality setting, and some parameters need tuning by hand so fast movement does not smear. Get those parameters wrong and you have traded time for quality loss you can see.\n\nHow I handle it: use the hardware chip by default, but set the quality high enough, and keep the processor path as the fallback for machines without a suitable card. A product that only runs with a graphics card has already shown half its customers the door.',
      },
      {
        h2: 'Speech runs on your machine, which is not what most services do',
      },
      {
        p: 'Most speech services today run in the cloud: you send the words up, you get an audio file back. That is fast, the voices sound good, and it costs your machine nothing. It also has three drawbacks, and for somebody selling online all three matter.\n\nFirst, every video costs money, and there is no clear ceiling on that number. Second, no network means no video — while the rendering side works perfectly well on the machine. Third, your entire script leaves your computer, one sentence at a time.\n\nSo the speech engine here runs locally. A little slower than a strong server, but you can run it as much as you like, it needs no network, and the words never go anywhere.',
      },
      {
        h2: 'The part you must write yourself is the glue',
      },
      {
        p: 'If the engines are not yours, what is this product really? It is the glue, and the glue is what a customer pays for:',
      },
      {
        ul: [
          'The order of operations. What runs first, what waits, what runs again after a failure. That is knowledge of the sales video trade, not of encoding.',
          'Checking the results. An engine returns a file and says it is done. Whether that file opens, runs the right length, has sound, has subtitles in the right place — the engine does not answer any of that.',
          'Script and rhythm. A thirty-second video for a Shopee product has its own structure, written by someone who does this for a living. No engine knows it.',
          'Assembly. Where the text sits, where the logo sits, how the voice lines up with the picture, how a template lands on the whole thing. This is what you see on the video, and the one part that cannot be bought.',
          'Policy and limits. Not inventing prices, not adding promises, not posting before approval. Engines have no concept of any of it.',
        ],
      },
      {
        h2: 'Five questions to judge an engine before you trust it',
      },
      {
        ol: [
          'Does the licence let you use it in a commercial product? Read it first, not afterwards.',
          'Is anyone still maintaining it? Look at the last update and how many people are on it. An abandoned library is a debt, not a gift.',
          'Does it work without a network? If the answer is no, you have just added a point of failure you do not control.',
          'Can its output be checked by a machine? If you cannot confirm automatically that it did the right thing, you will be checking every video by eye.',
          'How expensive is it to remove? Every engine may have to be replaced. If it is scattered through your code, you have tied your own hands.',
        ],
      },
      {
        h2: 'You sell glue, and that is not the weaker product',
      },
      {
        p: 'In the end, a product standing on other people’s engines is not a lesser product. It is a product that knows which fights are not worth having. You borrow what has already been solved, and put the effort into what nobody has solved: turning a manual video process into a button press, running on a seller’s own machine, with wording and rhythm that fit how people actually sell here.',
      },
      {
        note: 'If a product boasts that it wrote everything itself from scratch, ask when it last shipped an update. Writing more usually means maintaining more — it does not mean running better. And a self-written part that has been abandoned is far worse than an engine somebody still looks after.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Dùng engine có sẵn thì chất lượng video có kém hơn không?',
        a: 'Ngược lại là khác. Những engine đã được nhiều người dùng qua nhiều năm thường cho chất lượng cao hơn thứ tự viết, vì chúng đã gặp và xử lý rất nhiều trường hợp biên. Chất lượng video phụ thuộc vào tham số bạn chọn, không phụ thuộc vào việc engine do ai viết.',
      },
      {
        q: 'Sản phẩm có gửi lời thoại của tôi lên máy chủ nào không?',
        a: 'Phần giọng đọc và phần dựng hình chạy tại máy bạn, nên câu chữ không đi đâu cả. Chỉ phần nhờ mô hình ngôn ngữ viết kịch bản mới gửi chữ ra ngoài, qua nhà cung cấp AI do bạn chọn.',
      },
      {
        q: 'Máy tôi không có card đồ hoạ rời thì có dùng được không?',
        a: 'Được. Sản phẩm tự nhận biết máy có chip mã hoá phù hợp hay không. Có thì dùng để chạy nhanh hơn nhiều, không có thì chuyển sang mã hoá bằng vi xử lý — chậm hơn nhưng vẫn ra đúng kết quả.',
      },
      {
        q: 'Nếu engine bên ngoài ngừng hoạt động thì sao?',
        a: 'Phần chạy tại máy không phụ thuộc vào ai, nên kịch bản đã viết và video đã dựng vẫn còn nguyên. Chỉ bước nhờ mô hình ngôn ngữ viết kịch bản cần mạng, và bước đó không ảnh hưởng tới những video đã có sẵn kịch bản.',
      },
    ],
    en: [
      {
        q: 'Does reusing engines mean worse video quality?',
        a: 'The opposite. Engines that many people have used for years usually produce better quality than something written from scratch, because they have met and handled an enormous number of edge cases. Video quality depends on the parameters you choose, not on who wrote the engine.',
      },
      {
        q: 'Does the product send my script to a server somewhere?',
        a: 'Speech and rendering run on your machine, so the words do not go anywhere. Only the step that asks a language model to write the script sends text out, through the provider you chose yourself.',
      },
      {
        q: 'My machine has no separate graphics card. Can I still use it?',
        a: 'Yes. It detects whether the machine has a suitable encoder chip. If it does, that path is much faster; if it does not, it falls back to encoding on the processor — slower, same result.',
      },
      {
        q: 'What happens if an outside engine stops working?',
        a: 'The local parts depend on nobody, so scripts already written and videos already rendered are still there. Only the step that asks a language model for a script needs a network, and that step does not affect videos that already have one.',
      },
    ],
  },
};

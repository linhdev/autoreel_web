/**
 * Blog post — "Mỗi tầng một ngôn ngữ: chọn theo hệ sinh thái".
 *
 * Why this product is polyglot rather than loyal to one language, which
 * ecosystem decides each layer, and what the extra language costs. Names only
 * public technologies a reader already knows; no internal module names.
 */
export default {
  slug: {
    vi: 'chon-ngon-ngu-lap-trinh-cho-tung-tang',
    en: 'choosing-a-language-per-layer',
  },
  title: {
    vi: 'Mỗi tầng một ngôn ngữ: chọn theo hệ sinh thái',
    en: 'One language per layer, chosen by ecosystem',
  },
  description: {
    vi: 'Vì sao mỗi tầng dùng một ngôn ngữ khác nhau, chọn theo thư viện chứ không theo sở thích, năm khoản phải trả của đa ngôn ngữ, và chỗ tôi từ chối thêm.',
    en: 'Why each layer uses a different language, chosen by library rather than taste, the five things a polyglot product costs, and where I refuse to add one.',
  },
  date: '2026-10-10',
  minutes: { vi: 7, en: 7 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Không có ngôn ngữ nào tốt nhất cho mọi việc, và cũng không có chuyện một ngôn ngữ làm hết mọi tầng mà vẫn tử tế. Bài này nói về cách chọn ngôn ngữ cho từng tầng theo thư viện, chỗ nào tôi từ chối thêm ngôn ngữ mới, và cái giá thật của một sản phẩm đa ngôn ngữ.',
    en: 'No language is best at everything, and no single language covers every layer without something suffering. This is how a language gets picked per layer — by the libraries that exist, not by preference — where I refuse to add another one, and what being polyglot actually costs.',
  },
  body: {
    vi: [
      {
        h2: 'Ngôn ngữ không phải chuyện sở thích, mà là chuyện thư viện',
      },
      {
        p: 'Khi ai đó hỏi tôi chọn ngôn ngữ nào, câu trả lời thật là: chọn thư viện trước, ngôn ngữ theo sau. Bạn không viết bộ mã hoá video từ đầu, cũng không tự huấn luyện một mô hình ngôn ngữ. Bạn dùng thứ có sẵn, và thứ có sẵn chỉ có một hoặc hai ngôn ngữ dùng được thật sự.\n\nNên câu hỏi đúng không phải "ngôn ngữ nào đẹp nhất", mà là "việc này đã có ai làm rồi chưa, và họ viết bằng gì". Chọn theo sở thích ở đây đồng nghĩa với việc tự viết lại thứ người khác đã mất mười năm làm.',
      },
      {
        h2: 'Mỗi tầng lấy ngôn ngữ từ thư viện mạnh nhất của nó',
      },
      {
        figure: {"src":"/blog/ngon-ngu-theo-tang.svg","alt":"Bảng đối chiếu ba nhóm tầng với ngôn ngữ phụ trách: giao diện dùng TypeScript, tầng điều phối dùng Python, tầng engine nặng dùng Python gọi xuống thư viện viết bằng C và C++, và tầng cấu hình dùng chung một định dạng dữ liệu.","caption":"Không phải tầng nào cũng cần đủ ba ngôn ngữ. Cột trống trong bảng cũng là một quyết định: nó là chỗ tôi từ chối viết thêm mã."},
      },
      {
        ul: [
          'Giao diện: TypeScript chạy trên trình duyệt. Đây không phải lựa chọn — trình duyệt chỉ hiểu một ngôn ngữ, và cả hệ sinh thái giao diện nằm ở đó. Dùng TypeScript thay vì JavaScript thuần vì phần giao diện của một công cụ làm việc có rất nhiều trạng thái, và kiểu dữ liệu là cách rẻ nhất để bắt lỗi trước khi chạy.',
          'Điều phối: Python. Đây là tầng quyết định việc gì chạy trước, việc gì chờ, bước nào tiếp theo. Nó nằm cạnh engine nặng nên khoảng cách giữa hai tầng gần như bằng không.',
          'Engine nặng: Python gọi xuống các thư viện viết bằng C và C++. Không ai viết lại bộ mã hoá video bằng Python, nhưng cũng không ai viết phần điều khiển bằng C. Việc nặng chạy ở tầng dưới, việc sắp đặt chạy ở tầng trên.',
          'Cấu hình: không phải ngôn ngữ lập trình, mà là dữ liệu có cấu trúc. Template video, danh sách sản phẩm, nhãn trạng thái — những thứ này không nên viết bằng mã, vì bạn muốn sửa chúng mà không phải cài lại gì.',
        ],
      },
      {
        h2: 'Giao diện không viết bằng Python, vì nó sẽ dính vào tiến trình chạy hàng giờ',
      },
      {
        p: 'Một cách làm phổ biến là dựng giao diện bằng chính ngôn ngữ của phần nặng rồi mở nó trong trình duyệt. Cách đó tiết kiệm được một ngôn ngữ, và trả giá bằng ba thứ.\n\nThứ nhất, mọi trạng thái giao diện đi vòng qua máy chủ, nên giao diện chậm theo đúng nhịp của máy chủ đó. Thứ hai, giao diện trở thành một trang web do máy chủ vẽ lại từng bước, không phải một ứng dụng bấm nhanh được.\n\nThứ ba, và là thứ nặng nhất: mỗi lần bạn muốn sửa một cái nút, bạn phải đụng vào mã của tiến trình đang chạy hàng giờ. Giao diện và khâu dựng dính vào nhau, và ranh giới chịu lỗi biến mất.',
      },
      {
        h2: 'Đa ngôn ngữ có năm khoản phải trả, và khoản đắt nhất không nằm ở mã',
      },
      {
        ul: [
          'Hai bộ công cụ phải cài. Hai lần quản lý phiên bản thư viện, hai lần kiểm tra lỗ hổng, hai kiểu lỗi khác nhau khi cài trên một máy mới.',
          'Ranh giới giữa hai ngôn ngữ phải là dữ liệu, không phải lời gọi hàm. Hai bên chỉ trao đổi bằng những cấu trúc dữ liệu có hình dạng rõ ràng. Ai đó đổi một trường thì phải đổi ở cả hai phía, và không có trình biên dịch nào nhắc hộ.',
          'Kiểu dữ liệu không đi qua được ranh giới. Bên TypeScript tin rằng trường đó luôn có, bên Python có thể trả về rỗng, và lỗi chỉ hiện ra lúc chạy. Nên mọi giá trị đi qua ranh giới đều phải được kiểm tra ở phía nhận.',
          'Tuyển người khó hơn. Một người phải đọc được cả hai phía, và người như vậy đắt hơn người chỉ biết một.',
          'Lỗi ở ranh giới khó tìm nhất. Khi một việc chạy đúng ở phía này mà sai ở phía kia, chỗ hỏng thường không nằm ở mã, mà ở một giả định hai bên hiểu khác nhau.',
        ],
      },
      {
        note: 'Chỗ đau nhất của đa ngôn ngữ không nằm ở việc cài hai bộ công cụ, mà ở chỗ ranh giới không có ai canh: hai bên chỉ trao đổi bằng dữ liệu, kiểu dữ liệu không đi qua được, và không trình biên dịch nào nhắc hộ khi một bên hiểu khác đi. Lỗi loại đó chỉ hiện ra lúc chạy — và thường hiện ra ở phía bạn không ngờ.',
      },
      {
        h2: 'Tôi từ chối thêm ngôn ngữ để tăng tốc một khâu đã nhanh',
      },
      {
        p: 'Một ngôn ngữ nữa chỉ nên vào khi nó mở ra một thứ không làm được bằng cách khác. Tôi từ chối thêm ngôn ngữ để tăng tốc một khâu đã nhanh, để viết lại một thư viện đã tốt, hay để dùng một công cụ chỉ có vài người biết. Ba lý do đó nghe đủ, nhưng cái giá phải trả là một ranh giới nữa, một bộ công cụ nữa, và một người nữa phải biết.\n\nNgược lại, chỗ duy nhất tôi chấp nhận thêm là tầng engine — và ở đó tôi không viết, tôi chỉ gọi. Khác biệt giữa gọi một thư viện viết bằng ngôn ngữ khác và tự viết một tầng bằng ngôn ngữ khác là rất lớn: gọi thì không phải bảo trì, viết thì phải bảo trì mãi.',
      },
      {
        h2: 'Bốn câu hỏi lọc bớt ngôn ngữ trước khi thêm một cái',
      },
      {
        ol: [
          'Thư viện tốt nhất cho việc này viết bằng ngôn ngữ nào? Đây là câu trả lời cho 80% trường hợp.',
          'Tầng này có người khác phải đọc không? Phần giao diện sẽ có người sửa liên tục; phần điều phối thì ít. Tầng nào sửa nhiều thì chọn ngôn ngữ dễ đọc và dễ sửa.',
          'Ranh giới mới có trả được giá của nó không? Nếu một tầng chỉ để chuyển tiếp dữ liệu từ A sang B, nó không xứng đáng có ngôn ngữ riêng.',
          'Nếu phải viết lại trong một tuần thì có làm được không? Nếu câu trả lời là không, tầng đó đã quá lớn để còn là một tầng.',
        ],
      },
      {
        p: 'Sau cùng, đa ngôn ngữ không phải một tuyên ngôn, nó là hệ quả. Bạn chọn thư viện tốt nhất cho từng việc, rồi nhận ra mình đang đứng ở ba ngôn ngữ — và lúc đó việc phải làm là làm cho ba ranh giới ấy rõ ràng, chứ không phải quay lại ép mọi thứ vào một ngôn ngữ cho dễ nói.',
      },
    ],
    en: [
      {
        h2: 'Picking a language is picking a library',
      },
      {
        p: 'When somebody asks me which language to use, the honest answer is: choose the library first, the language follows. You are not going to write a video encoder from scratch, and you are not going to train a language model. You use what already exists — and what already exists is usable from one or two languages, not from all of them.\n\nSo the real question is not "which language is nicest" but "has somebody already solved this, and what did they write it in". Choosing by taste here means rewriting, by hand, something that took other people ten years.',
      },
      {
        h2: 'Each layer takes the language of the strongest library it needs',
      },
      {
        figure: {"src":"/blog/ngon-ngu-theo-tang-en.svg","alt":"A table matching three groups of layers to the language responsible for each: the interface uses TypeScript, the orchestration layer uses Python, the heavy engine layer is Python calling down into libraries written in C and C++, and the configuration layer shares a single data format.","caption":"Not every layer needs all three languages. An empty cell in that table is also a decision: it is where I refused to write more code."},
      },
      {
        ul: [
          'Interface: TypeScript, running in the browser. That is not a choice — the browser understands one language, and the whole interface ecosystem lives there. TypeScript rather than plain JavaScript because the front end of a working tool holds a lot of state, and types are the cheapest way to catch mistakes before anything runs.',
          'Orchestration: Python. This layer decides what runs first, what waits, and which step comes next. It sits right next to the heavy engines, so the distance between the two is close to zero.',
          'Heavy engines: Python calling down into libraries written in C and C++. Nobody rewrites a video encoder in Python, and nobody writes the scheduling part in C. The heavy work runs below, the arranging runs above.',
          'Configuration: not a programming language at all, but structured data. Video templates, product lists, status labels — none of that belongs in code, because you want to change it without installing anything.',
        ],
      },
      {
        h2: 'The interface is not written in Python, because it would end up glued to the long-running process',
      },
      {
        p: 'A common way to do this is to build the interface in the same language as the heavy part and open it in a browser. It saves you one language and charges you three things.\n\nFirst, every bit of interface state takes a detour through a server, so the interface is only as fast as that server. Second, the interface becomes a page the server redraws step by step, not an application you can click through quickly.\n\nThird, and heaviest: changing one button means touching the code of a process that runs for hours. The interface and the renderer are glued together, and the failure boundary disappears.',
      },
      {
        h2: 'Being polyglot costs five things, and the dearest one is not in the code',
      },
      {
        ul: [
          'Two sets of tools to install. Two version systems for libraries, two vulnerability checks, two different ways for installation to fail on a fresh machine.',
          'The boundary between two languages has to be data, not function calls. The two sides exchange only data structures with a defined shape, and somebody changing a field has to change it on both sides — with no compiler to remind them.',
          'Types do not cross the boundary. One side believes a field is always there, the other can return it empty, and the error only shows up at runtime. So every value crossing the boundary has to be checked by the side receiving it.',
          'Hiring is harder. One person has to read both sides, and that person costs more than someone who only knows one.',
          'Boundary bugs are the hardest to find. When something works on one side and misbehaves on the other, the fault is usually not in the code but in an assumption the two sides read differently.',
        ],
      },
      {
        note: 'The painful part of being polyglot is not installing two sets of tools. It is that nobody guards the boundary: the two sides exchange data, types do not survive the crossing, and no compiler warns you when the two meanings drift apart. That class of bug only appears at runtime — and usually on the side you were not looking at.',
      },
      {
        h2: 'I refuse to add a language to speed up a step that is already fast',
      },
      {
        p: 'Another language should only come in when it opens something you cannot do any other way. I refuse to add one to speed up a step that is already fast, to rewrite a library that is already good, or to use a tool only a handful of people know. All three sound reasonable, and all three cost you one more boundary, one more set of tools, and one more person who has to understand it.\n\nThe one place I do accept an extra language is the engine layer — and there I am not writing, only calling. The difference between calling a library written in another language and writing a layer in another language is enormous: calling is not maintenance, writing is maintenance forever.',
      },
      {
        h2: 'Four questions that filter languages out before you add one',
      },
      {
        ol: [
          'Which language is the best library for this job written in? That answers 80% of the cases.',
          'Will anyone else have to read this layer? An interface gets edited constantly; the orchestration layer much less. The layer that changes most should be in the language that is easiest to read and change.',
          'Will the new boundary pay for itself? If a layer only forwards data from A to B, it has not earned its own language.',
          'Could you rewrite it in a week? If the answer is no, the layer is too big to be a layer.',
        ],
      },
      {
        p: 'In the end, being polyglot is not a manifesto, it is a consequence. You pick the best library for each job and then notice you are standing in three languages — and at that point the work is to make those three boundaries clear, not to force everything back into one language because it is easier to talk about.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Sản phẩm dùng những ngôn ngữ nào?',
        a: 'Ba nhóm: TypeScript cho phần giao diện chạy trên trình duyệt, Python cho phần điều phối và gọi engine, và các thư viện viết bằng C hoặc C++ cho những việc nặng như mã hoá video và giọng đọc. Bạn không cần biết gì về chúng để dùng sản phẩm.',
      },
      {
        q: 'Vì sao không viết hết bằng một ngôn ngữ cho đơn giản?',
        a: 'Vì những thư viện làm được việc nặng — mã hoá video, giọng đọc, mô hình ngôn ngữ — chỉ có ở một vài ngôn ngữ. Viết hết bằng một ngôn ngữ nghĩa là tự viết lại những thư viện đó, rồi tự bảo trì chúng mãi về sau.',
      },
      {
        q: 'Đa ngôn ngữ có làm phần mềm chạy chậm hơn không?',
        a: 'Không đáng kể. Ranh giới giữa các tầng chỉ trao đổi dữ liệu nhỏ, không phải luồng video. Chỗ chậm của cả dây chuyền nằm ở khâu mã hoá, không nằm ở việc đổi ngôn ngữ.',
      },
      {
        q: 'Tôi muốn tự viết thêm một tính năng thì dùng ngôn ngữ nào?',
        a: 'Tuỳ tính năng đó sửa vào đâu. Nếu là phần bạn nhìn thấy trên màn hình thì là tầng giao diện; nếu là một bước trong dây chuyền dựng video thì là tầng điều phối. Nguyên tắc là theo tầng, không theo ngôn ngữ bạn thích nhất.',
      },
    ],
    en: [
      {
        q: 'Which languages does the product use?',
        a: 'Three groups: TypeScript for the interface that runs in the browser, Python for orchestration and for calling engines, and libraries written in C or C++ for the heavy jobs like video encoding and speech. You do not need to know any of that to use it.',
      },
      {
        q: 'Why not write everything in one language and keep it simple?',
        a: 'Because the libraries that do the heavy work — video encoding, speech, language models — only exist in a few languages. Writing everything in one language means rewriting those libraries yourself, and then maintaining them forever.',
      },
      {
        q: 'Does being polyglot make the software slower?',
        a: 'Not measurably. The boundaries between layers exchange small pieces of data, not video streams. The slow part of the pipeline is encoding, not the language change.',
      },
      {
        q: 'If I want to add a feature myself, which language do I use?',
        a: 'Whichever layer the feature touches. If it is something you see on screen, it is the interface layer; if it is a step in the video pipeline, it is the orchestration layer. The rule is to follow the layer, not your favourite language.',
      },
    ],
  },
};

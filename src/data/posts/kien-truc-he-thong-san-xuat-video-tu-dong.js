/**
 * Blog post — "Kiến trúc một hệ thống sản xuất video tự động".
 *
 * Written at the architecture level: layers, principles and trade-offs, in the
 * words a customer needs — no file names, no libraries, no internal services.
 */
export default {
  slug: {
    vi: 'kien-truc-he-thong-san-xuat-video-tu-dong',
    en: 'video-factory-architecture',
  },
  title: {
    vi: 'Năm tầng của một dây chuyền làm video, và vì sao phải tách',
    en: 'Five layers in a video pipeline, and why they stay apart',
  },
  description: {
    vi: 'Một hệ thống làm video tự động gồm năm tầng nối tiếp, mỗi tầng một việc. Vì sao phải tách tầng, và phần nào buộc phải ra internet.',
    en: 'An automated video pipeline is five layers in a row, each doing one job. Why the split matters, and which part has to leave your machine.',
  },
  date: '2026-10-10',
  minutes: { vi: 5, en: 5 },
  tag: {
    vi: 'Công nghệ',
    en: 'How it works',
  },
  lead: {
    vi: 'Một hệ thống làm video tự động nhìn từ ngoài giống hệt một nút bấm. Bên trong nó là năm tầng nối tiếp, và cách chia tầng quyết định lúc hỏng bạn mất năm phút hay mất cả buổi.',
    en: 'From the outside, an automated video system looks like one button. Inside it are five layers in a row, and how they are divided decides whether a failure costs you five minutes or an afternoon.',
  },
  body: {
    vi: [
    {
      h2: 'Một nút bấm ở ngoài, năm tầng ở trong',
    },
    {
      p: 'Bạn đưa vào một link sản phẩm và nhận về một file video. Giữa hai đầu đó là năm tầng nối tiếp nhau, mỗi tầng làm trọn một việc rồi trả kết quả cho tầng sau.\n\nChia tầng không phải để vẽ sơ đồ cho đẹp. Chia để lúc có chỗ hỏng, bạn biết ngay phải sửa ở đâu thay vì ngồi đoán.',
    },
    {
      ol: [
        'Nhận nguồn: một link sản phẩm, một video có sẵn, hay một chủ đề bạn gõ vào.',
        'Hiểu nội dung: đọc nguồn đó thành thông tin dùng được — sản phẩm là gì, lợi ích nào đáng nói, đoạn nào đáng giữ.',
        'Viết kịch bản: từ thông tin trên, dựng thành lời thoại tiếng Việt có mở đầu, thân và kết.',
        'Dựng hình: ghép giọng đọc, hình ảnh, phụ đề, logo và template thành một file video hoàn chỉnh.',
        'Đăng và theo dõi: đẩy video lên từng nền tảng, rồi ghi lại cái nào đã lên, cái nào chưa.',
      ],
    },
    {
      h2: 'Mỗi tầng hỏng một kiểu, nên gộp chúng lại là tự làm khó mình',
    },
    {
      p: 'Phần viết kịch bản phụ thuộc vào chất lượng câu chữ. Phần dựng phụ thuộc vào chiếc máy. Phần đăng phụ thuộc vào luật của nền tảng. Ba thứ đó hỏng theo ba kiểu khác nhau và thay đổi theo ba nhịp khác nhau.\n\nGộp cả ba vào một khối thì mỗi lần nền tảng đổi cách đăng, bạn phải chạm vào cả khâu dựng — và mọi thứ đang chạy tốt trước đó đều có nguy cơ hỏng theo.',
    },
    {
      ul: [
        'Thay một phần mà không phải làm lại phần khác.',
        'Biết lỗi nằm ở đâu: kịch bản dở, dựng lỗi, hay nền tảng từ chối nhận bài.',
        'Chạy lại đúng phần hỏng, thay vì làm lại từ đầu.',
        'Mỗi phần chạy đúng nhịp của nó: khâu nặng chạy chậm mà kỹ, khâu nhẹ chạy nhanh.',
      ],
    },
    {
      h2: 'Dữ liệu chỉ nên chảy một chiều, và đây là quy tắc quan trọng nhất',
    },
    {
      p: 'Kết quả của tầng trước là đầu vào của tầng sau, không có vòng quay ngược. Nghe hiển nhiên, nhưng đây là quy tắc quyết định hệ thống dễ sửa hay dễ vỡ.\n\nChảy một chiều cho bạn hai thứ. Thứ nhất, mỗi bước là một mốc kiểm tra: kịch bản xong thì giữ lại, giọng đọc xong thì giữ lại, nên sửa phụ đề không buộc bạn viết lại lời thoại. Thứ hai, khi kết quả cuối không như ý, bạn lần ngược theo đúng một đường để tìm bước làm sai, thay vì đoán mò.',
    },
    {
      h2: 'Máy bạn gánh phần nặng, chỉ hai việc buộc phải ra internet',
    },
    {
      ul: [
        'Trên máy bạn: dựng video, giọng đọc tiếng Việt, phụ đề, logo, template, và việc giữ cả file gốc lẫn thành phẩm. Đây là phần nặng nhất và cũng riêng tư nhất, nên nó ở lại chỗ bạn.',
        'Ra internet: nhờ AI viết kịch bản. Việc này cần một mô hình ngôn ngữ lớn chạy bên ngoài, nên phần chữ đi ra theo nhà cung cấp AI bạn chọn — DeepSeek, OpenAI hoặc Google Gemini.',
        'Ra internet: bước đăng bài, vì dĩ nhiên phải gửi video lên nền tảng. Đây là bước duy nhất bắt buộc cần mạng trong cả dây chuyền.',
        'Không ra internet: danh sách sản phẩm, kịch bản đã viết, video đã dựng và lịch sử đăng bài. Những thứ này nằm trên máy bạn.',
      ],
    },
    {
      h2: 'Một kiến trúc tốt còn là danh sách những việc nó từ chối làm',
    },
    {
      p: 'Hệ thống không tự quyết định nội dung thay bạn: nó viết theo yêu cầu, còn đúng sai và hợp gu hay không vẫn do bạn duyệt. Nó không mở mọi việc cùng lúc, vì mở hết chỉ làm mọi thứ chậm đi. Và nó không hứa đăng được lên nền tảng không cho phép, vì đó là chỗ phần mềm không có quyền quyết.\n\nNói cách khác: hệ thống lo phần lặp lại, bạn giữ phần phán đoán. Cách chia đó là lý do phần mềm chạy được lâu mà bạn không cần hiểu bên trong nó.',
    },
    {
      note: 'Chỗ đau của kiến trúc này, nói thẳng: nhà máy nằm trên máy bạn, nên máy tắt là dây chuyền dừng, và một chiếc máy yếu sẽ là chỗ chậm nhất của cả hệ thống. Đổi lại, dây chuyền không phụ thuộc vào máy chủ của người khác: video không phải tải lên rồi tải về mỗi lần làm, và không ai giữ file của bạn ngoài bạn.',
    },
    ],
    en: [
    {
      h2: 'One button outside, five layers inside',
    },
    {
      p: 'You put in a product link and get back a finished video file. In between sit five layers in a row, each one doing a complete job and handing its result to the next.\n\nThe split is not there to make a tidy diagram. It is there so that when something breaks, you know which layer to look at instead of guessing.',
    },
    {
      ol: [
        'Take the source: a product link, a video you already have, or a topic you type in.',
        'Understand it: turn that source into usable information — what the product is, which benefit is worth mentioning, which part is worth keeping.',
        'Write the script: turn that information into spoken Vietnamese with a beginning, a middle and an end.',
        'Build the picture: join the voice track, footage, subtitles, logo and template into one finished video file.',
        'Publish and track: push the video to each platform, then record which ones went out and which did not.',
      ],
    },
    {
      h2: 'Each layer fails in its own way, so welding them together is self-inflicted damage',
    },
    {
      p: 'The script layer depends on how well the words are written. The build layer depends on your machine. The publish layer depends on the platform’s rules. Three different failure modes, changing at three different speeds.\n\nWeld all three into one block and every time a platform changes how posting works, you have to reach into the video-building step as well — and everything that was working until then is now at risk.',
    },
    {
      ul: [
        'Swap one part without rebuilding the others.',
        'Know where the fault is: a weak script, a broken build, or a platform refusing the post.',
        'Re-run only the part that failed, instead of starting the video over.',
        'Let each part run at its own pace: the heavy step slow and careful, the light steps fast.',
      ],
    },
    {
      h2: 'Data should only flow one way, and this is the rule that matters most',
    },
    {
      p: 'The output of one layer is the input of the next, with no loop back. That sounds obvious, and it is the rule that decides whether the system is easy to repair or easy to break.\n\nOne-way flow buys you two things. First, every step is a checkpoint: finish the script and keep it, finish the voice track and keep it, so fixing a subtitle does not force you to rewrite the lines. Second, when the final result is wrong, there is exactly one path to walk backwards along, instead of guessing.',
    },
    {
      h2: 'Your machine carries the heavy half; only two things have to reach the internet',
    },
    {
      ul: [
        'On your machine: video assembly, the Vietnamese voice track, subtitles, logo, template, and keeping both the source files and the finished ones. This is the heaviest and the most private part, so it stays where you are.',
        'To the internet: asking an AI to write the script. That needs a large language model running elsewhere, so the words go out to whichever AI provider you picked — DeepSeek, OpenAI or Google Gemini.',
        'To the internet: publishing, because the video has to reach the platform somehow. This is the only step in the whole line that requires a connection.',
        'Staying off the internet: your product list, written scripts, finished videos and posting history. All of that lives on your machine.',
      ],
    },
    {
      h2: 'A good architecture is also a list of things it refuses to do',
    },
    {
      p: 'The system does not decide content for you. It writes to your instruction, and whether the result is accurate or fits your shop stays your call. It does not run everything at once, because opening everything only makes everything slower. And it does not promise to post anywhere the platform has not allowed, because that is not a decision software gets to make.\n\nPut another way: the system takes the repetition, you keep the judgement. That division is why the software keeps working long after you stop caring how it works inside.',
    },
    {
      note: 'The uncomfortable part, stated plainly: the factory sits on your machine, so when the machine is off the line stops, and a weak machine becomes the slowest part of the whole thing. In exchange, the line depends on nobody else’s servers: you never upload a video and download it again to work on it, and nobody but you holds your files.',
    },
    ],
  },
  faq: {
    vi: [
    {
      q: 'Hệ thống có tự quyết định nội dung video không?',
      a: 'Không. Nó viết theo yêu cầu của bạn và dựng theo template bạn đặt. Nội dung đúng hay sai, hợp gu hay không vẫn là bạn duyệt trước khi đăng.',
    },
    {
      q: 'Vì sao phần viết kịch bản cần internet mà phần dựng thì không?',
      a: 'Vì viết lời thoại cần một mô hình ngôn ngữ lớn chạy bên ngoài, còn dựng hình và giọng đọc tiếng Việt chạy gọn trên máy bạn. Mạng yếu, bạn vẫn dựng được video từ kịch bản đã có sẵn.',
    },
    {
      q: 'Dữ liệu của tôi đi ra ngoài ở những bước nào?',
      a: 'Đúng hai chỗ: phần chữ gửi cho nhà cung cấp AI bạn chọn để viết kịch bản, và phần video gửi lên nền tảng lúc đăng bài. Video gốc, thành phẩm và danh sách sản phẩm nằm trên máy bạn.',
    },
    {
      q: 'Chia tầng như vậy có làm hệ thống chậm đi không?',
      a: 'Không đáng kể. Mỗi tầng thêm một bước bàn giao nhỏ, nhưng đổi lại bạn chạy lại được đúng phần hỏng thay vì làm lại cả dây chuyền. Khoản tiết kiệm đó lớn hơn nhiều.',
    },
    ],
    en: [
    {
      q: 'Does the system decide the content for me?',
      a: 'No. It writes to your instructions and builds inside the template you set. Whether the result is accurate, and whether it sounds like your shop, is still yours to approve before anything is posted.',
    },
    {
      q: 'Why does writing the script need the internet when building the video does not?',
      a: 'Writing spoken lines needs a large language model running outside your machine. Building the picture and the Vietnamese voice track runs comfortably on your computer. On a bad connection you can still build video from a script you already have.',
    },
    {
      q: 'Which steps send my data out?',
      a: 'Exactly two: the text you send to whichever AI provider you chose for the script, and the video itself when it is posted to a platform. Source files, finished videos and your product list stay on your machine.',
    },
    {
      q: 'Does splitting into layers make the system slower?',
      a: 'Only slightly. Each layer adds a small handover, and in return you re-run just the step that failed instead of the whole line. That trade is worth far more than the handover costs.',
    },
    ],
  },
};

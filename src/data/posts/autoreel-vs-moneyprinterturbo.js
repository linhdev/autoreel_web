/**
 * Blog post — "AutoReel vs MoneyPrinterTurbo: sản phẩm đóng gói và mã nguồn mở".
 *
 * A fair comparison. MPT is free and hackable; AutoReel is paid and has flows
 * MPT does not. The article refuses to call either one universally better and
 * ends with the case for using both.
 */
export default {
  slug: {
    vi: 'so-sanh-autoreel-va-moneyprinterturbo',
    en: 'autoreel-vs-moneyprinterturbo',
  },
  title: {
    vi: 'AutoReel vs MoneyPrinterTurbo: đóng gói hay mã nguồn mở',
    en: 'AutoReel vs MoneyPrinterTurbo: packaged or open source',
  },
  description: {
    vi: 'So sánh AutoReel và MoneyPrinterTurbo theo công việc, chi phí thật và thời gian cài đặt — không có cái nào tốt hơn cho mọi người.',
    en: 'AutoReel vs MoneyPrinterTurbo by the job, the real cost and setup time — neither is better for everyone.',
  },
  date: '2026-10-27',
  minutes: { vi: 8, en: 8 },
  tag: { vi: 'Kinh nghiệm', en: 'Field notes' },
  lead: {
    vi: 'MoneyPrinterTurbo là phần mềm mã nguồn mở miễn phí: bạn tải về, cài Python, nối API key, và có một dây chuyền tạo video từ stock footage. AutoReel là ứng dụng đóng gói trả phí: cài một lần, có sẵn các luồng tóm tắt phim, làm theo mẫu và đăng Shopee/Facebook. Câu hỏi không phải “cái nào mạnh hơn”, mà là “bạn muốn tự lắp hay muốn có sẵn, và bạn cần luồng nào”.',
    en: 'MoneyPrinterTurbo is free open-source software: download it, install Python, connect API keys, and you have a pipeline that makes video from stock footage. AutoReel is a paid packaged app: install once, with built-in movie recap, reference pacing and Shopee/Facebook publishing. The question is not “which is more powerful”, but “do you want to assemble it or have it ready, and which flow do you need”.',
  },
  body: {
    vi: [
      { h2: 'MoneyPrinterTurbo là gì' },
      {
        p: 'MoneyPrinterTurbo (MPT) là một dự án mã nguồn mở phổ biến trên GitHub. Nó nhận một chủ đề, gọi mô hình ngôn ngữ để viết lời, lấy footage từ kho stock, đọc giọng bằng TTS, thêm phụ đề và ghép thành video dọc hoặc ngang. Nó có giao diện web chạy local và một API để gọi từ bên ngoài.',
      },
      {
        p: 'Ưu điểm lớn nhất là miễn phí và mở: bạn đọc được code, sửa được luồng, thay được nhà cung cấp AI, và không bị khoá vào một công ty. Nhược điểm cũng đến từ đó: bạn phải cài đặt, xử lý lỗi phiên bản, tự cấu hình và tự chịu trách nhiệm khi một thư viện thay đổi.',
      },

      { h2: 'AutoReel là gì' },
      {
        p: 'AutoReel là ứng dụng đóng gói chạy trên Windows hoặc macOS. Nó có ba luồng trọn gói — Affiliate, Reup/Repurpose và AI Review — cùng các màn làm từng việc như tóm tắt phim, cắt highlight, lồng tiếng, xoá logo, đăng Shopee và Facebook/Reels. Bản quyền có gói thuê theo tháng và gói mua đứt; giá nằm trên [trang bảng giá](/bang-gia-phan-mem-tao-video/).',
      },
      {
        p: 'Ưu điểm là có sẵn: cài một lần, có giao diện, có luồng, có đăng bài. Nhược điểm là bạn không sửa được code, không tự thêm nhà cung cấp AI mới, và phải trả tiền. Nó cũng chỉ chạy trên máy tính, không có bản điện thoại.',
      },

      { h2: 'So sánh theo công việc' },
      {
        ul: [
          'Video từ stock footage theo chủ đề: cả hai làm được. MPT miễn phí; AutoReel có sẵn giao diện và template.',
          'Video từ sản phẩm Shopee: AutoReel có luồng Affiliate và đăng Shopee. MPT không có bước đăng bài.',
          'Tóm tắt phim: AutoReel có luồng riêng, nghe lời thoại và viết lời bình. MPT không có luồng này.',
          'Làm theo video mẫu: AutoReel đo nhịp và cấu trúc của mẫu. MPT không có tính năng tương đương.',
          'Tự viết một luồng riêng: MPT thắng, vì bạn có code. AutoReel chỉ cho bạn những gì có trong app.',
          'Cài đặt trong 10 phút: AutoReel. MPT cần Python, thư viện và cấu hình; người không quen có thể mất một buổi.',
        ],
      },

      { h2: 'Chi phí thật' },
      {
        p: 'MPT miễn phí phần mềm, nhưng không miễn phí vận hành. Bạn vẫn trả cho API mô hình ngôn ngữ và TTS nếu dùng nhà cung cấp trả phí; bạn trả bằng thời gian cài đặt và sửa lỗi; và bạn cần một máy đủ mạnh để chạy công cụ ghép hình. Với người đã có kỹ năng, tổng chi phí có thể rất thấp. Với người chưa từng cài Python, “miễn phí” có thể tốn một ngày.',
      },
      {
        p: 'AutoReel có giá niêm yết, và chi phí ẩn nhỏ hơn: không cần cài Python, không cần sửa code. Nhưng bạn vẫn trả API AI, vẫn cần máy đủ mạnh, và vẫn phải học giao diện. Không có tool nào miễn phí toàn bộ nếu bạn tính thời gian.',
      },
      {
        note: 'Đừng so sánh “miễn phí” với “trả phí” mà bỏ qua thời gian cài đặt và bảo trì. Một buổi cài MPT có thể rẻ hơn một tháng AutoReel, hoặc đắt hơn một năm, tuỳ người cài.',
      },

      { h2: 'Ai nên chọn MPT' },
      {
        p: 'Chọn MPT nếu bạn biết Python ở mức cài được thư viện và đọc log, thích kiểm soát code, chỉ cần video từ stock footage, và không cần đăng bài tự động. Nó cũng hợp nếu bạn muốn thử nghiệm nhiều mô hình AI mà không bị giới hạn bởi giao diện có sẵn.',
      },
      {
        p: 'Đừng chọn MPT nếu bạn cần tóm tắt phim, cần đăng Shopee/Facebook, hoặc không có thời gian xử lý lỗi. Một dự án mã nguồn mở không có nghĩa là không có chi phí; nó chỉ chuyển chi phí từ tiền sang thời gian.',
      },

      { h2: 'Ai nên chọn AutoReel' },
      {
        p: 'Chọn AutoReel nếu công việc của bạn là bán hàng hoặc làm nội dung đều đặn, cần nhiều luồng trong một app, và muốn bước đăng bài nằm trong cùng quy trình. Nó hợp với người đã có sản phẩm và cần giảm thời gian dựng, không phải người đang tìm một dự án để sửa code.',
      },
      {
        p: 'Đừng chọn AutoReel nếu bạn chỉ làm vài video mỗi tháng, hoặc nếu bạn muốn tự thay đổi mọi thứ trong pipeline. Ở số lượng thấp, thời gian tiết kiệm không đủ bù giá và thời gian học.',
      },

      { h2: 'Ba câu hỏi trước khi chọn' },
      {
        ol: [
          'Bạn có cài được Python và đọc log khi lỗi không? Nếu không, thời gian tiết kiệm của MPT sẽ bị ăn hết bởi thời gian sửa cài đặt.',
          'Công việc chính của bạn có cần tóm tắt phim hoặc đăng Shopee/Facebook không? Nếu có, MPT không có các bước đó, và bạn sẽ phải ghép thêm tool.',
          'Bạn đang trả bằng thời gian hay bằng tiền? Nếu thời gian là thứ thiếu nhất, tool đóng gói thường rẻ hơn cái giá niêm yết của nó.',
        ],
      },
      {
        p: 'Ba câu trả lời này quan trọng hơn mọi bảng so sánh tính năng, vì chúng nói về bạn chứ không nói về phần mềm. Một người có thời gian và thích cài đặt sẽ thấy MPT rẻ; một người đang chạy shop và cần video mỗi ngày sẽ thấy AutoReel rẻ hơn dù phải trả tiền.',
      },

      { h2: 'Dùng cả hai' },
      {
        p: 'Có một cách kết hợp hợp lý: dùng MPT cho video stock footage theo chủ đề, và AutoReel cho video từ sản phẩm, tóm tắt phim hoặc làm theo mẫu. Hai tool không loại trừ nhau; chúng giải hai bài khác nhau, và cả hai đều dùng API key của bạn.',
      },
      {
        p: 'Nếu bạn đang cân nhắc, hãy thử MPT trước nếu bạn thích cài đặt, hoặc xem [video demo AutoReel](/video-demo-thuc-te/) trước nếu bạn muốn thấy luồng đóng gói. Cả hai đều có bản dùng thử hoặc bản miễn phí; điều nên đo là thời gian bạn thực sự bỏ ra cho video đầu tiên.',
      },
    ],
    en: [
      { h2: 'What MoneyPrinterTurbo is' },
      {
        p: 'MoneyPrinterTurbo (MPT) is a popular open-source project on GitHub. It takes a topic, calls a language model for the script, pulls footage from a stock library, reads it with TTS, adds subtitles and assembles a vertical or horizontal video. It has a local web interface and an API for calling it from elsewhere.',
      },
      {
        p: 'The big advantage is free and open: you can read the code, change the flow, swap the AI provider, and you are not locked into one company. The disadvantage comes from the same place: you install it, fix version problems, configure it, and own the failures when a library changes.',
      },

      { h2: 'What AutoReel is' },
      {
        p: 'AutoReel is a packaged app for Windows and macOS. It has three end-to-end flows — Affiliate, Reup/Repurpose and AI Review — plus single-job screens for movie recap, highlight cutting, voice-over, logo removal, and publishing to Shopee and Facebook/Reels. It is sold as a monthly plan or a one-off purchase; prices are on the [pricing page](/en/pricing/).',
      },
      {
        p: 'The advantage is that it is ready: install once, with an interface, flows and publishing. The disadvantage is that you cannot change the code, add a new AI provider yourself, or use it for free. It also runs only on a computer, not on a phone.',
      },

      { h2: 'Compared by the job' },
      {
        ul: [
          'Stock-footage video on a topic: both can do it. MPT is free; AutoReel has an interface and templates ready.',
          'Video from Shopee products: AutoReel has the Affiliate flow and Shopee publishing. MPT has no publishing step.',
          'Movie recaps: AutoReel has a dedicated flow that listens to dialogue and writes narration. MPT has no such flow.',
          'Reference-style video: AutoReel measures a sample’s pace and structure. MPT has no equivalent.',
          'Writing your own flow: MPT wins, because you have the code. AutoReel only offers what is in the app.',
          'Set up in ten minutes: AutoReel. MPT needs Python, libraries and configuration; a newcomer may lose an evening.',
        ],
      },

      { h2: 'The real cost' },
      {
        p: 'MPT is free software, not free operation. You still pay for a language-model API and TTS if you use paid providers; you pay with setup and debugging time; and you need a machine capable of running a video encoder. For someone with the skills, the total can be very low. For someone who has never installed Python, “free” can cost a day.',
      },
      {
        p: 'AutoReel has a listed price and smaller hidden costs: no Python install, no code to fix. But you still pay for AI APIs, still need a capable machine, and still have to learn the interface. No tool is entirely free once you count time.',
      },
      {
        note: 'Do not compare “free” with “paid” while ignoring setup and maintenance. An evening installing MPT can be cheaper than a month of AutoReel, or more expensive than a year, depending on who does the install.',
      },

      { h2: 'Who should choose MPT' },
      {
        p: 'Choose MPT if you can install Python packages and read a log, like controlling the code, only need stock-footage video, and do not need automatic publishing. It also fits if you want to experiment with several AI models without being limited by a ready-made interface.',
      },
      {
        p: 'Do not choose MPT if you need movie recaps, Shopee/Facebook publishing, or do not have time to debug. Open source does not mean no cost; it moves the cost from money to time.',
      },

      { h2: 'Who should choose AutoReel' },
      {
        p: 'Choose AutoReel if your work is selling or publishing regularly, you need several flows in one app, and you want publishing inside the same process. It fits someone who already has a product and needs to cut production time, not someone looking for a codebase to modify.',
      },
      {
        p: 'Do not choose AutoReel if you make only a few videos a month, or if you want to change everything in the pipeline. At low volume, the saved time does not cover the price and the learning.',
      },

      { h2: 'Three questions before choosing' },
      {
        ol: [
          'Can you install Python and read a log when it fails? If not, MPT’s saved time will be eaten by setup debugging.',
          'Does your main work need movie recaps or Shopee/Facebook publishing? If so, MPT has no such step, and you will be assembling another tool.',
          'Are you paying with time or with money? If time is the scarce resource, a packaged tool is usually cheaper than its sticker price suggests.',
        ],
      },
      {
        p: 'These three answers matter more than any feature table, because they are about you rather than the software. Someone with time who enjoys installing things will find MPT cheap; someone running a shop who needs a video every day will find AutoReel cheaper even though it costs money.',
      },

      { h2: 'Using both' },
      {
        p: 'There is a sensible combination: MPT for stock-footage videos on a topic, and AutoReel for product video, movie recaps or reference-style video. The two do not exclude each other; they solve different jobs, and both use your own API keys.',
      },
      {
        p: 'If you are deciding, try MPT first if you enjoy installing things, or watch the [AutoReel demo](/en/video-demo/) first if you want to see the packaged flow. Both have a free or trial path; what you should measure is the time you actually spend on the first video.',
      },
    ],
  },
  faq: {
    vi: [
      ['MoneyPrinterTurbo có thật sự miễn phí không?', 'Phần mềm miễn phí và mã nguồn mở. Bạn vẫn trả cho API AI/TTS nếu dùng nhà cung cấp trả phí, và trả bằng thời gian cài đặt, cấu hình, sửa lỗi.'],
      ['AutoReel có dùng được API key của tôi không?', 'Có. AutoReel dùng API key AI của bạn cho các bước viết lời và giọng đọc, giống cách MPT dùng key của bạn.'],
      ['Cái nào làm video tóm tắt phim tốt hơn?', 'AutoReel có luồng tóm tắt phim riêng; MPT không có luồng tương đương. Nếu tóm tắt phim là công việc chính, AutoReel phù hợp hơn.'],
      ['MPT có đăng được lên Shopee/Facebook không?', 'Không có bước đăng bài tích hợp. Bạn xuất file rồi đăng thủ công. AutoReel có đăng Shopee Video và Facebook/Reels.'],
      ['Có nên dùng cả hai không?', 'Có, nếu bạn cần video stock footage (MPT) và video từ sản phẩm/tóm tắt phim (AutoReel). Hai tool giải hai bài khác nhau.'],
    ],
    en: [
      ['Is MoneyPrinterTurbo really free?', 'The software is free and open source. You still pay for AI/TTS APIs if you use paid providers, and you pay with setup, configuration and debugging time.'],
      ['Does AutoReel use my own API keys?', 'Yes. AutoReel uses your AI API keys for script and voice, the same way MPT uses yours.'],
      ['Which is better for movie recaps?', 'AutoReel has a dedicated movie-recap flow; MPT has no equivalent. If recaps are your main work, AutoReel fits better.'],
      ['Can MPT publish to Shopee/Facebook?', 'It has no integrated publishing step. You export the file and publish manually. AutoReel publishes to Shopee Video and Facebook/Reels.'],
      ['Should I use both?', 'Yes, if you need stock-footage video (MPT) and product or recap video (AutoReel). They solve different jobs.'],
    ],
  },
};

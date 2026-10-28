/**
 * Blog post — "Tool tóm tắt phim tự động: chọn theo cách footage được xử lý".
 *
 * A buying-guide article for the movie-recap cluster. It compares the three
 * shapes of tool that show up under "tool tóm tắt phim" — an editor with a
 * template, a cloud service, and a local pipeline — by where the film goes and
 * who writes the words, not by a feature table nobody can verify.
 */
export default {
  slug: {
    vi: 'tool-tom-tat-phim-tu-dong',
    en: 'automatic-movie-recap-tool',
  },
  title: {
    vi: 'Tool tóm tắt phim tự động: chọn theo cách xử lý footage',
    en: 'Automatic movie recap tools: choose by where the film goes',
  },
  description: {
    vi: 'Ba kiểu tool tóm tắt phim, năm tiêu chí chọn, và giới hạn thật của từng kiểu — viết cho người sắp bỏ tiền, không phải để khoe tính năng.',
    en: 'Three kinds of movie recap tool, five ways to choose, and the real limits of each — written for someone about to pay, not to show off features.',
  },
  date: '2026-10-27',
  minutes: { vi: 8, en: 8 },
  tag: { vi: 'Kinh nghiệm', en: 'Field notes' },
  lead: {
    vi: 'Dưới chữ “tool tóm tắt phim” là ba thứ hoàn toàn khác nhau: một trình dựng có template, một dịch vụ đám mây tính tiền theo phút, và một pipeline chạy trên máy bạn. Chúng khác nhau ở chỗ footage đi đâu và ai viết lời bình — hai câu hỏi quyết định nhiều hơn mọi bảng so sánh tính năng.',
    en: 'Under the phrase “movie recap tool” there are three different things: an editor with a template, a cloud service billed by the minute, and a pipeline running on your own machine. They differ in where the footage goes and who writes the narration — two questions that decide more than any feature table.',
  },
  body: {
    vi: [
      { h2: 'Ba kiểu tool, ba cách trả tiền' },
      {
        p: 'Kiểu thứ nhất là trình dựng có template. Bạn tự cắt cảnh, tự viết lời, tự thu giọng; phần mềm giúp các bước lặp lại nhanh hơn. Nó rẻ và linh hoạt, nhưng thời gian của bạn vẫn là chi phí chính. Với một phim 90 phút, cắt tay thành video 5 phút thường mất vài giờ, và mỗi phim mới lại bắt đầu từ đầu.',
      },
      {
        p: 'Kiểu thứ hai là dịch vụ đám mây. Bạn tải phim lên, chọn độ dài, chờ máy chủ xử lý, rồi tải video về. Không cần máy mạnh, nhưng phim phải rời khỏi máy bạn, và giá thường tính theo phút hoặc theo lượt. Một bộ phim dài có thể tốn nhiều hơn một tháng thuê phần mềm.',
      },
      {
        p: 'Kiểu thứ ba là pipeline chạy trên máy. Phần mềm nghe lời thoại, viết lời bình, cắt cảnh, lồng tiếng và xuất video ngay trên máy bạn. Bạn trả cho phần mềm một lần hoặc theo tháng, không trả theo số phút; đổi lại, máy phải đủ mạnh và lần chạy đầu tiên cần thời gian cấu hình.',
      },
      {
        note: 'Cả ba kiểu đều có thể ra video tóm tắt. Câu hỏi không phải “cái nào tốt nhất”, mà là “cái nào khớp với số phim bạn làm mỗi tuần và nơi bạn được phép đặt footage”.',
      },

      { h2: 'Câu hỏi quyết định: footage đi đâu?' },
      {
        p: 'Nếu bạn làm video từ phim của người khác, việc tải cả bộ phim lên một dịch vụ lạ là rủi ro bạn không kiểm soát được: dịch vụ có thể lưu bản sao, dùng để huấn luyện, hoặc đơn giản là bị lộ. Với phim do bạn sở hữu hoặc có giấy phép, rủi ro thấp hơn, nhưng câu hỏi về dung lượng và thời gian chờ vẫn còn.',
      },
      {
        p: 'Một pipeline local đổi lại bằng yêu cầu phần cứng. Máy không có đủ RAM hoặc ổ cứng sẽ chậm; máy quá yếu có thể không chạy nổi phim 4K. Đây là lý do tôi không khuyên mua theo kiểu “dùng thử một phim ngắn rồi quyết”: hãy thử đúng loại phim bạn định làm, đúng độ dài bạn định xuất.',
      },

      { h2: 'Năm tiêu chí tôi dùng để chọn' },
      {
        ul: [
          'Lời bình do ai viết. Nếu tool chỉ ghép các cảnh có sẵn theo nhạc, nó không phải tóm tắt — nó là montage. Một bản tóm tắt cần câu dẫn chuyện, không chỉ hình đẹp.',
          'Giọng đọc có phải tiếng Việt tự nhiên. Giọng đọc máy dịch từ tiếng Anh thường sai dấu và ngắt câu sai chỗ; nghe thử 30 giây là đủ để biết.',
          'Có xử lý được phim không có phụ đề không. Phim cũ hoặc phim lồng tiếng có thể không có track phụ đề. Tool chỉ đọc phụ đề sẽ bó tay; tool nghe lời thoại trực tiếp thì không.',
          'Độ dài đích có phải mức tối đa không. Một số tool kéo dài video cho đủ phút bằng cảnh lặp; đó là dấu hiệu nó đang đếm phút chứ không kể chuyện.',
          'Chi phí theo video hay theo tháng. Nếu bạn làm 30 video/tháng, chênh lệch giữa hai cách tính thường lớn hơn chênh lệch tính năng.',
        ],
      },

      { h2: 'AutoReel làm phần nào' },
      {
        p: 'AutoReel thuộc kiểu thứ ba. Màn [Tóm tắt phim](/tai-lieu/tom-tat-phim/) nhận tối đa 12 phim một lượt — link hoặc file — nghe lời thoại, viết lời bình tiếng Việt, khớp lời với cảnh, lồng giọng đọc, thêm phụ đề và đóng dấu thương hiệu nếu bạn chọn template. Mỗi phim ra một video riêng; độ dài bạn chọn là mức tối đa, không phải con số phải đạt.',
      },
      {
        p: 'Phần mềm chạy trên Windows hoặc macOS, dùng API key AI của bạn, và không gửi video lên máy chủ của AutoReel. Nếu bạn muốn xem trước khi cài, [video demo](/video-demo-thuc-te/) quay đúng một job đang chạy; [bảng giá](/bang-gia-phan-mem-tao-video/) nằm cùng một chỗ với các gói thuê và mua đứt.',
      },
      {
        note: 'Điểm yếu của kiểu local là máy. Một phim 90 phút ở 1080p cần nhiều thời gian xử lý hơn một đoạn clip 30 giây, và máy yếu sẽ làm bạn nghĩ phần mềm hỏng. Hãy đọc [cấu hình máy](/blog/autoreel-chay-o-dau-can-cau-hinh-may-the-nao/) trước khi thử.',
      },

      { h2: 'Giới hạn cần biết trước khi mua' },
      {
        ul: [
          'Không có tool nào tự tạo ra hình mới. Tóm tắt phim là cắt và kể lại footage bạn đưa vào; nếu phim gốc không có cảnh phù hợp, lời bình cũng không cứu được.',
          'Bản quyền vẫn là chuyện của bạn. Tool không biến một bộ phim không có phép thành nội dung bạn được phép kiếm tiền. Đọc [bài về kiếm tiền với video tóm tắt](/blog/kiem-tien-youtube-voi-video-tom-tat-phim/) trước khi đăng loạt đầu tiên.',
          'Chất lượng phụ đề phụ thuộc nguồn. Nếu app nghe lời thoại, phim có nhạc nền lớn hoặc nhiều người nói chồng sẽ khó hơn phim thoại rõ.',
          'Độ dài đích không phải lời hứa. Phim ít thoại có thể ra video ngắn hơn mức bạn chọn; app ghi cảnh báo thay vì kéo dài bằng cảnh lặp.',
        ],
      },

      { h2: 'Chọn nhanh theo tình huống' },
      {
        ul: [
          'Một phim mỗi tháng, muốn chỉnh tay từng cảnh: editor và làm tay. Tool tự động chưa đáng tiền ở tần suất này.',
          '5–10 phim mỗi tháng, cần bản nháp nhanh rồi chỉnh lại: pipeline local. Bạn giữ footage trên máy và tiết kiệm thời gian ở bước dựng.',
          'Cần đăng lên Shopee/Facebook ngay sau khi dựng: một tool có bước đăng bài, không phải hai tool rời.',
          'Chỉ có stock footage, không có phim: bài [tạo video hàng loạt bằng AI](/blog/tao-video-hang-loat-bang-ai/) phù hợp hơn bài này.',
        ],
      },
      {
        note: 'Đừng chọn theo số phim tối đa. Chọn theo số phim bạn thực sự làm được mỗi tháng, với thời gian xem lại bạn có.',
      },

      { h2: 'Cách thử trong một buổi tối' },
      {
        ol: [
          'Chọn một phim bạn định làm thật, không phải phim mẫu quá dễ. Tốt nhất là phim có cả đoạn thoại rõ và đoạn nhạc lớn.',
          'Đặt độ dài đích bằng đúng độ dài video bạn muốn đăng, không phải mức tối đa của tool.',
          'Xem hết video một lượt và ghi lại ba chỗ: chỗ lời bình sai nghĩa, chỗ cảnh không khớp câu, và chỗ giọng đọc ngắt sai.',
          'Chạy lại một lần với cùng phim để biết thời gian thật. Nếu một phim mất quá lâu so với nhịp bạn định làm, đó mới là lý do nên bỏ.',
        ],
      },
      {
        p: 'Nếu sau bước 4 bạn vẫn muốn dùng, hãy tính chi phí theo số phim mỗi tháng thay vì theo giá niêm yết. Một tool đắt gấp đôi nhưng chạy 30 video/tháng thường rẻ hơn một tool tính theo phút mà bạn phải trả mỗi lần xuất.',
      },
    ],
    en: [
      { h2: 'Three kinds of tool, three ways to pay' },
      {
        p: 'The first is an editor with a template. You cut the scenes, write the lines, record the voice; the software makes the repetitive parts faster. It is cheap and flexible, but your time is still the main cost. A 90-minute film cut by hand into a five-minute video usually takes hours, and the next film starts from zero.',
      },
      {
        p: 'The second is a cloud service. You upload the film, choose a length, wait for a server, then download the result. You do not need a fast machine, but the film leaves your computer, and pricing is usually per minute or per render. One long film can cost more than a month of software.',
      },
      {
        p: 'The third is a pipeline on your own machine. The software listens to the dialogue, writes the narration, cuts the scenes, voices it and exports the video locally. You pay for the software once or monthly, not per minute; in exchange, the machine has to be capable and the first run needs configuration.',
      },
      {
        note: 'All three can produce a recap. The question is not “which is best”, but “which matches the number of films you do each week and where you are allowed to put the footage”.',
      },

      { h2: 'The deciding question: where does the footage go?' },
      {
        p: 'If you make videos from someone else’s film, uploading the whole thing to an unfamiliar service is a risk you cannot control: the service may keep a copy, train on it, or simply leak it. With footage you own or license, the risk is lower, but the questions about storage and waiting time remain.',
      },
      {
        p: 'A local pipeline trades that for hardware requirements. A machine without enough RAM or disk will be slow; a very weak machine may not handle 4K at all. That is why “try one short film and decide” is bad advice: test the kind of film you actually make, at the length you actually export.',
      },

      { h2: 'Five criteria I use' },
      {
        ul: [
          'Who writes the narration. If the tool only joins existing shots to music, it is not a recap — it is a montage. A recap needs a storytelling line, not just pretty frames.',
          'Whether the voice sounds like natural Vietnamese. A machine voice translated from English often puts the stress in the wrong place; thirty seconds is enough to hear it.',
          'Whether it handles a film with no subtitle track. Old films or dubbed films may have none. A tool that only reads subtitles is stuck; one that listens to the dialogue is not.',
          'Whether the target length is a ceiling. Some tools pad the video to hit the minute count with repeated shots; that is a sign it is counting minutes rather than telling a story.',
          'Per-video or per-month pricing. At thirty videos a month, the difference between the two is usually larger than the difference in features.',
        ],
      },

      { h2: 'What AutoReel does' },
      {
        p: 'AutoReel is the third kind. The [Movie recap](/en/docs/movie-recap/) screen accepts up to twelve films per run — links or files — listens to the dialogue, writes Vietnamese narration, matches it to scenes, voices it, adds subtitles and applies a branding template if you choose one. Each film becomes one video; the length you pick is a ceiling, not a target it has to reach.',
      },
      {
        p: 'The app runs on Windows or macOS, uses your own AI API keys, and does not send footage to AutoReel’s servers. If you want to see it before installing, the [demo](/en/video-demo/) is a real job recorded from the running app; [pricing](/en/pricing/) is in the same place as the monthly and one-off plans.',
      },
      {
        note: 'The weakness of the local kind is the machine. A 90-minute 1080p film takes far longer than a 30-second clip, and a weak machine will make you think the software is broken. Read [what your machine needs](/en/blog/where-autoreel-runs/) before you try.',
      },

      { h2: 'Limits to know before paying' },
      {
        ul: [
          'No tool invents new footage. A recap cuts and retells the film you give it; if the source has no usable scene, a better script will not save it.',
          'Copyright is still your problem. A tool does not turn an unlicensed film into content you may monetise. Read [making money with recaps](/en/blog/make-money-with-movie-recaps/) before publishing the first batch.',
          'Subtitle quality depends on the source. If the app listens to dialogue, a loud score or overlapping speakers is harder than clean dialogue.',
          'The target length is not a promise. A film with little dialogue may produce a shorter video; the app warns instead of padding it with repeated shots.',
        ],
      },

      { h2: 'A quick choice by situation' },
      {
        ul: [
          'One film a month, hand-adjusting every shot: an editor and manual work. Automation does not pay at that rate.',
          'Five to ten films a month, needing a fast draft and a hand pass: a local pipeline. Footage stays on your machine and you save the assembly time.',
          'Need to publish to Shopee/Facebook right after the edit: a tool with a publishing step, not two separate tools.',
          'Only stock footage, no films: [bulk video with AI](/en/blog/bulk-video-with-ai/) fits better than this article.',
        ],
      },
      {
        note: 'Do not choose by the maximum number of films. Choose by the number you can actually finish each month, with the review time you have.',
      },

      { h2: 'How to test in one evening' },
      {
        ol: [
          'Pick a film you actually plan to use, not an easy sample. Ideally one with both clear dialogue and a loud music section.',
          'Set the target length to the video you actually want to publish, not the tool’s maximum.',
          'Watch the result once and note three things: where the narration is wrong, where the shot does not match the line, and where the voice breaks in the wrong place.',
          'Run the same film again and measure the real time. If one film takes far longer than your publishing pace allows, that is the reason to walk away.',
        ],
      },
      {
        p: 'If you still want it after step four, price it by films per month rather than by the sticker price. A tool that costs twice as much but handles thirty videos a month is usually cheaper than one billed per minute on every export.',
      },
    ],
  },
  faq: {
    vi: [
      ['Tool tóm tắt phim có tự viết lời bình không?', 'Tuỳ tool. Loại editor chỉ cắt theo template thì bạn vẫn phải viết lời. Loại pipeline như AutoReel nghe lời thoại rồi viết lời bình tiếng Việt, nhưng bạn vẫn nên đọc lại trước khi đăng.'],
      ['Có cần phim có phụ đề không?', 'Không, nếu tool nghe lời thoại trực tiếp. Nếu tool chỉ đọc track phụ đề, phim không có phụ đề sẽ không làm được.'],
      ['Tool nào rẻ nhất?', 'Tính theo số video mỗi tháng, không theo giá niêm yết. Editor rẻ nhưng tốn thời gian; dịch vụ theo phút đắt khi làm nhiều; phần mềm local đắt lúc đầu nhưng không tăng theo số video.'],
      ['Làm video tóm tắt phim có kiếm tiền được không?', 'Có, nhưng phụ thuộc bản quyền và mức độ chuyển hoá. YouTube yêu cầu nội dung có giá trị gia tăng, không phải đọc lại phim. Xem bài kiếm tiền với video tóm tắt để biết rủi ro.'],
      ['AutoReel có gửi phim lên máy chủ không?', 'Không. Phần mềm chạy trên máy bạn và dùng API key của bạn. Video và dữ liệu dự án nằm trên máy, không qua máy chủ AutoReel.'],
    ],
    en: [
      ['Does a recap tool write the narration for me?', 'Depends on the kind. An editor with a template leaves the writing to you. A pipeline such as AutoReel listens to the dialogue and writes Vietnamese narration, but you should still read it before publishing.'],
      ['Does the film need subtitles?', 'Not if the tool listens to the dialogue directly. If it only reads a subtitle track, a film without one cannot be recapped.'],
      ['Which tool is cheapest?', 'Price it by videos per month, not by the sticker. An editor is cheap but costs time; per-minute services get expensive at volume; local software costs more upfront but does not grow with the number of videos.'],
      ['Can movie recaps be monetised?', 'Yes, subject to copyright and how transformative the video is. YouTube expects added value, not a retelling of the film. Read the monetisation article for the risks.'],
      ['Does AutoReel upload the film?', 'No. The app runs on your machine with your own API keys. Video and project data stay local and do not pass through AutoReel’s servers.'],
    ],
  },
};

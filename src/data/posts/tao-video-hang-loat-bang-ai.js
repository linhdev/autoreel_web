/**
 * Blog post — "Tạo video hàng loạt bằng AI: năm cách, chọn theo số lượng".
 *
 * A decision article, not a feature list. It separates the five shapes of bulk
 * production by how much control they leave and what they cost at 10, 30 and
 * 100 videos a month — the number that actually changes the answer.
 */
export default {
  slug: {
    vi: 'tao-video-hang-loat-bang-ai',
    en: 'bulk-video-with-ai',
  },
  title: {
    vi: 'Tạo video hàng loạt bằng AI: năm cách, chọn theo số lượng',
    en: 'Bulk video with AI: five ways, choose by volume',
  },
  description: {
    vi: 'Năm cách tạo video hàng loạt bằng AI, cái gì AI làm được và không, chi phí thật, và cách chọn theo số video mỗi tháng thay vì theo quảng cáo.',
    en: 'Five ways to make video in bulk with AI, what AI can and cannot do, the real cost, and how to choose by videos per month rather than by advertising.',
  },
  date: '2026-10-27',
  minutes: { vi: 8, en: 8 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: '“Tạo video hàng loạt bằng AI” không phải một sản phẩm; nó là năm cách làm khác nhau, khác nhau ở chỗ bạn giữ bao nhiêu quyền kiểm soát và trả tiền theo cái gì. Chọn sai cách không làm video xấu đi ngay — nó chỉ làm bạn trả nhiều hơn cho đúng số video mình cần.',
    en: '“Making video in bulk with AI” is not one product; it is five different ways of working, differing in how much control you keep and what you pay for. Choosing the wrong one does not ruin the video immediately — it just makes you pay more for the number of videos you actually need.',
  },
  body: {
    vi: [
      { h2: 'Năm cách, xếp theo mức kiểm soát' },
      {
        p: 'Cách thứ nhất là trình dựng có template: CapCut, Canva hoặc một bộ template mua sẵn. Bạn kiểm soát từng khung, nhưng mỗi video vẫn là một lần dựng. Hợp khi bạn làm ít video nhưng cần chất lượng cao và khác nhau hoàn toàn.',
      },
      {
        p: 'Cách thứ hai là API và script tự viết: bạn gọi mô hình AI để viết lời, gọi TTS để đọc, rồi ghép bằng công cụ dựng hình. Kiểm soát cao nhất, nhưng bạn phải bảo trì code và xử lý lỗi. Hợp với người đã có kỹ năng lập trình và muốn một quy trình riêng.',
      },
      {
        p: 'Cách thứ ba là phần mềm mã nguồn mở như một dự án mã nguồn mở phổ biến: miễn phí, chạy trên máy, có giao diện web. Bạn vẫn phải cài đặt, cấu hình API key và chấp nhận rằng tính năng đến từ cộng đồng, không phải từ một công ty chịu trách nhiệm.',
      },
      {
        p: 'Cách thứ tư là một ứng dụng đóng gói sẵn như AutoReel: cài một lần, có sẵn các luồng tạo video, lồng tiếng, phụ đề và đăng bài. Bạn đổi một phần quyền kiểm soát lấy thời gian cấu hình thấp hơn.',
      },
      {
        p: 'Cách thứ năm là thuê ngoài: một người hoặc một nhóm làm video theo lô. Kiểm soát thấp nhất, chi phí cao nhất theo video, nhưng không cần máy và không cần học tool.',
      },
      {
        note: 'Không có cách nào tốt nhất cho mọi người. Có một câu hỏi trả lời được: một tháng bạn cần bao nhiêu video, và mỗi video được phép tốn bao nhiêu thời gian của bạn?',
      },

      { h2: 'AI làm được gì và không làm được gì' },
      {
        p: 'AI viết được bản nháp lời bình, đọc thành giọng tự nhiên, tạo phụ đề từ lời đọc, và chọn cảnh khớp với câu. Nó không biết sản phẩm nào đang bán chạy, không biết người xem của bạn là ai, và không chịu trách nhiệm về bản quyền footage.',
      },
      {
        ul: [
          'Viết lời: có, nhưng phải đọc lại. Câu mở đầu và câu kết vẫn là việc của bạn.',
          'Giọng đọc: có, và tiếng Việt đã đủ tốt để dùng cho video bán hàng nếu chọn đúng giọng và tốc độ.',
          'Phụ đề: có, từ lời đọc hoặc từ track có sẵn. Chất lượng phụ thuộc nguồn.',
          'Chọn cảnh: có, ở mức khớp nghĩa. Khớp cảm xúc vẫn cần người xem lại.',
          'Chọn sản phẩm, viết chiến lược, chịu bản quyền: không. Đây là phần việc của bạn, và không nên giao cho máy.',
        ],
      },

      { h2: 'Chi phí thật: thời gian và tiền' },
      {
        p: 'Chi phí theo video có hai phần. Phần tiền gồm tool, API AI và điện; phần thời gian gồm chọn nguyên liệu, viết/sửa lời, xem lại và đăng. Phần thời gian thường lớn hơn phần tiền, và nó không giảm khi bạn mua gói đắt hơn.',
      },
      {
        p: 'Ví dụ dễ kiểm: nếu một video mất 40 phút chọn nguyên liệu và viết lời, 20 phút xem lại, 5 phút đăng, thì mỗi video là hơn một giờ của bạn. Với 30 video/tháng, đó là hơn 30 giờ — gần một tuần làm việc. Nếu tool tiết kiệm 20 phút mỗi video, nó tiết kiệm 10 giờ/tháng; đó là con số nên so với giá gói.',
      },
      {
        p: 'Với API tính theo token, chi phí tăng theo số video và độ dài lời. Với tool tính theo tháng, chi phí gần như cố định. Với tool tính theo phút render, chi phí tăng theo độ dài video. Ba kiểu này cho ba kết quả rất khác nhau ở 10, 30 và 100 video/tháng. Bài [một video bán hàng tốn bao nhiêu tiền](/blog/mot-video-ban-hang-ton-bao-nhieu-tien/) đi sâu vào phép tính.',
      },

      { h2: 'Quy trình bốn bước cho lô đầu tiên' },
      {
        ol: [
          'Chọn một nhóm sản phẩm và một kiểu video duy nhất. Đừng trộn ba định dạng trong lô đầu; bạn sẽ không biết cái nào hiệu quả.',
          'Viết một brief ngắn: người xem là ai, họ đang gặp vấn đề gì, câu mở đầu nói gì, câu kết đề nghị gì. Brief này dùng cho cả lô.',
          'Làm 10 video, không phải 100. Xem hết, ghi lại ba lỗi lặp lại, sửa template hoặc brief trước khi làm tiếp.',
          'Chỉ nhân lô khi 10 video đầu giữ được nhịp thời gian bạn đã tính. Nếu mỗi video vẫn tốn gấp đôi dự kiến, vấn đề là quy trình, không phải số lượng.',
        ],
      },
      {
        p: 'Nếu bạn dùng AutoReel, lô đầu nên chạy qua [luồng Affiliate](/tai-lieu/luong-affiliate/) với 10 sản phẩm, rồi xem [video demo](/video-demo-thuc-te/) để so cách app xử lý một job thật. Đừng bắt đầu bằng 100 sản phẩm chỉ vì app cho phép.',
      },

      { h2: 'Một brief mẫu cho cả lô' },
      {
        p: 'Brief không phải kịch bản. Nó là phần không đổi giữa các video, để mỗi video chỉ cần thay sản phẩm và một chi tiết. Một brief đủ dùng có bốn dòng:',
      },
      {
        ul: [
          'Người xem: “người mới tập gym, mua đồ ở Shopee, xem video lúc tối”.',
          'Vấn đề: “mua sai kích cỡ vì không biết cách đọc bảng size”.',
          'Câu mở đầu: “Đừng mua đồ gym theo cân nặng; hãy đo vòng ngực trước”.',
          'Câu kết: “Bấm vào giỏ bên dưới để xem bảng size của shop này”.',
        ],
      },
      {
        p: 'Khi brief đã rõ, mỗi video chỉ còn hai biến: sản phẩm và chi tiết chứng minh. Đó là lý do cùng một brief có thể chạy 30 video mà không video nào giống hệt video nào. Nếu brief mơ hồ, 30 video sẽ giống hệt nhau ở chỗ tệ nhất — cùng một câu chung chung.',
      },

      { h2: 'Chọn theo số video mỗi tháng' },
      {
        ul: [
          'Dưới 10 video/tháng: template và làm tay thường rẻ hơn, và cho bạn kiểm soát từng khung. Mua tool lúc này là trả cho thứ bạn chưa dùng hết.',
          '10–30 video/tháng: đây là khoảng một tool đóng gói hoặc một pipeline local bắt đầu có lãi, vì thời gian tiết kiệm được lớn hơn giá gói.',
          '30–100 video/tháng: cần một quy trình có hàng đợi, template và kiểm tra tự động. Làm tay sẽ không giữ được chất lượng; API tự viết có thể rẻ hơn nhưng cần người bảo trì.',
          'Trên 100 video/tháng: bài toán chuyển từ tool sang vận hành — ai kiểm tra, ai sửa, ai chịu trách nhiệm khi video sai. Không có tool nào giải quyết phần đó.',
        ],
      },
      {
        p: 'Cuối cùng, đừng chọn theo số video tối đa mà tool quảng cáo. Chọn theo số video bạn thực sự làm được mỗi tháng, với chất lượng bạn dám đăng. Một tool cho phép 300 video/tháng không giúp gì nếu bạn chỉ có thời gian kiểm tra 20.',
      },
    ],
    en: [
      { h2: 'Five ways, ordered by control' },
      {
        p: 'The first is an editor with templates: CapCut, Canva, or a bought template pack. You control every frame, but every video is still a manual edit. It fits when you make few videos and need each one to be different.',
      },
      {
        p: 'The second is an API and your own script: call a model for the script, a TTS service for the voice, and join it with a video encoder. Maximum control, but you maintain the code and handle the failures. It fits someone who can program and wants a process of their own.',
      },
      {
        p: 'The third is open-source software such as a popular open-source project: free, local, with a web interface. You still install it, configure API keys, and accept that features come from a community rather than a company accountable for them.',
      },
      {
        p: 'The fourth is a packaged app such as AutoReel: install once, with built-in flows for creating, voicing, subtitling and publishing. You trade some control for much less setup time.',
      },
      {
        p: 'The fifth is outsourcing: a person or a team makes the batch. Least control, highest cost per video, but no machine and no tool to learn.',
      },
      {
        note: 'No way is best for everyone. One question has an answer: how many videos do you need this month, and how much of your time may each one take?',
      },

      { h2: 'What AI can and cannot do' },
      {
        p: 'AI can draft narration, read it in a natural voice, create subtitles from the read, and pick shots that match a line. It does not know which product is selling, who your viewer is, or who owns the footage.',
      },
      {
        ul: [
          'Writing: yes, but read it. The opening and closing lines are still yours.',
          'Voice: yes, and Vietnamese is good enough for sales video if the voice and pace are right.',
          'Subtitles: yes, from the read or an existing track. Quality depends on the source.',
          'Shot selection: yes, at the level of meaning. Emotional fit still needs a human review.',
          'Choosing products, strategy, copyright: no. That is your work, and it should not be handed to a machine.',
        ],
      },

      { h2: 'The real cost: time and money' },
      {
        p: 'Cost per video has two parts. The money part is the tool, AI APIs and electricity; the time part is choosing material, writing and fixing lines, reviewing and publishing. Time is usually larger than money, and it does not shrink when you buy a more expensive plan.',
      },
      {
        p: 'An easy check: if one video takes 40 minutes choosing material and writing, 20 minutes reviewing and 5 minutes publishing, each video is over an hour of yours. At thirty videos a month, that is over thirty hours — almost a working week. If the tool saves twenty minutes per video, it saves ten hours a month; compare that with the plan price.',
      },
      {
        p: 'With token-priced APIs, cost grows with the number of videos and the length of the script. With a monthly tool, it is nearly fixed. With per-minute rendering, it grows with video length. The three behave very differently at 10, 30 and 100 videos a month. [What a sales video costs](/en/blog/what-a-video-costs/) goes through the arithmetic.',
      },

      { h2: 'A four-step first batch' },
      {
        ol: [
          'Pick one product group and one video format. Do not mix three formats in the first batch; you will not know which one worked.',
          'Write a short brief: who the viewer is, what problem they have, what the opening says, what the ending asks for. The whole batch uses it.',
          'Make ten videos, not a hundred. Watch them, note the three repeated mistakes, and fix the template or brief before continuing.',
          'Only double the batch when the first ten keep the time budget you planned. If each still takes twice as long, the problem is the process, not the volume.',
        ],
      },
      {
        p: 'If you use AutoReel, run the first batch through the [Affiliate flow](/en/docs/affiliate-flow/) with ten products, then watch the [demo](/en/video-demo/) to compare how the app handles a real job. Do not start with a hundred products just because the app allows it.',
      },

      { h2: 'A sample brief for the whole batch' },
      {
        p: 'A brief is not a script. It is the part that stays the same across videos, so each video only changes the product and one proof point. A usable brief has four lines:',
      },
      {
        ul: [
          'Viewer: “someone new to the gym, shopping on Shopee, watching video in the evening”.',
          'Problem: “buying the wrong size because they cannot read a size chart”.',
          'Opening line: “Do not buy gym clothes by body weight; measure your chest first.”',
          'Closing line: “Tap the cart below to see this shop’s size chart.”',
        ],
      },
      {
        p: 'Once the brief is clear, each video has only two variables: the product and the proof. That is why one brief can run thirty videos without any two being identical. A vague brief produces thirty videos that are identical in the worst place — the same generic line.',
      },

      { h2: 'Choose by videos per month' },
      {
        ul: [
          'Under 10 videos a month: templates and manual work are usually cheaper, and give you control of every frame. Buying a tool now is paying for something you do not use.',
          '10–30 a month: this is where a packaged tool or a local pipeline starts to pay for itself, because the time saved exceeds the plan price.',
          '30–100 a month: you need a process with a queue, templates and automated checks. Manual work will not hold quality; a custom API may be cheaper but needs maintenance.',
          'Over 100 a month: the problem moves from the tool to operations — who reviews, who fixes, who is accountable when a video is wrong. No tool solves that part.',
        ],
      },
      {
        p: 'Finally, do not choose by the maximum number of videos a tool advertises. Choose by the number you can actually make each month, at a quality you are willing to publish. A tool that allows 300 videos a month does not help if you only have time to review 20.',
      },
    ],
  },
  faq: {
    vi: [
      ['Tạo video hàng loạt bằng AI có cần biết dựng phim không?', 'Không, nếu bạn dùng tool đóng gói. Nhưng bạn vẫn cần biết mình muốn video trông như thế nào để đánh giá kết quả; nếu không, bạn chỉ đăng những gì máy đưa ra.'],
      ['Cách nào rẻ nhất?', 'Tuỳ số video. Dưới 10 video/tháng, template và làm tay thường rẻ hơn. Từ 10–30, tool đóng gói hoặc pipeline local bắt đầu có lãi. Trên 30, chi phí thời gian kiểm tra mới là khoản lớn nhất.'],
      ['AI có tự chọn sản phẩm được không?', 'Không. AI không biết sản phẩm nào đang bán, tồn kho, hay phù hợp với người xem của bạn. Chọn sản phẩm vẫn là việc của bạn.'],
      ['Có nên dùng một tool mã nguồn mở thay AutoReel?', 'Nếu bạn thích mã nguồn mở, không ngại cài đặt và chỉ cần video từ stock footage, tool đó là lựa chọn hợp lý. Nếu bạn cần tóm tắt phim, đăng Shopee/Facebook hoặc làm theo mẫu, AutoReel có sẵn các luồng đó.'],
      ['Bao nhiêu video một lô là hợp lý?', 'Mười video cho lô đầu. Đủ để thấy lỗi lặp lại mà chưa tốn quá nhiều thời gian nếu quy trình sai.'],
    ],
    en: [
      ['Do I need editing skills to make video in bulk with AI?', 'Not with a packaged tool. But you still need to know what you want the video to look like in order to judge the result; otherwise you publish whatever the machine returns.'],
      ['Which way is cheapest?', 'Depends on volume. Under ten videos a month, templates and manual work are usually cheaper. From ten to thirty, a packaged tool or local pipeline starts to pay for itself. Above thirty, review time is the largest cost.'],
      ['Can AI choose products for me?', 'No. AI does not know what is selling, what is in stock, or what fits your viewer. Choosing products remains your job.'],
      ['Should I use an open-source tool instead of AutoReel?', 'If you like open source, do not mind setup, and only need stock-footage video, such a tool is reasonable. If you need movie recaps, Shopee/Facebook publishing or reference-style video, AutoReel has those flows built in.'],
      ['How many videos should the first batch have?', 'Ten. Enough to see repeated mistakes without spending too much time if the process is wrong.'],
    ],
  },
};

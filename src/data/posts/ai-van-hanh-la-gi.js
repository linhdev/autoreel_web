/**
 * Blog post — AI Vận Hành là gì.
 *
 * The opening article of the campaign cluster: what the loop does, the six
 * answers that define a campaign, the one press, and the places it stops.
 * Deliberately no pricing table and no promise of autonomy; those are the
 * questions the other four articles answer.
 */
export default {
  slug: {
    vi: 'ai-van-hanh-la-gi',
    en: 'what-is-ai-operations',
  },
  title: {
    vi: 'AI Vận Hành là gì: một lần bấm, cả vòng lặp',
    en: 'What AI Operations is: one press, a whole loop',
  },
  description: {
    vi: 'AI Vận Hành là vòng lặp sáu bước trong AutoReel: tìm nguồn, dựng, kiểm, đăng, đo và học. Một lần bấm cho mỗi chiến dịch, kèm những chỗ nó không tự làm.',
    en: 'AI Operations is a six-step loop in AutoReel: find, build, check, post, measure and learn. One press per campaign, with the places it will not handle.',
  },
  date: '2026-10-29',
  minutes: { vi: 7, en: 7 },
  tag: {
    vi: 'Hướng dẫn',
    en: 'How-to',
  },
  lead: {
    vi: 'Một chiến dịch, một lần bấm: đó là câu mô tả ngắn nhất về AI Vận Hành, và cũng là câu dễ hiểu sai nhất. Nút bấm không làm một video; nó khởi động một vòng lặp sáu bước, và vòng lặp đó có những chỗ dừng cố ý.',
    en: 'One campaign, one press: the shortest description of AI Operations, and the easiest one to misread. The button does not make a video; it starts a six-step loop, and that loop has places where it deliberately stops.',
  },
  body: {
    vi: [
      { h2: 'Khác gì một nút đăng bài' },
      {
        p: 'Một nút đăng bài nhận một file có sẵn rồi đẩy lên nền tảng. AI Vận Hành bắt đầu trước đó: nó tự tìm video nguồn, dựng bản hoàn chỉnh, kiểm, đăng, đo, rồi dùng kết quả để quyết định lượt sau. Bạn bấm một lần cho cả chuỗi, không bấm từng bước.',
      },
      {
        p: 'Vì vậy câu hỏi đúng không phải “nó có tự đăng không”, mà là “nó tự làm được đến đâu, và dừng ở đâu”. Phần còn lại của bài này trả lời hai câu đó.',
      },
      { h2: 'Vòng lặp sáu bước' },
      {
        p: 'Sáu bước chạy nối tiếp trong một lượt. Bước nào hỏng thì dừng ở đó và nói lý do, không trôi tiếp sang bước sau.',
      },
      {
        ul: [
          'Tìm nguồn — tìm video mới trong bốn nguồn tìm được: Bilibili, Douyin, YouTube, iQiyi.',
          'Dựng — tải nguồn, cắt, lồng tiếng, phụ đề theo chế độ nội dung của chiến dịch.',
          'Kiểm — kiểm khung dọc, thời lượng và âm thanh trước khi cho đăng.',
          'Đăng — đăng lên Page đã chọn, ngay hoặc chờ bạn duyệt.',
          'Đo — đọc số từ Facebook ở năm mốc: 1 giờ, 6 giờ, 24 giờ, 72 giờ và 168 giờ.',
          'Học — so sánh trong cùng nền tảng, cùng mốc rồi đưa bài học sang lượt sau.',
        ],
      },
      {
        p: 'Sáu bước này không phải một dây chuyền mới phát minh. Chúng là đúng những việc bạn vẫn làm bằng tay, xếp theo thứ tự và giao cho máy. Khác biệt nằm ở chỗ chúng chạy liên tục mà không cần ai nhắc.',
      },
      { h2: 'Sáu câu trả lời tạo nên chiến dịch' },
      {
        p: 'Tạo chiến dịch không phải viết kịch bản. Nó là trả lời sáu câu: tên chiến dịch, Page đích, cách đăng (đăng ngay hoặc duyệt trước), ngôn ngữ bài đăng (tiếng Việt hoặc tiếng Anh), số video mỗi ngày, và kiểu chạy (liên tục theo giờ bắt đầu, hoặc một lần). Không có câu thứ bảy.',
      },
      {
        p: 'Sáu câu này đổi được sau. Đổi giữa chừng không làm hỏng video đã đăng; nó chỉ đổi cách chạy từ lượt kế tiếp. Cách đăng là câu đáng cân nhắc nhất, vì nó quyết định bạn giữ bao nhiêu quyền kiểm soát.',
      },
      { h2: 'Một lần bấm, và nút quay lại khi cần' },
      {
        p: 'Mỗi chiến dịch một lần bấm. Nếu lượt chạy xong mà không đăng được video nào, nút Bắt đầu trở lại để bạn thử lại sau khi sửa. Bộ chạy hằng ngày chỉ tự khởi động những chiến dịch chạy liên tục; chiến dịch một lần không tự chạy lại.',
      },
      {
        note: 'Chữ “tự động” ở đây không có nghĩa là không cần ai. Máy chạy vòng lặp, nhưng ba thứ vẫn thuộc về bạn: chọn Page và nội dung, giải CAPTCHA khi Douyin chặn, và chịu trách nhiệm về bản quyền của nguồn.',
      },
      { h2: 'Nó làm được gì' },
      {
        ul: [
          'Dựng video dọc 9:16 từ nguồn tìm được, có lời và phụ đề.',
          'Ở chế độ dịch và lồng tiếng, cắt nguồn dài hơn 90 giây thành clip 45 giây trước khi lồng tiếng.',
          'Giữ video ở trạng thái chờ duyệt, và cho bạn duyệt bằng nút trong tin nhắn Telegram.',
          'Đăng lên Page đã chọn, đúng khung và thời lượng mà Reels nhận.',
          'Đo số ở năm mốc và dùng kết quả đó cho lượt sau.',
        ],
      },
      {
        p: 'Danh sách này ngắn hơn bạn tưởng, và đó là chủ ý. Mỗi dòng là một việc hệ thống thật sự làm, không phải một việc gần giống.',
      },
      { h2: 'Nó không làm gì' },
      {
        p: 'Danh sách này quan trọng ngang danh sách trên.',
      },
      {
        ul: [
          'Không giải CAPTCHA. Douyin có lúc chặn bằng thanh trượt; bạn giải trong cửa sổ Chrome riêng của Douyin, chiến dịch chờ rồi thử lại.',
          'Không tìm video trên TikTok hay Hongguoduanju. Hai nguồn đó chỉ tải được bằng link ở màn Tải video.',
          'Không đăng TikTok hay YouTube trực tiếp.',
          'Không đăng video sai khung hoặc dài quá 90 giây lên Reels; bước kiểm chặn và ghi lý do.',
          'Không đo được nếu Page token thiếu quyền read_insights; đăng vẫn chạy, nhưng không có số để học.',
        ],
      },
      { h2: 'Nhìn thấy gì khi nó đang chạy' },
      {
        p: 'Cửa sổ theo dõi có ba phần: khung trình duyệt đang chạy, danh sách video đã tìm, và bảng kết quả. Bảng là chỗ trả lời câu hỏi “cái gì đang xảy ra”: mỗi video hiện một trạng thái, gồm đang tạo, kiểm không đạt, đã đăng hoặc chờ duyệt.',
      },
      {
        p: 'Trạng thái kiểm không đạt luôn kèm lý do. Đọc lý do trước khi chạy lại, vì chạy lại một video sai khung chỉ tạo ra đúng lỗi đó lần nữa.',
      },
      { h2: 'Ai nên bật, ai nên để yên' },
      {
        p: 'Bật khi bạn có một Page cần đăng đều, nguồn ổn định, và bạn sẵn sàng xem lại kết quả mỗi ngày trong tuần đầu. Để yên khi bạn làm ít video, khi nội dung cần duyệt từng câu, hoặc khi nguồn của bạn chỉ có trên TikTok.',
      },
      {
        p: 'Không có chế độ nào tự biến một Page mới thành Page có người xem. Nó chỉ làm phần lặp lại nhanh hơn, để bạn có thời gian làm phần không lặp lại được. Nếu điều bạn cần là một video mỗi tuần, tự làm sẽ nhanh hơn là dựng cả một chiến dịch.',
      },
    ],
    en: [
      { h2: 'What makes it different from a publish button' },
      {
        p: 'A publish button takes a file you already have and pushes it to a platform. AI Operations starts earlier: it finds the source video, builds the finished cut, checks it, posts it, measures it, and uses the result to decide the next run. You press once for the whole chain, not once per step.',
      },
      {
        p: 'So the useful question is not “does it post by itself”, but “how far does it go on its own, and where does it stop”. The rest of this article answers those two.',
      },
      { h2: 'The six-step loop' },
      {
        p: 'Six steps run in sequence within one run. If a step fails, it stops there and says why; it does not drift on to the next one.',
      },
      {
        ul: [
          'Find — look for new videos across the four searchable sources: Bilibili, Douyin, YouTube, iQiyi.',
          'Build — fetch the source, cut, dub and subtitle it in the campaign’s content mode.',
          'Check — check the vertical frame, the duration and the sound before publishing.',
          'Post — publish to the chosen Page, immediately or after your approval.',
          'Measure — read Facebook’s numbers at five checkpoints: 1 hour, 6 hours, 24 hours, 72 hours and 168 hours.',
          'Learn — compare within the same platform and checkpoint, then carry the lesson into the next run.',
        ],
      },
      {
        p: 'None of these steps is a new invention. They are the jobs you already do by hand, put in an order and handed to a machine. The difference is that they run without somebody reminding them to.',
      },
      { h2: 'Six answers make the campaign' },
      {
        p: 'Creating a campaign is not writing a script. It is six answers: campaign name, target Page, post mode (publish now or approve first), post language (Vietnamese or English), videos per day, and runtime (continuous at a start time, or one-shot). There is no seventh question.',
      },
      {
        p: 'All six can change later. Changing one mid-flight does not touch videos already posted; it changes how the next run behaves. Post mode is the one worth thinking about hardest, because it decides how much control you keep.',
      },
      { h2: 'One press, and the button comes back when it should' },
      {
        p: 'One press per campaign. If a run finishes without posting a single video, the Start button comes back so you can try again after fixing whatever stopped it. The daily runner only starts campaigns set to continuous; a one-shot campaign does not restart itself.',
      },
      {
        note: '“Automatic” here does not mean nobody is needed. The machine runs the loop, but three things stay yours: choosing the Page and the content, solving the CAPTCHA when Douyin blocks, and taking responsibility for the rights to the source.',
      },
      { h2: 'What it does' },
      {
        ul: [
          'Builds a vertical 9:16 video from a source it found, with voice and subtitles.',
          'In translate-and-dub mode, cuts a source longer than 90 seconds into a 45-second clip before dubbing.',
          'Holds a finished video as awaiting approval, and lets you approve it from a button in a Telegram message.',
          'Publishes to the chosen Page, in the frame and duration Reels accepts.',
          'Measures five checkpoints and feeds the result into the next run.',
        ],
      },
      {
        p: 'The list is shorter than you might expect, and that is deliberate. Each line is something the system actually does, not something close to it.',
      },
      { h2: 'What it does not do' },
      {
        p: 'This list matters as much as the one above.',
      },
      {
        ul: [
          'It does not solve CAPTCHA. Douyin sometimes blocks with a slider; you solve it in the dedicated Chrome window for Douyin, and the campaign waits and retries.',
          'It does not search TikTok or Hongguoduanju. Those two can only be downloaded by link on the Download screen.',
          'It does not post to TikTok or YouTube directly.',
          'It does not post a video in the wrong frame or over 90 seconds to Reels; the check blocks it and records the reason.',
          'It cannot measure anything if the Page token lacks the read_insights permission; publishing still runs, but there are no numbers to learn from.',
        ],
      },
      { h2: 'What you see while it runs' },
      {
        p: 'The watch window has three parts: the browser view that is running, the list of found videos, and the results table. The table answers “what is happening now”: each video shows one state — creating, QC failed, posted or awaiting approval.',
      },
      {
        p: 'A QC failure always carries the reason. Read it before running again, because rerunning a video with the wrong frame only produces the same error a second time.',
      },
      { h2: 'Who should turn it on, and who should not' },
      {
        p: 'Turn it on when you have one Page that needs steady posting, sources that are stable, and the willingness to look at the results every day for the first week. Leave it off when you make few videos, when every line needs approval, or when your only source is TikTok.',
      },
      {
        p: 'No mode turns a new Page into one with an audience. It only makes the repeated part faster, so you have time for the part that cannot be repeated. If what you need is one video a week, making it yourself is faster than setting up a campaign.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'AI Vận Hành có phải là tính năng đăng bài tự động không?',
        a: 'Không chỉ vậy. Đăng bài là một bước trong vòng lặp sáu bước. Phần lớn thời gian nằm ở tìm nguồn, dựng và kiểm trước khi đăng, rồi đo và học sau khi đăng.',
      },
      {
        q: 'Tôi có phải bấm duyệt từng video không?',
        a: 'Chỉ khi bạn chọn duyệt trước. Chế độ đó giữ video lại cho tới khi bạn duyệt trong app hoặc trong tin nhắn Telegram. Chọn đăng ngay thì video qua kiểm là lên Page.',
      },
      {
        q: 'Nó có tự tìm được video trên TikTok không?',
        a: 'Không. Bốn nguồn tìm được là Bilibili, Douyin, YouTube và iQiyi. TikTok và Hongguoduanju vẫn tải được bằng link, chỉ không nằm trong vòng tìm của chiến dịch.',
      },
      {
        q: 'Một chiến dịch chạy được bao nhiêu video?',
        a: 'Số video mỗi ngày là một trong sáu câu trả lời bạn đặt khi tạo chiến dịch, và đổi được sau đó. Lượt chạy xong mà không đăng được video nào thì nút Bắt đầu trở lại.',
      },
      {
        q: 'Tôi cần chuẩn bị gì trước khi bật chiến dịch đầu tiên?',
        a: 'Một Page đã kết nối, quyền read_insights trên Page token nếu muốn đo, và một quyết định về cách đăng. Tuần đầu nên chạy duyệt trước để bạn thấy video đi qua trước khi cho đăng thẳng.',
      },
    ],
    en: [
      {
        q: 'Is AI Operations just an automatic publish feature?',
        a: 'No. Publishing is one step of a six-step loop. Most of the work sits in finding the source, building the cut and checking it before posting, then measuring and learning after.',
      },
      {
        q: 'Do I have to approve every video?',
        a: 'Only if you choose approve-first. That mode holds the video until you approve it in the app or in a Telegram message. With publish straight away, a video that passes the check goes to the Page.',
      },
      {
        q: 'Can it find videos on TikTok?',
        a: 'No. The four searchable sources are Bilibili, Douyin, YouTube and iQiyi. TikTok and Hongguoduanju can still be downloaded by link, but they are not in the campaign’s search loop.',
      },
      {
        q: 'How many videos does one campaign run?',
        a: 'Videos per day is one of the six answers you give when creating the campaign, and it can change later. If a run finishes without posting a single video, the Start button comes back.',
      },
      {
        q: 'What should I prepare before turning on the first campaign?',
        a: 'A connected Page, the read_insights permission on the Page token if you want measurement, and a decision about post mode. Run approve-first for the first week so you see videos go through before letting them post directly.',
      },
    ],
  },
};

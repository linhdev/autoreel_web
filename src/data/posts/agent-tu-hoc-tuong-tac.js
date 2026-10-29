/**
 * Blog post — how the agent learns.
 *
 * The learning article: the four signals, normalisation by platform and
 * checkpoint, shrinkage for small samples, exploration, and what to expect
 * after 10, 50 and 200 videos. No measured benchmarks; the counts are reading
 * guidance, not promised results.
 */
export default {
  slug: {
    vi: 'agent-tu-hoc-tuong-tac',
    en: 'how-the-agent-learns',
  },
  title: {
    vi: 'Học từ số liệu: bốn tín hiệu và vì sao kênh nhỏ học chậm',
    en: 'How it learns: four signals, and why small Pages learn slowly',
  },
  description: {
    vi: 'Views, tỉ lệ xem hết, tương tác và follow trên 1.000 lượt xem — bốn tín hiệu được chuẩn hoá theo nền tảng và mốc đo. Vì sao kênh nhỏ cần nhiều video hơn.',
    en: 'Views, watch-through, engagement and follows per 1,000 views — four signals normalised by platform and checkpoint, and why small Pages need more videos.',
  },
  date: '2026-10-29',
  minutes: { vi: 8, en: 8 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Một chiến dịch đăng video xong thì phần khó mới bắt đầu: biết cái gì hiệu quả. Hệ thống không đọc được suy nghĩ của người xem; nó chỉ có bốn tín hiệu, và bốn tín hiệu đó phải được so đúng cách trước khi thành bài học.',
    en: 'Posting the videos is the easy half. The hard half is knowing what worked. The agent cannot read viewers’ minds; it has four signals, and those four have to be compared correctly before they become a lesson.',
  },
  body: {
    vi: [
      { h2: 'Bốn tín hiệu, bốn câu hỏi khác nhau' },
      {
        p: 'Mỗi video đã đăng để lại bốn tín hiệu. Chúng không được cộng thô thành một điểm, vì mỗi cái trả lời một câu khác nhau.',
      },
      {
        ul: [
          'Lượt xem — nền tảng có phân phối bài hay không.',
          'Tỉ lệ xem hết — thời gian xem trung bình chia cho độ dài video; đoạn nào giữ được người xem.',
          'Tương tác — like, comment, share trên mỗi lượt xem.',
          'Follow trên 1.000 lượt xem — video có mang người mới về Page hay chỉ được xem rồi thôi.',
        ],
      },
      {
        p: 'Một video nhiều lượt xem nhưng ít follow đang làm việc khác với một video ít lượt xem nhưng giữ người xem tới cuối. Cộng chúng lại sẽ làm mất đúng phần thông tin đáng đọc.',
      },
      { h2: 'Chuẩn hoá trước khi so: cùng nền tảng, cùng mốc' },
      {
        p: 'Số thô không so được. Một Page nhỏ và một Page lớn có cùng nội dung sẽ ra hai con số khác nhau; một video ở mốc 1 giờ và một video ở mốc 168 giờ cũng vậy. Vì thế mỗi tín hiệu được đưa về thang đo chung trong nhóm cùng nền tảng và cùng mốc trước khi so.',
      },
      {
        p: 'Nói cách khác, câu hỏi không phải “video này được bao nhiêu lượt xem”, mà là “video này được bao nhiêu so với mức thường thấy của chính Page này ở cùng mốc”. Cách so đó công bằng hơn, và cũng ít bị đánh lừa bởi một video may mắn.',
      },
      {
        p: 'Kết quả cũ mờ dần theo thời gian. Video của tháng trước vẫn còn trong bài học, nhưng không nặng bằng video của tuần này: nội dung, người xem và cách phân phối đều đổi.',
      },
      { h2: 'Mẫu nhỏ bị kéo về mức trung bình' },
      {
        p: 'Một video có vài lượt xem và tỉ lệ xem hết cao chưa chắc tốt hơn một video có nhiều lượt xem và tỉ lệ thấp hơn. Với ít người xem, một hai người xem hết cũng đủ làm tỉ lệ đẹp, và tỉ lệ đẹp đó không lặp lại.',
      },
      {
        p: 'Vì vậy video có ít dữ liệu bị kéo về mức trung bình thay vì được coi là thắng. Khi có thêm video, ước lượng dịch dần về phía thực tế. Đó là lý do một video đột biến hiếm khi đổi được cả kế hoạch ngay lập tức.',
      },
      { h2: 'Vẫn phải thử cái chưa biết' },
      {
        p: 'Nếu chỉ dựa vào kết quả đã có, nó sẽ lặp mãi phương án thắng đầu tiên. Vì thế vẫn có một phần lượt chạy dành cho phương án chưa thử: một nguồn khác, một kiểu mở đầu khác, một chế độ khác.',
      },
      {
        p: 'Phần này có giá. Có lúc nó tạo ra vài video kém hơn phương án đang tốt. Đổi lại, bạn biết được phương án mới có tốt hơn không, thay vì chỉ tin vào lần thắng đầu tiên.',
      },
      { h2: 'Kênh nhỏ học chậm, và đó là toán học' },
      {
        p: 'Học từ số liệu là so chênh lệch giữa các video với mức nhiễu. Kênh nhỏ có ít lượt xem mỗi video, nên nhiễu lớn so với chênh lệch. Không có cách nào sửa điều đó bằng thuật toán thông minh hơn; chỉ có thêm dữ liệu.',
      },
      {
        ul: [
          'Khoảng 10 video: chưa đủ. Chênh lệch giữa các video chủ yếu là may mắn, và bài học rút ra dễ đổi ngay ở video sau.',
          'Khoảng 50 video: bắt đầu thấy mẫu lặp lại, nhưng một video đột biến vẫn đủ làm bạn đổi ý.',
          'Khoảng 200 video: đủ để so cả những khác biệt nhỏ, nếu nguồn và chế độ nội dung được giữ ổn định trong suốt thời gian đó.',
        ],
      },
      {
        p: 'Ba mốc này là cách nghĩ, không phải lời hứa. Một Page có nhiều người theo dõi học nhanh hơn vì mỗi video có nhiều lượt xem hơn — cùng số video, nhiều tín hiệu hơn. Page mới học chậm hơn vì cùng lý do, không phải vì bị xếp sau.',
      },
      { h2: 'Nó học cái gì, và không học cái gì' },
      {
        p: 'Nó học cái gì được xem, được xem bao lâu, được tương tác thế nào. Nó không biết video nào bán được, vì đơn hàng và doanh thu không nằm trong bốn tín hiệu. Một video giữ người xem rất tốt vẫn có thể không bán được gì.',
      },
      {
        p: 'Nó cũng chỉ học từ video đã đăng. Video bạn từ chối không mang số về, nên duyệt trước làm chậm việc học — đánh đổi có ý thức: bạn giữ quyền kiểm soát và nhận ít dữ liệu hơn.',
      },
      {
        p: 'Và nếu bạn đổi nguồn, đổi chế độ, đổi giờ liên tục, dữ liệu bị trộn. Nó vẫn học, nhưng bài học nói về một hỗn hợp chứ không nói về thứ nào cụ thể. Giữ ổn định một thời gian là cách giúp nó học nhanh hơn, không phải chạy nhiều hơn.',
      },
      { h2: 'Cách giúp nó học nhanh hơn' },
      {
        ul: [
          'Giữ một chế độ nội dung và một nguồn ổn định trong vài tuần đầu.',
          'Đăng đủ số video mỗi ngày thay vì dồn vào một hôm.',
          'Đọc bảng kết quả ở cùng một mốc, đừng đọc theo cảm giác.',
          'Đổi một thứ mỗi lần, và ghi lại mình đã đổi gì.',
        ],
      },
      {
        note: 'Hệ thống không biết video nào bán được. Nó chỉ biết video nào được xem và được xem bao lâu. Phần doanh thu vẫn là việc của bạn, và không có bảng số nào thay được việc bạn xem đơn hàng.',
      },
    ],
    en: [
      { h2: 'Four signals, four different questions' },
      {
        p: 'Every posted video leaves four signals. They are not added into one score, because each answers a different question.',
      },
      {
        ul: [
          'Views — whether the platform distributes the post.',
          'Watch-through — average watch time divided by the video length; which parts hold people.',
          'Engagement — likes, comments and shares per view.',
          'Follows per 1,000 views — whether the video brings new people to the Page or is only watched once.',
        ],
      },
      {
        p: 'A video with many views and few follows is doing a different job from a video with few views that holds people to the end. Adding them together loses exactly the information worth reading.',
      },
      { h2: 'Normalise before comparing: same platform, same checkpoint' },
      {
        p: 'Raw numbers are not comparable. A small Page and a large Page showing the same content produce two different numbers; a video at one hour and a video at 168 hours do the same. So each signal is put on a common scale within the same platform and the same checkpoint before anything is compared.',
      },
      {
        p: 'In other words, the question is not “how many views did this video get”, but “how many did it get against what this Page usually gets at the same checkpoint”. That comparison is fairer, and harder to fool with one lucky video.',
      },
      {
        p: 'Older results fade over time. Last month’s videos still count, but they weigh less than this week’s: the content, the audience and the distribution all change.',
      },
      { h2: 'Small samples get pulled towards the average' },
      {
        p: 'A video with a handful of views and a high watch-through is not necessarily better than a video with many views and a lower one. With few viewers, one or two people watching to the end is enough to make the rate look good, and that rate does not repeat.',
      },
      {
        p: 'So a video with little data is pulled towards the average instead of being treated as a winner. As more videos arrive, the estimate moves towards reality. That is why one outlier rarely changes the whole plan on its own.',
      },
      { h2: 'It still has to try what it does not know' },
      {
        p: 'If it only leaned on results it already had, it would repeat the first winning option forever. So a share of each run is kept for an option that has not been tried: a different source, a different opening, a different mode.',
      },
      {
        p: 'That share has a cost. Sometimes it produces a few videos that do worse than the option already working. In return, you find out whether the new option is better, instead of trusting the first win forever.',
      },
      { h2: 'Small Pages learn slowly, and that is arithmetic' },
      {
        p: 'Learning from numbers means comparing the differences between videos against the noise. A small Page has few views per video, so the noise is large relative to the differences. No smarter algorithm fixes that; only more data does.',
      },
      {
        ul: [
          'Around 10 videos: not enough. The differences between videos are mostly luck, and the lesson changes with the next video.',
          'Around 50 videos: a repeating pattern starts to show, but one outlier can still change your mind.',
          'Around 200 videos: enough to compare even small differences, provided the source and the content mode stayed stable throughout.',
        ],
      },
      {
        p: 'Those three counts are a way of thinking, not a promise. A Page with more followers learns faster because each video gets more views — the same number of videos produces more signal. A new Page learns more slowly for the same reason, not because it is being punished.',
      },
      { h2: 'What it learns, and what it does not' },
      {
        p: 'It learns what gets watched, for how long, and how people engage. It does not know which video sells, because orders and revenue are not among the four signals. A video that holds viewers beautifully can still sell nothing.',
      },
      {
        p: 'It also only learns from videos that were posted. A video you reject brings back no numbers, so approve-first slows the learning down — a conscious trade: you keep control and get less data.',
      },
      {
        p: 'And if you keep changing the source, the mode and the time, the data gets mixed. It still learns, but the lesson is about a blend rather than about any one thing. Staying stable for a while is what makes it learn faster; running more is not.',
      },
      { h2: 'How to help it learn faster' },
      {
        ul: [
          'Keep one content mode and one source stable for the first few weeks.',
          'Post the daily number instead of saving them up for one day.',
          'Read the results table at the same checkpoint, not by feel.',
          'Change one thing at a time, and write down what you changed.',
        ],
      },
      {
        note: 'The agent does not know which video sells. It only knows which video was watched, and for how long. Revenue stays your job, and no table replaces looking at your orders.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Bao lâu thì nó học được?',
        a: 'Phụ thuộc số lượt xem mỗi video, không phụ thuộc số ngày. Khoảng 10 video còn quá sớm, khoảng 50 bắt đầu thấy mẫu, khoảng 200 mới đủ để so khác biệt nhỏ.',
      },
      {
        q: 'Nó có học từ video tôi không đăng không?',
        a: 'Không. Chỉ video đã đăng mới mang số về. Video bị từ chối ở bước duyệt không để lại tín hiệu nào.',
      },
      {
        q: 'Nó có biết video nào bán được không?',
        a: 'Không. Bốn tín hiệu là lượt xem, xem hết, tương tác và follow. Đơn hàng và doanh thu không nằm trong đó, nên bạn vẫn phải đọc báo cáo bán hàng của mình.',
      },
      {
        q: 'Đổi nguồn liên tục có sao không?',
        a: 'Dữ liệu bị trộn, nên bài học không nói được nguồn nào tốt hơn. Giữ một nguồn và một chế độ ổn định vài tuần là cách giúp nó học nhanh hơn.',
      },
      {
        q: 'Kênh mới hoàn toàn thì sao?',
        a: 'Học chậm hơn vì mỗi video có ít lượt xem hơn. Cách bù là đăng đều, giữ cấu hình ổn định, và đọc kết quả ở cùng một mốc thay vì đổi liên tục.',
      },
    ],
    en: [
      {
        q: 'How long does the learning take?',
        a: 'It depends on views per video, not on days. Around 10 videos is too early, around 50 starts to show a pattern, and around 200 is enough to compare small differences.',
      },
      {
        q: 'Does it learn from videos I do not post?',
        a: 'No. Only posted videos bring numbers back. A video rejected at approval leaves no signal at all.',
      },
      {
        q: 'Does it know which video sells?',
        a: 'No. The four signals are views, watch-through, engagement and follows. Orders and revenue are not among them, so you still have to read your own sales reports.',
      },
      {
        q: 'Is it a problem to keep changing sources?',
        a: 'The data gets mixed, so the lesson cannot say which source was better. Keeping one source and one mode stable for a few weeks is how you help it learn faster.',
      },
      {
        q: 'What about a brand-new Page?',
        a: 'It learns more slowly because each video gets fewer views. The way to compensate is steady posting, a stable setup, and reading results at the same checkpoint instead of changing things constantly.',
      },
    ],
  },
};

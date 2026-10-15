/**
 * Blog post — "Làm sao biết hệ thống đang chạy hay đã dừng".
 *
 * Architecture level: honest state reporting, why a live connection has to be
 * re-asked before work is handed over, progress by step instead of a made-up
 * percentage, and what an error message owes the person reading it.
 */
export default {
  slug: {
    vi: 'lam-sao-biet-he-thong-dang-chay-hay-da-dung',
    en: 'knowing-it-is-still-running',
  },
  title: {
    vi: 'Im lặng không có nghĩa là đang chạy tốt',
    en: 'Silence does not mean it is running fine',
  },
  description: {
    vi: 'Trạng thái thật khác trạng thái tưởng: vì sao phải hỏi lại thiết bị trước khi giao việc, vì sao nên đếm tiến độ theo bước, và nhật ký giúp gì khi có sự cố.',
    en: 'The state you assume is not the state you have: why the device must be asked again before work is handed over, why progress counts steps, and what a log is for.',
  },
  date: '2026-10-10',
  minutes: { vi: 5, en: 5 },
  tag: {
    vi: 'Công nghệ',
    en: 'How it works',
  },
  lead: {
    vi: 'Một màn hình hiện chữ đang kết nối không có nghĩa là đang kết nối. Chỗ khó nhất của việc theo dõi một hệ thống chạy tự động là phân biệt trạng thái thật với trạng thái tưởng, và nói cho người dùng đúng cái đang xảy ra.',
    en: 'A screen that says connected does not mean connected. The hard part of watching an automated system is telling the real state apart from the assumed one, and telling the person in front of it what is actually happening.',
  },
  body: {
    vi: [
    {
      h2: 'Màn hình đang hiện trạng thái cũ, và không ai báo cho bạn',
    },
    {
      p: 'Phần mềm nào cũng có lúc chỉ đang nhớ giá trị cuối cùng mà nó biết, và giá trị đó hoàn toàn có thể đã cũ từ lâu. Dây mạng bị rút, điện thoại ngủ, ứng dụng bị đóng — mà màn hình vẫn hiện trạng thái cũ vì chưa ai hỏi lại.\n\nĐây không phải lỗi riêng của phần mềm làm video. Nó là cái bẫy của mọi hệ thống có hiển thị trạng thái, kể cả những hệ thống đắt tiền hơn nhiều.',
    },
    {
      h2: 'Trạng thái kết nối chỉ đúng tại giây vừa hỏi lại',
    },
    {
      p: 'Kết nối không phải một thuộc tính lưu một lần rồi dùng mãi. Nó là một quan hệ đang sống, có thể đứt bất cứ lúc nào mà không ai báo trước. Vì vậy trạng thái kết nối chỉ đúng tại thời điểm vừa được hỏi lại.\n\nMột giá trị đọc lên êm tai nhưng sai thì tệ hơn hẳn một câu trả lời chậm.',
    },
    {
      ul: [
        'Hỏi lại ngay trước khi giao việc, thay vì tin vào giá trị đã lưu từ lúc mở máy.',
        'Khi không hỏi được thì nói thẳng là chưa xác nhận, đừng mặc định là vẫn ổn.',
        'Không đánh dấu thành công cho một việc chưa có bằng chứng hoàn thành.',
        'Cho người dùng thấy trạng thái ngay lúc mở phần mềm, thay vì để họ phát hiện sau khi cả lô việc đã lỗi.',
      ],
    },
    {
      h2: 'Phần trăm là con số dễ sai nhất, nên tiến độ nên đếm theo bước',
    },
    {
      p: 'Phần trăm là con số dễ làm hài lòng nhất và cũng dễ sai nhất. Khi không có thước đo thật, phần trăm chỉ là con số trang trí: đứng ở chín mươi phần trăm suốt hai mươi phút thì bạn không biết nó đang chạy hay đã treo. Một thanh tiến độ đẹp không giúp bạn quyết định được gì.\n\nBước thì khác, vì mỗi bước là một việc đã xong và kiểm tra được. Khi một bước đứng lâu bất thường, bạn biết chính xác đang chờ ở đâu, và biết nên chờ tiếp hay dừng lại.',
    },
    {
      ul: [
        'Kịch bản xong: đã có chữ để đọc, và bạn duyệt được trước khi tốn thời gian dựng.',
        'Giọng đọc xong: đây thường là bước nặng nhất, nên nó đứng lâu là bình thường.',
        'Dựng hình xong: file đã nằm trên ổ đĩa, mở xem được ngay.',
        'Đăng xong: chỉ tính khi nền tảng đã xác nhận, không tính theo lúc hệ thống gửi đi.',
      ],
    },
    {
      h2: 'Nhật ký trả lời chuyện gì đã xảy ra, thay vì để bạn đoán',
    },
    {
      p: 'Nhật ký ghi lại việc nào đã chạy, lúc nào, dừng ở bước nào, và lỗi nói gì. Ba việc dùng thật của nó: phân biệt hệ thống hỏng với nền tảng từ chối nhận bài; chạy lại đúng phần đã hỏng thay vì làm lại cả video; và khi bạn cần người hỗ trợ xem giúp, bạn có cái để đưa thay vì mô tả bằng cảm giác.',
    },
    {
      h2: 'Một báo lỗi tử tế nói được cái gì hỏng và bạn phải làm gì tiếp',
    },
    {
      ul: [
        'Nói cái gì hỏng, ở bước nào. Đăng Shopee lỗi ở bước gửi bài hữu ích hơn có lỗi xảy ra.',
        'Nói bạn cần làm gì tiếp. Đa số lỗi có một hành động đi kèm: kiểm tra kết nối, thử lại, giảm số việc chạy cùng lúc.',
        'Không báo thành công khi chưa xác nhận. Một câu chưa xác nhận được trung thực hơn một dấu tích sai.',
        'Không im lặng. Một việc chạy mãi không có cập nhật là kiểu lỗi tệ nhất, vì người dùng chờ mà không biết mình đang chờ gì.',
      ],
    },
    {
      note: 'Giới hạn cần biết trước: hệ thống không thể báo cho bạn điều nó không đo được. Nếu nền tảng không trả lời, cách trung thực nhất là nói rõ chưa xác nhận. Nếu bạn muốn một màn hình chỉ toàn màu xanh và luôn báo thành công, bạn sẽ có một màn hình dễ chịu nhưng không dùng được để ra quyết định.',
    },
    {
      p: 'Khi bạn điều khiển từ xa qua Telegram, nguyên tắc này càng quan trọng: bạn không ngồi cạnh máy nên không thể tự nhìn. Một báo cáo trung thực — kể cả báo cáo nói việc đã dừng — có giá trị hơn một thông báo báo xong cho vui.',
    },
    ],
    en: [
    {
      h2: 'The screen is showing an old state, and nobody is going to tell you',
    },
    {
      p: 'Every piece of software has moments when it is only remembering the last value it knew, and that value may be long out of date. The cable is unplugged, the phone is asleep, the app is closed — and the screen still shows the old state, because nothing has asked again.\n\nThis is not a flaw unique to video software. It is the trap built into anything that displays status, including systems far more expensive than this one.',
    },
    {
      h2: 'A connection is only true as of the second you last asked',
    },
    {
      p: 'A connection is not a property you store once and reuse. It is a live relationship that can break at any moment without warning. So the state is only correct at the instant it was re-checked.\n\nA value that reads well and is wrong is far worse than an answer that arrives late.',
    },
    {
      ul: [
        'Ask again right before handing work over, instead of trusting a value saved when the app started.',
        'When you cannot ask, say so plainly — do not assume everything is fine.',
        'Never mark a job as successful without evidence that it finished.',
        'Show the state the moment the software opens, rather than letting people discover it after a whole batch has failed.',
      ],
    },
    {
      h2: 'A percentage is the easiest number to get wrong, so progress should count steps',
    },
    {
      p: 'A percentage is the most satisfying number and the most dishonest one. With no real measurement behind it, it is decoration: parked at ninety percent for twenty minutes, it tells you nothing about whether the job is running or stuck. A beautiful progress bar does not help you decide anything.\n\nSteps are different, because each step is a finished, checkable piece of work. When one step sits there far longer than usual, you know exactly what it is waiting on — and whether to keep waiting or stop it.',
    },
    {
      ul: [
        'Script done: there are words to read, and you can approve them before spending time on the build.',
        'Voice done: usually the heaviest step, so it sitting there a while is normal.',
        'Build done: the file is on disk and you can open it immediately.',
        'Posted: only counts once the platform has confirmed it, not when the system sent it.',
      ],
    },
    {
      h2: 'A log answers what actually happened instead of leaving you to guess',
    },
    {
      p: 'The log records which job ran, when, which step it stopped on, and what the error said. Three uses that matter: telling a broken system apart from a platform refusing the post; re-running only the part that failed instead of the whole video; and having something to hand to support instead of describing how it felt.',
    },
    {
      h2: 'A decent error message says what broke and what to do next',
    },
    {
      ul: [
        'Say what broke and at which step. Shopee post failed at the upload step is useful; something went wrong is not.',
        'Say what to do next. Most errors come with one action: check the connection, try again, run fewer jobs at once.',
        'Do not report success before it is confirmed. “Not confirmed yet” is more honest than a tick that should not be there.',
        'Do not go quiet. A job that runs forever with no update is the worst kind of failure, because the person waits without knowing what for.',
      ],
    },
    {
      note: 'The limit worth knowing up front: a system cannot report what it cannot measure. When a platform does not answer, the honest move is to say it is unconfirmed. If you want a screen that is all green and always reports success, you will get a screen that feels nice and cannot be used to decide anything.',
    },
    {
      p: 'This rule matters more, not less, when you are driving the system remotely through Telegram: you are not sitting next to the machine, so you cannot look for yourself. An honest report — including one that says the work has stopped — is worth more than a cheerful notification that says finished.',
    },
    ],
  },
  faq: {
    vi: [
    {
      q: 'Vì sao phần mềm báo đang kết nối mà đăng vẫn lỗi?',
      a: 'Vì trạng thái kết nối chỉ đúng tại thời điểm được hỏi lại. Điện thoại ngủ, dây bị rút hay ứng dụng bị đóng đều làm kết nối đứt mà không ai báo trước. Vì vậy hệ thống hỏi lại ngay trước khi giao việc, và nói rõ khi chưa xác nhận được.',
    },
    {
      q: 'Vì sao không hiện phần trăm cho dễ nhìn?',
      a: 'Vì phần trăm không có thước đo thật thì chỉ là con số trang trí. Đứng ở chín mươi phần trăm suốt nửa tiếng không cho bạn biết nên chờ hay nên dừng, còn danh sách bước thì cho biết chính xác đang ở đâu.',
    },
    {
      q: 'Nhật ký có giúp gì khi mọi thứ vẫn chạy tốt?',
      a: 'Có, đúng vì lúc đó bạn chưa cần đến nó. Khi có sự cố, nhật ký là thứ phân biệt hệ thống hỏng với nền tảng từ chối nhận bài, và cho phép chạy lại đúng phần đã hỏng. Không có nó, mọi chẩn đoán đều là đoán.',
    },
    {
      q: 'Điều khiển từ xa qua Telegram thì biết tiến độ bằng cách nào?',
      a: 'Bạn nhận cập nhật theo bước qua Telegram, kèm báo khi có việc lỗi. Vì không ngồi cạnh máy, một báo cáo trung thực — kể cả báo cáo nói việc đã dừng — có giá trị hơn một thông báo báo xong cho vui.',
    },
    ],
    en: [
    {
      q: 'Why does the software say it is connected and the post still fails?',
      a: 'Because a connection is only correct at the moment it was checked. A sleeping phone, an unplugged cable or a closed app breaks the link without warning anyone. So the system asks again right before handing work over, and says plainly when it cannot confirm.',
    },
    {
      q: 'Why not show a percentage, since it looks better?',
      a: 'Because with no real measurement behind it, a percentage is decoration. Sitting at ninety percent for half an hour tells you nothing about whether to wait or stop, while a list of steps tells you exactly where the job is.',
    },
    {
      q: 'Is a log any use when everything is working?',
      a: 'Yes, precisely because you do not need it then. When something goes wrong, the log is what separates a broken system from a platform refusing the post, and it lets you re-run only the failed part. Without it, every diagnosis is a guess.',
    },
    {
      q: 'If I drive it remotely through Telegram, how do I follow progress?',
      a: 'You get step updates through Telegram, plus a message when a job fails. Since you are not sitting at the machine, an honest report — including one that says the work has stopped — beats a cheerful message that says finished.',
    },
    ],
  },
};

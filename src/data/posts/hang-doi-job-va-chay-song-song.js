/**
 * Blog post — "Vì sao không nên chạy hết mọi việc cùng lúc".
 *
 * Architecture level: finite resources, what a queue buys the user, and why
 * the sensible number of parallel jobs is a property of the machine. No
 * internal queue names, no storage details, no measured throughput figures.
 */
export default {
  slug: {
    vi: 'hang-doi-job-va-chay-song-song',
    en: 'job-queue-and-parallelism',
  },
  title: {
    vi: 'Mở ba chục video cùng lúc không nhanh hơn, chỉ chậm hơn',
    en: 'Opening thirty videos at once is slower, not faster',
  },
  description: {
    vi: 'Mở hết mọi việc cùng lúc không nhanh hơn: máy có hạn, phía nền tảng nhận bài cũng có hạn, và hàng đợi là thứ giữ cho mọi việc rõ ràng.',
    en: 'Opening every job at once is not faster: your machine has limits, the platform receiving the posts has its own, and a queue is what keeps the work readable.',
  },
  date: '2026-10-10',
  minutes: { vi: 5, en: 5 },
  tag: {
    vi: 'Công nghệ',
    en: 'How it works',
  },
  lead: {
    vi: 'Giao ba chục video rồi mong máy xong hết một lượt là phản xạ của người mới. Hàng đợi tồn tại để bạn không phải nghĩ tới điều đó, và bài này nói nó thật ra làm gì cho bạn.',
    en: 'Handing over thirty videos and expecting the machine to finish them in one go is the beginner reflex. A queue exists so you never have to think about it, and this is what it actually does for you.',
  },
  body: {
    vi: [
    {
      h2: 'Ba chục việc mở cùng lúc: cảm giác nhanh, kết quả chậm',
    },
    {
      p: 'Nhìn qua thì rất hợp lý: nhiều việc chạy cùng lúc thì phải xong sớm hơn. Thử một lần là thấy ngược lại — máy ì đi, mọi video cùng chậm, và không video nào xong trước.\n\nVấn đề không nằm ở phần mềm. Nó nằm ở chỗ tất cả các việc đang giành nhau đúng một lượng tài nguyên có hạn, và lượng đó không tăng lên khi bạn giao thêm việc.',
    },
    {
      h2: 'Chiếc máy có hạn, và mọi việc đang chia nhau đúng ngần ấy chỗ',
    },
    {
      ul: [
        'Vi xử lý: mọi bước tính toán đều xếp vào đây, và số nhân thì cố định — giao thêm việc không sinh thêm nhân.',
        'Bộ nhớ: mỗi video đang dựng chiếm một phần; mở quá nhiều thì máy phải mượn ổ đĩa làm chỗ nhớ tạm và chậm hẳn đi.',
        'Ổ đĩa: đọc nguồn và ghi thành phẩm cùng lúc trên một ổ là chỗ nghẽn dễ bị bỏ qua nhất.',
        'Card đồ hoạ: hữu ích cho khâu dựng, nhưng cũng chỉ có một; mười việc cùng tranh nó thì không việc nào nhanh hơn.',
        'Băng thông mạng: mọi lượt tải nguồn và đẩy bài lên đều đi qua cùng một đường.',
        'Phía bên kia: nền tảng nhận bài cũng có giới hạn của họ, và họ không thông báo trước cho bạn.',
      ],
    },
    {
      h2: 'Hàng đợi không làm video nhanh hơn, nó làm việc đang diễn ra rõ ràng',
    },
    {
      p: 'Hàng đợi là danh sách việc đang chờ tới lượt. Bạn giao ba chục video, hệ thống ghi nhận đủ ba chục, rồi mở đúng số việc mà máy chịu được — không phải mở hết. Việc nào xong thì việc kế tiếp vào chỗ trống, và bạn không phải ngồi canh hay tự chia lô bằng tay.\n\nĐiểm đáng giá nhất của hàng đợi không phải tốc độ mà là sự rõ ràng: mỗi việc luôn nằm ở một trạng thái bạn đọc được — đang chờ, đang chạy, xong, hay lỗi. Không việc nào biến mất, và không việc nào chạy hai lần.',
    },
    {
      h2: 'Mở ba chục việc cùng lúc thì tổng thời gian dài hơn, không phải ngắn hơn',
    },
    {
      ol: [
        'Mọi việc chậm lại vì chia nhau một chiếc máy, kể cả những việc lẽ ra xong trong vài phút.',
        'Khâu nặng nhất không chia nhỏ được. Tạo giọng đọc và dựng hình gần như chạy nối tiếp nhau; mở thêm việc không làm khâu đó nhanh hơn, chỉ làm nó chờ lâu hơn.',
        'Bộ nhớ và ổ đĩa là chỗ vỡ trước. Máy hết chỗ nhớ thì việc đang chạy dừng giữa đường, và bạn phải chạy lại từ đầu.',
        'Phía nền tảng nhận bài cũng đếm. Đăng ba chục video trong mười phút là hành vi mà nền tảng tìm cách hạn chế, bất kể bạn đăng tay hay đăng tự động.',
        'Khi có lỗi, bạn không biết lỗi ở đâu. Ba chục việc cùng chạy thì một việc hỏng kéo theo cả loạt, và nguyên nhân trở nên khó lần ra.',
      ],
    },
    {
      h2: 'Số việc chạy song song là thuộc tính của chiếc máy, không phải của phần mềm',
    },
    {
      p: 'Không có con số đúng cho mọi máy, và ai nói có thì đang bán cho bạn một con số. Số việc chạy cùng lúc phụ thuộc vào cấu hình máy bạn, loại việc bạn đang chạy, và việc bạn có dùng máy để làm thứ khác hay không. Một chiếc máy chỉ làm video, không ai đụng vào, chịu được nhiều hơn hẳn một chiếc vừa dựng vừa họp trực tuyến.\n\nKinh nghiệm chung vẫn đứng vững: một việc chạy trọn vẹn nhanh hơn năm việc chạy dở dang. Thứ bạn cần là video, không phải một màn hình đầy thanh tiến độ.',
    },
    {
      note: 'Cách làm thực tế khi có lô lớn: giao cả lô rồi đi làm việc khác, để máy chạy vào lúc bạn không dùng — buổi tối hoặc qua đêm. Ba chục video là khối lượng của một buổi hoặc một đêm, không phải của mười phút. Nếu bạn cần xong trong mười phút thì đây không phải công cụ dành cho bạn, và cũng không có công cụ nào làm được điều đó, kể cả những công cụ đắt hơn nhiều.',
    },
    {
      p: 'Giới hạn chạy song song không phải để tiết kiệm tài nguyên của ai khác — toàn bộ chiếc máy là của bạn. Nó tồn tại vì vượt qua một ngưỡng nào đó, tổng thời gian sẽ dài hơn và tỉ lệ lỗi cao hơn. Chạy ít mà xong vẫn hơn chạy nhiều rồi phải làm lại.',
    },
    ],
    en: [
    {
      h2: 'Thirty jobs at once: feels fast, finishes late',
    },
    {
      p: 'It sounds reasonable: more jobs at the same time must mean an earlier finish. Try it once and the opposite happens — the machine crawls, every video slows down, and none of them finishes first.\n\nThe problem is not in the software. It is that all those jobs are competing for one fixed amount of resource, and that amount does not grow because you handed over more jobs.',
    },
    {
      h2: 'A machine has limits, and every job is sharing the same set of them',
    },
    {
      ul: [
        'Processor: every calculation queues up here, and the number of cores is fixed — more jobs do not add more cores.',
        'Memory: each video being built takes a share; open too many and the machine starts borrowing disk space as scratch memory and slows to a crawl.',
        'Disk: reading sources and writing finished files at the same time on one drive is the bottleneck people miss most often.',
        'Graphics card: useful for the build step, but there is still only one; ten jobs fighting over it means none of them goes faster.',
        'Network: every source download and every upload leaves through the same pipe.',
        'The other side: the platform receiving your posts has its own limits, and it does not warn you in advance.',
      ],
    },
    {
      h2: 'A queue does not make video faster; it makes the work readable',
    },
    {
      p: 'A queue is the list of jobs waiting their turn. You hand over thirty videos, the system accepts all thirty, then opens exactly as many as the machine can carry — not all of them. When one finishes, the next takes the free slot, and you never have to sit and watch or split batches by hand.\n\nThe best thing a queue gives you is not speed but clarity: every job sits in a state you can read — waiting, running, done, or failed. Nothing disappears, and nothing runs twice.',
    },
    {
      h2: 'Thirty videos at once makes the total longer, not shorter',
    },
    {
      ol: [
        'Everything slows down because everything is sharing one machine, including the jobs that should have taken minutes.',
        'The heaviest step does not split. Voice generation and video building run close to one after another; opening more jobs does not hurry that step, it only makes it wait longer.',
        'Memory and disk fail first. When the machine runs out of memory, a running job stops halfway and you have to start it again.',
        'The platform on the other side is counting too. Thirty videos in ten minutes is the behaviour it is built to discourage, whether you post by hand or not.',
        'When something breaks you cannot tell what. With thirty jobs running together, one failure drags the batch with it and the cause gets hard to trace.',
      ],
    },
    {
      h2: 'How many jobs at once is right is a property of the machine, not the software',
    },
    {
      p: 'There is no single right number for every machine, and anyone who gives you one is selling you that number. It depends on your hardware, on the kind of job you are running, and on whether you use the same computer for anything else. A machine that only makes videos, untouched, carries far more than one that is also on a video call.\n\nOne rule holds anyway: a job run to completion beats five left half-finished. What you want at the end is video files, not a screen full of progress bars.',
    },
    {
      note: 'What this looks like in practice with a big batch: hand the whole list over, then go and do something else, and let the machine work while you are not using it — in the evening, or overnight. Thirty videos is an evening or a night of work, not ten minutes of it. If you need them done in ten minutes, this is not the tool for you, and no tool does that, including far more expensive ones.',
    },
    {
      p: 'The limit on parallel jobs is not there to save anyone else’s resources — the whole machine is yours. It is there because past a certain point the total time gets longer and the failure rate gets higher. Running fewer and finishing beats running more and starting over.',
    },
    ],
  },
  faq: {
    vi: [
    {
      q: 'Giao 30 video một lúc thì mất bao lâu?',
      a: 'Không có câu trả lời chung, vì thời gian phụ thuộc vào máy bạn và loại video. Cách nhìn thực tế: coi một lô ba chục video là việc của một buổi hoặc một đêm, và để máy chạy lúc bạn không dùng.',
    },
    {
      q: 'Máy tôi khoẻ thì chạy nhiều việc cùng lúc có nhanh hơn không?',
      a: 'Quá một ngưỡng thì thường là không. Máy khoẻ giúp mỗi việc chạy nhanh hơn, nhưng mở quá nhiều việc cùng lúc thì chúng vẫn chia nhau đúng ngần ấy tài nguyên, cộng thêm chi phí chuyển qua lại.',
    },
    {
      q: 'Tôi có phải tự chia lô không?',
      a: 'Không. Bạn giao cả danh sách, hệ thống tự xếp hàng và mở đúng số việc máy chịu được. Việc nào xong thì việc kế tiếp vào chỗ trống.',
    },
    {
      q: 'Vì sao bản Personal của AutoReel chỉ chạy một việc một lúc?',
      a: 'Vì một việc chạy trọn vẹn cho ra kết quả nhanh hơn nhiều việc chạy dở dang, và vì phần nặng nhất của dây chuyền gần như không chia nhỏ được. Gói Team dự kiến cho nhiều tài khoản chạy đồng thời, hiện chưa mở bán.',
    },
    ],
    en: [
    {
      q: 'If I hand over thirty videos at once, how long does it take?',
      a: 'There is no general answer, because the time depends on your machine and the kind of video. The honest way to plan: treat a batch of thirty as an evening or a night of work, and let the machine run while you are not using it.',
    },
    {
      q: 'My computer is powerful. Will running more jobs at once be faster?',
      a: 'Past a point, no. A fast machine makes each job quicker, but open too many at once and they still divide the same resources between them, plus the cost of switching back and forth.',
    },
    {
      q: 'Do I have to split the batch myself?',
      a: 'No. Hand over the whole list and the system queues it, opening as many jobs as the machine can carry. When one finishes, the next takes its place.',
    },
    {
      q: 'Why does AutoReel’s Personal plan run one job at a time?',
      a: 'Because one job run to completion produces results faster than several left half-finished, and because the heaviest step in the pipeline barely splits. A Team plan for running several accounts at once is planned but not on sale yet.',
    },
    ],
  },
};

/**
 * Blog post — "Vì sao phần nặng phải tách khỏi phần giao diện".
 *
 * Architecture, at the level a customer needs: two rhythms in one machine, what
 * a failure boundary buys them, and what the separation costs. No process
 * names, no storage details, no service names, no measured figures.
 */
export default {
  slug: {
    vi: 'kien-truc-tach-tien-trinh-va-chiu-loi',
    en: 'process-boundaries-and-failure',
  },
  title: {
    vi: 'Vì sao phần nặng phải tách khỏi phần giao diện',
    en: 'Why the heavy work runs in its own process',
  },
  description: {
    vi: 'Vì sao khâu dựng video phải chạy riêng khỏi giao diện: ba ranh giới chịu lỗi, hàng đợi nhớ được gì khi bạn tắt máy, và năm khoản phải trả khi tách tiến trình.',
    en: 'Why rendering runs apart from the window: three failure boundaries, what the queue remembers when you close the lid, and the five things the split costs you.',
  },
  date: '2026-10-10',
  minutes: { vi: 8, en: 8 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Giao diện phải trả lời trong vài chục mili giây; khâu dựng video chạy hàng phút và ngốn gần hết máy. Bài này nói vì sao hai nhịp đó phải nằm ở hai tiến trình riêng, ranh giới chịu lỗi đặt ở đâu, và cái giá phải trả cho quyết định đó.',
    en: 'The window has to answer in tens of milliseconds. Rendering runs for minutes and takes most of the machine. This is why those two rhythms belong in two separate processes, where the failure boundaries sit, and what that decision costs.',
  },
  body: {
    vi: [
      {
        h2: 'Hai nhịp sống khác nhau không nên nằm chung một tiến trình',
      },
      {
        p: 'Một video bán hàng mất vài phút để dựng. Trong vài phút đó phần cứng bị chiếm gần hết: vi xử lý chạy liên tục, bộ nhớ tăng dần theo từng khung hình, ổ đĩa đọc và ghi cùng lúc.\n\nNếu phần giao diện nằm chung một tiến trình với công việc đó, thì đúng lúc bạn bấm nút, máy đang bận nhất — và thứ bạn thấy là một cửa sổ đứng hình.',
      },
      {
        h2: 'Vấn đề thật sự không phải tốc độ, mà là phạm vi hỏng',
      },
      {
        p: 'Giao diện đứng hình không ai gọi là lỗi, nhưng nó là lỗi. Người dùng đọc một giao diện đứng hình là đọc một giao diện hỏng. Họ bấm lại, tắt đi, mở lại — trong khi phần mềm vẫn đang chạy đúng và chẳng có gì hỏng cả.\n\nNhưng cái đau hơn nằm ở chỗ khác. Giả sử khâu dựng gặp một tệp nguồn hỏng và dừng lại. Nếu tất cả nằm trong một tiến trình, thứ dừng không phải một video — nó là cả chương trình.\n\nBạn mất danh sách ba chục việc đang chờ, mất trạng thái từng việc, và phải bắt đầu lại từ đầu. Một tệp hỏng ở một video đã kéo theo cả lô.\n\nTách ra thì phạm vi hỏng thu lại còn đúng một việc. Tiến trình dựng dừng vì tệp đó, bộ điều phối đánh dấu việc ấy là lỗi, và đi tiếp việc sau. Phần giao diện không cần biết chuyện gì vừa xảy ra, ngoài việc một dòng trạng thái đổi màu.',
      },
      {
        figure: {"src":"/blog/kien-truc-tach-tien-trinh.svg","alt":"Sơ đồ kiến trúc ba tầng: giao diện người dùng ở trên, một hàng đợi công việc ở giữa, ba tiến trình dựng, giọng đọc và đăng bài chạy riêng bên dưới; tiến trình đăng bài bị đánh dấu lỗi nhưng hai tiến trình còn lại vẫn chạy bình thường.","caption":"Giao diện, hàng đợi và ba tiến trình công việc. Một việc hỏng chỉ dừng đúng tiến trình của nó — hai việc còn lại không biết gì."},
      },
      {
        h2: 'Ba ranh giới chịu lỗi, đặt ở đúng ba chỗ có thể hỏng vì lý do bên ngoài',
      },
      {
        ul: [
          'Giữa giao diện và bộ điều phối: giao diện không giữ trạng thái thật của công việc. Nó chỉ hiển thị lại trạng thái đã được ghi xuống ổ đĩa, nên đóng cửa sổ rồi mở lại không làm mất gì và không làm sai gì.',
          'Giữa bộ điều phối và từng việc: mỗi việc chạy trong tiến trình của riêng nó, có thời gian chờ tối đa và số lần thử lại. Một việc treo không giữ chỗ của cả hàng đợi.',
          'Giữa từng việc và phần cứng: bước nặng nhất chạy một mình, không chia sẻ card đồ hoạ hay ổ đĩa với việc khác. Chậm hơn một chút khi chỉ có một việc, nhưng không bao giờ có cảnh hai việc giành nhau rồi cùng hỏng.',
        ],
      },
      {
        p: 'Ba ranh giới này được đặt ở đúng những chỗ có thể hỏng vì lý do bên ngoài: mạng đứt, nền tảng từ chối, một tệp nguồn tải về bị lỗi. Bạn không kiểm soát được những chỗ đó, nên việc duy nhất làm được là giới hạn thiệt hại khi chúng xảy ra.',
      },
      {
        h2: 'Hàng đợi là bộ nhớ của hệ thống, không phải chỗ xếp hàng',
      },
      {
        p: 'Hàng đợi thường bị hiểu là một danh sách chờ cho đẹp mắt. Vai trò thật của nó là bộ nhớ: nó là thứ duy nhất biết cả lô đang ở đâu, việc nào đang chờ, việc nào đang chạy, việc nào đã xong.\n\nVì trạng thái được ghi xuống ổ đĩa ngay khi một việc đổi trạng thái, hàng đợi sống sót qua những lần không ai mong muốn: mất điện, người dùng tắt máy giữa chừng, một tiến trình bị hệ điều hành kết thúc.\n\nMở lại, nó đọc trạng thái và biết chính xác phải làm tiếp từ đâu. Việc đang dở được chạy lại; việc đã xong không bị làm lại lần hai.',
      },
      {
        note: 'Đây là lý do một lô ba chục video không cần bạn ngồi canh: giao xong rồi đóng máy tính vẫn được. Nhưng hãy để ý đúng điểm đó khi so một công cụ với công cụ khác. Phần mềm nào giữ danh sách việc trong bộ nhớ thì mất sạch danh sách ấy khi máy tắt đột ngột — và bạn chỉ phát hiện ra điều đó vào đúng lúc tệ nhất.',
      },
      {
        h2: 'Tách tiến trình có giá, và cái giá gồm năm khoản',
      },
      {
        p: 'Không có lựa chọn kiến trúc nào miễn phí, và tách tiến trình thì không phải ngoại lệ. Cái giá là thật, và nên nói thẳng ra:',
      },
      {
        ul: [
          'Thêm một bước bàn giao. Mỗi việc phải đi qua hàng đợi thay vì gọi thẳng, nên có thêm độ trễ nhỏ ở đầu và cuối mỗi việc.',
          'Trạng thái phải ghi ra đĩa thật sự. Giao diện không thể hỏi thẳng tiến trình đang chạy "xong chưa", nên mọi thay đổi phải được ghi lại — và phần đọc phải chịu được việc gặp một trạng thái cũ hơn thực tế một nhịp.',
          'Gỡ lỗi khó hơn. Một lỗi nằm ở ranh giới giữa hai tiến trình thì không có chỗ nào nhìn thấy nó cả; phải ghi log ở cả hai đầu rồi đối chiếu, thay vì đọc một dòng lỗi trong một khung gọi.',
          'Nhiều thứ phải cài hơn. Phần giao diện và phần dựng không dùng chung thư viện, nên mỗi lần cập nhật là hai lần kiểm tra phiên bản — và một bên lệch phiên bản thì phải sửa ở cả hai.',
          'Chậm hơn khi công việc nhỏ. Với một video dài ba giây thì chi phí khởi động một tiến trình còn lớn hơn chính công việc.',
        ],
      },
      {
        h2: 'Một tiến trình là đủ khi công cụ chạy xong rồi thoát',
      },
      {
        p: 'Nếu bạn viết một công cụ dựng xong một video rồi thoát, tách tiến trình chỉ làm mọi thứ phức tạp thêm. Ranh giới chịu lỗi có giá trị khi thời gian chạy dài, khi có nhiều việc chạy nối tiếp nhau, và khi người dùng cần nhìn thấy tiến độ trong lúc chờ.\n\nCả ba điều đó đều đúng với một lô video bán hàng. Một lô hai chục video chạy qua đêm là quãng thời gian đủ dài để mọi thứ có thể xảy ra, và đủ dài để bạn không muốn một lỗi duy nhất xoá sạch công sức. Đó là lý do kiến trúc này được chọn, chứ không phải vì nó nghe hiện đại hơn.',
      },
      {
        p: 'Một cách nói khác cho dễ nhớ: tách tiến trình không làm phần mềm chạy nhanh hơn. Nó làm phần mềm chịu được chuyện xấu xảy ra — và trong một dây chuyền chạy hàng giờ, khả năng chịu đựng quan trọng hơn tốc độ đỉnh.',
      },
    ],
    en: [
      {
        h2: 'Two different rhythms should not share one process',
      },
      {
        p: 'A sales video takes a few minutes to render. For those minutes the hardware is almost fully occupied: the processor runs flat out, memory grows with every frame, the disk reads and writes at the same time.\n\nIf the window shares a process with that work, then the exact moment you press the button is the busiest moment the machine has — and what you see is a frozen window.',
      },
      {
        h2: 'The real problem is not speed, it is how far a failure spreads',
      },
      {
        p: 'Nobody calls a frozen window a bug, but it is one. A user reads a frozen interface as a broken one. They click again, close it, open it again — while the software is running correctly and nothing at all is wrong.\n\nThe worse problem is elsewhere. Say the render step hits a corrupt source file and stops. If everything lives in one process, what stops is not one video — it is the whole program.\n\nYou lose the list of thirty queued jobs, you lose the state of every one of them, and you start again from nothing. One bad file on one video took the entire batch down.\n\nSplit them and the damage shrinks to a single job. The render process dies on that file, the orchestrator marks that job as failed and moves on to the next one. The window never needs to know what happened, beyond one status line changing colour.',
      },
      {
        figure: {"src":"/blog/kien-truc-tach-tien-trinh-en.svg","alt":"A three-tier architecture diagram: the user interface on top, a job queue in the middle, and three separate processes for rendering, speech and posting below; the posting process is marked as failed while the other two keep running normally.","caption":"The window, the queue, and three worker processes. A job that fails stops only its own process — the other two never hear about it."},
      },
      {
        h2: 'Three failure boundaries, all placed where things break for outside reasons',
      },
      {
        ul: [
          'Between the window and the orchestrator: the window holds no real job state. It only redraws the state that was already written to disk, so closing it and opening it again loses nothing and corrupts nothing.',
          'Between the orchestrator and each job: every job runs in its own process, with a maximum wait and a retry count. One stuck job does not hold a place in the queue for everything else.',
          'Between each job and the hardware: the heaviest step runs alone, sharing neither graphics card nor disk with another job. Slightly slower when there is only one job, but you never get two jobs fighting over the same resource and both failing.',
        ],
      },
      {
        p: 'Those three boundaries sit exactly where failure arrives from outside: the network drops, a platform refuses, a downloaded source file turns out to be broken. You do not control any of that, so the only thing left is to limit the damage when it happens.',
      },
      {
        h2: 'The queue is the system’s memory, not a pretty waiting list',
      },
      {
        p: 'A queue is usually read as a tidy list of things waiting. Its real job is memory: it is the only thing that knows where the whole batch stands, which jobs are waiting, which are running, which are done.\n\nBecause state is written to disk the moment a job changes, the queue survives the things nobody plans for: the power goes, the user shuts the machine down halfway, the operating system kills a process.\n\nOpen it again and it reads the state back and knows exactly where to continue. A job caught mid-flight runs again; a job already finished is never redone.',
      },
      {
        note: 'That is why a batch of thirty videos does not need you sitting next to it — hand it over and shut the laptop. But watch exactly this point when you compare one tool with another. Software that keeps its job list in memory loses the whole list when the machine dies suddenly, and you find that out at the worst possible moment.',
      },
      {
        h2: 'Separate processes cost you five things',
      },
      {
        p: 'No architecture decision is free, and separating processes is no exception. The cost is real, and worth saying plainly:',
      },
      {
        ul: [
          'One more handover. Every job goes through the queue instead of being called directly, so there is a small delay at the start and the end of each job.',
          'State has to be written to disk properly. The window cannot ask a running process "are you done yet", so every change has to be recorded — and the reading side has to cope with seeing state that is one beat behind reality.',
          'Debugging is harder. A bug that lives on the boundary between two processes is visible from neither side; you log at both ends and compare, instead of reading one error line in a stack trace.',
          'More things to install. The window and the renderer share no libraries, so every release means checking versions twice — and if one side drifts, both need fixing.',
          'Slower for small jobs. For a three-second video, the cost of starting a process is bigger than the work itself.',
        ],
      },
      {
        h2: 'One process is enough when the tool finishes and exits',
      },
      {
        p: 'If you are writing a tool that renders one video and quits, separating processes only makes everything more complicated. A failure boundary earns its keep when the run is long, when many jobs run one after another, and when the user needs to see progress while waiting.\n\nAll three are true of a batch of sales videos. Twenty videos overnight is long enough for anything to happen, and long enough that you do not want a single error wiping out the work. That is why the architecture was chosen — not because it sounds more modern.',
      },
      {
        p: 'A simpler way to remember it: separating processes does not make software faster. It makes software survive things going wrong — and in a pipeline that runs for hours, surviving matters more than peak speed.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Tách tiến trình như vậy có làm máy tôi nặng hơn không?',
        a: 'Nặng hơn không đáng kể. Phần tài nguyên lớn nhất vẫn là khâu dựng video, và nó chiếm gần hết dù chạy chung hay chạy riêng. Cái tăng thêm chỉ là một vài tiến trình chờ, tốn vài chục đến vài trăm MB bộ nhớ.',
      },
      {
        q: 'Đang dựng video mà tôi đóng cửa sổ thì việc có mất không?',
        a: 'Không. Việc đang chạy vẫn tiếp tục, và trạng thái của nó đã được ghi lại. Mở lại cửa sổ, bạn thấy đúng chỗ nó đang ở. Nếu cả máy bị tắt giữa chừng thì việc đang dở sẽ được chạy lại ở lần mở sau.',
      },
      {
        q: 'Một video lỗi có làm cả lô dừng theo không?',
        a: 'Không. Mỗi việc chạy độc lập và được đánh dấu lỗi riêng, kèm lý do. Bạn chạy lại đúng việc đó, còn những việc khác vẫn xong bình thường.',
      },
      {
        q: 'Vì sao không chạy nhiều tiến trình cùng lúc cho nhanh hơn?',
        a: 'Vì tài nguyên trên máy có hạn và bước nặng nhất không chia nhỏ được. Mở nhiều việc cùng lúc chỉ làm mọi việc chậm đi và tăng nguy cơ hỏng. Con số việc chạy song song phụ thuộc cấu hình máy, không phụ thuộc mong muốn.',
      },
    ],
    en: [
      {
        q: 'Does separating processes make my machine work harder?',
        a: 'Not noticeably. The big resource is still rendering, and it takes nearly everything whether it runs together or apart. What you add is a few waiting processes, worth tens to hundreds of megabytes of memory.',
      },
      {
        q: 'If I close the window while a video is rendering, do I lose the job?',
        a: 'No. The job keeps running and its state is already written down. Open the window again and you see exactly where it got to. If the whole machine goes down instead, the job in flight runs again next time you open it.',
      },
      {
        q: 'Does one failed video stop the whole batch?',
        a: 'No. Each job runs independently and is marked failed on its own, with a reason. You re-run that one, and everything else finishes normally.',
      },
      {
        q: 'Why not run several processes at once to go faster?',
        a: 'Because the machine has finite resources and the heaviest step cannot be split. Running more jobs at once only makes each one slower and raises the chance of failure. How many run side by side depends on your machine, not on how much you would like.',
      },
    ],
  },
};

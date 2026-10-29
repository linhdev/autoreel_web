/**
 * Blog post — "Hàng đợi job: vì sao một job sống sót qua lần khởi động lại".
 *
 * What is on disk before the work starts, what the next launch reconciles, and
 * why "survives" does not mean "resumes". The status words are the ones the
 * tables actually store; the retry rules are the constants in the scheduling
 * and automation modules.
 */
export default {
  slug: {
    vi: 'hang-doi-job-song-sot-restart',
    en: 'job-queue-survives-restart',
  },
  title: {
    vi: 'Hàng đợi job: vì sao một job sống sót qua lần khởi động lại',
    en: 'Why a job survives the app being restarted',
  },
  description: {
    vi: 'Job nằm trên đĩa chứ không nằm trong bộ nhớ. Bài này kể chỗ dữ liệu được ghi trước khi làm, thứ gì sống lại sau khi mở máy, và ba hàng đợi có ba luật khác nhau.',
    en: 'A job lives on disk, not in memory: where the row is written before the work starts, what comes back after a restart, and why three queues differ.',
  },
  date: '2026-10-29',
  minutes: { vi: 8, en: 7 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Một hàng đợi giữ trong bộ nhớ là một hàng đợi mất sạch lúc mất điện. Hàng đợi ở đây được viết xuống đĩa trước khi công việc bắt đầu — nhưng "sống sót" không có nghĩa là "tự chạy tiếp". Bài này nói rõ chỗ nào tiếp tục, chỗ nào dừng hẳn, và vì sao.',
    en: 'A queue kept in memory is a queue a power cut erases. This one is written to disk before any work starts — but surviving is not the same as resuming. Here is which parts carry on, which stop for good, and why.',
  },
  body: {
    vi: [
      {
        h2: 'Hàng đợi trong bộ nhớ mất sạch khi tiến trình chết, nên hàng đợi này không nằm trong bộ nhớ',
      },
      {
        p: 'Cách làm quen thuộc: một danh sách trong bộ nhớ, một vòng lặp lấy phần tử ra. Nhanh, gọn, và mất toàn bộ khi tiến trình chết — không chỉ job đang chạy mà cả những job chưa bắt đầu, vì chúng chưa từng tồn tại ở đâu ngoài RAM.\n\nỞ đây điều ngược lại: chưa có khung hình nào được dựng thì dòng đã nằm trên đĩa. Câu hỏi đầu tiên khi sửa bất kỳ phần nào của hàng đợi là "nếu rút điện ngay bây giờ, cái gì còn lại?".',
      },
      {
        p: 'Câu trả lời phải là: dòng, đủ để đọc lại lời bạn đã dặn.',
      },
      {
        h2: 'Một lô được ghi thành từng dòng trước khi công việc bắt đầu',
      },
      {
        p: 'Bấm chạy, mỗi video trong lô nhận một dòng riêng: đường dẫn nguồn, ngôn ngữ đích, giọng đọc, tốc độ đọc, có phụ đề hay không, mẫu dựng, và trạng thái "đang chờ", bước 0 trên 5. Dòng được ghi trước khi nhóm công nhân nhận việc.',
      },
      {
        p: 'Trong lúc chạy, tiến độ chỉ được ghi mỗi hai giây một lần — mỗi câu dịch xong mà ghi ngay thì chính tệp dữ liệu thành nút cổ chai. Nhưng lúc kết thúc, dù thành công, hỏng hay bị huỷ, lần ghi là bắt buộc và không chờ nhịp.',
      },
      {
        p: 'Đó là toàn bộ cơ chế sống sót: không có gì quan trọng chỉ tồn tại trong bộ nhớ. Thanh tiến độ có thể mượt vì nó đọc bộ nhớ, nhưng bộ nhớ chỉ là bản sao nhanh của dòng.',
      },
      {
        h2: 'Mở lại ứng dụng là một nghi thức dọn dẹp, và thứ tự mới là phần quan trọng',
      },
      {
        p: 'Trước khi một công nhân nào được phép nhận việc, ứng dụng đi qua danh sách sau.',
      },
      {
        ol: [
          'Job còn ghi "đang chạy" hoặc "đang chờ" từ tiến trình cũ bị đánh dấu hỏng, kèm lý do "interrupted by restart".',
          'Dự án recap còn chạy thì được tạm dừng chứ không đánh hỏng, vì nó có điểm lưu và chạy tiếp từ đó rẻ hơn nhiều.',
          'Lịch sử quá 30 ngày được dọn, và chỉ những dòng đã kết thúc mới bị xoá.',
          'Lệnh Telegram còn "đang chạy" bị đánh dấu hỏng; lệnh còn "đang chờ" thì để nguyên, vì nó chưa bắt đầu nên chạy lại không phải là chạy hai lần.',
          'Bài đã hẹn giờ mà tiến trình cũ đã nhận thì chuyển thành "interrupted", rồi các dòng cũ đã kết thúc cũng được dọn.',
          'Cuối cùng mới tới các vòng quay: một công nhân lịch cho mỗi nền tảng, vòng làm mới bản quyền, rồi nhóm công nhân của lô và vòng điều phối chiến dịch.',
        ],
      },
      {
        p: 'Thứ tự không phải chuyện hình thức. Dọn trước khi mở cửa là cách duy nhất để không công nhân nào nhìn thấy một dòng ma và nhận nó.',
      },
      {
        figure: {
          src: '/blog/hang-doi-job-song-sot-restart.svg',
          alt: 'Sơ đồ hai làn trạng thái. Làn trên là một job trong lô: queued chuyển sang running rồi sang succeeded, hoặc sang failed, hoặc sang cancelled; một nút đứt nét màu đỏ tên "khởi động lại" nối running với failed và ghi rằng cả queued lẫn running bị đánh dấu hỏng khi mở lại. Làn dưới là một bài đã hẹn giờ: scheduled sang running rồi done, hoặc sang failed; scheduled có thể thành missed nếu mở muộn quá 30 phút, còn running thành interrupted khi tiến trình chết và không tự thử lại.',
          caption: 'Cùng một lần mất điện, hai kết cục khác nhau: job bị ghi hỏng và chờ bạn bấm lại, còn bài chưa tới giờ thì không ai đụng vào.',
        },
      },
      {
        h2: 'Thứ sống sót là dòng, không phải bước đang chạy',
      },
      {
        p: 'Nói cho rõ, vì đây là chỗ dễ thất vọng nhất: job đang dựng hình lúc mất điện sẽ không tiếp tục từ khung hình thứ một nghìn. Lần mở sau, dòng của nó đọc là hỏng. Bước đang chạy mất, và không có trạng thái trung gian nào để nối vào.',
      },
      {
        ul: [
          'Còn lại: lời bạn đã dặn, đường dẫn nguồn, ngôn ngữ, giọng, mẫu dựng, và bước nó đã tới — đủ để biết nó chết ở đâu.',
          'Mất: phần việc của bước đang chạy. Bước đọc lời và bước dựng hình đều bắt đầu lại từ đầu nếu bạn chạy lại.',
          'Không tự xảy ra: việc chạy lại. Không có vòng lặp nào quét các dòng hỏng rồi thử lại sau lưng bạn, vì chạy lại một việc bạn không yêu cầu cũng là một cách làm sai.',
        ],
      },
      {
        p: 'Với lô thủ công, cách sửa là bấm lại, và dòng cũ nói cho bạn biết nó đã đi tới đâu. Với chiến dịch tự động thì khác: ở đó công việc được chia thành các mảnh lặp lại được, nên lần chạy sau nhặt tiếp chứ không làm lại từ đầu. Phần sau nói rõ chỗ đó.',
      },
      {
        h2: 'Bài đã hẹn giờ sống lâu hơn một job, nên nó có luật riêng',
      },
      {
        p: 'Một bài hẹn giờ không phải một job chạy nền. Nó là một dòng có hai mốc thời gian: giờ bạn chọn, và giờ nó thực sự được thử. Hai mốc khác nhau là chuyện thường — điện thoại chưa bật, một lô khác đang chạy — nên hệ thống không lấy giờ bạn chọn làm điều kiện chạy.',
      },
      {
        p: 'Mỗi nền tảng có một công nhân riêng, hỏi mỗi 20 giây một lần. Nhận việc là một lệnh ghi có điều kiện: chỉ dòng còn "đã hẹn" mới đổi được thành "đang chạy", và kẻ thua quay lại hỏi dòng sau. Đây là lý do hai tiến trình không đăng cùng một bài.',
      },
      {
        p: 'Nếu ứng dụng mở muộn, bài vẫn chạy khi mở trong vòng 30 phút kể từ giờ bạn chọn. Muộn hơn thì nó thành "missed" — đăng video của tối qua vào sáng nay tệ hơn là không đăng. Nếu điện thoại bận, nó chờ 60 giây rồi thử lại, tối đa 10 lần, và số lần đã thử nằm trong dòng nên khởi động lại giữa lúc chờ không làm đếm lại từ đầu.',
      },
      {
        note: 'Một dòng ghi "đang chạy" chỉ là lời nhận việc, không phải bằng chứng việc đang chạy. Lúc mở lại, nó thành "interrupted" và không bao giờ tự thử lại — vì một phần lô có thể đã đăng xong, và chỉ một người nhìn vào Page mới nói được là đã đăng hay chưa.',
      },
      {
        h2: 'Chiến dịch tự động nhịp 60 giây, và mốc "hôm nay đã chạy chưa" nằm trên đĩa',
      },
      {
        p: 'Vòng điều phối thức dậy mỗi phút. Với mỗi chiến dịch đang bật, nó đo hiệu quả của bài đã đăng, đẩy những bài tới giờ đăng, rồi mới xét việc tạo nội dung mới — và chỉ khi hôm nay chưa chạy và đã qua giờ bắt đầu bạn đặt.',
      },
      {
        p: 'Mốc ngày chỉ được ghi sau khi cả vòng chạy xong. Chết giữa vòng thì mốc chưa ghi, lần mở sau vòng đó được thử lại trong cùng ngày. Thử lại an toàn vì từng mảnh đều biết mình đã làm gì: nội dung đã có thì dùng lại dòng cũ thay vì tạo dòng thứ hai, nội dung đã đăng thì bị bỏ qua, và một nội dung kẹt ở trạng thái "đang tạo" được coi là đáng thử lại vì tiến trình từng ghi nó đã chết.',
      },
      {
        p: 'Hàng đợi đăng cũng vậy: mỗi lượt đăng là một lệnh ghi có điều kiện, hỏng thì hẹn lại 5 phút sau, hai lần, rồi mới ghi hỏng. Trước khi đăng, hệ thống còn hỏi một câu rẻ tiền: nội dung này đã lên đúng Page đó chưa? Nếu rồi thì trả về "đã đăng" thay vì đăng lần hai.',
      },
      {
        h2: 'Bốn hàng đợi, bốn bộ từ, và không có trạng thái nào tên là "lỗi"',
      },
      {
        p: 'Chữ trên màn hình không phải chữ trang trí. Đọc đúng từ là biết nên làm gì tiếp.',
      },
      {
        ul: [
          'Lô job: đang chờ, đang chạy, xong, hỏng, đã huỷ. "Lỗi" là một cột chứ không phải một trạng thái — một job hỏng vẫn có thể kèm câu giải thích dài.',
          'Bài hẹn giờ: đã hẹn, đang chạy, xong, hỏng, bị ngắt, bị lỡ, đã huỷ. "Bị ngắt" và "bị lỡ" không phải "hỏng": một cái nói tiến trình chết giữa lúc giữ việc, một cái nói ứng dụng mở quá muộn.',
          'Lệnh Telegram: đang chờ, đang chạy, xong, hỏng. Lệnh đang chờ sống qua lần khởi động lại; lệnh đang chạy thì không.',
          'Lượt đăng của chiến dịch: đã hẹn, đang đăng, xong, hỏng, đã huỷ.',
        ],
      },
      {
        p: 'Gộp "bị ngắt" vào "hỏng" sẽ dạy bạn bấm thử lại đúng cái việc mà thử lại là sai. Đó là lý do các bảng giữ bộ từ riêng thay vì dùng chung một cột trạng thái.',
      },
      {
        h2: 'Một vòng quay sau khi chết là lời nói dối, và mã nguồn biết điều đó',
      },
      {
        p: 'Trạng thái sống trong bộ nhớ là đường tắt cho màn hình: danh sách đang chạy được đọc từ đó vài giây một lần. Sau khi khởi động lại, bộ nhớ rỗng. Nếu không ai dọn, một lô sẽ hoặc biến mất, hoặc quay vòng mãi mãi.',
      },
      {
        p: 'Có hai cách sửa, cả hai đều dựa vào dòng. Danh sách lô gần đây được dựng lại từ bảng, nên tải lại trang vẫn thấy lô cũ. Và một lần chạy còn ghi "đang chạy" trong khi tiến trình đã chết được vẽ là "cần chú ý" chứ không phải đang quay — vì một vòng quay là lời khẳng định không ai kiểm chứng được.',
      },
      {
        p: 'Có đúng một chỗ không có bước dọn như vậy: hàng đợi đăng của chiến dịch. Một dòng đã bị nhận rồi tiến trình chết vẫn nằm ở trạng thái "đang đăng", và không có gì tự đổi nó lúc khởi động. Đó là chỗ duy nhất trong bài này mà một lần tắt máy đột ngột có thể để lại dấu vết không tự biến mất.',
      },
      {
        h2: 'Ba luật đứng sau tất cả những chỗ trên',
      },
      {
        ol: [
          'Ghi trước khi làm. Không có việc nào bắt đầu trước khi có dòng nói nó là việc gì.',
          'Khi không chắc, làm tối đa một lần. Đăng là hành động không hoàn tác được, nên nghi ngờ thì dừng và để một người xem.',
          'Việc lặp được thì đừng tự lặp. Dựng lại một video không sao; đăng lại một video thì có sao. Vì thế lô thủ công không tự chạy lại, còn nội dung của chiến dịch thì được nhặt tiếp theo từng mảnh.',
        ],
      },
      {
        note: 'Khởi động lại không phải nút hoàn tác. Nó giữ lời bạn đã dặn, ghi lại chỗ dừng, và không giả vờ rằng công việc vẫn đang chạy. Biết được ba chuyện đó là đủ để không mất một buổi sáng vì một lần cúp điện.',
      },
    ],
    en: [
      {
        h2: 'A queue in memory dies with the process, so this one is not kept in memory',
      },
      {
        p: 'The familiar arrangement: a list in memory and a loop pulling items off it. Fast, tidy, and gone the moment the process dies — not just the running job but every job that had not started, because none of them existed anywhere outside RAM.\n\nHere it is the other way round: the row is on disk before a single frame is rendered. The first question to ask about any change to the queue is "if the power went now, what is left?".',
      },
      {
        p: 'The answer has to be: the row, with enough in it to read back what you asked for.',
      },
      {
        h2: 'A batch is written as rows before the work begins',
      },
      {
        p: 'Press run and every video in the batch gets its own row: source link, target language, voice, speaking rate, captions or not, template, status waiting, step 0 of 5. The row is written before the worker pool is handed anything.',
      },
      {
        p: 'While a job runs, progress is written once every two seconds — writing after every translated sentence would turn the data file itself into the bottleneck. At the end, whether the job succeeded, failed or was cancelled, the write is immediate and does not wait for the tick.',
      },
      {
        p: 'That is the whole survival mechanism: nothing important exists only in memory. The progress bar can be smooth because it reads memory, but memory is only a fast copy of the row.',
      },
      {
        h2: 'Opening the app again is a cleanup ritual, and the order is the important part',
      },
      {
        p: 'Before any worker is allowed to take work, the app walks this list.',
      },
      {
        ol: [
          'Jobs still marked running or waiting by the old process are marked failed, with the reason "interrupted by restart".',
          'Recap projects still running are paused rather than failed, because they keep checkpoints and resuming from one is far cheaper.',
          'History older than thirty days is pruned, and only rows that already ended can go.',
          'Telegram commands still marked running are failed; commands still waiting are left alone, because they never started and running one is not running it twice.',
          'Scheduled posts the dead process had claimed become interrupted, and old finished rows are pruned too.',
          'Only then do the loops start: one scheduling worker per platform, the licence refresh thread, the job pool, and the campaign orchestrator.',
        ],
      },
      {
        p: 'The order is not cosmetic. Cleaning before opening the door is the only way no worker sees a ghost row and picks it up.',
      },
      {
        figure: {
          src: '/blog/hang-doi-job-song-sot-restart-en.svg',
          alt: 'A two-lane state diagram. The top lane is a pooled job: queued goes to running and then to succeeded, or to failed, or to cancelled; a dashed red restart node joins running to failed and records that both queued and running are marked failed on the next launch. The bottom lane is a scheduled post: scheduled goes to running and then done, or to failed; scheduled can become missed if the app is opened more than thirty minutes late, while running becomes interrupted when the process dies and is never retried.',
          caption: 'One power cut, two different endings: the pooled job is marked failed and waits for you to press again, while a post that is not yet due is not touched at all.',
        },
      },
      {
        h2: 'What survives is the row, not the step in flight',
      },
      {
        p: 'Worth saying plainly, because it is the disappointing part: a job that was rendering when the power went will not continue from frame one thousand. On the next launch its row reads failed. The step in flight is lost, and there is no intermediate state to attach to.',
      },
      {
        ul: [
          'What remains: what you asked for, the source link, language, voice, template, and the step it reached — enough to know where it died.',
          'What is lost: the work of the step in flight. Transcribing and rendering both start over if you run it again.',
          'What does not happen: the rerun. Nothing scans the failed rows and quietly tries again, because redoing work you did not ask for is its own kind of wrong.',
        ],
      },
      {
        p: 'For a manual batch the fix is to press again, and the old row tells you how far it got. A campaign is different: its work is broken into pieces that can be repeated, so the next pass picks up rather than starts over. The next section is about that difference.',
      },
      {
        h2: 'A scheduled post outlives a job, so it has its own rules',
      },
      {
        p: 'A scheduled post is not a job running in the background. It is a row with two times: the time you chose, and the time it will actually be tried. The two differ all the time — the phone is off, another batch is running — so the chosen time is not the condition for running.',
      },
      {
        p: 'Each platform has its own worker, asking every twenty seconds. Taking a row is a conditional write: only a row still marked scheduled can become running, and the loser comes back for the next one. That is why two processes cannot post the same item.',
      },
      {
        p: 'If the app opens late, the post still runs when it opens within thirty minutes of your chosen time. Later than that it becomes missed — posting last night’s video this morning is worse than not posting it. If the phone is busy, it waits sixty seconds and tries again, up to ten times, and the attempt count lives in the row, so restarting during that wait does not reset the count.',
      },
      {
        note: 'A row marked running is a claim, not a fact. On the next launch it becomes interrupted and is never retried — part of the batch may already have been posted, and only a person looking at the Page can say whether it was.',
      },
      {
        h2: 'The campaign loop ticks every minute, and "has today run yet" lives on disk',
      },
      {
        p: 'The orchestrator wakes once a minute. For every enabled campaign it measures how the posted videos are doing, pushes out anything due to publish, and only then considers making new content — and only when today has not run yet and the start time you set has passed.',
      },
      {
        p: 'The day marker is written only after a full cycle finishes. Die mid-cycle and the marker is not written, so the next launch tries that cycle again the same day. Trying again is safe because each piece knows what it already did: existing content is reused rather than duplicated, content already published is skipped, and content stuck in the creating state is treated as retryable because the process that wrote that state is gone.',
      },
      {
        p: 'The publish queue works the same way: each attempt is a conditional write, a failure is rescheduled five minutes later, twice, and only then filed as failed. Before publishing, the app asks one cheap question — has this content already gone to that Page? If it has, the answer is already published rather than a second upload.',
      },
      {
        h2: 'Four queues, four vocabularies, and no status called an error',
      },
      {
        p: 'The words on screen are not decoration. Reading the right one tells you what to do next.',
      },
      {
        ul: [
          'Pooled jobs: waiting, running, done, failed, cancelled. An error is a column, not a status — a failed job can still carry a long explanation.',
          'Scheduled posts: scheduled, running, done, failed, interrupted, missed, cancelled. Interrupted and missed are not synonyms for failed: one says a process died while holding the row, the other says the app opened too late.',
          'Telegram commands: waiting, running, done, failed. A waiting command survives a restart; a running one does not.',
          'Campaign publish items: scheduled, publishing, done, failed, cancelled.',
        ],
      },
      {
        p: 'Folding interrupted into failed would teach you to retry exactly the case where retrying is wrong. That is why the tables keep their own vocabularies instead of sharing one status column.',
      },
      {
        h2: 'A spinner after a crash is a lie, and the code knows it',
      },
      {
        p: 'Live state in memory is the screen’s shortcut: the running list is read from there every couple of seconds. After a restart that memory is empty. With nothing reconciled, a batch would either vanish or spin forever.',
      },
      {
        p: 'There are two fixes, and both rest on the row. The recent-batches list is rebuilt from the table, so reloading the page still shows the old batch. And a run still marked running while its process is gone is painted as needing attention rather than as moving — because a spinner is a claim nobody can verify.',
      },
      {
        p: 'There is exactly one place with no such cleanup step: the campaign publish queue. A row that was claimed and then lost its process stays marked publishing, and nothing resets it at startup. It is the one spot in this article where an abrupt shutdown can leave a mark that does not clear itself.',
      },
      {
        h2: 'Three rules sit behind all of it',
      },
      {
        ol: [
          'Write before doing. No work starts before a row says what the work is.',
          'When in doubt, do it at most once. Publishing cannot be undone, so doubt stops and leaves it to a person.',
          'If it can be repeated, do not repeat it automatically. Rendering a video again is fine; posting it again is not. That is why a manual batch is not rerun, while campaign content is picked up piece by piece.',
        ],
      },
      {
        note: 'A restart is not an undo button. It keeps what you asked for, records where things stopped, and does not pretend the work is still moving. Knowing those three things is enough to not lose a morning to a power cut.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Tắt máy giữa lúc đang dựng video thì mất gì?',
        a: 'Mất bước đang chạy: đoạn video đã dựng dở không được giữ, nên lần chạy lại bắt đầu từ đầu bước đó. Không mất lời bạn đã dặn — dòng job, đường dẫn nguồn, ngôn ngữ, giọng và bước đã tới vẫn còn, và lần mở sau dòng đó được ghi là hỏng kèm lý do.',
      },
      {
        q: 'Vì sao job hỏng không tự chạy lại?',
        a: 'Vì chạy lại một việc bạn không yêu cầu cũng là một cách làm sai, và với một số bước thì có thể đăng trùng. Ứng dụng ghi rõ nó đã đi tới đâu rồi để bạn quyết định bấm lại. Riêng nội dung của chiến dịch tự động thì được nhặt tiếp, vì công việc ở đó chia thành từng mảnh lặp lại được và mỗi mảnh biết mình đã làm gì.',
      },
      {
        q: 'Bài đã hẹn giờ có bị lỡ nếu tôi mở máy muộn không?',
        a: 'Có, nhưng có ân hạn. Mở trong vòng 30 phút kể từ giờ bạn chọn thì bài vẫn chạy; muộn hơn thì dòng chuyển thành "bị lỡ" thay vì đăng một video của hôm qua. Nếu lúc tới giờ điện thoại bận hoặc một lô khác đang chạy, nó chờ 60 giây rồi thử lại, tối đa 10 lần.',
      },
      {
        q: 'Tôi có thể mở hai cửa sổ ứng dụng cùng lúc không?',
        a: 'Được, và cả hai đọc cùng một tệp dữ liệu. Nhận việc là một lệnh ghi có điều kiện, nên hai tiến trình không nhận cùng một dòng: kẻ thua quay lại hỏi dòng sau. Điều không nên làm là mở hai bản cài trỏ vào hai tệp dữ liệu khác nhau rồi tưởng chúng là một.',
      },
    ],
    en: [
      {
        q: 'What is lost if the machine dies mid-render?',
        a: 'The step in flight: a half-rendered video is not kept, so running it again starts that step over. What you asked for is not lost — the job row, source link, language, voice and the step it reached are all still there, and on the next launch that row is marked failed with the reason.',
      },
      {
        q: 'Why doesn’t a failed job retry itself?',
        a: 'Because redoing work you did not ask for is its own kind of wrong, and on some steps it could post something twice. The app records how far it got and leaves the decision to you. Campaign content is the exception: its work is broken into pieces that repeat safely, and each piece knows what it already did.',
      },
      {
        q: 'Does a scheduled post get missed if I open the app late?',
        a: 'It can, but there is a grace window. Open within thirty minutes of your chosen time and the post still runs; later than that the row becomes missed rather than posting yesterday’s video. If the phone is busy or another batch is running when the time arrives, it waits sixty seconds and retries, up to ten times.',
      },
      {
        q: 'Can I open two app windows at once?',
        a: 'Yes, and both read the same data file. Taking work is a conditional write, so two processes cannot claim the same row: the loser comes back for the next one. What you should not do is run two installs pointed at two different data files and assume they are one.',
      },
    ],
  },
};

/**
 * Blog post — "Đường ống dựng video: engine, mã hoá và GPU".
 *
 * One video walked from source file to a 9:16 file that is ready to post:
 * fetch, cut, voice, subtitle burn, branding, QC. Written for somebody who
 * runs batches and needs to know which stage is slow, which stage collides
 * with a sibling job, and what a graphics card does and does not rescue.
 *
 * Every number here is a measurement recorded in the product source — the
 * clip-cache collision on 2026-10-05, the subtitle-burn timings, the 12-session
 * NVENC ceiling. Nothing is estimated for the article.
 *
 * Names three words the blog normally may not print (`ffmpeg`, `zerotts`,
 * `nvenc`); the exception is keyed by this slug in `scripts/lib/post-rules.mjs`
 * because the article is about those three things.
 */
export default {
  slug: {
    vi: 'duong-ong-dung-video-va-gpu',
    en: 'render-pipeline-and-gpu',
  },
  title: {
    vi: 'Đường ống dựng video: engine, mã hoá và GPU',
    en: 'How one video is built: engines, encoding and the GPU',
  },
  description: {
    vi: 'Từ tệp nguồn tới video 9:16 sẵn sàng đăng: tải, cắt cảnh, đọc lời, nướng phụ đề, đóng dấu, kiểm tra — và hai chỗ dễ hỏng khi chạy song song.',
    en: 'From source file to a 9:16 file ready to post: fetch, cut, voice, subtitles, branding and QC — including the two places parallel jobs collide.',
  },
  date: '2026-10-29',
  minutes: { vi: 8, en: 7 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Một video 9:16 không ra đời ở một bước. Bài này đi qua sáu chặng của đường ống, chỉ ra hai chỗ hay hỏng khi chạy song song, và nói thẳng chặng nào card đồ hoạ không cứu được.',
    en: 'A 9:16 video is not made in one step. This walks the six stages of the pipeline, the two places parallel jobs collide, and the stages a graphics card cannot rescue.',
  },
  body: {
    vi: [
      {
        h2: 'Một video 9:16 đi qua sáu chặng, chặng nào cũng có thể làm hỏng video',
      },
      {
        p: 'Bạn bấm dựng, đi pha cà phê, quay lại thấy một tệp mp4. Ở giữa là sáu chặng: tải nguồn, cắt cảnh, đọc lời, nướng phụ đề, đóng dấu, kiểm tra.\n\nMỗi chặng nhận một tệp và trả một tệp. Khi video hỏng, câu hỏi không phải "tại sao video xấu" mà là "nó chết ở chặng nào" — mỗi chặng hỏng một kiểu, cách sửa cũng khác.',
      },
      {
        figure: {
          src: '/blog/duong-ong-dung-video-va-gpu.svg',
          alt: 'Sơ đồ ngang sáu chặng của đường ống dựng video, từ tải nguồn, cắt cửa sổ 45 giây 9:16, đọc lời, nướng phụ đề, đóng dấu, tới cổng kiểm tra. Bên dưới là nhánh bộ nhớ đệm clip và nhánh GPU; cuối trang là bốn điều kiện của cổng.',
          caption: 'Mỗi mũi tên là một tệp đã đóng. Lỗi dừng ở chặng của nó, nên biết chặng nào hỏng rẻ hơn đoán cả đường ống.',
        },
      },
      {
        ol: [
          'Tải nguồn. Liên kết được kiểm tra trước: thiếu cookie thì báo ngay, không để chết sau hai mươi phút. Tệp có sẵn chỉ được dùng lại khi đọc ra thời lượng dương.',
          'Cắt cảnh. Nguồn được đọc thành lời, chấm điểm, cắt thành cửa sổ 45 giây 9:16. Chặng này quyết định hình dạng cuối.',
          'Đọc lời. Lời thoại được đọc bằng engine tại máy, hoặc bằng bản dịch lồng tiếng. Chặng này ghi tệp tiếng và quyết định độ dài.',
          'Nướng phụ đề. Phụ đề được đốt thẳng vào khung hình trong lượt mã hoá cuối, không phải lớp phủ thêm sau.',
          'Đóng dấu. Khung, logo và hai dòng chữ được vẽ vào chính khung nguồn, nên video ra vẫn đúng 9:16.',
          'Kiểm tra. Cổng cuối đọc tệp và trả lời đạt hoặc không, kèm lý do. Không mô hình nào tham gia.',
        ],
      },
      {
        h2: 'Tải xong không có nghĩa là tệp dùng được',
      },
      {
        p: 'Một bản tải bị cắt giữa đường vẫn nằm trên đĩa với dung lượng trông như thật, nhưng không có chỉ mục nên trình đọc trả về 0 giây.\n\nHệ thống không tin dung lượng. Nó mở tệp và hỏi thời lượng; chỉ số dương mới cho phép dùng lại. Một tệp 41 MB sót lại từ lần tải hỏng từng được tái sử dụng nhiều lần vì phép kiểm tra cũ chỉ nhìn dung lượng.',
      },
      {
        h2: 'Cắt trước khi lồng tiếng, vì nó giữ nguyên độ dài',
      },
      {
        p: 'Một video Facebook Reels dài tối đa 90 giây. Lồng tiếng, xoá logo và đóng dấu đều giữ nguyên độ dài nguồn. Đưa vào một tập phim 7 phút nằm ngang, cả ba bước làm việc trên 7 phút đó, rồi cổng kiểm tra từ chối.\n\nVì vậy với đích Facebook, nguồn dài hơn 90 giây bị cắt về cửa sổ 45 giây 9:16 trước. Nguồn ngắn hơn thì để nguyên — cắt một clip dọc 40 giây chỉ để cắt là mất footage.',
      },
      {
        p: 'Cắt cảnh không phải cắt bừa. Nguồn được đọc thành lời, chấm điểm theo hình và tiếng, rồi chọn cửa sổ. Mặc định 45 giây: đủ để câu chuyện có mở và kết, và cách trần 90 giây đủ xa để lời đọc không đẩy video qua trần.',
      },
      {
        h2: 'Giọng đọc chọn bằng tiền tố, không bằng menu',
      },
      {
        p: 'Danh sách giọng gộp hai engine tại máy vào một ô chọn, nên engine phải đi cùng tên dưới dạng tiền tố: "vieneu:Hải Đăng", hoặc tiền tố của engine cũ đứng trước tên giọng.\n\nChỉ hai tiền tố đó được nhận. Một tên trần — kiểu maichi — rơi về engine cũ và giữ nguyên cả chuỗi làm tên giọng. Đây là chỗ dễ sai nhất khi sửa cấu hình tay: không lỗi, không cảnh báo, chỉ một giọng khác ý bạn.',
      },
      {
        ul: [
          'Engine thứ nhất có 8 giọng cố định. Muốn thêm giọng thứ chín phải có dữ liệu mới, thứ không nằm trong tay người dùng.',
          'Engine thứ hai có 25 giọng, tên là danh từ riêng, không dịch. "Adam bựa" không phải "Adam"; so khớp chính xác, không theo tiền tố.',
          'Cả hai chạy trên CPU. Engine thứ nhất giải mã từng khung, một luồng mỗi lần gọi; cách duy nhất dùng hết máy là chạy nhiều đoạn song song, trần 8 đoạn cùng lúc.',
        ],
      },
      {
        h2: 'Phụ đề nướng trong lượt mã hoá, cái mất là hiệu ứng',
      },
      {
        p: 'Có hai cách đốt phụ đề. Cách cũ ghép từng khung hình trong Python: giải mã, vẽ chữ, mã hoá lại. Với video 36 phút 1080x1920, cách đó chạy 0,19 lần thời gian thực — chậm hơn mọi chặng khác cộng lại.\n\nCách đang dùng để bộ mã hoá tự đốt tệp phụ đề. Cùng video, cùng tệp: 1,50 lần thời gian thực, nhanh khoảng tám lần. Riêng phần đốt gần như miễn phí: 0,388 so với 0,412 khi không có phụ đề.',
      },
      {
        p: 'Cái mất là hiệu ứng. Cách cũ có chữ nảy lên, căn theo nét mực, nền bo góc. Cách mới giữ đúng font, cỡ, màu, viền và vị trí, nhưng đứng yên. Nếu hiệu ứng là một phần nhận diện của kênh, bạn phải chọn giữa nó và tám lần tốc độ — không có lựa chọn miễn phí.',
      },
      {
        h2: 'Đóng dấu là một lượt mã hoá nữa, khung trống phải miễn phí',
      },
      {
        p: 'Mỗi template đóng dấu là một lần đọc toàn bộ video và ghi bản mới. Với lô 20 video, đó là 20 lượt mã hoá thêm — lý do template rỗng phải trả về đúng đường dẫn ban đầu mà không chạy lệnh nào.\n\nÔ chữ trống cũng phải là chuỗi rỗng, không phải "không đặt". Chuỗi rỗng nghĩa là "không có chữ"; "không đặt" nghĩa là dùng chữ của template. Một video từng ra với tiêu đề không ai viết vì ô trống đi vào dưới dạng "không đặt".',
      },
      {
        p: 'Khung đóng dấu theo đúng hình dạng nguồn, nên video 9:16 vẫn là 9:16. Video quay dọc bằng điện thoại báo kích thước ngang ở phần lớn định dạng; hệ thống đọc ma trận xoay để biết khung thật, nếu không thanh đen nằm ở hai bên sai.',
      },
      {
        h2: 'Ảnh dùng chung: một tệp tạm, một lần đổi tên',
      },
      {
        p: 'Khi nhiều video cùng lấy một bộ ảnh, mỗi video biến mỗi ảnh thành một clip ngắn. Viết thẳng vào tên cuối đã hỏng thật: ngày 5/10/2026, năm task dùng chung ba ảnh cùng ghi vào ba tên tệp, bốn task chết sau vài phút dựng vì đọc phải tệp chưa đóng.\n\nTệp mp4 giữ chỉ mục ở cuối. Tệp đang ghi chưa có chỉ mục, nên trình đọc báo "moov atom not found" — đọc như tệp hỏng, thật ra chưa xong.',
      },
      {
        p: 'Cách sửa có ba phần. Mỗi clip ghi vào một tệp tạm ẩn cạnh đích, tên có mã ngẫu nhiên. Một khoá theo từng tệp đích bảo đảm chỉ một tiến trình dựng. Xong thì đổi tên một bước, cùng ổ đĩa nên hoặc thấy bản cũ, hoặc bản mới, không bao giờ thấy một nửa.\n\nTrước khi dựng, hệ thống mở tệp đích và kiểm tra thời lượng. Đúng thì dùng lại. Năm lần dựng giống nhau thành một.',
      },
      {
        h2: 'GPU chỉ nhanh khi container được cấp đúng thứ',
      },
      {
        p: 'Bộ mã hoá phần cứng không tự có. Container mặc định không xin card, vì máy thiếu driver NVIDIA sẽ chết ngay lúc tạo chứ không cảnh báo rồi chạy tiếp. Muốn có card phải bật thêm một tệp cấu hình, thêm ba thứ: quyền dùng thiết bị, bản mã hoá biên dịch kèm phần cứng, và biến trỏ engine sang bản đó.\n\nThiếu một trong hai thứ sau thì tệ hơn không bật gì: có thiết bị mà không ai dùng, hoặc mọi task chết ngay ở bước kiểm tra đầu.',
      },
      {
        p: 'Quyền cũng phải đúng. "gpu" một mình gắn thư viện tính toán; mã hoá cần thêm quyền "video", thứ mang theo thư viện mã hoá. Thiếu nó, lỗi hiện ra như một tham số sai — "không mở được encoder" — và bạn sẽ sửa bitrate cả buổi trong khi nguyên nhân là một thư viện không được gắn.',
      },
      {
        p: 'Kể cả khi mọi thứ được cấp đúng, bộ mã hoá vẫn có thể hỏng lúc chạy. Hệ thống lùi về bộ mã hoá phần mềm và cho bộ phần cứng nghỉ 5 phút rồi thử lại. Trần phiên trên một card đo được là 12: mười hai lượt 1080x1920 cùng lúc chạy được, lượt thứ mười ba bị từ chối. Vì vậy có hai trần: 8 luồng mỗi task và 12 phiên cho cả máy, chia sẻ qua thư mục khoá chung.\n\nĐánh đổi là chất lượng. Cùng bitrate, bộ mã hoá phần cứng thường cho hình kém hơn bộ phần mềm ở preset chậm; nó đổi hình lấy tốc độ và ít CPU. Video bán hàng đăng lại mỗi ngày thì đáng; video thương hiệu thì không.',
      },
      {
        h2: 'Cổng kiểm tra hỏi tệp, không hỏi mô hình',
      },
      {
        p: 'Trước khi đăng, video đi qua một cổng đọc tệp. Cổng không chấm nội dung; nó trả lời những câu chỉ có sai hoặc đúng.',
      },
      {
        ol: [
          'Tỉ lệ có phải 9:16? Sai số 0,02 đủ rộng cho làm tròn pixel, đủ hẹp để bắt video 16:9.',
          'Có luồng tiếng không, dài bao nhiêu? Dưới 2 giây bị từ chối; trên 90 giây với Facebook, trên 180 với YouTube và TikTok.',
          'Có quá nửa số khung là đen không? Một cửa sổ ngắn hơn lời đọc từng tạo ra 15,3 giây đen trong video 30 giây, và cổng bắt được.',
          'Tệp có trùng từng byte với video trước? So mã băm; trùng là từ chối.',
        ],
      },
      {
        p: 'Thiếu tệp phụ đề chỉ là cảnh báo: có nền tảng tự sinh phụ đề, có nền tảng nhận phụ đề nướng sẵn. Thiếu luồng tiếng là lỗi, vì không nền tảng nào cứu được video câm.',
      },
      {
        h2: 'Ba giới hạn trước khi tin vào con số tốc độ',
      },
      {
        ul: [
          'Đọc lời là chặng CPU. Nó không dùng card, và một đoạn dài không chia được cho nhiều lõi. Tám đoạn song song giúp lô nhanh hơn, không làm một đoạn dài ngắn lại.',
          'Bộ mã hoá phần cứng nhanh hơn nhưng không miễn phí. Cùng bitrate, hình thường kém hơn; muốn giữ chất lượng phải tăng bitrate, tệp to hơn.',
          'Bộ nhớ đệm chỉ giúp khi các video dùng chung ảnh và cùng thời lượng. Đổi thời lượng là đổi tệp đích, mọi thứ dựng lại.',
        ],
      },
      {
        note: 'Đừng đo cả đường ống bằng một video 15 giây. Ở video ngắn, chi phí cố định — nạp model, khởi động engine, mở tệp — chiếm phần lớn. Ở video 5 phút, đọc lời và cắt cảnh chiếm phần lớn. Hai phép đo cho hai kết luận trái nhau trên cùng một máy, cả hai đều đúng.',
      },
    ],
    en: [
      {
        h2: 'A 9:16 video crosses six stages, and any one of them can sink it',
      },
      {
        p: 'You press render, go make coffee, and come back to an mp4. In between there are six stages: fetch the source, cut it, voice it, burn subtitles, brand it, check it.\n\nEach stage takes a file and returns a file. When a video comes out wrong, the first question is not "why does it look bad" but "which stage failed" — because each stage fails in its own way, and each is fixed differently.',
      },
      {
        figure: {
          src: '/blog/duong-ong-dung-video-va-gpu-en.svg',
          alt: 'A left-to-right diagram of the render pipeline: a source is fetched, cut into 45-second 9:16 windows, voiced by one of two on-machine engines, has subtitles burned into the picture, gets a frame and logo applied, then passes a QC gate to become a file ready for posting. Below left is the clip-cache branch with a hidden temp file and a rename; below right is the GPU branch with hardware and software encoding paths; the bottom strip lists the QC conditions.',
          caption: 'Every arrow is a closed file. A failure stops at its own stage, which makes finding it cheaper than guessing at the whole pipeline.',
        },
      },
      {
        ol: [
          'Fetch. A link is preflighted before download: missing cookies are reported then, not twenty minutes later. A file already on disk is reused, but only if it probes to a positive duration.',
          'Cut. The source is transcribed, scored, then cut into 45-second windows and cropped to 9:16. This is the stage that fixes the final shape.',
          'Voice. The lines are spoken by an on-machine engine, or by a dubbed translation. This stage writes the audio file and decides the final length.',
          'Burn subtitles. Captions are drawn into the picture during the final encode, not laid over it afterwards.',
          'Brand. The frame, logo and two lines of text are drawn into the source picture itself, so the result stays 9:16.',
          'Check. The last gate reads the file and answers pass or fail with a reason. No model takes part in that answer.',
        ],
      },
      {
        h2: 'A finished download is not a usable file',
      },
      {
        p: 'A download killed halfway still sits on disk at a believable size. It has no index, so the reader reports zero seconds.\n\nThe system does not trust the size. It opens the file and asks for the duration; only a positive number lets it be reused. A 41 MB remnant of a failed download was reused repeatedly because the old check only looked at size. Now that file is deleted and fetched again.',
      },
      {
        h2: 'Cut before dubbing, because dubbing keeps the length',
      },
      {
        p: 'A Facebook Reel runs 90 seconds at most. Dubbing, logo removal and branding all keep the source length. Hand in a seven-minute landscape drama and all three work on those seven minutes, then QC refuses the result at the end.\n\nSo for a Facebook target, a source longer than 90 seconds is cut to a 45-second 9:16 window first. A source already inside the limit is left alone — trimming a 40-second vertical clip just to trim it loses footage for nothing.',
      },
      {
        p: 'The cut is not random. The source is transcribed, scored on picture and sound signals, then windows are chosen. The default is 45 seconds: long enough for a story to open and close, and far enough below the 90-second ceiling that the voice cannot push the video over it.',
      },
      {
        h2: 'A voice is chosen by prefix, not by menu',
      },
      {
        p: 'The voice list on screen merges two on-machine engines into one picker. So the engine has to travel with the name, written as a prefix: "vieneu:Hải Đăng", or the older engine’s own prefix.\n\nOnly those two prefixes are recognised. A bare name — maichi — falls back to the older engine and keeps the whole string as the voice name. This is the easiest place to get wrong when editing configuration by hand: no error, no warning, just a different voice from the one you meant.',
      },
      {
        ul: [
          'The first engine has 8 fixed voices. A ninth needs new voice data, and that data is not something a user can produce.',
          'The second has 25, named as proper nouns and never translated. "Adam bựa" is not "Adam"; matching is exact, never by prefix.',
          'Both run on the CPU. The first decodes one frame at a time, one thread per call; the only way to use the whole machine is several segments in flight, capped at 8 at once.',
        ],
      },
      {
        h2: 'Subtitles burn in the same encode, and the cost is the animation',
      },
      {
        p: 'There are two ways to burn captions. The old one composited every frame in Python: decode a frame, draw text, encode it back. On a 36-minute 1080x1920 video that ran at 0.19x realtime — slower than every other stage added together.\n\nThe current path hands the subtitle file to the encoder itself. Same video, same file: 1.50x realtime, roughly eight times faster. The burn alone costs almost nothing: 0.388 against 0.412 with no subtitles at all.',
      },
      {
        p: 'What it gives up is animation. The old path had cues that sprang into place, centring measured from the ink, and a rounded background. The new one keeps the font, size, colour, outline and position, but holds still. If that motion is part of a channel’s identity, you choose between it and eight times the speed — there is no free option.',
      },
      {
        h2: 'Branding is another full encode, so an empty template has to be free',
      },
      {
        p: 'Every branding template reads the whole video and writes a new copy. Twenty videos in a batch means twenty extra encodes — which is why an empty template must return the original path without running a single command.\n\nAn empty text box must also travel as an empty string, not as "not set". The two differ: empty means "no words here", while "not set" means "use the template’s own words". One video shipped with a title nobody wrote because the blank box arrived as "not set".',
      },
      {
        p: 'The branded frame follows the source’s own shape, so a 9:16 video stays 9:16. Phone video records its coded size as landscape in most formats; the system reads the display matrix to find the real frame, otherwise the bars land on the wrong two sides.',
      },
      {
        h2: 'Shared stills: one temp file, one rename',
      },
      {
        p: 'When several videos draw on one set of stills, each video turns every still into a short clip. Writing straight to the final name failed two ways at once, and it really did fail: on 5 October 2026, five tasks sharing three stills all wrote to the same three names, and four of the five died after minutes of rendering because they opened a file still being written.\n\nAn mp4 keeps its index at the end. A file still being written has no index, so the reader says "moov atom not found" — which reads like a corrupt file and is really an unfinished one.',
      },
      {
        p: 'The fix has three parts. Each clip is written to a hidden temp file beside its target, with a random name. One lock per target means only one process renders it. Then a single rename, on the same filesystem, so a reader sees either the old complete file or the new complete file and never half of one.\n\nBefore rendering, the system opens the target and checks its duration. If the length is right, it reuses it. Five identical renders become one.',
      },
      {
        h2: 'The GPU only helps when the container is handed the right things',
      },
      {
        p: 'A hardware encoder does not come for free. The default container asks for no card, because a machine without the NVIDIA driver dies at container-create time instead of warning and carrying on. Getting the card means enabling a second configuration file, and that file adds three things at once: permission to use the device, an encoder build with hardware support compiled in, and the variable that points the engine at it.\n\nMissing either of the last two is worse than not enabling it: a device nobody uses, or every task failing at the first check.',
      },
      {
        p: 'The permission has to be the right one. "gpu" alone mounts the compute libraries; encoding also needs "video", which carries the encode library. Without it the error looks like a bad parameter — "cannot open encoder" — and you will spend an afternoon adjusting bitrate while the cause is a library that was never mounted.',
      },
      {
        p: 'Even when everything is granted, the encoder can still fail at runtime. The system falls back to the software encoder and rests the hardware one for five minutes before trying again. The measured session ceiling on one card is 12: twelve simultaneous 1080x1920 encodes succeeded, the thirteenth was refused. Hence two ceilings: 8 workers per task, and 12 sessions for the whole machine, shared through a lock folder both processes can see.\n\nThe trade is quality. At the same bitrate a hardware encoder usually looks rougher than the software one at a slow preset; it trades picture for speed and low CPU. For a sales video posted daily that is often worth it; for a brand film it is not.',
      },
      {
        h2: 'The final gate reads the file, not the mood',
      },
      {
        p: 'Before anything is posted, a gate opens the file. It does not score the content. It answers questions that are only true or false.',
      },
      {
        ol: [
          'Is the ratio 9:16? Tolerance is 0.02, wide enough for pixel rounding and narrow enough to catch 16:9.',
          'Is there an audio stream, and how long is the file? Under 2 seconds is refused; over 90 is refused for Facebook, over 180 for YouTube and TikTok.',
          'Is more than half the picture black? A window shorter than its voice once produced 15.3 seconds of black in a 30-second video, and the gate caught it.',
          'Is this file byte-identical to an earlier video? It compares hashes; a match is refused.',
        ],
      },
      {
        p: 'A missing subtitle file is only a warning, because some platforms generate captions and some accept burned-in ones. A missing audio stream is an error, because no platform can rescue a silent video.',
      },
      {
        h2: 'Three limits to know before trusting a speed number',
      },
      {
        ul: [
          'Voice is the CPU stage. It does not use the card, and one long segment cannot be split across cores. Eight segments in parallel speed up a batch; they do not shorten one long segment.',
          'Hardware encoding is faster but not free. At the same bitrate the picture is usually weaker; keeping quality means raising the bitrate, and the file grows.',
          'The clip cache only helps when videos share stills and the same clip length. Change the length and the target changes, and everything renders again.',
        ],
      },
      {
        note: 'Do not measure the pipeline on a 15-second video. On a short clip, fixed costs — loading the model, starting the engine, opening files — dominate. On a five-minute video, voice and cutting dominate. The two measurements point in opposite directions on the same machine, and both are right.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Video 9:16 có nhất thiết phải đúng 1080x1920 không?',
        a: 'Không. Cổng kiểm tra tỉ lệ, không kiểm tra số điểm ảnh: video 720x1280 cùng tỉ lệ vẫn qua. Điều bị chặn là khung 16:9 đội lốt video dọc, vì nền tảng sẽ tự cắt hai bên và mất chủ thể.',
      },
      {
        q: 'Vì sao video 40 giây vẫn mất vài phút?',
        a: 'Độ dài video không quyết định thời gian. Ba thứ cố định — nạp model giọng đọc, đọc nguồn để chọn cảnh, mở và mã hoá tệp — chiếm phần lớn ở video ngắn. Video càng dài thì phần biến đổi theo độ dài mới lớn dần.',
      },
      {
        q: 'Card đồ hoạ giúp được chặng nào?',
        a: 'Chỉ chặng mã hoá hình. Đọc lời chạy trên CPU và không có đường GPU; cắt cảnh và đọc nguồn cũng vậy. Một máy có card vẫn chờ giọng đọc lâu như máy không có card.',
      },
      {
        q: 'Có giữ được hiệu ứng phụ đề cũ không?',
        a: 'Được, bằng cách đổi bộ dựng phụ đề trong cấu hình. Cái giá là tốc độ: đường cũ chậm hơn khoảng tám lần trên video dài, nên nó chỉ hợp với video ngắn hoặc video thương hiệu cần đúng chuyển động.',
      },
    ],
    en: [
      {
        q: 'Does a 9:16 video have to be exactly 1080x1920?',
        a: 'No. The gate checks the ratio, not the pixel count: 720x1280 passes. What it blocks is a 16:9 frame dressed as vertical, because the platform will crop the sides and take the subject with them.',
      },
      {
        q: 'Why does a 40-second video still take minutes?',
        a: 'Length does not set the time. Three fixed costs — loading the voice model, reading the source to pick scenes, opening and encoding the file — dominate on a short clip. Only as the video gets longer does the length-dependent work take over.',
      },
      {
        q: 'Which stage does the graphics card help?',
        a: 'Encoding only. Voice runs on the CPU with no GPU path, and so do the transcript and the cut. A machine with a card waits just as long for the voice as one without.',
      },
      {
        q: 'Can I keep the old animated subtitles?',
        a: 'Yes, by switching the subtitle renderer in configuration. The price is speed: the old path is roughly eight times slower on a long video, so it suits short clips or brand videos that need the motion.',
      },
    ],
  },
};

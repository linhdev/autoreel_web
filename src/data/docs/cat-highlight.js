/**
 * Cắt highlight — a long video in, the good moments out.
 *
 * Two halves that behave differently: finding the moments is a long job that
 * runs in the background and is not tied to the tab, and cutting them is a
 * second decision made afterwards. The screen's own words are read off
 * `translations.py` — `hl.find`, `hl.review_title`, `hl.create`, and the four
 * headings `hl.step_source` … — and the two limits the sliders carry come from
 * the screen's file rather than from prose: 1–12 highlights, 10–90 seconds
 * each.
 *
 * The working folders are pruned to the ten newest analyses (`prune(keep=10)`
 * in `shortGPT/highlights/store.py`), which is why the library keeps a row
 * marked "file không còn" rather than losing the entry. That sentence is the
 * library's own.
 */
export default {
  key: 'cat-highlight',
  group: 'rework',
  slug: { vi: 'cat-highlight', en: 'highlights' },
  updated: '2026-10-17',
  order: 2,
  title: { vi: 'Cắt highlight', en: 'Cutting highlights' },
  description: {
    vi: 'Lấy đoạn hay nhất từ phim, podcast hoặc livestream: đặt tuỳ chọn, chọn đoạn muốn giữ, rồi lồng tiếng hoặc cắt thẳng.',
    en: 'Pull the best moments out of a film, podcast or stream: set the options, pick the moments to keep, then dub them or just cut them.',
  },
  lead: {
    vi: 'Một video dài vào, **vài đoạn ngắn** ra. Việc tìm đoạn chạy ở phía sau và mất hàng chục phút, nên màn này tách làm hai: tìm trước, chọn sau.',
    en: 'One long video in, **a handful of short clips** out. Finding the moments runs in the background and takes tens of minutes, so the screen splits in two: find first, choose afterwards.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/cat-highlight-01-screen-vi.webp',
          alt: 'Màn Cắt highlight trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Đưa phim vào' },
      {
        p: 'Sidebar gọi màn này là **Cắt highlight**; tựa trong trang là **Cắt highlight từ video dài**. Nguồn là một video dài — phim, podcast, livestream — không phải một loạt clip.',
      },
      {
        steps: [
          {
            title: 'Chọn nguồn ở ô Nguồn',
            body: 'Hai lựa chọn: **Link video** hoặc **File trong máy**.',
          },
          {
            title: 'Dán link',
            body: 'Vào ô **Link video** — một link, và đó là cả video dài. Ô này nhận đúng một link, không phải danh sách.',
          },
          {
            title: 'Hoặc chọn file',
            body: 'Bấm **…hoặc tải một file lên** rồi chọn file trên máy. Phim vài GB thì app phải chép thêm một bản nữa vào thư mục làm việc của nó.',
          },
        ],
      },

      { h2: 'Đặt tuỳ chọn' },
      {
        steps: [
          {
            title: 'Bao nhiêu đoạn, dài bao nhiêu',
            body: '**Số lượng highlight** nhận từ 1 đến 12 đoạn. **Số giây mỗi đoạn** nhận từ 10 đến 90 giây, theo nấc 5 giây.',
          },
          {
            title: 'Khung hình',
            body: '**Khung hình** chọn **Dọc 9:16**, **Ngang 16:9**, hoặc **Nguyên bản** — giữ nguyên khung của nguồn.',
          },
          {
            title: 'Lồng tiếng hay chỉ cắt',
            body: '**Lồng tiếng bằng** có lựa chọn đầu tiên là **Không lồng tiếng — chỉ cắt clip**; chọn cái đó thì không có gì để dịch, và cũng không cần chọn giọng. Chọn một engine thì ô **Sang ngôn ngữ** và **Giọng đọc** hiện ra để đặt.',
          },
          {
            title: 'Phụ đề và dấu',
            body: 'Tick **Ghi phụ đề lên video** để phụ đề cháy vào clip. Khối **Chèn chữ & logo** chọn template đóng dấu — để **Không — giữ nguyên video** thì clip đi thẳng, không encode thêm lần nào.',
          },
        ],
      },
      {
        p: 'Mục **Nâng cao — thế nào là một highlight** giấu sáu thanh trượt quyết định app coi đoạn nào là hay: **Độ to**, **Mức thay đổi**, **Nhịp cắt cảnh**, **Mật độ nói**, **Tốc độ nói**, **Nhiều tín hiệu trùng**. Trong đó còn ô **Ngôn ngữ nói trong video**, mặc định là **Tự nhận biết**, và nút **Chọn lại các đoạn** để xếp hạng lại từ điểm đã lưu mà không phân tích lại từ đầu.',
      },
      {
        p: 'Ngay dưới **Khung hình** có hai lựa chọn quyết định **ai nghe và ai chọn**: **Model nghe** — **Nhanh (tiny)**, **Cân bằng (base)** hoặc **Kỹ (medium)** — và **Ai chọn đoạn** — **Máy tự chấm** (mặc định) hoặc **AI đọc lời thoại**. Cả hai nằm trên màn chính, không giấu trong mục Nâng cao.',
      },
      {
        p: 'Với phim tiếng Trung, model nhỏ thường nghe thành một câu lặp đi lặp lại. Đo trên một phim 45 phút: tiny, base và small đều lặp, chỉ **medium** đọc ra lời thoại thật — nên nếu kết quả toàn một câu, đổi **Model nghe** sang **Kỹ** rồi chạy lại. **AI đọc lời thoại** gửi lời thoại của các đoạn ứng viên cho nhà cung cấp đã cấu hình, xếp hạng lại và đặt tiêu đề cùng một câu lý do cho từng đoạn; chậm hơn và tốn một lượt gọi mỗi lần phân tích.',
      },

      { h2: 'Tìm và chọn đoạn' },
      {
        steps: [
          {
            title: 'Bấm Tìm highlight',
            body: 'Nút **Tìm highlight** bắt đầu phân tích. Nguồn chưa chọn thì app báo **Hãy chọn một file, hoặc tải lên.** hoặc **Hãy dán link video trước.**',
          },
          {
            title: 'Theo dõi, và chờ',
            body: 'Trong lúc chạy, màn hình hiện bước đang làm — đọc track âm thanh, tìm các khoảng lặng, phiên âm từng phần — kèm thời gian đã chạy và thời gian còn khoảng. Việc này mất hàng chục phút với phim dài.',
          },
          {
            title: 'Huỷ nếu đổi ý',
            body: 'Nút **Huỷ** nằm cạnh nút tìm. Lệnh huỷ không tức thì: app nói rõ **Huỷ có hiệu lực trong khoảng vài phút.**',
          },
          {
            title: 'Chọn đoạn muốn giữ',
            body: 'Xong thì khối **Chọn những đoạn muốn giữ** hiện ra: mỗi đoạn một thẻ có khung xem trước, mốc thời gian, **Độ mạnh** phần trăm, hộp tick **Lấy** và thanh **Vị trí cắt**. Bỏ tick những đoạn không cần; **Vị trí cắt** quyết định phần nào của khung ngang thành clip dọc. Bật **AI đọc lời thoại** thì mỗi thẻ có thêm tiêu đề và một câu lý do vì sao đoạn đó đáng lên — đọc mười hai thẻ là biết nên giữ cái nào, không phải mở từng clip.',
          },
          {
            title: 'Tạo các đoạn đã chọn',
            body: 'Bấm **Tạo các đoạn đã chọn** để cắt. Clip xong hiện trong khối **Các clip đã lồng tiếng**; nếu bạn chọn không lồng tiếng thì mỗi clip được ghi rõ **Đã cắt — không lồng tiếng**.',
          },
        ],
      },
      {
        check: 'Sau khi bấm **Tìm highlight** và chờ xong, khối **Chọn những đoạn muốn giữ** có ít nhất một thẻ có ảnh xem trước. Không có thẻ nào thì đọc mục dưới.',
      },
      {
        note: 'Nếu app báo đã phân tích xong mà **không có gì để cắt**, phần lớn trường hợp là đoán sai ngôn ngữ: nhạc, cảnh quay và im lặng không tính là highlight, còn video có tiếng nói thì phải nhận đúng ngôn ngữ mới nghe ra. Cách sửa nằm ngay trong câu báo — đặt **Ngôn ngữ nói trong video** ở mục **Nâng cao** rồi chạy lại. Đã đúng ngôn ngữ mà vẫn vậy thì đổi **Model nghe** sang **Kỹ (medium)**: model nhỏ nghe tiếng Trung hay lặp, và một bản ghi toàn câu lặp thì bộ lọc coi như không có ai nói.',
      },

      { h2: 'Chạy nền, và những gì bị dọn' },
      {
        p: 'Phân tích chạy ở phía sau chứ không buộc tab này mở: đóng tab đi thì nó vẫn chạy tiếp, và lúc quay lại màn hình đọc lại trạng thái. Nhưng nó **không chạy chồng**: bấm tìm trong lúc đang có một lượt phân tích thì app chặn ngay và nói rõ đang phân tích nguồn nào.',
      },
      {
        p: 'Khởi động lại app giữa chừng thì lượt phân tích đang chạy bị cắt. Chạy lại đúng file hoặc link đó sẽ **tiếp tục từ những phần đã xong** — phần đã phiên âm vẫn được giữ, không làm lại từ đầu.',
      },
      {
        p: 'Clip cắt ra không nằm lại mãi: màn này chỉ giữ **10 lượt phân tích gần nhất** và tự dọn thư mục làm việc của những lượt cũ. Dòng trong **Thư viện video** vẫn ở lại và được đánh dấu **file không còn**, kèm câu giải thích rằng màn hình cắt highlight tự dọn thư mục làm việc nên chuyện này bình thường.',
      },
      {
        note: 'Lúc cắt clip, tiến trình không nằm ở màn này: app báo đã xếp hàng bao nhiêu clip và chỉ sang tab **Lồng tiếng** để xem tiến trình. Muốn theo dõi thì mở màn đó, đừng đứng chờ ở đây.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'thu-vien-video' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/cat-highlight-01-screen-en.webp',
          alt: 'The Highlights screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Getting the film in' },
      {
        p: 'The sidebar calls this screen **Highlights**; the page itself is headed **Cut highlights from a long video**. The source is one long video — a film, a podcast, a stream — not a pile of clips.',
      },
      {
        steps: [
          {
            title: 'Pick a source under Source',
            body: 'Two answers: **Video link** or **File on this machine**.',
          },
          {
            title: 'Paste the link',
            body: 'Into **Video link** — one link, and that link is the whole long video. This field takes a single link rather than a list.',
          },
          {
            title: 'Or choose a file',
            body: 'Press **…or upload one** and pick the file. A film of several GB gets copied again into the app\'s working folder.',
          },
        ],
      },

      { h2: 'Setting the options' },
      {
        steps: [
          {
            title: 'How many, and how long',
            body: '**How many highlights** takes 1 to 12. **Seconds per clip** takes 10 to 90, in steps of five.',
          },
          {
            title: 'The frame',
            body: '**Clip shape** is **Portrait 9:16**, **Landscape 16:9** or **Original frame**, which keeps the source\'s own shape.',
          },
          {
            title: 'Dub, or only cut',
            body: 'The first option under **Dub with** is **No dubbing — just cut the clips**; that one has nothing to translate and needs no voice. Choosing an engine instead brings up **Dub into** and **Voice** to fill in.',
          },
          {
            title: 'Subtitles and a mark',
            body: 'Tick **Burn in subtitles** to have the subtitles drawn into the clip. The **Add text & logo** group picks a branding template — left at **None - leave the video alone**, the clip goes down the old path with no extra encode.',
          },
        ],
      },
      {
        p: '**Advanced — what counts as a highlight** hides the six sliders that decide which moments the app rates: **Loudness**, **Level changes**, **Cut rate**, **Talking**, **Speech pace**, **Agreement**. The same block holds **Spoken language in the video**, which starts at **Detect automatically**, and **Re-pick the moments**, which re-ranks the stored scores without analysing anything again.',
      },
      {
        p: 'Directly below **Clip shape** are the two choices that decide **who listens and who chooses**: **Listening model** — **Fast (tiny)**, **Balanced (base)** or **Accurate (medium)** — and **Who picks the moments** — **This machine** (the default) or **AI reads the dialogue**. Both sit on the main screen rather than inside Advanced.',
      },
      {
        p: 'On Chinese footage the small models often hear one phrase over and over. Measured on a 45-minute drama: tiny, base and small all looped, and only **medium** read real dialogue — so if the result is the same sentence repeated, switch **Listening model** to **Accurate** and run it again. **AI reads the dialogue** sends the candidates’ lines to the provider set in Config, ranks them again and gives each one a title and a one-line reason; it is slower and costs one request per analysis.',
      },

      { h2: 'Finding the moments, and choosing' },
      {
        steps: [
          {
            title: 'Press Find highlights',
            body: 'With no file chosen the app answers **Choose a file, or upload one.**; with no link, **Paste a video link first.**',
          },
          {
            title: 'Watch it, and wait',
            body: 'While it runs the screen names the step it is on — reading the audio track, locating silences, transcribing a stretch at a time — with the time elapsed and the time left. On a long film this takes tens of minutes.',
          },
          {
            title: 'Cancel if you change your mind',
            body: '**Cancel** sits beside the find button. It is not instant, and the app says so: **Cancel takes effect within a couple of minutes.**',
          },
          {
            title: 'Pick the moments to keep',
            body: 'When it lands, **Pick the moments to keep** fills in: each moment is a card with a preview frame, its time span, its **Strength** as a percentage, an **Include** tick box and a **Crop position** slider. Untick what you do not want — the crop slider decides which part of the wide frame becomes the vertical clip. With **AI reads the dialogue** on, each card also carries a title and a one-line reason, so twelve cards can be judged without opening twelve clips.',
          },
          {
            title: 'Create the selected clips',
            body: '**Create the selected clips** does the cutting. Finished clips appear under **The dubbed clips**; if you chose no dubbing, each one is marked **Cut — not dubbed**.',
          },
        ],
      },
      {
        check: 'After **Find highlights** has finished, **Pick the moments to keep** holds at least one card with a preview frame. If it holds none, read the note below.',
      },
      {
        note: 'When it reports that there is **nothing to cut**, the usual cause is a wrong language guess: music, scenery and silence are not highlights, and a video with speech only reads as speech in the right language. The fix is in that same message — set **Spoken language in the video** under **Advanced** and run it again. If the language is right and it still happens, move **Listening model** to **Accurate (medium)**: the small models loop on Chinese, and a transcript of nothing but loops reads as nobody speaking.',
      },

      { h2: 'Running in the background, and what gets cleared' },
      {
        p: 'The analysis runs behind the page rather than requiring the tab to stay open: close it and the work carries on, and coming back reads the state again. It does **not** run two at a time, though — asking for a second analysis while one is going is refused on the spot, with the source it is already working on named.',
      },
      {
        p: 'Restarting the app cuts an analysis that is mid-flight. Running the same file or link again **carries on from the parts that finished** — the transcribed stretches are kept rather than redone.',
      },
      {
        p: 'Cut clips do not stay forever: this screen keeps only the **ten most recent analyses** and clears the working folders of the older ones. The row in the **Video library** stays where it was, marked **file is gone**, with the note that the highlight screen clears its own working folder and this is expected.',
      },
      {
        note: 'The cutting does not report its progress here: the app says how many clips are queued and points at the **Translate** screen for the progress. Open that screen rather than waiting on this one.',
      },

      { h2: 'What next' },
      { link: 'thu-vien-video' },
    ],
  },
};

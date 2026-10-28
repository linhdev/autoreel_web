/**
 * Tóm tắt phim — a whole film in, one narrated story out.
 *
 * The screen is the recap pipeline's face: it reads the film, writes a
 * Vietnamese narration, matches shots to the narration, speaks it, cuts and
 * joins the picture, burns subtitles and applies the branding template. The
 * labels here are the screen's own keys from `translations.py`
 * (`recap.seconds`, `recap.source_language`, `recap.burn_subtitles`, …), and
 * the limits are the screen's, not prose: twelve films a run, target lengths
 * 1–10 minutes.
 *
 * The one thing the page has to make plain is that the target length is a
 * **ceiling**: a 40-minute film cut to five minutes is a different job from a
 * 40-minute film whose narration only fills three, and the app says so with a
 * warning rather than refusing.
 */
export default {
  key: 'tom-tat-phim',
  group: 'make',
  slug: { vi: 'tom-tat-phim', en: 'movie-recap' },
  updated: '2026-10-21',
  order: 3,
  title: { vi: 'Tóm tắt phim', en: 'Movie recap' },
  description: {
    vi: 'Đưa một hoặc nhiều phim: app nghe lời thoại, viết lời bình tiếng Việt, cắt hình, lồng tiếng, thêm phụ đề và đóng dấu — mỗi phim một video.',
    en: 'Give it one film or several: it listens to the dialogue, writes a Vietnamese narration, cuts and voices it, adds subtitles — one video per film.',
  },
  lead: {
    vi: 'Một bộ phim vào, **một câu chuyện kể lại** ra. Độ dài bạn chọn là mức **tối đa**, không phải con số phải đạt.',
    en: 'One film in, **one retold story** out. The length you choose is a **ceiling**, not a number the video has to reach.',
  },

  body: {
    vi: [
      {
        figure: {
          src: {
            vi: '/docs-img/tom-tat-phim-01-screen-vi.webp',
            en: '/docs-img/tom-tat-phim-01-screen-en.webp',
          },
          alt: {
            vi: 'Màn Tóm tắt phim trong AutoReel',
            en: 'The Movie recap screen in AutoReel',
          },
          caption: {
            vi: 'Màn **Tóm tắt phim**: ô **Link phim** và **File phim** ở khối 1, cách làm ở khối 2, giọng đọc và template đóng dấu ở các khối dưới.',
            en: 'The **Movie recap** screen: **Film links** and **Film files** in the first block, the way it works in the second, then the voice and branding blocks below.',
          },
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Tóm tắt phim làm gì' },
      {
        p: 'Màn **Tóm tắt phim** nhận một hoặc nhiều phim — **Link phim** hoặc **File phim**. App nghe lời thoại, chia phim thành cảnh, hiểu mạch chuyện, rồi viết một lời bình tiếng Việt. Lời bình được khớp với cảnh, lồng giọng đọc, cắt và ghép hình, thêm phụ đề, và đóng dấu thương hiệu nếu bạn chọn template.',
      },
      {
        p: 'Mỗi phim ra **một video riêng**. Video nằm trong khối **Kết quả** dưới dạng thẻ, và cũng có một dòng trong **Thư viện video**.',
      },
      {
        note: '**Độ dài đích là mức tối đa.** Phim ít thoại hoặc nhịp chậm có thể ra video ngắn hơn mức bạn chọn; app vẫn dựng và ghi cảnh báo thay vì dừng lại.',
      },

      { h2: 'Đưa phim vào' },
      {
        p: 'Hai ô nguồn nhận **tối đa 12 phim** một lượt: **Link phim** dán mỗi dòng một link, và **File phim** kéo thả hoặc bấm chọn nhiều file. Link và file được cộng lại theo thứ tự; quá 12 thì app chỉ nhận 12 phim đầu và báo rõ.',
      },
      {
        steps: [
          {
            title: 'Dán link hoặc chọn file',
            body: '**Link phim** nhận nhiều dòng. **File phim** nhận nhiều file một lần. Một phim có thể là một link, hoặc một file đã có trên máy.',
          },
          {
            title: 'Bật Theo series nếu các phim cùng một bộ',
            body: 'Tick **Theo series — mỗi phim một dòng chữ riêng**. Bảng hiện ra thay cho hai ô chữ chung. Mỗi dòng là một phim, với **Chữ trên** và **Chữ dưới** sửa được riêng.',
          },
          {
            title: 'Điền bảng từ danh sách phim',
            body: 'Gõ **Tên phim (chữ trên)** và **Mẫu chữ dưới** — ví dụ **Tập {n}** — rồi bấm **Điền vào bảng**. Số thứ tự khớp với thứ tự link và file. Bảng chỉ dùng được khi đã chọn một template đóng dấu.',
          },
        ],
      },

      { h2: 'Đặt cách làm' },
      {
        table: {
          head: ['Mục', 'Nhận gì', 'Ghi chú'],
          rows: [
            ['**Độ dài đích**', '1, 2, 3, 5 hoặc 10 phút', 'Là mức tối đa; video có thể ngắn hơn'],
            ['**Model nghe**', '**Cân bằng** hoặc **Kỹ (chậm hơn)**', 'Kỹ nghe được nhiều hơn và chạy lâu hơn'],
            ['**Ngôn ngữ lời thoại**', '**Tự nhận biết** hoặc một ngôn ngữ', 'Chọn tay khi phim mở bằng nhạc hoặc credit ở ngôn ngữ khác'],
            ['**Engine**', 'Vieneu, ZeroTTS hoặc Edge', 'Danh sách giọng đổi theo engine'],
            ['**Tên giọng**', 'Mặc định của engine, hoặc một giọng cụ thể', 'Engine local và Edge đặt tên giọng khác nhau'],
            ['**Tốc độ đọc**', '0,5× đến 2×', 'Áp cho toàn bộ lời bình'],
            ['**Phong cách**', '**Trung tính** hoặc **Kịch tính**', 'Đổi giọng điệu của lời bình'],
            ['**Khung hình**', '**9:16 dọc**, **16:9 ngang**, **Nguyên bản**', 'Khung của video cuối'],
            ['**Thêm Phụ Đề**', 'Bật hoặc tắt', 'Phụ đề cháy vào hình, theo đúng khung đã chọn'],
            ['**Âm thanh gốc dưới lời bình**', '0 đến 1', '0 là im; 0,12 giữ không khí của phim'],
          ],
        },
      },
      {
        p: 'Khối **Giọng đọc** đặt ngay dưới phần cách làm: chọn engine trước, rồi chọn giọng trong danh sách của chính engine đó. **Mặc định của engine** là lựa chọn an toàn nhất khi bạn chưa quen tên giọng.',
      },

      { h2: 'Chạy và xem kết quả' },
      {
        steps: [
          {
            title: 'Bấm Bắt đầu',
            body: 'Mỗi phim thành một dự án riêng. Nếu đang có lượt chạy khác, bấm **Dừng** trước — nút Bắt đầu sẽ tắt cho tới khi lượt cũ dừng hẳn.',
          },
          {
            title: 'Theo dõi tiến trình',
            body: 'Danh sách bước chạy từ **Nguồn**, **Nghe**, **Cảnh**, **Mạch chuyện**, **Lời bình**, **Khớp cảnh**, **Giọng đọc**, **Cắt hình**, **Phụ đề**, **Đóng dấu** tới **Hoàn tất**. Phim đã có kết quả từ lần chạy trước được đánh dấu **dùng lại** thay vì làm lại.',
          },
          {
            title: 'Mở thẻ trong Kết quả',
            body: 'Mỗi thẻ có trạng thái, tên phim lấy từ lời bình, và file **final.mp4** để tải về. Phim lỗi có câu giải thích ngay trên thẻ.',
          },
          {
            title: 'Sửa dòng thời gian nếu cần',
            body: 'Bảng **Dòng thời gian** cho sửa **Lời bình**, **Từ (giây)** và **Đến (giây)** của từng đoạn. Đổi lời bình thì đoạn đó được lồng tiếng lại; đổi khoảng nguồn thì đoạn đó được cắt lại. Bấm **Lưu và dựng lại** để dựng bản mới, **Tải lại** để đọc lại bảng từ đĩa.',
          },
        ],
      },
      {
        check: 'Một lượt chạy xong có ít nhất một thẻ trong **Kết quả**, và thẻ đó có file **final.mp4** tải được. Bảng **Dòng thời gian** có cùng số đoạn với lời bình đã viết.',
      },

      { h2: 'Những chỗ dễ mắc' },
      {
        table: {
          head: ['Hiện tượng', 'Nghĩa là'],
          rows: [
            ['**Chỉ nhận 12 phim đầu tiên trong lượt này.**', 'Link và file cộng lại quá 12. Chạy thêm lượt thứ hai'],
            ['**Hãy chọn phim trước.**', 'Cả hai ô nguồn đang trống'],
            ['**Hãy chọn template đóng dấu trước khi dùng chữ theo series.**', 'Bật series nhưng chưa chọn template ở khối Chèn chữ & logo'],
            ['**Video ngắn hơn độ dài đích**', 'Lời bình chỉ đủ dài chừng đó. Đây là cảnh báo, không phải lỗi'],
            ['**Nghe nhầm tiếng**', 'Đặt **Ngôn ngữ lời thoại** đúng thay vì **Tự nhận biết**, rồi chạy lại'],
            ['**Dừng giữa lượt**', 'Phần đã xong được giữ lại; chạy lại sẽ dùng lại các bước đã có kết quả'],
          ],
        },
      },
      {
        note: 'Chỉ dùng phim bạn sở hữu, đã mua, hoặc phim công cộng. AutoReel không có tính năng né kiểm tra bản quyền và không xoá dấu bản quyền. Bạn chịu trách nhiệm về nội dung mình đăng.',
      },

      { h2: 'Việc tiếp theo' },
      {
        p: 'Muốn cắt những đoạn ngắn từ chính bộ phim thay vì kể lại cả phim, dùng màn **Cắt highlight**. Muốn biến một video review dài thành nhiều clip, dùng **Luồng review**.',
      },
      { link: 'cat-highlight' },
      { link: 'luong-review' },
    ],

    en: [
      {
        figure: {
          src: {
            vi: '/docs-img/tom-tat-phim-01-screen-vi.webp',
            en: '/docs-img/tom-tat-phim-01-screen-en.webp',
          },
          alt: {
            vi: 'Màn Tóm tắt phim trong AutoReel',
            en: 'The Movie recap screen in AutoReel',
          },
          caption: {
            vi: 'Màn **Tóm tắt phim**: ô **Link phim** và **File phim** ở khối 1, cách làm ở khối 2, giọng đọc và template đóng dấu ở các khối dưới.',
            en: 'The **Movie recap** screen: **Film links** and **Film files** in the first block, the way it works in the second, then the voice and branding blocks below.',
          },
          width: 1193,
          height: 700,
        },
      },
      { h2: 'What movie recap does' },
      {
        p: 'The **Movie recap** screen takes one film or several — **Film links** or **Film files**. The app listens to the dialogue, splits the film into shots, follows the story, and writes a Vietnamese narration. The narration is matched to shots, voiced, cut and joined, given subtitles, and branded if you chose a template.',
      },
      {
        p: 'Each film becomes **its own video**. The video appears in the **Result** block as a card, and also as a row in the **Video library**.',
      },
      {
        note: '**The target length is a ceiling.** A film with little dialogue or a slow pace can come out shorter than the length you chose; the app still renders it and raises a warning instead of stopping.',
      },

      { h2: 'Bringing the films in' },
      {
        p: 'The two source boxes take **up to 12 films** per run: **Film links** takes one link per line, and **Film files** takes several files dropped or picked at once. Links and files are counted together in order; past 12 the app takes the first 12 and says so.',
      },
      {
        steps: [
          {
            title: 'Paste links or choose files',
            body: '**Film links** takes several lines. **Film files** takes several files in one go. A film is either a link or a file already on this machine.',
          },
          {
            title: 'Turn on Series when the films are one show',
            body: 'Tick **Series — a different line for each film**. The table replaces the two shared text boxes. Every row is one film, with its own editable **Top line** and **Bottom line**.',
          },
          {
            title: 'Fill the table from the film list',
            body: 'Type the **Series title (top line)** and the **Bottom line pattern** — for example **Episode {n}** — then press **Fill the table**. The row number follows the order of links and files. The table needs a branding template to be chosen first.',
          },
        ],
      },

      { h2: 'Setting how it is made' },
      {
        table: {
          head: ['Field', 'Takes', 'Note'],
          rows: [
            ['**Target length**', '1, 2, 3, 5 or 10 minutes', 'A ceiling; the video may be shorter'],
            ['**Listening model**', '**Balanced** or **Careful (slower)**', 'Careful hears more and runs longer'],
            ['**Spoken language**', '**Detect automatically** or one language', 'Pick it by hand when a film opens with music or credits in another language'],
            ['**Engine**', 'Vieneu, ZeroTTS or Edge', 'The voice list changes with the engine'],
            ['**Voice name**', 'The engine default, or one voice', 'Local engines and Edge name their voices differently'],
            ['**Reading speed**', '0.5× to 2×', 'Applies to the whole narration'],
            ['**Tone**', '**Calm** or **Dramatic**', 'Changes the narration delivery'],
            ['**Frame**', '**9:16 vertical**, **16:9 horizontal**, **Original frame**', 'The shape of the finished video'],
            ['**Add subtitles**', 'On or off', 'Burned into the picture, in the chosen frame'],
            ['**Source sound under the narration**', '0 to 1', '0 is silent; 0.12 keeps the film’s atmosphere'],
          ],
        },
      },
      {
        p: 'The **Voice** block sits under the settings: choose the engine first, then a voice from that engine’s own list. **Engine default** is the safest choice when the voice names are unfamiliar.',
      },

      { h2: 'Running it and reading the result' },
      {
        steps: [
          {
            title: 'Press Start',
            body: 'Every film becomes a project of its own. If another run is going, press **Stop** first — Start stays off until the old run has actually exited.',
          },
          {
            title: 'Watch the progress',
            body: 'The steps run from **Source**, **Listening**, **Shots**, **Story**, **Narration**, **Matching**, **Voice**, **Cutting**, **Subtitles**, **Branding** to **Finishing**. A film already finished by an earlier run is marked **reused** instead of being made again.',
          },
          {
            title: 'Open the cards under Result',
            body: 'Each card carries its state, a title taken from the narration, and the **final.mp4** file to download. A failed film says why on its own card.',
          },
          {
            title: 'Edit the timeline if needed',
            body: 'The **Timeline** table lets you edit **Narration**, **From (s)** and **To (s)** for each segment. Changing the words speaks that segment again; changing the range cuts it again. Press **Save and render** to build the new version, **Reload** to read the table back from disk.',
          },
        ],
      },
      {
        check: 'A finished run leaves at least one card under **Result**, and that card has a downloadable **final.mp4**. The **Timeline** table has as many segments as the narration it wrote.',
      },

      { h2: 'Where it usually goes wrong' },
      {
        table: {
          head: ['What you see', 'What it means'],
          rows: [
            ['**Only the first 12 films in this press are taken.**', 'Links and files add up to more than 12. Run a second press'],
            ['**Choose a film first.**', 'Both source boxes are empty'],
            ['**Choose a branding template before using series lines.**', 'Series is on but no template is chosen in Text and logo overlay'],
            ['**The video is shorter than the target**', 'The narration only fills that much. This is a warning, not a failure'],
            ['**The wrong language was heard**', 'Set **Spoken language** instead of **Detect automatically**, then run again'],
            ['**Stopped halfway**', 'Finished stages are kept; running again reuses every checkpoint it finds'],
          ],
        },
      },
      {
        note: 'Only use a film you own, bought, or that is in the public domain. AutoReel has no feature that avoids copyright checks and does not remove copyright marks. You are responsible for what you publish.',
      },

      { h2: 'What to do next' },
      {
        p: 'To cut short moments out of the film instead of retelling all of it, use the **Highlights** screen. To turn one long review video into several clips, use the **Review flow**.',
      },
      { link: 'cat-highlight' },
      { link: 'luong-review' },
    ],
  },
};

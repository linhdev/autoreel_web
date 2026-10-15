/**
 * Chèn chữ & logo — the screen where a mark is designed, and the small group
 * four other screens borrow to use one.
 *
 * The app's own one-sentence description is the spine of this page
 * (`brand.subtitle`): pad to 9:16, two lines of text, a name or a logo in the
 * corner, one ffmpeg pass, sound copied rather than re-encoded. Everything
 * named is read off `translations.py` — `brand.sec_source` … `brand.sec_preview`
 * for the blocks, `brand.run` for the button, and the five progress steps
 * `brand.step_read` … `brand.step_export`.
 *
 * "None" is not a formality here: `brand.none_option` and the two lines that
 * explain it (`brand.step_hint`, `brand.step_off`) all say the same thing, that
 * nothing is drawn and nothing is encoded, which is why the default is left
 * alone.
 */
export default {
  key: 'chen-chu-va-logo',
  group: 'rework',
  slug: { vi: 'chen-chu-va-logo', en: 'branding' },
  updated: '2026-10-15',
  order: 4,
  title: { vi: 'Chèn chữ & logo', en: 'Adding text and logos' },
  description: {
    vi: 'Đóng dấu chữ và logo lên video: 13 template dựng sẵn, hai dòng chữ, màu và font, logo ở góc, xem trước bằng khung hình thật rồi đóng dấu.',
    en: 'Stamp text and a logo onto a video: 13 ready-made templates, two lines of text, colours and fonts, a logo in the corner, a real-frame preview, then apply it.',
  },
  lead: {
    vi: '**Một lượt ffmpeg**: vẽ hai dòng chữ và tên kênh hoặc logo lên video, theo đúng tỷ lệ của video đó. Tiếng được sao chép nguyên chứ không encode lại.',
    en: '**One ffmpeg pass**: draw two lines of text and a name or a logo onto a video, at the video’s own shape. The sound is copied rather than re-encoded.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/chen-chu-va-logo-01-screen-vi.webp',
          alt: 'Màn Chèn chữ & logo trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Hai chỗ để chèn' },
      {
        p: 'Có hai chỗ làm việc này, và chúng khác nhau ở mức độ:',
      },
      {
        ul: [
          '**Màn này** — **Chèn chữ & logo** trong sidebar — là chỗ thiết kế dấu: chọn template, gõ chữ, chọn logo, chỉnh cỡ và font, xem trước bằng khung hình thật.',
          '**Bốn màn khác** có sẵn một khối nhỏ cũng tên **Chèn chữ & logo** để dùng lại dấu đó ngay trong lượt chạy của chúng: **Lồng tiếng**, **Cắt highlight**, **Xoá logo** và **Luồng reup**. Khối đó chỉ có ô **Template đóng dấu**, **Chữ trên** và **Chữ dưới**.',
        ],
      },
      {
        p: 'Ở cả hai chỗ, lựa chọn mặc định là **Không — giữ nguyên video**: không có gì được vẽ, không encode thêm lần nào và không tạo file mới. Video đi thẳng đường cũ.',
      },

      { h2: 'Bốn khối, theo thứ tự' },
      {
        steps: [
          {
            title: 'Video nguồn',
            body: 'Ô **Video** có hai lựa chọn: **Tải lên** để chọn file trên máy, hoặc **Dán link** rồi dán vào ô **Link video** (mỗi dòng một link). Ô bên cạnh đếm số video đã chọn — **chưa chọn video nào** là chưa có gì.',
          },
          {
            title: 'Template',
            body: 'Ô **Template đóng dấu** có **Không — giữ nguyên video** đứng đầu, rồi **13 template**: Viral Movie, Affiliate, News, Review, TikTok, Flash Sale, Trailer, Podcast, Điện ảnh, Tối giản, Hiện đại, Hợp phụ đề và Bán hàng. Thư viện bên dưới vẽ từng template thành một khung để bạn nhìn trước — và mỗi khung vẽ **bằng chính chữ mẫu của template đó**, nên nhìn là biết ngay look đó chữ to nhỏ, đặt trên hay dưới, có nền hay không.',
          },
          {
            title: 'Chữ, logo và màu',
            body: 'Khối **Chữ, logo và màu**: gõ **Chữ trên** và **Chữ dưới** — hai ô này **đã điền sẵn chữ mẫu của template đang chọn**, cứ thế sửa lại theo ý mình. Xoá trắng một ô thì template **không vẽ dòng đó**, chứ không phải vẽ chữ mẫu. Ô **Logo / watermark** chọn **Chữ** — gõ tên vào **Tên hiện** — hoặc **Ảnh** — chọn **Tệp logo**. Ô **Vị trí** đặt nó vào **Trái trên**, **Phải trên**, **Trái dưới** hoặc **Phải dưới**.',
          },
          {
            title: 'Màu cho template',
            body: 'Mở **Màu cho template**: mỗi ô màu **bắt đầu bằng màu gốc của chính template đó**, và app chỉ hiện những ô mà template này thật sự vẽ (template không có dải nền thì không có ô màu dải). Đổi màu nào cũng được; nút **Về mặc định của template** trả hết về màu gốc, kể cả hai dòng chữ.',
          },
          {
            title: 'Cỡ, màu và font',
            body: 'Mở accordion **Cỡ, màu và font** để chỉnh **Màu nền**, **Font**, **Cỡ** và **Độ mờ**.',
          },
          {
            title: 'Xem trước',
            body: 'Khối **Xem trước** dựng khung bên trái bằng CSS: nó đổi ngay khi bạn gõ, theo đúng tỉ lệ của video.',
          },
        ],
      },
      {
        check: 'Khung xem trước vẽ đúng template đang chọn và đổi ngay khi bạn gõ chữ. Khung trống với dòng **Chọn một video và một template để xem khung.** nghĩa là còn thiếu một trong hai.',
      },
      {
        note: 'Ô **Font** ghi rõ từng font có **đủ dấu** hay **thiếu dấu**. Font **thiếu dấu** không có chữ Việt, nên tiêu đề tiếng Việt sẽ ra ô vuông hoặc mất chữ. Khi tới lúc xuất mà font không vẽ được ký tự nào, app báo thẳng tên font, ký tự hỏng và dòng chữ nào.',
      },

      {
        figure: {
          src: '/docs-img/chen-chu-va-logo-03-chu-logo-mau-vi.webp',
          alt: 'Khối chữ, logo và màu — hai dòng chữ đã điền sẵn chữ mẫu của template',
          width: 1193,
          height: 560,
        },
      },

      { h2: 'Mười ba template, và chúng khác nhau ở chỗ nào' },
      {
        figure: {
          src: '/docs-img/chen-chu-va-logo-02-template-vi.webp',
          alt: 'Thư viện 13 template dựng sẵn trong màn Chèn chữ & logo',
          width: 1193,
          height: 620,
        },
      },
      {
        p: 'Một template không phải cái khung rỗng — nó là cả một look: chữ nằm ở đâu, cỡ bao nhiêu, màu gì, có nền hay không, có viền chữ hay không, dòng dưới đặt ở đâu. Chọn xong là xong, không phải tự canh.',
      },
      {
        ul: [
          '**Viral Movie** — phim/trailer: tiêu đề lớn trên nền tối, dòng nguồn ở dưới.',
          '**Affiliate** — bán hàng: nền vàng, dòng chốt đơn trên nền đỏ.',
          '**News** — tin tức: bảng đỏ trên, dòng nguồn dưới.',
          '**Review** — review: nền sáng, chữ đặt trên bảng trắng cho dễ đọc.',
          '**TikTok** — chữ trắng đổ bóng, không nền, hợp mọi khung hình.',
          '**Flash Sale** — flash sale: nền đỏ, dòng giảm giá trên bảng vàng.',
          '**Trailer** — tên phim trắng trên, ngày chiếu vàng dưới, mỗi dòng trên một panel đen.',
          '**Podcast** — chữ serif trên nền nâu đen, hợp câu trích dẫn.',
          '**Điện ảnh** — tên phim lớn màu ngà, dòng vàng kim ở dưới, viền đen giữ chữ đọc được trên mọi khung hình.',
          '**Tối giản** — chữ nhỏ, không nền, không huy hiệu.',
          '**Hiện đại** — tiêu đề lớn, một khối vàng ôm dòng dưới.',
          '**Hợp phụ đề** — dòng chữ cùng cỡ với phụ đề, nằm ngay trên dải phụ đề cháy sẵn.',
          '**Bán hàng** — nhãn đỏ trên, tên và giá trên nền trắng, nằm trên dải chú thích của nền tảng.',
        ],
      },
      {
        note: '**Khung ra đúng tỷ lệ của video, không phải 9:16 ép sẵn.** Video 16:9 đóng dấu xong vẫn là 16:9, hình phủ kín khung, không thêm dải nào. Chữ và lề tự co theo chiều cao khung, nên look giữ nguyên tỷ lệ trên mọi hình dạng video.',
      },
      {
        note: 'Không template nào vẽ chữ bạn chưa gõ. Ô **Chữ trên** và **Chữ dưới** điền sẵn chữ mẫu để bạn thấy ngay look đó trông thế nào — xoá trắng là dòng đó biến mất khỏi video.',
      },

      { h2: 'Hai khung xem trước, đừng lẫn' },
      {
        figure: {
          src: '/docs-img/chen-chu-va-logo-04-xem-truoc-vi.webp',
          alt: 'Khối Xem trước — khung dựng bằng CSS, đổi ngay khi gõ',
          width: 1193,
          height: 520,
        },
      },
      {
        p: 'Khung bên trái là CSS — nhanh, đổi theo từng phím gõ, nhưng không phải thứ ffmpeg sẽ vẽ. Nút **Xem bằng khung hình thật** dựng một khung thật qua đúng filter graph dùng khi xuất, nên nó mới là thứ trả lời được câu hỏi chữ rơi vào đâu. Nút này chậm hơn, và chỉ chạy được khi đã chọn video và template.',
      },

      { h2: 'Đóng dấu và lấy kết quả' },
      {
        steps: [
          {
            title: 'Bấm Đóng dấu',
            body: 'Dòng tóm tắt ngay trên nút nói bạn sắp làm gì: bao nhiêu video, template nào, khoảng bao nhiêu giây. Chưa chọn video thì app báo **Chọn ít nhất một video trước đã.**',
          },
          {
            title: 'Theo dõi',
            body: 'Khối **Tiến trình** chạy năm bước cho mỗi video — **Đọc video**, **Dựng khung và nền**, **Vẽ chữ**, **Dán logo**, **Xuất file** — và đếm số video đã xong trên tổng số. Nút **Dừng** nằm ngay đó.',
          },
          {
            title: 'Nhận kết quả',
            body: 'Xong thì dòng cuối báo số video đã vào **Thư viện video**. Bản gốc vẫn còn trên đĩa: bản đã đóng dấu là kết quả của lượt này, không thay thế file cũ.',
          },
        ],
      },
      {
        check: 'Video trong Thư viện video mở lên có chữ và logo đúng như khung xem trước, và tiếng vẫn còn nguyên — bước xuất chỉ sao chép tiếng, không encode lại.',
      },
      {
        note: 'Hai chuyện nhỏ mà app tự xử lý và báo lại: chữ dài quá số dòng cho phép thì bị **cắt bớt**, và logo rộng hơn khung thì bị **thu nhỏ** lại cho vừa. Cả hai đều có dòng nhắc riêng, nên nếu thấy chữ bị cụt thì đó là lý do, không phải lỗi.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'thu-vien-video' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/chen-chu-va-logo-01-screen-en.webp',
          alt: 'The Add text & logo screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Two places to do this' },
      {
        p: 'There are two places this happens, and they differ in how much they let you decide:',
      },
      {
        ul: [
          '**This screen** — **Add text & logo** in the sidebar — is where the mark is designed: template, words, logo, size and font, and a preview built from a real frame.',
          '**Four other screens** carry a small group of the same name, **Add text & logo**, so the same idea can be used inside their own run: **Translate**, **Highlights**, **Remove logo** and **Reup flow**. That group holds only **Branding template**, **Top line** and **Bottom line**.',
        ],
      },
      {
        p: 'In both places the default is **None - leave the video alone**: nothing is drawn, no extra encode happens, and no new file is written. The video goes down the old path unchanged.',
      },

      { h2: 'Four blocks, in order' },
      {
        steps: [
          {
            title: 'Source video',
            body: '**Videos** has two answers: **Upload** to pick files from this machine, or **Paste links** into **Video links** (one link per line). The label beside it counts what you have picked — **no video chosen yet** means exactly that.',
          },
          {
            title: 'Template',
            body: '**Branding template** starts with **None - leave the video alone**, followed by **13 templates**: Viral Movie, Affiliate, News, Review, TikTok, Flash Sale, Trailer, Podcast, Cinematic, Minimal, Modern, With subtitles and Product. The gallery underneath draws each one so you can see it first — and each card is drawn **with that look’s own sample words**, so one glance tells you how big its type is, whether it sits top or bottom, and whether it has a ground behind it.',
          },
          {
            title: 'Text, logo and colour',
            body: 'In **Text, logo and colour**: **Top line** and **Bottom line** **arrive already filled with the chosen template’s own sample words** — edit them to say what you want. Emptying a box means the template **draws no line there**, rather than falling back to the sample. **Logo / watermark** is either **A name** — type it into **The name** — or **A picture** — choose a **Logo file**. **Position** puts it **Top left**, **Top right**, **Bottom left** or **Bottom right**.',
          },
          {
            title: 'Template colours',
            body: 'Open **Template colours**: every swatch **starts at that template’s own colour**, and only the parts this template actually draws are offered (a look with no band has no band colour to change). Change any of them; **Back to the template** puts every colour back, the two lines of words included.',
          },
          {
            title: 'Size, colour and font',
            body: 'Open **Size, colour and font** for **Background**, **Font**, **Size** and **Opacity**.',
          },
          {
            title: 'Preview',
            body: 'The **Preview** block builds the frame on the left in CSS: it changes as you type, at the proportions of the video.',
          },
        ],
      },
      {
        check: 'The preview frame shows the template you have chosen and changes as you type. An empty one reading **Choose a video and a template to see a frame.** means one of the two is missing.',
      },
      {
        note: '**Font** marks every font **all marks** or **missing marks**. A font that is missing marks has no Vietnamese letters, so a Vietnamese title comes out as empty boxes or drops characters. If a font cannot draw something at export time, the app names the font, the letters and the line they were on.',
      },

      {
        figure: {
          src: '/docs-img/chen-chu-va-logo-03-chu-logo-mau-en.webp',
          alt: 'The text, logo and colour block — both lines arrive filled with the template’s own sample',
          width: 1193,
          height: 560,
        },
      },

      { h2: 'Thirteen templates, and how they differ' },
      {
        figure: {
          src: '/docs-img/chen-chu-va-logo-02-template-en.webp',
          alt: 'The gallery of 13 ready-made templates on the Add text & logo screen',
          width: 1193,
          height: 620,
        },
      },
      {
        p: 'A template is not an empty frame — it is a whole look: where the words sit, how big they are, what colour, whether there is a ground behind them, whether the type has an outline, and where the second line goes. Pick one and you are done; there is nothing to line up by hand.',
      },
      {
        ul: [
          '**Viral Movie** — a big title on a dark band, with a source line below.',
          '**Affiliate** — a yellow ground, and the closing line on a red plate.',
          '**News** — a red tag on top, a source line below.',
          '**Review** — a light ground, with the words on white plates so they read.',
          '**TikTok** — white type with a shadow and no ground, which suits any frame.',
          '**Flash Sale** — a red ground, with the discount line on a yellow plate.',
          '**Trailer** — a white film title above and a yellow release date below, each on its own black panel.',
          '**Podcast** — serif type on a brown-black panel, made for a pulled quote.',
          '**Cinematic** — a large warm-white title with a gold line under it and a black outline that holds on any frame.',
          '**Minimal** — small type, no ground, no badge.',
          '**Modern** — a big title, with a yellow block around the line below it.',
          '**With subtitles** — a line the size of a subtitle, sitting just above the burned-in subtitle band.',
          '**Product** — a red tag on top and the name and price on white, above the platform’s caption rail.',
        ],
      },
      {
        note: '**The frame is the video’s own shape, not 9:16 forced on it.** A 16:9 video comes back 16:9 with the picture filling it and no bands added. The type and margins scale with the frame’s height, so the look keeps its proportions whatever shape the video is.',
      },
      {
        note: 'No template draws words you did not type. **Top line** and **Bottom line** arrive filled with the sample so you can see what the look does — empty one and that line is simply not drawn.',
      },

      { h2: 'Two preview frames, and the difference matters' },
      {
        figure: {
          src: '/docs-img/chen-chu-va-logo-04-xem-truoc-en.webp',
          alt: 'The Preview block — a frame built in CSS, changing as you type',
          width: 1193,
          height: 520,
        },
      },
      {
        p: 'The frame on the left is CSS — quick, updating on every keystroke, but not what ffmpeg will draw. **Draw a real frame** renders one real frame through the same graph the export runs, which makes it the one that can tell you where the words actually land. It is slower, and it needs both a video and a template chosen first.',
      },

      { h2: 'Applying it, and collecting the result' },
      {
        steps: [
          {
            title: 'Press Apply',
            body: 'The summary line above the button says what you are about to do: how many videos, which template, and roughly how many seconds. With nothing chosen the app answers **Choose at least one video first.**',
          },
          {
            title: 'Watch it run',
            body: '**Progress** walks five steps per video — **Read the video**, **Frame and background**, **Draw the text**, **Draw the logo**, **Export** — and counts finished videos against the total. **Stop** is right there.',
          },
          {
            title: 'Collect it',
            body: 'When it finishes, the last line reports how many videos went into the **Video library**. The original is still on disk: the marked file is this run\'s result, not a replacement for it.',
          },
        ],
      },
      {
        check: 'The video in the Video library opens with the words and the logo the preview showed, and the sound is intact — the export copies it rather than encoding it again.',
      },
      {
        note: 'Two small things the app handles and tells you about: text longer than the template allows is **truncated**, and a logo wider than the frame is **shrunk** to fit. Each gets its own line of notice, so a cut-off line of text is that, rather than a fault.',
      },

      { h2: 'What next' },
      { link: 'thu-vien-video' },
    ],
  },
};

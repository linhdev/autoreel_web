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
  updated: '2026-10-13',
  order: 4,
  title: { vi: 'Chèn chữ & logo', en: 'Adding text and logos' },
  description: {
    vi: 'Đóng dấu chữ và logo lên video: chọn template, hai dòng chữ, logo ở góc, xem trước bằng khung hình thật rồi đóng dấu.',
    en: 'Stamp text and a logo onto a video: pick a template, two lines of text, a logo in the corner, preview a real frame, then apply it.',
  },
  lead: {
    vi: '**Một lượt ffmpeg**: chèn khung 9:16, hai dòng chữ, tên kênh hoặc logo vào góc. Tiếng được sao chép nguyên chứ không encode lại.',
    en: '**One ffmpeg pass**: pad to 9:16, draw two lines of text, put a name or a logo in the corner. The sound is copied rather than re-encoded.',
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
            body: 'Ô **Template đóng dấu** có **Không — giữ nguyên video** đứng đầu, rồi tám template: Viral Movie, Affiliate, News, Review, TikTok, Flash Sale, Trailer, Podcast. Thư viện bên dưới vẽ từng template thành một khung 9:16 để bạn nhìn trước.',
          },
          {
            title: 'Chữ, logo và màu',
            body: 'Khối **Chữ, logo và màu**: gõ **Chữ trên** và **Chữ dưới** (để trống nếu không muốn dòng nào). Ô **Logo / watermark** chọn **Chữ** — gõ tên vào **Tên hiện** — hoặc **Ảnh** — chọn **Tệp logo**. Ô **Vị trí** đặt nó vào **Trái trên**, **Phải trên**, **Trái dưới** hoặc **Phải dưới**.',
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

      { h2: 'Hai khung xem trước, đừng lẫn' },
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
            body: '**Branding template** starts with **None - leave the video alone**, followed by eight templates: Viral Movie, Affiliate, News, Review, TikTok, Flash Sale, Trailer, Podcast. The gallery underneath draws each one as a 9:16 frame so you can see it first.',
          },
          {
            title: 'Text, logo and colour',
            body: 'In **Text, logo and colour**: fill **Top line** and **Bottom line** (leave either empty for none). **Logo / watermark** is either **A name** — type it into **The name** — or **A picture** — choose a **Logo file**. **Position** puts it **Top left**, **Top right**, **Bottom left** or **Bottom right**.',
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

      { h2: 'Two preview frames, and the difference matters' },
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

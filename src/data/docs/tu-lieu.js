/**
 * Tư liệu — the shelf the making screens draw their footage and music from.
 *
 * The screen is named **Tư liệu** in the sidebar and **Tư liệu** again as its
 * own heading, so there is nothing to reconcile here, unlike the other two
 * screens in this group.
 *
 * Two things are worth saying and neither is obvious from looking at it: the
 * name rule (letters without diacritics only) and the fact that a row added
 * from YouTube is a link rather than a file, which is why the download button
 * ignores it.
 */
export default {
  key: 'tu-lieu',
  group: 'store',
  slug: { vi: 'tu-lieu', en: 'assets' },
  updated: '2026-10-13',
  order: 2,
  title: { vi: 'Tư liệu', en: 'Assets' },
  description: {
    vi: 'Kho video nền, nhạc nền và ảnh dùng chung cho các màn dựng video: cách thêm, xem trước, xoá và tải file về.',
    en: 'The shared shelf of background video, music and images the making screens draw from: adding, previewing, deleting, downloading.',
  },
  lead: {
    vi: 'Kho này **không tạo ra gì cả**. Nó giữ nguyên liệu cho những màn khác dùng lại.',
    en: 'This library **makes nothing**. It keeps ingredients for other screens to use again.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/tu-lieu-01-screen-vi.webp',
          alt: 'Màn Tư liệu trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Kho này dùng để làm gì' },
      {
        p: 'Ba thứ nằm trong đây: **video nền**, **nhạc nền** và **ảnh**. Các màn dựng video đọc từ kho này — hai ô **Chọn video nền** và **Chọn nhạc nền** trên các màn đó lấy đúng những gì bạn thêm ở đây.',
      },
      {
        p: 'Thêm một lần, dùng cho nhiều video. File bạn tải lên từ máy được app giữ trong thư mục riêng của nó, nên xoá file gốc đi cũng không sao.',
      },
      {
        note: 'Kho này khác **Thư viện video**. Đây là **nguyên liệu** bạn đưa vào; Thư viện video là **thành phẩm** app tạo ra. Đừng đi tìm video đã dựng ở đây.',
      },

      { h2: 'Thêm tư liệu' },
      {
        p: 'Khối **Thêm tư liệu từ máy bạn hoặc từ YouTube** ở đầu màn. Ô **Thêm từ** có hai lựa chọn, và form đổi theo lựa chọn đó.',
      },
      {
        steps: [
          {
            title: 'Chọn nguồn',
            body: '**Thêm video / audio từ YouTube** nếu bạn có link, hoặc **Thêm video / audio / ảnh từ máy** nếu file nằm trên máy tính.',
          },
          {
            title: 'Đặt tên',
            body: 'Điền **Tên (bắt buộc)**. Tên này là cách các màn khác gọi tư liệu, nên đặt sao cho dễ nhớ.',
          },
          {
            title: 'Chọn Loại',
            body: '**Video nền**, **Nhạc nền** hoặc **Ảnh**. Chọn từ máy thì ô tải file đổi theo loại bạn vừa chọn — video, audio hay ảnh.',
          },
          {
            title: 'Dán link hoặc chọn file',
            body: 'Từ YouTube thì dán link vào ô **URL (https://youtube.com/xyz)**. Từ máy thì bấm vào ô tải file và chọn file.',
          },
          {
            title: 'Bấm THÊM',
            body: 'Nút **THÊM**. Tư liệu hiện ra trong bảng, và form tự gập lại.',
          },
        ],
      },
      {
        check: 'Tên vừa thêm có trong bảng bên dưới, và dòng **Xem trước** bên phải hiện được nó. Ảnh và video hiện khung hình; nhạc thì hiện trình phát.',
      },
      {
        note: '**Tên chỉ nhận chữ không dấu**, số, khoảng trắng, gạch dưới và gạch ngang. Tên đã có trong kho cũng bị từ chối — đổi tên khác rồi bấm **THÊM** lại.',
      },

      { h2: 'Xem, chọn và xoá' },
      {
        p: 'Bảng bên trái liệt kê mọi tư liệu đang có: tên, loại, đường dẫn và nguồn. Bấm một dòng để chọn, và khung **Xem trước** bên phải đổi theo dòng đó.',
      },
      {
        p: 'Nút **Xoá tư liệu đang chọn** xoá đúng tư liệu mà khung xem trước đang hiện. Xoá ở đây là xoá khỏi kho — và các video đã dựng bằng nó thì không bị ảnh hưởng.',
      },
      {
        note: 'Bấm **Xoá tư liệu đang chọn** mà tư liệu đã bị xoá ở nơi khác thì app trả lời **Tư liệu này không còn trong kho nữa. Tải lại trang rồi thử lại.**',
      },

      { h2: 'Tải file về' },
      {
        p: 'Nút **Tải các file về** gom tư liệu thành một file zip cho bạn giữ lại hoặc chuyển sang máy khác.',
      },
      {
        note: 'Tư liệu thêm từ YouTube **không phải file** — trong kho nó chỉ là một link. Nút tải bỏ qua những dòng đó, nên tải về chỉ có phần file thật.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'thu-vien-video' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/tu-lieu-01-screen-en.webp',
          alt: 'The Assets screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'What this library is for' },
      {
        p: 'Three kinds of thing live here: **background video**, **background music** and **images**. The making screens read from it — the **Chọn video nền** (choose background video) and **Chọn nhạc nền** (choose background music) boxes on those screens offer exactly what you added here.',
      },
      {
        p: 'Add it once and use it in many videos. Files you upload from your machine are kept inside the app\'s own folder, so deleting the original is safe.',
      },
      {
        note: 'This is not the **Thư viện video** (Video library). This one holds the **ingredients** you bring; that one holds the **finished videos** the app makes. Do not look for a rendered video here.',
      },

      { h2: 'Adding an asset' },
      {
        p: 'The **Thêm tư liệu từ máy bạn hoặc từ YouTube** block at the top of the screen. **Thêm từ** ("add from") has two choices, and the form changes with them.',
      },
      {
        steps: [
          {
            title: 'Choose the source',
            body: '**Thêm video / audio từ YouTube** if you have a link, or **Thêm video / audio / ảnh từ máy** if the file is on your computer.',
          },
          {
            title: 'Name it',
            body: 'Fill in **Tên (bắt buộc)** (name, required). This name is how the other screens refer to the asset, so make it memorable.',
          },
          {
            title: 'Choose a Loại',
            body: '**Video nền**, **Nhạc nền** or **Ảnh**. Adding from your machine, the file box changes with the type you pick — video, audio or image.',
          },
          {
            title: 'Paste a link or pick a file',
            body: 'From YouTube, paste into **URL (https://youtube.com/xyz)**. From your machine, click the file box and choose the file.',
          },
          {
            title: 'Press THÊM',
            body: 'The **THÊM** (add) button. The asset appears in the table and the form folds itself away.',
          },
        ],
      },
      {
        check: 'The name you added is in the table below, and the **Xem trước** preview on the right can show it — a frame for images and video, a player for music.',
      },
      {
        note: '**Names take unaccented letters only**, plus digits, spaces, underscores and hyphens. A name already in the library is refused too — pick another and press **THÊM** again.',
      },

      { h2: 'Looking, selecting, deleting' },
      {
        p: 'The table on the left lists everything in the library: name, type, path and source. Click a row to select it, and the **Xem trước** preview on the right follows that row.',
      },
      {
        p: 'The **Xoá tư liệu đang chọn** button deletes exactly the asset the preview is showing. Deleting here removes it from the library — videos already rendered with it are untouched.',
      },
      {
        note: 'Pressing **Xoá tư liệu đang chọn** on an asset that has already gone answers **Tư liệu này không còn trong kho nữa. Tải lại trang rồi thử lại.** ("no longer in the library — reload and try again").',
      },

      { h2: 'Downloading the files' },
      {
        p: 'The **Tải các file về** button gathers the assets into one zip, to keep or to move to another machine.',
      },
      {
        note: 'An asset added from YouTube **is not a file** — in the library it is only a link. The download skips those rows, so what you get is the real files only.',
      },

      { h2: 'What next' },
      { link: 'thu-vien-video' },
    ],
  },
};

/**
 * Thư viện video — the ledger of everything the app has finished.
 *
 * Everything named here was read off `gui/ui_tab_library.py` and
 * `translations.py` rather than guessed: the search box really is **Tìm
 * kiếm** and it really does wait for Enter, the two dropdowns really do fire
 * on change, and the table really stops at 200 rows.
 *
 * The screen deliberately has no clear button, which is worth one note: the
 * list is the whole point of the screen, so hiding it would leave nothing.
 */
export default {
  key: 'thu-vien-video',
  group: 'store',
  slug: { vi: 'thu-vien-video', en: 'video-library' },
  updated: '2026-10-13',
  order: 3,
  title: { vi: 'Thư viện video', en: 'Video library' },
  description: {
    vi: 'Mọi video đã dựng xong nằm ở đây: tìm theo tên, lọc theo loại, sắp xếp, xem trước, tải về và đưa thẳng sang màn đăng bài.',
    en: 'Every finished video lives here: search by name, filter by kind, sort, preview, download, and hand straight to a posting screen.',
  },
  lead: {
    vi: 'Đây là chỗ **duy nhất** để tìm lại một video đã dựng. Không có nó thì file nằm đâu đó trên đĩa mà bạn không biết đường.',
    en: 'This is the **only** place to find a rendered video again. Without it the file sits somewhere on disk with no way to know where.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/thu-vien-video-01-screen-vi.webp',
          alt: 'Màn Thư viện video trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Sổ ghi thành phẩm' },
      {
        p: 'Video app dựng xong đều về đây, không phân biệt màn nào làm ra nó. Màn này **không dựng gì và không sửa file** — nó liệt kê, tìm, xem trước và đưa file đi.',
      },
      {
        p: 'Cột **Thư mục** ghi đường dẫn **trên máy bạn**, không phải đường dẫn bên trong app. Mở đúng đường đó trong File Explorer là thấy file nằm đó.',
      },
      {
        note: 'Màn này **không có nút xoá file**. Muốn xoá thì xoá trong thư mục, rồi bấm **Làm mới** — dòng của nó sẽ được đánh dấu là file đã mất.',
      },

      { h2: 'Tìm và lọc' },
      {
        p: 'Một hàng bốn thứ: ô **Tìm kiếm**, ô **Loại video**, ô **Sắp xếp**, và nút **Làm mới**.',
      },
      {
        ul: [
          '**Tìm kiếm** nhận một phần tên file hoặc link nguồn. Ô này chỉ chạy khi bạn **bấm Enter**.',
          '**Loại video** để lọc: **Tất cả**, hoặc **Video ngắn**, **Video tự động**, **Lồng tiếng**, **Cắt highlight**, **Đã đóng dấu**, **Reup**, **Review**.',
          '**Sắp xếp**: **Mới nhất trước** (mặc định), **Cũ nhất trước**, hoặc **Tên file**.',
          '**Làm mới** đọc lại đĩa và dựng lại danh sách — dùng sau khi bạn vừa xoá hay chép file bằng tay.',
        ],
      },
      {
        check: 'Gõ vài chữ vào **Tìm kiếm** rồi bấm Enter: dòng đếm đổi thành **Đang hiện … trong … video** — số đang thấy trên tổng số — với đúng số bạn vừa lọc ra. Đổi **Loại video** hoặc **Sắp xếp** thì danh sách đổi ngay, không cần bấm gì.',
      },
      {
        note: 'Bảng chỉ vẽ **200 dòng** một lượt. Có nhiều hơn thì thu hẹp bằng **Tìm kiếm** hoặc **Loại video** — dòng đếm cho biết bạn đang xem bao nhiêu trong tổng bao nhiêu.',
      },

      { h2: 'Đọc bảng' },
      {
        p: 'Bốn cột: **Loại video**, **Tên file**, **Thư mục** và **Ngày tạo**.',
      },
      {
        p: 'File bị xoá hoặc bị chuyển đi khỏi đĩa thì dòng đó mang nhãn **file không còn**. Danh sách vẫn giữ dòng ấy — nó chỉ nói rằng file đã đi chỗ khác.',
      },
      {
        note: 'Lọc không ra gì thì bảng nói **Không có video nào khớp bộ lọc này.** Còn khi chưa dựng được video nào thì nó nói **Chưa tạo video nào**. Hai câu khác nhau cho hai chuyện khác nhau — câu thứ hai nghĩa là đi dựng video đã.',
      },

      { h2: 'Xem trước và tải về' },
      {
        p: 'Chọn một video ở ô **Video này** rồi bấm **Xem trước** để xem ngay trong trang, không cần mở file.',
      },
      {
        p: 'Nút **Tải tất cả** nén đúng những video **đang hiện** — nghĩa là sau khi đã lọc. Muốn tải cả kho thì để **Loại video** ở **Tất cả**, ô **Tìm kiếm** trống, và **Sắp xếp** thế nào cũng được.',
      },
      {
        note: 'Bấm **Xem trước** mà chưa chọn video nào thì app nhắc **Hãy chọn một video trong danh sách trước.**',
      },
      {
        note: 'Màn này không có nút **Xoá kết quả trên màn hình** như những màn khác. Danh sách chính là cả màn này, nên xoá đi thì không còn gì để xem — và tải về xong thì file vẫn nằm nguyên trong thư mục.',
      },

      { h2: 'Đưa thẳng sang màn đăng bài' },
      {
        p: 'Màn **Shopee** và màn **Facebook** có nút **Lấy từ thư viện video**. Nó lấy file từ đây xếp thẳng vào hàng đợi đăng bài, khỏi phải chọn file lại từ đầu.',
      },
      {
        note: 'Nút đó lấy **đường dẫn file**, không chép video sang chỗ khác. Dòng nào trong thư viện đã có nhãn **file không còn** thì đừng đưa sang — hàng đợi sẽ không có gì để đăng.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'dang-shopee' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/thu-vien-video-01-screen-en.webp',
          alt: 'The Video library screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'A ledger of finished work' },
      {
        p: 'Every video the app finishes lands here, whichever screen made it. This screen **renders nothing and edits nothing** — it lists, searches, previews and hands files over.',
      },
      {
        p: 'The **Thư mục** column records the path **on your machine**, not a path inside the app. Open exactly that path in your file browser and the file is there.',
      },
      {
        note: 'This screen has **no delete button**. To remove a file, delete it in the folder and press **Làm mới** ("refresh") — its row will be marked as a file that is gone.',
      },

      { h2: 'Searching and filtering' },
      {
        p: 'One row of four things: **Tìm kiếm**, **Loại video**, **Sắp xếp**, and the **Làm mới** button.',
      },
      {
        ul: [
          '**Tìm kiếm** (search) matches part of a file name or a source link. It only runs when you **press Enter**.',
          '**Loại video** filters by kind: **Tất cả** (all kinds), or **Video ngắn**, **Video tự động**, **Lồng tiếng**, **Cắt highlight**, **Đã đóng dấu**, **Reup**, **Review**.',
          '**Sắp xếp** (sort by): **Mới nhất trước** (the default), **Cũ nhất trước**, or **Tên file**.',
          '**Làm mới** re-reads the disk and rebuilds the list — for after you have deleted or copied files by hand.',
        ],
      },
      {
        check: 'Type a few characters into **Tìm kiếm** and press Enter: the count line changes to **Đang hiện … trong … video** — how many you are seeing out of how many there are — with the number you just filtered to. Changing **Loại video** or **Sắp xếp** changes the list at once, with nothing to press.',
      },
      {
        note: 'The table draws **200 rows** at a time. With more than that, narrow it with **Tìm kiếm** or **Loại video** — the count line says how many you are seeing out of how many there are.',
      },

      { h2: 'Reading the table' },
      {
        p: 'Four columns: **Loại video**, **Tên file**, **Thư mục** and **Ngày tạo** (kind, file name, folder, created).',
      },
      {
        p: 'A file that was deleted or moved off the disk gets the **file không còn** mark. The row stays in the list — it is only saying the file has gone elsewhere.',
      },
      {
        note: 'A filter with no matches says **Không có video nào khớp bộ lọc này.** When nothing has been made yet, the table says **Chưa tạo video nào**. Two different sentences for two different things — the second one means it is time to go and make a video.',
      },

      { h2: 'Previewing and downloading' },
      {
        p: 'Pick a video in the **Video này** list and press **Xem trước** to watch it in the page without opening the file.',
      },
      {
        p: 'The **Tải tất cả** button zips exactly the videos **currently shown** — that is, after filtering. To download everything, set **Loại video** to **Tất cả**, leave **Tìm kiếm** empty, and sort however you like.',
      },
      {
        note: 'Pressing **Xem trước** with nothing chosen answers **Hãy chọn một video trong danh sách trước.** ("choose a video from the list first").',
      },
      {
        note: 'This screen has no **Xoá kết quả trên màn hình** button like the others. The list is the whole screen, so clearing it would leave nothing to look at — and downloading a file leaves it in its folder either way.',
      },

      { h2: 'Straight into a posting screen' },
      {
        p: 'The **Shopee** and **Facebook** screens both carry a **Lấy từ thư viện video** button. It takes files from here straight into the posting queue, so nothing has to be picked from scratch.',
      },
      {
        note: 'That button takes the **file path**; it does not copy the video anywhere. Do not hand over a row marked **file không còn** — the queue would have nothing to post.',
      },

      { h2: 'What next' },
      { link: 'dang-shopee' },
    ],
  },
};

/**
 * Thư viện video — the ledger of everything the app has finished.
 *
 * Everything named here was read off `gui/ui_tab_library.py` and
 * `translations.py` rather than guessed: the search box really is **Tìm
 * kiếm** and it really does wait for Enter, the two dropdowns really do fire
 * on change, and the table pages at 50 rows.
 *
 * The screen deletes in two ways, both confirmed with a second press: the rows
 * ticked in the table, and everything the current filters match. Deleting a
 * row deletes the file on disk — that is the point, since this is where disk
 * space is cleared — and a file outside the app's videos folder is refused
 * rather than removed.
 */
export default {
  key: 'thu-vien-video',
  group: 'store',
  slug: { vi: 'thu-vien-video', en: 'video-library' },
  updated: '2026-10-21',
  order: 3,
  title: { vi: 'Thư viện video', en: 'Video library' },
  description: {
    vi: 'Mọi video đã dựng xong nằm ở đây: tìm theo tên, lọc theo loại, sắp xếp, xem trước, tải về, xoá để giải phóng dung lượng và đưa thẳng sang màn đăng bài.',
    en: 'Every finished video lives here: search by name, filter by kind, sort, preview, download, delete to free space, and hand straight to a posting screen.',
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
        p: 'Cột **Thư mục** ghi đường dẫn **trên máy bạn**, không phải đường dẫn bên trong app. **Bấm vào đường đó** để mở **trang thư mục**: danh sách file trong đúng thư mục ấy, kèm nút sao chép đường dẫn. App chạy trong Docker nên không mở được File Explorer trên máy bạn, và một liên kết file:/// bị trình duyệt chặn khi trang đến từ http:// — nên đây là cách mở thư mục chạy được ở mọi máy.',
      },
      {
        note: 'Màn này **xoá được file ngay trong danh sách**. Tick ô ở đầu mỗi dòng rồi bấm **Xoá mục đã chọn** — xem mục **Xoá video để giải phóng dung lượng** bên dưới. Xoá file bằng tay trong thư mục rồi bấm **Làm mới** cũng được: dòng của nó sẽ được đánh dấu **file không còn**.',
      },

      { h2: 'Tìm và lọc' },
      {
        p: 'Một hàng bốn thứ: ô **Tìm kiếm**, ô **Loại video**, ô **Sắp xếp**, và nút **Làm mới**.',
      },
      {
        ul: [
          '**Tìm kiếm** nhận một phần tên file hoặc link nguồn. Ô này chỉ chạy khi bạn **bấm Enter**.',
          '**Loại video** để lọc: **Tất cả**, hoặc **Video ngắn**, **Video tự động**, **Tóm tắt phim**, **Lồng tiếng**, **Cắt highlight**, **Đã đóng dấu**, **Reup**, **Review**.',
          '**Sắp xếp**: **Mới nhất trước** (mặc định), **Cũ nhất trước**, hoặc **Tên file**.',
          '**Làm mới** đọc lại đĩa và dựng lại danh sách — dùng sau khi bạn vừa xoá hay chép file bằng tay.',
        ],
      },
      {
        check: 'Gõ vài chữ vào **Tìm kiếm** rồi bấm Enter: dòng đếm đổi thành **Đang hiện … trong … video** — số đang thấy trên tổng số — với đúng số bạn vừa lọc ra. Đổi **Loại video** hoặc **Sắp xếp** thì danh sách đổi ngay, không cần bấm gì.',
      },
      {
        note: 'Bảng chia **50 dòng** một trang. Dưới bảng có **Trang trước**, **Trang sau** và dòng **Video 51–100 · trang 2/4** cho biết đang ở đâu. Đổi bộ lọc thì bảng quay về trang đầu — giữ số trang cũ thì một bộ lọc ra ít kết quả sẽ rơi vào trang trống và trông như không tìm thấy gì. Nút **Tải tất cả** vẫn gom **toàn bộ** kết quả của bộ lọc, không chỉ trang đang xem.',
      },

      { h2: 'Đọc bảng' },
      {
        p: 'Sáu cột: ô tick để chọn, **Loại video**, **Tên file**, **Dung lượng**, **Thư mục** và **Ngày tạo**. Cột **Loại video** là một nhãn màu để liếc nhanh; cột **Dung lượng** cho biết file nặng bao nhiêu; cột **Thư mục** bấm được; cột **Ngày tạo** canh số thẳng hàng.',
      },
      {
        p: 'File bị xoá hoặc bị chuyển đi khỏi đĩa thì dòng đó mang nhãn **file không còn**. Danh sách vẫn giữ dòng ấy — nó chỉ nói rằng file đã đi chỗ khác.',
      },
      {
        note: 'Lọc không ra gì thì bảng nói **Không có video nào khớp bộ lọc này.** Còn khi chưa dựng được video nào thì nó nói **Chưa tạo video nào**. Hai câu khác nhau cho hai chuyện khác nhau — câu thứ hai nghĩa là đi dựng video đã.',
      },

      { h2: 'Xoá video để giải phóng dung lượng' },
      {
        p: 'Đây là chỗ dọn đĩa: xoá ở đây là **xoá file thật trên ổ đĩa**, không chỉ ẩn khỏi danh sách. Có hai cách, và cả hai đều hỏi lại một lần trước khi xoá.',
      },
      {
        steps: [
          {
            title: 'Tick những video cần xoá',
            body: 'Ô tick nằm ở đầu mỗi dòng. Muốn chọn nhanh video cũ, đặt **Sắp xếp** thành **Cũ nhất trước** rồi tick từ trên xuống.',
          },
          {
            title: 'Bấm Xoá mục đã chọn',
            body: 'Lần bấm đầu **chưa xoá gì** — app hỏi lại số video và tổng dung lượng, ví dụ **Xoá 12 video đã chọn (3,4 GB)? Bấm Xoá mục đã chọn lần nữa để xác nhận.** Bấm lần thứ hai mới xoá.',
          },
          {
            title: 'Đọc dòng trạng thái',
            body: 'Xong, app báo **Đã xoá … video, giải phóng …** và dựng lại bảng. Dòng nào file đã mất từ trước cũng được dọn khỏi danh sách.',
          },
        ],
      },
      {
        note: '**Xoá tất cả đang lọc** xoá mọi dòng khớp bộ lọc hiện tại, không chỉ trang đang xem — hữu ích khi đã lọc theo loại hoặc theo từ khoá. Nếu để **Loại video** là **Tất cả** và ô **Tìm kiếm** trống, nút này xoá **cả thư viện**, và app cảnh báo đúng như vậy trước khi làm.',
      },
      {
        note: 'Video nằm **ngoài thư mục videos** của app sẽ được giữ lại và báo rõ — app không xoá file ở nơi khác trên máy bạn. File đang mở hoặc đang được dùng cũng có thể bị từ chối; đóng video rồi thử lại.',
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
        note: '**Tải tất cả không xoá gì** — file vẫn nằm trong thư mục và trong danh sách. Nút **Xoá kết quả trên màn hình** chỉ ẩn phần đang xem, không xoá file; muốn xoá file thật thì tick dòng rồi bấm **Xoá mục đã chọn**.',
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
        p: 'The **Thư mục** column records the path **on your machine**, not a path inside the app. **Click that path** to open the **folder page**: the files in that folder, with a button to copy the path. The app runs in Docker and cannot open Explorer on your machine, and a file:/// link is refused by browsers when the page came from http:// — so this is the version of "open the folder" that works everywhere.',
      },
      {
        note: 'This screen **can delete files from the list itself**. Tick the box at the start of a row and press **Delete selected** — see **Deleting videos to free space** below. Deleting a file by hand in its folder and pressing **Làm mới** ("refresh") still works too: its row gets the **file is gone** mark.',
      },

      { h2: 'Searching and filtering' },
      {
        p: 'One row of four things: **Tìm kiếm**, **Loại video**, **Sắp xếp**, and the **Làm mới** button.',
      },
      {
        ul: [
          '**Tìm kiếm** (search) matches part of a file name or a source link. It only runs when you **press Enter**.',
          '**Loại video** filters by kind: **Tất cả** (all kinds), or **Video ngắn**, **Video tự động**, **Tóm tắt phim**, **Lồng tiếng**, **Cắt highlight**, **Đã đóng dấu**, **Reup**, **Review**.',
          '**Sắp xếp** (sort by): **Mới nhất trước** (the default), **Cũ nhất trước**, or **Tên file**.',
          '**Làm mới** re-reads the disk and rebuilds the list — for after you have deleted or copied files by hand.',
        ],
      },
      {
        check: 'Type a few characters into **Tìm kiếm** and press Enter: the count line changes to **Đang hiện … trong … video** — how many you are seeing out of how many there are — with the number you just filtered to. Changing **Loại video** or **Sắp xếp** changes the list at once, with nothing to press.',
      },
      {
        note: 'The table pages at **50 rows**. Under it, **Trang trước** (previous) and **Trang sau** (next) sit beside a line like **Video 51–100 · trang 2/4** that says where you are. Changing a filter returns to page one — keeping the old page would drop a narrower result onto an empty page that looks like no match. **Tải tất cả** still gathers the **whole** filtered result, not just the page on screen.',
      },

      { h2: 'Reading the table' },
      {
        p: 'Six columns: a tick box to select a row, **Loại video**, **Tên file**, **Dung lượng** (size), **Thư mục** and **Ngày tạo** (kind, file name, size, folder, created). The kind is a coloured pill to scan by; size says how heavy the file is; the folder is a link; the date lines its digits up so a column of them can be read at a glance.',
      },
      {
        p: 'A file that was deleted or moved off the disk gets the **file không còn** mark. The row stays in the list — it is only saying the file has gone elsewhere.',
      },
      {
        note: 'A filter with no matches says **Không có video nào khớp bộ lọc này.** When nothing has been made yet, the table says **Chưa tạo video nào**. Two different sentences for two different things — the second one means it is time to go and make a video.',
      },

      { h2: 'Deleting videos to free space' },
      {
        p: 'This is the place to clear disk space: deleting here **removes the file from the disk**, not just from the list. There are two ways, and both ask once before they delete anything.',
      },
      {
        steps: [
          {
            title: 'Tick the videos to remove',
            body: 'The tick box is at the start of every row. To pick old videos quickly, set **Sắp xếp** to **Cũ nhất trước** ("oldest first") and tick from the top down.',
          },
          {
            title: 'Press Delete selected',
            body: 'The first press **deletes nothing** — the app repeats the count and the total size, for example **Delete 12 selected videos (3.4 GB)? Press Delete selected again to confirm.** Only the second press deletes.',
          },
          {
            title: 'Read the status line',
            body: 'When it finishes, the app says **Deleted … videos, freed …** and redraws the table. Rows whose file was already gone are cleared out too.',
          },
        ],
      },
      {
        note: '**Delete all filtered** removes every row the current filter matches, not just the page on screen — useful after filtering by kind or by a search term. With **Loại video** on **Tất cả** and the search box empty, it deletes **the whole library**, and the app warns you in exactly those terms first.',
      },
      {
        note: 'A video that lives **outside the app\'s videos folder** is kept and reported — the app will not delete files elsewhere on your machine. A file that is open or in use may also be refused; close the video and try again.',
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
        note: '**Download all deletes nothing** — the file stays in its folder and in the list. The **Xoá kết quả trên màn hình** button only hides what is on screen; to remove the file itself, tick its row and press **Delete selected**.',
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

/**
 * Tải video — the one screen whose whole job is the step every other screen
 * takes first.
 *
 * The screen says what it is in its own subtitle (`dl.subtitle`): paste links,
 * take the files, nothing is edited. That sentence is the spine of this page,
 * and the reason the page exists is the same reason the screen does —
 * translation wants a language and a voice before it will move, and a flow
 * wants a chain, so neither will hand over a file on its own.
 *
 * Everything named here is read off `translations.py`: `dl.urls`, `dl.folder`,
 * `dl.height`, `dl.run`, `dl.cancel`, the empty state (`dl.empty_title`,
 * `dl.empty_body`), the two lines above the grid (`dl.running`, `dl.done`,
 * `dl.failed_note`) and the shared take-away row (`dl.all`, `dl.clear`,
 * `dl.ready`). The six platforms in the table are the six lines of the box's
 * own placeholder (`gui/ui_tab_download.py`), which is where a person finds
 * out what the box takes.
 *
 * Two things this page deliberately does **not** promise, because the code
 * does not: a download writes no row in the Video library screen (only the
 * making screens call into it), and a reloaded page does not re-attach to a
 * run that is still going.
 */
export default {
  key: 'tai-video',
  group: 'store',
  slug: { vi: 'tai-video', en: 'download-videos' },
  updated: '2026-10-15',
  order: 4,
  title: { vi: 'Tải video', en: 'Download videos' },
  description: {
    vi: 'Dán link video vào một ô, chọn chỗ lưu, rồi tải cả danh sách về máy: mỗi link một thẻ, xong thì nén thành một file zip.',
    en: 'Paste video links into one box, choose where they go, and fetch the whole list: one card per link, and a zip at the end.',
  },
  lead: {
    vi: '**Màn này chỉ tải, không sửa gì**: link vào, file ra. Mọi màn khác cũng lấy video từ link, nhưng lấy về để làm tiếp việc của chính nó.',
    en: '**This screen only fetches, nothing is edited**: links in, files out. Every other screen fetches from a link too, but fetches it to carry on with its own job.',
  },

  body: {
    vi: [
      {
        figure: {
          src: { vi: '/docs-img/tai-video-01-screen-vi.webp', en: '/docs-img/tai-video-01-screen-en.webp' },
          alt: { vi: 'Màn Tải video trong AutoReel', en: 'The Download videos screen in AutoReel' },
          caption: {
            vi: 'Màn **Tải video**: ô **Link video** với sáu dòng gợi ý, ô **Lưu vào**, ô **Cao tối đa**, hai nút và trạng thái lúc chưa có gì.',
            en: 'The **Download videos** screen: the **Video links** box with its six suggestions, the **Save to** and **Max height** controls, the buttons, and the empty state.',
          },
          width: 1189,
          height: 700,
        },
      },

      { h2: 'Màn này làm gì' },
      {
        p: '**Kho của bạn**, mục **Tải video**. Bạn dán vào đó một danh sách link video, chọn chỗ lưu, rồi bấm **Tải về** — app tải từng link về máy và để lại file trong thư mục bạn chọn.',
      },
      {
        p: 'Các màn khác cũng nhận link video, nhưng chúng nhận về để làm tiếp việc của chính màn đó: **Lồng tiếng** đòi ngôn ngữ và giọng đọc trước, **Xoá logo** đòi vùng chọn, **Luồng reup** đòi cả một dây chuyền. Màn này là bước đó đứng một mình — hôm nào bạn chỉ cần file thì vào đây.',
      },
      {
        note: 'Không cần khoá AI, chỉ cần mạng. Việc tải chạy trong app chứ không chạy trong tab bạn đang mở: đóng tab cũng không dừng nó, file cứ về. Đổi lại, mở lại màn này thì app **không nối lại** lượt đang chạy — lưới thẻ trống trơn trong khi file vẫn đang về.',
      },

      { h2: 'Bốn bước' },
      {
        steps: [
          {
            title: 'Dán link',
            body: 'Dán vào ô **Link video**, mỗi dòng một link. Ô này nhận sáu dạng link và gợi ý sẵn một dòng cho mỗi dạng:',
            code: 'https://www.youtube.com/watch?v=…\nhttps://www.tiktok.com/@user/video/…\nhttps://www.douyin.com/video/…\nhttps://www.bilibili.tv/vi/video/…\nhttps://hongguoduanju.com/player/…\nhttps://www.iq.com/play/…',
          },
          {
            title: 'Chọn chỗ lưu',
            body: 'Ô **Lưu vào** có đúng hai lựa chọn: **Thư viện video** — thư mục video của app trên máy bạn — hoặc **Thư mục con downloads** nằm trong đó. **Thư mục con downloads** là mặc định, và dòng nhỏ ngay dưới ô nhắc lại: **Thư mục thư viện, hoặc một thư mục con của nó.**',
          },
          {
            title: 'Đặt độ cao tối đa',
            body: 'Ô **Cao tối đa** chặn độ phân giải: app lấy bản đẹp nhất **không cao quá** con số này, nên đặt 720 cho một loạt video nhẹ sẽ nhanh hơn hẳn. Mặc định **1080**, đặt được từ **360** tới **2160**.',
          },
          {
            title: 'Bấm Tải về',
            body: 'Nút **Tải về** bắt đầu lượt chạy, và nút tự xám đi cho tới khi lượt đó xong. Bấm khi ô link còn trống thì app không chạy gì cả, chỉ trả lời **Chưa có link nào** và **Dán ít nhất một link video vào ô phía trên.**',
          },
        ],
      },
      {
        check: 'Sau khi bấm **Tải về**, dòng trên cùng đổi từ **Chưa tải gì** thành **Đang tải 0/3…** rồi đếm dần lên, và mỗi link hiện một thẻ có tiến độ chạy.',
      },
      {
        note: 'Link hỏng bị trả lời ngay trên thẻ của nó, và những link còn lại vẫn chạy bình thường. Link của một trang app không đọc được thì app trả lời **Đây không phải link video mà app đọc được** kèm sáu ví dụ; link sản phẩm thì app chỉ sang **luồng Affiliate**; còn link kênh thì app nhắc màn này chỉ nhận **một video mỗi dòng** — cả danh sách kênh là việc của màn **Link từ kênh**.',
      },

      { h2: 'Sáu trang app đọc được' },
      {
        p: 'Sáu dòng gợi ý trong ô **Link video** đúng là sáu trang app đọc được, không hơn:',
      },
      {
        table: {
          head: ['Trang', 'Link trông thế nào'],
          rows: [
            ['**YouTube**', 'https://www.youtube.com/watch?v=…'],
            ['**TikTok**', 'https://www.tiktok.com/@user/video/…'],
            ['**Douyin**', 'https://www.douyin.com/video/…'],
            ['**Bilibili**', 'https://www.bilibili.tv/vi/video/…'],
            ['**Hongguoduanju**', 'https://hongguoduanju.com/player/…'],
            ['**iQiyi**', 'https://www.iq.com/play/…'],
          ],
        },
      },
      {
        note: 'Dán trùng một link hai lần thì app chỉ tải một lần. Còn danh sách mà màn **Link từ kênh** đưa ra — mỗi dòng một link — dán thẳng vào ô này được, không phải sửa gì.',
      },

      { h2: 'Theo dõi lượt chạy' },
      {
        p: 'Hai dòng nằm ngay trên lưới thẻ. Dòng trên là câu tóm tắt: **Đang tải 1/3…** khi đang chạy, **Đã lưu 3/3 file.** khi xong, và thêm một câu đếm số link không tải được nếu có. Dòng dưới là thanh tiến độ của cả lượt, kèm phần trăm, số đang chạy, số đang chờ và số lỗi.',
      },
      {
        ul: [
          'Mỗi link một thẻ: một chữ trạng thái kèm phần trăm, thanh tiến độ, link gốc rút gọn, và tên file khi file đã về.',
          'Thẻ tải xong có khung phát video ngay trên thẻ — xem trước được mà không cần mở file.',
          'Thẻ lỗi ghi lý do ngay trên thẻ, và nếu lý do dài thì phần chi tiết nằm sau một dòng bấm ra.',
          'Tên file lấy từ đoạn cuối của link kèm một mã ngắn, nên hai link YouTube khác nhau không ghi đè lên nhau, và cùng một link luôn ra cùng một tên.',
        ],
      },
      {
        note: 'Lưới vẽ được **12 thẻ** một lượt. Dán nhiều hơn thì các link thừa **vẫn được tải** và vẫn vào file zip, chỉ là không có thẻ riêng — con số trên dòng tóm tắt đếm đủ cả.',
      },

      { h2: 'Dừng giữa chừng' },
      {
        p: 'Nút **Dừng** không cắt ngang file đang tải: link đang chạy được để chạy cho xong, các link chưa tới lượt bị bỏ, và app báo **Đã dừng. Những file tải xong vẫn được giữ.** Những link bị bỏ không tính là lỗi — chúng chỉ đứng yên ở trạng thái đã dừng.',
      },

      { h2: 'Lấy file ra' },
      {
        p: 'Nút **Tải tất cả** nén mọi file của lượt này thành một file zip và để trình duyệt lưu về — app báo **Đã nén 3 file thành một file zip — trình duyệt đang tải.** Nút chỉ bật khi đã có ít nhất một file, nên trong lúc chờ link đầu tiên thì nó còn xám.',
      },
      {
        p: 'Nén xong, các thẻ trên màn hình biến mất để lượt sau bắt đầu từ lưới trống. Nút **Xoá kết quả trên màn hình** làm đúng việc đó mà không nén gì — file nằm trên đĩa thì không ai xoá cả.',
      },
      {
        note: 'File nằm trong thư mục bạn chọn, trên máy bạn: **Thư viện video**, hoặc thư mục con **downloads** của nó — đúng thư mục mà cột **Thư mục** trên màn **Thư viện video** ghi ra. Màn này **không thêm dòng nào vào Thư viện video**: màn đó liệt kê những video app đã dựng, còn đây là file app tải về.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'tu-lieu' },
    ],

    en: [
      {
        figure: {
          src: { vi: '/docs-img/tai-video-01-screen-vi.webp', en: '/docs-img/tai-video-01-screen-en.webp' },
          alt: { vi: 'Màn Tải video trong AutoReel', en: 'The Download videos screen in AutoReel' },
          caption: {
            vi: 'Màn **Tải video**: ô **Link video** với sáu dòng gợi ý, ô **Lưu vào**, ô **Cao tối đa**, hai nút và trạng thái lúc chưa có gì.',
            en: 'The **Download videos** screen: the **Video links** box with its six suggestions, the **Save to** and **Max height** controls, the buttons, and the empty state.',
          },
          width: 1189,
          height: 700,
        },
      },

      { h2: 'What this screen does' },
      {
        p: 'The **Your material** group, the **Download videos** entry. Paste a list of video links into it, choose where they go, and press **Download** — the app fetches each link and leaves the file in the folder you picked.',
      },
      {
        p: 'Other screens take video links too, but they take them in order to carry on with their own job: **Translate** wants a language and a voice first, **Remove logo** wants its regions, a reup flow wants a whole chain. This screen is that step on its own — for the days when the file is the thing you came for.',
      },
      {
        note: 'No AI key is needed, only a network connection. The fetching runs inside the app rather than in the tab you are looking at: closing the tab does not stop it and the files still arrive. In exchange, coming back to this screen does **not** re-attach to a run that is still going — the grid is empty while the files are still landing.',
      },

      { h2: 'Four steps' },
      {
        steps: [
          {
            title: 'Paste the links',
            body: 'Paste into **Video links**, one link per line. The box takes six kinds of link and suggests one line of each inside it:',
            code: 'https://www.youtube.com/watch?v=…\nhttps://www.tiktok.com/@user/video/…\nhttps://www.douyin.com/video/…\nhttps://www.bilibili.tv/vi/video/…\nhttps://hongguoduanju.com/player/…\nhttps://www.iq.com/play/…',
          },
          {
            title: 'Choose where they go',
            body: '**Save to** offers exactly two answers: **The video library** — this app’s video folder on your machine — or **A downloads subfolder** inside it. The subfolder is the default, and the line under the box repeats it: **The library folder, or a subfolder of it.**',
          },
          {
            title: 'Set a height limit',
            body: '**Max height** caps the resolution: the app takes the best version that is **no taller than** this, so 720 for a batch of light videos is a good deal faster. The default is **1080**, and it takes anything from **360** to **2160**.',
          },
          {
            title: 'Press Download',
            body: '**Download** starts the run, and the button greys out until that run is over. Pressed over an empty box it runs nothing at all and simply answers **No links yet** and **Paste at least one video link into the box above.**',
          },
        ],
      },
      {
        check: 'After **Download**, the top line changes from **Nothing downloaded yet** to **Fetching 0/3…** and counts up, and every link gets a card with a moving bar.',
      },
      {
        note: 'A bad link is refused on its own card, and the rest of the list still runs. A link from a page the app cannot read answers **That is not a video link this app can read.** with six examples; a product link is pointed at the **Affiliate flow**; and a channel link is told this screen takes **one video per line** — a whole channel is the **Links from a channel** screen’s job.',
      },

      { h2: 'The six pages it reads' },
      {
        p: 'The six lines suggested inside **Video links** are exactly the six pages the app can read, and no others:',
      },
      {
        table: {
          head: ['Page', 'What a link looks like'],
          rows: [
            ['**YouTube**', 'https://www.youtube.com/watch?v=…'],
            ['**TikTok**', 'https://www.tiktok.com/@user/video/…'],
            ['**Douyin**', 'https://www.douyin.com/video/…'],
            ['**Bilibili**', 'https://www.bilibili.tv/vi/video/…'],
            ['**Hongguoduanju**', 'https://hongguoduanju.com/player/…'],
            ['**iQiyi**', 'https://www.iq.com/play/…'],
          ],
        },
      },
      {
        note: 'The same link pasted twice is fetched once. And the list the **Links from a channel** screen hands out — one link per line — can be pasted straight in here with nothing to fix first.',
      },

      { h2: 'Watching the run' },
      {
        p: 'Two lines sit right above the grid of cards. The first is the summary sentence: **Fetching 1/3…** while it runs, **3/3 file(s) saved.** when it is done, plus a sentence counting whatever could not be fetched. The second is the batch bar, with the percentage, how many are running, how many are waiting and how many failed.',
      },
      {
        ul: [
          'One card per link: a status word with a percentage, a progress bar, the link shortened to its host, and the file name once the file has landed.',
          'A finished card carries a playable video right on it, so the file can be looked at without opening it.',
          'A failed card carries the reason, and if the reason is long the rest sits behind a line you click open.',
          'The file name comes from the end of the link plus a short code, so two different YouTube links never overwrite each other, and the same link always lands on the same name.',
        ],
      },
      {
        note: 'The grid draws **12 cards** at a time. Paste more and the extra links are **still fetched** and still go into the zip; they simply have no card of their own — the number on the summary line counts every one of them.',
      },

      { h2: 'Stopping part-way' },
      {
        p: '**Stop** does not cut the file that is being fetched: the link in flight is left to finish, the links that have not started are dropped, and the app says **Stopped. Files already fetched are kept.** Those dropped links are not failures — they simply stand still in the stopped state.',
      },

      { h2: 'Taking the files away' },
      {
        p: '**Download all** zips every file this run fetched and lets the browser save it — the app says **One zip with 3 file(s) — your browser is saving it.** The button only lights up once at least one file is there, so it stays grey while the first link is still coming in.',
      },
      {
        p: 'Zipping clears the cards, so the next run starts from an empty grid. **Clear the results** does the same without zipping anything — the files are on disk, and nothing here touches them.',
      },
      {
        note: 'The files are in the folder you chose, on your machine: **The video library**, or its **downloads** subfolder — the very folder the **Folder** column on the **Video library** screen spells out. This screen adds **no row at all** to the Video library: that screen lists the videos the app made, and these are files the app fetched.',
      },

      { h2: 'What next' },
      { link: 'tu-lieu' },
    ],
  },
};

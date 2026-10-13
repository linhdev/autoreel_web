/**
 * Đăng Shopee Video — the one screen that needs hardware.
 *
 * The page leads with the phone because everything that goes wrong here goes
 * wrong because of it, and because the screen's own subtitle says so: this
 * posts through the Shopee app on a device plugged into the machine. Pairing
 * is a topic of its own (`ghep-dien-thoai-shopee`), so this page says what the
 * phone has to be and links there rather than walking the pairing again.
 *
 * The policy numbers and the 576p floor come from the product's own guide
 * (`HUONG-DAN-SU-DUNG.md`); the on-screen wording is `shopee.*` from
 * `translations.py`, and the evidence folder is the one the install guide
 * documents.
 */
export default {
  key: 'dang-shopee',
  group: 'sell',
  slug: { vi: 'dang-shopee', en: 'shopee-posting' },
  updated: '2026-10-13',
  order: 5,
  title: { vi: 'Đăng Shopee Video', en: 'Posting to Shopee' },
  description: {
    vi: 'Xếp video vào hàng đợi, gắn link sản phẩm, rồi để app đăng lần lượt lên Shopee Video từ điện thoại Android đã ghép.',
    en: 'Queue the videos, attach a product link, and let the app post them one at a time to Shopee Video from a paired Android phone.',
  },
  lead: {
    vi: 'Đăng trên **điện thoại thật**, qua app Shopee — không có API nào cho việc này. Máy tính điều khiển điện thoại, bạn chỉ cần để nó yên.',
    en: 'Posting happens on a **real phone**, through the Shopee app — there is no API for it. The computer drives the phone; your part is leaving it alone.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/dang-shopee-01-screen-vi.webp',
          alt: 'Màn Shopee trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Điện thoại là thứ bắt buộc' },
      {
        p: 'Màn **Shopee** đăng từng video một lên Shopee Video bằng cách điều khiển app Shopee trên một điện thoại Android. Không có đường nào khác, nên mấy thứ sau phải đúng trước khi bấm bắt đầu:',
      },
      {
        ul: [
          'Điện thoại **đã ghép và đang kết nối** — xem trang **Ghép điện thoại Android** nếu chưa làm.',
          '**App Shopee đã đăng nhập** trên chính điện thoại đó.',
          'Video **từ 576p trở lên**. Shopee không nhận video nhỏ hơn.',
          '**Link sản phẩm là link sản phẩm thật**, không phải link danh mục hay link shop.',
        ],
      },
      {
        p: 'Khối **Điện thoại** có ô **Thiết bị** — để trống khi chỉ cắm một máy — và nút **Dò lại**. Chưa thấy máy nào thì app nói ngay: **Chưa thấy thiết bị Android nào. Cắm máy hoặc bật emulator rồi bấm Dò lại.**',
      },
      {
        note: 'Trong lúc chạy, **để điện thoại yên**: đừng mở app khác, đừng tắt màn hình, đừng rút cáp. Việc gì bắt bạn phải tự tay làm — đăng nhập lại, nhập OTP — thì **cả lô dừng lại**, không chỉ một bài.',
      },

      { h2: 'Một lô đăng' },
      {
        steps: [
          {
            title: 'Chọn điện thoại và khoảng nghỉ',
            body: 'Chọn máy ở ô **Thiết bị** (bấm **Dò lại** nếu ô trống), rồi đặt **Giây giữa hai lần đăng**. Mặc định đã là mức an toàn — đọc mục dưới trước khi hạ xuống.',
          },
          {
            title: 'Chọn kiểu hàng đợi',
            body: 'Tab **Nhiều video, một link** cho cả loạt dùng chung một sản phẩm; tab **Mỗi video một link** khi mỗi video bán một món khác nhau. Ô đếm bên dưới nói đang có bao nhiêu video trong danh sách.',
          },
          {
            title: 'Dán link sản phẩm',
            body: 'Ở tab một link: dán vào ô **Link sản phẩm cho cả loạt** rồi bấm **Chép link xuống mọi dòng**. Link chỉ để **gắn vào bài đăng** — AI viết chú thích không đọc nó. Dòng nào cần link riêng thì sửa thẳng trong cột **Link sản phẩm** của dòng đó. Dòng không có sản phẩm vẫn đăng, chỉ là đăng không gắn gì.',
          },
          {
            title: 'Viết chú thích',
            body: 'Dán chú thích vào ô **Chú thích cho cả loạt** rồi **Chép chú thích xuống mọi dòng**, hoặc để AI viết: điền **Chủ đề / sản phẩm** ở mục **Chủ đề & yêu cầu cho AI**, bấm **Viết chú thích bằng AI**, đọc lại và sửa. **Viết cho từng dòng** lấy câu đó rồi viết lại thành mỗi dòng một câu khác.',
          },
          {
            title: 'Thêm video vào hàng đợi',
            body: '**Chọn video từ máy tính** để lấy video trong máy bạn, hoặc **Lấy từ thư viện video** cho những video app đã dựng. Mỗi dòng một video, sửa thẳng trên bảng được. Tick ở cột **Xoá** để đánh dấu dòng không đăng lần này — dòng đã tick sẽ bị bỏ qua và app nói rõ bỏ qua bao nhiêu.',
          },
          {
            title: 'Bấm Bắt đầu đăng hàng loạt',
            body: 'Muốn dừng thì **Dừng** — app dừng sau khi video đang đăng xong. Dòng nào lỗi thì sửa rồi bấm **Chạy lại phần lỗi**, không phải chạy lại cả lô.',
          },
        ],
      },
      {
        check: 'Khối **Tiến độ** đếm **x / y đã đăng**, và bảng **Kết quả** có một dòng cho mỗi video với **Trạng thái**, **Bước** và **Kết quả**. Hết lô, dòng tổng kết đọc dạng **Đăng được 3, lỗi 1.** Bằng chứng từng bài nằm trong `data/logs/shopee/`.',
      },

      { h2: 'Khoảng nghỉ giữa các bài là chuyện chính sách' },
      {
        p: 'Đăng một loạt bài trong ngày là thứ Shopee chấm là spam. Nó cộng điểm vi phạm: **12 điểm là khoá đăng 30 ngày, 15 điểm là khoá vĩnh viễn**. Khoảng nghỉ giữa hai bài tồn tại vì chuyện đó, không phải vì nhịp độ — nên nó là thứ để nguyên chứ không phải thứ để tối ưu.',
      },
      {
        p: 'Màn hình cũng nhắc đúng câu đó khi hàng đợi còn trống: mỗi lần một video là nhịp an toàn.',
      },
      {
        note: 'Bạn chưa ghép điện thoại và chỉ muốn thử? Đừng thử bằng cách đăng hàng loạt. Tick ít dòng, hoặc bỏ tick những dòng không muốn đăng, và để khoảng nghỉ ở mức mặc định.',
      },

      { h2: 'Khi một bài không lên' },
      {
        p: 'Cột **Kết quả** trong bảng **Kết quả** là chỗ lỗi hiện ra. Đây là những dòng hay gặp nhất:',
      },
      {
        table: {
          head: ['Kết quả nói gì', 'Nghĩa là'],
          rows: [
            ['Đang có một batch chạy rồi.', 'Mỗi lúc một lô. Chờ xong hoặc bấm **Dừng**'],
            ['Cần ít nhất một video có đường dẫn.', 'Chưa có dòng nào có video. Bấm **Chọn video từ máy tính** hoặc **Lấy từ thư viện video**'],
            ['Một bài đứng im ở bước chọn video, không đi tiếp', 'Video **dưới 576p**. Shopee từ chối bằng một thông báo nhanh mà AutoReel không đọc được — dấu hiệu duy nhất là nút **Tiếp theo** của app Shopee đứng như nút hỏng'],
            ['Video đã chép sang nhưng không xuất hiện trong thư viện ảnh. Media scanner có thể chưa chạy xong.', 'Thư viện ảnh của điện thoại chưa kịp thấy file. Chạy lại phần lỗi sau vài giây'],
            ['Shopee đang yêu cầu thao tác thủ công (đăng nhập, OTP, hoặc xác minh). …', 'Cả lô dừng ở đó. Làm việc đó trên điện thoại rồi chạy lại'],
            ['Điện thoại ngừng trả lời giữa một video, nên lô đã dừng lại và phần còn lại chưa đăng. …', 'Cáp hoặc wifi đứt. Cắm lại, bấm **Dò lại**, rồi **Chạy lại phần lỗi**'],
            ['Không đọc được link sản phẩm. Link phải là link sản phẩm Shopee, và máy tính phải có phiên đăng nhập - …', 'Link danh mục, hoặc cửa sổ Chrome chưa đăng nhập Shopee. Shopee từ chối đọc link thì **video vẫn lên**, chỉ là không gắn gì — dấu vết duy nhất nằm trong `result.json` của bài đó'],
            ['Đã bấm Đăng nhưng không xác nhận được là thành công. Kiểm tra trên điện thoại trước khi chạy lại - đăng trùng là chuyện có thể xảy ra.', 'Không chắc bài đã lên chưa. Mở điện thoại xem trước khi bấm **Chạy lại phần lỗi**'],
            ['Còn … selector của app Shopee chưa được điền, …', 'Bảng selector chưa lấy từ máy này. Lô sẽ dừng ngay bước đầu'],
          ],
        },
      },
      {
        note: 'Bảng selector của app Shopee được hiệu chỉnh cho **một** điện thoại, và cho app Shopee **tiếng Việt**. Đổi máy khác, đổi cỡ chữ hệ thống, hay để Shopee sang tiếng khác thì lô chạy **không báo lỗi gì** — nó chỉ dừng ở bước đầu tiên không tìm thấy nút.',
      },

      { h2: 'Việc tiếp theo' },
      {
        p: 'Nếu màn này báo chưa thấy thiết bị nào, hoặc kết nối đứt giữa đường, trang **Ghép điện thoại Android** là chỗ sửa.',
      },
      { link: 'ghep-dien-thoai-shopee' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/dang-shopee-01-screen-en.webp',
          alt: 'The Shopee screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'The phone is not optional' },
      {
        p: 'The **Shopee** screen posts to Shopee Video one video at a time by driving the Shopee app on an Android phone. There is no other route, so these have to be true before you press start:',
      },
      {
        ul: [
          'The phone is **paired and connected** — see **Pairing an Android phone** if it is not.',
          '**The Shopee app is signed in** on that phone.',
          'The video is **576p or larger**. Shopee will not take anything smaller.',
          'The **product link is a real product link**, not a category or a shop.',
        ],
      },
      {
        p: 'The screen\'s **Device** box takes the phone — leave it empty when only one is plugged in — and **Look again** re-lists what adb can see. With no phone found it says so at once: **No Android device is connected. Plug one in, or start the emulator, then press Look again.**',
      },
      {
        note: 'While a batch runs, **leave the phone alone**: do not open another app, do not let the screen sleep, do not pull the cable. Anything that needs your hands — signing in again, an OTP — stops **the whole batch**, not just one post.',
      },

      { h2: 'Publishing a batch' },
      {
        steps: [
          {
            title: 'Choose the phone and the gap',
            body: 'Pick the device in **Device** (press **Look again** if it is empty), then set the **Seconds between posts**. The default is already the safe number — read the section below before lowering it.',
          },
          {
            title: 'Choose the kind of queue',
            body: 'The **Many videos, one link** tab is for a batch that all sells the same product; **One link per video** is for when each video sells something different. The counter below says how many videos the list holds.',
          },
          {
            title: 'Paste the product link',
            body: 'On the one-link tab: paste into **Product link for the whole batch**, then press **Copy the link to every row**. The link is only what gets **attached to the post** — the AI that writes the caption does not read it. A row that needs its own link is edited straight into its **Product link** cell. A row with no product still posts; it just carries nothing.',
          },
          {
            title: 'Write the caption',
            body: 'Paste one into **Caption for the whole batch** and press **Copy the caption to every row**, or let the AI write it: fill in **Subject / product** under **Subject & instructions for the AI**, press **Write the caption with AI**, read it and fix it. **Write one per row** takes that caption and says it a different way for each row.',
          },
          {
            title: 'Add the videos',
            body: '**Choose videos from this computer** for videos of your own, or **Fill from the video library** for the ones the app made. One video per row, edited in place. Tick the **Delete** column to mark a row you do not want posted this time — ticked rows are skipped and the app says how many.',
          },
          {
            title: 'Press Start bulk publish',
            body: 'To stop: **Stop** — it stops after the video in flight. A row that failed can be fixed and retried with **Retry failed** instead of running the whole batch again.',
          },
        ],
      },
      {
        check: 'The **Progress** group counts **x / y published**, and the **What happened** table has a row per video with **Status**, **Step** and **What happened**. At the end the summary reads like **3 published, 1 failed.** The record of each post is in `data/logs/shopee/`.',
      },

      { h2: 'The gap is a policy control' },
      {
        p: 'Posting a burst in one day is what Shopee scores as spam. It adds violation points: **12 points is a 30-day posting ban, 15 is permanent**. The gap between posts exists for that reason, not for pacing — so it is something to leave alone rather than something to tune.',
      },
      {
        p: 'The screen says the same thing when the queue is empty: one video per batch is the safe pace.',
      },
      {
        note: 'No phone paired yet and you just want to try it? Do not try it by posting in bulk. Tick a couple of rows, or untick the ones you do not want posted, and leave the gap at its default.',
      },

      { h2: 'When a post does not go up' },
      {
        p: 'Failures show up in the **What happened** column of the results table. These are the lines you are most likely to meet:',
      },
      {
        table: {
          head: ['What the Result column says', 'What it means'],
          rows: [
            ['A batch is already running.', 'One batch at a time. Wait it out or press **Stop**'],
            ['Add at least one video with a path.', 'No row holds a video yet. Press **Choose videos from this computer** or **Fill from the video library**'],
            ['One post sits still at the video-picking step', 'The video is **under 576p**. Shopee refuses with a quick message AutoReel cannot read — the only sign is that the **Tiếp theo** button in the Shopee app sits there like a dead button'],
            ['The video was copied across but is not in the gallery. The media scanner may not have finished.', 'The phone\'s gallery has not caught up with the file. Retry the failed ones a moment later'],
            ['Shopee is asking for something done by hand (a sign-in, an OTP, or a check). …', 'The whole batch stops there. Do that thing on the phone, then run it again'],
            ['The phone stopped answering in the middle of a video, so the batch was stopped and the rest were left unposted. …', 'The cable or the wifi dropped. Plug it back in, press **Look again**, then **Retry failed**'],
            ['The product link could not be read. It has to be a Shopee product link, and this computer needs a signed-in session - …', 'A category link, or the Chrome window is not signed in to Shopee. When Shopee refuses the link **the video still goes up**, just with nothing attached — the only trace is that post\'s `result.json`'],
            ['Publish was pressed but success could not be confirmed. Check the phone before running again — posting twice is a real possibility.', 'It is not certain the post went up. Look on the phone before pressing **Retry failed**'],
            ['… selectors for the Shopee app have not been filled in yet, …', 'The selector table has not been taken from this phone. The batch will stop at its first step'],
          ],
        },
      },
      {
        note: 'The selector table for the Shopee app is calibrated for **one** phone, and for Shopee in **Vietnamese**. A different phone, a different system font size, or Shopee in another language makes the batch **report no error at all** — it simply stops at the first step where the button it wanted is not there.',
      },

      { h2: 'What next' },
      {
        p: 'If this screen cannot see a device, or the connection drops mid-batch, **Pairing an Android phone** is where that is fixed.',
      },
      { link: 'ghep-dien-thoai-shopee' },
    ],
  },
};

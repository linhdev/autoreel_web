/**
 * Ghép điện thoại Android — the step that makes Shopee posting possible.
 *
 * The only topic in this section that needs a second device, and the only one
 * whose hardest part is a number the phone shows you and then hides. The app's
 * own help text (`cf.adb_howto` in `translations.py`) is the source for the
 * four steps on the phone, and the two-port trap is quoted from it because it
 * is the thing people get wrong.
 */
export default {
  key: 'ghep-dien-thoai-shopee',
  group: 'connect',
  slug: { vi: 'ghep-dien-thoai-shopee', en: 'shopee-phone-pairing' },
  updated: '2026-10-13',
  order: 4,
  title: { vi: 'Ghép điện thoại Android', en: 'Pairing an Android phone' },
  description: {
    vi: 'Bật gỡ lỗi qua wifi, ghép đôi điện thoại với máy tính, để app tự đăng bài lên Shopee Video.',
    en: 'Turn on wireless debugging and pair your phone with the computer, so the app can post to Shopee Video for you.',
  },
  lead: {
    vi: 'Chỉ cần khi bạn muốn **đăng bài lên Shopee Video**. Đọc link sản phẩm và dựng video thì không cần điện thoại.',
    en: 'Only needed to **post to Shopee Video**. Reading product links and rendering videos need no phone at all.',
  },

  body: {
    vi: [
      { h2: 'Điện thoại dùng để làm gì' },
      {
        p: 'Shopee Video chỉ đăng được từ **ứng dụng Shopee trên điện thoại**. Không có đường nào khác — không có API công khai cho việc này.\n\nNên app điều khiển điện thoại thật: nó mở Shopee, chọn video, dán chú thích, gắn sản phẩm, và bấm đăng. Việc bạn làm là cắm điện thoại vào và kết nối một lần.',
      },
      {
        note: 'Điện thoại và máy tính phải **cùng một mạng wifi**. Đây là chỗ hay bị bỏ qua nhất — điện thoại đang dùng 4G thì không nối được.',
      },

      { h2: 'Bước 1 — Bật gỡ lỗi trên điện thoại' },
      {
        steps: [
          {
            title: 'Mở Tuỳ chọn nhà phát triển',
            body: 'Vào **Cài đặt → Giới thiệu điện thoại → Số bản dựng**, và chạm vào **Số bản dựng 7 lần**. Điện thoại sẽ báo bạn đã thành nhà phát triển.',
          },
          {
            title: 'Bật Gỡ lỗi qua wifi',
            body: 'Vào **Tuỳ chọn nhà phát triển → Gỡ lỗi qua wifi** (Wireless debugging) và bật lên.',
          },
          {
            title: 'Mở màn ghép đôi',
            body: 'Chạm **Ghép đôi thiết bị bằng mã ghép đôi**. Điện thoại hiện ra **một địa chỉ IP** và **hai cổng**.',
          },
        ],
      },
      {
        note: '**Hai cổng, và chúng khác nhau.** Cổng **trên** là cổng ghép đôi — điền vào bước 2 cùng mã 6 số. Cổng **dưới** là cổng kết nối — điền vào bước 3, sau khi ghép xong. Điền lẫn hai cổng này là lỗi phổ biến nhất ở đây, và nó không báo là điền lẫn — nó chỉ không kết nối được.',
      },

      { h2: 'Bước 2 — Ghép đôi' },
      {
        steps: [
          {
            title: 'Mở màn Cấu hình',
            body: 'Trong app, vào nhóm **Ứng dụng**, màn **Cấu hình**, rồi kéo xuống khối **Thiết bị Android**.',
          },
          {
            title: 'Điền địa chỉ và cổng ghép đôi',
            body: 'Điền **Địa chỉ điện thoại** (ví dụ `192.168.1.5`) và **Cổng ghép đôi** — cổng **trên** mà điện thoại vừa hiện.',
          },
          {
            title: 'Điền mã 6 số và bấm Ghép đôi',
            body: 'Mã 6 số nằm ngay dưới cổng ghép đôi trên màn điện thoại. Điền vào ô **Mã 6 số** rồi bấm **Ghép đôi**.',
          },
        ],
      },
      {
        check: 'Sau khi bấm **Ghép đôi**, dòng trạng thái báo đã ghép đôi và nhắc bạn điền cổng kết nối. Màn ghép đôi trên điện thoại có thể đóng lại được rồi.',
      },

      { h2: 'Bước 3 — Kết nối' },
      {
        p: 'Ghép đôi chỉ là bắt tay một lần. Kết nối mới là thứ giữ đường dây, và nó dùng **cổng dưới**.',
      },
      {
        steps: [
          {
            title: 'Điền cổng kết nối',
            body: 'Cổng này nằm ở màn **Gỡ lỗi qua wifi** — không phải màn ghép đôi. Quay lại đó lấy số, rồi điền vào ô **Cổng kết nối**.',
          },
          {
            title: 'Bấm Kết nối',
            body: 'Bấm **Kết nối**. Dòng trạng thái đổi thành **Đã kết nối** kèm tên điện thoại.',
          },
        ],
      },
      {
        note: 'Cổng kết nối **đổi mỗi lần** điện thoại khởi động lại hoặc tắt gỡ lỗi qua wifi. Đã ghép đôi rồi thì không phải ghép lại — chỉ cần lấy cổng mới và bấm **Kết nối**.',
      },
      {
        check: 'Dòng trạng thái hiện **Đã kết nối · <tên điện thoại>**, và mục **Điện thoại adb đang thấy** có tên máy. Không thấy gì ở đó nghĩa là máy tính chưa thấy điện thoại — kiểm tra wifi trước.',
      },

      { h2: 'Những nút còn lại' },
      {
        table: {
          head: ['Nút', 'Việc'],
          rows: [
            ['**Kiểm tra**', 'Hỏi lại xem kết nối còn sống không, in ra tên điện thoại'],
            ['**Làm mới**', 'Liệt kê lại những điện thoại adb đang thấy'],
            ['**Ngắt**', 'Đóng kết nối, giữ lại cặp đã ghép'],
            ['**Xoá**', 'Quên hẳn điện thoại này — lần sau phải ghép đôi lại từ đầu'],
          ],
        },
      },

      { h2: 'Đăng bài' },
      {
        p: 'Kết nối xong thì màn **Shopee** dùng được. Xếp video vào hàng đợi, gắn link sản phẩm, rồi bấm bắt đầu — và **để điện thoại yên** trong lúc nó chạy.',
      },
      {
        note: 'Giữa hai bài luôn có một khoảng nghỉ. Shopee tính việc đăng hàng loạt trong ngày là spam, nên nhịp này là chuyện chính sách chứ không chỉ là nhịp độ. Đừng tắt nó đi.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'dang-shopee' },
    ],

    en: [
      { h2: 'What the phone is for' },
      {
        p: 'Shopee Video can only be posted from the **Shopee app on a phone**. There is no other route — there is no public API for it.\n\nSo the app drives a real phone: it opens Shopee, picks the video, pastes the caption, attaches the product, and presses post. Your part is plugging the phone in and connecting it once.',
      },
      {
        note: 'The phone and the computer have to be on **the same wifi network**. This is the most commonly skipped line — a phone on mobile data cannot be reached.',
      },

      { h2: 'Step 1 — Turn on debugging on the phone' },
      {
        steps: [
          {
            title: 'Open Developer options',
            body: 'Go to **Settings → About phone → Build number** and tap **Build number seven times**. The phone will tell you that you are now a developer.',
          },
          {
            title: 'Turn on Wireless debugging',
            body: 'Go to **Developer options → Wireless debugging** and switch it on.',
          },
          {
            title: 'Open the pairing screen',
            body: 'Tap **Pair device with pairing code**. The phone shows **one IP address** and **two ports**.',
          },
        ],
      },
      {
        note: '**Two ports, and they are different.** The **upper** one is the pairing port — it goes in step 2, with the six-digit code. The **lower** one is the connection port — it goes in step 3, after pairing. Swapping them is the most common mistake here, and nothing says you swapped them; it simply will not connect.',
      },

      { h2: 'Step 2 — Pair' },
      {
        steps: [
          {
            title: 'Open the Settings screen',
            body: 'In the app, the **Ứng dụng** (app) group, the **Cấu hình** (Settings) screen, then scroll to the **Thiết bị Android** block.',
          },
          {
            title: 'Fill in the address and the pairing port',
            body: 'Enter **Địa chỉ điện thoại** (the phone address, e.g. `192.168.1.5`) and **Cổng ghép đôi** — the **upper** port the phone just showed you.',
          },
          {
            title: 'Enter the six-digit code and pair',
            body: 'The code sits just below the pairing port on the phone. Type it into **Mã 6 số** and press **Ghép đôi** (pair).',
          },
        ],
      },
      {
        check: 'After pressing **Ghép đôi**, the status line says you are paired and asks for the connection port. You can close the pairing screen on the phone now.',
      },

      { h2: 'Step 3 — Connect' },
      {
        p: 'Pairing is a one-time handshake. Connecting is what keeps the line open, and it uses the **lower** port.',
      },
      {
        steps: [
          {
            title: 'Fill in the connection port',
            body: 'That port is on the **Wireless debugging** screen — not the pairing screen. Go back there for the number and put it in **Cổng kết nối**.',
          },
          {
            title: 'Press Connect',
            body: 'Press **Kết nối**. The status line becomes **Đã kết nối** ("connected") with the phone\'s name.',
          },
        ],
      },
      {
        note: 'The connection port **changes every time** the phone restarts or wireless debugging is toggled. Once paired you do not pair again — just take the new port and press **Kết nối**.',
      },
      {
        check: 'The status line reads **Đã kết nối · <phone name>**, and **Điện thoại adb đang thấy** ("phones adb can see") lists it. Nothing there means the computer cannot see the phone — check the wifi first.',
      },

      { h2: 'The other buttons' },
      {
        table: {
          head: ['Button', 'What it does'],
          rows: [
            ['**Kiểm tra**', 'Asks whether the connection is still alive, and prints the phone\'s name'],
            ['**Làm mới**', 'Re-lists the phones adb can currently see'],
            ['**Ngắt**', 'Closes the connection and keeps the pairing'],
            ['**Xoá**', 'Forgets the phone entirely — the next time you pair from the beginning'],
          ],
        },
      },

      { h2: 'Posting' },
      {
        p: 'Once connected, the **Shopee** screen works. Queue the videos, attach the product link, press start — and **leave the phone alone** while it runs.',
      },
      {
        note: 'There is always a gap between posts. Shopee treats bulk posting within a day as spam, so that spacing is a policy matter rather than a pacing preference. Do not turn it down.',
      },

      { h2: 'What next' },
      { link: 'dang-shopee' },
    ],
  },
};

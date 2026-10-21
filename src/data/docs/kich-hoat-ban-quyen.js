/**
 * Kích hoạt bản quyền — the one screen with a step that cannot be skipped.
 *
 * The screen is called **Bản quyền** in the app and it sits at the bottom of
 * **Cấu hình**. Both names are used here on purpose: somebody reading this
 * with the app open is looking for the words the app shows, and a guide that
 * renames things is a guide that gets closed.
 */
export default {
  key: 'kich-hoat-ban-quyen',
  group: 'start',
  slug: { vi: 'kich-hoat-ban-quyen', en: 'activate-licence' },
  updated: '2026-10-13',
  order: 3,
  title: { vi: 'Kích hoạt bản quyền', en: 'Activating your licence' },
  description: {
    vi: 'Nhập mã AR-XXXX một lần để mở khoá AutoReel, và điều gì xảy ra khi bản quyền hết hạn hoặc mất mạng.',
    en: 'Enter an AR-XXXX key once to unlock AutoReel, and what happens when the licence expires or the machine goes offline.',
  },
  lead: {
    vi: 'Bạn nhận một mã dạng **AR-XXXX-XXXX-XXXX-XXXX** khi mua. Nhập **một lần**, và chỉ một lần.',
    en: 'You were given a key in the form **AR-XXXX-XXXX-XXXX-XXXX** when you bought. Enter it **once**, and only once.',
  },

  body: {
    vi: [
      { h2: 'Trước khi kích hoạt thì sao?' },
      {
        p: 'App **vẫn chạy bình thường**. Chưa có mã thì bạn cứ dùng thử, dựng video, xem mọi màn — không có gì bị khoá. Chỉ từ lúc bạn kích hoạt, phần mềm mới bắt đầu tự kiểm tra bản quyền.',
      },

      { h2: 'Nhập mã' },
      {
        steps: [
          {
            title: 'Mở Cấu hình',
            body: 'Trong sidebar, nhóm cuối cùng, mục **Cấu hình** — biểu tượng bánh răng.',
          },
          {
            title: 'Kéo xuống cuối màn hình',
            body: 'Mục **Bản quyền** nằm dưới cùng, sau phần ghép điện thoại.',
          },
          {
            title: 'Dán mã và bấm Kích hoạt',
            body: 'Dán mã vào ô **Mã kích hoạt** rồi bấm nút **Kích hoạt** bên cạnh. Mất một hai giây.',
            figure: {
              src: {
                vi: '/docs-img/kich-hoat-01-banner-vi.webp',
                en: '/docs-img/kich-hoat-01-banner-en.webp',
              },
              alt: { vi: 'Mục Bản quyền trong màn Cấu hình, ô nhập mã kích hoạt', en: 'The licence section of the Settings screen, with the activation key field' },
              caption: { vi: 'Dán mã vào ô, bấm Kích hoạt. Dòng chữ phía trên đổi từ "Chưa kích hoạt" sang "Bản quyền đang hoạt động".', en: 'Paste the key, press Activate. The line above changes from "Not activated" to "Licence active".' },
              width: 1189,
              height: 308,
            },
          },
        ],
      },
      {
        check: 'Dòng trạng thái phía trên đổi thành **Bản quyền đang hoạt động**, kèm số ngày còn lại. Nếu vẫn là "Chưa kích hoạt", mã chưa vào — dán lại.',
      },

      { h2: 'Mã này gắn với máy' },
      {
        p: 'Mã được khoá vào máy bạn lúc kích hoạt. Máy cần mạng **một lần mỗi vài ngày** để app kiểm tra lại.',
      },
      {
        ul: [
          'Mất mạng thì app **vẫn chạy tiếp trong 72 giờ**. Quá đó mới cần có mạng lại.',
          '**Gia hạn**: mục Bản quyền hiện cảnh báo trước khi hết hạn. Gia hạn xong bấm **Kiểm tra ngay**, không phải cài lại gì.',
          '**Đổi máy hoặc cài lại hệ điều hành**: cần mã mới. Liên hệ nơi bán — họ gỡ máy cũ khỏi hệ thống rồi cấp lại.',
          '**Gỡ máy này**: nút **Gỡ máy này** trong cùng mục. Dùng khi bạn muốn chuyển mã sang máy khác mà không phải chờ.',
        ],
      },
      {
        note: 'Bị **thu hồi** hoặc **tạm khoá** thì không chờ 72 giờ — hai việc đó có hiệu lực ngay ở lần kiểm tra kế tiếp.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'khoa-api-ai' },
    ],

    en: [
      { h2: 'What happens before you activate' },
      {
        p: 'The app **runs normally**. With no key you can try it, render videos, open every screen — nothing is locked. The software only starts checking a licence from the moment you activate one.',
      },

      { h2: 'Entering the key' },
      {
        steps: [
          {
            title: 'Open Settings',
            body: 'In the sidebar, the last group, **Cấu hình** — the gear icon. (The interface is in Vietnamese; the gear is the same either way.)',
          },
          {
            title: 'Scroll to the bottom',
            body: 'The **Bản quyền** section is last, below the phone pairing block.',
          },
          {
            title: 'Paste the key and press Activate',
            body: 'Paste into **Mã kích hoạt** and press the **Kích hoạt** button beside it. It takes a second or two.',
            figure: {
              src: {
                vi: '/docs-img/kich-hoat-01-banner-vi.webp',
                en: '/docs-img/kich-hoat-01-banner-en.webp',
              },
              alt: { vi: 'Mục Bản quyền trong màn Cấu hình, ô nhập mã kích hoạt', en: 'The licence section of the Settings screen, with the activation key field' },
              caption: { vi: 'Dán mã vào ô, bấm Kích hoạt. Dòng chữ phía trên đổi từ "Chưa kích hoạt" sang "Bản quyền đang hoạt động".', en: 'Paste the key, press Activate. The line above changes from "Not activated" to "Licence active".' },
              width: 1189,
              height: 308,
            },
          },
        ],
      },
      {
        check: 'The status line changes to **Bản quyền đang hoạt động** ("licence active") with the days remaining. If it still says "Chưa kích hoạt", the key did not arrive — paste it again.',
      },

      { h2: 'A key belongs to one machine' },
      {
        p: 'The key is bound to your machine when it is activated. That machine needs a connection **once every few days** so the app can check back.',
      },
      {
        ul: [
          'With no connection the app **keeps working for 72 hours**. Past that it needs the network again.',
          '**Renewing**: the licence section warns you before it expires. Renew, then press **Kiểm tra ngay** ("check now") — there is nothing to reinstall.',
          '**A new machine, or a reinstalled operating system**: you need a new key. Contact whoever sold it to you; they release the old machine and issue another.',
          '**Releasing a machine**: the **Gỡ máy này** button in the same section, for moving a key to another machine without waiting.',
        ],
      },
      {
        note: 'A **revoked** or **suspended** licence does not wait out those 72 hours — both take effect at the next check.',
      },

      { h2: 'What next' },
      { link: 'khoa-api-ai' },
    ],
  },
};

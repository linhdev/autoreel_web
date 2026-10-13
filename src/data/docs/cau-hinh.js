/**
 * Cấu hình — the screen that holds everything the app has to be told.
 *
 * The AI key is the subject of its own topic (`khoa-api-ai`) and the phone is
 * the subject of another (`ghep-dien-thoai-shopee`); this topic signposts both
 * and teaches neither. What is left is what nothing else covers: one save
 * button for the whole screen, the other three keys, the Telegram boxes, and
 * where the licence section sits.
 *
 * The labels are quoted from `gui/ui_tab_config.py` and `translations.py`, and
 * the three Pexels status sentences are quoted exactly — they are what the
 * screen actually says, `AutoReel Engine` included.
 */
export default {
  key: 'cau-hinh',
  group: 'app',
  slug: { vi: 'cau-hinh', en: 'settings' },
  updated: '2026-10-13',
  order: 1,
  title: { vi: 'Cấu hình', en: 'Settings' },
  description: {
    vi: 'Màn Cấu hình có những khối nào: khoá Pexels và ElevenLabs, bot Telegram, thiết bị Android, mục Bản quyền — và một nút lưu dùng chung.',
    en: 'What the Settings screen holds: the Pexels and ElevenLabs keys, the Telegram bot, the Android phone, the licence — and one save button.',
  },
  lead: {
    vi: 'Mọi thứ app cần biết nằm trên **một màn** này. Khoá AI là bài riêng; ở đây nói những khối còn lại.',
    en: 'Everything the app needs to be told sits on **one screen**. The AI key has its own topic; this one covers the rest.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/cau-hinh-01-screen-vi.webp',
          alt: 'Màn Cấu hình trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Màn này có gì' },
      {
        p: 'Sidebar: nhóm **Ứng dụng**, mục **Cấu hình**. Trang mở ra với tiêu đề **Cài đặt** — cùng một màn, hai chỗ ghi hai chữ khác nhau, nên đừng đi tìm hai màn.',
      },
      {
        table: {
          head: ['Khối', 'Có gì trong đó', 'Bài đọc thêm'],
          rows: [
            ['**Mô hình AI**', 'Nhà cung cấp, khoá, Base URL, Model, nút **Kiểm tra kết nối**', 'Khoá AI'],
            ['**Khoá khác**', '**KHOÁ PEXELS**, **KHOÁ ELEVENLABS**, cặp khoá Facebook', 'Nối Facebook bằng app Meta'],
            ['**Bot Telegram**', 'Token của bot và danh sách người được dùng', 'Bot Telegram'],
            ['**Thiết bị Android**', 'Ghép đôi điện thoại qua wifi để đăng bài Shopee', 'Ghép điện thoại Android'],
            ['**Bản quyền**', 'Mã kích hoạt và trạng thái bản quyền', 'Kích hoạt bản quyền'],
          ],
        },
      },
      {
        note: 'Khối **Mô hình AI** — khoá bắt buộc duy nhất — đã có bài riêng là **Khoá AI**. Ở đây chỉ nhắc tên nó, không dạy lại.',
      },

      { h2: 'Một nút lưu cho cả màn' },
      {
        p: 'Nút **lưu** nằm dưới khối **Thiết bị Android** và trên mục **Bản quyền**. Một nút ghi tất cả các ô phía trên nó: khoá AI, Pexels, ElevenLabs, cặp Facebook, token Telegram.',
      },
      {
        p: 'Mọi ô khoá đều hiện **dấu chấm** thay vì chữ, và đó là **chủ ý** — người đứng cạnh nhìn màn hình bạn cũng không đọc được. Nút **Hiện** bên cạnh từng ô mở chữ ra; bấm lần nữa thì nút đổi thành **Ẩn**.',
      },
      {
        check: 'Bấm **lưu** rồi nhìn chính nút đó: chữ đổi thành **Đã lưu** trong vài giây rồi trở lại. Nút không đổi nghĩa là lần lưu đó đã bị từ chối, và không có gì được ghi.',
      },
      {
        note: '**Đừng bấm lưu khi ô đang trống.** Ô trống được ghi đè lên giá trị cũ — xoá trắng một ô khoá rồi bấm **lưu** là mất khoá đó. Dán lại khoá cũ rồi lưu lại nếu đã lỡ.',
      },

      { h2: 'Khoá khác' },
      {
        p: 'Khối **Khoá khác** gồm ba nhóm, và không nhóm nào bắt buộc:',
      },
      {
        table: {
          head: ['Ô', 'Dùng cho', 'Thiếu thì sao'],
          rows: [
            ['**KHOÁ PEXELS**', 'Video nền lấy từ kho Pexels, cho **Video ngắn** và **Video tự động**', 'Video vẫn dựng bình thường, chỉ là không có footage — và không có dòng báo lỗi nào'],
            ['**KHOÁ ELEVENLABS**', 'Giọng đọc của engine ElevenLabs', 'Không sao — app có engine giọng chạy ngay trên máy bạn'],
            ['**FACEBOOK APP ID** và **FACEBOOK APP SECRET**', 'Đăng bài lên Page Facebook', 'Chỉ cần khi bạn thực sự dùng Facebook'],
          ],
        },
      },
      {
        p: 'Cạnh **KHOÁ ELEVENLABS** có ô **KÝ TỰ CÒN LẠI** — ô chỉ đọc, cho biết hạn mức còn lại của tài khoản. App hỏi nhà cung cấp khi bạn lưu một khoá ElevenLabs mới.\n\nDán khoá ElevenLabs sai thì **cả lần lưu bị từ chối**: những ô khác bạn vừa sửa cũng không được ghi. Sửa lại khoá rồi bấm **lưu** lần nữa.',
      },
      {
        p: 'Riêng **KHOÁ PEXELS** có một dòng trạng thái nằm ngay trên khối **Thiết bị Android**, vì khoá này còn phải được gửi sang bộ dựng video. Ba câu nó có thể nói:',
      },
      {
        ul: [
          '**AutoReel Engine: đã có khoá Pexels.** — khoá đã sang tới nơi.',
          '**AutoReel Engine: chưa có khoá Pexels — bấm Lưu để gửi sang.** — chưa lưu, hoặc chưa gửi được.',
          '**AutoReel Engine: không kết nối được.** — bộ dựng video chưa chạy.',
        ],
      },
      {
        p: 'Nút **Kiểm tra** cạnh ô khoá đọc lại trạng thái đó bất cứ lúc nào. Dòng trạng thái cũng tự cập nhật sau mỗi lần bấm **lưu**.',
      },
      {
        p: 'Cặp khoá Facebook là chỗ **duy nhất** đi ngược luật chung: nếu máy bạn có đặt sẵn hai giá trị này trong file **`.env`** của app thì giá trị trong file **thắng** giá trị bạn điền vào ô. Mọi khoá khác thì ô trên màn là nguồn.',
      },
      {
        note: 'Ô **FACEBOOK APP ID** hiện chữ bình thường; chỉ ô **FACEBOOK APP SECRET** mới giấu bằng dấu chấm. Đó không phải lỗi — id thì công khai, secret thì không.',
      },

      { h2: 'Bot Telegram' },
      {
        p: 'Khối **Bot Telegram** có hai ô: **BOT TOKEN (lấy từ @BotFather)** và **ID NGƯỜI ĐƯỢC DÙNG**. Cả hai vào chung một lần bấm **lưu** với mọi thứ phía trên.',
      },
      {
        p: 'Bot **không bắt buộc**, và nó chạy như một container thứ hai. Không phải thêm dòng nào vào docker-compose: bot đọc hai giá trị đó từ chính database nó dùng chung với app. Lưu xong, bật bot một lần:',
      },
      { code: 'docker compose --profile telegram up -d --build' },
      {
        note: 'Để **ID NGƯỜI ĐƯỢC DÙNG** trống nghĩa là **không ai dùng được** — bot từ chối chạy. Danh sách đó là thứ giữ người lạ khỏi điều khiển máy bạn, nên đừng đưa id của ai khác vào.',
      },

      { h2: 'Điện thoại và bản quyền' },
      {
        p: 'Khối **Thiết bị Android** ghép đôi điện thoại qua wifi để app tự đăng bài Shopee. Các nút ở đây — **Ghép đôi**, **Kết nối**, **Kiểm tra**, **Làm mới**, **Ngắt**, **Xoá** — hành động **ngay**, không đi qua nút **lưu**.',
      },
      {
        p: 'Mục **Bản quyền** nằm dưới cùng màn, sau cả nút **lưu**: ô **Mã kích hoạt**, nút **Kích hoạt**, nút **Kiểm tra ngay** và nút **Gỡ máy này**.',
      },
      {
        p: 'Cả hai phần này có bài riêng — **Ghép điện thoại Android** và **Kích hoạt bản quyền** — nên ở đây chỉ nói chúng nằm chỗ nào.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'khoa-api-ai' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/cau-hinh-01-screen-en.webp',
          alt: 'The Settings screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'What is on this screen' },
      {
        p: 'Sidebar: the **Ứng dụng** group, the **Cấu hình** entry. The page itself opens on the heading **Cài đặt** — one screen, named two different ways, so do not go looking for a second one.',
      },
      {
        table: {
          head: ['Block', 'What is in it', 'Read more in'],
          rows: [
            ['**Mô hình AI**', 'Provider, key, Base URL, Model, and **Kiểm tra kết nối**', 'The AI key'],
            ['**Khoá khác**', '**KHOÁ PEXELS**, **KHOÁ ELEVENLABS**, the Facebook pair', 'Connecting Facebook with a Meta app'],
            ['**Bot Telegram**', 'The bot token and the list of people allowed to use it', 'The Telegram bot'],
            ['**Thiết bị Android**', 'Pairing a phone over wifi, so the app can post to Shopee', 'Pairing an Android phone'],
            ['**Bản quyền**', 'The activation key and the licence status', 'Activating your licence'],
          ],
        },
      },
      {
        note: 'The **Mô hình AI** block — the one required key — already has its own topic, **Khoá AI**. This page only names it; it does not teach it again.',
      },

      { h2: 'One save button for the screen' },
      {
        p: 'The **lưu** button sits below **Thiết bị Android** and above **Bản quyền**. That one button writes every field above it: the AI key, Pexels, ElevenLabs, the Facebook pair and the Telegram token.',
      },
      {
        p: 'Every key field shows **dots** rather than characters, and that is **deliberate** — somebody standing beside you cannot read it. The **Hiện** button beside each field reveals it; press again and the button becomes **Ẩn**.',
      },
      {
        check: 'Press **lưu** and watch the button itself: it becomes **Đã lưu** for a few seconds, then changes back. A button that never changes means that press was refused, and nothing was written.',
      },
      {
        note: '**Do not press save over an empty box.** An empty box is written over the old value — clearing a key field and pressing **lưu** loses that key. Paste the key back and save again if it has already happened.',
      },

      { h2: 'The other keys' },
      {
        p: 'The **Khoá khác** (other keys) block holds three groups, none of them required:',
      },
      {
        table: {
          head: ['Field', 'What it is for', 'Without it'],
          rows: [
            ['**KHOÁ PEXELS**', 'Background footage from Pexels, for **Video ngắn** and **Video tự động**', 'The video still renders, it just has no footage — and nothing reports an error'],
            ['**KHOÁ ELEVENLABS**', 'The voice of the ElevenLabs engine', 'Nothing breaks — the app has voice engines that run on your own machine'],
            ['**FACEBOOK APP ID** and **FACEBOOK APP SECRET**', 'Posting to a Facebook Page', 'Only needed if you actually use Facebook'],
          ],
        },
      },
      {
        p: 'Beside **KHOÁ ELEVENLABS** is **KÝ TỰ CÒN LẠI**, a read-only box showing the account\'s remaining quota. The app asks the provider when you save a new ElevenLabs key.\n\nA wrong ElevenLabs key **refuses the whole save**: the other fields you just edited are not written either. Fix the key and press **lưu** again.',
      },
      {
        p: 'The **KHOÁ PEXELS** field is the one with a status line of its own, sitting just above the **Thiết bị Android** block, because that key also has to reach the renderer. The three sentences it can say:',
      },
      {
        ul: [
          '**AutoReel Engine: đã có khoá Pexels.** — the key has arrived.',
          '**AutoReel Engine: chưa có khoá Pexels — bấm Lưu để gửi sang.** — not saved yet, or not delivered.',
          '**AutoReel Engine: không kết nối được.** — the renderer is not running.',
        ],
      },
      {
        p: 'The **Kiểm tra** button beside the field re-reads that state at any time, and the line also updates itself after every press of **lưu**.',
      },
      {
        p: 'The Facebook pair is the **only** place where the general rule is reversed: if those two values are already set in the app\'s **`.env`** file, the file **wins** over what you type in the box. For every other key, the box on this screen is the source.',
      },
      {
        note: '**FACEBOOK APP ID** shows plain characters; only **FACEBOOK APP SECRET** is hidden behind dots. That is not a mistake — the id is public and the secret is not.',
      },

      { h2: 'The Telegram bot' },
      {
        p: 'The **Bot Telegram** block has two fields: **BOT TOKEN (lấy từ @BotFather)** and **ID NGƯỜI ĐƯỢC DÙNG** (allowed user ids). Both are written by the same **lưu** press as everything above.',
      },
      {
        p: 'The bot is **optional**, and it runs as a second container. There is no docker-compose line to add: the bot reads those two values from the same database it shares with the app. Once saved, start it once:',
      },
      { code: 'docker compose --profile telegram up -d --build' },
      {
        note: 'An empty **ID NGƯỜI ĐƯỢC DÙNG** means **nobody can use it** — the bot refuses to run. That list is what keeps a stranger from driving your machine, so keep anyone else\'s id out of it.',
      },

      { h2: 'The phone and the licence' },
      {
        p: 'The **Thiết bị Android** block pairs a phone over wifi so the app can post to Shopee itself. Its buttons — **Ghép đôi**, **Kết nối**, **Kiểm tra**, **Làm mới**, **Ngắt**, **Xoá** — act **immediately** and do not go through **lưu**.',
      },
      {
        p: 'The **Bản quyền** section is at the very bottom, below even the save button: the **Mã kích hoạt** field, the **Kích hoạt** button, **Kiểm tra ngay**, and **Gỡ máy này**.',
      },
      {
        p: 'Both of these have topics of their own — **Ghép điện thoại Android** and **Kích hoạt bản quyền** — so this page only says where they sit.',
      },

      { h2: 'What next' },
      { link: 'khoa-api-ai' },
    ],
  },
};

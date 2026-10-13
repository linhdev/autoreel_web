/**
 * Khoá AI — the one key that everything else depends on.
 *
 * Written against the app's own labels, read off `translations.py` rather than
 * remembered: the section is **Mô hình AI**, the picker is **Nhà cung cấp**,
 * and the button that answers whether the key works is **Kiểm tra kết nối**.
 * Somebody following this with the app open has to be able to find each one.
 */
export default {
  key: 'khoa-api-ai',
  group: 'connect',
  slug: { vi: 'khoa-api-ai', en: 'ai-api-key' },
  updated: '2026-10-13',
  order: 1,
  title: { vi: 'Khoá AI', en: 'The AI key' },
  description: {
    vi: 'Lấy khoá DeepSeek hoặc OpenAI, dán vào màn Cấu hình, chọn model và kiểm tra kết nối trước khi dựng video đầu tiên.',
    en: 'Get a DeepSeek or OpenAI key, paste it into Settings, choose a model, and test the connection before your first video.',
  },
  lead: {
    vi: 'Đây là khoá **duy nhất bắt buộc**. Không có nó thì không màn nào viết được kịch bản.',
    en: 'This is the **only required key**. Without it, no screen can write a script.',
  },

  body: {
    vi: [
      { h2: 'Khoá này dùng để làm gì' },
      {
        p: 'Mọi thứ liên quan tới **chữ** đều đi qua đây: viết kịch bản video, dịch phụ đề, đặt tiêu đề cho sản phẩm, và trợ lý trong app. Phần hình và tiếng chạy trên máy bạn, không cần khoá.',
      },
      {
        note: 'Khoá này **tính tiền theo lượng dùng**, trả thẳng cho nhà cung cấp — không qua chúng tôi. Một video vài chục giây tốn vài xu. Nạp tối thiểu là đủ dùng rất lâu.',
      },

      { h2: 'Chọn nhà cung cấp' },
      {
        table: {
          head: ['Nhà cung cấp', 'Lấy khoá ở đâu', 'Ghi chú'],
          rows: [
            ['**DeepSeek**', 'platform.deepseek.com → API Keys', 'Rẻ nhất trong ba, và đủ tốt cho việc viết kịch bản tiếng Việt'],
            ['**OpenAI**', 'platform.openai.com → API keys', 'Đắt hơn, chữ tiếng Việt nhỉnh hơn một chút'],
            ['**Tuỳ chỉnh**', 'Nhà cung cấp của bạn', 'Điền cả Base URL — dùng cho hàng xóm OpenAI khác'],
          ],
        },
      },

      { h2: 'Lấy khoá' },
      {
        steps: [
          {
            title: 'Đăng ký tài khoản',
            body: 'Vào trang của nhà cung cấp bạn chọn và tạo tài khoản. Cần thẻ để nạp tiền, nhưng không có gói thuê bao nào.',
          },
          {
            title: 'Vào mục API Keys',
            body: 'Với DeepSeek là **platform.deepseek.com** → menu bên trái → **API Keys**. Với OpenAI là **platform.openai.com** → **API keys**.',
          },
          {
            title: 'Bấm tạo khoá mới',
            body: 'Đặt tên gì cũng được — "AutoReel" chẳng hạn, để sau này biết khoá nào là khoá nào.',
          },
          {
            title: 'Chép khoá ra chỗ khác ngay',
            body: 'Khoá chỉ hiện **một lần**. Đóng cửa sổ đi là không xem lại được, phải tạo cái mới.',
            code: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          },
        ],
      },
      {
        note: 'Nạp tiền vào tài khoản là **bước riêng**, sau khi tạo khoá. Chưa nạp thì khoá đúng vẫn báo lỗi hết hạn mức — đây là chỗ nhiều người tưởng mình dán sai khoá.',
      },

      { h2: 'Dán vào app và kiểm tra' },
      {
        steps: [
          {
            title: 'Mở Cấu hình',
            body: 'Sidebar, nhóm **Ứng dụng**, mục **Cấu hình**. Khối đầu tiên là **Mô hình AI**.',
          },
          {
            title: 'Chọn nhà cung cấp ở ô Nhà cung cấp',
            body: 'Bấm **Nhà cung cấp** rồi chọn đúng cái bạn vừa lấy khoá. Ô **Base URL** và **Model** tự điền theo — chỉ điền tay khi bạn chọn "Tuỳ chỉnh".',
          },
          {
            title: 'Dán khoá vào ô khoá',
            body: 'Ô này hiện dấu chấm thay vì chữ, và đó là chủ ý — người khác nhìn màn hình bạn cũng không đọc được. Nút **Hiện** bên cạnh để xem lại nếu cần.',
            figure: {
              src: {
                vi: '/docs-img/khoa-ai-01-form-vi.webp',
                en: '/docs-img/khoa-ai-01-form-en.webp',
              },
              alt: { vi: 'Khối Mô hình AI trong màn Cấu hình: nhà cung cấp, khoá, base URL, model', en: 'The AI model block in Settings: provider, key, base URL, model' },
              caption: { vi: 'Bốn ô, và một nút để trả lời câu hỏi duy nhất đáng hỏi: khoá này có chạy không.', en: 'Four fields, and one button that answers the only question worth asking: does this key work.' },
              width: 1189,
              height: 470,
            },
          },
          {
            title: 'Bấm Kiểm tra kết nối',
            body: 'Nút **Kiểm tra kết nối** gọi thật lên nhà cung cấp bằng đúng những gì bạn vừa dán — chưa lưu, nên sai thì sửa rồi thử lại, không sợ hỏng gì. Kết quả hiện ngay bên dưới.',
          },
          {
            title: 'Bấm lưu',
            body: 'Nút **lưu** ở cuối màn hình. Chữ đổi thành **Đã lưu** một lát là xong.',
          },
        ],
      },
      {
        check: 'Sau khi bấm **Kiểm tra kết nối**, dòng chữ hiện ra màu xanh và nói kết nối được. Màu đỏ nghĩa là chưa — đọc câu nó nói, thường là khoá sai hoặc tài khoản chưa nạp tiền.',
      },
      {
        note: '**Lưu là bước riêng.** Kiểm tra kết nối chỉ trả lời, không ghi gì. Dán khoá rồi đóng tab mà không bấm lưu thì lần sau vẫn phải dán lại.',
      },

      { h2: 'Khi báo lỗi' },
      {
        table: {
          head: ['Câu báo', 'Nghĩa là'],
          rows: [
            ['`401` hoặc `invalid api key`', 'Khoá dán thiếu ký tự, hoặc đã bị xoá trên trang nhà cung cấp'],
            ['`insufficient balance`', 'Tài khoản chưa nạp tiền, hoặc đã dùng hết'],
            ['`model not found`', 'Tên model sai — chọn lại ở ô **Model**, hoặc để nguyên giá trị mặc định'],
            ['Không kết nối được', 'Mạng, hoặc **Base URL** sai khi bạn chọn "Tuỳ chỉnh"'],
          ],
        },
      },
      {
        note: 'Đổi nhà cung cấp giữa chừng là chuyện bình thường — dán khoá mới, bấm kiểm tra, bấm lưu. Không có gì bị mất.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'facebook-meta-app' },
    ],

    en: [
      { h2: 'What this key is for' },
      {
        p: 'Everything to do with **words** goes through it: writing video scripts, translating subtitles, naming products, and the assistant inside the app. The picture and the voice run on your own machine and need no key.',
      },
      {
        note: 'This key is **metered** and paid straight to the provider — not through us. A video of a few dozen seconds costs a few cents. The smallest top-up lasts a long time.',
      },

      { h2: 'Choosing a provider' },
      {
        table: {
          head: ['Provider', 'Where the key comes from', 'Note'],
          rows: [
            ['**DeepSeek**', 'platform.deepseek.com → API Keys', 'The cheapest of the three, and good enough at writing Vietnamese scripts'],
            ['**OpenAI**', 'platform.openai.com → API keys', 'Dearer, slightly better Vietnamese'],
            ['**Custom**', 'Your own provider', 'Fill in the Base URL too — for an OpenAI-compatible endpoint elsewhere'],
          ],
        },
      },

      { h2: 'Getting a key' },
      {
        steps: [
          {
            title: 'Create an account',
            body: 'At whichever provider you picked. A card is needed to add credit, but there is no subscription.',
          },
          {
            title: 'Find the API keys page',
            body: 'DeepSeek: **platform.deepseek.com** → the left-hand menu → **API Keys**. OpenAI: **platform.openai.com** → **API keys**.',
          },
          {
            title: 'Create a new key',
            body: 'Name it anything — "AutoReel" is a good choice, so you know later which key is which.',
          },
          {
            title: 'Copy it somewhere else immediately',
            body: 'The key is shown **once**. Close the window and it cannot be viewed again; you would create another.',
            code: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          },
        ],
      },
      {
        note: 'Adding credit is a **separate step** after creating the key. Until you do, a perfectly good key still reports a quota error — which is where most people conclude they pasted it wrong.',
      },

      { h2: 'Pasting it into the app and testing it' },
      {
        steps: [
          {
            title: 'Open Settings',
            body: 'Sidebar, the **Ứng dụng** group, **Cấu hình** (Settings). The first block is **Mô hình AI**.',
          },
          {
            title: 'Pick your provider',
            body: 'Click **Nhà cung cấp** (Provider) and choose the one you took the key from. **Base URL** and **Model** fill themselves in; you only type them under "Custom".',
          },
          {
            title: 'Paste the key',
            body: 'The field shows dots rather than characters, on purpose — somebody looking over your shoulder cannot read it. The **Hiện** (Show) button beside it reveals it if you need to check.',
            figure: {
              src: {
                vi: '/docs-img/khoa-ai-01-form-vi.webp',
                en: '/docs-img/khoa-ai-01-form-en.webp',
              },
              alt: { vi: 'Khối Mô hình AI trong màn Cấu hình: nhà cung cấp, khoá, base URL, model', en: 'The AI model block in Settings: provider, key, base URL, model' },
              caption: { vi: 'Bốn ô, và một nút để trả lời câu hỏi duy nhất đáng hỏi: khoá này có chạy không.', en: 'Four fields, and one button that answers the only question worth asking: does this key work.' },
              width: 1189,
              height: 470,
            },
          },
          {
            title: 'Press Kiểm tra kết nối',
            body: 'The **Kiểm tra kết nối** button makes a real call to the provider with exactly what you just pasted — nothing is saved yet, so a mistake costs nothing. The answer appears below it.',
          },
          {
            title: 'Press save',
            body: 'The **lưu** (save) button at the bottom of the screen. It changes to **Đã lưu** ("saved") for a moment.',
          },
        ],
      },
      {
        check: 'After **Kiểm tra kết nối**, a green line appears saying the connection worked. Red means it did not — read the sentence it gives you; it is usually a wrong key or an account with no credit.',
      },
      {
        note: '**Saving is a separate step.** Testing only answers; it writes nothing. Paste a key, close the tab, and you will paste it again next time.',
      },

      { h2: 'When it reports an error' },
      {
        table: {
          head: ['The message', 'What it means'],
          rows: [
            ['`401` or `invalid api key`', 'The key is missing characters, or was deleted on the provider\'s site'],
            ['`insufficient balance`', 'The account has no credit, or has used it up'],
            ['`model not found`', 'The model name is wrong — choose again in **Model**, or leave the default'],
            ['Cannot connect', 'The network, or a wrong **Base URL** under "Custom"'],
          ],
        },
      },
      {
        note: 'Changing provider halfway through is ordinary — paste the new key, test, save. Nothing is lost.',
      },

      { h2: 'What next' },
      { link: 'facebook-meta-app' },
    ],
  },
};

/**
 * Bot Telegram — the same app, driven from a chat window.
 *
 * The commands and what each one does come from `HUONG-DAN-SU-DUNG.md` §6 and
 * from `shortGPT/integrations/telegram/handlers.py`, which agree: ten
 * commands, `/start` and `/menu` being the same answer twice.
 *
 * The one thing worth leading with is that the bot holds no state — it writes a
 * row and the app picks it up — because that is what explains why closing the
 * bot does not stop a render, which is the question people actually ask.
 */
export default {
  key: 'telegram-bot',
  group: 'app',
  slug: { vi: 'telegram-bot', en: 'telegram-bot' },
  updated: '2026-10-19',
  order: 2,
  title: { vi: 'Bot Telegram', en: 'The Telegram bot' },
  description: {
    vi: 'Bật bot Telegram của AutoReel: token từ BotFather, id từ userinfobot, và mười câu lệnh điều khiển app ngay trong chat.',
    en: 'Turning on the AutoReel Telegram bot: the token from BotFather, your id from userinfobot, and the commands that drive the app from a chat.',
  },
  lead: {
    vi: 'Bot là **không bắt buộc**. Nó chỉ là một cách khác để bấm đúng những nút bạn vẫn bấm trên màn hình.',
    en: 'The bot is **optional**. It is another way to press the same buttons you already press on screen.',
  },

  body: {
    vi: [
      { h2: 'Bot này là gì' },
      {
        p: 'Một container thứ hai, chạy cạnh app. Bạn nhắn cho nó từ điện thoại, nó mở đúng những luồng mà màn hình vẫn mở: **Reup**, **Review**, **Affiliate**, cộng thêm vài câu hỏi về việc đang chạy.',
      },
      {
        p: 'Bot **không tự làm gì cả**. Nó viết một dòng vào database, app đọc dòng đó rồi gọi đúng thứ mà màn hình vẫn gọi. Nghĩa là **tắt bot giữa chừng không làm chết việc đang chạy** — việc nằm ở app, không nằm ở bot.',
      },
      {
        p: 'Menu của bot là các nút, và mỗi nút đứng cho một câu lệnh: **Reup**, **Review**, **Affiliate**, **Jobs**, **Status**, **Trợ giúp**. Bấm nút hay gõ câu lệnh đều ra cùng một việc.',
      },
      {
        note: 'Phiếu **Review** có thêm chế độ thứ ba **Tóm tắt phim**: bot đọc cả phim rồi kể lại thành **một** video tiếng Việt. Chế độ này **không đăng** — video nằm trong Thư viện video, và phiếu không hỏi số lượng hay nơi đăng.',
      },

      { h2: 'Bật bot' },
      {
        steps: [
          {
            title: 'Lấy token từ BotFather',
            body: 'Trong Telegram, nhắn cho **@BotFather**, gõ `/newbot` rồi làm theo nó hỏi. Xong, nó trả về một token.',
            code: '1234567890:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          },
          {
            title: 'Lấy id số của bạn từ userinfobot',
            body: 'Đây là **bước riêng**, và là chỗ hay bị bỏ qua: nhắn cho **@userinfobot** để nó trả về id số của chính bạn. Token của bot và id của người dùng là hai thứ khác nhau.',
          },
          {
            title: 'Dán cả hai vào màn Cấu hình',
            body: 'Mở app, vào màn **Cấu hình**, khối **Bot Telegram**: dán token vào **BOT TOKEN (lấy từ @BotFather)** và id vào **ID NGƯỜI ĐƯỢC DÙNG**, rồi bấm **lưu**.',
          },
          {
            title: 'Dựng container của bot một lần',
            body: 'Bot chạy như một container riêng, nên phải bật nó lên một lần. Không phải sửa file docker-compose — bot đọc hai giá trị vừa lưu từ chính database dùng chung với app.',
            code: 'docker compose --profile telegram up -d --build',
          },
          {
            title: 'Nhắn /start',
            body: 'Nhắn `/start` cho bot. Nó trả lời bằng menu.',
          },
        ],
      },
      {
        check: 'Bot trả lời `/start` bằng menu có các nút **Reup**, **Review**, **Affiliate**, **Jobs**, **Status**, **Trợ giúp**. Không thấy trả lời thì container chưa chạy — xem `docker logs autoreel-telegram`.',
      },
      {
        note: 'Danh sách **ID NGƯỜI ĐƯỢC DÙNG** để trống thì bot **từ chối chạy** chứ không chạy nửa vời, và in lý do ra `docker logs autoreel-telegram`. Danh sách rỗng nghĩa là ai nhắn cũng đăng được lên tài khoản thật của bạn.',
      },

      { h2: 'Những câu lệnh' },
      {
        table: {
          head: ['Câu lệnh', 'Việc'],
          rows: [
            ['**/start** hoặc **/menu**', 'Mở menu. Hai lệnh này trả lời giống nhau.'],
            ['**/help**', 'Các dòng hướng dẫn.'],
            ['**/reup**', 'Mở phiếu chạy luồng reup.'],
            ['**/review**', 'Mở phiếu chạy luồng review, gồm cả chế độ **Tóm tắt phim**.'],
            ['**/affiliate**', 'Mở phiếu chạy luồng affiliate.'],
            ['**/cancel**', 'Bỏ phiếu đang điền dở.'],
            ['**/jobs**', 'Hỏi app xem đang có gì trong hàng đợi.'],
            ['**/status**', 'Không kèm gì: hỏi cả máy — ứng dụng, engine, điện thoại, Facebook.'],
            ['**/status [mã]**', 'Theo dõi một lượt chạy theo mã của nó.'],
            ['**/pages**', 'Hỏi app danh sách Page Facebook.'],
          ],
        },
      },
      {
        p: 'Gõ một câu lệnh không có trong bảng thì bot trả về menu, chứ không im lặng.\n\nBa câu hỏi — `/jobs`, `/status`, `/pages` — bot **không tự trả lời**. Nó hỏi app rồi nhắn lại rằng đã hỏi, và câu trả lời thật tới sau đó một nhịp, như một tin nhắn bình thường.',
      },

      { h2: 'Theo dõi việc đang chạy' },
      {
        p: '`/jobs` liệt kê hàng đợi theo hai mục. Mục *Đang chạy* là những việc đang làm, và mỗi task render hiện **tên sản phẩm kèm phần trăm** chứ không phải một dãy mã — ví dụ `⏳ AutoReel Engine · Đang dựng video · 40% · Áo thun nam cotton`. Mục *Vừa xong* là những gì đã xong, kèm tên.',
      },
      {
        p: '`/status <mã>` theo dõi **một lượt** và **tự đổi theo bước**: đọc link → lấy ảnh → viết kịch bản → dựng video → xếp hàng đợi đăng. Tin nhắn đứng im ở một bước nghĩa là bước đó đang chạy lâu thật.',
      },
      {
        p: '`/status` trần, không kèm mã, nói bốn thứ còn sống hay không: **ứng dụng**, **engine**, **điện thoại**, **Facebook**. Dòng engine ghi `Sẵn sàng` là dựng video được.',
      },
      {
        note: 'Một lượt đang chạy mà **app tắt** thì thành `failed` và **không tự chạy lại** — chạy lại có thể đăng hai lần. Việc đã hỏng thì để nguyên đó và làm lại bằng tay.',
      },

      { h2: 'Ba câu lệnh có thể đăng thật' },
      {
        p: '`/affiliate`, `/reup` và `/review` **đăng bài thật**, không phải bản xem thử — trừ khi `/review` chạy ở chế độ **Tóm tắt phim**. Chế độ đó chỉ dựng **một** video và **không đăng**; video nằm trong **Thư viện video**.',
      },
      {
        p: 'Phiếu của mỗi luồng có phần tóm tắt nói rõ **sẽ dựng mấy video và đăng lên đâu**. **Chưa bấm Chạy thì chưa có gì xảy ra** — nút **Chạy** ở cuối phiếu là thứ duy nhất bắt đầu, và cạnh nó là nút **Huỷ**.',
      },
      {
        p: 'Nguồn và nơi đăng **không được nhớ giữa hai lần**: link hôm qua là video hôm qua, và một ô tick sót lại từ lần trước là ô tick không ai đánh hôm nay. Các lựa chọn khác thì bot nhớ, nên chỉ phải điền một lần.',
      },

      { h2: 'Việc tiếp theo' },
      { link: 'cau-hinh' },
    ],

    en: [
      { h2: 'What this bot is' },
      {
        p: 'A second container, running beside the app. You message it from your phone and it opens the same flows the screens open — **Reup**, **Review**, **Affiliate** — plus a few questions about work in progress.',
      },
      {
        p: 'The bot **does nothing on its own**. It writes a row into the database, the app reads that row and calls exactly what the screens call. Which means **stopping the bot mid-run does not kill the running job** — the work is in the app, not in the bot.',
      },
      {
        p: 'The bot\'s menu is buttons, and each stands for a command: **Reup**, **Review**, **Affiliate**, **Jobs**, **Status**, **Trợ giúp**. A pressed button and a typed command do the same thing.',
      },
      {
        note: 'The **Review** card has a third mode, **Recap the film**: the bot reads the whole film and retells it as **one** Vietnamese video. That mode **never posts** — the video lands in the Video library, and the card does not ask for a count or a destination.',
      },

      { h2: 'Turning it on' },
      {
        steps: [
          {
            title: 'Get a token from BotFather',
            body: 'In Telegram, message **@BotFather**, type `/newbot` and answer its questions. It hands back a token.',
            code: '1234567890:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          },
          {
            title: 'Get your own numeric id from userinfobot',
            body: 'This is a **separate step**, and the one people skip: message **@userinfobot** and it returns your numeric id. The bot\'s token and the user\'s id are two different things.',
          },
          {
            title: 'Paste both into Settings',
            body: 'Open the app, go to **Cấu hình**, the **Bot Telegram** block: paste the token into **BOT TOKEN (lấy từ @BotFather)** and the id into **ID NGƯỜI ĐƯỢC DÙNG**, then press **lưu**.',
          },
          {
            title: 'Build the bot container once',
            body: 'The bot runs as its own container, so it has to be started once. There is no docker-compose file to edit — the bot reads the two values it just stored from the same database it shares with the app.',
            code: 'docker compose --profile telegram up -d --build',
          },
          {
            title: 'Send /start',
            body: 'Message the bot `/start`. It answers with the menu.',
          },
        ],
      },
      {
        check: '`/start` is answered with the menu carrying **Reup**, **Review**, **Affiliate**, **Jobs**, **Status** and **Trợ giúp**. No answer means the container is not running — check `docker logs autoreel-telegram`.',
      },
      {
        note: 'An empty **ID NGƯỜI ĐƯỢC DÙNG** list makes the bot **refuse to run** rather than run half-safe, and prints the reason to `docker logs autoreel-telegram`. An empty list would mean anyone who messages it can post to your real accounts.',
      },

      { h2: 'The commands' },
      {
        table: {
          head: ['Command', 'What it does'],
          rows: [
            ['**/start** or **/menu**', 'Open the menu. Both answer the same way.'],
            ['**/help**', 'The help lines.'],
            ['**/reup**', 'Open the card for the reup flow.'],
            ['**/review**', 'Open the card for the review flow, including the **Recap the film** mode.'],
            ['**/affiliate**', 'Open the card for the affiliate flow.'],
            ['**/cancel**', 'Drop the card you are filling in.'],
            ['**/jobs**', 'Ask the app what is in the queue.'],
            ['**/status**', 'With nothing after it: ask about the whole machine — app, engine, phone, Facebook.'],
            ['**/status [id]**', 'Follow one run by its id.'],
            ['**/pages**', 'Ask the app for the Facebook Page list.'],
          ],
        },
      },
      {
        p: 'A command that is not in that table gets the menu back rather than silence.\n\nThree of those questions — `/jobs`, `/status`, `/pages` — the bot **cannot answer by itself**. It asks the app and says that it asked; the real answer arrives a beat later, as an ordinary message.',
      },

      { h2: 'Following work in progress' },
      {
        p: '`/jobs` lists the queue in two parts. *Đang chạy* ("running") is the work in hand, and each render task shows **the product name with a percentage** rather than a string of ids — for example `⏳ AutoReel Engine · Đang dựng video · 40% · Áo thun nam cotton`. *Vừa xong* ("just finished") is what is done, by name.',
      },
      {
        p: '`/status <id>` follows **one run** and **rewrites itself with each step**: read the link → fetch pictures → write the script → render the video → queue it for posting. A message that sits still on one step means that step really is slow.',
      },
      {
        p: '`/status` with no id reports whether four things are alive: the **app**, the **engine**, the **phone** and **Facebook**. An engine line reading `Sẵn sàng` ("ready") means rendering can start.',
      },
      {
        note: 'A run in flight when the **app stops** becomes `failed` and is **not restarted** — re-running it could post twice. A failed run stays failed; do it again by hand.',
      },

      { h2: 'Three commands that can really post' },
      {
        p: '`/affiliate`, `/reup` and `/review` **post for real**. They are not a preview — except `/review` in **Recap the film** mode. That one makes **one** video and **never posts**; the video lands in the **Video library**.',
      },
      {
        p: 'Each flow\'s card carries a summary saying plainly **how many videos it will make and where they will go**. **Nothing happens until Chạy is pressed** — the **Chạy** ("run") button at the foot of the card is the only thing that starts it, with **Huỷ** ("cancel") beside it.',
      },
      {
        p: 'The source and the destinations are **not remembered between runs**: yesterday\'s link is yesterday\'s video, and a tick left over from last time is a tick nobody made today. Everything else the bot does remember, so it only has to be typed once.',
      },

      { h2: 'What next' },
      { link: 'cau-hinh' },
    ],
  },
};

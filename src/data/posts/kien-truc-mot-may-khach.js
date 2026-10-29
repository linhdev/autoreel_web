/**
 * Blog post — "Kiến trúc AutoReel: một máy khách, không cloud".
 *
 * The network map of the whole system: what sits on the buyer's machine, what
 * crosses the boundary, and which of those crossings you chose. Written for
 * the reader deciding whether a single-machine design is a compromise or the
 * point; the honest cost of one machine closes it.
 *
 * Nothing from inside the build is named: `scripts/lib/post-rules.mjs` holds
 * the word list these articles may not contain.
 */
export default {
  slug: {
    vi: 'kien-truc-mot-may-khach',
    en: 'architecture-one-machine',
  },
  title: {
    vi: 'Kiến trúc AutoReel: một máy khách, không cloud',
    en: 'One machine, no cloud: what runs where',
  },
  description: {
    vi: 'Giao diện, bộ điều phối, engine, một tệp dữ liệu, bộ kiểm bản quyền và Chrome — tất cả trên một máy. Bài này là bản đồ năm đường ra internet và lý do chúng nằm ở đó.',
    en: 'Interface, orchestrator, engines, one data file, a licence guard and Chrome — all on one machine. The map of the five roads out, and why each exists.',
  },
  date: '2026-10-29',
  minutes: { vi: 8, en: 7 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Bỏ hết tên gọi sang một bên, hệ thống này là một chương trình chạy trên máy bạn, ghi xuống một tệp, và chỉ nói chuyện với bên ngoài ở năm chỗ. Bài này vẽ đúng năm chỗ đó — và nói cả chỗ nào không đi ra.',
    en: 'Strip the names away and this is a program running on your machine, writing to one file, talking to the outside world in exactly five places. This article maps those five, and the things that never leave at all.',
  },
  body: {
    vi: [
      {
        h2: 'Rút dây mạng ra, giao diện vẫn mở — đó là cả kiến trúc trong một phép thử',
      },
      {
        p: 'Một người bán hàng để chiếc máy bàn ở góc nhà, cắm điện, dán ba chục đường link sản phẩm rồi đi ngủ. Sáng ra có một lô video.\n\nRút dây mạng ra và mở lại ứng dụng: cửa sổ vẫn lên, thư viện vẫn liệt kê video cũ, những job đang chờ vẫn nằm đúng chỗ. Chỉ những việc cần internet mới dừng — tải nguồn về, gọi mô hình, đăng bài, kiểm bản quyền.',
      },
      {
        p: 'Đó không phải một tính năng được thêm vào. Đó là hệ quả của một quyết định: mọi thứ thuộc về công việc nằm trên đĩa của bạn, còn internet chỉ là nơi lấy nguyên liệu và đẩy thành phẩm đi.',
      },
      {
        h2: 'Sáu thứ nằm trong máy, và chỉ một trong số đó giữ sự thật',
      },
      {
        p: 'Kể tên từng thứ một lượt, vì phần lớn hiểu lầm về hệ thống này đến từ chỗ tưởng rằng có một máy chủ ở đâu đó đang giữ trạng thái hộ bạn.',
      },
      {
        ul: [
          'Giao diện. Một trang mở trong trình duyệt, do chính tiến trình ứng dụng phục vụ. Nó thu lựa chọn, gọi xuống dưới, rồi vẽ lại trạng thái đọc từ tệp dữ liệu. Đóng tab không làm mất job nào.',
          'Bộ điều phối, viết bằng Python. Nó giữ thứ tự các bước, số lần thử lại, các phép kiểm tra và mọi lời gọi ra ngoài. Đây là phần duy nhất ra quyết định.',
          'Engine. Giọng đọc có bốn engine: hai cái chạy qua mạng, hai cái chạy ngay trên máy, và cái mặc định là cái không cần khoá nào. Dựng hình và phụ đề chạy trong cùng tiến trình, phần nặng đẩy xuống công cụ xử lý video bên dưới.',
          'Một tệp dữ liệu duy nhất. Job, trạng thái từng bước, thư viện video đã làm, lời thoại đã đọc, lịch đăng — tất cả trong một tệp, cộng tệp nhật ký nằm cạnh nó.',
          'Bộ kiểm bản quyền. Đọc token đã ký trong máy, đối chiếu với khoá công khai nằm sẵn trong bản cài, và trả lời có hoặc không trước khi một việc nặng được bắt đầu.',
          'Bot Telegram. Một tiến trình thứ hai trên cùng chiếc máy, đọc cùng tệp dữ liệu. Không có token thì không có luồng nào chạy, và ứng dụng không thức dậy mỗi giây để nhìn một bảng rỗng.',
          'Chrome của bạn. Một cửa sổ thật trên máy có màn hình, dùng cho đúng hai việc: đọc Douyin và đăng Shopee.',
        ],
      },
      {
        figure: {
          src: '/blog/kien-truc-mot-may-khach.svg',
          alt: 'Sơ đồ một khối lớn bao quanh toàn bộ phần mềm chạy trên máy người dùng: giao diện, bộ điều phối Python, engine giọng đọc và dựng hình, một tệp dữ liệu duy nhất, bộ kiểm bản quyền, bot Telegram và trình duyệt Chrome. Bên ngoài khối có năm hộp: nền tảng nguồn video, mô hình AI người dùng cấu hình, Facebook, máy chủ bản quyền và Telegram; mũi tên tải nguồn chỉ đi vào trong, bốn mũi tên còn lại đi ra.',
          caption: 'Năm đường ra vào internet. Đường tải nguồn là đường duy nhất đi vào; mọi thứ khác trong máy đọc và ghi cùng một tệp.',
        },
      },
      {
        p: 'Sáu thứ ấy chia nhau một ổ đĩa, một card đồ hoạ và một hàng đợi. Đó là lý do số việc chạy cùng lúc do máy quyết định chứ không do bạn chọn: ứng dụng đọc số nhân và bộ nhớ trống của chính nó rồi tự đặt giới hạn.',
      },
      {
        h2: 'Một yêu cầu đi qua năm chỗ, và chỉ ghi xuống đúng một lần',
      },
      {
        p: 'Bấm nút, và đây là đường đi của một job.',
      },
      {
        ol: [
          'Giao diện gom lựa chọn rồi gọi xuống bộ điều phối. Không có gì được quyết ở đây, kể cả việc job có được chạy hay không.',
          'Bộ điều phối hỏi bộ kiểm bản quyền trước. Không có quyền cho việc này thì dừng trước khi ghi bất cứ thứ gì — chặn ở đây rẻ hơn chặn sau mười phút dựng hình.',
          'Mỗi video trong lô được ghi thành một dòng riêng: đầu vào, ngôn ngữ, giọng đọc, trạng thái đang chờ, bước 0 trên 5. Việc ghi xảy ra trước khi một khung hình nào được dựng.',
          'Một nhóm công nhân có giới hạn nhận các dòng đó. Mỗi job chạy năm bước: đọc lời, dịch, tạo giọng, dựng hình, gắn thông tin. Tiến độ ghi lại mỗi hai giây, và ghi ngay khi job kết thúc, dù kết thúc thế nào.',
          'Đường dẫn thành phẩm và một dòng trong thư viện được ghi. Màn hình vẽ lại bằng cách đọc dòng đó, không bằng cách nhớ cái nút bạn vừa bấm.',
        ],
      },
      {
        p: 'Chỉ bước 3 và bước 5 ghi sự thật. Thanh tiến độ, danh sách đang chạy, tin nhắn báo về điện thoại — tất cả đọc lại từ đó.\n\nHệ quả thực tế: tải lại trang giữa lúc chạy không mất gì, mở ứng dụng ở một cửa sổ khác thấy đúng cùng một lô, và một job bị cắt giữa đường vẫn còn dòng để đọc. Nó không biến mất, và cũng không tự chạy lại sau lưng bạn.',
      },
      {
        h2: 'Năm đường ra internet, và cả năm đều nằm sau một lựa chọn của bạn',
      },
      {
        p: '"Chạy local" là câu dễ nói quá. Đếm cho đúng thì có năm đường, không hơn.',
      },
      {
        ul: [
          'Đường vào nền tảng nguồn. Link bạn dán quyết định nó đi đâu: YouTube, TikTok, Douyin, Bilibili, Hồng Quả, iQiyi. Đây là đường hai chiều — hỏi trang trước, tải tệp về sau.',
          'Đường tới mô hình ngôn ngữ. Khoá và địa chỉ bạn điền quyết định ai đọc lời thoại của bạn. Mặc định là một dịch vụ tương thích OpenAI; đổi nhà cung cấp là đổi hai ô, không phải cài lại.',
          'Đường tới Facebook. Chỉ mở khi bạn nối một Page và bật đăng thật; mặc định là chế độ giả lập, ghi một mã bài giả và không gửi gì đi. Khi bật thật, tệp được đẩy lên máy chủ tải của Facebook rồi chờ trạng thái đăng, tối đa 300 giây.',
          'Đường tới máy chủ bản quyền. Một tên miền duy nhất. Nó nhận mã kích hoạt và mã máy, trả về một token đã ký; những lần sau chỉ gia hạn token đó.',
          'Đường tới Telegram. Chỉ có khi bạn nhập token bot. Bot hỏi tin nhắn liên tục, nên đây là đường duy nhất hoạt động cả lúc bạn không đụng vào máy.',
        ],
      },
      {
        p: 'Không có đường thứ sáu: không có mã nào gửi số liệu sử dụng, không có báo cáo ẩn, không có tài khoản trung gian nào đứng giữa bạn và nền tảng.',
      },
      {
        h2: 'Thứ không đi ra ngoài cũng là một phần của thiết kế',
      },
      {
        p: 'Danh sách ở lại ngắn hơn nhưng quan trọng hơn: tệp dữ liệu, video đã dựng, thư viện, phiên đăng nhập Shopee và hồ sơ Chrome, token bản quyền, phông chữ và mẫu dựng.\n\nTệp video không đi qua máy chủ của ai cả. Khi bạn đăng, nó đi thẳng từ máy bạn tới Facebook, hoặc qua cửa sổ Chrome tới Shopee.',
      },
      {
        p: 'Lời thoại là ngoại lệ, và nên nói rõ: khi bạn dịch hoặc viết kịch bản, từng dòng lời được gửi cho mô hình bạn đã chọn. Đó vẫn là đường số hai, không phải đường mới — nhưng nó có nghĩa là phần chữ rời khỏi máy, còn tệp video thì không.',
      },
      {
        p: 'Sao lưu cũng theo nguyên tắc đó. Chép tệp dữ liệu và tệp nhật ký nằm cạnh nó là đủ; không có cơ sở dữ liệu từ xa nào để đồng bộ, nên cũng không có bản sao nào bạn không kiểm soát được.',
      },
      {
        h2: 'Bộ kiểm bản quyền nằm ở chỗ công việc bắt đầu, không phải ở chỗ bấm nút',
      },
      {
        p: 'Một hàng rào đặt ở giao diện là hàng rào mà bot, công cụ dòng lệnh và các công cụ tự động đi vòng qua, vì chúng không vẽ màn hình nào cả. Nên phép kiểm nằm ở hai chỗ: lúc một lô việc được nhận, và lúc một bài được đăng.',
      },
      {
        p: 'Bản quyền mặc định bật. Token mang hạn của chính nó, được ký bằng Ed25519, và khoá công khai nằm sẵn trong bản cài — nên một máy chưa từng lên mạng vẫn kiểm được token. Mất mạng vài ngày vẫn chạy; quá hạn token thì dừng và nói lý do.',
      },
      {
        p: 'Đổi giờ hệ thống không cứu được ai: hạn nằm trong chữ ký, tính theo đồng hồ của máy chủ. Lùi đồng hồ thì được đúng một lần, tối đa sáu tiếng, vì hệ thống nhớ mốc thời gian cao nhất nó từng thấy.\n\nVà một khi bị thu hồi thì không có ân hạn. Thu hồi, tạm ngưng, hết hạn là những câu trả lời dứt khoát, khác hẳn "không gọi được máy chủ". Gộp hai thứ đó làm một là cách một bản quyền đã hoàn tiền vẫn chạy thêm ba ngày.',
      },
      {
        h2: 'Chrome là cửa sổ của bạn, và nó chỉ mở khi bạn mở',
      },
      {
        p: 'Hai cửa sổ, hai cổng khác nhau: 47832 cho Douyin, 47831 cho Shopee. Không dùng cổng 9222 quen thuộc, vì đó là cổng đầu tiên các đoạn mã chống gian lận dò thử; một cổng không ai dùng thì không nói lên điều gì.',
      },
      {
        p: 'Khi ứng dụng chạy ở nơi không có màn hình, nó không tự mở cửa sổ được. Bạn mở bằng một tệp khởi động trên máy có màn hình, đăng nhập một lần, rồi ứng dụng nối vào cửa sổ đó. Cửa sổ phải lắng nghe trên mọi địa chỉ mạng chứ không chỉ máy cục bộ; nếu không, yêu cầu từ trong ứng dụng bị từ chối bằng một lỗi trông y như "không có trình duyệt nào".',
      },
      {
        note: 'Trong lúc cửa sổ đó mở, bất kỳ chương trình nào chạm được vào cổng ấy đều điều khiển được một trình duyệt đã đăng nhập sẵn. Đóng cửa sổ khi làm xong, và chặn cổng đó ở tường lửa nếu máy nằm trong một mạng bạn không kiểm soát.',
      },
      {
        p: 'Đây là chỗ duy nhất trong kiến trúc mà an toàn phụ thuộc vào thói quen của bạn chứ không phụ thuộc vào mã. Nói thẳng như vậy tốt hơn là để bạn phát hiện ra sau.',
      },
      {
        h2: 'Một máy có nghĩa là một chỗ hỏng, và không ai trực thay bạn',
      },
      {
        p: 'Máy tắt thì hàng đợi đứng. Ổ đầy thì cả loạt dừng, và thường dừng ở giữa bước nặng nhất. Mất điện lúc hai giờ sáng thì không có ai khởi động lại hộ bạn, và không có bản sao nào ở nơi khác để chạy tiếp.',
      },
      {
        p: 'Đổi lại, không có hoá đơn máy chủ, không có giới hạn phút dựng, và không có dữ liệu nào rời máy ngoài năm đường ở trên. Một chiếc máy để bàn chạy qua đêm làm được khối lượng mà một người ngồi dựng tay cả tuần không xong.',
      },
      {
        note: 'Một máy khách không phải bản cloud thu nhỏ. Nó được thiết kế cho đúng một người, một ổ đĩa và một tá việc chạy qua đêm. Đừng mua thêm máy chủ để chạy nó cho chắc — hãy mua một ổ dự phòng và một ổ cắm điện ổn định, vì hai thứ đó mới là thứ hay hỏng thật.',
      },
    ],
    en: [
      {
        h2: 'Unplug the network and the window still opens — that is the whole design in one test',
      },
      {
        p: 'A seller leaves a desktop in the corner of the house, powered on, thirty product links pasted in, and goes to bed. In the morning there is a batch of videos.\n\nNow unplug the network and open the app again: the window still loads, the library still lists the old videos, the jobs that were waiting are still sitting where they were. Only the parts that need the internet stop — pulling footage in, calling a model, posting, checking the licence.',
      },
      {
        p: 'That is not a feature somebody added. It falls out of one decision: everything that belongs to the work lives on your disk, and the internet is only where raw material comes from and finished files go.',
      },
      {
        h2: 'Six things sit on the machine, and exactly one of them holds the truth',
      },
      {
        p: 'Name them one at a time, because most misunderstandings about this system come from assuming there is a server somewhere holding the state for you.',
      },
      {
        ul: [
          'The interface. A page in your browser, served by the application process itself. It collects choices, calls downwards, and redraws a state it reads back from the data file. Closing the tab loses no job.',
          'The orchestrator, written in Python. It owns the order of the steps, the retry counts, the checks, and every call that leaves the machine. This is the only part that decides anything.',
          'The engines. Four voice engines: two run over the network, two run on the machine itself, and the default one needs no key at all. Building the picture and drawing the subtitles happen in the same process, with the heavy lifting handed to the video tool underneath.',
          'One data file. Jobs, per-step state, the library of finished videos, the transcripts already read, the posting schedule — all of it in one file, plus its journal file beside it.',
          'The licence guard. It reads a signed token on disk, checks it against a public key shipped inside the install, and answers yes or no before any heavy work starts.',
          'The Telegram bot. A second process on the same machine, reading the same data file. No token, no thread: an app with no bot does not wake up every second to stare at an empty table.',
          'Your Chrome. A real window on the machine with a screen, used for exactly two things: reading Douyin and posting to Shopee.',
        ],
      },
      {
        figure: {
          src: '/blog/kien-truc-mot-may-khach-en.svg',
          alt: 'A diagram of one large box enclosing everything that runs on the user’s machine: the interface, the Python orchestrator, the voice and render engines, a single data file, the licence guard, the Telegram bot and Chrome. Outside the box sit five panels: video sources, the AI model the user configures, Facebook, the licence server and Telegram; the download arrow points inwards, the other four point out.',
          caption: 'Five roads in and out. Only the source road comes in; everything inside reads and writes the same file.',
        },
      },
      {
        p: 'Those six things share one disk, one graphics card and one queue. That is why the number of jobs running at once is decided by the machine rather than picked by you: the app reads its own core count and free memory, then sets its own ceiling.',
      },
      {
        h2: 'A request passes through five places and is written down exactly once',
      },
      {
        p: 'Press the button, and this is the route one job takes.',
      },
      {
        ol: [
          'The interface collects the choices and calls down into the orchestrator. Nothing is decided here, including whether the job runs at all.',
          'The orchestrator asks the licence guard first. No licence for this kind of work and it stops before writing anything — cheaper here than ten minutes into a render.',
          'Every video in the batch becomes its own row: input, language, voice, status waiting, step 0 of 5. The row is written before a single frame exists.',
          'A bounded pool of workers picks those rows up. Each job runs five steps: read the speech, translate, generate the voice, build the picture, attach the metadata. Progress is written every two seconds, and immediately when a job ends, however it ends.',
          'The output path and a row in the library are written. The screen redraws by reading that row, not by remembering which button you pressed.',
        ],
      },
      {
        p: 'Only steps three and five write the truth. The progress bar, the running list, the message on your phone — all of them read back from it.\n\nWhat that buys in practice: reloading the page mid-run loses nothing, opening the app in another window shows the same batch, and a job cut off halfway still has a row you can read. It does not vanish, and it does not quietly restart behind your back.',
      },
      {
        h2: 'Five roads to the internet, and every one of them sits behind a choice you made',
      },
      {
        p: '"Runs locally" is an easy thing to overstate. Counted honestly, there are five roads, not fewer.',
      },
      {
        ul: [
          'The road into the source platforms. The link you paste decides where it goes: YouTube, TikTok, Douyin, Bilibili, Hongguoduanju, iQiyi. This one runs both ways — ask the page first, download the file after.',
          'The road to the language model. The key and the address you enter decide who reads your lines. The default is an OpenAI-compatible service; changing supplier is two fields, not a reinstall.',
          'The road to Facebook. It only opens when you connect a Page and turn live posting on; the default is a dry run that writes a fake post id and sends nothing. When it is live, the file goes up to Facebook’s upload host and the app waits for the publish status, for up to 300 seconds.',
          'The road to the licence server. One domain. It takes an activation key and a machine id and returns a signed token; later calls only renew that token.',
          'The road to Telegram. Only there when a bot token is entered. The bot asks for messages continuously, which makes it the one road that is busy while you are not touching the machine.',
        ],
      },
      {
        p: 'There is no sixth road: no usage figures sent anywhere, no hidden reporting, no account sitting between you and the platforms.',
      },
      {
        h2: 'What stays inside is part of the design too',
      },
      {
        p: 'The list of things that stay is shorter and matters more: the data file, the finished videos, the library, the Shopee session and the Chrome profile, the licence token, the fonts and the templates.\n\nA video file does not pass through anybody’s server. When you post, it goes from your machine to Facebook, or through the Chrome window to Shopee.',
      },
      {
        p: 'The spoken lines are the exception, and it is worth saying plainly: when you translate or write a script, each line goes to the model you chose. That is still road two, not a new one — but it does mean the text leaves the machine while the video does not.',
      },
      {
        p: 'Backups follow the same rule. Copy the data file and the journal file beside it, and you are done; there is no remote database to sync, so there is no copy of your work you do not control.',
      },
      {
        h2: 'The licence check sits where work starts, not where the button is',
      },
      {
        p: 'A fence drawn in the interface is a fence the bot, the command-line tool and the automation tools all walk straight past, because none of them renders a screen. So the check sits in two places: when a batch is accepted, and when a post is sent.',
      },
      {
        p: 'Enforcement is on by default. The token carries its own expiry and is signed with Ed25519, and the public key ships inside the install — so a machine that has never been online can still verify it. A few days offline and it keeps working; past the token’s expiry it stops and says why.',
      },
      {
        p: 'Changing the system clock does not rescue anybody: the expiry is inside the signature and is measured against the server’s clock. Winding the clock back works once, for at most six hours, because the app remembers the latest time it has ever seen.\n\nAnd a revocation has no grace period. Revoked, suspended, expired are final answers, quite unlike "the server could not be reached". Treating those two as the same thing is how a refunded licence keeps working for another three days.',
      },
      {
        h2: 'Chrome is your window, and it opens when you open it',
      },
      {
        p: 'Two windows, two different ports: 47832 for Douyin, 47831 for Shopee. Not the familiar 9222, because that is the first port anti-fraud scripts probe; a port nobody uses says nothing about you.',
      },
      {
        p: 'When the app runs somewhere without a screen, it cannot open that window itself. You start it from a launcher on the machine with the screen, sign in once, and the app attaches to it. The window has to listen on every network address rather than just the local machine; otherwise requests from the app are refused with an error that reads exactly like "there is no browser here".',
      },
      {
        note: 'While that window is open, anything that can reach the port can drive a browser that is already signed in. Close it when you are done, and block that port at the firewall if the machine sits on a network you do not control.',
      },
      {
        p: 'This is the one place in the architecture where safety depends on your habits rather than on code. Saying so out loud beats letting you find out later.',
      },
      {
        h2: 'One machine means one point of failure, and nobody on call but you',
      },
      {
        p: 'Machine off, queue stopped. Disk full, the whole batch halts, usually at the heaviest step. A power cut at two in the morning has nobody to restart it for you, and there is no copy elsewhere to carry on from.',
      },
      {
        p: 'The trade back: no server bill, no minutes cap on rendering, and nothing leaving the machine except the five roads above. One desktop running overnight does the volume that a person editing by hand would not finish in a week.',
      },
      {
        note: 'A single-machine install is not a cloud product shrunk down. It is built for exactly one person, one disk and a dozen jobs overnight. Do not buy a server to make it sturdier — buy a spare drive and a stable power socket, because those are what actually fail.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Ứng dụng có gửi video của tôi lên máy chủ nào không?',
        a: 'Không. Không có máy chủ trung gian nào trong đường đi của tệp video. Khi bạn đăng, tệp đi thẳng tới Facebook hoặc tới Shopee qua cửa sổ Chrome trên máy bạn. Phần chữ — lời thoại, kịch bản — thì có thể đi tới mô hình bạn đã cấu hình, và đó là đường duy nhất nội dung chữ rời máy.',
      },
      {
        q: 'Mất mạng thì còn làm được gì?',
        a: 'Mở ứng dụng, xem thư viện, đọc lại job cũ, sửa cấu hình, và xem lại video đã dựng vẫn bình thường. Những việc cần mạng là tải nguồn, gọi mô hình, đăng bài và kiểm bản quyền; bản quyền vẫn cho chạy trong hạn của token, nên mất mạng vài ngày không chặn việc gì.',
      },
      {
        q: 'Tôi có bắt buộc phải mở Chrome riêng không?',
        a: 'Chỉ cho hai việc: đọc Douyin và đăng Shopee. Ứng dụng có trình duyệt riêng của nó, nhưng một hồ sơ mới không có phiên đăng nhập nên Douyin sẽ hỏi xác minh. Cửa sổ Chrome của bạn mang theo phiên đăng nhập, và đó là khác biệt duy nhất.',
      },
      {
        q: 'Một chiếc máy để bàn có đủ chạy không?',
        a: 'Đó là kiểu máy nó được thiết kế cho. Bước nặng nhất là dựng hình nên card đồ hoạ là thứ quyết định tốc độ; ứng dụng tự đo số nhân và bộ nhớ trống để chọn số job chạy cùng lúc, nên máy yếu hơn sẽ tự chạy ít việc hơn thay vì sập.',
      },
    ],
    en: [
      {
        q: 'Does the app upload my videos to a server?',
        a: 'No. There is no middle server anywhere in a video file’s path. When you post, the file goes straight to Facebook, or to Shopee through the Chrome window on your machine. Text is the part that can travel — lines and scripts go to the model you configured, and that is the only way written content leaves the machine.',
      },
      {
        q: 'What still works with no network?',
        a: 'Opening the app, browsing the library, reading old jobs, editing settings and watching finished videos all work. The parts that need a network are fetching sources, calling a model, posting, and the licence check — and the licence keeps working until its token expires, so a few days offline blocks nothing.',
      },
      {
        q: 'Do I have to open a separate Chrome window?',
        a: 'Only for two things: reading Douyin and posting to Shopee. The app has its own browser, but a fresh profile carries no session, so Douyin answers it with a verification page. Your Chrome window carries the session, and that is the whole difference.',
      },
      {
        q: 'Is a desktop machine enough?',
        a: 'That is the machine it was designed for. Rendering is the heavy step, so the graphics card sets the speed; the app measures its own cores and free memory to choose how many jobs run at once, so a weaker machine runs fewer jobs rather than falling over.',
      },
    ],
  },
};

/**
 * Blog post — "License guard: 72 giờ offline và điều gì không rời máy".
 *
 * How activation, local signature checking, the 72-hour offline allowance and
 * the feature gate work — written from the customer's side of the wire. The
 * article deliberately names no internal component; every claim here is a
 * behaviour a user can observe: what is sent, what is stored, what happens
 * when the network is gone, and what a refusal says.
 *
 * Facts checked against `shortGPT/licensing/` in SHORTGPT (token, guard,
 * store, client, features, errors) and against the licence server's settings,
 * token and HMAC code for the 72-hour default and the peppered hashes.
 */
export default {
  slug: {
    vi: 'license-guard-72-gio-offline',
    en: 'license-guard-72-hours-offline',
  },
  title: {
    vi: 'License guard: 72 giờ offline và điều gì không rời máy',
    en: 'The licence guard: 72 hours offline, and what never leaves',
  },
  description: {
    vi: 'Một token ký sẵn được kiểm tra tại máy, một hạn 72 giờ không cần mạng: cách bản quyền hoạt động, và vì sao video của bạn không đi đâu cả.',
    en: 'A signed token checked on your machine, a 72-hour ceiling with no network: how licensing works, and why your video never leaves the machine.',
  },
  date: '2026-10-29',
  minutes: { vi: 7, en: 7 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Bản quyền thường bị coi là một cái khoá gắn lên phần mềm. Ở đây nó là một token ký sẵn, một phép kiểm tra tại máy và một hạn 72 giờ — kèm danh sách những gì không bao giờ rời máy bạn.',
    en: 'Licensing is usually imagined as a lock bolted onto software. Here it is a signed token, a check made on your machine, and a 72-hour ceiling — plus the list of what never leaves.',
  },
  body: {
    vi: [
      {
        h2: 'Mất mạng lúc 2 giờ sáng vẫn phải dựng được video',
      },
      {
        p: 'Một tiệm net rớt wifi giữa lô 20 video. Nếu phần mềm coi mất mạng là lỗi, cả lô dừng, và người ngồi chờ không biết chờ đến bao giờ.\n\nBản quyền ở đây thiết kế quanh đúng tình huống đó: máy đã kích hoạt thì tự kiểm tra được, không hỏi lại máy chủ trước mỗi video. Mất mạng là trạng thái bình thường, không phải lỗi. Bài này đi qua bốn lời gọi ra ngoài, hạn 72 giờ trong chữ ký, và những chỗ chặn việc.',
      },
      {
        h2: 'Kích hoạt là một lần đổi mã lấy chữ ký',
      },
      {
        p: 'Bạn nhập mã kích hoạt một lần. Máy gửi lên bốn thứ: mã, mã định danh máy, nhãn máy để nhận ra thiết bị, và phiên bản phần mềm. Máy chủ trả về token đã ký, credential để làm mới, gói bạn mua và lịch kiểm tra kế tiếp.\n\nToken chứa đúng những gì cần cho quyết định tại máy: sản phẩm nào, cấp cho máy nào, gói nào, danh sách chức năng, ngày hết hạn. Không có tên bạn, không có nội dung video, không có gì về sản phẩm bạn bán.',
      },
      {
        figure: {
          src: '/blog/license-guard-72-gio-offline.svg',
          alt: 'Sơ đồ hai cột: bên trái là luồng kích hoạt một lần từ mã tới token đã ký và tệp trên máy; bên phải là mỗi lần bắt đầu việc, từ job qua cổng kiểm tra tới hai nhánh mở chức năng hoặc từ chối. Dưới cùng là trục 72 giờ với mốc làm mới khoảng 19 giờ và mốc hết hạn.',
          caption: 'Kích hoạt một lần, kiểm tra mọi lần. Chỉ một đường ra ngoài, và nó không mang video.',
        },
      },
      {
        h2: 'Máy tự kiểm tra chữ ký, không hỏi lại máy chủ',
      },
      {
        p: 'Mỗi lần kiểm tra, máy làm bốn việc theo thứ tự. Tách token thành ba phần. Đọc phần đầu và từ chối nếu thuật toán không phải EdDSA — thuật toán bị ghim, không đọc theo token: token tự khai thuật toán là token có thể khai "none". Kiểm tra chữ ký 64 byte bằng khoá công khai. Chỉ sau khi chữ ký đúng mới đọc phần thân: payload chưa kiểm tra chỉ là chuỗi người khác viết.',
      },
      {
        p: 'Phần thân kiểm tra tiếp: đúng máy chủ phát hành, đúng sản phẩm, còn hạn, cấp cho đúng máy này, và thời điểm phát hành không ở tương lai quá 5 phút. Năm phút là khoảng lệch cho máy chưa đặt giờ; token từ năm sau là đồng hồ đã bị chỉnh.\n\nKết quả được giữ theo token, tối đa 8. Một lô 200 job kiểm tra chữ ký một lần, không phải 200 lần. Cache chỉ giữ kết quả đã kiểm tra, mỗi lần đọc vẫn so lại hạn, nên không kéo dài tuổi thọ token.',
      },
      {
        h2: '72 giờ nằm trong token, không trong đồng hồ máy',
      },
      {
        p: 'Máy chủ cấp token với hạn 72 giờ, không vượt quá ngày hết hạn của gói. Token còn một mốc thứ hai: thời điểm nên quay lại hỏi. Mốc này là lời đề nghị, không phải giới hạn — hỏi lại thất bại thì token vẫn dùng được tới hạn.\n\nMáy chủ đặt lịch hỏi lại sau 24 giờ, và máy về sớm ở mức 80% cửa sổ, khoảng 19 giờ. Về sớm để một lần hỏng mạng không thành hết hạn: còn gần 5 giờ thử lại trước khi mất quyền làm việc.',
      },
      {
        p: 'Vì hạn nằm trong chữ ký, chỉnh đồng hồ máy không mua thêm thời gian. Chỉnh tới không làm token sống lâu hơn; chỉnh lùi bị phát hiện: hệ thống ghi mốc thời gian cao nhất đã thấy, cả trong bộ nhớ lẫn trên đĩa, và lùi quá 6 giờ là bị từ chối. So với mốc trong bộ nhớ thôi thì sau một lần khởi động lại là mất tác dụng — đúng thao tác đầu tiên của người lùi ngày.\n\nSáu giờ đủ cho múi giờ đặt sai, đổi giờ mùa hè áp hai lần, hoặc đồng bộ giờ sau khi máy tắt. Không đủ để lùi ngày và dùng tiếp hàng tháng. Đây không phải hàng rào tuyệt đối. Nó chỉ làm gian lận có giá: mua được nhiều nhất sáu giờ, một lần.',
      },
      {
        h2: 'Điều gì không rời máy',
      },
      {
        p: 'Bốn lời gọi đi ra ngoài: kích hoạt, làm mới, huỷ kích hoạt, hỏi trạng thái. Nội dung chỉ gồm mã, mã máy, nhãn máy, phiên bản phần mềm và credential. Không video, không lời thoại, không dữ liệu sản phẩm, không danh sách job, không tên tệp.\n\nNói cách khác: máy chủ biết bạn có quyền gì, không biết bạn đang bán gì.',
      },
      {
        p: 'Phía máy chủ cũng không giữ mã ở dạng đọc được. Mã kích hoạt và credential lưu dưới dạng HMAC-SHA256 có pepper; pepper nằm trong secret của máy chủ, không nằm trong database. Một bản sao database bị lộ không thành danh sách mã dùng được. Phép so sánh chạy theo thời gian hằng, để thời gian trả lời không tiết lộ phần nào của mã đúng.\n\nTrên máy bạn, tệp bản quyền được ghi qua tệp tạm rồi đổi tên, quyền 0600, trong thư mục không phục vụ qua HTTP. Ghi dở sau khi mất điện không phải tệp sửa được — nó phải cấp lại, và người dùng đang gọi điện trong lúc đó.',
      },
      {
        h2: 'Cổng kiểm tra ở chỗ bắt đầu việc, không ở màn hình',
      },
      {
        p: 'Một cổng trên màn hình là cổng mà agent, bot Telegram và công cụ bên ngoài đi thẳng qua, vì chúng không vẽ màn hình. Ba màn hình còn mở nhau bằng handler, không bằng cú bấm. Vì vậy phép kiểm tra nằm ở chỗ một việc thật sự bắt đầu: lúc một lô vào hàng đợi, lúc một lượt đăng bắt đầu, lúc một job xoá logo được tạo.\n\nẨn một mục trên sidebar chỉ là giao diện. Nó không phải cửa khoá, và hệ thống không giả vờ nó là cửa khoá.',
      },
      {
        p: 'Mỗi lần kiểm tra nhận một mã chức năng, hoặc một cặp mã. Mã phải có trong danh sách quyền của token. Cặp mã dành cho gói mua trước khi mã mới có: chức năng đổi tên vẫn mở màn hình cũ, thay vì mất trong lúc chờ token làm mới. Mã lạ bị bỏ, không chuyển tiếp — máy chủ có thể biết chức năng trước bản cài này, và chuyển tiếp mã lạ là mở đường cho lỗi đánh máy thành quyền.\n\nCùng dòng kiểm tra đó phục vụ màn hình, agent, bot và công cụ bên ngoài. Không có đường thứ hai để vào.',
      },
      {
        h2: 'Khi kiểm tra trượt, nó nói một câu, không ném stack trace',
      },
      {
        p: 'Một từ chối không phải crash. Câu từ chối được viết cho người ngồi trước máy: gói hiện tại không gồm chức năng này, bản quyền đã hết hạn, đang bị tạm khoá, token đã hết hạn và cần mạng để làm mới.\n\nMỗi câu đi kèm một gợi ý. Không traceback, không mã lỗi trần trên màn hình. Người dùng cần biết nên làm gì, không cần biết exception nào đã ném.',
      },
      {
        p: 'Khi mất mạng, lần làm mới thất bại được ghi lại nhưng không chặn việc đang làm. Chỉ khi token hết hạn cổng mới từ chối, và câu đó nói đúng việc cần làm: kết nối mạng để làm mới. Một lần hỏng mạng buổi sáng không hỏng cả ngày làm việc.',
      },
      {
        p: 'Có một ngoại lệ quan trọng: từ chối dứt khoát từ máy chủ — thu hồi, tạm khoá, hết hạn — mạnh hơn thời gian offline còn lại. Token vẫn còn chữ ký đúng, nhưng chủ đã nói không. Ghi nhận này lưu cả xuống đĩa lẫn trong bộ nhớ, nên làm tệp bản quyền không ghi được cũng không xoá được lệnh thu hồi. Bộ nhớ chỉ sống tới lần khởi động sau, nhưng lỗ đó nhỏ hơn nhiều so với "không có hiệu lực cho tới khi người dùng bỏ cuộc".',
      },
      {
        h2: 'Khoá công khai trong bản cài, xoay khoá phải có người bảo chứng',
      },
      {
        p: 'Máy kiểm tra chữ ký bằng khoá công khai đóng sẵn trong bản cài. Đó là điều cho phép máy chưa từng lên mạng vẫn kiểm tra được token. Khoá công khai không phải bí mật, nên đóng sẵn không phải rủi ro.\n\nKhoá mới được phát hành qua một tài liệu công khai, chỉ được tin khi chính nó được ký bởi một khoá máy đã có. Trước phép kiểm tra này, máy chủ giả có thể phát khoá của mình và mọi bản cài sẽ tin — khoá đóng sẵn có mặt nhưng không được hỏi tới.',
      },
      {
        p: 'Khoá tải về không được ghi xuống đĩa: một khoá nằm trong tệp mà chủ máy sửa được thì không còn là mỏ neo. Tài liệu khoá chỉ được tải lại sau 24 giờ, để một lần hỏng mạng không mở đầu cho cửa sổ không bao giờ kiểm tra lại.\n\nXoay khoá là việc của người vận hành, không của bản cài: khoá cũ ký cho khoá mới, mọi máy tin khoá mới ở lần kiểm tra kế tiếp.',
      },
      {
        h2: 'Bốn thứ hệ thống này không làm',
      },
      {
        ul: [
          'Nó không phải DRM. Người quyết tâm sửa bản cài sẽ sửa được; nó chặn chia sẻ mã bừa bãi và dùng quá số máy, không chặn một người dịch ngược.',
          'Nó không gọi máy chủ trước mỗi video. Cổng đọc tệp và chữ ký tại máy; chỉ khi đến hạn làm mới mới có một lời gọi.',
          'Nó không dừng video đang dựng giữa chừng. Cổng chặn lần bắt đầu việc kế tiếp; video đang chạy được chạy xong.',
          'Nó không giữ dữ liệu của bạn để làm báo cáo. Máy chủ chỉ thấy bốn lời gọi kia.',
        ],
      },
      {
        h2: 'Bốn câu hỏi trước khi tin một hệ bản quyền',
      },
      {
        ol: [
          'Mất mạng thì sao? Nếu là "không dùng được", hệ thống trói việc của bạn vào đường truyền người khác.',
          'Nó gửi gì lên máy chủ? Nếu không gói gọn trong mã, mã máy và phiên bản, bạn đang trả tiền để người khác đọc dữ liệu mình.',
          'Thu hồi có hiệu lực lúc nào? Nếu vẫn chạy đủ 72 giờ sau đó, đó là ân hạn, không phải thu hồi.',
          'Sửa đồng hồ có mua được thời gian không? Nếu có, hạn dùng chỉ là một con số trang trí.',
        ],
      },
      {
        note: '72 giờ offline không phải ân hạn sau khi bị thu hồi. Bản quyền bị thu hồi hôm thứ Hai mà vẫn chạy tới thứ Năm không phải hệ thống bản quyền, mà là sự chậm trễ bán hàng. Vì vậy lệnh từ chối dứt khoát được ghi lại và thắng thời gian offline còn lại.',
      },
    ],
    en: [
      {
        h2: 'A machine that loses the network at 2 a.m. still has videos to make',
      },
      {
        p: 'A small studio loses wifi halfway through a batch of 20 videos. If the software treats that as an error, the batch stops, and the person waiting does not know when it will start again.\n\nLicensing here is built around that situation: a machine that has activated can check itself, without asking the server before every video. Being offline is a normal state, not a failure. This article covers the only four calls that leave the machine, a 72-hour limit that lives inside a signature, and the points where work is actually stopped.',
      },
      {
        h2: 'Activation is one exchange of a key for a signature',
      },
      {
        p: 'You enter a licence key once. The machine sends four things: the key, its own installation id, a device label so you can recognise the machine in a list, and the app version. The server returns a signed token, a credential for refreshing it, the plan you bought, and the time of the next check-in.\n\nThe token carries exactly what a decision on the machine needs: which product, which machine, which plan, which features, and when it expires. It carries no name, no video content, and nothing about what you sell.',
      },
      {
        figure: {
          src: '/blog/license-guard-72-gio-offline-en.svg',
          alt: 'A two-column diagram. The left column is the one-time activation path: a licence key goes to the licence server, the server returns a token signed with Ed25519, and the token is stored in a file on the machine. The right column is the path taken every time work starts: a job or a button passes through the feature gate, the signature and expiry are checked on the machine, and the path splits into a feature opening or a refusal with one sentence. Below is a 72-hour timeline marked with a refresh at about 19 hours and an expiry, plus a note that only the token leaves the machine.',
          caption: 'Activation once, checks every time. There is exactly one road out, and it does not carry video.',
        },
      },
      {
        h2: 'The machine checks the signature itself, and does not ask the server again',
      },
      {
        p: 'Every check does four things in a fixed order. Split the token into three parts. Read the header and refuse if the algorithm is not EdDSA — the algorithm is pinned rather than read from the token, because a token that names its own algorithm is a token that can name “none”. Check the 64-byte signature against the public key. Only after the signature holds is the payload read. A payload whose signature has not been checked is just a string somebody else wrote.',
      },
      {
        p: 'The payload then faces its own checks: the right issuer, the right product, an expiry still in the future, the machine this token was issued to, and an issue time no more than five minutes ahead. Five minutes covers a clock nobody set; a token from next year means the clock was moved.\n\nResults are kept per token, up to 8 of them. A batch of 200 jobs checks a signature once, not 200 times. Only verified results are cached, and every cache hit still compares the expiry, so the cache cannot stretch a token’s life.',
      },
      {
        h2: 'The 72 hours live inside the token, not inside the machine clock',
      },
      {
        p: 'The server issues a token with a 72-hour limit, never beyond the licence’s own expiry. The token also carries a second time: when to come back. That time is a suggestion, not a limit — if the refresh fails, the token keeps working until the 72 hours run out.\n\nThe server schedules the next check-in 24 hours out, and the machine returns at 80 percent of that window, around 19 hours. It comes back early so that one failed network call does not become an expiry: there are still nearly five hours to try again before work stops.',
      },
      {
        p: 'Because the limit sits inside the signature, moving the machine clock buys nothing. Moving it forward does not extend the token; moving it back is noticed: the system records the highest time it has ever seen, in memory and on disk, and a rollback of more than six hours is refused. Comparing only against the in-memory mark would stop working after a restart — the first thing anyone winding the date back would do.\n\nSix hours covers a wrong timezone, a daylight-saving change applied twice, or a clock sync after a machine has been off for a while. It is not enough to wind the date back and keep working for months. This is not an absolute wall; the owner of the machine still owns the clock. It only makes the cheat cost something: at most six hours, once.',
      },
      {
        h2: 'What never leaves the machine',
      },
      {
        p: 'Only four calls go out: activate, refresh, deactivate, and ask for status. Their payloads hold the key, the machine id, the device label, the app version and the refresh credential. There is no video, no script, no product data, no job list, and no file name.\n\nPut another way: the licence server knows what you are entitled to, not what you sell.',
      },
      {
        p: 'The server does not keep keys in readable form either. Licence keys and credentials are stored as HMAC-SHA256 with a pepper; the pepper lives in the server’s secrets, not in the database. A stolen database copy does not turn into a list of usable keys. Comparisons run in constant time, so the response time does not reveal which part of a key was right.\n\nOn your machine, the licence file is written through a temp file and a rename, with mode 0600, in a directory that is not served over HTTP. A half-written file after a power cut is not repairable — it has to be reissued, while the customer is on the phone.',
      },
      {
        h2: 'The gate sits where work starts, not on a screen',
      },
      {
        p: 'A gate drawn on a screen is a gate the agent, the Telegram bot and outside tools walk straight past, because they never draw a screen. Three screens even open one another through handlers rather than clicks. So the check lives where work actually starts: when a batch is queued, when a posting run begins, when a logo-removal job is created.\n\nHiding a sidebar entry is presentation. It is not a door, and the system does not pretend it is one.',
      },
      {
        p: 'Each check takes one feature code, or a pair of codes. The code must be in the token’s list. The pair exists for a plan bought before a new code was introduced: a feature that was renamed still opens its old screen, instead of disappearing while the customer waits for a token refresh. A code this build does not know is ignored rather than passed along — the server may learn a feature before this build does, and forwarding an unknown code would turn a typo into a permission.\n\nThe same check serves screens, the agent, the bot and outside tools. There is no second way in.',
      },
      {
        h2: 'When a check fails, it says one sentence, not a stack trace',
      },
      {
        p: 'A refusal is not a crash. The sentence is written for the person at the machine: your plan does not include this feature, the licence has expired, the licence is suspended, the token has expired and a network connection is needed to refresh it.\n\nEach sentence carries a hint. No traceback and no bare error code on screen. The user needs to know what to do, not which exception was thrown.',
      },
      {
        p: 'When the network is gone, a failed refresh is recorded but does not block the work in progress. Only an expired token makes the gate refuse, and that refusal names the actual fix: connect to the network to refresh. One outage in the morning does not ruin the working day.',
      },
      {
        p: 'There is one important exception: a definite refusal from the server — revoked, suspended, expired — outranks whatever offline time is left. The token still has a valid signature, but its owner has said no. That record is kept on disk and in memory, so making the licence file unwritable cannot erase a revocation. The memory copy lasts only until the next restart, but that is a far smaller hole than “no effect until the customer gives up”.',
      },
      {
        h2: 'The public key ships with the build, and rotation needs an endorsement',
      },
      {
        p: 'Signatures are checked against a public key baked into the build. That is what lets a machine that has never been online verify a token at all. A public key is not a secret, so shipping it is not a risk.\n\nNew keys are published in a public document, and that document is trusted only when an existing key has signed for it. Before this check existed, a fake server could publish its own key and every install would believe it — the baked key was present but never consulted.',
      },
      {
        p: 'A downloaded key is never written to disk. A key in a file the machine’s owner can edit is no longer an anchor. The key document is also fetched at most once every 24 hours, so one failed fetch does not open a window that never checks again.\n\nRotation is therefore an operator’s job, not the build’s: the old key signs for the new one, and every machine trusts it on the next check.',
      },
      {
        h2: 'Four things this system does not do',
      },
      {
        ul: [
          'It is not DRM. Somebody determined to patch the build will patch it; what it stops is casual key sharing and running on more machines than bought, not a single reverse engineer.',
          'It does not call the server before every video. The gate reads a file and a signature on the machine; only a due refresh makes a call.',
          'It does not stop a video that is already rendering. The gate blocks the next piece of work from starting; the one in flight finishes.',
          'It does not keep your data for reports. The server sees only what is in those four calls.',
        ],
      },
      {
        h2: 'Four questions worth asking any licensing system',
      },
      {
        ol: [
          'What happens offline? If the answer is “it stops working”, the system ties your work to somebody else’s connection.',
          'What does it send? If the answer is not limited to a key, a machine id and a version, you are paying to let someone read your data.',
          'When does a revocation take effect? If it keeps running for 72 hours after revocation, that is a grace period, not a revocation.',
          'Does changing the clock buy time? If it does, the limit is decoration.',
        ],
      },
      {
        note: 'The 72-hour allowance is not a grace period after revocation. A licence revoked on Monday that still runs on Thursday is not a licensing system, it is a delayed sales notice. That is why a definite refusal is written down and outranks the remaining offline time.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Mất mạng quá 72 giờ thì sao?',
        a: 'Việc mới bị từ chối với câu báo token đã hết hạn và cần kết nối để làm mới. Bản quyền không mất: chỉ cần vào mạng một lần là máy nhận token mới và chạy tiếp. Video đang dựng dở vẫn chạy xong.',
      },
      {
        q: 'Một mã có dùng được cho nhiều máy không?',
        a: 'Không. Token được cấp cho một mã định danh máy cụ thể, nên chép token sang máy khác sẽ bị từ chối với lỗi cấp cho thiết bị khác. Số máy dùng được là con số gói bạn mua, và huỷ kích hoạt sẽ trả lại chỗ.',
      },
      {
        q: 'Máy chủ bản quyền có thấy video của tôi không?',
        a: 'Không. Bốn lời gọi chỉ mang mã, mã máy, nhãn máy, phiên bản phần mềm và credential. Không có tệp, lời thoại, dữ liệu sản phẩm hay danh sách job nào đi ra ngoài.',
      },
      {
        q: 'Tắt kiểm tra bản quyền được không?',
        a: 'Chỉ trên máy phát triển hoặc phiên hỗ trợ, bằng một biến môi trường riêng. Bản cài cho khách mặc định bật kiểm tra; tắt nó không phải một tuỳ chọn trên màn hình.',
      },
    ],
    en: [
      {
        q: 'What happens after more than 72 hours offline?',
        a: 'New work is refused with a message saying the token has expired and a connection is needed to refresh it. The licence is not lost: one session online gets a fresh token and work continues. A render already running finishes.',
      },
      {
        q: 'Can one key be used on several machines?',
        a: 'No. The token is issued for a specific machine id, so moving it to another machine fails with an installation-mismatch error. The number of machines is part of the plan, and deactivating returns the slot.',
      },
      {
        q: 'Does the licence server see my videos?',
        a: 'No. The four calls carry only the key, the machine id, the device label, the app version and the credential. No file, script, product data or job list ever goes out.',
      },
      {
        q: 'Can I turn the licence check off?',
        a: 'Only on a development machine or a support session, through a dedicated environment variable. A customer install has enforcement on by default; switching it off is not a setting on the screen.',
      },
    ],
  },
};

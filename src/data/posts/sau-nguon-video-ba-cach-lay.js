/**
 * Blog post — "Sáu nguồn video, ba cách lấy".
 *
 * The decision tree from a URL or a keyword to a retrieval method: six sources
 * in the registry, four of them keyword-searchable, and three ways of fetching
 * (yt-dlp chains, a real Chrome over CDP, page reads). Numbers here are the
 * constants and the measurements recorded in the source modules.
 */
export default {
  slug: {
    vi: 'sau-nguon-video-ba-cach-lay',
    en: 'six-sources-three-ways',
  },
  title: {
    vi: 'Sáu nguồn video, ba cách lấy',
    en: 'Six video sources, three ways to fetch',
  },
  description: {
    vi: 'Bốn nền tảng tìm được bằng từ khoá, hai nền tảng chỉ nhận link. Khi nào yt-dlp đủ, khi nào cần Chrome thật, khi nào chỉ cần đọc trang — cây quyết định cho sáu nguồn.',
    en: 'Four platforms answer a keyword, two take only a link. When yt-dlp is enough, when Chrome is needed, when a page read will do — the decision tree for six sources.',
  },
  date: '2026-10-29',
  minutes: { vi: 8, en: 7 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Dán một link và hệ thống phải trả lời ba câu: nền tảng nào, lấy bằng cách nào, và nếu cách đó hỏng thì thử gì tiếp. Sáu nguồn trong bài này không đi chung một đường — biết đường nào là biết vì sao video này tải được còn video bên cạnh thì không.',
    en: 'Paste a link and the system has to answer three questions: which platform, fetched how, and what to try when that fails. The six sources here do not share one road — knowing the road is knowing why one video downloads and the one beside it does not.',
  },
  body: {
    vi: [
      {
        h2: 'Ba câu trả lời trước khi tải, không phải một',
      },
      {
        p: 'Dán một đường link, việc đầu tiên không phải là tải. Hệ thống phải trả lời: đây là nền tảng nào, nền tảng đó lấy được bằng cách nào, và nếu cách đó hỏng thì thử gì tiếp.',
      },
      {
        p: 'Một đường link được nhận diện bằng tên miền, không bằng chuỗi con, để một đường dẫn giả không đi lọt qua; mỗi nguồn khai danh sách của mình, và lần khớp đầu tiên thắng.',
      },
      {
        figure: {
          src: '/blog/sau-nguon-video-ba-cach-lay.svg',
          alt: 'Cây quyết định từ một từ khoá hoặc một đường link tới cách lấy video. Một từ khoá chỉ đi được tới bốn nền tảng là Bilibili, Douyin, YouTube và iQiyi; một đường link đi tới cả sáu, thêm TikTok và Hồng Quả. Ba khung cách lấy ở giữa: yt-dlp với danh sách cách thử riêng của từng nền tảng; một Chrome thật nối qua cổng 47832; và đọc trang bằng một yêu cầu HTTP thường. Bảng dưới ghi cách áp dụng: khi tải, YouTube, TikTok và Hồng Quả dùng yt-dlp còn Douyin, Bilibili và iQiyi cần Chrome thật; khi tìm, Bilibili thử API công khai trước rồi mới tới cửa sổ, còn iQiyi và Douyin tìm trong cửa sổ. Dòng cuối ghi cửa sổ Shopee dùng cổng 47831.',
          caption: 'Đáng chú ý là khung ②: ba nền tảng khác nhau cần cùng một cửa sổ thật, và mỗi lần chỉ một câu hỏi.',
        },
      },
      {
        h2: 'Bốn nền tảng tìm được bằng từ khoá, hai nền tảng chỉ nhận link',
      },
      {
        p: 'Tìm và tải là hai việc khác nhau, và một nền tảng có thể giỏi việc này mà không làm được việc kia.',
      },
      {
        ul: [
          'Bilibili có một điểm cuối tìm kiếm công khai, không cần đăng nhập — nên việc tìm có thể chỉ là một yêu cầu HTTP thường, và trang tìm kiếm chỉ là đường lui.',
          'Douyin thì ngược lại: trang tìm kiếm chỉ dựng cho một trình duyệt đã đăng nhập, nên nó phải mở trang thật. Nếu trang hỏi bằng một tấm ảnh trượt, việc đó cần người.',
          'YouTube tìm bằng chính yt-dlp, không cần khoá API và không cần đăng nhập.',
          'iQiyi tìm trong trang, và trang đó phải mở trong cửa sổ thật: chữ ký của nó do một hàm trong trình phát của chính nó tính ra.',
        ],
      },
      {
        p: 'TikTok và Hồng Quả không có đường tìm — chưa có ai viết phần tìm cho chúng, và một nút tìm giả còn tệ hơn không có nút nào.',
      },
      {
        h2: 'Cách thứ nhất: yt-dlp, nơi mỗi nền tảng tự khai danh sách cách thử',
      },
      {
        p: 'yt-dlp không phải một cái nút: nó là một bộ đọc trang, và mỗi nguồn tự viết danh sách cách thử của mình, xếp theo thứ tự đã đo chứ không theo sở thích. Cùng một câu "không tải được", mỗi nền tảng một lý do.',
      },
      {
        ul: [
          'YouTube: hai cách — client tv_embedded trước, android sau; cái sau vẫn trả lời trên một địa chỉ đã bị đánh dấu, dù câu trả lời đã suy giảm.',
          'TikTok: chín cách, vì nó từ chối yêu cầu không mang dấu tay TLS của trình duyệt thật — giả lập tự động, bốn trình duyệt có tên, API di động, một máy chủ API khác, trang nhúng, rồi secUid.',
          'Hồng Quả: không có bộ đọc riêng, và không cần. Bộ đọc chung của yt-dlp đọc được địa chỉ tệp nằm ngay trong trang, và tự nhận mình là trình duyệt khi tải.',
          'Douyin: ba kiểu yt-dlp, cả ba đều là bước sau cùng — bước đầu là hỏi từ trong trang. Cả bốn đều viết lại địa chỉ về dạng chuẩn: địa chỉ sao chép từ video đang mở là dạng modal mà bộ đọc của yt-dlp không nhận.',
          'Bilibili: bilibili.tv đi thẳng vào yt-dlp, vì bước đọc bằng trình duyệt từ chối tên miền đó. iQiyi: yt-dlp với PhantomJS là bước thứ hai và không chạy trên bản cài này, nhưng được giữ vì một lỗi nói rõ thứ đang thiếu tốt hơn một lỗi không nói gì.',
        ],
      },
      {
        p: 'Còn bilibili.com, Douyin và iQiyi thì yt-dlp là bước cuối — thứ được thử sau khi cửa sổ thật đã nói không.',
      },
      {
        h2: 'Cách thứ hai: một Chrome thật, vì có bức tường không mở bằng cookie',
      },
      {
        p: 'Douyin là ví dụ đắt nhất, và nó đắt vì một câu trả lời sai đã được tin. yt-dlp nói "cần cookie mới", nhưng đó là phỏng đoán: nó gọi phần chi tiết với fatal=False, nuốt lỗi 403, rồi đổ cho lọ cookie.\n\nNgày 13 tháng 10, mười tổ hợp được đo trên một video: chữ ký a_bogus đúng, ttwid tự tạo, lọ 34 cookie, và một lọ vừa được Chrome thật tạo ra vài giây trước. Cả mười đều trả về cùng một khối 46 byte: Blocked by ArgusSecurityPlugin Uifid Not Found. Chỉ yêu cầu phát ra từ bên trong một trang của chính trình duyệt đó mới được trả lời.',
      },
      {
        p: 'Hai nền tảng còn lại cần đúng cửa sổ đó. bilibili.com không đưa trạng thái khởi tạo cho yt-dlp — đo ngày 28 tháng 10 — nhưng cùng trang đó lại đặt danh sách luồng phát trong một biến toàn cục, kèm hai địa chỉ đã ký cho hình và tiếng; vì không có một địa chỉ duy nhất để đưa cho bước sau, hai địa chỉ đó được nối trên đĩa ngay. iQiyi thì không đưa gì sẵn: chữ ký được tính mỗi lần và hết hạn, và hàm tính nó nằm trong trình phát của chính trang.',
      },
      {
        p: 'Vì thế cửa sổ được dùng chung: mỗi lần một trang, mỗi lần một câu hỏi, và đỗ trang về about:blank khi xong. Không phải cho gọn: một trang Douyin để mở lúc không ai hỏi tốn 105–162% một nhân, còn about:blank thì không tốn gì. Trên máy có màn hình, bạn có thể trỏ nó vào Chrome của mình; không thì nó tự mở Chromium với một hồ sơ tạm.',
      },
      {
        h2: 'Hai cửa sổ, hai hồ sơ, và không dùng cổng 9222',
      },
      {
        p: 'Cửa sổ cho Douyin, Bilibili và iQiyi mở cổng 47832 với hồ sơ .chrome-autoreel; cửa sổ Shopee mở cổng 47831 với hồ sơ .chrome-shopee. Tách hồ sơ vì hai việc không cần chung một phiên đăng nhập, và một cái hỏng không nên kéo cái kia theo.',
      },
      {
        p: 'Không dùng cổng 9222: đó là cổng đầu tiên mã chống gian lận dò thử, và một trang có thể đo được nó đang mở hay đóng. Không có gì hợp pháp nghe trên 47831 hay 47832, nên một trình duyệt đang nghe ở đó không nói lên điều gì về bạn.',
      },
      {
        note: 'Cửa sổ đó chính là thông tin đăng nhập. Trong lúc nó mở, bất kỳ chương trình nào chạm được vào cổng đều điều khiển được một trình duyệt đã đăng nhập sẵn. Đóng khi xong, và chặn cổng vào ở tường lửa nếu máy nằm trong mạng bạn không kiểm soát.',
      },
      {
        p: 'Một chi tiết dễ mất cả buổi: cửa sổ phải nghe trên mọi địa chỉ mạng. Mặc định Chrome chỉ nghe trên máy cục bộ và trả 500 cho yêu cầu có tên máy lạ — lỗi đọc lên y như "không có trình duyệt nào ở đó".',
      },
      {
        h2: 'Cách thứ ba: đọc bằng một yêu cầu HTTP thường',
      },
      {
        p: 'Không phải chỗ nào cũng cần một cửa sổ. Tìm kiếm trên Bilibili là ví dụ rõ nhất: API công khai trả JSON, nhưng đo trên máy này nó trả 412 cho địa chỉ của máy chủ kể cả khi yêu cầu mang tên trình duyệt và Referer, trong khi trang tìm kiếm vẫn dựng với tiêu đề, thời lượng, lượt xem trên từng thẻ. Nên API được thử trước — rẻ hơn khi nó trả lời — và trang là đường lui, lần này mới cần cửa sổ.',
      },
      {
        p: 'Hồng Quả cho thấy "trình duyệt" không phải "cookie". Đo ngày 15 tháng 10: cùng một địa chỉ mp4 trả 404 cho hai công cụ dòng lệnh — một cái tải tệp, một cái xử lý video — nhưng trả 206 cho một yêu cầu mang tên trình duyệt, không cookie, không referer, đúng một tiêu đề. Bộ đọc chung của yt-dlp gửi đúng cái tên đó, nên nó tải được; một lệnh trần thì không.',
      },
      {
        p: 'iQiyi là trường hợp lai, và nó đáng nhớ vì thế: bước ký cần cửa sổ, nhưng sau khi có chữ ký, từng đoạn video được tải bằng yêu cầu HTTP thường. Một nền tảng có thể cần hai trong ba cách cho cùng một lần tải.',
      },
      {
        p: 'Và trang Hồng Quả chỉ có một độ phân giải: 360p, không có danh sách độ phân giải, không có m3u8. Một lời khuyên "lấy cookie để có bản nét hơn" ở đây là lời khuyên sai, vì không có bản nào nét hơn để lấy.',
      },
      {
        h2: 'Douyin: lấy được một trang, không lấy được trang thứ hai',
      },
      {
        p: 'Phần danh sách video của một kênh Douyin là chỗ dễ hứa quá nhất. Trang web trả 18 video một trang, đo trên trang thật. Nhưng SDK ký cần thời gian khởi động, và hỏi trang thứ hai ngay sau trang thứ nhất thì trả 200 với thân rỗng.\n\nĐo ngày 14 tháng 10: chờ ba giây vẫn vậy; chín mươi giây thử lại và một lần tải lại trang trước khi hỏi cũng vậy. Lưới video trên trang cá nhân tự vẽ ra tám cái mà không cần ai bảo.',
      },
      {
        p: 'Nên mã nguồn không giả vờ. Trang đầu hỏng thì báo lỗi — trả về một danh sách rỗng là nói dối. Trang sau hỏng thì dừng, giữ những gì đang có và nói đã đi tới đâu. Một cái phanh cứng ở 25 trang để con trỏ sai không thành vòng lặp treo.',
      },
      {
        note: 'Đừng đi tìm mẹo vượt qua chỗ này. Sự thật là danh sách đó chỉ mở một trang; cần nhiều hơn thì phải có nhiều nguồn hoặc một cách khác, và cách khác chưa có.',
      },
      {
        h2: 'Cùng một lỗi, ba câu trả lời khác nhau',
      },
      {
        p: 'Trước khi một job bắt đầu, đường dẫn được kiểm tra. Một link Shopee dán vào màn hình video nhận câu nói rằng đây là link sản phẩm và nên sang màn hình khác, không phải câu "không hỗ trợ" chung chung. Một nền tảng cần thư viện giả lập trình duyệt mà bản cài không có thì nhận đúng tên thứ đang thiếu. Douyin và iQiyi cần trình duyệt thì nói ngay lúc bạn còn đang nhìn nút, không phải mười giây sau khi job đã chạy.',
      },
      {
        p: 'Còn một câu trả lời từng sai và đã được sửa: "Fresh cookies" của yt-dlp. Bộ đọc Douyin nhận ra đúng câu đó và viết lại: một lọ cookie mới sẽ không giúp gì, vì không có lọ nào mở được bức tường này. Giữ câu cũ là đẩy người đọc đi tìm một tệp không cứu được gì.',
      },
      {
        h2: 'Đọc cây quyết định thay vì đoán',
      },
      {
        ol: [
          'Có link: đọc tên miền để biết nền tảng. Có từ khoá: chỉ bốn nền tảng trả lời, và Douyin có thể hỏi bằng một tấm ảnh trượt.',
          'Nền tảng tự chọn danh sách cách thử của nó, rẻ trước, đắt sau. Đừng đảo thứ tự: mỗi bước sau được viết ra vì bước trước đã hỏng ở một trường hợp có thật.',
          'Nếu bức tường là một trình duyệt — chữ ký, kiểm tra, trang chỉ dựng khi đăng nhập — thì mở cửa sổ thật. Nếu chỉ cần đọc một trang bằng HTTP thường, hãy thử đường đó trước: nó rẻ hơn một cửa sổ.',
          'Nếu lỗi nhắc tới cookie, đọc kỹ: có những nền tảng mà cookie không phải là biến số.',
        ],
      },
      {
        note: 'Không có cách thứ tư. Không có API riêng, không có tài khoản đặc biệt, và không có cách nào bỏ qua một tấm ảnh trượt. Khi nền tảng đổi, cách lấy cũng đổi; thứ duy nhất còn đúng là thói quen đọc lỗi trước khi đoán.',
      },
    ],
    en: [
      {
        h2: 'Three answers before a download, not one',
      },
      {
        p: 'Paste a link and the first job is not downloading. The system has to answer: which platform is this, how does that platform hand over a video, and what is tried next when that fails.\n\nThe three answers live in three different places, and this article walks through all three.',
      },
      {
        p: 'A link is recognised by hostname, not by a substring, so a lookalike address does not slip through. Each source declares its own host list, and the first match wins.',
      },
      {
        figure: {
          src: '/blog/sau-nguon-video-ba-cach-lay-en.svg',
          alt: 'A decision tree from a keyword or a link to a way of fetching. A keyword reaches only four platforms — Bilibili, Douyin, YouTube and iQiyi — while a link reaches all six, adding TikTok and Hongguoduanju. Three method panels sit in the middle: yt-dlp with a per-platform list of attempts; a real Chrome reached on port 47832; and reading a page with an ordinary HTTP request. The table below records which applies: to fetch, YouTube, TikTok and Hongguoduanju use yt-dlp while Douyin, Bilibili and iQiyi need the real Chrome; to search, Bilibili tries its public API first and the window second, while iQiyi and Douyin search inside the window. The last line says the Shopee window uses port 47831.',
          caption: 'The panel worth noticing is ②: three different platforms need the same real window, one question at a time.',
        },
      },
      {
        h2: 'Four platforms answer a keyword, two accept only a link',
      },
      {
        p: 'Searching and downloading are different jobs, and a platform can be good at one without being able to do the other.',
      },
      {
        ul: [
          'Bilibili has a public search endpoint that needs no sign-in — so a search can be an ordinary HTTP request, with the search page as the fallback.',
          'Douyin is the opposite: its search page only renders for a signed-in browser, so the source opens a real page. If that page asks with a slider, clearing it needs a person.',
          'YouTube is searched through yt-dlp itself, with no API key and no login.',
          'iQiyi is searched in the page, and that page must open in the real window: its signature is computed by a function inside its own player.',
        ],
      },
      {
        p: 'TikTok and Hongguoduanju have no search at all. They only take a link you already have — not because it is hard, but because nobody has written their search half, and a fake search button is worse than no button.',
      },
      {
        h2: 'Way one: yt-dlp, where every platform writes its own list of attempts',
      },
      {
        p: 'yt-dlp is not a button. It is a page reader, and every source here writes its own ordered list of attempts, sorted by measurement rather than taste. The same sentence — could not download — hides a different reason on every platform.',
      },
      {
        ul: [
          'YouTube: two attempts. The first is the tv_embedded client, the second is android — the one that still answers on a flagged address, even when the answer is degraded.',
          'TikTok: nine attempts, because it rejects any request without a real browser TLS fingerprint. In order: automatic impersonation, four named browsers, the mobile API, an alternate API host, the embed page, then a secUid rewrite.',
          'Hongguoduanju: no reader of its own, and none needed. yt-dlp’s generic reader can read the file address sitting in plain sight on the page, and it identifies as a browser when it downloads.',
          'Douyin: three yt-dlp attempts, and all three are last resorts — the first step is the ask from inside the page. All four rewrite the address to its canonical form, because the address you copy from a video that is open on the page is a modal form that yt-dlp’s reader does not recognise.',
          'Bilibili: the international bilibili.tv goes straight to yt-dlp, because the browser step declines that host. iQiyi: yt-dlp with PhantomJS is the second step and cannot run on this build — it is kept because a failure that names what is missing beats a failure that says nothing.',
        ],
      },
      {
        p: 'On bilibili.com, Douyin and iQiyi, yt-dlp is not the first step. On those three it is the last — what is tried after the real window has said no.',
      },
      {
        h2: 'Way two: a real Chrome, because some walls do not open with cookies',
      },
      {
        p: 'Douyin is the expensive example, and it is expensive because a wrong answer was believed. yt-dlp says "fresh cookies are needed", but that is a guess: it calls the detail endpoint with fatal=False, swallows the 403, and blames the cookie jar.\n\nOn 13 October, ten combinations were measured against one video: a correct a_bogus signature, a self-minted ttwid, a 34-cookie jar, and a jar minted seconds earlier by a real Chrome. All ten came back with the same 46-byte block: Blocked by ArgusSecurityPlugin Uifid Not Found. Only a request issued from inside a page of that browser was answered.',
      },
      {
        p: 'The other two need that same window. bilibili.com does not hand yt-dlp its initial state — measured on 28 October — but the same page puts the stream list in a global variable, with two signed addresses for picture and sound; because there is no single address to hand a later step, those two are joined on disk straight away. iQiyi hands over nothing ready-made: the signature is computed per request and expires, and the function that computes it lives inside the page’s own player.',
      },
      {
        p: 'So the window is shared: one page at a time, one question at a time, and the page parked at about:blank when the exchange is over. Not for tidiness: a Douyin page left open with nobody asking costs 105–162% of a core, while about:blank costs nothing. On a machine with a screen you can point it at your own Chrome; otherwise it starts Chromium on a temporary profile.',
      },
      {
        h2: 'Two windows, two profiles, and not port 9222',
      },
      {
        p: 'The window for Douyin, Bilibili and iQiyi listens on port 47832 with the .chrome-autoreel profile; the Shopee window listens on 47831 with .chrome-shopee. The profiles are separate because the jobs do not need to share a session, and one failing should not drag the other down.',
      },
      {
        p: 'Not 9222: that is the first port anti-fraud scripts probe, and a page can time it and tell an open port from a closed one. Nothing legitimate listens on 47831 or 47832, so a browser listening there says nothing about you.',
      },
      {
        note: 'That window is the credential. While it is open, anything that can reach the port can drive a browser that is already signed in. Close it when you are done, and block inbound traffic to the port if the machine sits on a network you do not control.',
      },
      {
        p: 'One detail that can cost half a day: the window has to listen on every network address. Chrome binds to the local machine by default and answers 500 to a request with an unexpected host name — an error that reads exactly like "there is no browser there".',
      },
      {
        h2: 'Way three: read it with an ordinary HTTP request',
      },
      {
        p: 'Not every wall needs a window. Bilibili search is the clearest example: its public API returns JSON, but measured on this machine it answers 412 to the server’s address even with a browser name and a Referer, while the search page still renders with title, duration and view count on every card. So the API goes first — it is cheaper when it answers — and the page is the fallback, which is where the window finally enters.',
      },
      {
        p: 'Hongguoduanju shows that "a browser" is not "cookies". Measured on 15 October: the same mp4 address answered 404 to two command-line tools — one that saves files, one that processes video — and 206 to a request carrying a browser name, with no cookies, no referer, one header. yt-dlp’s generic reader sends exactly that name, so it can download; a bare command cannot.',
      },
      {
        p: 'iQiyi is the hybrid case, and worth remembering for that: the signing step needs the window, but once a signature exists, every video segment is fetched with an ordinary HTTP request. One platform can need two of the three ways in a single download.',
      },
      {
        p: 'And the Hongguoduanju page offers one resolution: 360p, no ladder, no m3u8. Advice to "get cookies for a sharper copy" is wrong here, because there is no sharper copy to get.',
      },
      {
        h2: 'Douyin: one page of a listing, not two',
      },
      {
        p: 'Listing a Douyin channel is the easiest place to over-promise. Its web page returns eighteen videos per page, measured against the live site. But the page’s signing SDK takes time to boot, and asking for page two right after page one returns 200 with an empty body.\n\nMeasured on 14 October: waiting three seconds gave the same; ninety seconds of retrying and a fresh page load before the ask gave the same. The profile grid draws eight videos by itself without being asked.',
      },
      {
        p: 'So the code does not pretend. A failed first page is raised — returning an empty list would be a lie. A failed later page stops the walk, keeps what is already in hand, and says how far it got. A hard brake at twenty-five pages keeps a wrong cursor from becoming a hung loop.',
      },
      {
        note: 'Do not go looking for a trick around this. The honest statement is that the listing opens one page; anything more needs more sources or a different method, and the different method does not exist yet.',
      },
      {
        h2: 'One failure, three different answers',
      },
      {
        p: 'A link is checked before a job starts. A Shopee link pasted into a video screen gets a sentence saying it is a product link and pointing at the right screen, rather than the generic "unsupported". A platform that needs the browser-impersonation package on a build that lacks it gets the missing piece named. Douyin and iQiyi need a browser, and say so while you are still looking at the button rather than ten seconds into a job.',
      },
      {
        p: 'One answer was wrong once and has been fixed: yt-dlp’s "Fresh cookies". The Douyin reader recognises that exact sentence and rewrites it — a fresh cookie jar will not help, because no jar opens this wall. Leaving the original sentence in place sends the reader after a file that cannot save anything.',
      },
      {
        h2: 'Read the decision tree instead of guessing',
      },
      {
        ol: [
          'Have a link: read the hostname to name the platform. Have a keyword: only four platforms answer, and Douyin may ask with a slider.',
          'The platform picks its own list of attempts, cheap first, expensive after. Do not reorder them: every later step exists because an earlier one failed in a real case.',
          'If the wall is a browser — a signature, a check, a page that only renders when signed in — open the real window. If all you need is to read a page over plain HTTP, try that first: it is cheaper than a window.',
          'If an error mentions cookies, read it closely: there are platforms where cookies are not the variable.',
        ],
      },
      {
        note: 'There is no fourth way. No private API, no special account, and no way around a slider. When a platform changes, the way it is fetched changes with it; the only thing that stays true is the habit of reading the error before guessing.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Vì sao TikTok và Hồng Quả không tìm được bằng từ khoá?',
        a: 'Vì chưa có phần tìm cho hai nền tảng đó. Bốn nền tảng còn lại có đường tìm đã kiểm chứng — Bilibili có điểm cuối công khai, Douyin mở trang thật, YouTube dùng yt-dlp, iQiyi đọc trang. Với TikTok và Hồng Quả, bạn dán link video cụ thể; đó là giới hạn hiện tại chứ không phải một cài đặt sai.',
      },
      {
        q: 'Tôi có cần đăng nhập Douyin không?',
        a: 'Cần một cửa sổ Chrome thật đã đăng nhập nếu bạn muốn tìm kiếm hoặc đọc danh sách kênh, vì trang chỉ dựng cho phiên đăng nhập và có thể hỏi bằng ảnh trượt. Với một link video cụ thể, bộ đọc vẫn thử hỏi từ trong trang trước; nếu bị chặn, nó thử tiếp các cách khác và báo lý do từng lần.',
      },
      {
        q: 'Vì sao có hai cửa sổ Chrome với hai cổng khác nhau?',
        a: 'Vì hai việc khác nhau. Cửa sổ 47832 với hồ sơ riêng dùng để đọc Douyin và iQiyi; cửa sổ 47831 với hồ sơ khác dùng để đăng Shopee. Tách hồ sơ nghĩa là đăng nhập Shopee không đụng tới phiên Douyin, và đóng cửa sổ này không làm hỏng cửa sổ kia.',
      },
      {
        q: 'Tải một kênh Douyin được bao nhiêu video?',
        a: 'Thực tế là một trang, 18 video. Trang thứ hai bị từ chối kể cả sau khi chờ và thử lại, nên mã nguồn giữ những gì đã lấy được thay vì báo hỏng cả danh sách. Nếu bạn cần nhiều hơn, cách đúng là thêm nguồn hoặc thêm video lẻ, không phải chờ một mẹo vượt qua.',
      },
    ],
    en: [
      {
        q: 'Why can’t TikTok and Hongguoduanju be searched by keyword?',
        a: 'Because their search half has not been written. The other four have verified search paths — Bilibili has a public endpoint, Douyin opens a real page, YouTube goes through yt-dlp, iQiyi reads its page. For TikTok and Hongguoduanju you paste the link to a specific video; that is a current limit, not a setting you got wrong.',
      },
      {
        q: 'Do I need to sign in to Douyin?',
        a: 'You need a real, signed-in Chrome window if you want to search or list a channel, because the page only renders for a signed-in session and may ask with a slider. For a specific video link the reader still tries asking from inside the page first; if that is refused it tries the other attempts and reports the reason for each.',
      },
      {
        q: 'Why two Chrome windows on two different ports?',
        a: 'Because they do different jobs. Port 47832 with its own profile reads Douyin and iQiyi; port 47831 with a separate profile posts to Shopee. Separate profiles mean signing in to Shopee does not touch the Douyin session, and closing one window does not break the other.',
      },
      {
        q: 'How many videos can be listed from a Douyin channel?',
        a: 'One page, eighteen videos, in practice. The second page is refused even after waiting and retrying, so the code keeps what it already has rather than failing the whole listing. If you need more, the right move is more sources or individual links, not waiting for a trick around it.',
      },
    ],
  },
};

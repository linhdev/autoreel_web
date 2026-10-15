/**
 * Blog post — "Bên trong một job: bốn tầng engine và hai chỗ gọi AI".
 *
 * The whole system walked through once, from the click to the published video,
 * for a reader who builds systems: which layer holds what, why Python sits in
 * the middle and not at the edges, and the two places a model is allowed to
 * decide anything. Solution-architect level — seams, trade-offs and what was
 * deliberately left out — not a code walkthrough.
 *
 * Names nothing from inside the build: `scripts/verify-build.mjs` holds the
 * list of words these articles may not contain.
 */
export default {
  slug: {
    vi: 'ben-trong-mot-job-bon-tang-engine-va-hai-cho-goi-ai',
    en: 'inside-one-job',
  },
  title: {
    vi: 'Bên trong một job: bốn tầng engine và hai chỗ gọi AI',
    en: 'Inside one job: four layers, two places a model decides',
  },
  description: {
    vi: 'Đi hết một job từ lúc bấm nút tới lúc video được đăng: tầng nào giữ gì, vì sao tầng giữa viết bằng Python, và hai chỗ duy nhất mô hình được phép quyết định.',
    en: 'From the button press to the published video: which layer holds what, why the middle layer is written in Python, and the only two places a model decides.',
  },
  date: '2026-10-10',
  minutes: { vi: 11, en: 11 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Một job đi qua bốn tầng, và ở mỗi ranh giới nó băng qua đều có một câu hỏi: dữ liệu vào là gì, dữ liệu ra là gì, ai chịu trách nhiệm khi hỏng. Không có đoạn mã nào ở đây — chỉ có các tầng, các đường nối, và lý do chúng nằm ở chỗ chúng nằm.',
    en: 'A job crosses four layers, and every boundary it crosses asks the same three questions: what goes in, what comes out, and who owns the failure. No code in this article — just the layers, the seams, and why each one sits where it sits.',
  },
  body: {
    vi: [
      {
        h2: 'Một job được ghi lại trước khi có ai kịp dựng video',
      },
      {
        p: 'Bạn bấm một nút rồi đi uống cà phê. Việc đầu tiên hệ thống làm không phải là dựng video, mà là ghi lại một dòng: job này là gì, đầu vào ở đâu, ai yêu cầu, đang chạy tới đâu.\n\nTừ giây phút đó, dòng đó mới là thứ đúng về job. Cái nút thì không.',
      },
      {
        h2: 'Bốn tầng, và tầng trên cùng không giữ sự thật nào',
      },
      {
        figure: {"src":"/blog/mot-job-qua-bon-tang.svg","alt":"Sơ đồ bốn tầng xếp dọc: giao diện ở trên cùng, điều phối bằng Python ở giữa, tầng engine gồm các engine riêng cho từng việc, và tầng dữ liệu ở dưới cùng. Một job đi từ trên xuống, mỗi tầng chỉ nói chuyện với tầng liền kề, và chỉ có đúng hai mũi tên đi ngang ra ngoài internet: một ở tầng điều phối để gọi mô hình ngôn ngữ, một ở tầng engine để tìm tư liệu.","caption":"Bốn tầng, hai đường ra ngoài internet. Mọi thứ khác chạy trong máy bạn."},
      },
      {
        ol: [
          'Giao diện. Mỏng, và cố tình mỏng: nó thu thập lựa chọn, gọi xuống dưới, rồi vẽ lại trạng thái đọc được từ tầng dữ liệu. Nó không quyết định gì và không giữ sự thật nào. Đổi giao diện không làm hỏng một job đang chạy — đó là phép thử để biết tầng này đã đủ mỏng hay chưa.',
          'Điều phối. Đây là phần viết bằng Python, và là phần dày nhất. Nó giữ hình dạng của một job, thứ tự các bước, số lần thử lại, các phép kiểm tra, và toàn bộ những lời gọi ra ngoài máy. Nếu hệ thống có một bộ não thì bộ não nằm ở đây — nhưng là bộ não của người thực thi kế hoạch, không phải của người nghĩ ra kế hoạch.',
          'Engine. Mỗi việc nặng có một engine riêng: viết lời, đọc thành tiếng, dựng hình, vẽ phụ đề, đóng dấu, đăng bài. Mỗi engine là một tiến trình hoặc một dịch vụ độc lập, đầu vào và đầu ra rõ ràng. Đây là tầng duy nhất được phép ngốn card đồ hoạ và ngốn thời gian.',
          'Dữ liệu. Một tệp duy nhất trên máy bạn, giữ job, trạng thái, và thư viện video đã làm ra. Không có máy chủ nào ở giữa, nên không có chỗ nào để dữ liệu của bạn đi lạc.',
        ],
      },
      {
        p: 'Quy tắc xuyên suốt cả bốn tầng chỉ có một: tầng trên biết tầng dưới, tầng dưới không biết tầng trên. Engine không cần biết ai gọi nó; nó nhận một đường dẫn và trả về một đường dẫn.\n\nNhờ vậy cùng một engine dùng được cho nhiều luồng khác nhau, và một engine hỏng không kéo theo cái nào khác.',
      },
      {
        h2: 'Tầng giữa chọn ngôn ngữ theo thư viện, không theo sở thích',
      },
      {
        p: 'Ba việc của tầng điều phối đều cần đúng thứ Python mạnh nhất.\n\nThứ nhất, nó phải nói chuyện với rất nhiều thứ khác nhau: mô hình ngôn ngữ, dịch vụ tìm tư liệu, engine dựng hình, cơ sở dữ liệu, và cả một chiếc điện thoại. Mỗi thứ một giao thức, và Python có sẵn thư viện cho tất cả.\n\nThứ hai, nó phải viết ra những phép kiểm tra đọc được bằng mắt người: đủ dài chưa, đúng giá chưa, tệp có mở được không. Đó là công việc của một ngôn ngữ viết nhanh và đọc rõ.\n\nThứ ba, phần lớn engine nặng nhất cũng viết bằng Python, nên gọi chúng từ Python là gọi cùng nhà, không phải bắc cầu.',
      },
      {
        h2: 'Chỗ gọi AI thứ nhất: mô hình viết lời thoại, hợp đồng do mã đặt',
      },
      {
        p: 'Kịch bản là chỗ mô hình được dùng đúng nghĩa: nhận dữ liệu thật của sản phẩm, trả về lời thoại chia theo từng cảnh. Nhưng cả hai đầu của lời gọi đều bị chặn bằng mã, không bằng thiện chí.\n\nĐầu vào là một bản hợp đồng, không phải một lời nhắc. Hệ thống đưa vào đúng những gì mô hình được phép dùng — tên sản phẩm, giá, chất liệu, vài đặc điểm — kèm yêu cầu về định dạng trả về. Mô hình không được tự thêm một con số nào: nếu lời thoại nhắc tới giá, con số đó phải khớp với dữ liệu gốc.\n\nĐầu ra thì bị kiểm tra lại bằng mã. Bốn phép kiểm tra rẻ tiền chặn được gần hết lỗi thật: định dạng trả về có đọc được không, số cảnh có khớp với số hình sẽ dựng không, độ dài có nằm trong khoảng thời lượng cho phép không, và tên sản phẩm hay giá có lệch khỏi dữ liệu gốc không.\n\nTrượt phép nào thì job dừng ngay ở đó và báo. Nó không đi tiếp vào khâu dựng, nơi mọi lỗi đều đắt hơn hai chục lần.',
      },
      {
        h2: 'Chỗ gọi AI thứ hai: mô hình chỉ được đề xuất từ khoá',
      },
      {
        p: 'Chỗ thứ hai kín đáo hơn, và cũng là chỗ nhiều hệ thống làm ẩu. Sau khi có lời thoại chia theo cảnh, mỗi cảnh cần hình. Hệ thống không hỏi mô hình "cảnh này nên là hình gì" — nó chỉ xin một danh sách từ khoá cho mỗi cảnh, rồi phần còn lại do luật quyết định.\n\nLý do rất cụ thể: mô hình giỏi đổi ý thành chữ, và dở ở chỗ không biết cái gì có thật. Nên nó chỉ được làm phần đầu. Danh sách từ khoá đi qua một bộ lọc — bỏ từ quá chung, bỏ từ khoá trùng nhau giữa các cảnh, ưu tiên từ cụ thể — rồi mới tới chỗ tìm tư liệu.\n\nPhần chọn hình thì không có AI, và đó là chủ ý: chọn theo thứ đo được. Độ phân giải có đủ không, thời lượng có phủ được cảnh không, khung hình có cắt về dọc mà không mất chủ thể không, cảnh này đã dùng ở video trước chưa. Ba hình đầu tiên đạt hết các điều kiện thì lấy — không xếp hạng bằng cảm tính.\n\nCuối cùng là cái thang dự phòng, vì chỗ này hỏng thường xuyên hơn người ta tưởng: không có tư liệu khớp thì thử lại bằng từ khoá rộng hơn, vẫn không có thì lấy từ tư liệu bạn tự thêm vào, và nếu vẫn không có thì cảnh đó xuống cấp thành một khung hình tĩnh có chữ. Xấu hơn, nhưng video vẫn ra đời thay vì chết giữa đường.',
      },
      {
        h2: 'Mọi engine trả về cùng một hình dạng, và đó là quyết định rẻ nhất',
      },
      {
        p: 'Mọi engine, kể cả engine của bên thứ ba, đều được bọc trong cùng một hình dạng: nhận một đường dẫn vào, báo tiến độ theo phần trăm, trả về một đường dẫn ra, và khi hỏng thì ném lỗi kèm lý do đọc được.\n\nCái lợi không nằm ở vẻ đẹp. Nó nằm ở chỗ đổi engine không kéo theo đổi tầng điều phối: ngày mai có engine đọc tiếng tốt hơn, bạn thay đúng một tệp.\n\nNó cũng nằm ở chỗ kiểm thử được: một engine giả trả về đường dẫn sau nửa giây cho phép chạy hết cả dây chuyền trong vài giây, thay vì chờ mười phút cho một video thật. Và nó nằm ở chỗ hỏng thì hỏng một chỗ: engine chết là một job chết, không phải cả hệ thống.',
      },
      {
        h2: 'Việc gì giữ tầng điều phối bận thì phải đẩy ra ngoài',
      },
      {
        p: 'Đây là câu hỏi kiến trúc hay bị trả lời muộn nhất, và trả lời sai thì trả giá lâu nhất: cái gì chạy ngay trong tiến trình điều phối, cái gì phải đẩy ra ngoài.\n\nNguyên tắc chỉ có một câu: việc gì giữ tầng điều phối bận thì đẩy ra ngoài. Gọi mô hình là chờ mạng, nên nó chạy bất đồng bộ và có thời gian chờ rõ ràng.\n\nDựng hình ngốn card đồ hoạ và có khi chạy hàng chục phút, nên nó nằm ở tiến trình riêng — chết thì khởi động lại, không kéo theo phần điều phối. Đăng bài thì phải nằm ngoài cùng, vì đó là hành động duy nhất không hoàn tác được.\n\nNgược lại, những việc nhỏ và nhanh — đọc dữ liệu sản phẩm, kiểm tra kịch bản, ghi trạng thái — thì để nguyên trong tiến trình. Tách chúng ra chỉ thêm một chỗ để hỏng mà không được gì.',
      },
      {
        h2: 'Một job để lại bản ghi, ba chục job thì thành xu hướng',
      },
      {
        p: 'Một hệ thống chạy qua đêm sẽ hỏng lúc ba giờ sáng, và người đọc log lúc đó là bạn. Nên mọi bước đều để lại dấu theo cùng một cách: bước nào, bắt đầu lúc nào, mất bao lâu, hỏng thì hỏng ở đâu.\n\nThứ đáng giá nhất không phải log, mà là bản ghi của từng job: nó dùng engine nào, mất bao nhiêu giây ở mỗi bước, hình lấy từ đâu. Nhìn một job thì biết nó chạy thế nào. Nhìn ba chục job thì thấy được xu hướng — bước nào chậm dần, engine nào hay hỏng, khung giờ nào hay nghẽn.\n\nĐó là loại câu hỏi mà không có bản ghi thì chỉ còn cách đoán.',
      },
      {
        h2: 'Ba thứ cố tình không làm',
      },
      {
        ul: [
          'Không tách thành nhiều dịch vụ nhỏ. Với một máy và một người dùng, chia nhỏ chỉ đổi một tiến trình dễ sửa lấy mười tiến trình khó lần. Ranh giới duy nhất đáng tách là ranh giới chịu lỗi, và hệ thống tách đúng chỗ đó rồi dừng.',
          'Không buộc vào một nhà cung cấp AI. Mô hình là thứ thay đổi nhanh nhất trong cả hệ thống, nên nó nằm sau một lớp mỏng và đổi được bằng cấu hình. Đây cũng là lý do các phép kiểm tra không giao cho mô hình: đổi nhà cung cấp không được làm đổi tiêu chuẩn.',
          'Không có chợ plugin. Một giao diện mở cho engine bên thứ ba nghe hấp dẫn cho tới lúc bạn phải bảo đảm nó không phá vỡ phần còn lại. Cách mở rộng ở đây là thay một engine có sẵn, không phải cài thêm thứ chưa ai kiểm.',
        ],
      },
      {
        h2: 'Bốn câu hỏi đánh giá một kiến trúc nhanh hơn mọi danh sách tính năng',
      },
      {
        p: 'Nếu bạn đang đọc để quyết định có dùng hay không, bốn câu dưới đây cho biết nhiều hơn mọi bảng tính năng. Chúng hỏi về đường nối, chứ không hỏi về tính năng — tính năng thì thêm được, đường nối sai thì sửa rất đắt.',
      },
      {
        ol: [
          'Job nằm ở đâu khi không ai nhìn? Nếu câu trả lời là "trong phiên làm việc của trình duyệt", mọi thứ khác không cần hỏi nữa.',
          'Đổi một engine mất bao lâu? Nếu câu trả lời là "sửa nhiều tệp ở nhiều tầng", thì tầng engine chưa thật sự tách.',
          'Kết quả của mô hình bị kiểm tra bằng gì? Nếu câu trả lời là "hỏi lại mô hình xem đúng chưa", thì chưa có phép kiểm tra nào cả.',
          'Hỏng giữa đường thì mất gì? Nếu câu trả lời là "chạy lại từ đầu", thì hàng đợi chưa được dùng đúng việc của nó.',
        ],
      },
      {
        note: 'Một kiến trúc tốt cho một người dùng không phải là kiến trúc của một công ty thu nhỏ lại. Nó được thiết kế cho đúng một máy, một người, và một tá việc chạy qua đêm. Sao chép kiến trúc của một công ty vào đó không làm phần mềm chắc hơn — nó chỉ nhân số chỗ có thể hỏng lên, rồi bắt bạn tự trực mười chỗ thay vì một.',
      },
    ],
    en: [
      {
        h2: 'The job is written down before anything renders',
      },
      {
        p: 'You press a button and go for coffee. The first thing the system does is not render a video — it writes down one row: what this job is, where its input lives, who asked for it, how far it has got.\n\nFrom that second on, the row is the truth about the job. The button never was.',
      },
      {
        h2: 'Four layers, and the top one holds no truth',
      },
      {
        figure: {"src":"/blog/mot-job-qua-bon-tang-en.svg","alt":"A diagram of four stacked layers: the interface at the top, Python orchestration in the middle, an engine layer with a separate engine per task, and the data layer at the bottom. A job travels downwards, each layer speaks only to the one beside it, and exactly two arrows leave for the internet: one from the orchestration layer to call a language model, one from the engine layer to look for footage.","caption":"Four layers, two ways out to the internet. Everything else runs on your machine."},
      },
      {
        ol: [
          'The interface. Thin, and thin on purpose: it collects choices, calls downwards, and redraws the state it reads back from the data layer. It decides nothing and holds no truth. Swapping the interface does not disturb a job that is already running — that is the test for whether this layer is thin enough.',
          'Orchestration. This is the part written in Python, and the thickest one. It holds the shape of a job, the order of the steps, how many times to retry, the checks, and every call that leaves the machine. If the system has a brain, it is here — but the brain of somebody carrying out a plan, not of somebody inventing one.',
          'Engines. Every heavy task has its own: writing the lines, reading them aloud, building the picture, drawing subtitles, stamping, posting. Each engine is a separate process or service with a clear input and a clear output. This is the only layer allowed to eat the graphics card and eat time.',
          'Data. One file on your machine, holding jobs, state, and the library of videos already made. There is no server in the middle, so there is nowhere for your data to wander off to.',
        ],
      },
      {
        p: 'One rule runs through all four layers: a layer knows the one below it, and never the one above. An engine does not know who called it; it takes a path in and gives a path back.\n\nThat is what lets the same engine serve several different flows, and what keeps one broken engine from dragging the rest down with it.',
      },
      {
        h2: 'The middle layer picks its language by library, not by taste',
      },
      {
        p: 'The middle layer has three jobs, and Python happens to be what all three want.\n\nFirst, it has to talk to a lot of different things: a language model, a footage search service, a rendering engine, a database, and a phone. Each speaks its own protocol, and Python has a library for every one of them.\n\nSecond, it has to express checks a person can read: is it long enough, is the price right, does the file open. That is work for a language you can write quickly and read clearly.\n\nThird, most of the heaviest engines are written in Python too, so calling them is calling family rather than building a bridge.',
      },
      {
        h2: 'The first call to a model: it writes the lines, the contract is code',
      },
      {
        p: 'The script is where a model earns its keep: it takes real product data and returns spoken lines split by scene. But both ends of that call are enforced by code, not by good intentions.\n\nThe input is a contract, not a prompt. The system hands over exactly what the model is allowed to use — product name, price, material, a few features — along with the return format it must follow. The model may not invent a number: if a line mentions the price, that number has to match the source data.\n\nThe output is checked by code. Four cheap checks catch almost every real failure: does the returned format parse, does the scene count match the number of shots, is the length inside the allowed duration, and have the product name or the price drifted from the source.\n\nFail any one of them and the job stops right there and says so. It does not carry on into rendering, where every mistake costs twenty times more.',
      },
      {
        h2: 'The second call: the model may only suggest keywords',
      },
      {
        p: 'The second call is quieter, and it is where a lot of systems get sloppy. Once the lines are split by scene, each scene needs a picture. The system does not ask the model "what should this scene look like" — it asks for a list of keywords per scene, and rules decide the rest.\n\nThe reason is concrete: a model is good at turning intent into words, and bad at knowing what exists. So it only gets the first half. The keyword list passes through a filter — drop anything too generic, drop repeats between scenes, prefer the specific — and only then goes looking for footage.\n\nPicking the shot has no AI in it at all, and that is deliberate: it runs on things you can measure. Is the resolution high enough, does the clip cover the scene, can it be cropped vertical without losing the subject, has this clip already appeared in an earlier video. The first three that pass every condition get used — no ranking by feel.\n\nThen there is the ladder underneath, because this step fails more often than people expect: if nothing matches, retry with broader keywords; if there is still nothing, fall back to footage you added yourself; and if there is still nothing, that scene degrades to a still frame with text on it. Uglier, but the video still exists instead of dying halfway.',
      },
      {
        h2: 'Every engine returns the same shape, and that is the cheapest decision in the design',
      },
      {
        p: 'Every engine, including one from somebody else, is wrapped in the same shape: a path goes in, progress comes back as a percentage, a path comes out, and a failure arrives with a reason a person can read.\n\nThe gain is not tidiness. It is that swapping an engine does not drag the middle layer along: tomorrow there is a better voice engine, and you replace exactly one file.\n\nIt is also that the pipeline becomes testable: a fake engine that returns a path in half a second lets the whole chain run in seconds instead of waiting ten minutes for a real video. And it is that failure stays small — a dead engine kills one job, not the system.',
      },
      {
        h2: 'Whatever keeps the middle layer busy gets pushed out of it',
      },
      {
        p: 'This is the architecture question people answer last, and the one that charges the longest for a wrong answer: what runs inside the orchestrating process, and what has to move out.\n\nOne sentence covers it: whatever keeps that process busy goes outside. A call to a model is a network wait, so it runs asynchronously with an explicit timeout.\n\nRendering eats the graphics card and can run for tens of minutes, so it lives in its own process — if it dies, it restarts without taking the middle layer with it. Posting has to sit furthest out of all, because it is the only action that cannot be undone.\n\nSmall, fast work goes the other way and stays in: reading product data, checking a script, writing state. Splitting those out only adds a place to break and buys nothing.',
      },
      {
        h2: 'One job leaves a record; thirty jobs leave a trend',
      },
      {
        p: 'A system that runs overnight breaks at three in the morning, and you are the one reading the log. So every step leaves the same marks: which step, when it started, how long it took, and where it broke.\n\nThe valuable part is not the log, though. It is the record kept per job: which engine it used, how many seconds each step took, where the footage came from.\n\nOne job tells you how that job ran. Thirty jobs show you a trend — which step is slowing down, which engine keeps failing, which hours are congested.\n\nThose are the questions that, without a record, you can only guess at.',
      },
      {
        h2: 'Three things deliberately left out',
      },
      {
        ul: [
          'No split into small services. On one machine with one user, splitting only trades one process that is easy to fix for ten that are hard to chase. The one boundary worth drawing is the failure boundary, and the system draws that one and stops.',
          'No lock-in to a single AI provider. The model is the fastest-moving thing in the whole system, so it sits behind a thin layer and can be changed in configuration. That is also why the checks are not handed to the model: changing supplier must not change the standard.',
          'No plugin marketplace. An open interface for third-party engines sounds great until you have to guarantee it cannot break the rest. The way to extend this is to replace a built-in engine, not to install something nobody has tested.',
        ],
      },
      {
        h2: 'Four questions that judge an architecture faster than a feature list',
      },
      {
        p: 'If you are reading to decide whether to use this, the four questions below tell you more than any feature table. They ask about seams, not features — features can be added; a seam in the wrong place is expensive to move.',
      },
      {
        ol: [
          'Where does the job live when nobody is watching? If the answer is "in the browser session", nothing else needs asking.',
          'How long does swapping an engine take? If the answer is "edit several files across several layers", the engine layer is not really separated.',
          'What checks the model’s output? If the answer is "ask the model whether it is right", there are no checks at all.',
          'What is lost when something breaks halfway? If the answer is "start the batch again", the queue is not doing its job.',
        ],
      },
      {
        note: 'An architecture that is good for one user is not a company architecture shrunk down. It is designed for exactly one machine, one person, and a dozen jobs running overnight. Copying a company design into that does not make the software sturdier — it multiplies the places that can break, and leaves you watching ten of them instead of one.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Hệ thống viết bằng ngôn ngữ gì?',
        a: 'Phần điều phối và phần engine viết bằng Python, vì đó là nơi tập trung các thư viện xử lý video, giọng đọc và gọi mô hình. Giao diện thì không — nó viết bằng ngôn ngữ khác vì hệ sinh thái giao diện phù hợp hơn. Chọn ngôn ngữ theo từng tầng là chủ ý, không phải trộn lẫn tuỳ tiện.',
      },
      {
        q: 'Tôi có tự thay engine được không?',
        a: 'Được, nếu engine đó trả về đúng hình dạng chung: nhận đường dẫn vào, báo tiến độ, trả đường dẫn ra. Vì tầng điều phối chỉ biết hình dạng đó, thay engine không kéo theo sửa gì ở các tầng khác.',
      },
      {
        q: 'AI có tự chọn hình cho video không?',
        a: 'Không. AI chỉ đề xuất từ khoá cho từng cảnh. Việc chọn hình cụ thể theo các điều kiện đo được — độ phân giải, thời lượng, khung hình, cảnh đã dùng chưa — nên cùng một kịch bản chạy hai lần sẽ cho kết quả nhất quán, không phụ thuộc vào việc hôm đó mô hình "thấy" gì.',
      },
      {
        q: 'Kiến trúc này chạy trên máy cá nhân có ổn không?',
        a: 'Đó là kiểu máy nó được thiết kế cho. Bước nặng nhất là dựng hình, nên thứ quyết định tốc độ là card đồ hoạ; phần còn lại chạy tốt trên một máy để bàn bình thường. Vì mọi thứ nằm trong máy bạn, không có chi phí máy chủ và cũng không có dữ liệu nào đi ra ngoài ngoài những lời gọi bạn tự cấu hình.',
      },
    ],
    en: [
      {
        q: 'What is the system written in?',
        a: 'The orchestration layer and the engines are written in Python, because that is where the video, speech and model libraries live. The interface is not — it uses a different language whose ecosystem fits better. Choosing a language per layer is deliberate, not mixing things up for the sake of it.',
      },
      {
        q: 'Can I swap an engine myself?',
        a: 'Yes, as long as it returns the same shape: a path in, progress reports, a path out. The middle layer only knows that shape, so replacing an engine does not force edits anywhere else.',
      },
      {
        q: 'Does the AI pick the footage for a video?',
        a: 'No. It only proposes keywords for each scene. The actual choice follows measurable conditions — resolution, duration, framing, whether a clip has been used before — so the same script run twice gives a consistent result instead of depending on what the model happened to feel that day.',
      },
      {
        q: 'Does this architecture work on a personal computer?',
        a: 'That is the machine it was designed for. Rendering is the heavy step, so your graphics card decides the speed; everything else runs fine on an ordinary desktop. Because it all lives on your machine, there is no server bill and no data leaving except the calls you configure yourself.',
      },
    ],
  },
};

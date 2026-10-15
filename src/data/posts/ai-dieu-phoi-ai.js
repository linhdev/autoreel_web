/**
 * Blog post — "AI điều phối AI: chia việc, kiểm tra, và giới hạn".
 *
 * Using a language model to run the pipeline rather than only to write copy:
 * what an orchestrator actually decides, which checks are worth having, and the
 * hard edges of letting a model choose a next step. Names no model vendor as an
 * internal dependency beyond the ones a customer picks themselves.
 */
export default {
  slug: {
    vi: 'ai-dieu-phoi-ai',
    en: 'which-ai-decides-what',
  },
  title: {
    vi: 'AI điều phối AI: chia việc, kiểm tra, và giới hạn',
    en: 'One AI running another: work, checks, limits',
  },
  description: {
    vi: 'Dùng AI để điều phối chứ không chỉ để viết chữ: chia việc cho từng engine, kiểm tra kết quả trả về, và bốn chỗ tuyệt đối không để mô hình tự quyết định.',
    en: 'Using AI to run the pipeline, not only to write copy: splitting work across engines, checking what comes back, and the four things a model must never decide alone.',
  },
  date: '2026-10-10',
  minutes: { vi: 8, en: 8 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Nhờ AI viết một đoạn quảng cáo thì ai cũng làm được. Dùng AI để quyết định việc gì chạy trước, kết quả trả về có dùng được không, và bước tiếp theo là gì — đó mới là phần khó. Bài này nói về những gì bộ điều phối được phép quyết, và những giới hạn phải chấp nhận.',
    en: 'Asking AI to write a product description is easy, and everybody does it. Using it to decide what runs first, whether the result is usable, and what happens next — that is the hard part. This is what an orchestrator is allowed to decide, and the limits you have to accept.',
  },
  body: {
    vi: [
      {
        h2: 'Sinh chữ là phần dễ nhất',
      },
      {
        p: 'Khi mọi người nói về AI trong sản xuất nội dung, họ thường nói về phần sinh chữ: đưa một sản phẩm vào, nhận về một đoạn mô tả. Phần đó bây giờ gần như miễn phí, và ai cũng làm được bằng một lời nhắc đủ tốt.\n\nPhần khó nằm ở chỗ khác. Sau khi có đoạn chữ, còn hai chục việc nữa: chọn giọng đọc nào, dựng hình bằng gì, phụ đề đặt ở đâu, video ra có mở được không, lỗi thì thử lại hay bỏ, đăng lúc nào. Một mô hình ngôn ngữ không tự biết những việc đó — nhưng nó có thể quyết định chúng, nếu bạn đưa cho nó đúng công cụ và đúng giới hạn.',
      },
      {
        h2: 'Bộ điều phối làm bốn việc, và việc thứ ba mới là việc đáng tiền',
      },
      {
        ol: [
          'Chia việc. Từ một yêu cầu mơ hồ — "làm video cho lô sản phẩm này" — nó dựng ra danh sách việc cụ thể, mỗi việc có đầu vào rõ ràng và một engine chịu trách nhiệm.',
          'Gọi đúng engine. Mỗi việc chỉ có một đường đi đúng. Chọn sai engine thì không hỏng ngay, mà hỏng muộn và khó lần ra, nên phần này phải chặt chứ không được để mô hình tự diễn giải.',
          'Kiểm tra kết quả. Đây là phần đáng tiền nhất. Mỗi engine trả về một kết quả, và bộ điều phối phải tự trả lời câu hỏi: kết quả này có dùng được không.',
          'Quyết định bước tiếp. Đạt thì đi tiếp, chưa đạt thì chạy lại, hỏng hẳn thì dừng và báo. Không có bước này thì một lỗi nhỏ sẽ trôi hết cả dây chuyền.',
        ],
      },
      {
        h2: 'Một lượt chạy: mô hình đề xuất, mã kiểm tra, hàng đợi quyết định',
      },
      {
        figure: {"src":"/blog/ai-dieu-phoi.svg","alt":"Biểu đồ tuần tự với năm tác nhân: người dùng, bộ điều phối, mô hình ngôn ngữ, engine dựng và nền tảng đăng. Người dùng giao một lô video, bộ điều phối yêu cầu mô hình ngôn ngữ viết kịch bản, nhận kịch bản trả về, tự kiểm tra kịch bản, rồi rẽ sang hai nhánh: nhánh đạt thì dựng video và đăng bài, nhánh lỗi thì xếp lại hàng đợi và thử lại sau.","caption":"Một lượt chạy, rút gọn. Chú ý chỗ bộ điều phối tự gọi chính nó: đó là bước kiểm tra, và là chỗ phân biệt một dây chuyền với một chuỗi lời nhắc."},
      },
      {
        h2: 'Kiểm tra kết quả là chỗ đáng tiền nhất, và nó không giao cho mô hình',
      },
      {
        p: 'Mô hình ngôn ngữ trả lời trôi chảy kể cả khi sai. Một kịch bản đọc lên rất hợp lý vẫn có thể thiếu giá, sai tên sản phẩm, hoặc dài gấp ba thời lượng cho phép. Dùng thẳng nó thì bạn phát hiện ra lỗi ở chỗ đắt nhất: sau khi video đã dựng xong.\n\nNên phần kiểm tra được chia làm ba nhóm, và cả ba đều chạy tự động:',
      },
      {
        ul: [
          'Kiểm tra đọc được bằng máy: độ dài kịch bản có nằm trong khoảng cho phép không, số câu có khớp với số cảnh không, tên sản phẩm và giá có xuất hiện đúng như trong dữ liệu gốc không, có câu nào bị cấm không.',
          'Kiểm tra trên sản phẩm cuối: tệp video có mở được không, thời lượng có đúng không, có tiếng không, phụ đề có nằm trong khung hình không, có khung nào bị đen không.',
          'Kiểm tra chéo giữa các bước: giọng đọc có khớp với kịch bản đã duyệt không, hình có khớp với số cảnh không. Lỗi loại này hiếm khi xảy ra, nhưng khi xảy ra thì rất khó thấy bằng mắt.',
        ],
      },
      {
        p: 'Điểm quan trọng: việc kiểm tra không giao cho mô hình. Một mô hình có thể được hỏi "kịch bản này có ổn không", nhưng câu trả lời đó chỉ là một ý kiến thêm. Thứ chặn được dây chuyền phải là phép kiểm tra chạy bằng mã, cho ra đúng hai kết quả: đạt hoặc không đạt.',
      },
      {
        h2: 'Bốn chỗ tuyệt đối không để mô hình tự quyết',
      },
      {
        ul: [
          'Số liệu và lời hứa. Giá, khuyến mãi, bảo hành — mô hình chỉ được chép lại từ dữ liệu bạn đưa, không được tự nghĩ ra. Một con số sai trong video bán hàng không phải lỗi kỹ thuật, nó là lỗi với khách hàng.',
          'Hành động có tác dụng ra ngoài. Đăng bài, gửi tin, xoá tệp — đây là những việc không hoàn tác được. Mô hình có thể đề xuất, nhưng cú bấm cuối cùng phải là của con người, hoặc của một luật đã viết sẵn.',
          'Chạy lại vô hạn. Một vòng lặp "chưa đạt thì thử lại" mà không có trần sẽ đốt tiền và thời gian của bạn. Số lần thử phải do bạn đặt trước, không do mô hình quyết định trong lúc chạy.',
          'Đổi cấu hình. Mô hình không được tự đổi template, đổi giọng đọc mặc định, hay đổi thứ tự bước. Nó chạy trong khuôn bạn dựng, và khuôn đó sửa bằng tay.',
        ],
      },
      {
        h2: 'Cách làm này có bốn giới hạn, và giới hạn thứ tư thuộc về bạn',
      },
      {
        p: 'Nói cho công bằng, đây không phải một hệ thống tự chủ. Nó là một dây chuyền có một chỗ biết suy nghĩ. Bốn giới hạn nên biết trước khi kỳ vọng quá nhiều:',
      },
      {
        ul: [
          'Mô hình đổi tính cách theo phiên bản. Cùng một lời nhắc, kết quả khác đi sau một lần nhà cung cấp cập nhật. Vì vậy mọi chỗ phụ thuộc vào định dạng đầu ra đều phải kiểm tra lại, chứ không tin vào lời hứa của mô hình.',
          'Mô hình tự tin kể cả khi sai. Nó không có khái niệm "tôi không chắc". Nên câu hỏi không phải "mô hình nói gì", mà là "mình kiểm được gì".',
          'Chi phí tỉ lệ với số lần gọi. Mỗi bước nhờ mô hình là một lần trả tiền. Một dây chuyền gọi mô hình ở mọi bước sẽ đắt gấp nhiều lần một dây chuyền chỉ gọi ở đúng một bước.',
          'Chỉ kiểm được cái kiểm được. Bạn xác nhận được video có tiếng, đúng dài, đủ khung. Bạn không tự động xác nhận được nó có bán được hàng hay không. Phần phán đoán đó vẫn thuộc về bạn.',
        ],
      },
      {
        h2: 'Đổi lại, bạn duyệt thay vì tự làm từng video',
      },
      {
        p: 'Đổi lại, bộ điều phối giải quyết đúng vấn đề của người làm nghề: số lượng. Ba chục video một ngày không thể làm bằng tay, và cũng không thể làm bằng một chuỗi lời nhắc dán tay từng lần.\n\nCó người quyết định thứ tự và có máy kiểm tra kết quả thì chất lượng đều hơn — video thứ ba mươi giống video thứ nhất, thay vì phụ thuộc vào việc hôm đó bạn có đang vội hay không.\n\nVai trò của bạn trong hệ thống đó cũng đổi: bạn không ngồi làm từng video nữa, bạn duyệt. Một lô chạy qua đêm, sáng ra bạn xem qua, sửa hai ba cái, đăng phần còn lại. Đó là mức tự động hoá phù hợp với một người làm một mình — đủ để bỏ phần lặp lại, không đến mức bỏ luôn phần phán đoán.',
      },
      {
        note: 'Cách kiểm tra nhanh một sản phẩm có thật sự dùng AI để điều phối hay chỉ dán thêm một lớp chữ: hỏi nó làm gì khi kết quả trả về không dùng được. Nếu câu trả lời là "chạy lại từ đầu", thì đó chưa phải điều phối, chỉ là một nút thử lại — và bạn sẽ trả tiền cho lần chạy lại đó bằng đúng số video đã dựng xong.',
      },
    ],
    en: [
      {
        h2: 'Generating text is the easy part',
      },
      {
        p: 'When people talk about AI in content production, they usually mean the writing: feed in a product, get back a description. That part is close to free now, and anyone can get it with a good enough prompt.\n\nThe hard part is elsewhere. Once the words exist, twenty more jobs remain: which voice, what renders the picture, where the subtitles sit, does the finished video open, retry or drop it when something fails, when to post. A language model does not know any of that on its own — but it can decide it, if you hand it the right tools and the right limits.',
      },
      {
        h2: 'An orchestrator does four things, and the third is the one worth paying for',
      },
      {
        ol: [
          'Split the work. From a vague request — "make videos for this batch of products" — it builds a concrete list of jobs, each with a clear input and one engine responsible for it.',
          'Call the right engine. Each job has exactly one correct path. Picking the wrong engine does not fail immediately; it fails late and is hard to trace, so this part has to be strict rather than left to the model’s interpretation.',
          'Check the results. This is where the money is. Every engine hands back a result, and the orchestrator has to answer one question itself: is this usable.',
          'Decide what happens next. Pass, move on; fail softly, run it again; fail hard, stop and say so. Without this step, one small error floats down the whole pipeline.',
        ],
      },
      {
        h2: 'One run: the model suggests, the code checks, the queue decides',
      },
      {
        figure: {"src":"/blog/ai-dieu-phoi-en.svg","alt":"A sequence diagram with five participants: the user, the orchestrator, a language model, the render engine and the publishing platform. The user submits a batch of videos, the orchestrator asks the language model for a script, receives it, checks it itself, then branches two ways: on success it renders and posts, on failure it puts the job back in the queue to try later.","caption":"One run, simplified. Note the step where the orchestrator calls itself: that is the check, and it is what separates a pipeline from a chain of prompts."},
      },
      {
        h2: 'Checking the result is the part worth paying for, and it is not handed to the model',
      },
      {
        p: 'A language model answers fluently even when it is wrong. A script that reads beautifully can still be missing the price, name the wrong product, or run three times longer than the format allows. Use it as it comes and you find the mistake at the most expensive moment there is: after the video is rendered.\n\nSo the checks are split into three groups, and all three run automatically:',
      },
      {
        ul: [
          'Checks a machine can read: is the script length inside the allowed range, does the number of lines match the number of scenes, do the product name and price appear exactly as they do in the source data, is any line on the forbidden list.',
          'Checks on the finished product: does the video file open, is the duration right, is there sound, are the subtitles inside the frame, is any frame black.',
          'Checks across steps: does the voice match the script that was approved, does the footage match the scene count. This kind of error is rare, but when it happens it is almost impossible to spot by eye.',
        ],
      },
      {
        p: 'The important part: checking is not handed to the model. You can ask a model "does this script look fine", but that answer is only one more opinion. What is allowed to stop the pipeline has to be a check that runs in code and returns exactly two answers: pass or fail.',
      },
      {
        h2: 'Four things a model must never decide alone',
      },
      {
        ul: [
          'Numbers and promises. Prices, promotions, warranty terms — a model may only copy these from data you supplied, never invent them. A wrong figure in a sales video is not a technical fault, it is a fault against your customer.',
          'Actions with effects outside the machine. Posting, sending messages, deleting files — none of it can be undone. A model may propose, but the final press belongs to a person, or to a rule written in advance.',
          'Retrying forever. A loop that says "try again until it passes" with no ceiling burns your money and your time. The number of attempts is yours to set beforehand, not the model’s to choose while running.',
          'Changing configuration. The model may not swap a template, change the default voice, or reorder the steps. It runs inside a frame you built, and that frame is edited by hand.',
        ],
      },
      {
        h2: 'This approach has four limits, and the fourth one is yours',
      },
      {
        p: 'To be fair about it: this is not an autonomous system. It is a pipeline with one place that thinks. Four limits worth knowing before you expect too much:',
      },
      {
        ul: [
          'A model changes character between versions. The same prompt returns something different after a provider update, which is why anything depending on the output format has to be checked again rather than trusted.',
          'A model is confident when it is wrong. It has no concept of "I am not sure", so the question is not what the model said, but what you can verify.',
          'Cost scales with the number of calls. Every step that asks a model is a step you pay for. A pipeline that calls a model at every stage costs many times one that calls it at exactly one.',
          'Only verifiable things are verifiable. You can confirm a video has sound, the right length and every frame in place. You cannot automatically confirm it will sell. That judgement stays with you.',
        ],
      },
      {
        h2: 'What you get instead is reviewing, not making every video',
      },
      {
        p: 'In exchange, the orchestrator solves the problem that actually belongs to this trade: volume. Thirty videos a day cannot be made by hand, and cannot be made by pasting prompts one at a time either.\n\nWith something deciding the order and a machine checking the results, quality evens out — the thirtieth video looks like the first, instead of depending on how rushed you were that day.\n\nYour role changes with it: you stop making each video and start approving batches. A batch runs overnight, you look in the morning, fix two or three, publish the rest. That is the right level of automation for one person — enough to remove the repetition, not so much that it removes the judgement.',
      },
      {
        note: 'A quick way to tell whether a product really uses AI to orchestrate or just glued a text layer on top: ask what it does when a result comes back unusable. If the answer is "it starts over", that is not orchestration, it is a retry button — and you pay for that retry with exactly the videos it had already rendered.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'AI có tự quyết định đăng video lên không?',
        a: 'Không. Đăng bài là hành động không hoàn tác được, nên nó nằm ngoài phần mô hình được quyết. Bạn duyệt nội dung trước, hoặc đặt trước một luật rõ ràng; còn cú bấm cuối cùng không do mô hình tự làm.',
      },
      {
        q: 'Nếu kịch bản do AI viết bị sai thì có bị dựng thành video luôn không?',
        a: 'Không. Kịch bản trả về phải qua các phép kiểm tra tự động về độ dài, tên sản phẩm và giá so với dữ liệu gốc. Không đạt thì việc đó được xếp lại hoặc dừng và báo lỗi, chứ không đi tiếp vào khâu dựng.',
      },
      {
        q: 'Tôi có phải trả thêm tiền cho phần AI điều phối này không?',
        a: 'Không tính thêm cho phần điều phối: nó chạy trên máy bạn như phần còn lại của sản phẩm. Ngoài giá sản phẩm, khoản duy nhất bạn trả là tiền gọi nhà cung cấp AI bạn chọn để viết kịch bản, và bạn trả thẳng cho họ theo mức mình dùng.',
      },
      {
        q: 'Dùng AI để kiểm tra kết quả có đáng tin hơn con người không?',
        a: 'Không, và đó là lý do những phép kiểm tra chặn dây chuyền đều chạy bằng mã chứ không bằng mô hình: đủ dài chưa, đúng tên sản phẩm chưa, tệp có mở được không. Mô hình có thể góp ý, nhưng không phải là người gác cổng.',
      },
    ],
    en: [
      {
        q: 'Does the AI decide to publish videos by itself?',
        a: 'No. Posting cannot be undone, so it sits outside what a model may decide. You either approve the content first, or set a rule in advance; the final press is never the model’s to make.',
      },
      {
        q: 'If the AI writes a bad script, does it go straight into a video?',
        a: 'No. Whatever comes back has to pass automatic checks on length and on the product name and price against the source data. If it fails, the job goes back in the queue or stops with an error — it does not move on to rendering.',
      },
      {
        q: 'Do I pay extra for the AI orchestration part?',
        a: 'There is no extra charge for orchestration: it runs on your machine like the rest of the product. Beyond the product price, the only thing you pay for is the calls to the AI provider you picked for writing scripts, billed by them for what you use.',
      },
      {
        q: 'Is AI checking more reliable than a person checking?',
        a: 'No, and that is why the checks that can stop the pipeline run in code rather than through a model: is it long enough, is the product name right, does the file open. A model can offer an opinion, but it is not the gatekeeper.',
      },
    ],
  },
};

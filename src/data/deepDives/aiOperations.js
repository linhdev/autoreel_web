/**
 * Long-form copy for `/ai-van-hanh/`.
 *
 * The route is a page of its own because the feature is one: a campaign that
 * finds, builds, checks, posts, measures and learns without a press between
 * steps. The page has to answer the questions the campaign screen cannot —
 * what the loop actually does, which six answers define it, what the rules of
 * the platform are, and where it deliberately stops.
 *
 * **Every claim here is a behaviour that exists.** The six answers, the five
 * checkpoints, the Reels limits, the `read_insights` permission and the
 * CAPTCHA hand-off are product facts, not ambitions. If one changes in the
 * app, this page is the copy that has to change with it.
 */
export default {
  vi: {
    title: 'Một chiến dịch, **một lần bấm**, cả vòng lặp tự chạy',
    faqTitle: 'Câu hỏi về AI Vận Hành',
    subtitle:
      'AI Vận Hành không phải một nút đăng bài. Nó là một vòng lặp sáu bước, có điểm dừng ở đúng chỗ bạn muốn và có những chỗ nó cố tình không tự quyết.',
    blocks: [
      {
        h2: 'Vòng lặp sáu bước, và bạn chỉ bấm một lần',
        paragraphs: [
          'Mỗi chiến dịch chạy cùng một vòng: tìm video nguồn, dựng bản hoàn chỉnh, kiểm trước khi đăng, đăng lên Page, đọc số của Facebook, rồi rút bài học cho lượt sau. Sáu bước nối tiếp nhau, không bước nào cần bạn bấm lại.',
        ],
        table: {
          head: ['Bước', 'Máy làm gì', 'Bạn thấy gì'],
          rows: [
            [
              'Tìm nguồn',
              'Tìm video mới trong bốn nguồn tìm được: Bilibili, Douyin, YouTube, iQiyi',
              'Danh sách video đã tìm trong cửa sổ theo dõi',
            ],
            [
              'Dựng',
              'Tải nguồn, cắt, lồng tiếng, phụ đề theo chế độ nội dung của chiến dịch',
              'Video mới trong bảng kết quả, trạng thái “đang tạo”',
            ],
            [
              'Kiểm',
              'Kiểm khung dọc và thời lượng trước khi cho đăng',
              '“Kiểm không đạt” kèm lý do cụ thể',
            ],
            ['Đăng', 'Đăng lên Page đã chọn, ngay hoặc chờ bạn duyệt', '“Đã đăng” hoặc “Chờ duyệt”'],
            ['Đo', 'Đọc số từ Facebook Insights ở năm mốc', 'Cột số của mốc mới nhất'],
            ['Học', 'So sánh trong cùng nền tảng, cùng mốc rồi cập nhật kế hoạch', 'Những gì lượt sau ưu tiên'],
          ],
        },
        paragraphsAfter: [
          'Bước nào hỏng thì chiến dịch dừng ở bước đó và nói lý do. Một video lỗi không trôi tiếp sang khâu đăng.',
        ],
      },
      {
        h2: 'Sáu câu trả lời tạo nên một chiến dịch',
        paragraphs: [
          'Tạo chiến dịch là trả lời sáu câu. Không có câu thứ bảy, và không có file cấu hình nào phải sửa tay.',
        ],
        table: {
          head: ['Câu hỏi', 'Ảnh hưởng tới'],
          rows: [
            ['Tên chiến dịch', 'Cách bạn tìm lại nó trong danh sách'],
            ['Page đích', 'Nơi video được đăng'],
            ['Cách đăng: đăng ngay hoặc duyệt trước', 'Video lên thẳng hay nằm chờ bạn bấm duyệt'],
            ['Ngôn ngữ bài đăng: tiếng Việt hoặc tiếng Anh', 'Ngôn ngữ của chú thích và lời trong video'],
            ['Số video mỗi ngày', 'Khối lượng của một lượt chạy'],
            ['Kiểu chạy: liên tục theo giờ bắt đầu, hoặc một lần', 'Chiến dịch tự chạy mỗi ngày hay chỉ chạy một lượt'],
          ],
        },
        paragraphsAfter: [
          'Sáu câu này đổi được sau khi tạo. Đổi giữa chừng không làm hỏng video đã đăng, chỉ đổi cách chạy từ lượt kế tiếp.',
        ],
      },
      {
        h2: 'Sáu chế độ nội dung, một luật của Reels',
        paragraphs: [
          'Chế độ nội dung quyết định cách video được dựng. Chọn một chế độ cho cả chiến dịch, hoặc đổi khi mở chiến dịch mới.',
        ],
        table: {
          head: ['Chế độ', 'Đầu vào', 'Dùng khi'],
          rows: [
            ['Tự động', 'Một chủ đề', 'Cần video mới mà không có nguồn sẵn'],
            ['Review', 'Một video review dài', 'Muốn tách thành nhiều clip ngắn'],
            ['Tóm tắt phim', 'Một phim hoặc một series', 'Kể lại cốt truyện có lời bình'],
            ['Reup', 'Video có sẵn', 'Làm lại theo kênh của bạn'],
            ['Cắt highlight', 'Video dài', 'Lấy những đoạn đáng lên'],
            ['Dịch và lồng tiếng', 'Video nói ngôn ngữ khác', 'Đưa về tiếng Việt hoặc tiếng Anh'],
          ],
        },
        paragraphsAfter: [
          'Facebook Reels chỉ nhận khung 9:16 và thời lượng từ 3 đến 90 giây. Video sai khung hoặc quá dài bị chặn ở bước kiểm, kèm lý do, chứ không được đăng rồi bị nền tảng từ chối.\n\nỞ chế độ dịch và lồng tiếng, nguồn dài hơn 90 giây được tự cắt thành clip 45 giây khung 9:16 trước khi lồng tiếng. Cắt trước khi lồng tiếng là có chủ ý: lời đọc trên đoạn đã cắt thì khớp với hình, không phải ghép lại sau.',
        ],
      },
      {
        h2: 'Duyệt trước hay đăng ngay',
        paragraphs: [
          'Đây là câu trả lời quan trọng nhất trong sáu câu, vì nó quyết định bạn giữ bao nhiêu quyền.',
        ],
        bullets: [
          '**Duyệt trước** — video dựng xong, qua kiểm, rồi nằm chờ. Bạn duyệt trong app hoặc bấm nút trong tin nhắn Telegram; chỉ sau đó video mới lên Page.',
          '**Đăng ngay** — video qua kiểm là đăng. Phù hợp với chiến dịch đã chạy ổn và nội dung không nhạy cảm.',
          '**Đổi giữa hai chế độ** — mở chiến dịch và đổi; video đang chờ duyệt giữ nguyên trạng thái của nó.',
        ],
        paragraphsAfter: [
          'Tuần đầu của bất kỳ chiến dịch mới nên chạy duyệt trước. Sau khi bạn thấy mười video đi qua mà không phải sửa gì, đổi sang đăng ngay là quyết định có cơ sở.',
        ],
      },
      {
        h2: 'Đo ở năm mốc, đọc mốc mới nhất',
        paragraphs: [
          'Sau khi đăng, app đọc số của bài viết ở năm mốc tính từ lúc đăng. Bảng kết quả chỉ hiện mốc mới nhất của mỗi video, vì so một video mới đăng một giờ với một video đã chạy bảy ngày là so hai thứ khác nhau.',
        ],
        table: {
          head: ['Mốc', 'Dùng để đọc gì'],
          rows: [
            ['1 giờ', 'Bài có được phân phối không; số còn quá nhỏ để kết luận'],
            ['6 giờ', 'Hướng đi ban đầu, vẫn còn nhiễu'],
            ['24 giờ', 'Mốc đầu tiên đủ ổn định để so giữa các video'],
            ['72 giờ', 'Đường cong đã rõ; phần lớn video đã nhận xong lượt xem chính'],
            ['168 giờ', 'Bức tranh một tuần, dùng để chốt bài học'],
          ],
        },
        paragraphsAfter: [
          'Nút “Cập nhật số” đọc lại số ngay, không đợi mốc kế tiếp. Nó không đổi lịch đo và không tạo ra mốc mới.\n\nSố lấy từ Facebook Insights, nên Page token phải có quyền read_insights. App xin quyền này khi kết nối Page và có nút kết nối lại nếu quyền bị thu hồi. Thiếu quyền thì đăng vẫn chạy, chỉ phần đo là trống.',
        ],
      },
      {
        h2: 'Nó học từ bốn tín hiệu, và học chậm khi kênh còn nhỏ',
        paragraphs: [
          'Mỗi video đã đăng để lại bốn tín hiệu. Bốn tín hiệu này không được cộng thô thành một điểm, vì mỗi cái trả lời một câu khác nhau.',
        ],
        bullets: [
          '**Lượt xem** — nền tảng có phân phối bài hay không.',
          '**Tỉ lệ xem hết** — thời gian xem trung bình chia cho độ dài video; đoạn nào giữ được người xem.',
          '**Tương tác** — like, comment, share trên mỗi lượt xem.',
          '**Follow trên 1.000 lượt xem** — video có mang người mới về Page hay chỉ được xem rồi thôi.',
        ],
        paragraphsAfter: [
          'Mỗi tín hiệu được chuẩn hoá theo nền tảng và theo mốc đo trước khi so: một video ở mốc 1 giờ không bị so với video ở mốc 168 giờ, và một Page nhỏ không bị so với Page lớn bằng con số thô.\n\nVideo có ít lượt xem bị kéo về mức trung bình thay vì được coi là thắng. Đó là cách xử lý mẫu nhỏ: một video may mắn không đủ để đổi cả kế hoạch.\n\nKết quả cũ mờ dần theo thời gian, và vẫn có một phần lượt chạy dành cho phương án chưa thử. Không có phần đó thì nó sẽ lặp mãi cái thắng đầu tiên và không bao giờ biết cái khác có tốt hơn không.',
        ],
      },
      {
        h2: 'Giới hạn, nói thẳng',
        bullets: [
          '**CAPTCHA không bị vượt.** Douyin có lúc chặn bằng thanh trượt. App mở cửa sổ Chrome riêng cho Douyin; bạn giải một lần trong cửa sổ đó, chiến dịch chờ rồi thử lại. Không có đoạn mã nào tự giải CAPTCHA.',
          '**Bốn nguồn tìm được**: Bilibili, Douyin, YouTube, iQiyi. TikTok và Hongguoduanju chỉ tải được bằng link dán vào màn Tải video, không nằm trong vòng tìm của chiến dịch.',
          '**Chỉ đăng Facebook/Reels.** Chưa có TikTok hay YouTube trực tiếp.',
          '**Reels chỉ nhận 9:16, 3–90 giây.** Video sai bị chặn ở bước kiểm.',
          '**Cần quyền read_insights để đo.** Thiếu quyền thì vẫn đăng được, nhưng không có số để học.',
          '**Một lần bấm cho mỗi chiến dịch.** Lượt chạy xong mà không đăng được video nào thì nút Bắt đầu trở lại; bộ chạy hằng ngày chỉ khởi động chiến dịch chạy liên tục.',
          '**Máy phải đang chạy.** App chạy trên máy bạn; máy tắt thì lượt đó không chạy và chiến dịch chờ lượt kế tiếp.',
        ],
        paragraphsAfter: [
          'Nếu một dòng trong danh sách này là thứ bạn cần, hãy coi AI Vận Hành là công cụ cho phần còn lại, không phải giải pháp cho dòng đó.',
        ],
      },
    ],
    faq: [
      [
        'AI Vận Hành có tự đăng mà không cần tôi không?',
        'Có, nếu bạn chọn đăng ngay. Chế độ duyệt trước giữ video lại cho tới khi bạn bấm duyệt trong app hoặc trong tin nhắn Telegram.',
      ],
      [
        'Nó có tự giải CAPTCHA không?',
        'Không. Douyin có lúc chặn bằng thanh trượt; app mở cửa sổ Chrome riêng cho Douyin để bạn giải một lần, rồi chiến dịch chờ và thử lại. Không có phần nào tự vượt qua bước đó.',
      ],
      [
        'Có tìm được video từ TikTok không?',
        'Không. Bốn nguồn tìm được là Bilibili, Douyin, YouTube và iQiyi. TikTok và Hongguoduanju vẫn tải được bằng link ở màn Tải video, chỉ không nằm trong vòng tìm của chiến dịch.',
      ],
      [
        'Số liệu lấy từ đâu?',
        'Từ Facebook Insights, qua Page token có quyền read_insights. App xin quyền và có nút kết nối lại; thiếu quyền thì vẫn đăng được nhưng không đo được.',
      ],
      [
        'Video dài hơn 90 giây thì sao?',
        'Reels chỉ nhận 9:16 và 3–90 giây, nên video sai bị chặn ở bước kiểm kèm lý do. Riêng chế độ dịch và lồng tiếng, nguồn dài hơn 90 giây được tự cắt thành clip 45 giây 9:16 trước khi lồng tiếng.',
      ],
      [
        'Máy tắt thì chiến dịch có chạy tiếp không?',
        'Không. App chạy trên máy bạn; máy tắt thì lượt đó không chạy, và chiến dịch chờ lượt kế tiếp.',
      ],
    ],
  },
  en: {
    title: 'One campaign, **one press**, the whole loop runs',
    faqTitle: 'AI Operations questions',
    subtitle:
      'AI Operations is not a publish button. It is a six-step loop that stops where you tell it to, and it has places where it deliberately refuses to decide.',
    blocks: [
      {
        h2: 'The loop has six steps, and you press once',
        paragraphs: [
          'Every campaign runs the same loop: find source videos, build the finished cut, check it, post it to the Page, read Facebook’s numbers, then turn the lesson into the next plan. Six steps in a row, and none of them needs you to press again.',
        ],
        table: {
          head: ['Step', 'What the machine does', 'What you see'],
          rows: [
            [
              'Find',
              'Search for new videos across the four searchable sources: Bilibili, Douyin, YouTube, iQiyi',
              'The found-video list in the watch window',
            ],
            [
              'Build',
              'Fetch the source, cut, dub and subtitle it in the campaign’s content mode',
              'A new video in the results table, state “creating”',
            ],
            [
              'Check',
              'Check the vertical frame and the duration before publishing',
              '“QC failed”, with the specific reason',
            ],
            ['Post', 'Publish to the chosen Page, immediately or after you approve', '“Posted” or “Awaiting approval”'],
            ['Measure', 'Read Facebook Insights at five checkpoints', 'The latest checkpoint’s numbers'],
            ['Learn', 'Compare within the same platform and checkpoint, then update the plan', 'What the next run favours'],
          ],
        },
        paragraphsAfter: [
          'If a step fails, the campaign stops there and says why. A broken video does not drift on into publishing.',
        ],
      },
      {
        h2: 'Six answers make one campaign',
        paragraphs: [
          'Creating a campaign is six answers. There is no seventh question, and no config file to edit by hand.',
        ],
        table: {
          head: ['Question', 'What it decides'],
          rows: [
            ['Campaign name', 'How you find it again in the list'],
            ['Target Page', 'Where the video is published'],
            ['Post mode: publish now or approve first', 'Whether the video goes live or waits for your approval'],
            ['Post language: Vietnamese or English', 'The language of the caption and the voice'],
            ['Videos per day', 'How much one run does'],
            ['Runtime: continuous at a start time, or one-shot', 'Whether the campaign runs daily or only once'],
          ],
        },
        paragraphsAfter: [
          'All six can change later. Changing one mid-flight does not touch videos already posted; it changes how the next run behaves.',
        ],
      },
      {
        h2: 'Six content modes, one Reels rule',
        paragraphs: [
          'The content mode decides how the video is built. Pick one for the campaign, or change it when you start a new campaign.',
        ],
        table: {
          head: ['Mode', 'Input', 'When to use it'],
          rows: [
            ['Automatic', 'A topic', 'You need new videos and have no footage'],
            ['Review', 'One long review video', 'You want it split into short clips'],
            ['Movie recap', 'A film or a series', 'Retell the story with narration'],
            ['Reup', 'Existing footage', 'Rework it for your own channel'],
            ['Cut highlights', 'A long video', 'Keep the moments worth posting'],
            ['Translate and dub', 'A video in another language', 'Bring it into Vietnamese or English'],
          ],
        },
        paragraphsAfter: [
          'Facebook Reels accepts only a 9:16 frame and 3 to 90 seconds. A video with the wrong shape or too long is blocked at the check step, with the reason, rather than posted and rejected by the platform.\n\nIn translate-and-dub mode, a source longer than 90 seconds is cut into a 45-second 9:16 clip before dubbing. Cutting first is deliberate: a voice recorded over the finished cut matches the picture, instead of being stitched on afterwards.',
        ],
      },
      {
        h2: 'Approve first, or publish straight away',
        paragraphs: [
          'This is the most important of the six answers, because it decides how much control you keep.',
        ],
        bullets: [
          '**Approve first** — the video is built, passes the check, then waits. You approve in the app or press the button in a Telegram message; only then does it go to the Page.',
          '**Publish straight away** — a video that passes the check is posted. This suits a campaign that has been running cleanly with content that is not sensitive.',
          '**Switch between them** — open the campaign and change the answer; videos already awaiting approval keep their state.',
        ],
        paragraphsAfter: [
          'The first week of any new campaign should run on approve-first. Once ten videos have gone through without an edit, switching to publish straight away is a decision with evidence behind it.',
        ],
      },
      {
        h2: 'Five checkpoints, and you read the latest',
        paragraphs: [
          'After posting, the app reads the post’s numbers at five checkpoints measured from publication. The results table shows only the latest checkpoint for each video, because comparing a video one hour old with one that has run seven days is comparing two different things.',
        ],
        table: {
          head: ['Checkpoint', 'What it is for'],
          rows: [
            ['1 hour', 'Whether the post is being distributed at all; the numbers are too small to conclude anything'],
            ['6 hours', 'An early direction, still noisy'],
            ['24 hours', 'The first checkpoint stable enough to compare videos'],
            ['72 hours', 'The curve is clear; most videos have taken their main views'],
            ['168 hours', 'The one-week picture, used to settle the lesson'],
          ],
        },
        paragraphsAfter: [
          'The “Refresh numbers” button reads the numbers now instead of waiting for the next checkpoint. It does not change the schedule and does not create a checkpoint.\n\nThe numbers come from Facebook Insights, so the Page token needs the read_insights permission. The app asks for it when you connect the Page and offers a reconnect button if the permission is revoked. Without it, publishing still runs; only measurement is empty.',
        ],
      },
      {
        h2: 'It learns from four signals, and it learns slowly on a small Page',
        paragraphs: [
          'Every posted video leaves four signals. They are not added into one score, because each answers a different question.',
        ],
        bullets: [
          '**Views** — whether the platform distributes the post.',
          '**Watch-through** — average watch time divided by the video length; which parts hold people.',
          '**Engagement** — likes, comments and shares per view.',
          '**Follows per 1,000 views** — whether the video brings new people to the Page or is only watched once.',
        ],
        paragraphsAfter: [
          'Each signal is normalised by platform and by checkpoint before anything is compared: a video at one hour is not compared with a video at 168 hours, and a small Page is not compared with a large one on raw numbers.\n\nA video with few views is pulled towards the average instead of being treated as a winner. That is what to do with a small sample: one lucky video is not enough to change the plan.\n\nOlder results fade over time, and a share of each run is kept for an option that has not been tried. Without that share, it would repeat the first winner forever and never find out whether something else is better.',
        ],
      },
      {
        h2: 'The limits, stated plainly',
        bullets: [
          '**CAPTCHA is not bypassed.** Douyin sometimes blocks with a slider. The app opens a dedicated Chrome window for Douyin; you solve it once in that window, and the campaign waits and retries. No code solves a CAPTCHA for you.',
          '**Four searchable sources**: Bilibili, Douyin, YouTube, iQiyi. TikTok and Hongguoduanju can be downloaded by link on the Download screen, but they are not in the campaign’s search loop.',
          '**Facebook/Reels only.** No direct TikTok or YouTube posting yet.',
          '**Reels accepts 9:16, 3–90 seconds only.** A video that breaks the rule is blocked at the check step.',
          '**read_insights is required to measure.** Without it, publishing still works, but there are no numbers to learn from.',
          '**One press per campaign.** If a run finishes without posting a single video, the Start button comes back; the daily runner only starts continuous campaigns.',
          '**The machine has to be running.** The app runs on your computer; if it is off, that run does not happen and the campaign waits for the next one.',
        ],
        paragraphsAfter: [
          'If one line in this list is the thing you need, treat AI Operations as a tool for the rest of the work — not as a solution to that line.',
        ],
      },
    ],
    faq: [
      [
        'Does AI Operations publish without me?',
        'Yes, if you choose publish straight away. Approve-first holds the video until you press approve in the app or in a Telegram message.',
      ],
      [
        'Does it solve the CAPTCHA?',
        'No. Douyin sometimes blocks with a slider; the app opens a dedicated Chrome window for Douyin so you can solve it once, then the campaign waits and retries. Nothing skips that step automatically.',
      ],
      [
        'Can it find videos on TikTok?',
        'No. The four searchable sources are Bilibili, Douyin, YouTube and iQiyi. TikTok and Hongguoduanju can still be downloaded by link on the Download screen; they are just not part of the campaign’s search loop.',
      ],
      [
        'Where do the numbers come from?',
        'From Facebook Insights, through a Page token with the read_insights permission. The app asks for it and offers a reconnect button; without it you can still post, but not measure.',
      ],
      [
        'What happens to a video longer than 90 seconds?',
        'Reels accepts 9:16 and 3–90 seconds only, so a video that breaks the rule is blocked at the check step with the reason. In translate-and-dub mode, a source longer than 90 seconds is cut into a 45-second 9:16 clip before dubbing.',
      ],
      [
        'Does the campaign keep running when the computer is off?',
        'No. The app runs on your computer; if it is off, that run does not happen, and the campaign waits for the next one.',
      ],
    ],
  },
};

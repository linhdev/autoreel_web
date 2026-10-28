/**
 * Long-form copy for `/quy-trinh-tao-video-hang-loat/`.
 *
 * The route already renders `WorkflowSection` and `HowItWorks`, both of which
 * also appear on the home page. That made the route a subset of the home page
 * — 79% of its sentences were identical — which is a duplicate, not a landing
 * page. This block is the part that exists only here: what happens inside a
 * job, how long it takes, where it breaks, and when not to use it.
 *
 * Every claim is drawn from the product data in `workflows.js`,
 * `allFeatures.js` and the install docs. The timing table is a recommendation,
 * not a measured guarantee; it says so in the copy.
 */
export default {
  vi: {
    title: 'Một job đi từ nguồn **đến bài đăng**',
    faqTitle: 'Câu hỏi nhanh',
    subtitle:
      'Ba workflow trên trang chủ trả lời “làm gì”. Phần này trả lời “chạy thế nào”: máy nhận gì, làm gì, bạn kiểm gì, và chỗ nào hay hỏng.',
    blocks: [
      {
        h2: 'Một job là một chuỗi, không phải một cú bấm',
        paragraphs: [
          'Một job trong AutoReel là một chuỗi bước có cùng một nguồn vào và một đầu ra. Bạn cấu hình một lần, bấm chạy, rồi kiểm tra ở những chỗ đã đánh dấu. Không phải ngồi canh từng video.',
          'Có ba loại nguồn: link sản phẩm Shopee, một video có sẵn — link hoặc tệp — hoặc một chủ đề. Mỗi loại vào một workflow khác nhau, nhưng cùng đi qua một hàng đợi.',
        ],
        bullets: [
          'Nguồn là link sản phẩm → Affiliate Flow.',
          'Nguồn là video có sẵn → Reup/Repurpose Flow hoặc AI Review Flow.',
          'Nguồn là một câu chủ đề → Video ngắn hoặc Video tự động.',
        ],
      },
      {
        h2: 'Sáu bước bên trong một job',
        paragraphs: [
          'Sáu bước dưới đây là đường đi chung. Luồng trọn gói chạy hết cả sáu; màn lẻ chỉ chạy đúng một bước.',
        ],
        table: {
          head: ['Bước', 'Máy làm gì', 'Bạn kiểm gì'],
          rows: [
            [
              '1. Nhận nguồn',
              'Tải video, đọc link sản phẩm hoặc nhận chủ đề; kiểm tra link công khai, thời lượng và dung lượng.',
              'Link còn sống, video công khai, đúng sản phẩm.',
            ],
            [
              '2. Chuẩn bị',
              'Tách âm thanh, lấy metadata, kiểm tra nguồn có phụ đề cứng hoặc logo không.',
              'Nguồn có tiếng rõ, không bị chặn vùng.',
            ],
            [
              '3. Viết',
              'AI viết kịch bản và caption theo giọng, độ dài và người xem bạn chọn.',
              'Kịch bản có đúng sản phẩm, đúng lợi ích không.',
            ],
            [
              '4. Dựng',
              'Cắt highlight, ghép hình, phụ đề, branding, nhạc nền.',
              'Mười giây đầu, chữ có bị nút app che, nhạc có lấn giọng.',
            ],
            [
              '5. Xuất',
              'Render file dọc 1080×1920, đặt tên theo lô.',
              'File mở được, đúng thời lượng, đúng khung.',
            ],
            [
              '6. Đăng',
              'Đăng Shopee Video hoặc Facebook/Reels kèm caption và link sản phẩm.',
              'Đúng shop/Page, link sản phẩm còn sống.',
            ],
          ],
        },
        paragraphsAfter: [
          'Không phải bước nào cũng bắt bạn dừng. Bước 1 và bước 6 cần bạn xác nhận; bước 2–5 chạy tự động. Nếu một bước lỗi, job dừng ở đúng bước đó và giữ phần đã xong.',
        ],
      },
      {
        h2: 'Ba workflow, ba cách kiểm soát',
        bullets: [
          '**Affiliate Flow** — kiểm link sản phẩm, giá và ảnh đầu vào; đầu ra là video, caption và bài đăng kèm link.',
          '**Reup / Repurpose Flow** — kiểm quyền sử dụng nguồn và các bước bạn tick: cắt highlight, xoá logo, lồng tiếng, chèn chữ. Đầu ra là bản mới, không phải bản gốc.',
          '**AI Review Flow** — kiểm kịch bản AI viết lại có giữ đúng ý không; đầu ra là N video từ một nguồn.',
          '**Tóm tắt phim** — kiểm phim có âm thanh hoặc phụ đề rõ; đầu ra là video kể lại có lời bình tiếng Việt.',
        ],
        paragraphsAfter: [
          'AI Review tạo bản mới từ nội dung bạn đưa vào; nó không thay đổi quyền sở hữu nguồn và không đảm bảo video không bị đánh bản quyền.',
        ],
      },
      {
        h2: 'Chạy theo lô: 30 video một lần',
        paragraphs: [
          'Gói Full và Personal cho 30 video mỗi lô. Hàng đợi chạy song song; số job cùng lúc phụ thuộc gói và cấu hình máy.',
          'Một lô 30 video không có nghĩa là 30 video giống nhau. Cùng một nguồn vẫn có thể ra nhiều góc: mỗi video một kịch bản, một caption, một cách mở.',
        ],
        table: {
          head: ['Việc', 'Gợi ý chạy'],
          rows: [
            ['Video 30–60 giây', '3–5 job song song nếu máy 16GB; 2–3 job nếu 8GB.'],
            ['Video 3–5 phút', '2–3 job song song.'],
            ['Tóm tắt phim 15–30 phút', '1 job, chạy nền; đừng chạy chen với lô khác.'],
            ['Lô 30 video', 'Chia 2–3 đợt; xem 3 video đầu trước khi chạy tiếp.'],
          ],
        },
        paragraphsAfter: [
          'Đây là gợi ý theo kinh nghiệm, không phải thông số cố định. Máy yếu, ổ cứng chậm hoặc video nguồn nặng sẽ làm mọi con số dài hơn.',
        ],
      },
      {
        h2: 'Chỗ hay hỏng, và cách biết',
        bullets: [
          '**Link không tải được** — video riêng tư, cần đăng nhập hoặc chặn vùng. Thử link khác trước khi sửa cấu hình.',
          '**Hết RAM hoặc đầy ổ** — job dừng, phần đã xong được giữ. Giảm số job song song, dọn ổ rồi chạy lại.',
          '**AI trả lời thiếu** — kiểm key, số dư và model. Chạy lại bước viết, không cần làm lại bước tải.',
          '**Đăng thất bại** — kiểm token Facebook, kết nối điện thoại Shopee và link sản phẩm.',
          '**File ra sai khung** — kiểm template, safe zone và phụ đề; xem preview trước khi xuất.',
        ],
        paragraphsAfter: [
          'Mỗi job có trạng thái và log. Đừng đoán từ màn hình đang im; đọc bước cuối cùng trước khi chạy lại.',
        ],
      },
      {
        h2: 'Khi nào không nên dùng workflow',
        bullets: [
          'Cần dựng tay nhiều lớp hiệu ứng: dùng editor, không phải AutoReel.',
          'Cần quay người thật hoặc b-roll riêng: workflow không thay máy quay.',
          'Cần đăng TikTok hoặc YouTube trực tiếp: hiện chỉ có Shopee Video và Facebook/Reels.',
          'Cần footage 100% do AI sinh: workflow lấy hình từ nguồn và kho tư liệu, không sinh cảnh mới.',
        ],
        paragraphsAfter: [
          'Nói thẳng: AutoReel là dây chuyền sản xuất, không phải studio. Nó mạnh nhất khi bạn đã biết mình muốn nói gì và cần làm đủ nhanh để đăng đều.',
        ],
      },
    ],
    faq: [
      [
        'Một job mất bao lâu?',
        'Tuỳ độ dài video và máy. Video 30–60 giây thường vài phút; video tóm tắt phim lâu hơn nhiều. Không có một con số đúng cho mọi máy.',
      ],
      [
        'Có dừng giữa job được không?',
        'Có. Job dừng ở bước hiện tại và giữ phần đã xong; chạy lại từ bước đó thay vì làm lại từ đầu.',
      ],
      [
        'Có chạy lại chỉ bước bị lỗi không?',
        'Có. Sửa nguyên nhân — key, link, token, dung lượng — rồi chạy lại bước đó.',
      ],
      [
        'Có lên lịch đăng không?',
        'Có, ở gói Full trở lên. Video xếp hàng chờ và đăng theo giờ bạn đặt.',
      ],
      [
        'Có tự đăng nhiều Page không?',
        'Có. Mỗi Page một caption; kiểm tra quyền của token trước khi chạy lô.',
      ],
    ],
  },
  en: {
    title: 'One job, from source **to published post**',
    faqTitle: 'Quick answers',
    subtitle:
      'The three workflows on the home page answer “what does it do”. This answers “how it runs”: what the machine receives, what it does, what you check, and where it usually breaks.',
    blocks: [
      {
        h2: 'A job is a chain, not a button',
        paragraphs: [
          'A job in AutoReel is a chain of steps with one input and one output. You configure it once, press run, then check the few places marked for you. You do not watch every video render.',
          'There are three input types: a Shopee product link, an existing video — a link or a file — or a topic. Each enters a different workflow, but they all pass through one queue.',
        ],
        bullets: [
          'A product link enters Affiliate Flow.',
          'An existing video enters Reup / Repurpose Flow or AI Review Flow.',
          'A topic enters Short video or Automatic video.',
        ],
      },
      {
        h2: 'Six steps inside one job',
        paragraphs: [
          'These six steps are the shared path. An end-to-end flow runs all six; a single-job screen runs exactly one.',
        ],
        table: {
          head: ['Step', 'What the machine does', 'What you check'],
          rows: [
            [
              '1. Receive the source',
              'Downloads the video, reads the product link or accepts the topic; checks it is public, its duration and its size.',
              'The link still works, the video is public, the product is the right one.',
            ],
            [
              '2. Prepare',
              'Separates the audio, reads metadata, checks for burned-in subtitles or a logo.',
              'The audio is clear and the source is not region-blocked.',
            ],
            [
              '3. Write',
              'The AI writes the script and caption for the voice, length and viewer you chose.',
              'The script names the right product and the right benefit.',
            ],
            [
              '4. Build',
              'Cuts highlights, assembles the picture, adds subtitles, branding and a music bed.',
              'The first ten seconds, whether app buttons cover the text, whether the music fights the voice.',
            ],
            [
              '5. Export',
              'Renders a 1080×1920 vertical file and names it for the batch.',
              'The file opens, runs the right length and keeps the right frame.',
            ],
            [
              '6. Publish',
              'Posts to Shopee Video or Facebook/Reels with the caption and product link.',
              'The right shop or Page, and a product link that still works.',
            ],
          ],
        },
        paragraphsAfter: [
          'Not every step needs you. Steps 1 and 6 ask for confirmation; steps 2–5 run on their own. If a step fails, the job stops there and keeps what is already done.',
        ],
      },
      {
        h2: 'Three workflows, three places to check',
        bullets: [
          '**Affiliate Flow** — check the product link, price and pictures going in; out comes the video, caption and a post carrying the link.',
          '**Reup / Repurpose Flow** — check that you have the right to use the source, then tick the steps: cut highlights, remove a logo, dub it, add text. The output is a new version, not the original.',
          '**AI Review Flow** — check that the AI rewrite keeps the point; the output is N videos from one source.',
          '**Movie recap** — check that the film has clear audio or subtitles; the output is a narrated recap in Vietnamese.',
        ],
        paragraphsAfter: [
          'AI Review builds a new version from the material you supply. It does not change who owns the source, and it does not guarantee the video avoids a copyright claim.',
        ],
      },
      {
        h2: 'Running in batches: 30 videos at a time',
        paragraphs: [
          'Full and Personal allow 30 videos per batch. The queue runs jobs in parallel; how many at once depends on the plan and the machine.',
          'A batch of 30 does not mean 30 identical videos. One source can still produce different angles: a different script, caption and opening for each video.',
        ],
        table: {
          head: ['Work', 'Suggested run'],
          rows: [
            ['30–60 second videos', '3–5 parallel jobs on 16GB; 2–3 on 8GB.'],
            ['3–5 minute videos', '2–3 parallel jobs.'],
            ['15–30 minute movie recaps', 'One job in the background; do not run it alongside a batch.'],
            ['A batch of 30', 'Split it into 2–3 runs; watch the first three videos before continuing.'],
          ],
        },
        paragraphsAfter: [
          'These are recommendations from use, not fixed specifications. A slower machine, a slow disk or a heavy source will make every number longer.',
        ],
      },
      {
        h2: 'Where it usually breaks, and how to tell',
        bullets: [
          '**The link will not download** — private video, login required, or region-blocked. Try another link before changing settings.',
          '**Out of RAM or disk** — the job stops and keeps what is done. Lower the parallel jobs, free some space, run it again.',
          '**The AI answer is incomplete** — check the key, the balance and the model. Re-run the writing step; you do not need to download the source again.',
          '**Publishing fails** — check the Facebook token, the Shopee phone connection and the product link.',
          '**The output frame is wrong** — check the template, the safe zone and the subtitles; preview before exporting.',
        ],
        paragraphsAfter: [
          'Every job has a status and a log. Do not guess from a quiet screen; read the last step before running it again.',
        ],
      },
      {
        h2: 'When not to use a workflow',
        bullets: [
          'You need many layers of manual effects: use an editor, not AutoReel.',
          'You need to film a person or shoot your own b-roll: a workflow does not replace a camera.',
          'You need to post directly to TikTok or YouTube: only Shopee Video and Facebook/Reels are integrated.',
          'You need footage generated entirely by AI: workflows take pictures from the source and your library; they do not invent scenes.',
        ],
        paragraphsAfter: [
          'Put plainly: AutoReel is a production line, not a studio. It is strongest when you already know what you want to say and need to make enough of it to post consistently.',
        ],
      },
    ],
    faq: [
      [
        'How long does a job take?',
        'It depends on the video length and the machine. A 30–60 second video usually takes a few minutes; a movie recap takes much longer. There is no single number that is true for every machine.',
      ],
      [
        'Can I stop a job halfway?',
        'Yes. It stops at the current step and keeps what is already done; running it again resumes from there instead of starting over.',
      ],
      [
        'Can I re-run only the step that failed?',
        'Yes. Fix the cause — key, link, token, disk space — then run that step again.',
      ],
      [
        'Can it schedule posts?',
        'Yes, on Full and above. Videos wait in the queue and publish at the time you set.',
      ],
      [
        'Can it post to several Pages at once?',
        'Yes. Each Page gets its own caption; check the token permissions before a batch.',
      ],
    ],
  },
};

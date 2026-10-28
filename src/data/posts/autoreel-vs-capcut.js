/**
 * Blog post — "AutoReel vs CapCut: hai công cụ cho hai loại việc".
 *
 * A comparison that does not pretend CapCut is bad. It is better than AutoReel
 * at editing; AutoReel is better at turning a list of products into a batch.
 * The article is organised around the job, not the feature count.
 */
export default {
  slug: {
    // The Vietnamese slug is spelled out because `post-rules.mjs` requires the
    // two languages to have different addresses, even when the brand names are
    // Latin. Both forms still contain the query people type.
    vi: 'so-sanh-autoreel-va-capcut',
    en: 'autoreel-vs-capcut',
  },
  title: {
    vi: 'AutoReel vs CapCut: hai công cụ cho hai loại việc',
    en: 'AutoReel vs CapCut: two tools for two kinds of work',
  },
  description: {
    vi: 'So sánh AutoReel và CapCut theo công việc: dựng tay từng video hay chạy hàng loạt từ danh sách sản phẩm. Ai nên dùng cái nào, và khi nào dùng cả hai.',
    en: 'AutoReel vs CapCut by the job: editing one video by hand or running a batch from a product list. Who should use which, and when to use both.',
  },
  date: '2026-10-27',
  minutes: { vi: 7, en: 7 },
  tag: { vi: 'Kinh nghiệm', en: 'Field notes' },
  lead: {
    vi: 'CapCut và AutoReel không cạnh tranh ở cùng một chỗ. CapCut là trình dựng: bạn kiểm soát từng khung và mỗi video là một lần làm. AutoReel là dây chuyền: bạn đưa danh sách nguyên liệu và nhận cả lô video đã dựng, lồng tiếng, phụ đề và đăng bài. Câu hỏi đúng không phải “cái nào tốt hơn”, mà là “hôm nay bạn cần dựng một video hay chạy ba mươi video”.',
    en: 'CapCut and AutoReel do not compete in the same place. CapCut is an editor: you control every frame and every video is a manual job. AutoReel is a production line: you feed it a list of material and get a batch of videos already cut, voiced, subtitled and published. The right question is not “which is better”, but “today do you need to edit one video or run thirty”.',
  },
  body: {
    vi: [
      { h2: 'CapCut giỏi việc gì' },
      {
        p: 'CapCut giỏi chính xác ở chỗ AutoReel không cố làm: kiểm soát từng khung. Bạn kéo từng đoạn, chỉnh từng hiệu ứng, đổi font, đặt keyframe, và thấy kết quả ngay. Với một video cần trau chuốt — video ra mắt sản phẩm, video thương hiệu, video cần câu chuyện hình ảnh riêng — CapCut là lựa chọn đúng.',
      },
      {
        p: 'Nó cũng có lợi thế ở chi phí vào cửa: bản miễn phí đủ dùng cho nhiều người, và bản trả phí thường rẻ hơn một gói phần mềm tự động hoá. Nhược điểm không nằm ở tính năng mà ở mô hình làm việc: mỗi video là một lần dựng, và không có bước nào tự lấy danh sách sản phẩm rồi đăng bài thay bạn.',
      },
      {
        note: 'Giá và tính năng của CapCut thay đổi theo khu vực và theo thời điểm. Đừng dựa vào một con số trong bài viết cũ; kiểm tra trang giá hiện tại trước khi quyết định.',
      },

      { h2: 'AutoReel giỏi việc gì' },
      {
        p: 'AutoReel giỏi việc biến một danh sách thành một lô. Bạn đưa 10 sản phẩm hoặc 10 video có sẵn, chọn một template, và app tạo ra các video đã có lời, giọng đọc, phụ đề, đóng dấu. Với luồng tóm tắt phim, nó nghe lời thoại của cả bộ phim và viết lời bình; với luồng làm theo mẫu, nó đo nhịp của video mẫu rồi áp dụng cho nội dung mới.',
      },
      {
        p: 'Nó cũng làm bước cuối mà CapCut không làm: đăng lên Shopee Video và Facebook/Reels. Đây là lý do nhiều người dùng cả hai: AutoReel cho số lượng, CapCut cho video cần sửa tay.',
      },
      {
        p: 'Đổi lại, AutoReel không phải trình dựng. Bạn không kéo từng khung, không tự đặt keyframe, và không có toàn bộ hiệu ứng của một editor chuyên nghiệp. Nếu công việc của bạn là làm một video thật đẹp mỗi tuần, AutoReel là quá nhiều máy móc cho quá ít việc.',
      },

      { h2: 'So sánh theo công việc' },
      {
        ul: [
          'Một video cần chỉnh từng giây: CapCut. AutoReel sẽ nhanh hơn ở bản nháp nhưng chậm hơn ở phần tinh chỉnh.',
          '10–30 video từ danh sách sản phẩm: AutoReel. Làm tay từng video trong CapCut là 10–30 lần dựng, mỗi lần vẫn phải viết lời, thu giọng, thêm phụ đề.',
          'Video tóm tắt phim: AutoReel có luồng riêng. CapCut có thể dựng nếu bạn tự cắt và tự viết, nhưng đó là một dự án thủ công.',
          'Video cần hiệu ứng hình ảnh phức tạp: CapCut. AutoReel tập trung vào template và nhịp, không phải hiệu ứng.',
          'Đăng bài lên Shopee/Facebook: AutoReel. CapCut xuất file; bạn vẫn phải đăng.',
          'Làm trên điện thoại: CapCut. AutoReel chạy trên Windows/macOS.',
        ],
      },

      { h2: 'Chi phí, tính theo cách khác' },
      {
        p: 'So sánh giá gói không có nhiều ý nghĩa nếu chi phí thời gian khác nhau. Một video dựng tay trong CapCut mất 40–90 phút; một video trong lô AutoReel mất phần lớn thời gian ở bước chọn nguyên liệu và xem lại. Nếu bạn làm 20 video/tháng, chênh lệch 30 phút mỗi video là 10 giờ — thường lớn hơn chênh lệch giá gói.',
      },
      {
        p: 'Ngược lại, nếu bạn làm 4 video/tháng và mỗi video cần chỉnh tay, thời gian tiết kiệm của AutoReel không đủ bù giá và thời gian cài đặt. Đây là lý do bài [tạo video hàng loạt bằng AI](/blog/tao-video-hang-loat-bang-ai/) chọn theo số video mỗi tháng chứ không theo tính năng.',
      },

      { h2: 'Khi nào dùng cả hai' },
      {
        p: 'Cách nhiều người làm: AutoReel tạo bản nháp cho cả lô, sau đó đưa những video quan trọng nhất vào CapCut để sửa câu mở, thay cảnh, hoặc thêm hiệu ứng. Bạn giữ được tốc độ của dây chuyền và kiểm soát của editor ở đúng chỗ cần.',
      },
      {
        p: 'Một cách khác: dùng CapCut cho video thương hiệu và AutoReel cho video bán hàng. Hai loại video có mục tiêu khác nhau; không cần một tool làm cả hai thật giỏi.',
      },

      { h2: 'Chi phí chuyển đổi, thứ không có trong bảng giá' },
      {
        p: 'Học CapCut ở mức dựng được một video mất vài ngày; học AutoReel ở mức chạy được một lô mất khoảng một buổi. Nhưng chi phí thật không nằm ở thời gian học, mà ở chỗ hai tool không chia sẻ dự án. File dựng trong CapCut không mở được trong AutoReel, và template của AutoReel không sửa được trong CapCut.',
      },
      {
        ul: [
          'Dự án cũ vẫn nằm trong CapCut. Nếu bạn chuyển sang AutoReel, những video đang dở vẫn phải hoàn thành bằng CapCut.',
          'Template không di chuyển. Một template đóng dấu trong AutoReel là một cấu hình riêng; một template trong CapCut là một file riêng.',
          'Nếu có người làm cùng, cả nhóm phải học tool mới. Chi phí này thường bị bỏ qua khi tính giá gói.',
        ],
      },
      {
        note: 'Vì vậy, đừng chuyển tool giữa một chiến dịch. Chọn thời điểm có một lô mới, chạy song song hai tool trong một tuần, rồi mới bỏ cái cũ.',
      },

      { h2: 'Chọn cái nào trước' },
      {
        p: 'Nếu bạn chưa có quy trình và làm dưới 10 video/tháng, bắt đầu bằng CapCut. Học dựng tay giúp bạn biết mình muốn gì, và đó là thứ không tool nào dạy thay. Khi số video tăng đến mức mỗi video không còn đủ thời gian chỉnh, hãy xem [video demo AutoReel](/video-demo-thuc-te/) và [bảng giá](/bang-gia-phan-mem-tao-video/) để tính xem thời gian tiết kiệm có đáng không.',
      },
      {
        p: 'Đừng mua AutoReel để thay CapCut nếu công việc của bạn là dựng một video đẹp mỗi tuần. Đừng giữ CapCut làm dây chuyền nếu công việc của bạn là 30 video mỗi tháng. Hai câu đó là toàn bộ quyết định.',
      },
    ],
    en: [
      { h2: 'What CapCut is good at' },
      {
        p: 'CapCut is good at exactly what AutoReel does not try to do: control of every frame. You drag each clip, tune each effect, change fonts, set keyframes and see the result immediately. For a video that needs craft — a product launch, a brand film, a story with its own visual language — CapCut is the right choice.',
      },
      {
        p: 'It also wins on entry cost: the free tier is enough for many people, and the paid tier is often cheaper than an automation package. The weakness is not a feature but the working model: every video is a manual edit, and no step takes a product list and publishes for you.',
      },
      {
        note: 'CapCut’s pricing and features change by region and over time. Do not rely on a number from an old article; check the current pricing page before deciding.',
      },

      { h2: 'What AutoReel is good at' },
      {
        p: 'AutoReel is good at turning a list into a batch. You give it ten products or ten existing videos, choose a template, and it produces videos with narration, voice, subtitles and branding. In the movie-recap flow it listens to a whole film and writes the narration; in the reference flow it measures a sample video’s pace and applies it to new content.',
      },
      {
        p: 'It also does the last step CapCut does not: publishing to Shopee Video and Facebook/Reels. That is why many people use both — AutoReel for volume, CapCut for the videos that need a hand.',
      },
      {
        p: 'In exchange, AutoReel is not an editor. You do not drag individual frames, set keyframes, or get the full effects library of a professional editor. If your job is one beautiful video a week, AutoReel is too much machinery for too little work.',
      },

      { h2: 'Compared by the job' },
      {
        ul: [
          'One video that needs every second adjusted: CapCut. AutoReel is faster for a draft and slower for the fine cut.',
          'Ten to thirty videos from a product list: AutoReel. Doing each one by hand in CapCut is ten to thirty edits, each with its own script, voice and subtitles.',
          'Movie recaps: AutoReel has a dedicated flow. CapCut can do it if you cut and write yourself, but that is a manual project.',
          'Videos with complex visual effects: CapCut. AutoReel focuses on templates and pacing, not effects.',
          'Publishing to Shopee/Facebook: AutoReel. CapCut exports a file; you still publish it.',
          'Working on a phone: CapCut. AutoReel runs on Windows or macOS.',
        ],
      },

      { h2: 'Cost, counted differently' },
      {
        p: 'Comparing plan prices means little when the time costs differ. A hand edit in CapCut takes 40–90 minutes; a video in an AutoReel batch spends most of its time in choosing material and reviewing. At twenty videos a month, a thirty-minute difference per video is ten hours — usually more than the difference in plan price.',
      },
      {
        p: 'Conversely, at four videos a month, each needing a hand edit, AutoReel’s saved time does not cover its price and setup. That is why [bulk video with AI](/en/blog/bulk-video-with-ai/) chooses by videos per month rather than by features.',
      },

      { h2: 'When to use both' },
      {
        p: 'A common pattern: AutoReel drafts the whole batch, then the most important videos go into CapCut to fix the opening, swap a shot, or add an effect. You keep the speed of the line and the control of the editor where it matters.',
      },
      {
        p: 'Another: CapCut for brand videos and AutoReel for sales videos. The two have different goals; there is no need for one tool to be excellent at both.',
      },

      { h2: 'The switching cost, which is not on the pricing page' },
      {
        p: 'Learning CapCut well enough to edit one video takes a few days; learning AutoReel well enough to run a batch takes about an evening. But the real cost is not learning time — it is that the two tools do not share projects. A project in CapCut does not open in AutoReel, and an AutoReel template cannot be edited in CapCut.',
      },
      {
        ul: [
          'Old projects stay in CapCut. If you move to AutoReel, unfinished videos still have to be finished in CapCut.',
          'Templates do not move. A branding template in AutoReel is a configuration; a CapCut template is a separate file.',
          'If you work with other people, the whole team learns the new tool. That cost is usually missing from the plan price.',
        ],
      },
      {
        note: 'So do not switch tools in the middle of a campaign. Pick a moment with a new batch, run both tools side by side for a week, and only then drop the old one.',
      },

      { h2: 'Which one first' },
      {
        p: 'If you have no process yet and make fewer than ten videos a month, start with CapCut. Learning to edit by hand teaches you what you want, and no tool teaches that for you. When the number of videos grows past the time you have for editing, look at the [AutoReel demo](/en/video-demo/) and [pricing](/en/pricing/) to work out whether the saved time is worth it.',
      },
      {
        p: 'Do not buy AutoReel to replace CapCut if your job is one beautiful video a week. Do not keep CapCut as a production line if your job is thirty videos a month. Those two sentences are the whole decision.',
      },
    ],
  },
  faq: {
    vi: [
      ['AutoReel có thay thế được CapCut không?', 'Không. AutoReel tạo video hàng loạt và đăng bài; CapCut là trình dựng để kiểm soát từng khung. Nhiều người dùng cả hai: AutoReel cho lô, CapCut cho video cần sửa tay.'],
      ['CapCut có tự tạo video từ danh sách sản phẩm không?', 'Không theo cách AutoReel làm. CapCut có template và công cụ hỗ trợ, nhưng bạn vẫn phải dựng từng video và đăng thủ công.'],
      ['Cái nào rẻ hơn?', 'Tuỳ số video. Dưới 10 video/tháng, CapCut thường rẻ hơn vì bản miễn phí đủ dùng. Từ 10–30 video, thời gian tiết kiệm của AutoReel thường lớn hơn giá gói.'],
      ['AutoReel có chạy trên điện thoại không?', 'Không. AutoReel chạy trên Windows hoặc macOS. CapCut có bản điện thoại.'],
      ['Có thể dùng AutoReel để tạo bản nháp rồi sửa trong CapCut không?', 'Có. Xuất video từ AutoReel rồi nhập vào CapCut để sửa câu mở, thay cảnh hoặc thêm hiệu ứng là cách nhiều người dùng để giữ tốc độ và kiểm soát.'],
    ],
    en: [
      ['Can AutoReel replace CapCut?', 'No. AutoReel makes video in bulk and publishes; CapCut is an editor for frame-level control. Many people use both: AutoReel for the batch, CapCut for the videos that need a hand.'],
      ['Does CapCut make video from a product list automatically?', 'Not the way AutoReel does. CapCut has templates and helper tools, but you still edit each video and publish manually.'],
      ['Which is cheaper?', 'Depends on volume. Under ten videos a month, CapCut is usually cheaper because the free tier is enough. From ten to thirty, AutoReel’s saved time usually exceeds its plan price.'],
      ['Does AutoReel run on a phone?', 'No. AutoReel runs on Windows or macOS. CapCut has a phone app.'],
      ['Can I use AutoReel for a draft and edit in CapCut?', 'Yes. Export from AutoReel and import into CapCut to fix the opening, swap a shot or add effects — a common way to keep speed and control.'],
    ],
  },
};

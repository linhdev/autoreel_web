/**
 * The public page for “拍同款” — making a new video at a reference's pace.
 *
 * This is the limited web version on purpose: it explains the feature and
 * shows six starting templates, but it does not accept an arbitrary link or
 * render a video. That work runs in AutoReel on the user's own machine, where
 * the reference is measured and the new script is written. Keeping the web
 * page static means no anonymous compute and no queue for a feature that is
 * about someone else's video.
 */
export const REFERENCE_PAGE = {
  key: 'reference',
  accent: '#8b5cf6',
  path: { vi: '/lam-theo-mau/', en: '/en/make-video-like-reference/' },
  meta: {
    vi: {
      title: 'Làm video mới theo video mẫu | AutoReel',
      description:
        'AutoReel đo nhịp cắt, độ dài cảnh và tốc độ nói của video mẫu, rồi viết kịch bản mới theo đúng nhịp đó. Không dùng lại hình hay tiếng của video mẫu.',
    },
    en: {
      title: 'Make a video like a reference | AutoReel',
      description:
        'AutoReel measures a reference video’s cuts, shot length and speech rate, then writes a new script at that pace. It does not reuse the reference’s footage or audio.',
    },
  },
  copy: {
    vi: {
      badge: 'TÍNH NĂNG TRONG AUTOREEL',
      h1: 'Làm video mới theo video mẫu',
      lead:
        'Đưa một video mẫu. AutoReel đo nhịp cắt, độ dài mỗi cảnh và tốc độ nói, rồi viết kịch bản mới theo đúng nhịp đó bằng chủ đề của bạn.',
      points: [
        'Đo nhịp cắt và tốc độ nói',
        'Kịch bản mới, không dùng lại lời cũ',
        'Tư liệu mới do AutoReel chọn',
      ],
      intro:
        'Đây không phải reup và không phải tải lại video mẫu. AutoReel chỉ học cấu trúc: video mẫu có bao nhiêu cảnh, mỗi cảnh dài khoảng bao lâu, người nói nhanh hay chậm. Kịch bản mới được viết cho chủ đề bạn nhập, rồi render bằng tư liệu khác. Video mẫu không được đăng lại, không được cắt ghép và không được dùng làm hình nền.',
      steps: [
        ['Mở màn Review', 'Trong AutoReel, mở Review và chọn chế độ “Kịch bản mới theo nhịp video mẫu”.'],
        ['Dán link và nhập chủ đề', 'Dán link video công khai, nhập chủ đề hoặc sản phẩm bạn muốn làm video.'],
        ['Đo, viết, render', 'AutoReel đo nhịp, viết kịch bản mới, chọn tư liệu và render; file nằm trong Thư viện.'],
      ],
      templatesTitle: 'Sáu kiểu mẫu để bắt đầu',
      templatesLead:
        'Chọn một kiểu gần với video bạn muốn làm. Đây là khung nhịp để tham khảo, không phải video mẫu cụ thể của ai.',
      templates: [
        ['Mở đầu 3 giây', 'Một câu chặn người xem lại, rồi vào việc ngay.', 'Sản phẩm mới, thông báo, hook ngắn.'],
        ['Năm nhịp kể chuyện', 'Năm cảnh đều nhau: tình huống, vấn đề, thử, kết quả, chốt.', 'Review, câu chuyện, trải nghiệm.'],
        ['Trước và sau', 'Hai trạng thái đặt cạnh nhau, mỗi bên một cảnh.', 'Làm đẹp, dọn dẹp, sửa chữa.'],
        ['Danh sách 5 mẹo', 'Năm mục ngắn, mỗi mục một cảnh và một câu.', 'Mẹo, tổng hợp, hướng dẫn nhanh.'],
        ['Hướng dẫn 3 bước', 'Ba bước rõ ràng, mỗi bước một hành động nhìn thấy được.', 'Cách dùng, lắp đặt, nấu ăn.'],
        ['Trích dẫn và bình luận', 'Một câu đáng nhớ, rồi một cảnh giải thích vì sao.', 'Chia sẻ quan điểm, giáo dục, truyền cảm hứng.'],
      ],
      limitsTitle: 'Điều cần biết',
      limits: [
        'AutoReel không tải lại, không cắt và không đăng video mẫu.',
        'Chỉ dùng video mẫu công khai và có quyền xem; không dùng video riêng tư.',
        'Nhịp là ước lượng từ cảnh cắt và lời nói, không phải bản sao từng khung hình.',
        'Bản web này chỉ giới thiệu và gợi ý mẫu; render chạy trong AutoReel trên máy bạn.',
      ],
      faqTitle: 'Câu hỏi thường gặp',
      faq: [
        ['Có phải tải lại video mẫu không?', 'Không. AutoReel chỉ đọc nhịp và lời để viết kịch bản mới; hình và tiếng của video mẫu không được dùng lại.'],
        ['Nhịp được đo bằng gì?', 'Số lần cắt cảnh, độ dài trung bình mỗi cảnh và số từ mỗi giây trong lời nói. Ba con số đó được đưa vào yêu cầu viết kịch bản.'],
        ['Có cần video mẫu dài không?', 'Không. Video ngắn thường dễ đo hơn; video quá dài chỉ làm bước đọc lâu hơn.'],
        ['Bản web có render được không?', 'Không. Bản web giới thiệu và gợi ý mẫu; render cần AutoReel trên máy để dùng tư liệu, giọng đọc và hàng đợi của bạn.'],
      ],
      ctaTitle: 'Làm video theo mẫu trong AutoReel',
      ctaText: 'Mở AutoReel, vào Review, chọn chế độ theo nhịp video mẫu. Không cần tài khoản cloud; mọi thứ chạy trên máy bạn.',
      ctaLabel: 'Xem bảng giá & tải AutoReel',
      terms: 'Chỉ dùng video mẫu công khai · Không đăng lại video của người khác · Tôn trọng bản quyền',
    },
    en: {
      badge: 'A FEATURE INSIDE AUTOREEL',
      h1: 'Make a new video at a reference’s pace',
      lead:
        'Give AutoReel a reference video. It measures the cuts, the average shot length and the speech rate, then writes a new script for your topic at that pace.',
      points: [
        'Measures cuts and speech rate',
        'A new script, not the old words',
        'Fresh footage chosen by AutoReel',
      ],
      intro:
        'This is not a reup and not a download of the reference. AutoReel learns only the structure: how many shots the reference uses, how long each one lasts, and how fast the speaker talks. The new script is written for the topic you enter and rendered with different footage. The reference is not reposted, cut up or used as a background.',
      steps: [
        ['Open Review', 'In AutoReel, open Review and choose “A new script at the reference’s pace”.'],
        ['Paste a link and a topic', 'Paste a public video link and enter the topic or product you want the new video to be about.'],
        ['Measure, write, render', 'AutoReel measures, writes, picks footage and renders; the file lands in the Library.'],
      ],
      templatesTitle: 'Six starting templates',
      templatesLead:
        'Pick a shape close to the video you want to make. These are pacing references, not somebody’s specific video.',
      templates: [
        ['3-second opening', 'One line that stops the scroll, then straight into it.', 'New product, announcement, short hook.'],
        ['Five-beat story', 'Five even scenes: situation, problem, try, result, close.', 'Review, story, experience.'],
        ['Before and after', 'Two states side by side, one scene each.', 'Beauty, cleaning, repair.'],
        ['Five-tip list', 'Five short items, one scene and one sentence each.', 'Tips, roundup, quick guide.'],
        ['Three-step tutorial', 'Three clear steps, each with a visible action.', 'How to use, install, cook.'],
        ['Quote and comment', 'One memorable line, then a scene explaining why.', 'Opinion, education, inspiration.'],
      ],
      limitsTitle: 'What to know',
      limits: [
        'AutoReel does not download, cut or repost the reference.',
        'Use public reference videos you have the right to watch; not private videos.',
        'Pacing is estimated from cuts and speech, not a frame-for-frame copy.',
        'This web page only explains and suggests templates; rendering runs in AutoReel on your machine.',
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        ['Does it download the reference?', 'No. AutoReel reads the pacing and speech to write a new script; the reference’s footage and audio are not reused.'],
        ['How is pacing measured?', 'The number of scene cuts, the average shot length and the words per second. Those three numbers go into the script request.'],
        ['Does the reference need to be long?', 'No. Short videos are usually easier to measure; a very long one only makes the reading step slower.'],
        ['Can the web page render it?', 'No. The page explains the feature and offers templates; rendering needs AutoReel on your machine for footage, voice and queueing.'],
      ],
      ctaTitle: 'Make the video in AutoReel',
      ctaText: 'Open AutoReel, go to Review and choose the reference-pacing mode. No cloud account; everything runs on your machine.',
      ctaLabel: 'See pricing & get AutoReel',
      terms: 'Public reference videos only · Do not repost someone else’s video · Respect copyright',
    },
  },
};

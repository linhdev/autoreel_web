/**
 * Blog post — "Làm video mới theo video mẫu: học nhịp, không lấy footage".
 *
 * The article behind the /lam-theo-mau/ landing page. Its job is to make the
 * legal and craft distinction explicit: pacing and structure can be learned;
 * footage, music and the script cannot be copied.
 */
export default {
  slug: {
    vi: 'lam-video-theo-video-mau',
    en: 'make-video-from-reference',
  },
  title: {
    vi: 'Làm video mới theo video mẫu: học nhịp, không lấy footage',
    en: 'Make a video from a reference: learn the pace',
  },
  description: {
    vi: 'Cách phân tích nhịp, cấu trúc và mật độ lời của một video mẫu rồi dựng video mới cùng nhịp — mà không dùng lại footage, nhạc hay lời của họ.',
    en: 'Read the pacing, structure and narration density of a reference video, then make a new one at the same rhythm without reusing its footage or script.',
  },
  date: '2026-10-27',
  minutes: { vi: 7, en: 7 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: '“Làm video giống video mẫu” có hai nghĩa. Một là lấy footage, nhạc và lời của người khác — đó là sao chép, và nó không bền. Hai là học cách video đó được dựng: bao nhiêu cảnh một phút, câu mở đầu dài bao lâu, lời dày hay thưa — rồi làm một video mới bằng nguyên liệu của bạn. Bài này nói về nghĩa thứ hai.',
    en: '“Make a video like this reference” has two meanings. One is taking someone else’s footage, music and script — that is copying, and it does not last. The other is learning how the video was built: how many cuts per minute, how long the opening runs, whether the narration is dense or sparse — then making a new video with your own material. This article is about the second meaning.',
  },
  body: {
    vi: [
      { h2: 'Ba lớp có thể học từ một video mẫu' },
      {
        p: 'Lớp thứ nhất là cấu trúc: video mở bằng gì, chia thành mấy đoạn, mỗi đoạn trả lời câu hỏi nào, kết bằng gì. Cấu trúc là thứ dễ học nhất và cũng dễ bị bỏ qua nhất, vì người xem thường chỉ nhớ nội dung.',
      },
      {
        p: 'Lớp thứ hai là nhịp: số cảnh cắt trong một phút, độ dài trung bình của mỗi cảnh, chỗ nào chậm lại, chỗ nào dồn dập. Nhịp là thứ quyết định cảm giác “video này chuyên nghiệp” hay “video này lê thê”, và nó đo được bằng số.',
      },
      {
        p: 'Lớp thứ ba là mật độ lời: mỗi 10 giây có bao nhiêu từ, có khoảng lặng không, lời bắt đầu ở giây thứ mấy. Một video bán hàng thường dày hơn một video kể chuyện; một video review phim có thể thưa hơn vì hình tự kể.',
      },
      {
        note: 'Ba lớp này là thông tin, không phải tác phẩm. Học nhịp của một video không phải là lấy video đó; nó giống như học cách một bài hát vào điệp khúc ở giây thứ 40 mà không hát lại bài hát.',
      },

      { h2: 'Đo nhịp bằng mắt thường' },
      {
        p: 'Xem video mẫu ba lần, mỗi lần một việc. Lần một: chỉ ghi cấu trúc, dừng ở mỗi chuyển đoạn. Lần hai: bấm giờ và đếm số cảnh trong 60 giây đầu, rồi 60 giây giữa. Lần ba: tắt tiếng và xem hình có tự kể được không — nếu không, lời đang gánh quá nhiều.',
      },
      {
        ul: [
          'Số cảnh trong 60 giây: ví dụ 12 cảnh là nhịp trung bình, 30 cảnh là nhịp nhanh.',
          'Độ dài cảnh trung bình: 60 chia cho số cảnh. Một cảnh 2 giây và một cảnh 8 giây cho cảm giác rất khác.',
          'Câu mở đầu kết thúc ở giây thứ mấy, và cảnh đầu tiên có phải là cảnh đẹp nhất không.',
          'Mỗi 10 giây có bao nhiêu từ. Đếm ba đoạn rồi lấy trung bình; đừng đếm cả video.',
        ],
      },
      {
        p: 'Ghi lại các con số, không ghi cảm nhận. “Nhịp nhanh” là cảm nhận; “18 cảnh/phút, cảnh trung bình 3,3 giây” là thứ bạn có thể dựng lại và so sánh.',
      },

      { h2: 'Một bảng đo đủ dùng' },
      {
        p: 'Bạn không cần phần mềm để đo. Một tờ giấy với bốn cột là đủ: số cảnh trong 60 giây, độ dài cảnh trung bình, số từ mỗi 10 giây, và giây mà câu mở đầu kết thúc. Ghi cho ba video mẫu, rồi so.',
      },
      {
        ul: [
          'Khoảng tham khảo cho video kể chuyện: 6–12 cảnh/phút, cảnh trung bình 5–10 giây, lời thưa hơn hình.',
          'Khoảng tham khảo cho video bán hàng: 15–30 cảnh/phút, cảnh trung bình 2–4 giây, lời dày và câu ngắn.',
          'Khoảng tham khảo cho video review phim: 8–15 cảnh/phút, cảnh trung bình 4–7 giây, lời dẫn nhiều hơn hình.',
          'Đây là khoảng để so, không phải chuẩn để đạt. Mẫu của bạn có thể nằm ngoài khoảng và vẫn hiệu quả; điều quan trọng là bạn biết mình đang ở đâu.',
        ],
      },

      { h2: 'Cái không được lấy' },
      {
        p: 'Footage, nhạc nền, giọng đọc và lời bình nguyên văn là bốn thứ không được lấy. Kể cả khi video mẫu không có bản quyền rõ ràng, việc dùng lại footage của người khác mà không có phép vẫn là rủi ro bạn không kiểm soát được. Với nhạc, rủi ro còn cao hơn vì Content ID nhận ra rất nhanh.',
      },
      {
        p: 'Một video “cùng nhịp” dùng nguyên liệu của bạn sẽ không bị coi là bản sao. Một video “cùng nhịp” nhưng dùng lại footage và nhạc của mẫu là bản sao có thêm lời mới — và nền tảng xử lý hai trường hợp này khác nhau.',
      },

      { h2: 'AutoReel làm gì ở bước này' },
      {
        p: 'Màn [Làm theo mẫu](/lam-theo-mau/) nhận tối đa 5 video mẫu, đo nhịp và cấu trúc của chúng, rồi dùng cấu trúc đó cho nội dung mới của bạn. Nó không lấy footage, nhạc hay lời của mẫu; đó là lý do trang này tồn tại tách khỏi luồng tóm tắt phim.',
      },
      {
        p: 'Đầu ra là video mới theo cùng nhịp: cùng kiểu mở đầu, cùng mật độ cảnh, cùng độ dài tương đối. Bạn vẫn phải đưa nguyên liệu của mình — sản phẩm, hình, lời — và xem lại kết quả. Nếu muốn xem app chạy thật, [video demo](/video-demo-thuc-te/) quay một job đang chạy; [bảng giá](/bang-gia-phan-mem-tao-video/) nằm cùng chỗ.',
      },

      { h2: 'Quy trình năm bước' },
      {
        ol: [
          'Chọn 3–5 video mẫu cùng một kiểu và cùng một thị trường. Trộn một video review phim với một video bán mỹ phẩm sẽ cho một cấu trúc không thuộc về cái nào.',
          'Đo ba lớp: cấu trúc, nhịp, mật độ lời. Ghi số cho từng mẫu, rồi chọn mẫu có nhịp gần với thứ bạn muốn làm.',
          'Viết brief nội dung mới trước khi chạy: sản phẩm/chủ đề, người xem, câu mở đầu, câu kết. Brief này không lấy từ mẫu.',
          'Chạy một video trước, xem hết, so nhịp với mẫu. Nếu video mới nhanh hơn hoặc chậm hơn rõ rệt, sửa tham số trước khi chạy cả lô.',
          'Khi nhịp đã đúng, mới mở rộng lô 5–10 video. Đừng chạy 10 video khi chưa xem cái đầu tiên.',
        ],
      },
      {
        p: 'Nếu bạn chưa quen đo nhịp, hãy bắt đầu bằng một mẫu duy nhất và một video mới. Hai video đặt cạnh nhau là cách học nhanh nhất; mười video cùng lúc là cách tốn thời gian nhất.',
      },

      { h2: 'Khi nào không nên làm theo mẫu' },
      {
        p: 'Nếu mục tiêu của bạn là một giọng riêng, làm theo mẫu có thể kéo bạn về một khuôn. Nếu mẫu thuộc một thương hiệu rất mạnh, người xem có thể nhận ra cấu trúc và so sánh bạn với họ — thường không có lợi. Và nếu bạn chưa có nguyên liệu đủ tốt, nhịp đúng cũng không cứu được hình.',
      },
      {
        p: 'Dùng mẫu như một bản nhạc để tập, không phải bản nhạc để phát lại. Khi đã quen nhịp, hãy tự chọn nhịp cho sản phẩm của mình thay vì bám mãi vào một video của người khác.',
      },
    ],
    en: [
      { h2: 'Three layers you can learn from a reference' },
      {
        p: 'The first is structure: how the video opens, how many parts it has, what question each part answers, how it ends. Structure is the easiest layer to learn and the easiest to miss, because viewers remember the content, not the shape.',
      },
      {
        p: 'The second is pacing: how many cuts per minute, the average shot length, where it slows down and where it speeds up. Pacing decides whether a video feels professional or endless, and it can be measured in numbers.',
      },
      {
        p: 'The third is narration density: how many words per ten seconds, whether there is silence, at what second the voice starts. A sales video is usually denser than a story; a movie recap can be sparser because the picture carries more.',
      },
      {
        note: 'These three layers are information, not a work. Learning a video’s pacing is not taking the video; it is like learning that a song hits the chorus at 0:40 without singing the song again.',
      },

      { h2: 'Measuring the pace by hand' },
      {
        p: 'Watch the reference three times, once for each job. First: note only the structure, pausing at each section change. Second: time the first sixty seconds and count the cuts, then the middle sixty. Third: mute it and see whether the picture tells the story — if it does not, the narration is carrying too much.',
      },
      {
        ul: [
          'Cuts in sixty seconds: twelve is a medium pace, thirty is fast.',
          'Average shot length: sixty divided by the number of cuts. A two-second shot and an eight-second shot feel completely different.',
          'At what second the opening line ends, and whether the first shot is the best-looking one.',
          'Words per ten seconds. Count three sections and average them; do not count the whole video.',
        ],
      },
      {
        p: 'Write down the numbers, not the feelings. “Fast pace” is a feeling; “18 cuts per minute, average shot 3.3 seconds” is something you can rebuild and compare.',
      },

      { h2: 'A measurement sheet that is enough' },
      {
        p: 'You do not need software to measure. A sheet with four columns is enough: cuts in sixty seconds, average shot length, words per ten seconds, and the second the opening line ends. Fill it for three references, then compare.',
      },
      {
        ul: [
          'A rough range for storytelling video: 6–12 cuts per minute, average shot 5–10 seconds, narration sparser than the picture.',
          'A rough range for sales video: 15–30 cuts per minute, average shot 2–4 seconds, dense narration and short sentences.',
          'A rough range for movie recaps: 8–15 cuts per minute, average shot 4–7 seconds, narration carrying more than the picture.',
          'These are ranges to compare against, not standards to hit. Your reference may sit outside them and still work; what matters is knowing where you are.',
        ],
      },

      { h2: 'What must not be copied' },
      {
        p: 'Footage, music, voice and the script verbatim are the four things you cannot take. Even when the reference has no clear copyright notice, reusing someone else’s footage without permission is a risk you cannot control. With music the risk is higher, because Content ID recognises it quickly.',
      },
      {
        p: 'A video with the same pace but your own material is not a copy. A video with the same pace that reuses the reference’s footage and music is a copy with a new voice — and platforms treat those two cases differently.',
      },

      { h2: 'What AutoReel does here' },
      {
        p: 'The [Reference pacing](/en/make-video-like-reference/) screen accepts up to five reference videos, measures their pacing and structure, and applies that structure to your new content. It does not take the reference’s footage, music or script; that is why it exists as a separate screen from movie recap.',
      },
      {
        p: 'The output is a new video with the same rhythm: the same kind of opening, the same cut density, a similar relative length. You still supply your own material — product, images, lines — and review the result. To see the app run, the [demo](/en/video-demo/) is a real job; [pricing](/en/pricing/) is in the same place.',
      },

      { h2: 'A five-step process' },
      {
        ol: [
          'Choose three to five references of one kind and one market. Mixing a movie recap with a cosmetics ad gives you a structure that belongs to neither.',
          'Measure the three layers: structure, pace, narration density. Write the numbers for each, then pick the reference closest to what you want to make.',
          'Write the new content brief before running anything: product or subject, viewer, opening line, closing line. This brief does not come from the reference.',
          'Run one video, watch it, compare its pace with the reference. If the new video is clearly faster or slower, change the setting before running a batch.',
          'Only when the pace is right, expand to five or ten videos. Do not run ten before watching the first one.',
        ],
      },
      {
        p: 'If you are new to measuring pace, start with one reference and one new video. Two videos side by side is the fastest way to learn; ten at once is the slowest.',
      },

      { h2: 'When not to follow a reference' },
      {
        p: 'If your goal is a voice of your own, following a reference can pull you into a template. If the reference belongs to a very strong brand, viewers may recognise the structure and compare you with them — usually not in your favour. And if your material is not good enough yet, the right pace will not save the picture.',
      },
      {
        p: 'Use a reference like a piece of music to practise with, not one to play again. Once you know the pace, choose your own for your product instead of holding on to someone else’s video.',
      },
    ],
  },
  faq: {
    vi: [
      ['Làm video theo mẫu có vi phạm bản quyền không?', 'Không, nếu bạn chỉ học nhịp và cấu trúc rồi dùng nguyên liệu của mình. Có, nếu bạn dùng lại footage, nhạc, giọng hoặc lời của mẫu mà không có phép.'],
      ['Cần bao nhiêu video mẫu?', 'Ba đến năm video cùng kiểu là đủ để thấy nhịp chung. Một video duy nhất có thể là ngoại lệ; quá nhiều mẫu làm bạn không biết cái nào để theo.'],
      ['AutoReel có lấy footage của video mẫu không?', 'Không. Màn Làm theo mẫu đo nhịp và cấu trúc, rồi dùng nội dung mới của bạn. Footage, nhạc và lời của mẫu không được dùng lại.'],
      ['Bao lâu thì làm xong một video theo mẫu?', 'Phụ thuộc độ dài và máy. Một video ngắn thường nhanh hơn tóm tắt phim vì không phải nghe và viết lại cả bộ phim; nhưng vẫn cần thời gian xem lại.'],
      ['Có cần video mẫu cùng ngôn ngữ không?', 'Không bắt buộc, nhưng mẫu cùng ngôn ngữ và cùng thị trường thường cho nhịp phù hợp hơn. Nhịp của một video tiếng Anh có thể quá nhanh hoặc quá thưa so với người xem Việt.'],
    ],
    en: [
      ['Is following a reference a copyright problem?', 'No, if you learn the pace and structure and use your own material. Yes, if you reuse the reference’s footage, music, voice or script without permission.'],
      ['How many references do I need?', 'Three to five of the same kind is enough to see the shared pace. A single video may be an exception; too many references leave you unsure which to follow.'],
      ['Does AutoReel take the reference footage?', 'No. The Reference pacing screen measures pace and structure, then uses your new content. The reference’s footage, music and script are not reused.'],
      ['How long does one reference-style video take?', 'Depends on length and machine. A short video is usually faster than a movie recap because it does not listen to and rewrite a whole film, but it still needs review time.'],
      ['Does the reference need to be in the same language?', 'Not strictly, but a reference in the same language and market usually gives a more suitable pace. An English video’s rhythm may be too fast or too sparse for Vietnamese viewers.'],
    ],
  },
};

/**
 * Blog post — "Phụ đề và chữ trên video ngắn".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 */
export default {
  slug: {
    vi: 'phu-de-va-chu-tren-video-ngan',
    en: 'subtitles-and-on-screen-text',
  },
  title: {
    vi: 'Phụ đề và chữ trên video ngắn: đừng để app che mất chữ',
    en: 'Subtitles and on-screen text: where to place them safely',
  },
  description: {
    vi: 'Phụ đề và chữ trên video ngắn: vùng an toàn tránh nút và thanh của app, cỡ chữ, số chữ mỗi dòng, độ tương phản, và chữ nào chỉ làm rối mắt người xem.',
    en: 'Safe zones that keep text clear of the app buttons, the right font size, how many words per line, contrast, and the on-screen text you should delete.',
  },
  date: '2026-10-10',
  updated: '2026-10-28',
  minutes: { vi: 6, en: 6 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: 'Thói quen xem phổ biến là mở video với tiếng tắt sẵn, nên chữ trên màn hình phải nói được điều mà tiếng không nói. Bài này là các con số cụ thể: đặt chữ ở đâu, cỡ bao nhiêu, mỗi dòng mấy chữ, và bỏ chữ nào đi.',
    en: 'Plenty of people watch with the sound off, so the text on screen has to carry what the audio does not. This is the numbers: where to put the text, what size, how many words per line, and which text to delete.',
  },
  body: {
    vi: [
      { h2: 'Video phải hiểu được khi tắt tiếng' },
      {
        p: 'Người xem mở Shopee Video và Reels ở trên xe, ở chỗ làm, lúc con đang ngủ, hoặc chỉ đơn giản là không muốn mở loa nơi công cộng. Nhiều người trong số đó xem hết video mà không nghe một câu nào.\n\nNghĩa là tiếng không phải kênh chính để truyền thông tin — hình ảnh và chữ mới là. Nếu bỏ tiếng đi mà video không còn hiểu được, bạn đang bỏ mất một phần người xem ngay từ giây đầu.',
      },
      { h2: 'Chữ đặt sai vùng thì bị chính các nút của app che mất' },
      {
        ul: [
          'Chừa khoảng một phần mười chiều cao khung ở phía trên. Khu vực này thường có tên tài khoản, nút theo dõi và các nút của hệ thống.',
          'Chừa khoảng một phần năm chiều cao khung ở phía dưới. Đây là chỗ chú thích, tên sản phẩm gắn kèm và thanh tiến trình — chữ đẹp nhất đặt vào đó cũng bị nuốt mất.',
          'Chừa khoảng một phần mười chiều rộng ở mỗi bên. Phụ đề dài chạm sát mép sẽ bị cắt khi xem trên máy nhỏ.',
          'Đặt phụ đề ở khoảng bảy mươi phần trăm chiều cao khung, phía trên vùng chú thích. Đó là chỗ mắt người xem đã quen tìm chữ, và cũng là chỗ ít bị các nút của app chạm tới nhất.',
          'Nhớ rằng chú thích của bạn cũng nằm trong vùng dưới. Đừng để chữ trên màn hình trùng chỗ với dòng chú thích đang chạy.',
          'Xem lại video trong chính app sẽ đăng, ở chế độ xem thật, chứ không phải trong phần mềm dựng. Đây là bước nhanh nhất để phát hiện chữ bị che.',
        ],
      },
      { h2: 'Trên khung dọc 1080 x 1920, phụ đề nằm trong khoảng 56 đến 72 điểm ảnh' },
      {
        ul: [
          'Nhỏ hơn thì phải dí mắt, to hơn thì chữ chiếm mất hình.',
          'Mỗi dòng từ năm đến tám chữ, tối đa hai dòng một lần hiện. Ba dòng trở lên là quá nhiều để đọc kịp.',
          'Với phụ đề chạy theo từng cụm, cụm ba đến năm chữ đọc dễ hơn cả câu, và cũng khớp nhịp nói hơn.',
          'Chữ trên màn hình và phụ đề không nên cùng cỡ. Một loại để đọc, một loại để nhấn; chênh nhau khoảng một lần rưỡi là đủ phân biệt.',
          'Giữ mỗi lần hiện chữ ít nhất khoảng một giây. Chữ loé lên rồi mất trong nửa giây thì mắt không kịp đọc, mà người xem lại có cảm giác video bị giật.',
        ],
      },
      { h2: 'Đừng chốt màu chữ bằng cách nhìn một khung đứng yên' },
      {
        p: 'Một cách chắc ăn: chữ trắng, có viền tối hoặc đổ bóng, đọc được trên gần như mọi nền. Chữ vàng trên nền vàng, chữ mảnh trên nền sáng, chữ thu nhỏ trong suốt — đều là những kiểu đẹp trên khung hình mẫu và mất hút trên khung thật.\n\nCách kiểm tra: chọn khung sáng nhất trong video — chỗ nắng chiếu vào, chỗ có tường trắng — rồi xem chữ ở đó. Nếu chữ vẫn đọc được ở khung xấu nhất, cả video sẽ đọc được.\n\nMột chi tiết ít ai để ý: nền video tối thì chữ trắng rất ổn, nhưng khi video chạy, khung sáng sẽ tới. Đừng chốt màu chữ bằng cách nhìn một khung đứng yên.',
      },
      { h2: 'Lợi ích chính phải nói gọn trong sáu chữ' },
      {
        ul: [
          'Lợi ích chính, nói trong tối đa sáu chữ: "không còn ướt sàn", "gấp lại vừa ba lô".',
          'Con số quan trọng nếu có: giá, kích thước, số lượng, thời gian bảo hành — nhưng phải đúng với trang sản phẩm.',
          'Tên sản phẩm: một lần, đặt gần đầu video hoặc gần phần kết, không lặp lại liên tục.',
          'Lời mời cuối: một câu nói rõ cần làm gì, hiện ở hai giây cuối và giữ đủ lâu để đọc.',
        ],
      },
      { h2: 'Bốn thứ chữ chiếm chỗ mà không nói gì' },
      {
        ul: [
          'Phụ đề lặp lại nguyên văn một dòng chữ lớn đang có trên màn hình. Hai lớp chữ giống nhau chỉ làm mắt mỏi.',
          'Câu chào, tên kênh, lời cảm ơn. Người xem không cần biết, và chúng chiếm chỗ của thông tin thật.',
          'Hashtag và tên tài khoản nằm trên hình. Chúng thuộc về phần chú thích.',
          'Cả một đoạn văn dài hiện trong một lần. Nếu bạn phải dừng video lại để đọc, chữ đó đang làm sai việc của nó.',
        ],
      },
      {
        note: 'Kiểm tra cuối cùng luôn là: mở video trong chính app sẽ đăng, xem ở chế độ thật, tắt tiếng. Nếu vẫn hiểu được nội dung khi đó thì video đã sẵn sàng. Đừng kiểm tra trong phần mềm dựng — phần mềm dựng không có các nút của app, mà đó lại đúng là thứ che chữ của bạn.',
      },
      {
        p: 'Nếu video nguồn đã có phụ đề, bạn có thể tải track đó về làm bản nháp: [phụ đề YouTube](/tai-phu-de-youtube/) hoặc [phụ đề Bilibili](/tai-phu-de-bilibili/). Còn nếu cần tải chính video dọc để dựng lại, công cụ nhận [TikTok](/tai-video-tiktok/), [Douyin](/tai-video-douyin/), [YouTube](/tai-video-youtube/) và [Bilibili](/tai-video-bilibili/).',
      },
      { h2: 'Cách này không hợp nếu video không có lời nói' },
      {
        p: 'Video chỉ có nhạc và hình thì chữ phải làm toàn bộ phần kể, và bạn cần nhiều chữ hơn hẳn, không phải ít đi.\n\nNó cũng không hợp nếu bạn đang làm video dài hoặc video cho website, nơi người xem chủ động bật tiếng và ngồi trước màn hình lớn. Các con số về vùng an toàn ở trên là để tránh nút của app trên điện thoại; ở màn hình lớn, ràng buộc đó không còn.',
      },
    ],
    en: [
      { h2: 'The video has to work with the sound off' },
      {
        p: 'People open Shopee Video and Reels on the bus, at work, while a child is asleep, or simply because they do not want to play sound in public. Many of them watch the whole video without hearing a word.\n\nSo audio is not the main channel carrying the message — picture and text are. If the video stops making sense once you mute it, you are losing part of the audience from the first second.',
      },
      { h2: 'Text in the wrong zone gets covered by the app’s own buttons' },
      {
        ul: [
          'Leave about a tenth of the frame height clear at the top. That strip holds the account name, the follow button and system controls.',
          'Leave about a fifth of the frame height clear at the bottom. That is where the caption, the attached product name and the progress bar live — the prettiest text in the world gets swallowed there.',
          'Leave about a tenth of the width clear on each side. Long subtitles that touch the edge get cut on a small phone.',
          'Put subtitles at roughly seventy percent of the frame height, above the caption area. That is where viewers already look for text, and the spot the app buttons reach least often.',
          'Remember that your caption sits in the lower zone too. Do not put on-screen text where the caption runs.',
          'Watch the video back inside the app you are posting to, in the real player, not in your editing software. It is the fastest way to catch text that is covered.',
        ],
      },
      { h2: 'On a 1080 x 1920 vertical frame, subtitles sit between 56 and 72 pixels' },
      {
        ul: [
          'Smaller than that and people squint; larger and the text eats the picture.',
          'Five to eight words per line, two lines at most on screen at once. Three lines is more than anyone can read in time.',
          'With word-by-word captions, a three-to-five word cluster reads more easily than a whole sentence, and it matches the rhythm of speech better.',
          'On-screen text and subtitles should not be the same size. One is for reading, one is for emphasis; about one and a half times apart is enough to tell them apart.',
          'Keep each piece of text on screen for at least about a second. Text that flashes up and vanishes in half a second cannot be read, and it makes the video feel like it is stuttering.',
        ],
      },
      { h2: 'Do not settle the text colour by looking at a still frame' },
      {
        p: 'A safe default: white text with a dark outline or a shadow reads on almost any background. Yellow on yellow, thin letters on a bright background, a small transparent caption — all of those look good on the reference frame and disappear on the real one.\n\nHow to check: find the brightest frame in the video — sunlight through a window, a white wall — and look at the text there. If it reads on the worst frame, it reads for the whole video.\n\nOne detail most people miss: white text is fine on a dark background, but the bright frame is coming. Do not choose the colour from a frame that is standing still.',
      },
      { h2: 'The main benefit has to fit in six words' },
      {
        ul: [
          'The main benefit, in six words at most: "no more wet floor", "folds into a backpack".',
          'An important number if you have one: price, size, quantity, warranty length — but it has to match the product page.',
          'The product name: once, near the start or near the end, not repeated over and over.',
          'The closing ask: one sentence saying what to do, on screen for the last two seconds and held long enough to read.',
        ],
      },
      { h2: 'Four kinds of text that take up space and say nothing' },
      {
        ul: [
          'Subtitles that repeat, word for word, a big line already on screen. Two copies of the same text just tire the eye.',
          'A greeting, the channel name, a thank-you. The viewer does not need it, and it takes the place of something real.',
          'Hashtags and the account name drawn onto the image. Those belong in the caption.',
          'A whole paragraph shown at once. If you have to pause the video to read it, that text is doing the wrong job.',
        ],
      },
      {
        note: 'The last check is always the same: open the video inside the app you are posting to, in the real player, muted. If it still makes sense, it is ready. Do not check in your editing software — the editing software has none of the app buttons, and those buttons are exactly what covers your text.',
      },
      {
        p: 'If the source video already has captions, you can download that track as a first draft: [YouTube subtitles](/en/download-youtube-subtitles/) or [Bilibili subtitles](/en/download-bilibili-subtitles/). If you need the vertical video itself to rebuild, the tool accepts [TikTok](/en/download-tiktok/), [Douyin](/en/download-douyin/), [YouTube](/en/download-youtube/) and [Bilibili](/en/download-bilibili/).',
      },
      { h2: 'This does not apply when the video has no narration' },
      {
        p: 'If the video is only music and footage, the text has to carry the entire story, and you need more of it, not less.\n\nIt also does not apply to long videos or videos on a website, where the viewer turns the sound on deliberately and sits in front of a big screen. The safe-zone numbers above exist to clear the app buttons on a phone; on a big screen that constraint is gone.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Phụ đề nên đặt ở đâu cho an toàn?',
        a: 'Khoảng bảy mươi phần trăm chiều cao khung, phía trên vùng chú thích và thanh tiến trình. Đừng đặt sát mép dưới, vì đó là chỗ app dành cho tên sản phẩm, chú thích và các nút điều khiển.',
      },
      {
        q: 'Chữ trên màn hình khác gì phụ đề?',
        a: 'Phụ đề chạy theo lời nói, dùng để người xem theo kịp. Chữ trên màn hình đứng yên hoặc hiện theo nhịp, dùng để nhấn một ý. Hai việc khác nhau nên cỡ chữ, vị trí và thời lượng cũng khác nhau; đừng để chúng giống nhau.',
      },
      {
        q: 'Có nên để phụ đề chạy suốt video không?',
        a: 'Với video bán hàng, nên. Người xem có thể bật tiếng ở bất kỳ giây nào, và phụ đề giúp họ vào giữa video mà vẫn hiểu. Điều nên tránh là phụ đề sai chữ hoặc lệch nhịp, vì người xem nhận ra ngay và mất tin.',
      },
      {
        q: 'AutoReel có làm phụ đề và chữ trên màn hình không?',
        a: 'Có. AutoReel thêm phụ đề, logo, chữ trên và chữ dưới theo template bạn chọn, rồi dựng theo khung dọc để đăng lên Shopee Video hoặc Facebook/Reels. Bạn vẫn nên mở video trong app trước khi đăng để kiểm tra chữ có bị che không. Cần hỏi thêm thì nhắn Zalo hoặc WhatsApp 0326012999.',
      },
    ],
    en: [
      {
        q: 'Where is the safe place for subtitles?',
        a: 'About seventy percent of the frame height, above the caption area and the progress bar. Do not push them to the bottom edge — that strip belongs to the product name, the caption and the player controls.',
      },
      {
        q: 'How is on-screen text different from subtitles?',
        a: 'Subtitles follow the speech so the viewer can keep up. On-screen text sits still or appears on a beat, to push one idea. Different jobs, so different size, position and duration; do not let them look the same.',
      },
      {
        q: 'Should subtitles run for the whole video?',
        a: 'For a sales video, yes. Someone can turn the sound on at any second, and subtitles let them join midway and still follow. What to avoid is subtitles with wrong words or bad timing — people notice at once and stop trusting the video.',
      },
      {
        q: 'Does AutoReel add subtitles and on-screen text?',
        a: 'Yes. AutoReel adds subtitles, a logo, and text at the top and bottom using the template you choose, then renders vertical video for Shopee Video or Facebook/Reels. You should still open the video in the app before posting to check nothing is covered. If you want to ask something, message Zalo or WhatsApp on 0326012999.',
      },
    ],
  },
};

/**
 * Blog post — "Tạo video affiliate Shopee hàng loạt".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 */
export default {
  slug: {
    vi: 'tao-video-affiliate-shopee-hang-loat',
    en: 'shopee-affiliate-video-at-scale',
  },
  title: {
    vi: 'Tạo video affiliate Shopee hàng loạt từ link sản phẩm',
    en: 'Making Shopee affiliate videos in bulk from product links',
  },
  description: {
    vi: 'Từ danh sách link sản phẩm tới cả loạt video: chuẩn bị gì trước, ba tiêu chí chọn sản phẩm, cấu trúc ba phần của video bán được, và lỗi lặp đủ cả loạt.',
    en: 'From a list of product links to a finished batch: what to prepare first, how to pick products, the three parts of a video that sells, and the mistakes that repeat.',
  },
  date: '2026-10-10',
  minutes: { vi: 5, en: 5 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: 'Một video affiliate làm kỹ mất gần cả buổi tối; mười cái thì không ai có đủ mười buổi tối. Nên thứ bạn cần không phải là tỉ mỉ hơn, mà là một cái khuôn đủ tốt để cả loạt đều ở mức khá — và đây là cách dựng cái khuôn đó từ một danh sách link.',
    en: 'One affiliate video, done carefully, eats most of an evening. Ten of them do not get ten evenings out of anybody. What you need is not more care per video — it is a mould good enough that the whole batch comes out decent, and this is how you build that mould from a list of links.',
  },
  body: {
    vi: [
      { h2: 'Cả loạt đi qua cùng một dây chuyền, nên sửa một chỗ là sửa cho cả loạt' },
      {
        ol: [
          'Dán danh sách link sản phẩm, mỗi dòng một link. Dán một lần cho cả loạt, đừng làm từng cái một.',
          'Phần mềm đọc thông tin từ link: tên, giá, điểm nổi bật, hình ảnh. Bạn kiểm lại xem có đúng món mình định bán không.',
          'Kịch bản được viết riêng cho từng sản phẩm: mở đầu, thân bài, lời mời mua. Bạn đọc lại và sửa những câu nghe không giống cách bạn nói.',
          'Video được dựng theo mẫu bạn chọn: khung dọc, logo, chữ trên và chữ dưới, phụ đề, giọng đọc tiếng Việt.',
          'Bạn xem lại từng video, chỉnh chỗ chưa ổn, rồi đăng lên Shopee Video hoặc tải về để đăng tay.',
        ],
      },
      {
        p: 'Làm một video lẻ và làm mười video một lúc là hai công việc khác nhau. Làm lẻ thì bạn có thời gian chăm từng câu chữ và nghe lại từng đoạn giọng đọc. Làm loạt thì thứ bạn cần không phải là tỉ mỉ hơn, mà là một cái khuôn đủ tốt để cả mười video đều ở mức khá — rồi bạn chỉ sửa những chỗ thật sự đáng sửa.\n\nĐổi lại, bạn phải kiểm ở tầng khuôn: mẫu dựng, giọng đọc, cách gắn sản phẩm, cách viết chú thích. Một lỗi nhỏ trong khuôn sẽ lặp lại đủ mười lần.\n\nChọn sản phẩm cũng vậy, đừng chọn theo cảm giác. Ba tiêu chí thực dụng: có ảnh hoặc video rõ để dựng hình; có một điểm nhấn nói được trong ba giây đầu; và giá đủ dễ để người xem quyết định mà không phải nghĩ lâu. Món càng ít điểm nhấn thì các video càng dễ giống nhau, và đó là lúc cả loạt bắt đầu tự làm hại mình.',
      },
      { h2: 'Chuẩn bị ở tầng cả loạt, không phải ở tầng từng video' },
      {
        ul: [
          'Danh sách sản phẩm đã chọn sẵn, chia theo nhóm hàng. Nhóm nào không lên thì đổi cả nhóm, nhanh hơn là sửa từng video.',
          'Logo và màu thương hiệu, đặt đúng tỉ lệ khung dọc. Đặt sai thì chúng bị cắt mất khi xem trên điện thoại, và bạn chỉ phát hiện ra sau khi đã dựng xong cả loạt.',
          'Giọng đọc và tốc độ đọc bạn nghe được. Dựng thử một video, nghe hết từ đầu tới cuối, rồi mới chạy cả loạt.',
          'Khung giờ bạn sẽ đăng và số video tối đa mỗi ngày. Chốt trước, để không dồn hết vào một buổi.',
          'Một chỗ lưu video đã dựng, đặt tên theo sản phẩm, để biết cái nào đã đăng và cái nào chưa.',
        ],
      },
      { h2: 'Video bán được có ba phần, và chỉ ba giây đầu là khó' },
      {
        ul: [
          'Ba giây đầu: nói thẳng cái người xem nhận được, hoặc cái đang gây khó chịu cho họ. Không chào hỏi, không giới thiệu bản thân.',
          'Thân bài: một vấn đề, một lý do sản phẩm giải được vấn đề đó, và một chi tiết cụ thể như chất liệu, kích thước hay cách dùng. Càng cụ thể thì càng ít giống quảng cáo chung.',
          'Lời mời cuối: nói rõ người xem bấm vào đâu. Một câu, đặt ở cuối video, và nhắc lại trong phần chú thích.',
        ],
      },
      { h2: 'Ba lỗi trong khuôn sẽ lặp lại đúng bằng số video bạn làm' },
      {
        note: 'Ba lỗi hay gặp nhất: video quá giống nhau vì dùng chung một kịch bản, chú thích trùng nhau, và gắn sai sản phẩm. Lỗi thứ ba tốn tiền thật — người xem mua đúng thứ bạn nói, nhưng bạn không được ghi nhận. Và đừng đăng dồn: Shopee có khung phạt cho việc đăng quá nhiều video trong thời gian ngắn, mức nặng có thể khoá tài khoản tới 30 ngày. Giãn cách và đa dạng nội dung rẻ hơn nhiều so với mất tài khoản.',
      },
    ],
    en: [
      { h2: 'The whole batch runs through one line, so one fix covers all of it' },
      {
        ol: [
          'Paste your list of product links, one per line. Paste the whole batch at once instead of doing them one by one.',
          'The product details are read from the link: name, price, selling points, images. You check that each one is the product you meant to sell.',
          'A script is written for each product: opening, middle, closing ask. You read it back and fix anything that does not sound like the way you talk.',
          'Each video is built from the template you picked: vertical frame, logo, text top and bottom, subtitles, Vietnamese voice.',
          'You watch each video, fix what is off, then post it to Shopee Video or download it and post by hand.',
        ],
      },
      {
        p: 'One video and ten videos at once are two different jobs. On a single video you have time to fuss over every line and listen to the voice track twice. On a batch, what you need is not more care per video — it is a mould good enough that all ten come out at least decent, and then you only fix the ones that truly need it.\n\nThe trade is that you now have to check at the mould level: template, voice, how products are tagged, how captions are written. A small mistake in the mould repeats ten times.\n\nProduct choice works the same way. Do not pick on feeling. Three practical tests: there are clear photos or video to build from; there is one selling point you can say in the first three seconds; and the price is easy enough for a viewer to decide on without thinking hard. The fewer selling points a product has, the more your videos start to look alike — and that is when the batch starts working against itself.',
      },
      { h2: 'Prepare at the batch level, not at the video level' },
      {
        ul: [
          'Your product list, already chosen, grouped by category. If a category does not perform, you swap the whole category — faster than fixing it video by video.',
          'Logo and brand colours, sized for a vertical frame. Get this wrong and they are cropped on a phone, and you only find out after the whole batch is built.',
          'A voice and a reading speed you can stand. Build one video, listen to all of it, and only then run the batch.',
          'The hours you will post in, and the most videos you will allow yourself per day. Decide now, so nothing lands in one afternoon.',
          'A folder for finished videos, named after the product, so you can tell what has been posted and what has not.',
        ],
      },
      { h2: 'A video that sells has three parts, and only the first three seconds are hard' },
      {
        ul: [
          'First three seconds: say plainly what the viewer gets, or what is annoying them right now. No greeting, no introducing yourself.',
          'The middle: one problem, one reason this product solves it, and one concrete detail — material, size, how it is used. The more specific you are, the less it reads like generic advertising.',
          'The closing ask: say exactly where to tap. One sentence, at the end of the video, repeated in the caption.',
        ],
      },
      { h2: 'A mistake in the mould repeats once per video' },
      {
        note: 'Three mistakes break a batch: videos that look identical because they share one script, captions that repeat, and the wrong product tagged. The third costs real money — the viewer buys exactly what you described, and you get no credit for it. And do not post in bursts: Shopee penalises posting too many videos in a short window, and at the severe end that can lock the account for up to 30 days. Spacing them out and varying the content is far cheaper than losing an account.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Một loạt bao nhiêu video là hợp lý?',
        a: 'Không có con số đúng cho tất cả mọi người. Thứ quyết định là bạn có đủ thời gian xem qua từng video trước khi đăng, và có đủ nội dung khác nhau để trong một ngày không có mấy video na ná nhau. Máy dựng nhanh, nhưng phần duyệt vẫn là của bạn.',
      },
      {
        q: 'Không có sẵn video sản phẩm thì lấy hình ở đâu?',
        a: 'Dùng ảnh và video trong gian hàng của chính bạn, hoặc nguồn bạn có quyền dùng. Đừng lấy video của người bán khác rồi cắt lại: vừa rủi ro bản quyền, vừa dễ trùng nội dung với chính đối thủ của bạn.',
      },
      {
        q: 'Có cần điện thoại Android để đăng lên Shopee Video không?',
        a: 'Có, nếu bạn muốn đăng tự động: Shopee Video đăng từ điện thoại, nên cần một máy Android đã kết nối với máy tính chạy AutoReel. Nếu chưa muốn đăng tự động, bạn vẫn dựng được cả loạt rồi tải về và đăng tay.',
      },
      {
        q: 'AutoReel thuê theo tháng hay mua đứt, và giá bao nhiêu?',
        a: 'Có cả hai. Thuê theo tháng từ 159.000đ — Edit 159.000đ, Creator 199.000đ, Full 259.000đ một tháng — hoặc mua đứt 1.490.000đ (Personal) hay 3.990.000đ (Team) để dùng vĩnh viễn, không gia hạn. Một số dịch vụ bên thứ ba như giọng đọc có thể tính phí theo mức bạn dùng. Cần hỏi thêm thì nhắn Zalo hoặc WhatsApp 0326012999.',
      },
    ],
    en: [
      {
        q: 'How many videos should a batch be?',
        a: 'There is no right number for everyone. What decides it is whether you have time to look at every video before it goes out, and whether you have enough different content that one day does not hold several near-identical videos. The machine builds fast; the reviewing is still yours.',
      },
      {
        q: 'Where do I get footage if I have no product video?',
        a: 'Use the photos and video from your own listing, or a source you have the right to use. Do not take another seller’s video and re-cut it: that is a copyright risk, and a good way to end up with the same content as your own competitor.',
      },
      {
        q: 'Do I need an Android phone to post to Shopee Video?',
        a: 'Yes, for automatic posting: Shopee Video posts from a phone, so you need an Android device paired with the computer running AutoReel. If you would rather not automate posting yet, you can still build the whole batch and download the videos to post by hand.',
      },
      {
        q: 'Is AutoReel a monthly plan or a one-off purchase?',
        a: 'Both. From $6.12 a month — Edit, Creator at $7.65, Full at $9.96 — or $57.31 once and keep it (Personal), or $153.46 for Team. Some third-party services, such as the voices, may charge by how much you use them. For anything else, message Zalo or WhatsApp on 0326012999.',
      },
    ],
  },
};

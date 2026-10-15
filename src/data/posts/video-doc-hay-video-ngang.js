/**
 * Blog post — "Video dọc hay video ngang".
 *
 * Aspect ratios are named as the standard shapes they are (9:16, 1:1, 4:5,
 * 16:9); no platform-spec table is invented, and the advice is written as the
 * safe-area method a person can apply without knowing any of that by heart.
 */
export default {
  slug: {
    vi: 'video-doc-hay-video-ngang',
    en: 'vertical-or-horizontal',
  },
  title: {
    vi: 'Video dọc hay video ngang? Chọn tỉ lệ khung cho từng nơi',
    en: 'Vertical or horizontal? Pick the frame for where it goes',
  },
  description: {
    vi: 'Tỉ lệ khung cho từng nơi đăng: vì sao 9:16 là mặc định, chữ mất thế nào khi đổi khung, và cách dựng một lần dùng được cho nhiều khung.',
    en: 'Which frame for each place you post: why 9:16 is the default, how text gets cut when the frame changes, and how to shoot once for every crop.',
  },
  date: '2026-10-10',
  minutes: { vi: 7, en: 7 },
  tag: {
    vi: 'Hướng dẫn',
    en: 'Guide',
  },
  lead: {
    vi: 'Video dọc hay video ngang không phải câu hỏi về sở thích, mà là câu hỏi về nơi bạn đăng. Chọn nơi trước, tỉ lệ khung theo sau. Chọn ngược lại là cách chắc chắn nhất để chữ trên video bị cắt mất.',
    en: 'Vertical or horizontal is not a question of taste, it is a question of where you post. Choose the place first and let the frame follow. Doing it the other way round is the surest way to lose the text on your video.',
  },
  body: {
    vi: [
    {
      p: 'Với video bán hàng, gần như mọi trường hợp đều bắt đầu từ một câu trả lời: dọc 9:16. Đó là khung của video ngắn trên điện thoại, và cũng là khung mặc định mà Shopee Video và Facebook Reels chạy. Nhưng vẫn có chỗ khung ngang đúng hơn, nên hãy xét theo từng nơi.\n\nĐiều quan trọng hơn tỉ lệ khung là vùng an toàn. Hiểu vùng này rồi thì việc đổi khung không còn làm mất chữ, và đó là phần lớn bài này.',
    },
    {
      h2: 'Mỗi nơi đăng cần một tỉ lệ khung khác nhau, và mặc định vẫn là 9:16',
    },
    {
      ul: [
        'Shopee Video: khung dọc 9:16. Người xem cầm điện thoại dọc, sản phẩm nằm giữa màn hình, nên video dọc chiếm được gần trọn chỗ.',
        'Facebook Reels: cũng là khung dọc 9:16. Giao diện Reels che phần trên và phần dưới bằng chữ và các nút, nên chữ đặt sát mép rất dễ bị khuất.',
        'Bài đăng thường trên Facebook: video dọc vẫn chạy, nhưng khung vuông 1:1 hoặc 4:5 chiếm được nhiều chỗ hơn trong bảng tin, và đỡ bị cắt hơn.',
        'Quảng cáo: tuỳ vị trí bạn đặt. Chạy ở chỗ dạng dọc thì cần 9:16, chạy trong bảng tin thì 1:1 hoặc 4:5, và một số vị trí vẫn nhận khung ngang 16:9.',
      ],
    },
    {
      h2: '9:16 là mặc định vì hình học, vì thói quen, và vì hàng của bạn cao hơn rộng',
    },
    {
      p: 'Lý do thứ nhất là hình học: điện thoại cầm dọc, nên khung dọc dùng hết chiều cao màn hình, còn khung ngang thì hoặc bị viền đen hai bên hoặc bị cắt mất hai đầu. Lý do thứ hai là thói quen: người xem đã được dạy rằng video ngắn là video dọc, và một video ngang xuất hiện ở chỗ đó trông như nội dung được mang từ nơi khác tới.\n\nLý do thứ ba hợp với người bán hàng nhất. Khung dọc cho chủ thể chiếm nhiều chỗ hơn khi bạn quay cận: người đang cầm sản phẩm, chai lọ, hộp, quần áo treo trên móc. Những thứ này cao hơn rộng, nên khung dọc vừa khít với chúng, còn khung ngang để thừa hai bên.',
    },
    {
      h2: 'Lỗi hay gặp nhất không phải chọn sai tỉ lệ, mà là đặt chữ ở rìa khung',
    },
    {
      p: 'Khi chuyển từ khung dọc sang khung vuông hoặc ngang, cách thông thường là cắt hai bên cho vừa. Nghĩa là mọi thứ nằm sát mép trái và mép phải sẽ mất trước tiên. Khi chuyển từ ngang sang dọc, phần mềm hoặc thêm viền đen trên dưới, hoặc cắt mất hai bên, và cách thứ hai cũng lấy đi đúng phần chữ bạn đặt ở rìa.\n\nĐó là lý do lỗi hay gặp nhất không phải là chọn sai tỉ lệ, mà là đặt chữ và logo ở rìa khung.',
    },
    {
      ul: [
        'Chữ chạy hết chiều ngang khung dọc: khi cắt sang khung vuông hoặc ngang, hai đầu dòng chữ bị mất chữ, không phải tự xuống dòng.',
        'Logo đặt ở góc trên: trong giao diện dọc, góc trên thường bị thanh tiêu đề che.',
        'Phụ đề đặt sát đáy: phần đáy bị chú thích, tên sản phẩm và thanh tiến trình che mất.',
        'Chủ thể nằm lệch một bên: khi cắt sang khung hẹp hơn, chủ thể bị đẩy ra khỏi khung hoặc mất một nửa.',
      ],
    },
    {
      h2: 'Chốt nơi đăng chính trước, rồi quay rộng hơn khung một chút',
    },
    {
      ol: [
        'Chốt nơi đăng chính trước, thường là Shopee Video hoặc Reels, rồi dựng bản gốc theo khung dọc 9:16.',
        'Khi quay, quay rộng hơn khung bạn cần một chút, để lúc cần cắt vuông hay ngang vẫn còn chỗ mà lấy.',
        'Giữ mọi thứ quan trọng trong vùng giữa khung: chữ, logo, mặt người, sản phẩm. Chừa lề trên, dưới và hai bên.',
        'Cỡ chữ to hơn bạn nghĩ là cần, rồi kiểm bằng cách xem trên điện thoại thật chứ không phải trên màn hình máy tính.',
        'Đặt logo trong vùng giữa, đừng đặt sát góc. Logo là thứ bị cắt đầu tiên và cũng là thứ ít ai để ý đã mất.',
        'Xuất bản dọc trước. Nếu cần bản vuông hoặc ngang, chỉnh lại chữ và logo cho khung đó rồi xuất riêng, đừng để hệ thống tự cắt.',
      ],
    },
    {
      note: 'Đừng lấy một bản dọc rồi cắt ra bản vuông cho xong. Cách đó luôn làm mất phần rìa, mà rìa lại đúng là chỗ chữ và logo hay nằm. Nếu bạn cần hai bản cho hai nơi, hãy dựng bản thứ hai cho đúng khung của nó, với chữ và logo đặt lại theo khung đó.',
    },
    {
      h2: 'Khung ngang đúng khi nội dung vốn đã nằm ngang',
    },
    {
      p: 'Khung ngang đúng khi nội dung vốn dĩ nằm ngang: một bàn đầy món, cảnh bếp, hai người ngồi nói chuyện, một quy trình có nhiều bước trải rộng. Nó cũng đúng khi nguồn video bạn có là ngang và không quay lại được, và khi bạn đăng chủ yếu dưới dạng bài đăng thường cho người xem trên máy tính.\n\nNhưng nếu nơi đăng chính của bạn là Shopee Video hoặc Facebook Reels, một video ngang sẽ luôn ở thế yếu hơn: nhỏ hơn, có viền, và thường bị chính nền tảng thu nhỏ thêm.',
    },
    {
      h2: 'Đừng ép về khung dọc nếu chủ thể trải hết chiều rộng',
    },
    {
      p: 'Nếu chủ thể trong video nằm ngang và trải hết chiều rộng, ví dụ một dãy sản phẩm xếp hàng hoặc một mâm cơm, thì cắt về dọc sẽ lấy mất phần lớn nội dung. Lúc đó có hai cách: quay lại theo khung dọc với chủ thể xếp theo chiều cao, hoặc chấp nhận bản ngang và chỉ đăng ở nơi nhận khung ngang.\n\nCách này cũng không hợp nếu bạn phải xuất hàng loạt từ một video nguồn có sẵn. Cắt tự động một video ngang thành dọc thường cho ra khung mất chủ thể, và sửa lại từng cái còn tốn thời gian hơn quay mới theo khung dọc.',
    },
    ],
    en: [
    {
      p: 'For a selling video, almost every case starts from one answer: vertical 9:16. That is the shape short video takes on a phone, and it is the default that Shopee Video and Facebook Reels run. There are still places where horizontal is the better call, so take it place by place.\n\nWhat matters more than the ratio is the safe area. Understand that and changing the frame stops eating your text — and that is most of this article.',
    },
    {
      h2: 'Each place you post wants a different shape, and the default is still 9:16',
    },
    {
      ul: [
        'Shopee Video: vertical 9:16. Viewers hold the phone upright and the product sits in the middle of the screen, so a vertical video takes almost the whole space.',
        'Facebook Reels: also vertical 9:16. The Reels interface covers the top and the bottom with text and buttons, so anything placed near the edge is easy to lose.',
        'An ordinary Facebook post: vertical still plays, but a square 1:1 or 4:5 frame takes more room in the feed and gets cropped less.',
        'Ads: it depends where they run. A vertical placement needs 9:16, a feed placement wants 1:1 or 4:5, and some placements still take 16:9.',
      ],
    },
    {
      h2: '9:16 is the default because of geometry, because of habit, and because your stock is taller than it is wide',
    },
    {
      p: 'The first reason is geometry: the phone is held upright, so a vertical frame uses the full height of the screen, while a horizontal one either gets black bars on the sides or loses both ends. The second is habit: viewers have been taught that short video is vertical, and a horizontal video in that slot looks like content carried in from somewhere else.\n\nThe third reason suits sellers best. A vertical frame gives the subject more of the screen when you shoot close: a hand holding the product, bottles, boxes, clothes on a hanger. Those things are taller than they are wide, so a vertical frame fits them and a horizontal one leaves empty space on both sides.',
    },
    {
      h2: 'The mistake you see most is not the wrong ratio — it is putting text at the edge of the frame',
    },
    {
      p: 'Going from a vertical frame to a square or horizontal one usually means cropping the sides to fit. That means anything sitting against the left or right edge goes first. Going the other way, from horizontal to vertical, either adds black bars top and bottom or crops the sides — and the second one takes exactly the text you put at the edge.\n\nWhich is why the most common mistake is not choosing the wrong ratio, but placing text and logos on the edge of the frame.',
    },
    {
      ul: [
        'Text running the full width of a vertical frame: crop to square or horizontal and both ends of the line are cut, not wrapped.',
        'A logo in the top corner: in a vertical interface, the top is usually covered by the title bar.',
        'Subtitles pinned to the bottom: the bottom is covered by the caption, the product name and the progress bar.',
        'A subject sitting off to one side: crop to a narrower frame and it gets pushed out or cut in half.',
      ],
    },
    {
      h2: 'Settle where you post first, then shoot a little wider than the frame',
    },
    {
      ol: [
        'Decide the main place first, usually Shopee Video or Reels, and cut the original in vertical 9:16.',
        'When you shoot, shoot a little wider than the frame you need, so there is room left if you later want a square or horizontal cut.',
        'Keep everything that matters inside the middle band: text, logo, faces, the product. Leave margin on all four sides.',
        'Make the text bigger than you think it needs to be, then check it on a real phone rather than a computer screen.',
        'Keep the logo in the middle band, not against a corner. The logo is the first thing cropped and the last thing anyone notices missing.',
        'Export the vertical version first. If you need a square or horizontal one, reposition the text and logo for that frame and export it separately — do not let the software crop for you.',
      ],
    },
    {
      note: 'Do not take the vertical cut and crop a square out of it to be done with it. That always loses the edges, and the edges are exactly where the text and the logo live. If you need two versions for two places, build the second one for its own frame, with the text and the logo laid out for that frame.',
    },
    {
      h2: 'Horizontal is right when the content was horizontal to begin with',
    },
    {
      p: 'Horizontal is right when the content is horizontal by nature: a table full of dishes, a kitchen scene, two people sitting and talking, a process with several steps spread out. It is also right when the footage you have is horizontal and cannot be reshot, and when you mostly post as ordinary posts for people watching on a computer.\n\nBut if your main place is Shopee Video or Facebook Reels, a horizontal video always starts weaker: smaller, boxed in, and usually shrunk further by the platform itself.',
    },
    {
      h2: 'Do not force a vertical frame when the subject spans the full width',
    },
    {
      p: 'If the subject lies across the frame and fills the width — a row of products lined up, a tray of food — cropping to vertical removes most of it. You have two options: reshoot vertically with the subject stacked in height, or accept the horizontal version and post only where horizontal is accepted.\n\nThis method also fails when you have to export in bulk from one existing source video. Automatically cropping a horizontal video to vertical usually produces frames that lose the subject, and fixing them one by one takes longer than shooting again in a vertical frame.',
    },
    ],
  },
  faq: {
    vi: [
    {
      q: 'Video dọc có đăng được lên Facebook không?',
      a: 'Được. Video dọc chạy tốt ở cả Reels lẫn bài đăng thường. Nếu đăng trong bảng tin, khung 4:5 hoặc 1:1 chiếm được nhiều chỗ hơn, nhưng khung dọc vẫn dùng được nếu bạn giữ chữ trong vùng giữa.',
    },
    {
      q: 'Đổi khung video có làm mất chữ không?',
      a: 'Có, nếu chữ nằm sát mép. Cách tránh là giữ chữ, logo và chủ thể trong vùng giữa khung, rồi khi cần bản khác khung thì chỉnh lại vị trí các lớp chữ cho khung đó rồi xuất riêng, thay vì để phần mềm tự cắt.',
    },
    {
      q: 'Một video dùng cho nhiều nơi thì nên dựng khung nào trước?',
      a: 'Dựng bản dọc 9:16 trước, vì đó là khung của Shopee Video và Facebook Reels, hai nơi bạn đăng nhiều nhất. Khi quay, quay rộng hơn khung một chút để nếu cần bản vuông hay ngang thì vẫn còn chỗ mà cắt.',
    },
    {
      q: 'Nên chọn tỉ lệ khung nào cho video bán hàng?',
      a: 'Mặc định là dọc 9:16, vì đó là khung của Shopee Video và Facebook Reels. Chỉ đổi sang vuông hoặc ngang khi nơi đăng chính của bạn là bảng tin Facebook, hoặc khi nội dung vốn nằm ngang và không thể quay lại. AutoReel dựng video kèm phụ đề, logo và chữ trên dưới, rồi đăng lên Shopee Video hoặc Facebook/Reels. Xem thêm ở autoreelvn.com hoặc nhắn Zalo 0326012999.',
    },
    ],
    en: [
    {
      q: 'Can I post vertical video to Facebook?',
      a: 'Yes. Vertical runs fine in both Reels and ordinary posts. In the feed, a 4:5 or 1:1 frame takes more room, but vertical still works as long as you keep the text inside the middle band.',
    },
    {
      q: 'Does changing the frame cut off my text?',
      a: 'It does, if the text sits against the edge. The way to avoid it is to keep text, logo and subject inside the middle band, and when you need another frame, reposition the text for that frame and export it separately instead of letting the software crop it.',
    },
    {
      q: 'If one video goes to several places, which frame do I build first?',
      a: 'Build the vertical 9:16 first, because that is the frame for Shopee Video and Facebook Reels, the two places you post to most. When shooting, frame a little wider than you need so there is still room to crop a square or horizontal version later.',
    },
    {
      q: 'Which ratio should I choose for a selling video?',
      a: 'Vertical 9:16 by default, because that is the frame for Shopee Video and Facebook Reels. Switch to square or horizontal only when your main place is the Facebook feed, or when the content is horizontal and cannot be reshot. AutoReel builds videos with subtitles, logo and text bands, then posts to Shopee Video or Facebook/Reels. More at autoreelvn.com or Zalo 0326012999.',
    },
    ],
  },
};

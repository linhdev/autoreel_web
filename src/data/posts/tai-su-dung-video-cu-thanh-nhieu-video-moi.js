/**
 * Blog post — "Tái sử dụng video cũ thành nhiều video mới".
 *
 * Same shape as every post in this folder: a default export with `lead`, `body`
 * and `faq`. The renderer walks `body` in order and switches on whichever single
 * key a block carries — no markup inside the strings.
 */
export default {
  slug: {
    vi: 'tai-su-dung-video-cu-thanh-nhieu-video-moi',
    en: 'reusing-old-footage',
  },
  title: {
    vi: 'Tái sử dụng video cũ: một buổi quay, hai tuần video',
    en: 'Reusing old footage: one shoot, two weeks of videos',
  },
  description: {
    vi: 'Một video dài bóc ra được nhiều video ngắn: cách lấy chủ đề, cắt đoạn đáng nói, và đổi đúng bốn thứ để mỗi video là một video khác.',
    en: 'Cutting one long video into many shorts: pulling topics out of what you already said, cutting the good parts, and changing four things so each stands alone.',
  },
  date: '2026-10-10',
  minutes: { vi: 7, en: 7 },
  tag: { vi: 'Hướng dẫn', en: 'How-to' },
  lead: {
    vi: 'Một buổi quay có thể cho bạn hai tuần nội dung, nếu bạn biết cách bóc ra. Bài này là quy trình từ một video dài thành nhiều video ngắn: lấy chủ đề, cắt đoạn đáng nói, và đổi đúng những thứ khiến mỗi video là một video khác.',
    en: 'One recording session can feed you two weeks of content, if you know how to break it up. This is the process for turning a long video into many shorts: pull the topics out, cut the parts worth keeping, and change exactly the things that make each video its own.',
  },
  body: {
    vi: [
      { h2: 'Đừng quay thêm, hãy bóc cái đã có' },
      {
        p: 'Nhiều người hết ý tưởng trong khi trong máy đã có hàng giờ video chưa dùng: một buổi livestream, một video dài đã đăng, một lần quay sản phẩm để lấy ảnh, một buổi tư vấn cho khách. Những thứ đó đã có sẵn lời, có sẵn hình, chỉ chưa được chia lại.\n\nBài này nói về nội dung bạn tự quay hoặc có quyền dùng. Chuyện dùng lại nội dung của người khác là chuyện khác, và nếu bạn đi theo hướng đó thì cần đọc kỹ phần quyền sử dụng nguồn trước khi đăng.',
      },
      { h2: 'Mỗi câu trả lời cho một câu hỏi của người mua là một chủ đề' },
      {
        ol: [
          'Lấy bản chữ của video. Với video bạn tự quay, hãy để máy đọc thành chữ, hoặc tự gõ lại những đoạn bạn thấy đáng. Không cần chính xác từng chữ, chỉ cần đủ để bạn đọc và đánh dấu.',
          'Đi qua bản chữ và đánh dấu từng câu trả lời cho một câu hỏi của người mua. Mỗi câu trả lời như vậy là một chủ đề.',
          'Viết mỗi chủ đề thành một câu hỏi ngắn: "có nặng không", "rửa được không", "để vừa tủ không". Câu hỏi thật, không phải tiêu đề quảng cáo.',
          'Gạch bỏ chủ đề chỉ có một điểm để nói. Một video ngắn cần ít nhất ba điểm: một vấn đề, một chi tiết, và một lời mời.',
          'Xếp chủ đề theo thứ tự đăng, mạnh nhất trước, vì video đầu của một nhóm thường kéo người xem tới các video sau.',
        ],
      },
      {
        p: 'Một buổi quay bốn mươi phút, nói về năm món trong bếp, thường bóc ra được tám đến mười hai chủ đề dùng được. Con số không quan trọng bằng tỉ lệ: nếu bạn không tìm được ít nhất năm chủ đề trong một video dài, có thể video đó chưa có gì để nói — và điều đó cũng đáng biết.',
      },
      { h2: 'Mỗi đoạn cắt ra phải đứng được một mình' },
      {
        ul: [
          'Độ dài mỗi đoạn thường từ hai mươi đến bốn mươi giây. Ngắn hơn thì chưa nói hết, dài hơn thì bạn đang cắt chưa đủ tay.',
          'Bắt đầu ở câu mạnh nhất, không phải ở chỗ đoạn đó bắt đầu trong video gốc. Bạn có thể lấy câu kết của bản gốc đặt lên đầu, miễn là nó đứng một mình vẫn hiểu.',
          'Cắt bỏ hết chỗ ậm ừ, chỗ lặp lại, chỗ bạn nói "à thì". Người xem không cần thấy quá trình, chỉ cần thấy kết quả.',
          'Giữ lại một câu kết rõ ràng cho mỗi đoạn. Đoạn cắt giữa chừng nghe như video bị lỗi.',
          'Nghe lại đoạn vừa cắt mà không nhìn hình. Nếu vẫn hiểu, đoạn đó đứng được một mình.',
        ],
      },
      { h2: 'Bốn thứ đổi được, và thứ đầu tiên có tác dụng nhất' },
      {
        ol: [
          'Phần mở đầu. Ba giây đầu luôn phải viết mới cho từng video. Đây là thay đổi rẻ nhất và có tác dụng nhất, vì đó là chỗ quyết định người xem ở lại.',
          'Lời. Kể lại cùng một ý bằng câu khác, hoặc kể từ góc khác: từ phía người mua, từ phía một lỗi hay gặp, từ phía so sánh hai lựa chọn.',
          'Giọng đọc và tốc độ. Đổi giọng, đổi mức đọc, hoặc tự thu giọng bạn cho phần mở đầu. Cùng một nội dung, hai giọng cho cảm giác hai kênh khác nhau.',
          'Nhịp và khung. Đổi thứ tự các cảnh, cắt nhanh hơn hoặc chậm lại, thêm một khung hình minh hoạ. Không đổi nội dung, chỉ đổi cách kể.',
        ],
      },
      { h2: 'Thông tin sản phẩm thì giữ, lời và chú thích thì đổi' },
      {
        ul: [
          'Giữ: mọi thông tin về sản phẩm và mọi con số bạn đã kiểm. Đây là phần không được đổi, và cũng không nên đổi, vì sai một số là mất niềm tin.',
          'Giữ: bộ nhận diện — logo, màu, kiểu chữ, kiểu phụ đề. Giữ để người xem nhận ra bạn, không phải để các video giống nhau.',
          'Đổi: phần mở đầu. Ba giây đầu không được giống nhau giữa hai video đăng gần nhau.',
          'Đổi: lời và giọng. Viết lại câu, đổi giọng đọc hoặc đổi mức tốc độ.',
          'Đổi: chú thích và tiêu đề. Đừng dán lại một câu chú thích cho năm video; người xem đọc chú thích trước khi bấm vào video.',
        ],
      },
      {
        note: 'Thứ khiến một loạt video bị coi là đăng trùng thường không phải là hình ảnh, mà là nhịp đăng. Năm video gần giống nhau đăng trong một buổi sáng thì tự nhiên thành dấu hiệu spam; cùng năm video đó giãn ra mỗi ngày một cái thì lại là một kênh đang làm việc đều. Trước khi lo đổi hình, hãy chốt lịch đăng.',
      },
      { h2: 'Một video bốn mươi phút bóc ra được năm đoạn cụ thể' },
      {
        ol: [
          'Đoạn nói về cách chọn kệ theo kích thước bếp — thành video "bếp nhỏ thì chọn kệ nào".',
          'Đoạn tháo khay hứng nước — thành video "chỗ này tháo ra rửa riêng được".',
          'Đoạn so sánh kệ nhựa và kệ inox — thành video "vì sao kệ nhựa bị ố".',
          'Đoạn trả lời câu hỏi của khách về việc có rỉ không — thành video trả lời thẳng câu hỏi đó.',
          'Đoạn nói về giá và cách đặt hàng — thành video ngắn dùng làm lời mời ở cuối loạt.',
        ],
      },
      { h2: 'Cách này không hợp nếu video gốc không có lời' },
      {
        p: 'Video chỉ có hình và nhạc thì không có gì để bóc thành chủ đề; lúc đó bạn cần quay thêm phần nói, hoặc viết lời mới hoàn toàn.\n\nNó cũng không hợp nếu bạn chỉ bán một sản phẩm duy nhất. Bóc mười chủ đề từ một sản phẩm là cách tốt để bắt đầu, nhưng tới chủ đề thứ mười hai bạn sẽ thấy mình đang nói lại chính mình. Lúc đó việc cần làm là thêm sản phẩm hoặc thêm góc nhìn từ khách hàng, không phải cắt mịn hơn.',
      },
    ],
    en: [
      { h2: 'Stop recording more — break up what you already have' },
      {
        p: 'People run out of ideas while sitting on hours of unused footage: a livestream, a long video already posted, a product shoot you did just to get photos, a session answering customer questions. All of it already has speech and pictures. It just has not been divided up yet.\n\nThis is about material you shot yourself or have the right to use. Reusing other people’s content is a different subject, and if that is the road you are on, read the source’s usage terms carefully before you post.',
      },
      { h2: 'Every answer to a buyer’s question is a topic' },
      {
        ol: [
          'Get the video transcribed. For your own footage, have it written out, or type up the parts you remember as good. It does not have to be word perfect, only good enough to read and mark up.',
          'Go through the transcript and mark every answer to a question a buyer would ask. Each of those answers is one topic.',
          'Write each topic as a short question: "is it heavy", "can it be washed", "does it fit in the cupboard". Real questions, not advertising headlines.',
          'Cross out any topic with only one point to make. A short video needs at least three: a problem, a detail, and an ask.',
          'Order the topics for posting, strongest first, because the first video in a set is what pulls people to the ones after it.',
        ],
      },
      {
        p: 'A forty-minute recording about five things in a kitchen usually gives up eight to twelve usable topics. The exact number matters less than the ratio: if you cannot find at least five topics in a long video, that video may not have had much to say — and that is worth knowing too.',
      },
      { h2: 'Every clip you cut has to stand up on its own' },
      {
        ul: [
          'Clips usually run twenty to forty seconds. Shorter and you have not finished the thought; longer and you have not cut hard enough.',
          'Start on the strongest sentence, not where that section starts in the original. You can take the closing line of the original and put it at the front, as long as it still makes sense alone.',
          'Cut every "um", every repeat, every "so anyway". Viewers do not need to see the process, only the result.',
          'Keep one clear closing line in each clip. A clip that stops mid-thought sounds like a broken video.',
          'Listen to the cut clip without watching the picture. If it still makes sense, it can stand alone.',
        ],
      },
      { h2: 'Four things you can change, and the first one does the most work' },
      {
        ol: [
          'The opening. The first three seconds must be written fresh for every video. It is the cheapest change and the one that matters most, because that is where the viewer decides to stay.',
          'The words. Tell the same idea in different sentences, or from a different angle: from the buyer’s side, from a common mistake, or comparing two options.',
          'The voice and the pace. Change the voice, change the speed, or record the opening yourself. Same content, two voices, two different channels as far as the ear is concerned.',
          'Rhythm and framing. Reorder the shots, cut faster or slower, add one illustration. Same content, different telling.',
        ],
      },
      { h2: 'Keep the product facts, change the words and the captions' },
      {
        ul: [
          'Keep: every product detail and every number you have checked. This is the part that must not change, and should not, because one wrong number costs trust.',
          'Keep: the look — logo, colours, typeface, subtitle style. Keep it so people recognise you, not so the videos look identical.',
          'Change: the opening. The first three seconds must not match between two videos posted close together.',
          'Change: the words and the voice. Rewrite the sentences, swap the voice, or shift the speed.',
          'Change: the caption and the title. Do not paste one caption onto five videos; the caption is what people read before they tap.',
        ],
      },
      {
        note: 'What gets a run of videos flagged as duplicates is usually not the footage. It is the posting rhythm. Five near-identical videos in one morning reads as spam on its own; the same five, one a day, look like a channel that is working steadily. Settle the schedule before you worry about changing the picture.',
      },
      { h2: 'A forty-minute video, broken into five concrete clips' },
      {
        ol: [
          'The part about picking a rack by kitchen size becomes "which rack fits a small kitchen".',
          'The part where the drip tray slides out becomes "this bit comes out so you can wash it".',
          'The part comparing a plastic rack with a steel one becomes "why plastic racks go yellow".',
          'The part answering a customer asking whether it rusts becomes a video answering exactly that.',
          'The part about price and how to order becomes a short video used as the closing ask of the set.',
        ],
      },
      { h2: 'This does not work when the original has no speech' },
      {
        p: 'Footage with only music and pictures has nothing to break into topics. For that you need to record some talking, or write the lines from scratch.\n\nIt also stops working if you sell a single product. Pulling ten topics out of one product is a good way to start, but by the twelfth you will hear yourself repeating yourself. At that point the work is adding products or adding angles from what customers ask, not cutting finer.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Đăng lại video cũ của chính mình có sao không?',
        a: 'Bạn toàn quyền với nội dung mình tự quay, nhưng đăng lại y hệt một video đã đăng trên cùng một kênh thường không mang lại gì và dễ bị xếp vào nhóm nội dung trùng. Hãy đổi phần mở đầu, lời và chú thích trước khi đăng lại.',
      },
      {
        q: 'Một video dài cắt được bao nhiêu video ngắn?',
        a: 'Tùy nội dung. Một buổi quay bốn mươi phút có nhiều chủ đề thường cho tám đến mười hai đoạn dùng được; một video chỉ nói một ý thì có thể chỉ cho hai đến ba. Nếu cắt ra được ít hơn bạn mong, hãy xem lại phần chủ đề chứ đừng cắt vụn hơn.',
      },
      {
        q: 'Đổi nhạc nền và ảnh bìa có đủ để không bị coi là trùng?',
        a: 'Không. Nhạc và ảnh bìa là lớp ngoài cùng, còn người xem nhận ra phần lời và phần mở đầu. Muốn thật sự khác thì phải đổi ở phần mở đầu, lời và nhịp dựng.',
      },
      {
        q: 'AutoReel giúp được gì ở việc này?',
        a: 'AutoReel có workflow Reup/Repurpose để cắt highlight từ video dài, lồng tiếng Việt, thêm phụ đề và bộ nhận diện; và workflow AI Review để từ một video nguồn viết lại thành nhiều kịch bản rồi ra nhiều video. Bạn chọn số lượng và xem lại từng cái trước khi đăng lên Shopee Video hoặc Facebook/Reels. Cần hỏi thêm thì nhắn Zalo hoặc WhatsApp 0326012999.',
      },
    ],
    en: [
      {
        q: 'Is it a problem to repost my own old video?',
        a: 'You own what you shot, but reposting an identical video on the same channel rarely does anything for you and is easy to file as duplicate content. Change the opening, the words and the caption before you post it again.',
      },
      {
        q: 'How many shorts can one long video give me?',
        a: 'It depends on the content. A forty-minute recording with plenty of topics usually gives eight to twelve usable clips; a video that makes one point might give two or three. If you get fewer than you hoped, go back to the topic step instead of cutting smaller.',
      },
      {
        q: 'Is changing the music and the cover enough to avoid looking duplicated?',
        a: 'No. Music and the cover are the outer layer, and what people recognise is the words and the opening. To actually be different, change the opening, the script and the editing rhythm.',
      },
      {
        q: 'What does AutoReel do for this?',
        a: 'AutoReel has a Reup/Repurpose workflow that cuts highlights out of a long video, adds Vietnamese voiceover, subtitles and your branding; and an AI Review workflow that takes one source video and rewrites it into several scripts, then several videos. You choose how many and review each one before posting to Shopee Video or Facebook/Reels. If you want to ask something, message Zalo or WhatsApp on 0326012999.',
      },
    ],
  },
};

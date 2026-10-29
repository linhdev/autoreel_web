/**
 * Blog post — when not to let it post by itself.
 *
 * The honest piece of the cluster: CAPTCHA, Reels limits, QC failures,
 * approval versus auto-post, rights, and the five moments a human should press
 * the button. Written to talk somebody out of the wrong mode, not into it.
 */
export default {
  slug: {
    vi: 'khi-nao-khong-nen-de-ai-tu-dang',
    en: 'when-not-to-let-it-post',
  },
  title: {
    vi: 'Khi nào không nên để máy tự đăng',
    en: 'When not to let it post by itself',
  },
  description: {
    vi: 'CAPTCHA của Douyin, luật 9:16 và 3–90 giây của Reels, kiểm không đạt và bản quyền — năm lúc nên tự bấm nút thay vì để chiến dịch đăng thay bạn.',
    en: 'Douyin’s CAPTCHA, the 9:16 and 3–90 second rule on Reels, QC failures and rights — five moments to press the button yourself instead of letting a campaign post.',
  },
  date: '2026-10-29',
  minutes: { vi: 7, en: 7 },
  tag: {
    vi: 'Kinh nghiệm',
    en: 'Field notes',
  },
  lead: {
    vi: 'Một chiến dịch có thể đăng thay bạn. Câu hỏi không phải “có làm được không”, mà là “có nên không”. Bài này nói những chỗ máy phải dừng, và những chỗ bạn nên tự bấm nút dù máy làm được.',
    en: 'A campaign can post in your place. The question is not whether it can, but whether it should. This is where the machine has to stop, and where you should press the button yourself even though it could.',
  },
  body: {
    vi: [
      { h2: 'CAPTCHA là chỗ dừng, không phải chỗ vượt' },
      {
        p: 'Douyin có lúc chặn bằng thanh trượt. Khi đó app mở cửa sổ Chrome riêng cho Douyin; bạn giải một lần trong cửa sổ đó, rồi chiến dịch chờ và thử lại. Không có phần nào tự vượt qua bước này.',
      },
      {
        p: 'Đây không chỉ là giới hạn kỹ thuật. Vượt CAPTCHA là việc làm thay đổi cách nền tảng đối xử với tài khoản của bạn, và tài khoản đó là của bạn, không phải của phần mềm. Một cú bấm tự động có thể tiết kiệm hai phút và lấy đi một tài khoản.',
      },
      {
        p: 'Khi cửa sổ đó hiện lên, đừng đóng nó. Giải thanh trượt, để cửa sổ yên, rồi quay lại chiến dịch. Chiến dịch sẽ tự đi tiếp.',
      },
      { h2: 'Reels có luật, và luật đó chặn ở khâu kiểm' },
      {
        p: 'Facebook Reels chỉ nhận khung 9:16 và thời lượng từ 3 đến 90 giây. Video sai khung hoặc quá dài bị chặn ở bước kiểm, kèm lý do, trước khi có bài đăng nào.',
      },
      {
        p: 'Chặn ở khâu kiểm tốt hơn để nền tảng từ chối sau khi đăng. Một lượt đăng hỏng không chỉ mất video; nó còn làm bạn mất thời gian đọc thông báo và đoán lỗi.',
      },
      {
        p: 'Ở chế độ dịch và lồng tiếng, nguồn dài hơn 90 giây được tự cắt thành clip 45 giây khung 9:16 trước khi lồng tiếng. Nếu bạn cần giữ nguyên độ dài nguồn, đừng dùng chế độ đó cho nguồn dài — chọn chế độ khác, hoặc chấp nhận cắt.',
      },
      { h2: 'Kiểm không đạt là tín hiệu, không phải sự cố' },
      {
        p: 'Trạng thái kiểm không đạt luôn kèm lý do. Đọc lý do trước khi chạy lại: sai khung, sai thời lượng và lỗi nguồn cần ba cách sửa khác nhau. Chạy lại y nguyên chỉ tạo ra đúng lỗi đó lần nữa.',
      },
      {
        p: 'Đừng tìm cách ép đăng video đã bị chặn. Bước kiểm làm đúng phần việc khó nhất: từ chối trước khi công khai. Nếu bạn thấy nó chặn quá nhiều, vấn đề thường nằm ở nguồn hoặc ở chế độ nội dung, không nằm ở bước kiểm.',
      },
      { h2: 'Duyệt trước hay đăng ngay' },
      {
        p: 'Không có câu trả lời đúng cho mọi Page. Có nội dung nên duyệt từng cái, có nội dung đăng ngay là hợp lý.',
      },
      {
        ul: [
          'Duyệt trước khi bài có giá, bảo hành, cam kết, tên người thật hoặc sản phẩm nhạy cảm.',
          'Duyệt trước trong tuần đầu của mọi chiến dịch mới, và sau mỗi lần đổi nguồn hoặc đổi chế độ.',
          'Đăng ngay khi nội dung đã qua nhiều lượt, ít thay đổi, và bạn biết cái gì sẽ lên Page.',
        ],
      },
      {
        p: 'Nút duyệt trong Telegram cho bạn duyệt từ điện thoại mà không cần mở máy. Nhưng nút đó chỉ có tác dụng nếu bạn xem video trước khi bấm. Duyệt mà không xem thì chỉ là đăng chậm hơn, không phải an toàn hơn.',
      },
      { h2: 'Bản quyền vẫn là chuyện của bạn' },
      {
        p: 'Tải được một video không có nghĩa là được đăng lại. App không cấp quyền cho nguồn, không kiểm tra bản quyền thay bạn, và không chịu trách nhiệm thay bạn khi nền tảng hoặc chủ sở hữu lên tiếng.',
      },
      {
        p: 'Reup chỉ bền khi bạn thêm vào thứ mà bản gốc không có: lời bình, biên tập, thông tin, góc nhìn. Nếu video mới gần như bản gốc, rủi ro không nằm ở phần mềm mà ở tài khoản của bạn. Bài [reup video không bị đánh bản quyền](/blog/reup-video-khong-bi-danh-ban-quyen/) nói kỹ phần này.',
      },
      {
        p: 'Nếu không chắc về quyền của một nguồn, đừng đăng. Chiến dịch có thể chạy nguồn khác vào ngày mai; một tài khoản bị đánh thì mất lâu hơn nhiều.',
      },
      { h2: 'Năm lúc nên tự bấm nút' },
      {
        ul: [
          'Lần đầu chạy một nguồn hoặc một chế độ mới.',
          'Bài có giá, bảo hành hoặc cam kết cần đúng từng chữ.',
          'Page vừa bị cảnh báo, vừa đổi người quản lý, hoặc vừa đổi mục tiêu nội dung.',
          'Khi cửa sổ CAPTCHA của Douyin hiện lên.',
          'Sau một thời gian dài không chạy, hoặc sau khi bạn vừa đổi ba bốn thứ cấu hình.',
        ],
      },
      {
        p: 'Năm lúc này không phải danh sách đầy đủ, chỉ là những lúc rẻ nhất để bạn dừng lại mười phút. Mười phút đó thường rẻ hơn một bài đăng phải xoá.',
      },
      { h2: 'Tự động không có nghĩa là không chịu trách nhiệm' },
      {
        p: 'Điều khoản của nền tảng áp lên tài khoản, không lên phần mềm. Người bấm nút chịu trách nhiệm về bài đăng, kể cả khi máy làm phần lớn công việc. Đó là lý do chế độ duyệt trước tồn tại: không phải để làm bạn chậm lại, mà để bạn kịp nhận ra mình đang định đăng gì.',
      },
      {
        note: 'Nếu bạn không định xem video trước khi nó lên Page, đừng chọn duyệt trước. Chọn duyệt trước rồi bấm duyệt mà không xem chỉ là tự lừa mình, và nó tệ hơn đăng ngay vì bạn đã trả thời gian cho một bước vô nghĩa.',
      },
    ],
    en: [
      { h2: 'CAPTCHA is a stop, not an obstacle to beat' },
      {
        p: 'Douyin sometimes blocks with a slider. When it does, the app opens a dedicated Chrome window for Douyin; you solve it once in that window, then the campaign waits and retries. Nothing skips that step automatically.',
      },
      {
        p: 'That is not only a technical limit. Solving a CAPTCHA changes how the platform treats your account, and the account is yours, not the software’s. An automatic click can save two minutes and cost an account.',
      },
      {
        p: 'When that window opens, do not close it. Solve the slider, leave the window alone, and go back to the campaign. The campaign carries on by itself.',
      },
      { h2: 'Reels has rules, and they are enforced at the check' },
      {
        p: 'Facebook Reels accepts only a 9:16 frame and 3 to 90 seconds. A video with the wrong shape or too long is blocked at the check step, with the reason, before any post exists.',
      },
      {
        p: 'Blocking it at the check is better than letting the platform reject it after posting. A failed post does not just lose the video; it costs you time reading a notification and guessing at the cause.',
      },
      {
        p: 'In translate-and-dub mode, a source longer than 90 seconds is cut into a 45-second 9:16 clip before dubbing. If you need the source’s full length, do not use that mode on a long source — choose another mode, or accept the cut.',
      },
      { h2: 'A QC failure is a signal, not an accident' },
      {
        p: 'A QC failure always carries the reason. Read it before running again: a wrong frame, a wrong duration and a bad source need three different fixes. Rerunning the same job unchanged only produces the same error a second time.',
      },
      {
        p: 'Do not look for a way to force a blocked video through. The check is doing the hardest part of the job: refusing before the public sees it. If it blocks too often, the problem is usually the source or the content mode, not the check.',
      },
      { h2: 'Approve first, or publish straight away' },
      {
        p: 'There is no answer that is right for every Page. Some content deserves a look every time; some content is fine to post directly.',
      },
      {
        ul: [
          'Approve first when the post carries a price, a warranty, a promise, a real person’s name or a sensitive product.',
          'Approve first for the first week of any new campaign, and after every change of source or mode.',
          'Publish straight away when the content has been through many runs, changes little, and you know what will reach the Page.',
        ],
      },
      {
        p: 'The Telegram approval button lets you approve from your phone without opening the computer. But it only does something if you watch the video before pressing. Approving without watching is just slower posting, not safer posting.',
      },
      { h2: 'Rights are still your problem' },
      {
        p: 'Being able to download a video does not mean you may repost it. The app does not grant rights to a source, does not check copyright for you, and does not take responsibility when a platform or an owner complains.',
      },
      {
        p: 'A reupload only lasts when you add something the original did not have: commentary, editing, information, a point of view. If the new video is close to the original, the risk sits with your account, not with the software. The article on [reuploading without copyright strikes](/en/blog/reuploading-without-copyright-strikes/) goes into that.',
      },
      {
        p: 'If you are not sure about the rights to a source, do not post it. The campaign can run another source tomorrow; a struck account takes far longer to recover.',
      },
      { h2: 'Five moments to press the button yourself' },
      {
        ul: [
          'The first run of a new source or a new mode.',
          'A post with a price, a warranty or a promise that must be word for word.',
          'A Page that has just been warned, changed hands, or changed what it posts about.',
          'When Douyin’s CAPTCHA window appears.',
          'After a long pause, or right after changing three or four settings at once.',
        ],
      },
      {
        p: 'Those five are not a complete list; they are the cheapest moments to stop for ten minutes. Ten minutes is usually cheaper than a post you have to delete.',
      },
      { h2: 'Automatic does not mean nobody is responsible' },
      {
        p: 'A platform’s terms apply to the account, not to the software. The person who pressed the button is responsible for the post, even when the machine did most of the work. That is why approve-first exists: not to slow you down, but to give you time to notice what you are about to publish.',
      },
      {
        note: 'If you will not watch the video before it reaches the Page, do not choose approve-first. Choosing it and approving without watching is only fooling yourself, and it is worse than publishing straight away because you paid time for a step that did nothing.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'App có tự giải CAPTCHA không?',
        a: 'Không. Douyin có lúc chặn bằng thanh trượt; app mở cửa sổ Chrome riêng để bạn giải một lần, rồi chiến dịch chờ và thử lại. Không có phần nào tự vượt qua bước đó.',
      },
      {
        q: 'Video dài hơn 90 giây có đăng được lên Reels không?',
        a: 'Không. Reels chỉ nhận 9:16 và 3–90 giây. Video sai bị chặn ở bước kiểm kèm lý do. Riêng chế độ dịch và lồng tiếng, nguồn dài hơn 90 giây được tự cắt thành 45 giây trước khi lồng tiếng.',
      },
      {
        q: 'Kiểm không đạt thì phải làm gì?',
        a: 'Đọc lý do, sửa đúng chỗ đó, rồi chạy lại. Chạy lại y nguyên không sửa được gì; nó chỉ tạo ra đúng lỗi đó lần nữa.',
      },
      {
        q: 'Duyệt trước có an toàn tuyệt đối không?',
        a: 'Không. Nó chỉ an toàn nếu bạn thật sự xem video trước khi bấm duyệt. Duyệt mà không xem chỉ là đăng chậm hơn, không phải kiểm soát hơn.',
      },
      {
        q: 'Tôi có chịu trách nhiệm bản quyền không?',
        a: 'Có. App không cấp quyền cho nguồn và không kiểm tra bản quyền thay bạn. Tải được một video không có nghĩa là được đăng lại.',
      },
    ],
    en: [
      {
        q: 'Does the app solve the CAPTCHA?',
        a: 'No. Douyin sometimes blocks with a slider; the app opens a dedicated Chrome window so you can solve it once, then the campaign waits and retries. Nothing skips that step automatically.',
      },
      {
        q: 'Can a video longer than 90 seconds go to Reels?',
        a: 'No. Reels accepts 9:16 and 3–90 seconds only. A video that breaks the rule is blocked at the check with the reason. In translate-and-dub mode, a source longer than 90 seconds is cut to 45 seconds before dubbing.',
      },
      {
        q: 'What do I do when the check fails?',
        a: 'Read the reason, fix that specific thing, then run it again. Rerunning unchanged fixes nothing; it only produces the same error again.',
      },
      {
        q: 'Is approve-first completely safe?',
        a: 'No. It is only safe if you actually watch the video before approving. Approving without watching is slower posting, not more control.',
      },
      {
        q: 'Am I responsible for copyright?',
        a: 'Yes. The app does not grant rights to a source and does not check copyright for you. Being able to download a video does not mean you may repost it.',
      },
    ],
  },
};

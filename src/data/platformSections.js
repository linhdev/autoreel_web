/**
 * Long-form copy for the six platform download pages.
 *
 * The original `downloadPlatforms.js` carries the fields every page needs:
 * headline, lead, steps, examples, limits and FAQ. This file carries the part
 * that makes each page worth landing on rather than a form with a paragraph:
 * how that platform actually serves a file, what its failures mean, and how to
 * use the download lawfully. The builder merges these sections by platform key,
 * so the six pages stay different without six copies of the same boilerplate.
 *
 * Every string is escaped by `build-download-platforms.mjs`; there is no HTML
 * in here on purpose.
 */
export const PLATFORM_SECTIONS = {
  tiktok: {
    vi: {
      sections: [
        {
          h2: 'Vì sao file tải về có thể vẫn còn watermark',
          paragraphs: [
            'TikTok lưu nhiều bản của cùng một video cho các thiết bị và khu vực khác nhau. Khi bạn dán link, trang lấy bản mà TikTok trả cho một yêu cầu công khai. Bản đó có thể đã có watermark hoặc tên tài khoản in sẵn; trang không thêm logo AutoReel và cũng không xoá dấu có sẵn.',
            'File không bị nén lại hay ghép lại: đó là MP4 có hình và tiếng, đúng độ phân giải mà nguồn trả về. Nếu video gốc 1080p, file thường là 1080p; nếu nguồn chỉ còn bản 720p, file là 720p.',
          ],
          bullets: [
            'Không thêm watermark của AutoReel.',
            'Không đổi âm thanh, không ghép nhạc.',
            'Không cắt bớt thời lượng.',
            'Không lấy được video riêng tư.',
          ],
        },
        {
          h2: 'Khi link TikTok không tải được',
          paragraphs: [
            'Phần lớn lỗi đến từ quyền truy cập của video, không phải từ trang. Video riêng tư, video của tài khoản đã khoá, video đã xoá hoặc video chỉ hiện trong một khu vực sẽ trả lỗi. Link rút gọn hết hạn cũng là trường hợp thường gặp.',
            'Nếu video dài hơn 20 phút hoặc file vượt 95MB, trang từ chối trước khi tải. Với video dài, hãy tách thành đoạn ngắn hơn hoặc dùng bản đã cắt sẵn; trang không cắt hộ.',
          ],
          bullets: [
            'Video đang công khai; mở link trên trình duyệt vẫn xem được.',
            'Không phải livestream hoặc video đang phát trực tiếp.',
            'Dưới 20 phút và 95MB.',
            'Link còn hiệu lực, không phải link cũ đã hết hạn.',
          ],
        },
        {
          h2: 'Dùng video tải về đúng cách',
          paragraphs: [
            'Tải được không có nghĩa là được phép đăng lại. Video của người khác vẫn thuộc bản quyền của họ; đăng lại nguyên bản có thể bị gậy bản quyền hoặc mất kênh. Phân tích, bình luận, review có trích dẫn và biến đổi là khác với reup nguyên bản.',
            'Nếu là video của bạn, hãy giữ file gốc ở nơi khác: trang chỉ giữ file khoảng 2 giờ. Nếu là video của người khác, xin phép hoặc dùng nguồn có giấy phép rõ ràng.',
          ],
        },
      ],
      table: {
        head: ['Thông số', 'Giá trị'],
        rows: [
          ['Loại link', 'tiktok.com/@kenh/video/…, vm.tiktok.com/…'],
          ['Thời lượng tối đa', '20 phút'],
          ['Dung lượng tối đa', '95MB'],
          ['Chất lượng thường gặp', '720p–1080p, tuỳ video'],
          ['Thời gian xử lý', '30–60 giây'],
          ['Lưu file trên máy chủ', 'khoảng 2 giờ'],
        ],
      },
      related: [
        { href: '/blog/reup-video-khong-bi-danh-ban-quyen/', label: 'Reup video không bị đánh bản quyền' },
        { href: '/blog/video-doc-hay-video-ngang/', label: 'Video dọc hay video ngang' },
        { href: '/tai-nhac-tiktok/', label: 'Tải nhạc TikTok' },
        { href: '/tai-video-nhanh/', label: 'Tải video nhanh bằng bookmarklet' },
      ],
      faq: [
        ['Video tải về bị mờ hơn bản trong app?', 'File là bản TikTok trả cho yêu cầu công khai. Nếu bản đó thấp hơn bản bạn đang xem, độ mờ đến từ nguồn; trang không nén lại.'],
        ['Có tách được âm thanh MP3 không?', 'Trang trả MP4 có cả hình và tiếng. Muốn tách nhạc, dùng trang tải nhạc TikTok.'],
        ['Tải video đã xoá được không?', 'Không. Khi video bị xoá hoặc để riêng tư, nền tảng không còn file công khai để trả.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Why a downloaded file can still carry a watermark',
          paragraphs: [
            'TikTok keeps several renditions of the same video for different devices and regions. When you paste a link, the page saves the rendition TikTok serves to a public request. That file may already carry a watermark or the account name; the page neither adds an AutoReel logo nor removes a mark that is already there.',
            'The file is not re-encoded or re-assembled: it is an MP4 with picture and sound at the resolution the source returned. A 1080p source usually yields a 1080p file; if the source only has 720p left, the file is 720p.',
          ],
          bullets: [
            'No AutoReel watermark is added.',
            'Audio and music are untouched.',
            'The duration is not trimmed.',
            'Private videos are not fetched.',
          ],
        },
        {
          h2: 'When a TikTok link will not download',
          paragraphs: [
            'Most failures come from the video’s access settings, not from the page. Private videos, locked accounts, deleted videos and region-only videos return an error. An expired short link is another common case.',
            'If a video is longer than 20 minutes or the file exceeds 95MB, the page refuses it before downloading. For long videos, split the source into shorter parts or use a cut you already have; the page will not trim it for you.',
          ],
          bullets: [
            'The video is public and still plays in a browser.',
            'It is not a livestream or an active broadcast.',
            'It is under 20 minutes and 95MB.',
            'The link has not expired.',
          ],
        },
        {
          h2: 'Using the file lawfully',
          paragraphs: [
            'Being able to download something does not make it yours to repost. Someone else’s video remains their copyright; re-uploading the whole file can earn a strike or cost you the channel. Analysis, commentary and review with attribution and real change are a different act from a straight reupload.',
            'If the video is yours, keep the master somewhere else: this page only holds the file for about two hours. If it belongs to someone else, ask for permission or use material with a clear licence.',
          ],
        },
      ],
      table: {
        head: ['Spec', 'Value'],
        rows: [
          ['Link types', 'tiktok.com/@channel/video/…, vm.tiktok.com/…'],
          ['Maximum length', '20 minutes'],
          ['Maximum size', '95MB'],
          ['Typical quality', '720p–1080p, depending on the video'],
          ['Processing time', '30–60 seconds'],
          ['File retention', 'about 2 hours'],
        ],
      },
      related: [
        { href: '/en/blog/reuploading-without-copyright-strikes/', label: 'Reuploading without strikes' },
        { href: '/en/blog/vertical-or-horizontal/', label: 'Vertical or horizontal' },
        { href: '/en/download-tiktok-audio/', label: 'Download TikTok audio' },
        { href: '/en/quick-download/', label: 'Quick download bookmarklet' },
      ],
      faq: [
        ['Why is the file softer than the app?', 'The file is the rendition TikTok serves to a public request. If that rendition is lower than the one you are watching, the softness comes from the source; the page does not re-compress it.'],
        ['Can I get a separate MP3?', 'The page returns an MP4 with picture and sound. To extract audio, use the TikTok audio page.'],
        ['Can I download a deleted video?', 'No. When a video is deleted or made private, the platform no longer serves a public file.'],
      ],
    },
  },

  douyin: {
    vi: {
      sections: [
        {
          h2: 'Vì sao Douyin cần nhiều thời gian hơn',
          paragraphs: [
            'Douyin thường không trả file trực tiếp trong HTML. Máy phải mở trang video như một trình duyệt thật, chờ trang dựng xong, ký yêu cầu rồi mới lấy được nguồn. Vì vậy một video có thể mất 1–3 phút, lâu hơn TikTok hay YouTube.',
            'Trang không cần tài khoản Douyin. Nhưng nếu Douyin chặn địa chỉ máy chủ hoặc đòi đăng nhập cho video đó, job sẽ trả lỗi thay vì một file.',
          ],
        },
        {
          h2: 'Chất lượng, giới hạn và lỗi thường gặp',
          paragraphs: [
            'Douyin trả video dọc, thường có nhiều độ phân giải. Trang lấy bản cao nhất trong giới hạn 20 phút và 95MB. Video vượt 95MB được hạ về 480p để vừa giới hạn, nên file có thể mờ hơn bản bạn xem trong app.',
            'Douyin thay đổi cách ký yêu cầu khá thường xuyên. Khi nền tảng đổi, một số video có thể lỗi dù link vẫn đúng; thử lại sau hoặc dùng link khác. Đây là giới hạn của nguồn, không phải lỗi bạn nhập sai.',
          ],
          bullets: [
            'Link /video/, /jingxuan?modal_id= hoặc v.douyin.com đều được.',
            'Video công khai; video cần đăng nhập sẽ không tải được.',
            'File MP4 có cả hình và tiếng.',
            'Video quá 95MB bị hạ về 480p.',
          ],
        },
        {
          h2: 'Dùng video Douyin đúng cách',
          paragraphs: [
            'Video Douyin vẫn thuộc bản quyền của người đăng. Tải về để xem lại hoặc phân tích là một chuyện; đăng lại nguyên bản lên nền tảng khác là chuyện khác và có thể bị đánh bản quyền.',
            'Nếu bạn dùng footage của người khác, hãy xin phép, ghi nguồn và biến đổi đủ để tạo ra nội dung mới. Nếu là video của bạn, giữ file gốc ở nơi khác vì trang chỉ lưu khoảng 2 giờ.',
          ],
        },
      ],
      table: {
        head: ['Thông số', 'Giá trị'],
        rows: [
          ['Loại link', 'douyin.com/video/…, ?modal_id=…, v.douyin.com/…'],
          ['Thời lượng tối đa', '20 phút'],
          ['Dung lượng tối đa', '95MB; video lớn hơn hạ về 480p'],
          ['Chất lượng thường gặp', '480p–1080p, tuỳ video'],
          ['Thời gian xử lý', '1–3 phút'],
          ['Lưu file trên máy chủ', 'khoảng 2 giờ'],
        ],
      },
      related: [
        { href: '/blog/reup-video-khong-bi-danh-ban-quyen/', label: 'Reup video không bị đánh bản quyền' },
        { href: '/blog/tai-phu-de-video-srt-vtt/', label: 'Tải phụ đề video SRT/VTT' },
        { href: '/tai-video-nhanh/', label: 'Tải video nhanh bằng bookmarklet' },
        { href: '/downloads/', label: 'Mở công cụ tải video' },
      ],
      faq: [
        ['Có cần VPN để tải Douyin không?', 'Không. Trang chạy từ máy chủ và tự mở trang Douyin. Nếu Douyin chặn địa chỉ máy chủ, job trả lỗi; đổi VPN phía bạn không sửa được lỗi đó.'],
        ['Vì sao file bị hạ về 480p?', 'Video vượt 95MB được hạ độ phân giải để vừa giới hạn. Đây là lựa chọn của trang, không phải chất lượng gốc của Douyin.'],
        ['Tải được video cần đăng nhập không?', 'Không. Trang chỉ đọc file công khai; video yêu cầu đăng nhập hoặc tài khoản riêng tư sẽ trả lỗi.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Why Douyin takes longer',
          paragraphs: [
            'Douyin usually does not return a file directly in the HTML. The machine has to open the video page like a real browser, wait for it to render, sign the request and only then resolve the source. One video can therefore take one to three minutes — longer than TikTok or YouTube.',
            'No Douyin account is needed. But if Douyin blocks the server’s address or requires a login for that video, the job reports an error instead of a file.',
          ],
        },
        {
          h2: 'Quality, limits and common failures',
          paragraphs: [
            'Douyin serves vertical video at several resolutions. The page takes the highest rendition within 20 minutes and 95MB. A video above 95MB is reduced to 480p to fit the limit, so the file can be softer than what you see in the app.',
            'Douyin changes how it signs requests fairly often. When the platform changes, some videos fail even though the link is correct; try again later or use another link. That is the source’s limit, not a typo in the URL.',
          ],
          bullets: [
            '/video/, /jingxuan?modal_id= and v.douyin.com links all work.',
            'Public videos only; login-only videos cannot be fetched.',
            'The MP4 carries both picture and sound.',
            'Anything above 95MB is reduced to 480p.',
          ],
        },
        {
          h2: 'Using Douyin video lawfully',
          paragraphs: [
            'Douyin video remains the copyright of the person who posted it. Saving it to watch again or analyse is one thing; reposting the whole file on another platform is another, and can earn a copyright claim.',
            'If you use someone else’s footage, ask, credit the source and change it enough to make something new. If the video is yours, keep the master elsewhere — this page only holds it for about two hours.',
          ],
        },
      ],
      table: {
        head: ['Spec', 'Value'],
        rows: [
          ['Link types', 'douyin.com/video/…, ?modal_id=…, v.douyin.com/…'],
          ['Maximum length', '20 minutes'],
          ['Maximum size', '95MB; larger videos are reduced to 480p'],
          ['Typical quality', '480p–1080p, depending on the video'],
          ['Processing time', '1–3 minutes'],
          ['File retention', 'about 2 hours'],
        ],
      },
      related: [
        { href: '/en/blog/reuploading-without-copyright-strikes/', label: 'Reuploading without strikes' },
        { href: '/en/blog/download-video-subtitles/', label: 'Download SRT/VTT subtitles' },
        { href: '/en/quick-download/', label: 'Quick download bookmarklet' },
        { href: '/en/downloads/', label: 'Open the download tool' },
      ],
      faq: [
        ['Do I need a VPN to download Douyin?', 'No. The page runs on a server and opens Douyin itself. If Douyin blocks the server’s address, the job fails; changing your own VPN does not fix that.'],
        ['Why was the file reduced to 480p?', 'Videos above 95MB are reduced to fit the limit. That is this page’s choice, not Douyin’s original quality.'],
        ['Can I download a login-only video?', 'No. The page reads public files only; videos that require a login or belong to a private account return an error.'],
      ],
    },
  },

  youtube: {
    vi: {
      sections: [
        {
          h2: 'YouTube trả hình và tiếng riêng',
          paragraphs: [
            'YouTube thường phục vụ hình và tiếng thành hai luồng riêng, không phải một file MP4 sẵn. Trang tải cả hai rồi ghép lại thành MP4, nên mỗi video mất khoảng 30–60 giây thay vì vài giây.',
            'File không được nâng cấp độ phân giải. Trang lấy bản cao nhất trong giới hạn 720p và 95MB; nếu nguồn chỉ trả bản thấp hơn cho địa chỉ hiện tại, file sẽ thấp hơn.',
          ],
        },
        {
          h2: 'Vì sao file chỉ có 360p hoặc 720p',
          paragraphs: [
            'YouTube chọn định dạng theo thiết bị, khu vực và phiên truy cập. Cùng một video có thể có 1080p trong app nhưng chỉ trả 360p hoặc 720p cho một yêu cầu khác. Giới hạn 720p của trang cũng chặn các bản cao hơn.',
            'Video dài hơn 20 phút, playlist và livestream bị từ chối trước khi tải. Shorts dùng cùng đường dẫn /shorts/… và vẫn tuân theo giới hạn này.',
          ],
          bullets: [
            'Watch, Shorts và youtu.be đều được.',
            'Không nhận playlist hoặc livestream.',
            'Tối đa 720p và 95MB.',
            'Video riêng tư, video thành viên hoặc video giới hạn tuổi sẽ không tải được.',
          ],
        },
        {
          h2: 'Tải video YouTube đúng cách',
          paragraphs: [
            'Điều khoản của YouTube không cho phép tải video của người khác để đăng lại. Tải video của chính bạn, video đã được cấp phép hoặc nội dung thuộc phạm vi sử dụng hợp lý là những trường hợp khác nhau; hãy chắc bạn đang ở trường hợp đúng.',
            'Nếu bạn tải để làm recap, review hoặc phân tích, hãy biến đổi nội dung và ghi nguồn thay vì đăng lại nguyên video. Bài viết về reup có checklist rõ hơn.',
          ],
        },
      ],
      table: {
        head: ['Thông số', 'Giá trị'],
        rows: [
          ['Loại link', 'watch?v=…, /shorts/…, youtu.be/…'],
          ['Thời lượng tối đa', '20 phút'],
          ['Dung lượng tối đa', '95MB'],
          ['Chất lượng thường gặp', 'tối đa 720p'],
          ['Thời gian xử lý', '30–60 giây'],
          ['Lưu file trên máy chủ', 'khoảng 2 giờ'],
        ],
      },
      related: [
        { href: '/tai-phu-de-youtube/', label: 'Tải phụ đề YouTube' },
        { href: '/tai-anh-bia-youtube/', label: 'Tải ảnh bìa YouTube' },
        { href: '/blog/tai-phu-de-video-srt-vtt/', label: 'Phụ đề SRT/VTT là gì' },
        { href: '/blog/tool-tom-tat-phim-tu-dong/', label: 'Tool tóm tắt phim tự động' },
        { href: '/blog/reup-video-khong-bi-danh-ban-quyen/', label: 'Reup video không bị đánh bản quyền' },
      ],
      faq: [
        ['Có tải được 4K hoặc 1080p không?', 'Không. Trang giới hạn 720p và 95MB để giữ file nhẹ và job nhanh; bản 4K không được nhận.'],
        ['Video bị giới hạn tuổi có tải được không?', 'Không. Video cần đăng nhập để xác minh tuổi hoặc video thành viên không trả file công khai.'],
        ['Tải video của người khác có sao không?', 'Có thể bị đánh bản quyền nếu bạn đăng lại. Tải để xem hoặc phân tích khác với đăng lại nguyên bản; hãy xin phép khi cần.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'YouTube serves picture and sound separately',
          paragraphs: [
            'YouTube usually serves video and audio as two separate streams, not one ready-made MP4. The page downloads both and muxes them into an MP4, which is why a video takes about 30–60 seconds instead of a few.',
            'The file is never upscaled. The page takes the best rendition within 720p and 95MB; if the source only returns something lower to the current address, the file will be lower.',
          ],
        },
        {
          h2: 'Why the file is only 360p or 720p',
          paragraphs: [
            'YouTube picks formats by device, region and session. The same video can offer 1080p in the app and only 360p or 720p to a different request. The page’s own 720p cap blocks anything higher as well.',
            'Videos longer than 20 minutes, playlists and livestreams are refused before the download starts. Shorts use the same /shorts/… route and follow the same limits.',
          ],
          bullets: [
            'Watch, Shorts and youtu.be links all work.',
            'No playlists or livestreams.',
            'Up to 720p and 95MB.',
            'Private, members-only or age-restricted videos cannot be fetched.',
          ],
        },
        {
          h2: 'Downloading YouTube video lawfully',
          paragraphs: [
            'YouTube’s terms do not allow downloading someone else’s video for republishing. Downloading your own video, licensed material or content within fair use are different cases; make sure you are in the right one.',
            'If you are downloading for a recap, review or analysis, transform the material and credit the source instead of reposting the whole video. The reupload article has a fuller checklist.',
          ],
        },
      ],
      table: {
        head: ['Spec', 'Value'],
        rows: [
          ['Link types', 'watch?v=…, /shorts/…, youtu.be/…'],
          ['Maximum length', '20 minutes'],
          ['Maximum size', '95MB'],
          ['Typical quality', 'up to 720p'],
          ['Processing time', '30–60 seconds'],
          ['File retention', 'about 2 hours'],
        ],
      },
      related: [
        { href: '/en/download-youtube-subtitles/', label: 'Download YouTube subtitles' },
        { href: '/en/download-youtube-thumbnail/', label: 'Download YouTube thumbnails' },
        { href: '/en/blog/download-video-subtitles/', label: 'What SRT/VTT subtitles are' },
        { href: '/en/blog/automatic-movie-recap-tool/', label: 'Automatic movie recap tool' },
        { href: '/en/blog/reuploading-without-copyright-strikes/', label: 'Reuploading without strikes' },
      ],
      faq: [
        ['Can I download 4K or 1080p?', 'No. The page caps video at 720p and 95MB to keep files small and jobs fast; 4K is not accepted.'],
        ['Can I download an age-restricted video?', 'No. Videos that need a login to verify age, or members-only videos, do not expose a public file.'],
        ['Is downloading someone else’s video safe?', 'Republishing it can earn a copyright claim. Saving it to watch or analyse is different from reposting the whole file; ask for permission when in doubt.'],
      ],
    },
  },

  bilibili: {
    vi: {
      sections: [
        {
          h2: 'Hai tên miền, cùng một video',
          paragraphs: [
            'Bilibili có bilibili.tv cho bản quốc tế và bilibili.com cho bản Trung. Cùng một video có thể xuất hiện ở cả hai, và đường dẫn có tiền tố ngôn ngữ như /vi/video/… hoặc /en/video/… vẫn được nhận.',
            'Trang đọc file công khai của video, không phân biệt video thường hay một tập trong series. Tập dài hơn 20 phút bị từ chối trước khi tải; đây là giới hạn của trang, không phải lỗi mạng.',
          ],
        },
        {
          h2: 'Chất lượng, khu vực và phụ đề',
          paragraphs: [
            'Bilibili có thể trả 480p khi địa chỉ máy chủ bị hạn chế, dù video gốc có 1080p. Trang lấy bản cao nhất trong giới hạn 720p và 95MB; file vẫn là video thật, chỉ thấp hơn bản bạn xem trong app.',
            'Phụ đề và danmaku không nằm trong file MP4. Nếu video có track phụ đề công khai, dùng trang tải phụ đề Bilibili để lấy riêng; trang này chỉ tải hình và tiếng.',
          ],
          bullets: [
            'bilibili.tv và bilibili.com đều được.',
            'Tiền tố /vi/, /en/… không ảnh hưởng.',
            'Tối đa 720p và 95MB.',
            'Video cần đăng nhập hoặc khoá khu vực sẽ không tải được.',
          ],
        },
        {
          h2: 'Dùng video Bilibili đúng cách',
          paragraphs: [
            'Video Bilibili thuộc bản quyền của người đăng hoặc đơn vị sản xuất. Tải về để xem lại, học tập hoặc làm tư liệu là một chuyện; đăng lại nguyên bản lên nền tảng khác có thể bị đánh bản quyền.',
            'Nếu bạn dùng footage để làm video mới, hãy biến đổi, ghi nguồn và xin phép khi cần. Trang chỉ giữ file khoảng 2 giờ, nên hãy lưu bản gốc ở nơi khác nếu đó là video của bạn.',
          ],
        },
      ],
      table: {
        head: ['Thông số', 'Giá trị'],
        rows: [
          ['Loại link', 'bilibili.tv/…/video/…, bilibili.com/video/BV…'],
          ['Thời lượng tối đa', '20 phút'],
          ['Dung lượng tối đa', '95MB'],
          ['Chất lượng thường gặp', 'tối đa 720p; 480p nếu IP bị hạn chế'],
          ['Thời gian xử lý', '30–90 giây'],
          ['Lưu file trên máy chủ', 'khoảng 2 giờ'],
        ],
      },
      related: [
        { href: '/tai-phu-de-bilibili/', label: 'Tải phụ đề Bilibili' },
        { href: '/blog/tai-phu-de-video-srt-vtt/', label: 'Phụ đề SRT/VTT là gì' },
        { href: '/blog/reup-video-khong-bi-danh-ban-quyen/', label: 'Reup video không bị đánh bản quyền' },
      ],
      faq: [
        ['Có tải được phụ đề hoặc danmaku không?', 'Không. File MP4 chỉ có hình và tiếng; phụ đề công khai lấy ở trang tải phụ đề Bilibili, danmaku không được trả về.'],
        ['Link bilibili.com có dùng được không?', 'Có. Trang nhận cả bilibili.com và bilibili.tv, kể cả link có tiền tố ngôn ngữ.'],
        ['Vì sao video chỉ có 480p?', 'Bilibili có thể giới hạn chất lượng theo địa chỉ máy chủ. Trang lấy bản cao nhất có thể trong giới hạn 720p và 95MB.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Two domains, one video',
          paragraphs: [
            'Bilibili runs bilibili.tv for the international site and bilibili.com for the Chinese one. The same video can appear on both, and a language prefix such as /vi/video/… or /en/video/… is accepted.',
            'The page reads the video’s public file, whether it is a standalone video or an episode in a series. Episodes longer than 20 minutes are refused before downloading; that is the page’s limit, not a network error.',
          ],
        },
        {
          h2: 'Quality, region and subtitles',
          paragraphs: [
            'Bilibili may serve 480p when the server’s address is restricted, even if the source has 1080p. The page takes the best rendition within 720p and 95MB; the file is still a real video, just lower than what you see in the app.',
            'Subtitles and danmaku are not inside the MP4. If a video exposes a public caption track, use the Bilibili subtitle page to get it separately; this page downloads picture and sound only.',
          ],
          bullets: [
            'bilibili.tv and bilibili.com both work.',
            'A /vi/, /en/… prefix makes no difference.',
            'Up to 720p and 95MB.',
            'Login-only or region-locked videos cannot be fetched.',
          ],
        },
        {
          h2: 'Using Bilibili video lawfully',
          paragraphs: [
            'Bilibili video belongs to the person or studio that published it. Saving it to watch, study or use as reference is one thing; reposting the whole file on another platform can earn a copyright claim.',
            'If you use the footage to make something new, transform it, credit the source and ask when needed. The page keeps files for about two hours, so keep the master elsewhere if the video is yours.',
          ],
        },
      ],
      table: {
        head: ['Spec', 'Value'],
        rows: [
          ['Link types', 'bilibili.tv/…/video/…, bilibili.com/video/BV…'],
          ['Maximum length', '20 minutes'],
          ['Maximum size', '95MB'],
          ['Typical quality', 'up to 720p; 480p when the address is restricted'],
          ['Processing time', '30–90 seconds'],
          ['File retention', 'about 2 hours'],
        ],
      },
      related: [
        { href: '/en/download-bilibili-subtitles/', label: 'Download Bilibili subtitles' },
        { href: '/en/blog/download-video-subtitles/', label: 'What SRT/VTT subtitles are' },
        { href: '/en/blog/reuploading-without-copyright-strikes/', label: 'Reuploading without strikes' },
      ],
      faq: [
        ['Can I download subtitles or danmaku?', 'No. The MP4 contains picture and sound only; public captions come from the Bilibili subtitle page, and danmaku is not returned.'],
        ['Do bilibili.com links work?', 'Yes. Both bilibili.com and bilibili.tv are accepted, including links with a language prefix.'],
        ['Why is the video only 480p?', 'Bilibili may limit quality by the server’s address. The page takes the best rendition available within 720p and 95MB.'],
      ],
    },
  },

  hongguo: {
    vi: {
      sections: [
        {
          h2: 'Vì sao file chỉ dài vài giây',
          paragraphs: [
            'Hongguoduanju công khai một file cho mỗi tập, nhưng không phải tập nào cũng phát hành bản đầy đủ cho khách chưa đăng nhập. Có trang chỉ trả một đoạn xem trước khoảng 10 giây. Trang này lưu đúng file nền tảng phục vụ, không cắt bớt và không kéo dài.',
            'Đây không phải lỗi tải hay lỗi mạng. Nếu file ngắn hơn tập bạn đang xem, giới hạn nằm ở nguồn: bản công khai chỉ có đoạn đó.',
          ],
        },
        {
          h2: 'Kiểm tra thời lượng trước khi dùng',
          paragraphs: [
            'Khi job xong, xem trước file và kiểm tra thời lượng trước khi đưa vào một video khác. Một đoạn 10 giây không đủ cho một recap hoặc một video review; dùng nó sẽ khiến video của bạn hụt nội dung.',
            'Trang nhận tối đa 5 link một lần, mỗi file tối đa 20 phút và 95MB. Nếu bạn cần cả bộ, hãy dán từng tập; trang không tự tìm các tập khác.',
          ],
          bullets: [
            'Link /player/… công khai.',
            'Một link cho một tập; tối đa 5 link mỗi lần.',
            'File có thể chỉ là bản xem trước.',
            'Không vượt đăng nhập hoặc DRM.',
          ],
        },
        {
          h2: 'Dùng video Hongguoduanju đúng cách',
          paragraphs: [
            'Phim ngắn cũng có bản quyền. Tải một đoạn xem trước để tham khảo khác với việc đăng lại cả bộ lên kênh của bạn. Nếu bạn làm recap, hãy biến đổi nội dung, ghi nguồn và kiểm tra quyền sử dụng trước khi đăng.',
            'Nếu bạn là chủ sở hữu nội dung, giữ file gốc ở nơi khác; trang chỉ lưu khoảng 2 giờ và link tải hết hạn sau 30 phút.',
          ],
        },
      ],
      table: {
        head: ['Thông số', 'Giá trị'],
        rows: [
          ['Loại link', 'hongguoduanju.com/player/…'],
          ['Thời lượng tối đa', '20 phút'],
          ['Dung lượng tối đa', '95MB'],
          ['Chất lượng thường gặp', 'theo nguồn; có thể chỉ là bản xem trước'],
          ['Thời gian xử lý', '30–90 giây'],
          ['Lưu file trên máy chủ', 'khoảng 2 giờ'],
        ],
      },
      related: [
        { href: '/blog/tool-tom-tat-phim-tu-dong/', label: 'Tool tóm tắt phim tự động' },
        { href: '/blog/cach-lam-video-tom-tat-phim/', label: 'Cách làm video tóm tắt phim' },
        { href: '/blog/kiem-tien-youtube-voi-video-tom-tat-phim/', label: 'Kiếm tiền với video tóm tắt phim' },
      ],
      faq: [
        ['File ngắn có phải lỗi không?', 'Không. Nền tảng chỉ phục vụ bản xem trước cho khách chưa đăng nhập; trang lưu đúng file công khai đó.'],
        ['Có tải cả bộ phim một lần không?', 'Không. Mỗi link là một tập; bạn có thể dán tối đa 5 link mỗi lần và phải tự lấy link từng tập.'],
        ['Có vượt được đăng nhập hoặc DRM không?', 'Không. Trang chỉ đọc file công khai; tập cần đăng nhập hoặc bảo vệ bản quyền sẽ trả lỗi.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Why the file is only a few seconds long',
          paragraphs: [
            'Hongguoduanju publishes one public file per episode, but not every episode is released in full to a visitor who is not logged in. Some pages serve only a preview of about ten seconds. This page saves exactly the file the platform serves; it does not trim it or stretch it.',
            'That is not a download failure or a network error. If the file is shorter than the episode you are watching, the limit is in the source: the public copy is only that excerpt.',
          ],
        },
        {
          h2: 'Check the duration before you use it',
          paragraphs: [
            'When the job finishes, preview the file and check its duration before putting it into another video. A ten-second clip is not enough for a recap or a review; using it will leave your video short of the story.',
            'The page accepts up to five links at a time, with each file capped at 20 minutes and 95MB. If you need a whole series, paste each episode; the page does not find the other episodes for you.',
          ],
          bullets: [
            'A public /player/… link.',
            'One link per episode; up to five links at a time.',
            'The file may be a preview only.',
            'No bypass of a login or DRM.',
          ],
        },
        {
          h2: 'Using Hongguoduanju video lawfully',
          paragraphs: [
            'Short drama is still copyrighted. Saving a preview to study it is different from reposting a whole series on your channel. If you make recaps, transform the material, credit the source and check the usage rights before publishing.',
            'If you own the content, keep the master elsewhere; this page holds files for about two hours and download links expire after 30 minutes.',
          ],
        },
      ],
      table: {
        head: ['Spec', 'Value'],
        rows: [
          ['Link types', 'hongguoduanju.com/player/…'],
          ['Maximum length', '20 minutes'],
          ['Maximum size', '95MB'],
          ['Typical quality', 'whatever the source serves; may be a preview'],
          ['Processing time', '30–90 seconds'],
          ['File retention', 'about 2 hours'],
        ],
      },
      related: [
        { href: '/en/blog/automatic-movie-recap-tool/', label: 'Automatic movie recap tool' },
        { href: '/en/blog/how-to-make-a-movie-recap/', label: 'How to make a movie recap' },
        { href: '/en/blog/make-money-with-movie-recaps/', label: 'Make money with movie recaps' },
      ],
      faq: [
        ['Is a short file a bug?', 'No. The platform serves a preview to visitors who are not logged in; the page saves that public file as it is.'],
        ['Can I download a whole series at once?', 'No. One link is one episode; you can paste up to five links at a time and must collect each episode link yourself.'],
        ['Can it bypass a login or DRM?', 'No. The page reads public files only; episodes that require a login or are protected return an error.'],
      ],
    },
  },

  iqiyi: {
    vi: {
      sections: [
        {
          h2: 'Vì sao tập 40 phút không tải được',
          paragraphs: [
            'Phần lớn phim truyền hình iQiyi dài 40 phút hoặc hơn, trong khi trang chỉ nhận video tối đa 20 phút. Vì vậy một tập đầy đủ thường bị từ chối ngay từ bước kiểm tra, trước khi máy kịp tải.',
            'Trang phù hợp với đoạn ngắn, trailer, clip công khai hoặc tập đặc biệt có thời lượng trong giới hạn. Trang không cắt tập dài thành nhiều phần và không vượt qua gói thành viên hay DRM.',
          ],
        },
        {
          h2: 'Chất lượng và khu vực',
          paragraphs: [
            'iQiyi có thể trả 480p cho một địa chỉ bị giới hạn, dù bản trong app là 720p hoặc cao hơn. Trang lấy bản cao nhất trong giới hạn 720p và 95MB; file vẫn là video thật, chỉ thấp hơn nguồn.',
            'Một số tập cần đăng nhập, gói thành viên hoặc quyền truy cập theo khu vực. Những tập đó không có file công khai để đọc, nên job trả lỗi thay vì một video.',
          ],
          bullets: [
            'Link /play/… của iq.com hoặc iqiyi.com.',
            'Tập công khai, tối đa 20 phút.',
            'Tối đa 720p và 95MB.',
            'Không vượt gói thành viên hoặc khoá khu vực.',
          ],
        },
        {
          h2: 'Dùng video iQiyi đúng cách',
          paragraphs: [
            'Phim và chương trình iQiyi thuộc bản quyền của đơn vị sản xuất. Tải một clip công khai để bình luận hoặc làm tư liệu khác với việc đăng lại cả tập phim lên kênh của bạn.',
            'Nếu bạn làm video review hoặc recap, hãy biến đổi nội dung, ghi nguồn và kiểm tra quyền sử dụng. Trang chỉ lưu file khoảng 2 giờ, nên hãy giữ bản gốc ở nơi khác nếu bạn sở hữu nó.',
          ],
        },
      ],
      table: {
        head: ['Thông số', 'Giá trị'],
        rows: [
          ['Loại link', 'iq.com/play/…, iqiyi.com/v_….html'],
          ['Thời lượng tối đa', '20 phút'],
          ['Dung lượng tối đa', '95MB'],
          ['Chất lượng thường gặp', '480p–720p, tuỳ nguồn'],
          ['Thời gian xử lý', '30–90 giây'],
          ['Lưu file trên máy chủ', 'khoảng 2 giờ'],
        ],
      },
      related: [
        { href: '/blog/tool-tom-tat-phim-tu-dong/', label: 'Tool tóm tắt phim tự động' },
        { href: '/blog/cach-lam-video-tom-tat-phim/', label: 'Cách làm video tóm tắt phim' },
        { href: '/blog/reup-video-khong-bi-danh-ban-quyen/', label: 'Reup video không bị đánh bản quyền' },
      ],
      faq: [
        ['Tập cần gói VIP có tải được không?', 'Không. Tập chỉ dành cho thành viên không trả file công khai; trang không vượt qua gói thành viên.'],
        ['Có tải được phụ đề iQiyi không?', 'Không. Trang này chỉ trả video MP4. Phụ đề chỉ lấy được khi nền tảng công khai một track riêng, và iQiyi thường không làm vậy.'],
        ['Tải phim lẻ có được không?', 'Chỉ khi phim có link /play/… công khai và thời lượng nằm trong giới hạn 20 phút. Phần lớn phim lẻ dài hơn nên sẽ bị từ chối.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Why a 40-minute episode will not download',
          paragraphs: [
            'Most iQiyi drama episodes run 40 minutes or more, while this page accepts videos up to 20 minutes. A full episode is therefore refused at the check, before the machine downloads anything.',
            'The page fits short clips, trailers, public excerpts or specials that fall within the limit. It does not split a long episode into parts, and it does not bypass a membership or DRM.',
          ],
        },
        {
          h2: 'Quality and region',
          paragraphs: [
            'iQiyi may serve 480p to a restricted address even when the app shows 720p or higher. The page takes the best rendition within 720p and 95MB; the file is still a real video, just lower than the source.',
            'Some episodes need a login, a membership or region access. Those have no public file to read, so the job reports an error instead of a video.',
          ],
          bullets: [
            'A /play/… link from iq.com or iqiyi.com.',
            'A public episode, up to 20 minutes.',
            'Up to 720p and 95MB.',
            'No bypass of a membership or a region lock.',
          ],
        },
        {
          h2: 'Using iQiyi video lawfully',
          paragraphs: [
            'iQiyi films and shows belong to their producers. Saving a public clip to comment on or use as reference is different from reposting a whole episode on your channel.',
            'If you make a review or recap, transform the material, credit the source and check the usage rights. The page keeps files for about two hours, so keep the master elsewhere if you own it.',
          ],
        },
      ],
      table: {
        head: ['Spec', 'Value'],
        rows: [
          ['Link types', 'iq.com/play/…, iqiyi.com/v_….html'],
          ['Maximum length', '20 minutes'],
          ['Maximum size', '95MB'],
          ['Typical quality', '480p–720p, depending on the source'],
          ['Processing time', '30–90 seconds'],
          ['File retention', 'about 2 hours'],
        ],
      },
      related: [
        { href: '/en/blog/automatic-movie-recap-tool/', label: 'Automatic movie recap tool' },
        { href: '/en/blog/how-to-make-a-movie-recap/', label: 'How to make a movie recap' },
        { href: '/en/blog/reuploading-without-copyright-strikes/', label: 'Reuploading without strikes' },
      ],
      faq: [
        ['Can I download a members-only episode?', 'No. Episodes reserved for members do not expose a public file; the page does not bypass a membership.'],
        ['Can I download iQiyi subtitles?', 'No. This page returns an MP4 only. Subtitles can be fetched only when the platform exposes a separate public track, which iQiyi usually does not.'],
        ['Do films work?', 'Only when a film has a public /play/… link and runs within the 20-minute limit. Most films are longer and will be refused.'],
      ],
    },
  },
};

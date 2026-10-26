/**
 * The six platform landing pages.
 *
 * Each is a real page of its own — title, canonical, hreflang, FAQ — rather
 * than one page repeating six words, because the search that brings somebody
 * here is "tải video TikTok", not "tải video". The form on every page is a
 * plain GET to `/downloads/?url=…`: verification and the queue stay in one
 * place, and the link a visitor already pasted survives the jump.
 *
 * The copy is deliberately about the platform (link shapes, what can fail,
 * what its public file actually is), not the same paragraph with the name
 * swapped. Two pages that differ only in a keyword are one page to a search
 * engine and a waste to a reader.
 */

export const PLATFORM_PAGES = [
  {
    key: 'tiktok',
    label: 'TikTok',
    accent: '#22d3ee',
    path: { vi: '/tai-video-tiktok/', en: '/en/download-tiktok/' },
    placeholder: 'https://www.tiktok.com/@kenh/video/…',
    meta: {
      vi: {
        title: 'Tải video TikTok về máy miễn phí | AutoReel',
        description:
          'Dán link TikTok công khai, chờ vài chục giây rồi tải file MP4 về máy. Miễn phí, không cần đăng nhập, video tối đa 20 phút.',
      },
      en: {
        title: 'Download TikTok videos free | AutoReel',
        description:
          'Paste a public TikTok link, wait a few seconds and save the MP4. Free, no login, videos up to 20 minutes.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải video TikTok về máy',
        lead:
          'Dán link video TikTok công khai, chờ máy xử lý rồi tải file MP4. Không cần cài app, không cần tài khoản.',
        points: ['Không watermark thêm', 'File MP4 về thẳng máy', 'Không lưu lâu trên máy chủ'],
        intro:
          'TikTok không có nút tải trên bản web. Trang này nhận link video công khai — dạng @kenh/video/… hoặc link rút gọn vm.tiktok.com — rồi trả về một file MP4. Video để ở chế độ công khai; video riêng tư hoặc cần đăng nhập sẽ không tải được.',
        steps: [
          ['Sao chép link', 'Mở video trên TikTok, bấm Chia sẻ → Sao chép liên kết.'],
          ['Dán vào ô', 'Dán một hoặc nhiều link, mỗi dòng một link, tối đa 5 link một lần.'],
          ['Tải file', 'Chờ 30–60 giây, xem trước nếu muốn rồi bấm Tải file về máy.'],
        ],
        examples: [
          'https://www.tiktok.com/@kenh/video/1234567890123456789',
          'https://vm.tiktok.com/ZMabc123/',
        ],
        notes: [
          'Video công khai, tối đa 20 phút và 95MB.',
          'Link rút gọn vm./vt. vẫn được; hệ thống tự theo dõi chuyển hướng.',
          'Video có watermark sẵn từ nguồn có thể vẫn còn watermark — trang chỉ tải bản nền tảng trả về.',
          'File trên máy chủ tự xoá sau khoảng 2 giờ; link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Có phải video nào trên TikTok cũng tải được?', 'Không. Video công khai thường được; video riêng tư, video của tài khoản đã khoá hoặc video cần đăng nhập thì không.'],
          ['Tải video TikTok có mất phí không?', 'Không. Trang miễn phí, không cần tài khoản, không hỏi email hay thẻ.'],
          ['Tải được bao nhiêu video một lần?', 'Tối đa 5 link mỗi lần. Mỗi video tối đa 20 phút và 95MB.'],
          ['Video tải về có bị chèn logo AutoReel không?', 'Không. File là bản nền tảng trả về; trang không thêm logo hay watermark.'],
        ],
      },
      en: {
        h1: 'Download TikTok videos to your device',
        lead:
          'Paste a public TikTok link, wait for the downloader and save the MP4. No app, no account.',
        points: ['No added watermark', 'MP4 straight to your device', 'Files are not kept long'],
        intro:
          'TikTok has no download button on the web. This page accepts a public video link — @channel/video/… or a vm.tiktok.com short link — and returns an MP4. The video must be public; private or login-only videos cannot be fetched.',
        steps: [
          ['Copy the link', 'Open the video on TikTok, tap Share → Copy link.'],
          ['Paste it', 'Paste one or several links, one per line, up to five at a time.'],
          ['Save the file', 'Wait 30–60 seconds, preview it if you like, then press Save.'],
        ],
        examples: [
          'https://www.tiktok.com/@channel/video/1234567890123456789',
          'https://vm.tiktok.com/ZMabc123/',
        ],
        notes: [
          'Public videos, up to 20 minutes and 95MB.',
          'vm./vt. short links work; the downloader follows the redirect.',
          'A watermark already present in the source can remain — the page only saves what the platform serves.',
          'Server files are deleted after about 2 hours; download links expire after 30 minutes.',
        ],
        faq: [
          ['Can every TikTok video be downloaded?', 'No. Public videos usually work; private videos, locked accounts and login-only videos do not.'],
          ['Is it free?', 'Yes. No account, no email, no card.'],
          ['How many videos at once?', 'Up to five links per submission. Each video can be up to 20 minutes and 95MB.'],
          ['Does AutoReel add a logo?', 'No. The file is the one the platform served; the page adds nothing.'],
        ],
      },
    },
  },
  {
    key: 'douyin',
    label: 'Douyin',
    accent: '#f59e0b',
    path: { vi: '/tai-video-douyin/', en: '/en/download-douyin/' },
    placeholder: 'https://www.douyin.com/video/…',
    meta: {
      vi: {
        title: 'Tải video Douyin về máy miễn phí | AutoReel',
        description:
          'Tải video Douyin công khai về MP4: dán link douyin.com/video/… hoặc link có modal_id. Miễn phí, không cần đăng nhập, tối đa 20 phút.',
      },
      en: {
        title: 'Download Douyin videos free | AutoReel',
        description:
          'Save public Douyin videos as MP4: paste a douyin.com/video/… link or a modal_id link. Free, no login, up to 20 minutes.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải video Douyin về máy',
        lead:
          'Dán link Douyin công khai, máy mở trang video để lấy nguồn rồi trả file MP4 về máy.',
        points: ['Nhận link video và modal_id', 'Không cần tài khoản Douyin', 'File MP4 về thẳng máy'],
        intro:
          'Douyin thường chỉ hiện video trong một trang động, nên máy tải phải mở trang như một trình duyệt thật để lấy nguồn. Vì vậy video Douyin có thể chậm hơn các nền tảng khác vài chục giây. Link dạng douyin.com/video/…, douyin.com/jingxuan?modal_id=… và v.douyin.com/… đều được.',
        steps: [
          ['Sao chép link chia sẻ', 'Trong Douyin, bấm Chia sẻ → Sao chép liên kết; link có thể ở dạng v.douyin.com hoặc modal_id.'],
          ['Dán vào ô', 'Mỗi dòng một link, tối đa 5 link một lần.'],
          ['Chờ máy lấy nguồn', 'Douyin cần thêm thời gian để mở trang và ký yêu cầu; thường 1–3 phút mỗi video.'],
        ],
        examples: [
          'https://www.douyin.com/video/7000000000000000000',
          'https://www.douyin.com/jingxuan?modal_id=7000000000000000000',
          'https://v.douyin.com/abc123/',
        ],
        notes: [
          'Video công khai, tối đa 20 phút và 95MB.',
          'Douyin có thể chặn IP hoặc đòi đăng nhập; khi đó video trả lỗi thay vì tải được.',
          'Video lớn hơn 95MB sẽ được hạ về 480p để vừa giới hạn.',
          'File trên máy chủ tự xoá sau khoảng 2 giờ; link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Vì sao video Douyin tải lâu hơn?', 'Douyin không trả file trực tiếp; máy phải mở trang bằng trình duyệt, ký yêu cầu rồi mới lấy được nguồn.'],
          ['Link modal_id có dùng được không?', 'Có. Dán nguyên link có ?modal_id=… là được.'],
          ['Có cần tài khoản Douyin không?', 'Không. Nhưng video cần đăng nhập hoặc không công khai sẽ không tải được.'],
          ['Có giới hạn gì?', 'Tối đa 5 link một lần; mỗi video 20 phút và 95MB.'],
        ],
      },
      en: {
        h1: 'Download Douyin videos to your device',
        lead:
          'Paste a public Douyin link; the downloader opens the video page to resolve the source and returns an MP4.',
        points: ['Video and modal_id links', 'No Douyin account needed', 'MP4 straight to your device'],
        intro:
          'Douyin serves most videos inside a dynamic page, so the download machine opens it like a real browser before it can resolve the source. That makes Douyin slower than the other platforms — often one to three minutes. Links of the form douyin.com/video/…, douyin.com/jingxuan?modal_id=… and v.douyin.com/… are accepted.',
        steps: [
          ['Copy the share link', 'In Douyin, tap Share → Copy link; it may be a v.douyin.com link or carry modal_id.'],
          ['Paste it', 'One link per line, up to five at a time.'],
          ['Wait for the source', 'Douyin needs extra time to open the page and sign the request.'],
        ],
        examples: [
          'https://www.douyin.com/video/7000000000000000000',
          'https://www.douyin.com/jingxuan?modal_id=7000000000000000000',
          'https://v.douyin.com/abc123/',
        ],
        notes: [
          'Public videos, up to 20 minutes and 95MB.',
          'Douyin may block an address or require a login; the job then reports an error instead of a file.',
          'Videos above 95MB are reduced to 480p to fit the limit.',
          'Server files are deleted after about 2 hours; links expire after 30 minutes.',
        ],
        faq: [
          ['Why is Douyin slower?', 'The downloader has to open the page in a real browser, sign the request and only then resolve the source.'],
          ['Do modal_id links work?', 'Yes. Paste the link with ?modal_id=… exactly as shared.'],
          ['Do I need a Douyin account?', 'No. Videos that require a login, or are not public, cannot be fetched.'],
          ['What are the limits?', 'Five links per submission; 20 minutes and 95MB per video.'],
        ],
      },
    },
  },
  {
    key: 'youtube',
    label: 'YouTube',
    accent: '#ef4444',
    path: { vi: '/tai-video-youtube/', en: '/en/download-youtube/' },
    placeholder: 'https://www.youtube.com/watch?v=…',
    meta: {
      vi: {
        title: 'Tải video YouTube về máy miễn phí | AutoReel',
        description:
          'Dán link YouTube, Shorts hoặc youtu.be để tải MP4 về máy. Miễn phí, không cần đăng nhập, video tối đa 20 phút và 95MB.',
      },
      en: {
        title: 'Download YouTube videos free | AutoReel',
        description:
          'Paste a YouTube, Shorts or youtu.be link and save the MP4. Free, no login, up to 20 minutes and 95MB.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải video YouTube về máy',
        lead:
          'Dán link YouTube, YouTube Shorts hoặc youtu.be; chờ máy xử lý rồi tải MP4. Không cần cài tiện ích.',
        points: ['Watch, Shorts và youtu.be', 'Không cần đăng nhập', 'File MP4 về thẳng máy'],
        intro:
          'YouTube không có nút tải trong trình duyệt. Trang này nhận link watch, link Shorts và link rút gọn youtu.be của video công khai. Playlist và livestream không được nhận; video dài quá 20 phút cũng bị từ chối trước khi tải.',
        steps: [
          ['Sao chép link video', 'Dùng nút Chia sẻ của YouTube hoặc sao chép địa chỉ trên thanh trình duyệt.'],
          ['Dán vào ô', 'Mỗi dòng một link, tối đa 5 link một lần.'],
          ['Tải MP4', 'Chờ 30–60 giây; video xong là có nút tải riêng.'],
        ],
        examples: [
          'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          'https://youtu.be/dQw4w9WgXcQ',
          'https://youtube.com/shorts/abc123456',
        ],
        notes: [
          'Video công khai, tối đa 20 phút và 95MB.',
          'Không nhận playlist, livestream hoặc video riêng tư.',
          'Chất lượng phụ thuộc vào định dạng YouTube trả cho máy; có thể thấp hơn video gốc.',
          'File trên máy chủ tự xoá sau khoảng 2 giờ; link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Tải được YouTube Shorts không?', 'Có. Dán link /shorts/… như link watch thường.'],
          ['Sao video chỉ có 360p hoặc 720p?', 'Máy lấy định dạng cao nhất trong giới hạn 720p và 95MB; YouTube có thể chỉ trả bản thấp hơn cho một số video.'],
          ['Có tải playlist được không?', 'Không. Trang chỉ nhận một video mỗi link; playlist bị từ chối.'],
          ['Có cần tài khoản YouTube không?', 'Không. Video công khai không cần đăng nhập; video riêng tư hoặc yêu cầu thành viên thì không tải được.'],
        ],
      },
      en: {
        h1: 'Download YouTube videos to your device',
        lead:
          'Paste a YouTube, YouTube Shorts or youtu.be link, wait for the machine and save the MP4. No extension needed.',
        points: ['Watch, Shorts and youtu.be', 'No login', 'MP4 straight to your device'],
        intro:
          'YouTube has no download button in the browser. This page accepts watch links, Shorts links and youtu.be short links for public videos. Playlists and livestreams are refused, and videos longer than 20 minutes are rejected before the download starts.',
        steps: [
          ['Copy the video link', 'Use YouTube’s Share button or copy the address bar.'],
          ['Paste it', 'One link per line, up to five at a time.'],
          ['Save the MP4', 'Wait 30–60 seconds; each finished video gets its own button.'],
        ],
        examples: [
          'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          'https://youtu.be/dQw4w9WgXcQ',
          'https://youtube.com/shorts/abc123456',
        ],
        notes: [
          'Public videos, up to 20 minutes and 95MB.',
          'No playlists, livestreams or private videos.',
          'Quality depends on the format YouTube serves to the machine; it can be lower than the source.',
          'Server files are deleted after about 2 hours; links expire after 30 minutes.',
        ],
        faq: [
          ['Do Shorts work?', 'Yes. Paste a /shorts/… link like any watch link.'],
          ['Why is the file only 360p or 720p?', 'The machine takes the best format within 720p and 95MB; YouTube may serve a lower one for some videos.'],
          ['Can I download a playlist?', 'No. One video per link; playlists are refused.'],
          ['Do I need a YouTube account?', 'No. Public videos need no login; private or members-only videos cannot be fetched.'],
        ],
      },
    },
  },
  {
    key: 'bilibili',
    label: 'Bilibili',
    accent: '#38bdf8',
    path: { vi: '/tai-video-bilibili/', en: '/en/download-bilibili/' },
    placeholder: 'https://www.bilibili.tv/vi/video/…',
    meta: {
      vi: {
        title: 'Tải video Bilibili về máy miễn phí | AutoReel',
        description:
          'Dán link Bilibili hoặc Bilibili.tv để tải MP4 về máy. Miễn phí, không cần đăng nhập; video tối đa 20 phút và 95MB.',
      },
      en: {
        title: 'Download Bilibili videos free | AutoReel',
        description:
          'Paste a Bilibili or Bilibili.tv link and save the MP4. Free, no login; up to 20 minutes and 95MB.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải video Bilibili về máy',
        lead:
          'Nhận link video Bilibili.tv và Bilibili.com, kể cả link có tiền tố ngôn ngữ như /vi/video/…',
        points: ['Bilibili.tv và Bilibili.com', 'Không cần đăng nhập', 'File MP4 về thẳng máy'],
        intro:
          'Bilibili có hai tên miền thường gặp: bilibili.tv cho bản quốc tế và bilibili.com cho bản Trung. Trang nhận link video ở cả hai; link có /vi/, /en/… phía trước vẫn được. Tập phim dài quá 20 phút sẽ bị từ chối — giới hạn này áp dụng cho mọi nền tảng.',
        steps: [
          ['Sao chép link video', 'Từ trang video Bilibili, sao chép địa chỉ hoặc dùng nút chia sẻ.'],
          ['Dán vào ô', 'Mỗi dòng một link, tối đa 5 link một lần.'],
          ['Tải MP4', 'Chờ máy xử lý; xong là có nút tải riêng cho từng video.'],
        ],
        examples: [
          'https://www.bilibili.tv/vi/video/4787314444868096',
          'https://www.bilibili.com/video/BV1xx411c7mD',
        ],
        notes: [
          'Video công khai, tối đa 20 phút và 95MB.',
          'Tập phim dài hơn 20 phút bị từ chối; đây là giới hạn của trang, không phải lỗi mạng.',
          'Bilibili có thể trả bản 480p khi IP bị hạn chế; file vẫn là video thật.',
          'File trên máy chủ tự xoá sau khoảng 2 giờ; link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Link /vi/video/… có dùng được không?', 'Có. Tiền tố ngôn ngữ không ảnh hưởng; hệ thống nhận cả bilibili.tv và bilibili.com.'],
          ['Vì sao tập phim bị lỗi quá dài?', 'Trang chỉ nhận video tối đa 20 phút. Tập dài hơn bị từ chối trước khi tải.'],
          ['Có cần tài khoản Bilibili không?', 'Không. Video công khai không cần đăng nhập; video cần tài khoản hoặc khu vực sẽ không tải được.'],
          ['Chất lượng tối đa là bao nhiêu?', 'Trong giới hạn 720p và 95MB; một số video chỉ có bản thấp hơn.'],
        ],
      },
      en: {
        h1: 'Download Bilibili videos to your device',
        lead:
          'Bilibili.tv and Bilibili.com links are accepted, including paths with a language prefix such as /vi/video/…',
        points: ['Bilibili.tv and Bilibili.com', 'No login', 'MP4 straight to your device'],
        intro:
          'Bilibili has two common domains: bilibili.tv for the international site and bilibili.com for the Chinese one. Both are accepted, and a /vi/, /en/… prefix makes no difference. Episodes longer than 20 minutes are refused — that limit applies to every platform here.',
        steps: [
          ['Copy the video link', 'From the Bilibili video page, copy the address or use its share button.'],
          ['Paste it', 'One link per line, up to five at a time.'],
          ['Save the MP4', 'Wait for the machine; each finished video gets its own button.'],
        ],
        examples: [
          'https://www.bilibili.tv/vi/video/4787314444868096',
          'https://www.bilibili.com/video/BV1xx411c7mD',
        ],
        notes: [
          'Public videos, up to 20 minutes and 95MB.',
          'Episodes longer than 20 minutes are refused; that is the page’s limit, not a network error.',
          'Bilibili may serve 480p when an address is limited; the file is still a real video.',
          'Server files are deleted after about 2 hours; links expire after 30 minutes.',
        ],
        faq: [
          ['Do /vi/video/… links work?', 'Yes. The language prefix does not matter; both bilibili.tv and bilibili.com are accepted.'],
          ['Why did a long episode fail?', 'The page accepts videos up to 20 minutes. Longer episodes are rejected before downloading.'],
          ['Do I need a Bilibili account?', 'No. Public videos need no login; account-only or region-locked videos cannot be fetched.'],
          ['What is the maximum quality?', 'Within 720p and 95MB; some videos are only available lower.'],
        ],
      },
    },
  },
  {
    key: 'hongguo',
    label: 'Hongguoduanju',
    accent: '#fb7185',
    path: { vi: '/tai-video-hongguoduanju/', en: '/en/download-hongguoduanju/' },
    placeholder: 'https://hongguoduanju.com/player/…',
    meta: {
      vi: {
        title: 'Tải video Hongguoduanju về máy | AutoReel',
        description:
          'Dán link Hongguoduanju để tải file công khai về máy. Miễn phí, không cần đăng nhập; lưu ý một số video chỉ có bản xem trước ngắn.',
      },
      en: {
        title: 'Download Hongguoduanju videos | AutoReel',
        description:
          'Paste a Hongguoduanju link and save the public file. Free, no login; note that some videos only expose a short preview.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải video Hongguoduanju về máy',
        lead:
          'Nhận link /player/… công khai. Một số video chỉ có bản xem trước ngắn do nền tảng giới hạn, không phải lỗi tải.',
        points: ['Nhận link /player/…', 'Không cần đăng nhập', 'Nói rõ khi nguồn chỉ có bản ngắn'],
        intro:
          'Hongguoduanju (红果短剧) công khai một file video cho mỗi tập, nhưng không phải tập nào cũng phát hành bản đầy đủ cho khách chưa đăng nhập. Có trường hợp trang chỉ trả một đoạn xem trước khoảng 10 giây. Trang này tải đúng file mà nền tảng phục vụ; nếu file ngắn hơn tập bạn đang xem, đó là giới hạn của nguồn.',
        steps: [
          ['Sao chép link tập phim', 'Mở tập trên Hongguoduanju, sao chép địa chỉ dạng /player/…'],
          ['Dán vào ô', 'Mỗi dòng một link, tối đa 5 link một lần.'],
          ['Tải file', 'Chờ máy lấy file công khai; xem trước để biết file dài bao nhiêu.'],
        ],
        examples: ['https://hongguoduanju.com/player/7690494161551625241'],
        notes: [
          'Chỉ video công khai; một số tập cần đăng nhập nên không tải được.',
          'Một số video chỉ có bản xem trước ngắn — kiểm tra thời lượng trước khi dùng.',
          'Tối đa 20 phút và 95MB mỗi file; tối đa 5 link một lần.',
          'File trên máy chủ tự xoá sau khoảng 2 giờ; link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Vì sao file chỉ dài vài giây?', 'Nền tảng chỉ phục vụ bản xem trước cho khách chưa đăng nhập. Trang tải đúng file công khai đó, không cắt bớt.'],
          ['Có tải được tập đầy đủ không?', 'Chỉ khi nền tảng phục vụ bản đầy đủ cho link công khai. Trang không vượt qua đăng nhập hay DRM.'],
          ['Có cần tài khoản không?', 'Không cần tài khoản để dùng trang, nhưng nguồn có thể yêu cầu đăng nhập cho một số tập.'],
          ['Giới hạn là gì?', '5 link một lần; mỗi file 20 phút và 95MB.'],
        ],
      },
      en: {
        h1: 'Download Hongguoduanju videos to your device',
        lead:
          'Accepts public /player/… links. Some videos only expose a short preview because of the platform, not because the download failed.',
        points: ['Accepts /player/… links', 'No login', 'Says so when the source is only a preview'],
        intro:
          'Hongguoduanju publishes one public video file per episode, but not every episode is released in full to a visitor who is not logged in. Some pages only serve a preview of about ten seconds. The page saves exactly the file the platform serves; if it is shorter than the episode you are watching, that is the source’s limit.',
        steps: [
          ['Copy the episode link', 'Open the episode on Hongguoduanju and copy the /player/… address.'],
          ['Paste it', 'One link per line, up to five at a time.'],
          ['Save the file', 'Wait for the public file; preview it to see how long it is.'],
        ],
        examples: ['https://hongguoduanju.com/player/7690494161551625241'],
        notes: [
          'Public videos only; some episodes require a login and cannot be fetched.',
          'Some videos only expose a short preview — check the duration before using it.',
          'Up to 20 minutes and 95MB per file; up to five links at a time.',
          'Server files are deleted after about 2 hours; links expire after 30 minutes.',
        ],
        faq: [
          ['Why is the file only a few seconds?', 'The platform serves a preview to visitors who are not logged in. The page saves that public file and does not trim it.'],
          ['Can I get the full episode?', 'Only when the platform serves the full file for a public link. The page does not bypass a login or DRM.'],
          ['Do I need an account?', 'No account is needed for this page, but the source may require a login for some episodes.'],
          ['What are the limits?', 'Five links per submission; 20 minutes and 95MB per file.'],
        ],
      },
    },
  },
  {
    key: 'iqiyi',
    label: 'iQiyi',
    accent: '#a78bfa',
    path: { vi: '/tai-video-iqiyi/', en: '/en/download-iqiyi/' },
    placeholder: 'https://www.iq.com/play/…',
    meta: {
      vi: {
        title: 'Tải video iQiyi về máy miễn phí | AutoReel',
        description:
          'Dán link iQiyi hoặc iq.com để tải tập phim công khai về máy. Miễn phí, không cần đăng nhập; tập tối đa 20 phút.',
      },
      en: {
        title: 'Download iQiyi videos free | AutoReel',
        description:
          'Paste an iQiyi or iq.com link and save a public episode. Free, no login; episodes up to 20 minutes.',
      },
    },
    copy: {
      vi: {
        h1: 'Tải video iQiyi về máy',
        lead:
          'Nhận link /play/… của iQiyi và iq.com; tập phim công khai tải được về MP4.',
        points: ['iq.com và iqiyi.com', 'Không cần đăng nhập', 'File MP4 về thẳng máy'],
        intro:
          'iQiyi dùng link /play/… cho tập phim; nhiều tập mở công khai, nhưng một số cần đăng nhập, cần gói thành viên hoặc bị giới hạn theo khu vực. Trang nhận link công khai và tải file nền tảng phục vụ. Tập dài quá 20 phút bị từ chối trước khi tải.',
        steps: [
          ['Sao chép link tập', 'Mở tập trên iQiyi hoặc iq.com, sao chép địa chỉ /play/…'],
          ['Dán vào ô', 'Mỗi dòng một link, tối đa 5 link một lần.'],
          ['Tải MP4', 'Chờ máy xử lý; xong là có nút tải riêng.'],
        ],
        examples: [
          'https://www.iq.com/play/fated-hearts-episode-1-1ggw7a63yug',
          'https://www.iqiyi.com/v_1234567890.html',
        ],
        notes: [
          'Tập công khai, tối đa 20 phút và 95MB.',
          'Tập cần đăng nhập, gói thành viên hoặc bị khoá khu vực sẽ không tải được.',
          'Một số tập chỉ có bản 480p do nguồn giới hạn chất lượng.',
          'File trên máy chủ tự xoá sau khoảng 2 giờ; link tải hết hạn sau 30 phút.',
        ],
        faq: [
          ['Tập phim iQiyi dài 40 phút có tải được không?', 'Không. Giới hạn của trang là 20 phút mỗi video; tập dài hơn bị từ chối.'],
          ['Có cần gói thành viên iQiyi không?', 'Không cho link công khai. Tập chỉ dành cho thành viên sẽ không tải được.'],
          ['Vì sao chỉ có 480p?', 'Nguồn có thể chỉ phục vụ bản thấp cho địa chỉ hiện tại; file vẫn là video thật.'],
          ['Có tải được phim lẻ không?', 'Chỉ khi phim có link /play/… công khai và thời lượng trong giới hạn.'],
        ],
      },
      en: {
        h1: 'Download iQiyi videos to your device',
        lead:
          'Accepts iQiyi and iq.com /play/… links; public episodes can be saved as MP4.',
        points: ['iq.com and iqiyi.com', 'No login', 'MP4 straight to your device'],
        intro:
          'iQiyi uses /play/… links for episodes; many are public, but some require a login, a membership or are region-locked. The page accepts public links and saves the file the platform serves. Episodes longer than 20 minutes are rejected before the download starts.',
        steps: [
          ['Copy the episode link', 'Open the episode on iQiyi or iq.com and copy the /play/… address.'],
          ['Paste it', 'One link per line, up to five at a time.'],
          ['Save the MP4', 'Wait for the machine; each finished episode gets its own button.'],
        ],
        examples: [
          'https://www.iq.com/play/fated-hearts-episode-1-1ggw7a63yug',
          'https://www.iqiyi.com/v_1234567890.html',
        ],
        notes: [
          'Public episodes, up to 20 minutes and 95MB.',
          'Episodes requiring a login, a membership or region access cannot be fetched.',
          'Some episodes only expose 480p because of the source; the file is still a real video.',
          'Server files are deleted after about 2 hours; links expire after 30 minutes.',
        ],
        faq: [
          ['Can a 40-minute iQiyi episode be downloaded?', 'No. The page limit is 20 minutes per video; longer episodes are refused.'],
          ['Do I need an iQiyi membership?', 'Not for public links. Members-only episodes cannot be fetched.'],
          ['Why is it only 480p?', 'The source may serve a lower rendition to the current address; the file is still a real video.'],
          ['Do films work?', 'Only when the film has a public /play/… link and its duration is within the limit.'],
        ],
      },
    },
  },
];

export const platformPath = (platform, lang) =>
  platform.path[lang] || platform.path.vi;

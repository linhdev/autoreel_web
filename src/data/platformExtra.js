/**
 * A second layer of platform copy, merged after `platformSections.js`.
 *
 * These sections answer the question the first layer leaves open: what the
 * page is not for. Batch behaviour, the difference between two lookalike
 * platforms, Shorts versus livestream, series versus one episode, previews
 * versus a full episode. Keeping it separate keeps the first file readable and
 * lets the builder append without touching the copy that is already written.
 */
export const PLATFORM_EXTRA = {
  tiktok: {
    vi: {
      sections: [
        {
          h2: 'Tải nhiều video cùng lúc',
          paragraphs: [
            'Mỗi lần gửi nhận tối đa 5 link, mỗi dòng một link. Trang xử lý từng video riêng và trả nút tải riêng, nên video ngắn xong trước không phải chờ video dài.',
            'Nếu đang gom video cho một chiến dịch, hãy đặt tên file theo thứ tự đăng và tải về cùng một thư mục. Trang không đổi tên file và không gộp nhiều video thành một file ZIP.',
          ],
          bullets: [
            'Tối đa 5 link mỗi lần.',
            'Mỗi video một file riêng.',
            'Không gộp thành ZIP.',
            'Không tự đổi tên file.',
          ],
        },
      ],
      faq: [
        ['Có tải được video trong album ảnh không?', 'Không. Album ảnh không phải video; trang chỉ nhận link video công khai.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Downloading several videos at once',
          paragraphs: [
            'Each submission accepts up to five links, one per line. Every video is processed on its own and gets its own download button, so a short clip does not wait for a long one.',
            'If you are collecting videos for a campaign, name the files in posting order and save them in one folder. The page does not rename files and does not pack several videos into a ZIP.',
          ],
          bullets: [
            'Up to five links per submission.',
            'One file per video.',
            'No ZIP bundle.',
            'No automatic renaming.',
          ],
        },
      ],
      faq: [
        ['Can I download a photo carousel?', 'No. A photo carousel is not a video; the page accepts public video links only.'],
      ],
    },
  },

  douyin: {
    vi: {
      sections: [
        {
          h2: 'Douyin và TikTok khác nhau ở đâu',
          paragraphs: [
            'Douyin là ứng dụng Trung Quốc cùng công ty với TikTok nhưng là hai nền tảng riêng: tài khoản, nội dung và cách chia sẻ link khác nhau. Link TikTok không dùng cho Douyin và ngược lại.',
            'Vì Douyin chạy trong môi trường Trung Quốc, máy chủ có thể bị chặn hoặc nhận bản thấp hơn. Nếu bạn cần video cho thị trường Việt, TikTok thường ổn định hơn; Douyin phù hợp khi chính nguồn là Douyin.',
          ],
          bullets: [
            'Hai nền tảng, hai loại link.',
            'Không chuyển link qua lại.',
            'Douyin có thể chậm hơn.',
            'Chất lượng tuỳ nguồn và khu vực.',
          ],
        },
      ],
      faq: [
        ['Link TikTok có dán vào trang Douyin được không?', 'Không. Hai nền tảng dùng hệ thống link khác nhau; hãy dùng đúng trang cho đúng nguồn.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'How Douyin differs from TikTok',
          paragraphs: [
            'Douyin is the Chinese app from the same company as TikTok, but the two are separate platforms with separate accounts, content and share links. A TikTok link does not work on Douyin, and the reverse is also true.',
            'Because Douyin runs in the Chinese market, the server can be blocked or receive a lower rendition. For Vietnamese-market video, TikTok is usually more stable; Douyin is the right page when Douyin itself is the source.',
          ],
          bullets: [
            'Two platforms, two link formats.',
            'Links are not interchangeable.',
            'Douyin can be slower.',
            'Quality depends on the source and region.',
          ],
        },
      ],
      faq: [
        ['Can I paste a TikTok link into the Douyin page?', 'No. The two platforms use different link systems; use the page that matches the source.'],
      ],
    },
  },

  youtube: {
    vi: {
      sections: [
        {
          h2: 'Shorts, video thường và livestream',
          paragraphs: [
            'Shorts là video dọc ngắn, dùng cùng link /shorts/… và tải như video thường. Video thường có thể dài hơn nhưng vẫn phải dưới 20 phút. Livestream và video đang phát trực tiếp không được nhận vì không có file hoàn chỉnh tại thời điểm yêu cầu.',
            'Nếu video vừa kết thúc livestream, hãy chờ YouTube xử lý xong bản ghi rồi thử lại. Nếu video là playlist, hãy mở từng video và dán link riêng; trang không tự tách playlist.',
            'Shorts thường ngắn hơn một phút, nên giới hạn 20 phút hiếm khi là lý do một Short tải lỗi. Khi Short lỗi, nguyên nhân thường là video riêng tư, bị xoá hoặc giới hạn khu vực.',
          ],
          bullets: [
            'Shorts dùng link /shorts/…',
            'Video thường dưới 20 phút.',
            'Không nhận livestream.',
            'Playlist phải tách thủ công.',
          ],
        },
      ],
      faq: [
        ['Video vừa livestream xong có tải được không?', 'Chỉ khi YouTube đã xử lý xong bản ghi và video chuyển sang dạng công khai thông thường. Trong lúc còn livestream, trang không có file để tải.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Shorts, regular videos and livestreams',
          paragraphs: [
            'Shorts are short vertical videos, use the same /shorts/… link and download like any other video. A regular video can be longer but must still be under 20 minutes. Livestreams and active broadcasts are refused because there is no complete file at the moment of the request.',
            'If a livestream has just ended, wait for YouTube to finish processing the recording and try again. If the link is a playlist, open each video and paste its link separately; the page does not split a playlist.',
            'Shorts are usually under a minute, so the 20-minute limit is rarely why a Short fails. When one does fail, the cause is almost always privacy, deletion or a region limit.',
          ],
          bullets: [
            'Shorts use a /shorts/… link.',
            'Regular videos under 20 minutes.',
            'No livestreams.',
            'Playlists must be split by hand.',
          ],
        },
      ],
      faq: [
        ['Can I download a just-finished livestream?', 'Only after YouTube has processed the recording and the video is available as a normal public video. While it is still live, there is no file to fetch.'],
      ],
    },
  },

  bilibili: {
    vi: {
      sections: [
        {
          h2: 'Video thường, series và bangumi',
          paragraphs: [
            'Bilibili có video lẻ, series nhiều tập và bangumi (phim hoạt hình Nhật/Trung). Trang nhận link của một video hoặc một tập; không tự tìm các tập còn lại và không tải cả series.',
            'Tập dài hơn 20 phút bị từ chối, nên nhiều tập phim sẽ không tải được. Với series ngắn hoặc clip lẻ trong giới hạn, mỗi tập là một link riêng; tối đa 5 link một lần.',
            'Link /video/BV… và /video/av… trỏ tới cùng một loại trang; cả hai đều được. Link tới trang cá nhân hoặc trang tìm kiếm không phải video và sẽ bị từ chối.',
          ],
          bullets: [
            'Một link một tập.',
            'Không tự tìm tập khác.',
            'Tập dài hơn 20 phút bị từ chối.',
            'Bangumi thường dài hơn giới hạn.',
          ],
        },
      ],
      faq: [
        ['Có tải cả series Bilibili được không?', 'Không. Mỗi link là một video hoặc một tập; bạn phải dán từng link và mỗi lần tối đa 5 link.'],
        ['Link dạng /video/av… có dùng được không?', 'Có, miễn là link trỏ tới video công khai; hệ thống nhận cả dạng BV và av.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Regular videos, series and bangumi',
          paragraphs: [
            'Bilibili carries standalone videos, multi-episode series and bangumi (Japanese or Chinese animation). The page accepts the link for one video or one episode; it does not find the other episodes and does not download a whole series.',
            'Episodes longer than 20 minutes are refused, so many drama episodes will not work. For short series or standalone clips within the limit, each episode is a separate link; up to five links at a time.',
            'A /video/BV… link and a /video/av… link point at the same kind of page; both are accepted. A link to a user space or a search page is not a video and will be refused.',
          ],
          bullets: [
            'One link, one episode.',
            'No automatic episode discovery.',
            'Episodes over 20 minutes are refused.',
            'Bangumi usually runs past the limit.',
          ],
        },
      ],
      faq: [
        ['Can I download a whole Bilibili series?', 'No. Each link is one video or episode; paste each link yourself, up to five per submission.'],
        ['Do /video/av… links work?', 'Yes, as long as the link points at a public video; both BV and av forms are accepted.'],
      ],
    },
  },

  hongguo: {
    vi: {
      sections: [
        {
          h2: 'Phim ngắn và recap: nên tải gì',
          paragraphs: [
            'Nếu mục tiêu là làm recap, bạn cần nhiều đoạn có nội dung, không chỉ một preview 10 giây. Hãy kiểm tra thời lượng từng file và chỉ dùng những đoạn thật sự có cảnh cần kể.',
            'Nếu mục tiêu là lưu lại để xem, một preview có thể đủ để nhận biết tập, nhưng không thay thế bản đầy đủ. Trang không tạo bản đầy đủ từ preview và không ghép nhiều preview thành một tập.',
          ],
          bullets: [
            'Preview không đủ cho một recap.',
            'Kiểm tra thời lượng trước khi dùng.',
            'Không ghép preview thành tập.',
            'Tối đa 5 link mỗi lần.',
          ],
        },
      ],
      faq: [
        ['Có ghép nhiều đoạn preview thành một video không?', 'Không. Trang chỉ tải từng file; việc ghép là bước dựng video của bạn và cần quyền sử dụng nội dung.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Short drama and recaps: what to download',
          paragraphs: [
            'If the goal is a recap, you need several clips with actual story, not a ten-second preview. Check each file’s duration and use only the parts that carry a scene you need to tell.',
            'If the goal is to keep something to watch, a preview may be enough to identify the episode, but it does not replace the full version. The page does not build a full episode from previews and does not stitch several previews into one.',
          ],
          bullets: [
            'A preview is not enough for a recap.',
            'Check the duration before using it.',
            'Previews are not stitched into an episode.',
            'Up to five links at a time.',
          ],
        },
      ],
      faq: [
        ['Can several previews be stitched into one video?', 'No. The page downloads each file as it is; stitching is your editing step and requires the rights to use the content.'],
      ],
    },
  },

  iqiyi: {
    vi: {
      sections: [
        {
          h2: 'Clip ngắn thay vì cả tập',
          paragraphs: [
            'Vì giới hạn 20 phút, trang hợp nhất với trailer, clip giới thiệu, cảnh đáng chú ý hoặc đoạn ngắn để bình luận. Cả tập phim thường dài hơn và sẽ bị từ chối.',
            'Nếu bạn cần một đoạn trong tập dài, hãy tìm bản clip đã được cắt sẵn trên nền tảng hoặc dùng công cụ dựng video để cắt từ nguồn bạn có quyền sử dụng. Trang không cắt hộ và không tải cả tập.',
            'Trailer là trường hợp ổn định nhất: công khai, ngắn và thường không cần thành viên. Tập đầy đủ là trường hợp kém ổn định nhất, kể cả khi trang vẫn mở được trong trình duyệt.',
          ],
          bullets: [
            'Trailer và clip công khai.',
            'Tối đa 20 phút.',
            'Không cắt từ tập dài.',
            'Không vượt gói thành viên.',
          ],
        },
      ],
      faq: [
        ['Có cắt một đoạn từ tập dài không?', 'Không. Trang không cắt video và không tải tập dài hơn 20 phút; hãy dùng clip đã cắt sẵn hoặc công cụ dựng video với nguồn bạn có quyền dùng.'],
        ['Có tải cả mùa phim được không?', 'Không. Mỗi link là một tập; một mùa là nhiều link và mỗi tập vẫn phải dưới 20 phút.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Short clips rather than full episodes',
          paragraphs: [
            'Because of the 20-minute limit, the page fits trailers, teasers, notable scenes or short clips for commentary. A full episode is usually longer and will be refused.',
            'If you need one scene from a long episode, find a clip the platform already cut, or use a video editor on material you have the rights to use. The page does not cut for you and does not download the full episode.',
            'A trailer is the most reliable case: public, short and usually available without a membership. A full episode is the least reliable, even when the page opens in a browser.',
          ],
          bullets: [
            'Public trailers and clips.',
            'Up to 20 minutes.',
            'No cutting from a long episode.',
            'No bypass of a membership.',
          ],
        },
      ],
      faq: [
        ['Can it cut one scene out of a long episode?', 'No. The page does not cut video and refuses episodes over 20 minutes; use an existing clip or an editor with material you are allowed to use.'],
        ['Can I download a whole season?', 'No. One link is one episode; a season is many links and every episode must still be under 20 minutes.'],
      ],
    },
  },
};

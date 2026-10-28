/**
 * Long-form copy for `/cau-hoi-thuong-gap/`.
 *
 * The route renders the same ten-question accordion as the home page, which
 * made it a duplicate. These are the questions the accordion does not answer,
 * grouped by the moment a buyer meets them: paying, installing, running,
 * publishing, and trusting the app with their files.
 *
 * The facts come from the install docs (`cai-dat.js`, `cau-hinh.js`), the
 * pricing data and the published terms. Where a policy is handled case by
 * case, the answer says so rather than inventing a rule.
 */
export default {
  vi: {
    title: 'Câu hỏi theo nhóm, **trả lời thẳng**',
    subtitle:
      'Trang chủ trả lời mười câu ngắn. Phần này gom các câu còn lại theo nhóm: mua, cài, chạy, đăng, dữ liệu.',
    blocks: [
      {
        h2: 'Mua và giá',
        qa: [
          [
            'Dùng thử có khác bản trả tiền không?',
            'Chính sách dùng thử xử lý qua Zalo hoặc email; không có nút tự kích hoạt dùng thử trên web. Bản trả tiền mở đủ tính năng theo gói.',
          ],
          [
            'Tôi ở nước ngoài có mua được không?',
            'Có. Bản EN thanh toán PayPal bằng USD; bản VI dùng PayOS hoặc PayPal. Một số tính năng phụ thuộc dịch vụ bên thứ ba.',
          ],
          [
            'Giá có tăng không?',
            'Giá hiện tại nằm trên trang bảng giá. Gói Full 3 tháng chốt giá trong ba tháng; không có cam kết giá cố định mãi mãi.',
          ],
          [
            'Có xuất hoá đơn không?',
            'Có. Gửi yêu cầu qua email kèm mã đơn và thông tin cần xuất.',
          ],
          [
            'Mua xong nhận gì?',
            'Mã kích hoạt dạng AR-XXXX-XXXX-XXXX-XXXX và link tải bộ cài; link chỉ hiện sau khi thanh toán thành công.',
          ],
          [
            'Có phí ẩn không?',
            'Không có phí theo video. AI/API bên thứ ba trả riêng; Pexels miễn phí; giọng chạy trên máy không tốn phí theo câu.',
          ],
        ],
      },
      {
        h2: 'Cài và cấu hình',
        qa: [
          [
            'Cần cấu hình máy thế nào?',
            'Windows 10 21H2 trở lên hoặc Windows 11, hoặc macOS; tối thiểu 8GB RAM và khoảng 25GB trống. Lần đầu tải khoảng 11GB, mất 10–30 phút tuỳ mạng.',
          ],
          [
            'Có cần GPU không?',
            'Không bắt buộc. GPU giúp render nhanh hơn; app vẫn chạy bằng CPU.',
          ],
          [
            'Có cần Docker không?',
            'Bộ cài Windows tự cài Docker nếu thiếu. Trên macOS, bạn cần Docker Desktop và Terminal cho một câu lệnh.',
          ],
          [
            'Không có key AI thì dùng được không?',
            'App vẫn mở; các tính năng viết kịch bản và caption cần key. Có thể dán sau trong màn Cấu hình.',
          ],
          [
            'Cài lại máy có mất dữ liệu không?',
            'Bộ cài không ghi đè .env và không xoá thư mục data. Sao lưu thư mục data trước khi đổi máy.',
          ],
          [
            'Không có mạng thì sao?',
            'Sau khi cài, app chạy offline trừ các tính năng cần mạng: tải link, gọi AI, đăng bài.',
          ],
        ],
      },
      {
        h2: 'Chạy và xử lý lỗi',
        qa: [
          [
            'Bao nhiêu video một lô?',
            'Full và Personal cho 30 video mỗi lô. Số job chạy song song phụ thuộc gói và cấu hình máy.',
          ],
          [
            'Job lỗi giữa đường thì sao?',
            'Job dừng ở bước lỗi và giữ phần đã xong; sửa nguyên nhân rồi chạy lại từ bước đó.',
          ],
          [
            'Có chạy nền khi tắt app không?',
            'App cần chạy trên máy; có thể thu nhỏ cửa sổ, nhưng không tắt máy. Telegram Remote giúp theo dõi từ xa.',
          ],
          [
            'Có hẹn giờ đăng không?',
            'Có, ở gói Full trở lên. Video xếp hàng chờ và đăng theo giờ bạn đặt.',
          ],
          [
            'Có log để xem lỗi không?',
            'Có trạng thái từng job và log. Đọc bước cuối cùng trước khi chạy lại.',
          ],
        ],
      },
      {
        h2: 'Đăng bài',
        qa: [
          [
            'Đăng Shopee cần gì?',
            'Một điện thoại Android ghép với máy qua wifi; app điều khiển điện thoại để đăng.',
          ],
          [
            'Đăng Facebook cần gì?',
            'Token hoặc app Meta có quyền trên Page; kiểm tra quyền trước khi chạy lô.',
          ],
          [
            'Có đăng TikTok hoặc YouTube không?',
            'Chưa. Hiện tích hợp Shopee Video và Facebook/Reels.',
          ],
          [
            'Đăng nhiều shop hoặc nhiều Page cùng lúc?',
            'Full trở lên. Mỗi shop hoặc Page cấu hình riêng; kiểm tra tài khoản đang hoạt động.',
          ],
          [
            'Đăng thất bại thì sao?',
            'Kiểm tra token, kết nối điện thoại và link sản phẩm; chạy lại bước đăng, không cần dựng lại video.',
          ],
        ],
      },
      {
        h2: 'Dữ liệu và bảo mật',
        qa: [
          [
            'Video lưu ở đâu?',
            'Trên máy bạn. App chạy local-first, không upload toàn bộ footage lên máy chủ.',
          ],
          [
            'API key lưu ở đâu?',
            'Trong app trên máy; chỉ gửi tới nhà cung cấp AI bạn chọn khi gọi model.',
          ],
          [
            'Ai xem được video của tôi?',
            'Theo thiết kế, chỉ bạn và người có quyền truy cập máy.',
          ],
          [
            'Xoá dữ liệu thế nào?',
            'Xoá thư mục data và video, gỡ license nếu đổi máy; liên hệ nếu cần thu hồi.',
          ],
          [
            'Có dùng dữ liệu của tôi để train AI không?',
            'AutoReel không dùng nội dung của bạn để train. Nhà cung cấp AI áp dụng chính sách riêng của họ.',
          ],
        ],
      },
      {
        h2: 'Đọc trước khi mua',
        table: {
          head: ['Việc', 'Trang'],
          rows: [
            ['Giá, thanh toán, hoàn tiền', '/bang-gia-phan-mem-tao-video/'],
            ['Cài đặt và cấu hình', '/tai-lieu/cai-dat/'],
            ['Quy trình và cách chạy lô', '/quy-trinh-tao-video-hang-loat/'],
            ['Toàn bộ tính năng và giới hạn', '/tat-ca-tinh-nang/'],
          ],
        },
        paragraphsAfter: [
          'Nếu câu của bạn không có ở đây, gửi Zalo hoặc email; câu mới sẽ được thêm vào trang này.',
        ],
      },
    ],
    faq: [],
  },
  en: {
    title: 'Questions by topic, **answered plainly**',
    subtitle:
      'The home page answers ten short questions. This groups the rest by the moment you meet them: buying, installing, running, publishing and trusting the app with your files.',
    blocks: [
      {
        h2: 'Buying and pricing',
        qa: [
          [
            'Is a trial different from the paid version?',
            'Trial requests are handled over Zalo or email; there is no self-service trial button on the site. The paid version unlocks the features of the plan you buy.',
          ],
          [
            'Can I buy from outside Vietnam?',
            'Yes. The English page pays by PayPal in USD; the Vietnamese page uses PayOS or PayPal. Some features depend on third-party services.',
          ],
          [
            'Will the price go up?',
            'The current price is on the pricing page. The three-month pack fixes the price for three months; there is no promise that the list price never changes.',
          ],
          [
            'Can I get an invoice?',
            'Yes. Email the order code and the details you need on the invoice.',
          ],
          [
            'What do I receive after paying?',
            'An activation key in the form AR-XXXX-XXXX-XXXX-XXXX and the installer link; the link appears only after a successful payment.',
          ],
          [
            'Are there hidden fees?',
            'There is no per-video fee. Third-party AI/API usage is paid separately; Pexels is free; on-machine voices cost nothing per sentence.',
          ],
        ],
      },
      {
        h2: 'Installing and configuring',
        qa: [
          [
            'What machine do I need?',
            'Windows 10 21H2 or later, Windows 11, or macOS; at least 8GB of RAM and about 25GB of free disk. The first install downloads about 11GB and takes 10–30 minutes depending on the connection.',
          ],
          [
            'Do I need a GPU?',
            'Not required. A GPU renders faster; the app still runs on the CPU.',
          ],
          [
            'Do I need Docker?',
            'The Windows installer installs Docker if it is missing. On macOS you need Docker Desktop and Terminal for one command.',
          ],
          [
            'Can I use it without an AI key?',
            'The app opens; the script and caption features need a key. You can paste it later in Settings.',
          ],
          [
            'Does reinstalling lose my data?',
            'The installer does not overwrite .env or delete the data folder. Back up that folder before moving to another machine.',
          ],
          [
            'What happens without internet?',
            'After installation the app runs offline except for features that need the network: downloading links, calling AI, and publishing.',
          ],
        ],
      },
      {
        h2: 'Running and handling errors',
        qa: [
          [
            'How many videos per batch?',
            'Full and Personal allow 30 videos per batch. How many run in parallel depends on the plan and the machine.',
          ],
          [
            'What if a job fails halfway?',
            'It stops at the failed step and keeps finished work; fix the cause and run from that step.',
          ],
          [
            'Does it run in the background after I close the app?',
            'The app must stay running on the machine; you can minimise the window but not shut the machine down. Telegram Remote lets you follow it from your phone.',
          ],
          [
            'Can it schedule posts?',
            'Yes, on Full and above. Videos wait in the queue and publish at the time you set.',
          ],
          [
            'Is there a log?',
            'Every job has a status and a log. Read the last step before running it again.',
          ],
        ],
      },
      {
        h2: 'Publishing',
        qa: [
          [
            'What do I need to post to Shopee?',
            'An Android phone paired with the machine over wifi; the app drives the phone to publish.',
          ],
          [
            'What do I need to post to Facebook?',
            'A token or Meta app with permission on the Page; check the permission before a batch.',
          ],
          [
            'Does it post to TikTok or YouTube?',
            'Not yet. Shopee Video and Facebook/Reels are the integrations today.',
          ],
          [
            'Can it post to several shops or Pages at once?',
            'Full and above. Each shop or Page is configured separately; check that the account is active.',
          ],
          [
            'What if publishing fails?',
            'Check the token, the phone connection and the product link; run the publishing step again without rebuilding the video.',
          ],
        ],
      },
      {
        h2: 'Data and privacy',
        qa: [
          [
            'Where are the videos stored?',
            'On your machine. The app is local-first and does not upload all your footage to a server.',
          ],
          [
            'Where is the API key stored?',
            'In the app on your machine; it is sent only to the AI provider you choose when a model is called.',
          ],
          [
            'Who can see my videos?',
            'By design, only you and anyone with access to the machine.',
          ],
          [
            'How do I delete my data?',
            'Delete the data and video folders and release the licence when changing machines; contact us if you need help revoking it.',
          ],
          [
            'Do you use my data to train AI?',
            'AutoReel does not use your content to train models. The AI provider applies its own policy.',
          ],
        ],
      },
      {
        h2: 'Read before buying',
        table: {
          head: ['What', 'Page'],
          rows: [
            ['Price, payment, refunds', '/en/pricing/'],
            ['Installing and configuring', '/en/docs/install/'],
            ['The workflow and running batches', '/en/bulk-video-workflow/'],
            ['Every feature and limit', '/en/all-features/'],
          ],
        },
        paragraphsAfter: [
          'If your question is not here, send it on Zalo or by email; new answers are added to this page.',
        ],
      },
    ],
    faq: [],
  },
};

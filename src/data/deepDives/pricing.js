/**
 * Long-form copy for `/bang-gia-phan-mem-tao-video/`.
 *
 * The page already renders the plan cards and their detail panels, all of
 * which also appear on the home page. This block is the buying argument that
 * is not on the cards: how to choose, what the price does not include, a
 * three-month cost example, and the payment/refund terms.
 *
 * The arithmetic is intentionally shown, not typed as a slogan: 3 × Full is
 * 777,000đ, the three-month pack is 699,000đ, and the difference is 78,000đ.
 * If a price changes in `pricing.js`, this copy must change with it.
 */
export default {
  vi: {
    title: 'Chọn gói theo số việc, **không theo số video**',
    faqTitle: 'Câu hỏi về giá',
    subtitle:
      'Bảng giá bên trên là giá niêm yết. Phần này giải thích gói nào cho ai, chi phí thực tế ngoài giá, và cách tính hoàn vốn.',
    blocks: [
      {
        h2: 'Ba câu hỏi trước khi chọn gói',
        bullets: [
          '**Bạn đã có video nguồn chưa?** Có rồi → Edit. Chưa có, cần làm từ chủ đề → Creator trở lên.',
          '**Bạn có cần đăng bài không?** Có → Full. Chỉ cần xuất file → Edit hoặc Creator.',
          '**Bạn làm một mình hay nhiều máy?** Nhiều máy hoặc nhiều người → Full 2 máy, hoặc Team khi mở bán.',
        ],
        paragraphsAfter: [
          'Không gói nào giới hạn số video. Khác nhau ở bộ tính năng và số máy, không phải số lần render.',
        ],
      },
      {
        h2: 'Bảng chọn nhanh',
        table: {
          head: ['Tình huống', 'Gói', 'Vì sao'],
          rows: [
            ['Đã có video, chỉ cắt, xoá logo, lồng tiếng', 'Edit — 99.000đ/tháng', 'Đủ các màn xử lý cơ bản, không cần flow'],
            ['Tự làm nội dung từ chủ đề hoặc video có sẵn', 'Creator — 199.000đ/tháng', 'Có ba flow trọn gói và tóm tắt phim'],
            ['Bán hàng, cần đăng Shopee và Facebook', 'Full — 259.000đ/tháng', 'Có auto publish, nhiều shop và nhiều Page'],
            ['Hai máy hoặc hai người cùng làm', 'Full 2 máy — 329.000đ/tháng', 'Hai máy, mỗi máy một hàng đợi'],
            ['Biết chắc dùng ba tháng', 'Full 3 tháng — 699.000đ', 'Tiết kiệm 78.000đ so với trả ba tháng lẻ'],
            ['Dùng lâu dài, không muốn gia hạn', 'Personal — 1.490.000đ', 'Mua đứt; hoàn vốn sau khoảng 6 tháng so với Full'],
            ['Team nhiều máy, nhiều tài khoản', 'Team — 3.990.000đ', 'Chưa mở bán; đăng ký nhận thông báo'],
          ],
        },
        paragraphsAfter: [
          'Con số hoàn vốn là phép chia, không phải lời hứa: 1.490.000đ ÷ 259.000đ ≈ 5,75 tháng, làm tròn lên 6 tháng.',
        ],
      },
      {
        h2: 'Chi phí ngoài giá phần mềm',
        bullets: [
          '**AI/API** — DeepSeek, OpenAI hoặc Gemini tính theo lượng dùng; bạn trả trực tiếp cho nhà cung cấp bằng key của mình.',
          '**Giọng đọc** — có engine chạy trên máy, không tốn phí theo câu; ElevenLabs là tuỳ chọn và tính riêng.',
          '**Pexels** — miễn phí, cần key nếu muốn lấy footage nền; không bắt buộc để app chạy.',
          '**Điện thoại Android** — chỉ cần nếu đăng Shopee Video; không cần mua thêm thiết bị khác.',
          '**Điện, máy, ổ cứng** — app chạy local, không có phí cloud theo phút hay theo video.',
        ],
        paragraphsAfter: [
          'Không có phí theo video. Nhưng tổng chi phí không bằng đúng giá gói: phần AI/API là khoản biến đổi duy nhất đáng tính trước.',
        ],
      },
      {
        h2: 'Ví dụ tổng chi phí ba tháng',
        table: {
          head: ['Cách mua', 'Tiền phần mềm', 'Ghi chú'],
          rows: [
            ['Full trả tháng × 3', '777.000đ', 'Dừng được sau mỗi tháng'],
            ['Full 3 tháng', '699.000đ', 'Tiết kiệm 78.000đ; không tự gia hạn'],
            ['Personal mua đứt', '1.490.000đ', 'Sau khoảng 6 tháng rẻ hơn Full trả tháng'],
            ['Edit hoặc Creator', '99.000đ / 199.000đ mỗi tháng', 'Không có auto publish'],
          ],
        },
        paragraphsAfter: [
          'Bảng này chưa gồm AI/API. Nếu bạn dùng giọng local và ít gọi AI, chi phí gần như chỉ là giá gói; nếu chạy nhiều video dài, khoản AI/API có thể lớn hơn giá gói.',
        ],
      },
      {
        h2: 'Thanh toán, gia hạn, hoàn tiền',
        bullets: [
          'Thanh toán qua **PayOS** hoặc **PayPal**; AutoReel không lưu số thẻ, CVV hay thông tin đăng nhập ngân hàng.',
          'Thuê bao gia hạn theo tháng và dừng được bất kỳ lúc nào.',
          'Gói **Full 3 tháng** không tự động gia hạn; hết ba tháng thì quyết định lại.',
          'Hoàn tiền trong **7 ngày** nếu license **chưa kích hoạt**. Đã kích hoạt thì xem xét từng trường hợp, gồm lỗi kỹ thuật kéo dài mà không khắc phục được.',
          'Đang có gói cũ và muốn lên gói mới: liên hệ trước; việc nâng cấp xử lý theo từng trường hợp, không tự động trừ tiền.',
        ],
        paragraphsAfter: [
          'Đây là các điểm chính, không thay thế điều khoản sử dụng. Đọc điều khoản trước khi thanh toán.',
        ],
      },
      {
        h2: 'Khi nào nên mua đứt, khi nào nên thuê',
        bullets: [
          '**Mua đứt** nếu bạn chắc chắn dùng trên sáu tháng, muốn tránh gia hạn và không cần đổi gói theo tháng.',
          '**Thuê tháng** nếu bạn mới thử, công việc theo mùa, hoặc muốn dừng nhanh mà không mất nhiều.',
          '**Full 3 tháng** nếu bạn biết chắc dùng đủ ba tháng và muốn chốt giá.',
          '**Team** nếu bạn cần nhiều máy và nhiều tài khoản; hiện chưa mở bán, nên đăng ký nhận thông báo.',
        ],
        paragraphsAfter: [
          'Không có gói nào “tốt nhất” cho mọi người; có gói khớp với cách bạn làm việc.',
        ],
      },
    ],
    faq: [
      ['Có phí theo video không?', 'Không. Giá gói không phụ thuộc số video bạn tạo trong thời gian sử dụng.'],
      ['Giá đã gồm AI chưa?', 'Chưa. AI/API bên thứ ba trả riêng cho nhà cung cấp bạn chọn.'],
      ['Có hoàn tiền không?', 'Trong 7 ngày nếu license chưa kích hoạt; đã kích hoạt thì xem xét từng trường hợp.'],
      ['Trả bằng cách nào?', 'PayOS hoặc PayPal, tuỳ cổng thanh toán hiện trên trang checkout.'],
      ['Nâng cấp gói thế nào?', 'Liên hệ Zalo hoặc email trước khi mua; việc nâng cấp xử lý theo từng trường hợp.'],
    ],
  },
  en: {
    title: 'Pick a plan by the work, **not by the video count**',
    faqTitle: 'Pricing questions',
    subtitle:
      'The table above is the list price. This explains who each plan is for, what the price does not include, and how the payback works.',
    blocks: [
      {
        h2: 'Three questions before choosing',
        bullets: [
          '**Do you already have source footage?** Yes → Edit. No, you need to start from a topic → Creator or above.',
          '**Do you need to publish?** Yes → Full. Export only → Edit or Creator.',
          '**One machine or several?** Several machines or people → Full · 2 computers, or Team when it ships.',
        ],
        paragraphsAfter: [
          'No plan limits the number of videos. The difference is the feature set and the number of machines, not the number of renders.',
        ],
      },
      {
        h2: 'Quick chooser',
        table: {
          head: ['Situation', 'Plan', 'Why'],
          rows: [
            ['You have footage and only need to cut, remove a logo, dub', 'Edit — $6.99/month', 'The basic processing screens; no flows'],
            ['You make content from a topic or existing video', 'Creator — $8.49/month', 'The three end-to-end flows and movie recap'],
            ['You sell and need to post to Shopee and Facebook', 'Full — $10.99/month', 'Auto-publish, several shops and Pages'],
            ['Two machines or two people', 'Full · 2 computers — $13.99/month', 'Two machines, each with its own queue'],
            ['You know you will use three months', 'Full · 3 months — $28.99', 'Saves $3.98 against three monthly payments'],
            ['Long-term use without renewals', 'Personal — $61.99', 'One-off; pays for itself in about 6 months against Full'],
            ['A team with several machines and accounts', 'Team — $153.46', 'Not on sale yet; join the notification list'],
          ],
        },
        paragraphsAfter: [
          'The payback figure is arithmetic, not a promise: $61.99 ÷ $10.99 ≈ 5.64 months, rounded up to 6.',
        ],
      },
      {
        h2: 'What the price does not include',
        bullets: [
          '**AI/API** — DeepSeek, OpenAI or Gemini bill by usage; you pay that provider directly with your own key.',
          '**Voices** — an on-machine engine costs nothing per sentence; ElevenLabs is optional and billed separately.',
          '**Pexels** — free, but needs a key if you want stock background footage; the app runs without it.',
          '**An Android phone** — only needed for Shopee Video; no other device is required.',
          '**Electricity, the machine, disk** — the app runs locally; there is no cloud charge per minute or per video.',
        ],
        paragraphsAfter: [
          'There is no per-video fee. But the total is not the plan price: AI/API is the one variable worth estimating before you buy.',
        ],
      },
      {
        h2: 'A three-month cost example',
        table: {
          head: ['How you buy', 'Software cost', 'Note'],
          rows: [
            ['Full monthly × 3', '$32.97', 'You can stop after any month'],
            ['Full · 3 months', '$28.99', 'Saves $3.98; nothing renews automatically'],
            ['Personal, one-off', '$61.99', 'Cheaper than monthly Full after about 6 months'],
            ['Edit or Creator', '$6.99 / $8.49 per month', 'No auto-publish'],
          ],
        },
        paragraphsAfter: [
          'AI/API is not in this table. With local voices and light AI use, the cost is close to the plan price; with many long videos, the AI/API bill can exceed it.',
        ],
      },
      {
        h2: 'Payment, renewal, refunds',
        bullets: [
          'Payment goes through **PayOS** or **PayPal**; AutoReel does not store card numbers, CVVs or bank logins.',
          'Monthly subscriptions renew and can be stopped at any time.',
          'The **Full · 3 months** pack does not renew; after three months you decide again.',
          'Refunds are available within **7 days** if the licence **has not been activated**. If it has, requests are considered case by case, including a prolonged technical fault we cannot fix.',
          'Already on a plan and want a bigger one: ask first; upgrades are handled case by case and nothing is charged automatically.',
        ],
        paragraphsAfter: [
          'These are the main points, not a replacement for the terms. Read the terms before paying.',
        ],
      },
      {
        h2: 'When to buy outright, when to rent',
        bullets: [
          '**Buy outright** if you are sure you will use it for more than six months, want no renewals, and do not need to change plans monthly.',
          '**Rent monthly** if you are trying it, work seasonally, or want to stop quickly with little at stake.',
          '**Full · 3 months** if you know you will use all three months and want to fix the price.',
          '**Team** if you need several machines and accounts; it is not on sale yet, so join the notification list.',
        ],
        paragraphsAfter: [
          'No plan is “best” for everyone; one fits the way you work.',
        ],
      },
    ],
    faq: [
      ['Is there a per-video fee?', 'No. The plan price does not depend on how many videos you make while it is active.'],
      ['Is AI included?', 'No. Third-party AI/API usage is paid separately to the provider you choose.'],
      ['Are refunds available?', 'Within 7 days if the licence has not been activated; after activation, requests are considered case by case.'],
      ['How do I pay?', 'PayOS or PayPal, whichever the checkout page offers.'],
      ['How do I upgrade?', 'Contact us on Zalo or by email before buying; upgrades are handled case by case.'],
    ],
  },
};

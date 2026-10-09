/**
 * FAQ accordion — one item open at a time.
 *
 * `id` is used as a React key, compared to decide which panel is open
 * (`FAQ.jsx`), and spliced into the DOM ids `faq-button-<id>` / `faq-panel-<id>`
 * that the button's `aria-controls` points at. It must be the same in both
 * languages and must never be translated: a translated id would break the
 * accordion and its accessibility wiring at the same time.
 */
export const faqHeadline = {
  vi: 'Câu hỏi thường gặp',
  en: 'Frequently asked questions',
};

export const faqs = {
  vi: [
    {
      id: 'pricing',
      question: 'AutoReel có phải trả phí hàng tháng không?',
      answer:
        'Không có phí thuê bao AutoReel bắt buộc đối với Lifetime License. Một số AI/API hoặc dịch vụ bên thứ ba có thể có chi phí riêng tùy mức sử dụng.',
    },
    {
      id: 'runtime',
      question: 'AutoReel chạy ở đâu?',
      answer:
        'AutoReel được thiết kế theo hướng local-first và chạy trên máy tính của bạn thông qua môi trường được cài đặt sẵn.',
    },
    {
      id: 'skill',
      question: 'Tôi có cần biết edit video không?',
      answer:
        'Không. Workflow được thiết kế để giảm tối đa thao tác kỹ thuật: chọn nguồn, cấu hình và để AutoReel xử lý.',
    },
    {
      id: 'batch',
      question: 'Có thể tạo nhiều video cùng lúc không?',
      answer:
        'Có. AutoReel hỗ trợ xử lý theo batch; giới hạn phụ thuộc gói sử dụng và cấu hình máy.',
    },
    {
      id: 'ai',
      question: 'AutoReel hỗ trợ AI nào?',
      answer: 'AutoReel hỗ trợ kết nối DeepSeek, OpenAI và Google Gemini tùy tính năng/cấu hình.',
    },
    {
      id: 'vietnamese',
      question: 'Có hỗ trợ tiếng Việt không?',
      answer:
        'Có. AutoReel hỗ trợ AI Voice tiếng Việt và được thiết kế hướng tới workflow của người dùng Việt Nam.',
    },
    {
      id: 'autopublish',
      question: 'AutoReel có tự đăng video không?',
      answer: 'Có, với các nền tảng đã được tích hợp như Shopee Video và Facebook/Reels.',
    },
    {
      id: 'telegram',
      question: 'Telegram Remote dùng để làm gì?',
      answer:
        'Giúp bạn giao việc và theo dõi AutoReel từ xa khi máy tính đã cài AutoReel đang hoạt động.',
    },
    {
      id: 'money',
      question: 'AutoReel có tự động kiếm tiền Affiliate không?',
      answer:
        'Không. AutoReel hỗ trợ sản xuất, xử lý và publish content; hiệu quả Affiliate phụ thuộc sản phẩm, nội dung, traffic và chiến lược của người dùng.',
    },
    {
      id: 'rights',
      question: 'Tôi có thể dùng video của người khác không?',
      answer:
        'Bạn nên chỉ sử dụng nội dung mình sở hữu hoặc có quyền sử dụng/chỉnh sửa. Các công cụ xử lý của AutoReel không thay đổi quyền sở hữu nội dung nguồn.',
    },
  ],
  en: [
    {
      id: 'pricing',
      question: 'Is there a monthly fee?',
      answer:
        'A Lifetime Licence carries no mandatory subscription to AutoReel. Any AI/API or third-party service may cost extra depending on how much you use.',
    },
    {
      id: 'runtime',
      question: 'Where does AutoReel run?',
      answer:
        'AutoReel is local-first: it runs on your own computer, from a pre-installed environment.',
    },
    {
      id: 'skill',
      question: 'Do I need to know how to edit video?',
      answer:
        'No. The workflow is built to remove technical steps: pick a source, configure it, and let AutoReel do the rest.',
    },
    {
      id: 'batch',
      question: 'Can it make several videos at once?',
      answer:
        'Yes. AutoReel processes in batches; how many depends on your plan and on your machine.',
    },
    {
      id: 'ai',
      question: 'Which AI models does it support?',
      answer: 'AutoReel can connect to DeepSeek, OpenAI and Google Gemini, depending on the feature you configure.',
    },
    {
      id: 'vietnamese',
      question: 'Does it support Vietnamese?',
      answer:
        'Yes. AutoReel has Vietnamese AI voices and is built around how Vietnamese creators actually work.',
    },
    {
      id: 'autopublish',
      question: 'Does AutoReel publish by itself?',
      answer: 'Yes, on the platforms it integrates with: Shopee Video and Facebook/Reels.',
    },
    {
      id: 'telegram',
      question: 'What is Telegram Remote for?',
      answer:
        'It lets you hand over jobs and follow AutoReel from your phone while the computer running it stays on.',
    },
    {
      id: 'money',
      question: 'Does AutoReel make affiliate money automatically?',
      answer:
        'No. AutoReel helps produce, process and publish content; whether affiliate work pays off still depends on the product, the content, the traffic and your strategy.',
    },
    {
      id: 'rights',
      question: 'Can I use other people’s videos?',
      answer:
        'You should only use content you own or have the right to use and edit. AutoReel’s processing tools do not change who owns the source material.',
    },
  ],
};

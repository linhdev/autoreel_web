/**
 * Cấu hình máy: ba mức, và vì sao Windows là lựa chọn an toàn.
 *
 * Ba thứ trong bài này là số đo, không phải ước lượng, và cả ba đều lấy từ
 * `README.md` của kho mã nguồn — chỗ ghi lại cách chúng được đo:
 *
 *   - công thức số việc chạy cùng lúc: `workers = min(cpu // 3, ram_trống // 3, 8)`;
 *   - 7,35 so với 8,84 video/phút cho 2 và 4 việc song song, đo trên tám clip
 *     ngắn mỗi lượt, chỉ đổi đúng một biến;
 *   - đỉnh RAM 4,2 GB qua 67 job — và lượt 30 video ngày 10/10/2026 mất 6 video
 *     vì container render bị hệ điều hành giết khi hết RAM.
 *
 * Bài anh em của nó là `autoreel-chay-o-dau-can-cau-hinh-may-the-nao.js`: bài
 * đó trả lời "chạy ở đâu", bài này trả lời "mua máy gì". Cố ý không lặp lại
 * phần giá và phần dữ liệu nằm ở đâu.
 *
 * Điều duy nhất trong đây không phải số đo là khuyến nghị Windows. Lý do đứng
 * sau nó thì đo được: trên chip M, bộ công cụ nối điện thoại không có bản dựng
 * sẵn, nên ghép điện thoại không dây không làm được — xem `ShortGPT-install`.
 */
export default {
  slug: {
    vi: 'chuan-bi-may-toi-thieu-va-chon-windows',
    en: 'minimum-specs-and-why-windows',
  },
  title: {
    vi: 'Máy tối thiểu để chạy phần mềm, và vì sao nên chọn Windows',
    en: 'What your machine needs, and why Windows is the safe buy',
  },
  description: {
    vi: 'Ba mức cấu hình kèm số đo thật: CPU, RAM, ổ cứng, card đồ hoạ — và lý do nên chọn Windows thay vì máy Mac chip M.',
    en: 'Three spec tiers with the measurements behind them: CPU, RAM, disk, graphics — and why Windows beats an Apple Silicon Mac for this job.',
  },
  date: '2026-10-15',
  minutes: { vi: 7, en: 7 },
  tag: {
    vi: 'Công nghệ',
    en: 'Technology',
  },
  lead: {
    vi: 'Cấu hình tối thiểu để chạy phần mềm này thấp hơn bạn nghĩ, nhưng câu hỏi đúng không phải "máy có chạy được không" mà là "chạy được mấy việc cùng lúc". Bài này đưa ba mức cấu hình kèm con số đo được, và nói thẳng vì sao tôi khuyên mua máy Windows.',
    en: 'The minimum spec for this software is lower than you think. The useful question is not whether a machine runs it, but how many jobs it can run at once. Here are three tiers with the measurements behind them, and why I would buy Windows.',
  },
  body: {
    vi: [
      {
        p: 'Không có tính năng nào của phần mềm này bị khoá sau một cấu hình. Một chiếc máy bàn cũ bốn nhân, 8 GB RAM vẫn xoá được logo, lồng được tiếng, cắt được highlight và dựng được video — không thiếu thứ gì.\n\nThứ duy nhất máy ảnh hưởng là bạn chạy được bao nhiêu việc cùng lúc. Và đó là câu hỏi duy nhất đáng để bỏ thêm tiền.',
      },
      { h2: 'Máy yếu không mất tính năng, chỉ xếp hàng lâu hơn' },
      {
        p: 'Hệ thống đẩy việc vào một hàng đợi rồi chạy song song. Số việc chạy cùng lúc tính bằng công thức này: cứ 3 nhân CPU được một việc, cứ 3 GB RAM còn trống được thêm một việc, và trần là 8.',
      },
      {
        ul: [
          '4 nhân, 8 GB: một việc một lúc. Làm được mọi thứ, chỉ là việc sau chờ việc trước.',
          '8 nhân, 16 GB: hai việc một lúc. Đây là mức tôi khuyên cho người làm đều mỗi ngày.',
          '12 luồng, 32 GB: bốn việc một lúc — mức đã đo là điểm ngọt, và cũng là mức mà thêm nữa không còn đáng tiền.',
        ],
      },
      {
        figure: {
          src: '/blog/cau-hinh-may.svg',
          alt: 'Ba mức cấu hình máy: 4 nhân 8 GB chạy một việc, 8 nhân 16 GB chạy hai việc, 12 luồng 32 GB chạy bốn việc cùng lúc',
          caption: 'Ba mức, và số việc chạy cùng lúc ở mỗi mức. Cột RAM là RAM còn trống, không phải RAM đã mua.',
        },
      },
      { h2: 'Gấp đôi số việc không cho gấp đôi sản lượng' },
      {
        p: 'Đo thật, trên tám clip ngắn mỗi lượt, chỉ đổi đúng một thứ là số việc chạy cùng lúc: hai việc cho 7,35 video một phút, bốn việc cho 8,84. Gấp đôi số việc chỉ ăn thêm khoảng 20% sản lượng.',
      },
      {
        p: 'Nghĩa là nếu bạn làm vài video ngắn mỗi ngày, máy tầm trung không phải vấn đề của bạn. Chênh lệch chỉ đáng kể khi bạn chạy hàng chục video một lượt, hoặc làm video dài nhiều cảnh — lúc đó mỗi việc nặng hơn và hàng đợi dài hơn.',
      },
      { h2: 'RAM là chỗ dễ mua thiếu nhất' },
      {
        p: 'Đo qua 67 việc liên tiếp, đỉnh RAM của cả hệ thống là 4,2 GB. Nghe như 8 GB là thừa, nhưng con số đó là phần việc làm video — chưa tính hệ điều hành, trình duyệt bạn đang mở, và phần nền tảng chạy ứng dụng ăn trước khi việc đầu tiên bắt đầu.',
      },
      {
        note: 'Chỗ đau nằm ở RAM, không nằm ở card đồ hoạ. Khi máy hết RAM giữa một lượt làm nhiều video, hệ thống không dừng lại chờ bạn — nó mất luôn những việc đang dựng dở. Một lượt 30 video đã mất 6 video vì đúng lý do này. Nếu ngân sách chỉ đủ nâng một thứ, nâng RAM trước.',
      },
      { h2: 'Ổ cứng: 15 GB để cài, và một khoản khác cho video sinh ra' },
      {
        p: 'Bộ cài cần khoảng 15 GB trống, phần lớn là ảnh của ứng dụng và model giọng đọc tải về lần đầu. Đó là chỗ để cài xong và chạy được — không phải chỗ để làm việc lâu dài.',
      },
      {
        ul: [
          'Model giọng đọc tiếng Việt: khoảng 0,9 GB, tải một lần rồi thôi.',
          'Model nhận dạng tiếng nói, dùng cho phụ đề và cắt highlight: khoảng 0,2 GB.',
          'Phần xoá logo: khoảng 70 MB, không đáng kể.',
          'Video sinh ra: đây mới là khoản lớn. Một máy dùng vài tuần đã có thể có 17 GB video nằm trong thư mục làm việc.',
        ],
      },
      {
        p: 'Nên để dành 60 GB trở lên nếu bạn làm thường xuyên, và để trên ổ thể rắn. Đĩa đầy là lỗi hay gặp nhất khi chạy lâu, và nó biểu hiện thành một video dựng hỏng chứ không phải một câu báo hết chỗ — nên bạn sẽ tưởng là lỗi phần mềm và mất thời gian tìm sai chỗ.',
      },
      { h2: 'Card đồ hoạ: có thì tốt, thiếu thì không sao' },
      {
        p: 'Card đồ hoạ không nằm trong yêu cầu, và đừng để ai bán cho bạn một chiếc card vì phần mềm này. Khâu dựng hình có đường chạy bằng card, nhưng không có tính năng nào chỉ chạy được khi có card.',
      },
      {
        ul: [
          'Máy dùng đồ hoạ tích hợp: chạy bình thường, chậm hơn ở khâu dựng hình.',
          'Có card rời: nhanh hơn rõ ở khâu dựng, nhất là khi bạn chạy nhiều việc một lúc.',
          'Nếu mua card, một chiếc phổ thông 6 GB là đủ. Phần mềm này không cần card mạnh, chỉ cần card có.',
          'Driver phải là bản mới. Card tốt mà driver cũ thì phần dựng hình lặng lẽ quay về chạy bằng CPU, và bạn không thấy cảnh báo nào.',
        ],
      },
      { h2: 'Vì sao tôi khuyên Windows' },
      {
        p: 'Phần mềm chạy trên cả Windows và macOS, và trên máy Mac nó chạy đúng bản dành cho chip của máy chứ không giả lập — nên đây không phải chuyện hiệu năng. Khác biệt nằm ở đúng một việc: ghép điện thoại Android để đăng bài lên Shopee Video.',
      },
      {
        ul: [
          'Windows 10/11: đủ hết, không có ngoại lệ nào. Đây là thứ tôi khuyên, và cũng là thứ phần lớn người làm nghề đang dùng.',
          'Mac chip Intel: cũng đủ hết, giống Windows.',
          'Mac chip M: chạy tốt và nhanh, nhưng phần ghép điện thoại không dây phải bỏ. Nếu bạn không đăng Shopee Video thì không ảnh hưởng gì.',
        ],
      },
      {
        note: 'Nói trước cho khỏi mất một buổi tối: trên máy Mac chip M, việc ghép điện thoại Android qua Wi-Fi không làm được, vì bộ công cụ nối điện thoại không có bản dựng cho loại chip này. Cách vòng: cắm cáp USB một lần, hoặc ghép trên một máy Windows rồi dùng tiếp. Máy Windows và Mac chip Intel không dính gì.',
      },
      { h2: 'Chuẩn bị gì trước khi cài' },
      {
        ol: [
          'Chỗ trống: 15 GB để cài, và nên là 60 GB nếu bạn định làm thường xuyên.',
          'Một phần mềm nền tảng miễn phí mà ứng dụng chạy bên trong, cài một lần. Trang hướng dẫn cài đặt có tên và link của nó — trên Windows bạn cần thêm một thứ nữa đi kèm nó.',
          'Một điện thoại Android, chỉ khi bạn định đăng bài lên Shopee Video. Facebook đăng qua Page nên không cần điện thoại.',
        ],
      },
      {
        p: 'Còn lại thì cứ để máy chạy. Lần cài đầu tải khoảng 8 GB nên sẽ lâu, vài chục phút tuỳ mạng; sau đó thì chỉ cần mạng khi đăng bài hoặc khi nhờ AI viết lời thoại.\n\nMáy cũ vẫn dùng được, chỉ chậm hơn — nên đừng mua máy mới chỉ vì đọc bài này. Nếu còn phân vân, hãy hỏi trước khi trả tiền thay vì đoán.',
      },
    ],
    en: [
      {
        p: 'No feature of this software is locked behind a spec. An old four-core desktop with 8 GB of RAM can still remove a logo, dub a voice, cut highlights and build a video — nothing is missing.\n\nThe only thing the machine changes is how many jobs run at once. That is the one question worth spending more money on.',
      },
      { h2: 'A weak machine loses no features, it just queues longer' },
      {
        p: 'Work goes into a queue and runs several jobs at a time. How many run at once comes out of this rule: every 3 CPU cores buys one job, every 3 GB of free RAM buys another, and the ceiling is 8.',
      },
      {
        ul: [
          '4 cores, 8 GB: one job at a time. Everything works, each job waits for the one before it.',
          '8 cores, 16 GB: two jobs at once. This is the tier I would recommend to anyone working on it daily.',
          '12 threads, 32 GB: four jobs at once — the measured sweet spot, and past it the money stops buying much.',
        ],
      },
      {
        figure: {
          src: '/blog/cau-hinh-may-en.svg',
          alt: 'Three machine tiers: 4 cores and 8 GB running one job, 8 cores and 16 GB running two, 12 threads and 32 GB running four at once',
          caption: 'Three tiers and how many jobs each runs at once. The RAM column is free RAM, not the RAM you bought.',
        },
      },
      { h2: 'Double the jobs does not give you double the output' },
      {
        p: 'Measured on eight short clips per batch, changing exactly one thing — how many jobs run at once: two jobs produced 7.35 videos a minute, four jobs produced 8.84. Doubling the jobs bought about 20% more output.',
      },
      {
        p: 'So if you make a few short videos a day, a mid-range machine is not your problem. The gap only matters when you run dozens of videos in one batch, or make long videos with many scenes — those jobs are heavier and the queue is longer.',
      },
      { h2: 'RAM is the part people buy too little of' },
      {
        p: 'Across 67 jobs back to back, the whole system peaked at 4.2 GB of RAM. That sounds like 8 GB is plenty, but that figure is the video work — it does not count the operating system, the browser you have open, or the platform layer that takes its share before the first job starts.',
      },
      {
        note: 'The pain is in RAM, not in the graphics card. When a machine runs out of memory in the middle of a batch, the system does not pause and wait for you — the jobs being built are lost with it. One batch of 30 videos lost 6 that way. If your budget stretches to one upgrade, make it RAM.',
      },
      { h2: 'Disk: 15 GB to install, and a separate budget for the videos you make' },
      {
        p: 'The installer wants about 15 GB free, most of it the application image and the voice model downloaded on the first run. That is what it takes to install and run — not what it takes to work for months.',
      },
      {
        ul: [
          'The Vietnamese voice model: about 0.9 GB, downloaded once.',
          'The speech-recognition model behind subtitles and highlight cutting: about 0.2 GB.',
          'The logo remover: about 70 MB, which is nothing.',
          'The videos you make: this is the big one. A machine a few weeks into regular use can be holding 17 GB of them.',
        ],
      },
      {
        p: 'Set aside 60 GB or more if you work at this regularly, and put it on a solid-state drive. A full disk is the most common failure once you have been running for a while, and it shows up as a video that fails to build rather than as a message saying the disk is full — so you go looking for a software bug in the wrong place.',
      },
      { h2: 'Graphics card: nice to have, and no reason to buy a machine for it' },
      {
        p: 'A graphics card is not a requirement, and nobody should sell you one on the strength of this software. The rendering stage has a path that uses the card, but no feature only works when a card is present.',
      },
      {
        ul: [
          'Integrated graphics: runs normally, slower at the rendering stage.',
          'A dedicated card: clearly faster at rendering, especially with several jobs at once.',
          'If you do buy one, an ordinary 6 GB card is enough. This software does not need a powerful card, only a present one.',
          'Keep the driver current. A good card on an old driver quietly falls back to the processor, and nothing tells you it happened.',
        ],
      },
      { h2: 'Why I would buy Windows' },
      {
        p: 'The software runs on Windows and on macOS, and on a Mac it runs the build made for that machine’s chip rather than emulating — so this is not about speed. The difference is one job: pairing an Android phone to post to Shopee Video.',
      },
      {
        ul: [
          'Windows 10/11: all of it, with no exceptions. This is what I would buy, and what most people doing this work already run.',
          'An Intel Mac: also all of it, same as Windows.',
          'An Apple Silicon Mac: fast and fine, but wireless phone pairing is off the table. If you never post to Shopee Video, that costs you nothing.',
        ],
      },
      {
        note: 'Worth knowing before you lose an evening to it: on an Apple Silicon Mac, pairing an Android phone over Wi-Fi does not work, because the phone tooling has no build for that chip. The way around it is one USB cable, or pairing on a Windows machine and carrying on from there. Windows and Intel Macs are unaffected.',
      },
      { h2: 'What to have ready before you install' },
      {
        ol: [
          'Free space: 15 GB to install, and 60 GB is the honest number if you plan to use it regularly.',
          'A free background application the software runs inside, installed once. The install guide names it and links to it — on Windows there is a second piece that goes with it.',
          'An Android phone, only if you intend to post to Shopee Video. Facebook publishes through a Page, so it needs no phone.',
        ],
      },
      {
        p: 'After that, leave the machine on. The first install pulls about 8 GB, so it takes a while — tens of minutes depending on your connection. After that you only need the network to publish, or when you have AI write the script.\n\nAn old machine still works, just more slowly, so do not buy a new one because of this article. And if you are still unsure, ask before you pay rather than guessing.',
      },
    ],
  },
  faq: {
    vi: [
      {
        q: 'Máy 8 GB RAM có chạy được không?',
        a: 'Được. Đó là mức tối thiểu thật, và ở mức đó hệ thống chạy một việc một lúc với đầy đủ tính năng. Điều bạn mất là thời gian chờ, không phải tính năng.',
      },
      {
        q: 'Có cần card đồ hoạ rời không?',
        a: 'Không. Card rời làm khâu dựng hình nhanh hơn, nhưng mọi tính năng đều có đường chạy trên CPU. Nếu mua card, chọn loại phổ thông 6 GB và nhớ cập nhật driver.',
      },
      {
        q: 'Máy Mac chip M có chạy được không?',
        a: 'Chạy tốt, và chạy đúng bản dành cho chip M nên không chậm. Chỉ có một việc không làm được: ghép điện thoại Android qua Wi-Fi để đăng Shopee Video. Cách vòng là cắm cáp USB một lần, hoặc ghép trên một máy Windows.',
      },
      {
        q: 'Cần bao nhiêu chỗ trống trên ổ đĩa?',
        a: 'Khoảng 15 GB để cài. Nên để dành 60 GB nếu bạn làm thường xuyên, vì video sinh ra chiếm chỗ nhanh hơn bạn tưởng — một máy dùng vài tuần đã có thể có 17 GB video.',
      },
      {
        q: 'Máy chạy được nhưng yếu thì có cách nào nhanh hơn không?',
        a: 'Hai cách: giảm số việc chạy cùng lúc để máy không phải chia sức, và để việc nặng chạy vào lúc bạn không dùng máy. Cách thứ ba là nâng RAM — đó là thứ đáng nâng trước card đồ hoạ.',
      },
    ],
    en: [
      {
        q: 'Will it run on a machine with 8 GB of RAM?',
        a: 'Yes. That is the real minimum, and at that level it runs one job at a time with every feature available. What you lose is waiting time, not features.',
      },
      {
        q: 'Do I need a dedicated graphics card?',
        a: 'No. A dedicated card makes rendering faster, but every feature has a path that runs on the processor. If you do buy one, an ordinary 6 GB card is enough — and keep the driver up to date.',
      },
      {
        q: 'Does it run on an Apple Silicon Mac?',
        a: 'It does, and it runs the build made for that chip rather than emulating, so it is not slow. One thing does not work: pairing an Android phone over Wi-Fi to post to Shopee Video. Work around it with a single USB cable, or pair on a Windows machine.',
      },
      {
        q: 'How much free disk space does it need?',
        a: 'About 15 GB to install. Set aside 60 GB if you work at this regularly — the videos you make take up room faster than you expect, and a machine a few weeks in can already be holding 17 GB of them.',
      },
      {
        q: 'Is there a way to go faster on a weak machine?',
        a: 'Two: run fewer jobs at once so the machine is not dividing its strength, and leave the heavy work for hours when you are not using it. The third is more RAM — that is the upgrade to make before a graphics card.',
      },
    ],
  },
};

/**
 * Luồng affiliate — the whole chain behind one button.
 *
 * This is the longest flow in the app and the one with the most controls, so
 * the page is built around the thing the person actually watches: the six-line
 * progress panel. The stage names are quoted from `aff.stage_*` and nothing
 * else in the topic is named that is not a key in `translations.py` — the
 * internal guide calls the screen's product button "Tạo video từ sản phẩm
 * này", which is not what the screen says.
 *
 * The limits (20 links, 30 videos, 470px) are the app's own, read from
 * `shortGPT/affiliate/flow.py` and `shortGPT/agent/tools.py`, and the refusal
 * messages are quoted rather than paraphrased because they appear verbatim in
 * the progress panel.
 */
export default {
  key: 'luong-affiliate',
  group: 'sell',
  slug: { vi: 'luong-affiliate', en: 'affiliate-flow' },
  updated: '2026-10-13',
  order: 1,
  title: { vi: 'Luồng affiliate', en: 'Affiliate flow' },
  description: {
    vi: 'Dán link Shopee rồi bấm một nút: app đọc sản phẩm, dựng video cho từng sản phẩm, rồi đưa bài sang hàng đợi đăng Shopee hoặc Facebook.',
    en: 'Paste Shopee links and press one button: the products are read, the videos are made, and the posts are queued for Shopee or Facebook.',
  },
  lead: {
    vi: 'Sáu bước chạy liền nhau từ một lần bấm. Bạn không phải làm từng bước một — chỉ ngồi xem cột **Tiến trình**.',
    en: 'Six steps run back to back from one press. You do not drive them one at a time — you watch the **Progress** column.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/luong-affiliate-01-screen-vi.webp',
          alt: 'Màn Affiliate flow trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Một nút, sáu bước' },
      {
        p: 'Màn **Affiliate flow** làm cả dây chuyền. Bạn dán link ở khối **Sản phẩm**, chọn vài thứ ở khối **Video**, tick chỗ đăng ở khối **Đăng** — rồi bấm **Bắt đầu**. Mỗi bước hiện một dòng trong khối **Tiến trình**:',
      },
      {
        table: {
          head: ['Dòng trong Tiến trình', 'Việc nó làm'],
          rows: [
            ['**1. Đọc sản phẩm**', 'Mở từng link, lấy tên, giá và ảnh của sản phẩm'],
            ['**2. Tải ảnh và sàng lọc**', 'Tải ảnh về, bỏ ảnh quá nhỏ và ảnh nền trắng'],
            ['**3. Viết kịch bản**', 'Mỗi video một kịch bản riêng, AI viết theo một hướng khác nhau'],
            ['**4. Tạo video**', 'Dựng ảnh, giọng đọc và nhạc nền thành video'],
            ['**5. Xếp vào hàng đợi đăng**', 'Đưa video sang màn Shopee hoặc Facebook, kèm chú thích'],
            ['**6. Đăng bài**', 'Đăng thật, trên chính màn đang giữ hàng đợi đó'],
          ],
        },
      },
      {
        note: 'Bước nào làm không đủ số thì dòng của nó **chuyển đỏ** và lượt chạy dừng ở đó — nó không quay lại làm bù. Video đã dựng xong vẫn nằm trong **Thư viện video**.',
      },

      { h2: 'Chuẩn bị trước' },
      {
        p: 'Bốn thứ này chỉ cần khi bạn dùng tới chúng, nhưng thiếu thì lượt chạy dừng giữa đường:',
      },
      {
        ul: [
          '**Khoá AI** — cho bước viết kịch bản. Thiếu thì lượt chạy dừng trước khi dựng video nào.',
          '**Cửa sổ Chrome đã đăng nhập Shopee** — bước 1 đọc sản phẩm qua cửa sổ đó. Xem trang **Link sản phẩm** để mở và đăng nhập.',
          '**Điện thoại đã ghép** — chỉ khi bạn tick **Shopee** ở khối **Đăng**.',
          '**Facebook đã kết nối** — chỉ khi bạn tick **Facebook** ở đó.',
          '**Một bài nhạc, hoặc để Nhạc nền là Không** — bỏ trống cả hai thì nút **Bắt đầu** bị chặn ngay.',
        ],
      },
      {
        note: 'Không tick gì ở khối **Đăng** cũng được: "Không tick gì thì chỉ tạo video, không đăng." Video vẫn nằm trong **Thư viện video** và đăng sau bằng màn Shopee hoặc Facebook.',
      },

      { h2: 'Chạy một lô' },
      {
        steps: [
          {
            title: 'Dán link vào ô Link Shopee',
            body: 'Mỗi dòng một link, **tối đa 20 link** một lượt. Bấm **Đọc sản phẩm** ngay trên ô đó để biết link nào đọc được trước khi chạy: dòng dưới ô báo đọc được bao nhiêu trên tổng số.',
          },
          {
            title: 'Chọn Số video mỗi sản phẩm',
            body: 'Mỗi video có kịch bản riêng và hướng riêng. Một lượt chạy làm **tối đa 30 video** — quá số đó thì nút **Bắt đầu** không chạy và nói rõ tổng số.',
          },
          {
            title: 'Chọn giọng, khung hình, nhạc',
            body: '**Giọng đọc bài** có nút **Nghe thử** ngay cạnh — nghe rồi hãy chọn. **Tỉ lệ khung hình** và **Tốc độ đọc** áp cho cả lô. **Nhạc nền** để **Không**, hoặc chọn **Ngẫu nhiên** / **Một bài** rồi chọn **Bài nhạc**.',
          },
          {
            title: 'Tick chỗ đăng ở khối Đăng',
            body: 'Tick **Shopee** thì chọn **Điện thoại** (bấm **Dò lại điện thoại** nếu ô trống) và **Nghỉ giữa các bài (giây)** — mặc định 30. Tick **Facebook** thì tick **Page sẽ đăng** (bấm **Đọc lại danh sách Page** nếu danh sách trống) và chọn **Kiểu bài**.',
          },
          {
            title: 'Bấm Bắt đầu',
            body: 'Dòng ngay trên nút nói trước quy mô: bao nhiêu sản phẩm, nhân với số video mỗi sản phẩm, ra bao nhiêu video và khoảng mấy phút. Sai thì sửa trước khi bấm. Muốn cắt giữa đường thì bấm **Dừng**.',
          },
        ],
      },
      {
        check: 'Sáu dòng trong **Tiến trình** chạy từ trên xuống. Hết bước 4 là video đã nằm trong **Thư viện video**; hết bước 6 thì hàng đợi bên Shopee hoặc Facebook đã đăng xong.',
      },

      { h2: 'Những chỗ dễ mắc' },
      {
        table: {
          head: ['Hiện tượng', 'Nghĩa là'],
          rows: [
            ['Đang có một lô chạy. Dừng nó trước đã.', 'Mỗi lúc chỉ một lượt. Để nó chạy xong, hoặc bấm **Dừng**, rồi mới chạy lô mới'],
            ['Luồng dừng vì lỗi: …', 'Lỗi hiện nguyên văn trong Tiến trình. Khởi động lại app cũng cắt lượt đang chạy — phải làm lại từ đầu'],
            ['Không sản phẩm nào có ảnh dùng được, nên không có gì để làm.', 'Ảnh của sản phẩm nhỏ hơn **470×470** hoặc là ảnh nền trắng. Chọn sản phẩm khác'],
            ['Model viết kịch bản không trả lời (…), nên luồng dừng trước khi render.', 'Khoá AI, hoặc nhà cung cấp đang lỗi. Chưa video nào được dựng'],
            ['không đăng — video nằm trong Thư viện', 'Không tick chỗ đăng nào. Video dùng được, đăng sau bằng màn Shopee hoặc Facebook'],
            ['đã đăng … · lỗi …', 'Một phần bài không lên. Màn đang giữ hàng đợi nói rõ bài nào và vì sao'],
            ['Đã dừng. Video đã tạo xong vẫn nằm trong Thư viện; không đăng gì cả.', 'Bấm **Dừng** giữa đường: phần đã dựng còn nguyên, phần đăng chưa chạy'],
          ],
        },
      },

      { h2: 'Việc tiếp theo' },
      {
        p: 'Cùng nhóm bán hàng còn màn **Link sản phẩm** — chỗ đọc link và xem từng sản phẩm trước khi dựng video từ nó.',
      },
      { link: 'link-san-pham' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/luong-affiliate-01-screen-en.webp',
          alt: 'The Affiliate flow screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'One press, six steps' },
      {
        p: 'The **Affiliate flow** screen runs the whole chain. Paste the links under **Products**, choose a few things under **Video**, tick where it goes under **Publish** — then press **Start**. Each step gets a line under **Progress**:',
      },
      {
        table: {
          head: ['Line under Progress', 'What it does'],
          rows: [
            ['**1. Read the products**', 'Opens each link and takes the name, the price and the pictures'],
            ['**2. Download and sift the pictures**', 'Downloads them and leaves out the too-small ones and the blank white ones'],
            ['**3. Write the scripts**', 'One script per video, written by the AI from a different angle each time'],
            ['**4. Make the videos**', 'Renders the pictures, the voice and the music into videos'],
            ['**5. Fill the publishing queue**', 'Hands the videos to the Shopee or Facebook screen, caption attached'],
            ['**6. Publish**', 'Actually posts them, on the screen holding that queue'],
          ],
        },
      },
      {
        note: 'A step that falls short of its number turns **red** and the run stops there — it does not go back and make up the difference. Videos already rendered are still in the **Video library**.',
      },

      { h2: 'Before you start' },
      { p: 'These are only needed if you use them, but each one stops the run somewhere in the middle:' },
      {
        ul: [
          '**An AI key** — for the scripting step. Without one the run stops before a single video is rendered.',
          '**A signed-in Shopee Chrome window** — step 1 reads the products through it. The **Shop links** page opens and signs it in.',
          '**A paired phone** — only if you tick **Shopee** under **Publish**.',
          '**Facebook connected** — only if you tick **Facebook** there.',
          '**A song, or Background music set to None** — with both empty the **Start** button refuses outright.',
        ],
      },
      {
        note: 'Ticking nothing under **Publish** is fine: "Tick nothing to make the videos without posting them." The videos sit in the **Video library**, and you can post them later from the Shopee or Facebook screen.',
      },

      { h2: 'Running a batch' },
      {
        steps: [
          {
            title: 'Paste the links into Shopee links',
            body: 'One link per line, **at most 20** in a run. Press **Read the products** right there to learn which ones can be read before committing: the line under the box says how many were read out of how many.',
          },
          {
            title: 'Choose Videos per product',
            body: 'Each video gets its own script and its own angle. A run makes **at most 30 videos** — past that the **Start** button refuses and tells you the total.',
          },
          {
            title: 'Choose the voice, the frame and the music',
            body: '**Voice to read with** has a **Preview** button beside it — listen before you choose. **Frame ratio** and **Speaking speed** apply to the whole batch. **Background music**: **None**, or **Random** / **One song** with a **Song**.',
          },
          {
            title: 'Tick where it goes under Publish',
            body: 'Ticking **Shopee** means choosing the **Phone** (press **Look for phones** if the box is empty) and the **Rest between posts (s)** — 30 by default. Ticking **Facebook** means ticking the **Pages to post to** (press **Read the Page list** if it is empty) and choosing **Post as**.',
          },
          {
            title: 'Press Start',
            body: 'The line above the button tells you the size of the run first: products, times videos per product, how many videos and roughly how many minutes. Fix it there if it is wrong. To cut it short: **Stop**.',
          },
        ],
      },
      {
        check: 'The six lines under **Progress** run top to bottom. By the end of step 4 the videos are in the **Video library**; by the end of step 6 the queue over on Shopee or Facebook has finished posting.',
      },

      { h2: 'Where it goes wrong' },
      {
        table: {
          head: ['What you see', 'What it means'],
          rows: [
            ['A run is already going. Stop it first.', 'One run at a time. Let it finish, or press **Stop**, before starting another'],
            ['The run stopped with an error: …', 'The error is quoted in full under Progress. Restarting the app also kills a run in flight — start again'],
            ['No product had a usable picture, so there is nothing to make.', 'The listing\'s pictures are under **470×470**, or they are blank white. Try another product'],
            ['The model that writes the scripts is not answering (…), so the run stopped before any rendering.', 'The AI key, or the provider behind it. Nothing was rendered'],
            ['not publishing — the videos are in the library', 'Nothing was ticked under Publish. The videos are fine — post them later from the Shopee or Facebook screen'],
            ['… posted · … failed', 'Some posts did not go up. The screen holding that queue says which ones and why'],
            ['Stopped. Videos already made are in the library; nothing was published.', '**Stop** pressed partway: what was rendered survives, the posting never started'],
          ],
        },
      },

      { h2: 'What next' },
      {
        p: 'The **Shop links** screen in the same group is where a link is read on its own, and where you look at a product\'s pictures before a video is made from them.',
      },
      { link: 'link-san-pham' },
    ],
  },
};

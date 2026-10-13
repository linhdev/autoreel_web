/**
 * Luồng reup — one screen, five jobs, each of them optional.
 *
 * The page is organised around the checkbox group (`reup.steps`), because that
 * is the screen's own structure: tick a job and its options appear, tick
 * nothing and the video is still fetched and filed. The five stage names in
 * the progress line are quoted from `reup.stage_*`; the cut, wipe, dub and
 * publish controls are the keys the screen actually builds (`hl.length`,
 * `hl.voice`, `reup.clip_count`, `reup.regions`), read from
 * `gui/ui_tab_reup.py`.
 *
 * Clip counts and limits come from `flow.MAX_CLIPS` (10) and `MAX_PER_RUN`
 * (30) — not from the internal guide, which has neither.
 */
export default {
  key: 'luong-reup',
  group: 'sell',
  slug: { vi: 'luong-reup', en: 'reup-flow' },
  updated: '2026-10-13',
  order: 2,
  title: { vi: 'Luồng reup', en: 'Reup flow' },
  description: {
    vi: 'Tải video về, cắt đoạn hay nhất, xoá logo, lồng tiếng mới, chèn chữ rồi đăng — tick việc cần làm rồi bấm một lần.',
    en: 'Fetch a video, cut the highlights, take the logo off, re-voice it, add text, then post — tick the jobs you want and press once.',
  },
  lead: {
    vi: 'Năm việc, tick cái nào làm cái đó. Không tick gì thì app vẫn tải video về và ghi vào **Thư viện video**.',
    en: 'Five jobs, tick the ones you want. With nothing ticked the app still fetches the video and files it in the **Video library**.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/luong-reup-01-screen-vi.webp',
          alt: 'Màn Luồng reup trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Luồng reup làm gì' },
      {
        p: 'Màn **Luồng reup** nhận **Link, hoặc đường dẫn trong máy** — YouTube, TikTok, Douyin, hoặc một file — và cũng nhận file kéo thả vào ô **Hoặc kéo thả file video vào đây**. Một lượt nhận **tối đa 30 video**.',
      },
      {
        p: 'Mỗi nguồn đi qua đúng những bước bạn tick, và dòng tiến trình của nó chạy qua sáu mốc: **Tải về** → **Cắt** → **Xoá logo** → **Lồng tiếng** → **Đóng dấu** → **Đăng**. Bước nào không tick thì mốc đó không chạy.',
      },
      {
        note: 'Không tick gì ở khối **Làm gì** vẫn có ích: app tải video về và ghi vào **Thư viện video** — cách nhanh nhất để lấy một video về máy.',
      },

      { h2: 'Năm việc có thể tick' },
      {
        p: 'Khối **Làm gì** có năm ô tick. Mỗi ô mở ra khối **Tuỳ chọn** của riêng nó ở dưới:',
      },
      {
        table: {
          head: ['Ô tick', 'Khối tuỳ chọn', 'Có gì trong đó'],
          rows: [
            ['**Cắt đoạn hay nhất**', 'Cắt đoạn', '**Số đoạn mỗi video** (tối đa 10), **Số giây mỗi đoạn**, **Khung hình**'],
            ['**Xoá logo**', 'Logo', '**Logo nằm ở đâu** — mỗi dòng một vùng'],
            ['**Lồng tiếng**', 'Lồng tiếng', '**Giọng đọc** kèm nút **Nghe thử**, **Tốc độ đọc**, **Ghi phụ đề lên video**'],
            ['**Chèn chữ & logo**', 'Chèn chữ & logo', 'Chữ và logo đóng lên video'],
            ['**Đăng bài**', 'Đăng bài', '**Đăng ở đâu**, **Link sản phẩm**, điện thoại, Page, **Đăng dạng**'],
          ],
        },
      },
      {
        p: '**Logo nằm ở đâu** nhận mỗi dòng một vùng, viết theo thứ tự **cạnh, x, y, rộng, cao** — ví dụ `top,20,20,300,80`. Để trống thì app tự tìm logo trên hình.',
      },
      {
        note: 'Tick **Lồng tiếng** thì logo được xoá **ngay trong lượt render đó** — một lượt ffmpeg, không phải hai. Tick cả **Xoá logo** lẫn **Lồng tiếng** không làm chậm thêm.',
      },

      { h2: 'Chạy một lượt' },
      {
        steps: [
          {
            title: 'Dán nguồn vào khối Nguồn',
            body: 'Mỗi dòng một link hoặc một đường dẫn file, hoặc kéo thả file vào ô bên cạnh. Tối đa 30 nguồn một lượt.',
          },
          {
            title: 'Tick việc cần làm ở khối Làm gì',
            body: 'Tick ô nào thì khối tuỳ chọn của nó hiện ra ở khối **Tuỳ chọn** bên dưới. Không tick gì vẫn chạy được — chỉ tải video về.',
          },
          {
            title: 'Điền từng khối tuỳ chọn',
            body: 'Chọn số đoạn và khung hình cho **Cắt đoạn**; khai vùng logo nếu muốn **Xoá logo** đúng chỗ; chọn **Giọng đọc** cho **Lồng tiếng** — bấm **Nghe thử** trước khi chọn, vì cả video chỉ đọc bằng một giọng.',
          },
          {
            title: 'Chọn chỗ đăng ở khối Đăng bài',
            body: 'Chọn **Đăng ở đâu**, dán **Link sản phẩm** (một sản phẩm, không phải cả danh mục — Shopee bắt buộc có, Facebook thì link nằm trong caption), chọn **Điện thoại** hoặc **Page Facebook**, và **Nghỉ giữa các bài (giây)**.',
          },
          {
            title: 'Bấm Reup',
            body: 'Dòng ngay trên nút nói trước quy mô: bao nhiêu video, khoảng mấy phút. Muốn dừng thì bấm **Dừng** — phần đã làm xong vẫn nằm trong **Thư viện video**.',
          },
        ],
      },
      {
        check: 'Mỗi nguồn có một dòng trạng thái chạy từ **Tải về** tới **Đăng**. Nguồn nào không ra được gì thì dòng của nó nói lý do ngay tại chỗ, và những nguồn còn lại vẫn chạy tiếp.',
      },

      { h2: 'Những chỗ dễ mắc' },
      {
        table: {
          head: ['Hiện tượng', 'Nghĩa là'],
          rows: [
            ['Đang có một lượt chạy. Dừng nó trước đã.', 'Mỗi lúc một lượt. Chờ xong hoặc bấm **Dừng** rồi chạy lượt mới'],
            ['Không lấy được gì từ link này.', 'Link không tải được: nguồn chặn, link hỏng, hoặc là link của một trang lạ'],
            ['Không có file nào ở …', 'Đường dẫn file sai, hoặc file không nằm trong thư mục app đọc được'],
            ['Không đọc được video.', 'Bước phân tích không mở được video — thường là file hỏng'],
            ['Video này không có đoạn nào đáng cắt.', 'Bước tìm đoạn không thấy chỗ nào đáng cắt. Bỏ tick **Cắt đoạn hay nhất** nếu bạn chỉ muốn tải nguyên video về'],
            ['Không xoá được logo.', 'Vùng logo khai chưa đúng. Xem lại toạ độ **cạnh, x, y, rộng, cao**'],
            ['Không clip nào lồng tiếng xong.', 'Cả loạt clip lỗi ở bước lồng tiếng — xem dòng trạng thái của từng clip'],
            ['Đã dừng. Phần đã làm xong vẫn nằm trong Thư viện; lượt này chưa đăng gì cả.', '**Dừng** giữa đường: phần dựng còn nguyên, phần đăng chưa chạy'],
          ],
        },
      },
      {
        note: 'Lượt chạy sống trong chính tiến trình của app: khởi động lại app giữa chừng là lượt đó bị cắt. **Dừng** không cắt ngang việc đang chạy dở — file đang tải thì tải xong file đó, clip đang dựng thì dừng ở lần kiểm tra kế tiếp, và phần đã xong vẫn được giữ. Bài đã bắt đầu đăng thì thuộc về màn đang giữ hàng đợi, không thuộc nút **Dừng** ở đây.',
      },

      { h2: 'Việc tiếp theo' },
      {
        p: 'Video làm ra nằm trong **Thư viện video** — nơi xem lại, tải về, và chọn cho các màn đăng bài.',
      },
      { link: 'thu-vien-video' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/luong-reup-01-screen-en.webp',
          alt: 'The Reup flow screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'What the reup flow does' },
      {
        p: 'The **Reup flow** screen takes **Links, or paths inside the container** — YouTube, TikTok, Douyin, or a file — and also takes a file dropped into **Or drop video files here**. One run takes **at most 30 videos**.',
      },
      {
        p: 'Each source goes through exactly the steps you tick, and its progress line passes six marks: **Fetch** → **Cut** → **Logo off** → **Re-voice** → **Mark** → **Post**. A step you did not tick leaves its mark out.',
      },
      {
        note: 'Ticking nothing under **What to do** is still useful: the video is fetched and filed in the **Video library** — the quickest way to get a video onto this machine.',
      },

      { h2: 'The five jobs' },
      { p: 'The **What to do** group has five checkboxes. Each one opens its own group under **How**:' },
      {
        table: {
          head: ['Checkbox', 'Its group', 'What is in it'],
          rows: [
            ['**Cut the highlights**', 'Cutting', '**Clips per video** (at most 10), **Seconds per clip**, **Clip shape**'],
            ['**Take the logo off**', 'The logo', '**Where the logo is** — one region per line'],
            ['**Re-voice it**', 'Re-voicing', '**Voice** with a **Preview** button, **Speaking speed**, **Burn in subtitles**'],
            ['**Add text & logo**', 'Add text & logo', 'The words and the mark stamped onto the video'],
            ['**Post it**', 'Posting', '**Where to post**, **Product link**, phone, Pages, **Post as**'],
          ],
        },
      },
      {
        p: '**Where the logo is** takes one region per line, written **edge, x, y, width, height** — for example `top,20,20,300,80`. Leave it blank and the remover looks for the logo itself.',
      },
      {
        note: 'With **Re-voice it** ticked the logo comes off **inside that render** — one pass of ffmpeg rather than two. Ticking both **Take the logo off** and **Re-voice it** costs no extra time.',
      },

      { h2: 'Running one' },
      {
        steps: [
          {
            title: 'Paste the sources into Sources',
            body: 'One link or one file path per line, or drop the files into the box beside it. At most 30 sources in a run.',
          },
          {
            title: 'Tick the jobs under What to do',
            body: 'Every box you tick brings its own group up under **How**. Ticking nothing works too — the run just fetches the video.',
          },
          {
            title: 'Fill in each group under How',
            body: 'Clips per video and clip shape for **Cutting**; the logo regions if you want it taken off the right place; a **Voice** for **Re-voicing** — press **Preview** before choosing, because one voice reads the whole clip.',
          },
          {
            title: 'Choose where it goes under Posting',
            body: 'Pick **Where to post**, paste a **Product link** (one product, not a category — Shopee needs it, Facebook takes it in the caption), choose the **Phone** or the **Facebook Pages**, and set the **Rest between posts (s)**.',
          },
          {
            title: 'Press Reup',
            body: 'The line above the button tells you what the run amounts to first: how many videos, roughly how many minutes. To stop: **Stop** — what is already finished stays in the **Video library**.',
          },
        ],
      },
      {
        check: 'Each source has a status line running from **Fetch** to **Post**. A source that produced nothing says why on its own line, and the rest of the sources carry on.',
      },

      { h2: 'Where it goes wrong' },
      {
        table: {
          head: ['What you see', 'What it means'],
          rows: [
            ['A run is already going. Stop it first.', 'One run at a time. Wait it out or press **Stop**, then start another'],
            ['Nothing came back for this link.', 'The link could not be fetched: the source blocks it, the link is dead, or it is a site the app does not read'],
            ['There is no file at …', 'The path is wrong, or the file is not somewhere the app can read'],
            ['The video could not be read.', 'The analysis step could not open the file — usually a damaged download'],
            ['Nothing in this video was worth cutting.', 'The scan found no window worth cutting. Untick **Cut the highlights** if all you wanted was the video itself'],
            ['The logo could not be taken off.', 'The region is wrong. Check the **edge, x, y, width, height** numbers'],
            ['None of these clips came back re-voiced.', 'Every clip failed at the dubbing step — the status line of each one says how'],
            ['Stopped. What was already made is in the library; nothing was posted by this run.', '**Stop** pressed partway: what was rendered survives, the posting never started'],
          ],
        },
      },
      {
        note: 'A run lives inside the app\'s own process: restarting the app mid-run cuts it off. **Stop** does not cut into work already in flight — a file being fetched finishes, a clip mid-render ends at its next check, and what already finished is kept. A post that has started going out belongs to the screen holding that queue, not to **Stop** here.',
      },

      { h2: 'What next' },
      {
        p: 'What a run produced is in the **Video library** — where you watch it, download it, and pick it for the posting screens.',
      },
      { link: 'thu-vien-video' },
    ],
  },
};

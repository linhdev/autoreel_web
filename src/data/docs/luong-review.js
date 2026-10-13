/**
 * Luồng review — one source video in, several review videos out.
 *
 * The one thing this topic has to make plain is that the source is read and
 * never reposted, which is the difference between it and the reup flow next
 * door; `review.source_hint` says it in one line and the lead picks that up.
 * The two picture modes are a table because the choice changes what the rest
 * of the screen means — the frame options and the language both depend on it.
 *
 * Every label is a key from `translations.py`; the count limit (20) is
 * `MAX_PER_RUN` in `shortGPT/review/flow.py`.
 */
export default {
  key: 'luong-review',
  group: 'sell',
  slug: { vi: 'luong-review', en: 'review-flow' },
  updated: '2026-10-13',
  order: 3,
  title: { vi: 'Luồng review', en: 'Review flow' },
  description: {
    vi: 'Đưa một video: app đọc lời trong đó, viết thành nhiều kịch bản review mới rồi dựng mỗi kịch bản thành một video và đăng.',
    en: 'Give it one video: the app reads what is said in it, writes new review scripts, makes a video out of each, and posts them.',
  },
  lead: {
    vi: 'Một nguồn vào, nhiều video ra. Video gốc **chỉ được đọc** — không bao giờ bị đăng lại.',
    en: 'One source in, several videos out. The source is **read only** — it is never reposted.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/luong-review-01-screen-vi.webp',
          alt: 'Màn Luồng review trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Luồng review làm gì' },
      {
        p: 'Màn **Luồng review** nhận **một** video — **Link, hoặc file trong máy**, hoặc file kéo thả vào ô **Hoặc kéo thả file video vào đây**. App đọc lời nói trong video đó rồi viết ra nhiều kịch bản review mới từ nội dung của nó.',
      },
      {
        p: 'Bốn mốc tiến trình: **Đọc** → **Kịch bản** → **Dựng video** → **Đăng**. Mỗi video ra có một thẻ riêng — **Video 1**, **Video 2** — với trạng thái riêng: đang viết, đang dựng, xong, lỗi.',
      },
      {
        note: 'Video gốc chỉ được đọc để lấy nội dung. Kể cả khi bạn tick đăng, thứ được đăng là video app dựng ra, không phải nguồn.',
      },

      { h2: 'Hai nguồn hình' },
      {
        p: 'Khối **Làm ra gì** có một lựa chọn đổi nghĩa cả phần còn lại của màn: **Hình lấy từ đâu**.',
      },
      {
        table: {
          head: ['Chế độ', 'Hình lấy từ đâu', 'Kèm theo'],
          rows: [
            ['**Tư liệu tải từ Internet, đọc lời tự động**', 'Các cảnh tải từ Internet, do bên render chọn', '**Số giây mỗi cảnh** — mỗi cảnh dài bao lâu'],
            ['**Cắt từ video gốc, máy này đọc lời**', 'Một đoạn của chính video đang review, đọc kịch bản mới lên trên', '**Khung nguyên bản**, và chỉ ở chế độ này mới có'],
          ],
        },
      },
      {
        note: 'Chế độ **Cắt từ video gốc, máy này đọc lời** chỉ đọc được **tiếng Việt**. Chọn **Khung nguyên bản** ở chế độ tư liệu thì app từ chối: tư liệu là nhiều cảnh rời ghép lại, không có khung nào là khung gốc.',
      },

      { h2: 'Chạy một lượt' },
      {
        steps: [
          {
            title: 'Dán nguồn vào khối Video đem đi review',
            body: 'Một link, hoặc kéo thả một file. Dòng dưới ô báo **Một nguồn: …** khi app đã nhận. Mỗi lượt một nguồn.',
          },
          {
            title: 'Chọn Làm mấy video và Hình lấy từ đâu',
            body: '**Làm mấy video** nhận **tối đa 20** một lượt; quá số đó app bảo chạy hai lượt. Rồi chọn một trong hai chế độ hình ở bảng trên.',
          },
          {
            title: 'Chọn giọng và dạng khung',
            body: '**Giọng đọc lời review** — mặc định ZeroTTS, chạy trong máy, tiếng Việt, không cần key. **Ngôn ngữ của video review**, **Dạng khung**, **Tốc độ đọc**, và **Nhạc dưới video** nếu muốn có nhạc.',
          },
          {
            title: 'Nói video nói về cái gì',
            body: '**Video nói về cái gì** dùng cho kịch bản và cho bên dựng; để trống thì lấy chính kịch bản. **Kịch bản phải nói gì** là chỗ ghi giọng điệu, độ dài, thứ cần nhắc hay cần tránh.',
          },
          {
            title: 'Chọn chỗ đăng ở khối Đăng đi đâu',
            body: 'Chọn **Gửi tới**. Nếu có Shopee thì **Sản phẩm đính kèm** là bắt buộc — một sản phẩm, không phải link danh mục; Facebook thì không cần. Chọn **Điện thoại đăng bài** hoặc **Page đăng mấy video này**, **Đăng dưới dạng**, và **Nghỉ giữa các bài (giây)**.',
          },
          {
            title: 'Bấm Review',
            body: 'Dòng trên nút nói trước quy mô: bao nhiêu video, khoảng mấy phút. Muốn cắt giữa đường thì bấm **Dừng** — phần đã dựng nằm trong **Thư viện video**, và lượt đó chưa đăng gì.',
          },
        ],
      },
      {
        check: 'Bốn mốc **Đọc → Kịch bản → Dựng video → Đăng** chạy từ trên xuống, và từng thẻ video chạy từ đang viết tới xong. Video dựng xong nằm trong **Thư viện video** trước khi bước đăng chạy.',
      },

      { h2: 'Những chỗ dễ mắc' },
      {
        table: {
          head: ['Hiện tượng', 'Nghĩa là'],
          rows: [
            ['Video này không có gì để đọc — máy không tìm thấy đoạn nói nào.', 'Nguồn không có lời thoại. Chọn video khác'],
            ['Máy chỉ tìm được gần như không có lời nói nào trong … giây video, …', 'Phim ít thoại thì máy đọc ra tạp âm. Nguồn này không dùng viết review được'],
            ['Kịch bản trả về không phải tiếng … — …', 'Kịch bản về sai thứ tiếng, nên app dừng trước khi dựng. Thường vì nguồn không có lời rõ'],
            ['Chỉ về … kịch bản trong khi xin …; phần còn lại không được dựng.', 'Ít kịch bản hơn số bạn xin. Phần thiếu không được dựng bù'],
            ['… video là quá số một lượt làm (…). Chạy hai lượt.', '**Tối đa 20 video** một lượt'],
            ['Khung nguyên bản chỉ dùng được ở chế độ "Cắt từ video gốc" - …', 'Đổi sang chế độ đó, hoặc chọn dạng khung khác'],
            ['Đây là link sản phẩm, không phải video. …', 'Bạn dán link Shopee vào ô nguồn. Link sản phẩm thuộc luồng Affiliate, không phải nguồn video'],
            ['Đang có một lượt chạy. Dừng nó trước.', 'Mỗi lúc chỉ một lượt'],
          ],
        },
      },
      {
        note: 'App dừng **trước khi dựng** khi nguồn không có lời rõ: nó thà không ra gì còn hơn dựng một video nói sai tiếng. Không có video nào được đăng trong những lượt như vậy.',
      },

      { h2: 'Việc tiếp theo' },
      {
        p: 'Nếu bạn có sản phẩm và muốn video bán nó, luồng affiliate là đường ngắn hơn: video dựng từ ảnh sản phẩm, không cần video của người khác.',
      },
      { link: 'luong-affiliate' },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/luong-review-01-screen-en.webp',
          alt: 'The Review flow screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'What the review flow does' },
      {
        p: 'The **Review flow** screen takes **one** video — **Link, or a file in the container**, or a file dropped on **Or drop the video file here**. It reads the speech in that video and writes a set of new review scripts out of what it finds.',
      },
      {
        p: 'Four marks of progress: **Read** → **Scripts** → **Videos** → **Post**. Every video it makes has a card of its own — **Video 1**, **Video 2** — with its own state: writing, rendering, done, failed.',
      },
      {
        note: 'The source is read for what it says and nothing else. Even when you tick posting, what goes up is the video the app made, never the source.',
      },

      { h2: 'Two sources of picture' },
      {
        p: 'One choice under **What to make** changes what the rest of the screen means: **Where the picture comes from**.',
      },
      {
        table: {
          head: ['Mode', 'Where the picture comes from', 'Comes with it'],
          rows: [
            ['**Footage from the internet, voiced automatically**', 'Shots downloaded from the internet, chosen by the renderer', '**Seconds per shot** — how long one shot lasts'],
            ['**A window of the source, spoken here**', 'A stretch of the very video being reviewed, with the new script spoken over it', '**Original frame**, and only in this mode'],
          ],
        },
      },
      {
        note: '**A window of the source, spoken here** can only speak **Vietnamese**. Choosing **Original frame** while in the footage mode is refused: footage is several shots cut together, and none of them is the original frame.',
      },

      { h2: 'Running one' },
      {
        steps: [
          {
            title: 'Paste the source into The video to review',
            body: 'One link, or drop one file. The line under the box says **One source: …** once the app has it. One source per run.',
          },
          {
            title: 'Choose How many videos and Where the picture comes from',
            body: '**How many videos** takes **at most 20** in a run; past that the app tells you to run it twice. Then pick one of the two modes above.',
          },
          {
            title: 'Choose the voice and the frame',
            body: '**The voice that reads it** — ZeroTTS by default, on this machine, Vietnamese, no key. Then **Language of the review**, **Frame shape**, **Reading speed**, and **Music under it** if you want any.',
          },
          {
            title: 'Say what the video is about',
            body: '**What the video is about** is used for the script and for the renderer; left blank it falls back to the script itself. **What the scripts must say** is where the tone, the length and anything to mention or avoid goes.',
          },
          {
            title: 'Choose where it goes under Where they go',
            body: 'Pick **Send them to**. If Shopee is one of them, **Product to attach** is required — one product, not a category link; Facebook does not need it. Choose the **Phone to post from** or the **Pages for these videos**, the **Post them as**, and the **Gap between posts (s)**.',
          },
          {
            title: 'Press Review',
            body: 'The line above the button says what the run amounts to: how many videos, roughly how many minutes. To cut it short: **Stop** — what was rendered is in the **Video library**, and that run posted nothing.',
          },
        ],
      },
      {
        check: 'The four marks **Read → Scripts → Videos → Post** run top to bottom, and every video card goes from writing to done. A finished video lands in the **Video library** before the posting step runs.',
      },

      { h2: 'Where it goes wrong' },
      {
        table: {
          head: ['What you see', 'What it means'],
          rows: [
            ['There was nothing in this video to read - no speech the transcriber could find.', 'The source has no dialogue. Pick another video'],
            ['The transcriber found almost no speech in … seconds of video, …', 'A film with little dialogue reads as noise. This source is not one to write a review from'],
            ['The script came back in a different language than … — …', 'The script came back in the wrong language, so the app stopped before rendering. Usually the source has no clear speech'],
            ['… script(s) came back where … were asked for; the rest were not made.', 'Fewer scripts than you asked for. The missing ones are not made up for'],
            ['… videos is more than one run makes (…). Start it twice.', '**At most 20 videos** in a run'],
            ['Original frame only works in "a window of the source" mode - …', 'Switch to that mode, or choose another frame shape'],
            ['That is a product link, not a video. …', 'You pasted a Shopee link into the source box. A product link belongs in the Affiliate flow, not here'],
            ['A run is already going. Stop it first.', 'One run at a time'],
          ],
        },
      },
      {
        note: 'The app stops **before rendering** when the source has no clear speech: it would rather make nothing than render a video speaking the wrong language. Nothing is posted by a run like that.',
      },

      { h2: 'What next' },
      {
        p: 'If you have a product and want videos selling it, the affiliate flow is the shorter road: the videos are made from the product\'s own pictures, with nobody else\'s video involved.',
      },
      { link: 'luong-affiliate' },
    ],
  },
};

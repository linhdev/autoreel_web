/**
 * Link từ kênh — the screen that turns a channel into a list you can edit.
 *
 * The app has two names for it and both are quoted here: the sidebar says
 * **Link từ kênh** while the page itself opens on **Từ kênh ra danh sách
 * link**. Somebody following this with the app open is looking for the words
 * on the screen in front of them, and only one of the two is on the sidebar.
 *
 * It is the one screen in **Kho của bạn** that makes nothing and keeps
 * nothing: the result is a list of links, and what happens to it afterwards is
 * somebody else's screen.
 */
export default {
  key: 'link-tu-kenh',
  group: 'store',
  slug: { vi: 'link-tu-kenh', en: 'channel-links' },
  updated: '2026-10-13',
  order: 1,
  title: { vi: 'Link từ kênh', en: 'Links from a channel' },
  description: {
    vi: 'Dán link kênh YouTube hoặc TikTok, lấy danh sách video công khai của kênh, sửa lại rồi gửi sang màn Lồng tiếng hoặc lưu thành file.',
    en: 'Paste a YouTube or TikTok channel URL and get its public videos as a list you can edit, save as a file, or send to the dubbing screen.',
  },
  lead: {
    vi: 'Màn này **không tạo video và không tải gì về**. Nó trả về một danh sách link, để bạn cắt bớt trước khi có thứ gì dùng tới.',
    en: 'This screen **makes no video and downloads nothing**. It returns a list of links, so you can trim it before anything uses it.',
  },

  body: {
    vi: [
      {
        figure: {
          src: '/docs-img/link-tu-kenh-01-screen-vi.webp',
          alt: 'Màn Link từ kênh trong AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'Màn này làm gì' },
      {
        p: 'Nhóm **Kho của bạn**, mục **Link từ kênh**. Bạn dán link một kênh **YouTube** hoặc **TikTok** vào đó, và màn này trả về danh sách video công khai của kênh ấy — mỗi dòng một link.',
      },
      {
        p: 'Trang mở ra với tiêu đề **Từ kênh ra danh sách link**; mục trong sidebar thì ngắn hơn. Cả hai đều là màn này.',
      },
      {
        note: 'Không cần khoá AI, và không có gì được tải về máy. Màn này chỉ cần mạng.',
      },

      { h2: 'Lấy danh sách' },
      {
        steps: [
          {
            title: 'Dán link kênh',
            body: 'Dán link kênh vào ô **Link kênh**. Kênh YouTube và kênh TikTok đều nhận; ô này gợi ý sẵn hai dạng:',
            code: 'https://www.youtube.com/@Fireship\nhttps://www.tiktok.com/@username',
          },
          {
            title: 'Đặt số video tối đa',
            body: 'Ô **Số video tối đa (mới nhất trước)** nhận từ **1** đến **200**, mặc định là **20**. Danh sách luôn lấy từ video mới nhất trở lại.\n\nTick **Lấy cả Shorts (chỉ YouTube)** nếu bạn muốn cả video dạng Shorts.',
          },
          {
            title: 'Bấm Lấy danh sách video',
            body: 'Danh sách đổ vào ô bên dưới, ô có nhãn **Các link — mỗi dòng một link. Sửa hoặc xoá trước khi gửi.**',
          },
          {
            title: 'Sửa danh sách',
            body: 'Xoá những dòng bạn không dùng, giữ lại những cái sẽ dùng. Ô này sửa được tự do, và có nút chép ở góc để dán sang chỗ khác.',
          },
        ],
      },
      {
        check: 'Ô link có một dòng cho mỗi video, và dòng trạng thái phía trên nói tìm được bao nhiêu video, từ kênh nào, trên nền tảng nào. Nút **Lưu danh sách thành file** chỉ bật lên khi ô đã có link.',
      },
      {
        note: 'Bấm **Lấy danh sách video** khi ô **Link kênh** còn trống thì app trả lời **Dán link kênh vào trước đã.**',
      },

      { h2: 'Gửi sang màn Lồng tiếng' },
      {
        p: 'Nút **Gửi sang tab Lồng tiếng →** ở cuối màn ghi đè ô link của màn **Lồng tiếng** bằng đúng danh sách này, rồi mở màn đó ra.',
      },
      {
        note: 'Nút đó **chỉ đưa danh sách sang**. Nó không chọn ngôn ngữ đích, không chọn giọng đọc và không bấm dịch — ba việc đó vẫn là của bạn ở màn Lồng tiếng. Nó cũng không kiểm tra gì: bấm khi ô link còn trống thì màn Lồng tiếng vẫn mở ra với ô trống.',
      },

      { h2: 'Lưu danh sách thành file' },
      {
        p: 'Nút **Lưu danh sách thành file** nén danh sách thành một file zip, bên trong là một file văn bản mỗi dòng một link. Dùng khi bạn muốn giữ danh sách lại.\n\nMuốn dán sang một chỗ khác thì nút chép ở góc ô link nhanh hơn — không cần tải file về.',
      },
    ],

    en: [
      {
        figure: {
          src: '/docs-img/link-tu-kenh-01-screen-en.webp',
          alt: 'The Channel links screen in AutoReel',
          width: 1193,
          height: 700,
        },
      },
      { h2: 'What this screen does' },
      {
        p: 'The **Kho của bạn** (your material) group, the **Link từ kênh** entry. You paste the URL of a **YouTube** or **TikTok** channel into it, and it returns that channel\'s public videos as a list — one link per line.',
      },
      {
        p: 'The page itself opens on the heading **Từ kênh ra danh sách link** ("channel to link list"); the sidebar entry is shorter. Both are this same screen.',
      },
      {
        note: 'No AI key is needed, and nothing is downloaded to your machine. This screen needs a network connection and nothing else.',
      },

      { h2: 'Getting the list' },
      {
        steps: [
          {
            title: 'Paste the channel URL',
            body: 'Paste it into **Link kênh** (channel URL). YouTube channels and TikTok channels both work; the box suggests two shapes:',
            code: 'https://www.youtube.com/@Fireship\nhttps://www.tiktok.com/@username',
          },
          {
            title: 'Set the maximum',
            body: '**Số video tối đa (mới nhất trước)** takes **1** to **200**, and defaults to **20**. The list always starts from the newest video.\n\nTick **Lấy cả Shorts (chỉ YouTube)** ("include Shorts — YouTube only") if you want Shorts in the list too.',
          },
          {
            title: 'Press Lấy danh sách video',
            body: 'The list fills the box below, whose label reads **Các link — mỗi dòng một link. Sửa hoặc xoá trước khi gửi.**',
          },
          {
            title: 'Edit the list',
            body: 'Delete the lines you will not use and keep the ones you will. The box is freely editable, and there is a copy button in its corner for pasting elsewhere.',
          },
        ],
      },
      {
        check: 'The link box holds one line per video, and the status line above says how many were found, from which channel and on which platform. The **Lưu danh sách thành file** button only lights up once there are links in the box.',
      },
      {
        note: 'Pressing **Lấy danh sách video** with **Link kênh** still empty answers **Dán link kênh vào trước đã.** ("paste a channel URL first").',
      },

      { h2: 'Sending it to the dubbing screen' },
      {
        p: 'The **Gửi sang tab Lồng tiếng →** button at the bottom of the screen overwrites the link box on the **Lồng tiếng** (dubbing) screen with exactly this list, and opens that screen.',
      },
      {
        note: 'That button **only hands the list over**. It does not choose a target language, does not pick a voice and does not press translate — those three are still yours to do on the dubbing screen. It checks nothing either: pressing it over an empty box still opens the dubbing screen with an empty box.',
      },

      { h2: 'Saving the list as a file' },
      {
        p: 'The **Lưu danh sách thành file** button packs the list into a zip whose only content is a text file with one link per line. Use it to keep the list.\n\nTo paste the list somewhere else, the copy button in the corner of the link box is quicker — nothing has to be downloaded.',
      },
    ],
  },
};

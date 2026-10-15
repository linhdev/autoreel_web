# Viết một bài cho blog này

Đọc trước khi viết hoặc sửa bất kỳ file nào trong thư mục này.
Bài mẫu: `meo-dang-shopee-video-hieu-qua.js`. Khi phân vân, mở nó ra xem.

---

## Ai đọc

Người bán hàng online: affiliate Shopee, chủ shop nhỏ, người làm reup, người
tự dựng video bán hàng. Khoảng 25–45 tuổi. **Đọc trên điện thoại**, thường
đang kẹt ở một việc cụ thể và tìm cách gỡ.

Họ không cần được thuyết phục rằng video ngắn quan trọng. Họ biết rồi. Họ cần
biết **làm thế nào**, và cần biết **chỗ nào mình đang làm sai**.

## Giọng

Một người thầy đã làm nghề, đang giải thích cho **một người** đang ngồi trước
mặt. Người đó thông minh, không rảnh, và sẽ bỏ đi nếu thấy câu chữ rỗng.

Nghĩa là:

- Nói thẳng, không rào đón. "Đừng làm thế này" thay vì "việc này có thể không
  được khuyến khích trong một số trường hợp".
- Giải thích **vì sao**, không chỉ **cái gì**. Một mẹo không kèm lý do là một
  mẹo người đọc không dám làm theo.
- Thừa nhận đánh đổi. "Cách này chậm hơn, nhưng đổi lại…" đáng tin hơn một
  lời khuyên luôn đúng.
- Chỉ ra chỗ người ta hiểu sai. Đó thường là phần đáng giá nhất của cả bài.
- Không hét. Không "cực kỳ hiệu quả", không "bùng nổ", không emoji.

---

## Tám quy tắc, kèm ví dụ

### 1. Mở bài bằng một việc cụ thể, không bằng bối cảnh chung

> **Sai:** Trong thời đại số ngày nay, video ngắn đã trở thành một phần không
> thể thiếu trong chiến lược bán hàng của mọi doanh nghiệp.
>
> **Đúng:** Video bán hàng thường chết ở ba giây đầu. Ba giây đó quyết định
> bởi khung hình và câu chữ đầu tiên, và cả hai đều sửa được.

Câu đầu tiên phải nói một điều gì đó **chỉ đúng với nghề này**.

### 2. Tiêu đề mục là một câu khẳng định, không phải một cái nhãn

> **Nhãn:** Chú thích, hashtag và việc gắn sản phẩm
>
> **Khẳng định:** Chú thích viết cho một người, không phải cho một danh mục

Nhãn thì mục lục nào cũng sinh được. Câu khẳng định cho người đọc biết mục
này sẽ tranh luận điều gì — và đọc mục lục thôi đã học được gì đó.

### 3. Con số, tên, hậu quả. Không dùng tính từ.

> **Yếu:** Nên đăng đều đặn để kênh phát triển tốt hơn.
>
> **Mạnh:** Ba video một ngày rồi nghỉ bốn ngày thường tệ hơn một video mỗi
> ngày, dù tổng số video bằng nhau.

Người đọc kiểm tra được một con số. Không ai kiểm tra được một tính từ.

### 4. Nói thẳng chỗ đau, và cho nó một `{ note }`

Mỗi bài nên có **ít nhất một** chỗ dám nói điều khiến người đọc khựng lại:
một khoản phạt, một hiểu lầm phổ biến, một việc đang làm là vô ích. Dùng
`{ note }` cho nó — khối đó được tô nền, và người đọc nhảy tới nó trước.

### 5. Không bán hàng trong thân bài

Thân bài không nhắc AutoReel. Không "với AutoReel bạn có thể…". Khối CTA ở
cuối bài do `build-posts.mjs` tự sinh, và đó là chỗ duy nhất sản phẩm xuất
hiện. Một bài viết đọc như quảng cáo thì không ai tin, kể cả khi nó đúng.

Ngoại lệ duy nhất: câu trả lời trong `faq`, khi người đọc thật sự đang hỏi
về sản phẩm.

### 6. Không hứa kết quả

Không "kiếm được 10 triệu một tháng", không "kênh sẽ lên trong 7 ngày".
Nói **cơ chế**: làm X thì Y xảy ra, vì Z. Người đọc tự tính ra kết quả.

### 7. Đoạn ngắn. Câu ngắn.

Một đoạn 1–3 câu. Muốn sang đoạn mới trong cùng một `{ p }` thì viết `\n\n`
giữa hai đoạn — trình dựng sẽ tách thành hai thẻ `<p>`.

Câu dài xen câu ngắn. Ba câu dài liền nhau là ba câu người ta bỏ qua.

### 8. Xưng "bạn", gọi người đọc là một người

Không "quý khách", không "chúng ta", không "các bạn". Một người, đang đọc.

---

## Những thứ bị chặn

| Không được | Vì sao |
|---|---|
| `ffmpeg`, `docker`, `adb`, `sqlite`, `gradio`, `moviepy`, `zerotts`, `nvenc`, `moneyprinter`, `uiautomator`, `jsonrpc`, `localhost`, `127.0.0.1` | `verify-build.mjs` chặn: bài viết không được nói hệ thống làm bằng gì. Đây là danh sách đầy đủ, cả hai thứ tiếng. |
| `**đậm**` trong `body` | Trình dựng escape mọi chuỗi, nên nó in ra hai dấu sao. Chỉ trang Tài liệu mới render `**`. |
| Emoji | Không. |
| "Tóm lại", "Như vậy", "Trong bài viết này", "Hy vọng bài viết giúp ích" | Câu đệm. Cắt thẳng. |
| Ba câu hỏi tu từ liền nhau | Đọc như quảng cáo. |
| Danh sách toàn danh từ trừu tượng | "Tối ưu hoá quy trình, nâng cao hiệu suất" không nói gì cả. |

---

## Cơ học của file

```js
export default {
  slug: { vi: '…', en: '…' },        // en đã có sẵn — đừng đổi
  title: { vi: '…', en: '…' },       // ≤ 62 ký tự, CẢ HAI
  description: { vi: '…', en: '…' }, // ≤ 165 ký tự, CẢ HAI
  date: '2026-10-10',                // một ngày cho cả hai thứ tiếng
  minutes: { vi: 6, en: 6 },         // ước lượng thật, không làm tròn cho đẹp
  tag: { vi: 'Kinh nghiệm', en: 'Field notes' },
  lead: { vi: '…', en: '…' },        // 1–2 câu, nói bài này giải quyết việc gì
  body: { vi: [ … ], en: [ … ] },
  faq: { vi: [ … ], en: [ … ] },
};
```

**Block hợp lệ trong `body`** — mỗi block mang đúng **một** khoá:

- `{ h2: '…' }` — tiêu đề mục
- `{ p: '…' }` — đoạn văn; `\n\n` để tách thành nhiều đoạn
- `{ ul: ['…'] }` — danh sách chấm
- `{ ol: ['…'] }` — danh sách số
- `{ note: '…' }` — khối được tô nền
- `{ figure: { src, alt, caption } }` — ảnh trong `public/blog/`

**Ba ràng buộc mà `npm run verify` kiểm:**

1. **`body.vi` và `body.en` phải cùng chuỗi loại block.** Cùng số `h2`, cùng số
   `ul`, cùng thứ tự. Độ dài câu không cần khớp — tiếng Anh viết ngắn hơn.
2. **`faq.vi` và `faq.en` phải cùng số câu hỏi.**
3. **Không field nào được để `en` giống hệt `vi`.** Đó là dấu hiệu chưa dịch,
   và build sẽ đỏ. (Xem `verify-build.mjs`.)

---

## Bản tiếng Anh

Không phải bản dịch. Là **cùng một bài, viết cho người đọc tiếng Anh**.

- Giọng y hệt: thầy giáo, cụ thể, dám nói chỗ đau. Đọc `en` của bài mẫu.
- Giữ nguyên con số, ví dụ và tên nền tảng (Shopee, Facebook, Reels, TikTok).
- Tiền: giữ đồng, viết gọn — `139k`, `1.490.000₫`. Người đọc tiếng Anh của
  trang này quan tâm thị trường Việt Nam.
- Câu tiếng Anh ngắn hơn câu tiếng Việt. Đừng dịch từng chữ; viết lại.
- Tránh từ to tát kiểu Mỹ: "leverage", "seamless", "game-changing",
  "unlock", "supercharge". Viết như người làm nghề nói với người làm nghề.
- Đại từ: dùng **you**, và **they** khi nói về một người chưa rõ giới tính.

---

## Trước khi coi là xong

1. Câu đầu tiên có nói điều gì chỉ đúng với nghề này không?
2. Mỗi tiêu đề `h2` có phải một câu khẳng định không?
3. Có ít nhất một con số, một tên, hoặc một hậu quả cụ thể trong mỗi mục chứ?
4. Có ít nhất một `{ note }` nói thẳng một chỗ đau không?
5. Có câu nào bán hàng trong thân bài không? Bỏ đi.
6. `body.vi` và `body.en` có cùng chuỗi loại block không?
7. Cả hai `title` có ≤ 62 ký tự, cả hai `description` ≤ 165 ký tự không?
8. `npm run build && npm run verify` có xanh không?

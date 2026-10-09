# HANDOVER — việc còn dở & cần kiểm lại

**Trạng thái:** commit `4e2813c` trên `main` (đã push lên `origin`)
**Ngày:** 2026-10-07
**Vì sao có file này:** máy build có mạng rất chậm và **không có browser driver**,
nên một số bước không thể kiểm chứng tại chỗ. File này liệt kê chính xác những gì
còn lại — không bao gồm những thứ đã kiểm rồi (xem §D).

---

## A. Chưa kiểm chứng được — cần mạng khỏe hoặc cần browser

### A1. Chưa từng mở trang bằng browser thật ⚠️ quan trọng nhất

Toàn bộ phần animation chưa được xem bằng mắt. Đã kiểm bằng build + SSR render +
phân tích tĩnh, nhưng **chưa ai nhìn thấy trang chạy**.

```bash
npm run dev        # → http://localhost:5173
```

Checklist khi mở:

| # | Kiểm gì | Mong đợi |
|---|---|---|
| 1 | Hero | 3 vệt sáng xanh/tím trôi chậm sau tiêu đề |
| 2 | Khung workflow phải hero | Tia sáng chạy **lần lượt** trên→dưới, mỗi card sáng viền đúng nhịp, lặp ~6s/vòng |
| 3 | Cuộn xuống | Card trượt lên + mờ dần hiện ra; card đầu **không** bị trắng trên mobile |
| 4 | Rê chuột vào card | Nâng nhẹ + viền gradient hiện |
| 5 | FAQ | Mở/đóng mượt, mỗi lần 1 câu, dấu + xoay 45° |
| 6 | Thu nhỏ < 981px / < 680px | Menu hamburger / CTA full-width, không tràn ngang |

Kiểm `prefers-reduced-motion`: DevTools → `Ctrl+Shift+P` → "Emulate CSS prefers-reduced-motion"
→ `reduce` → reload. **Mọi animation phải đứng yên hoàn toàn.**

### A2. Lighthouse chưa đo

Mục tiêu spec: Performance / Accessibility / SEO ≥ 90.

```bash
npm run build && npm run preview    # → http://localhost:4173
# rồi chạy Lighthouse (mobile) trên URL đó
```

**Rủi ro đã biết trước:** đây là SPA render phía client, FCP/LCP phụ thuộc vào
114 KB gzip JS. Nếu Performance < 90, hướng xử lý hiệu quả nhất là **prerender HTML
tĩnh** lúc build (nội dung có sẵn trong HTML thay vì chờ JS). Lưu ý khi làm: Framer
Motion render trạng thái `initial` (opacity:0) vào HTML, nên phải xử lý riêng, nếu
không nội dung sẽ vô hình khi chưa hydrate.

### A3. `npm ci` chưa chạy thử trên Linux

Đã kiểm **tĩnh**: `package-lock.json` (lockfileVersion 3) có đủ binary Linux —
`@tailwindcss/oxide-linux-x64-gnu@4.3.3`, `@rolldown/binding-linux-x64-gnu@1.2.13`,
`@img/sharp-linux-x64@0.35.5`, đều có `resolved` + `integrity`. Nên CI Linux sẽ chạy được.

Chưa chạy thật vì phải xóa `node_modules` rồi cài lại (mạng hiện tại quá chậm).
Cách kiểm chắc chắn: để Cloudflare Pages tự chạy, hoặc `rm -rf node_modules && npm ci`.

### A4. Chưa deploy Cloudflare Pages

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20+ |

Không cần env var. `public/_headers` (cache immutable + security headers) Pages tự đọc.

### A5. Google Fonts (Inter) chưa xác nhận load được

Đây là **request render-blocking bên ngoài duy nhất** của trang. Mạng ở đây không
xác nhận được nó có tải hay không. Fallback stack đã có
(`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`) nên
layout không vỡ nếu fail — chỉ đổi font.

Nếu muốn chắc chắn + nhanh hơn: self-host Inter woff2 (subset tiếng Việt), bỏ
`<link>` tới `fonts.googleapis.com` trong `index.html`.

### A6. Chưa có visual regression test

Chưa cài Playwright/`chromium-cli` (không có sẵn, cài phải tải ~150 MB). Nếu muốn
tự động hóa kiểm tra giao diện về sau thì đây là việc cần làm trước.

---

## B. Bắt buộc xử lý trước khi publish (nội dung)

### B1. Proof metrics vẫn là placeholder ⚠️

`src/data/site.js` dòng 139–141 đang để `value: null` → trang render `XX+`.

**Đây là chủ ý**, không phải bug: spec ghi rõ *"Chỉ hiển thị số liệu thật. Không dùng
testimonial giả"*, nên tôi không tự bịa số.

```js
{ value: null, placeholder: 'XX+', suffix: '+', label: 'Video đã tạo' },
//        ↑ điền số thật vào đây
```

Điền số thật → **count-up animation tự kích hoạt** và dòng ghi chú "Hãy thay XX…"
tự biến mất (điều kiện là *mọi* metric đều có số). Hiện tại animation đếm số **chưa
nhìn thấy được** vì chưa có số.

### B2. Demo video chưa có

Cùng file, `demo.videoSrc` và `demo.youtubeId` đang rỗng → hiện placeholder nét đứt.

- Video local: để file vào `public/demo/` rồi đặt `videoSrc: '/demo/autoreel-demo.mp4'`
- YouTube: đặt `youtubeId: '<id>'`

Bản YouTube dùng facade click-to-load (chỉ nhúng iframe khi người dùng bấm) nên
không tải JS bên thứ ba khi vào trang.

### B3. Domain — nếu đổi thì sửa 8 chỗ

`autoreelvn.com` đang hardcode ở:

- `index.html` — canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD `url` (5 chỗ)
- `public/robots.txt` — dòng `Sitemap:`
- `public/sitemap.xml` — thẻ `<loc>`
- `src/data/site.js` — `domain` và `email`

---

## C. Phát hiện khi rà soát — cần bạn quyết định

### C1. Contrast nút gradient chưa đạt AA cho text thường ⚠️

Tôi đã đo toàn bộ palette (không đoán):

| Cặp màu | Tỷ lệ | Kết luận |
|---|---|---|
| Text thường trên nền tối (10 cặp) | 8.96 – 18.76 | ✅ AAA hết |
| Chữ trắng trên nút gradient `#5B78FF` | 3.77 | ⚠️ chỉ đạt AA-large |
| Chữ trắng trên nút gradient `#9B5CFF` | 3.91 | ⚠️ chỉ đạt AA-large |
| Chữ trắng trên nút gradient `#EF4FC4` | **3.19** | ⚠️ chỉ đạt AA-large |
| Tag `MOST POPULAR` (11px, trắng trên `#9B5CFF`) | 3.91 | ⚠️ cần 4.5 |

WCAG AA cần **4.5:1** cho text thường; 3.0:1 chỉ áp dụng cho text ≥ 18.66px bold.
Nhãn nút là 0.98rem (~15.7px) weight 800 → **vẫn tính là text thường**.

Ba hướng xử lý (chọn 1):

1. **Tối gradient riêng cho nút** — giữ hue thương hiệu nhưng giảm sáng
   (ví dụ `--blue #4A63E0`, `--purple #7B3FE4`, `--pink #C93BA6`). Ít ảnh hưởng
   nhận diện nhất, chỉ đổi ở `.ar-btn-primary` và `.ar-popular-tag`.
2. **Tăng cỡ/độ đậm nhãn nút** lên ≥ 18.66px bold — đổi tỷ lệ nút, khó hơn.
3. **Chấp nhận** — đây là pattern rất phổ biến ở landing page SaaS gradient, nhưng
   khi đó không thể tuyên bố "đạt WCAG AA". README đã được sửa lại cho đúng.

### C2. 2 icon thừa trong registry

`src/components/ui/Icon.jsx` có `ArrowRight` và `Mail` nhưng không nơi nào dùng.
Xóa 2 dòng import + 2 dòng trong `registry` là xong (~1 KB). Để lại cũng không sao.

### C3. favicon-192.png (76 KB) và apple-touch-icon.png (69 KB) khá nặng

Cả hai **không nằm trên critical path** (chỉ favicon 32px được khai báo `rel="icon"`,
hai file kia dùng từ web manifest / khi thêm vào màn hình chính), nên không ảnh hưởng
điểm Lighthouse. Nếu muốn nhẹ hơn: dùng PNG palette trong `scripts/generate-assets.mjs`
(`.png({ palette: true })`) — đổi lại có thể bị banding nhẹ ở dải gradient của logo.

### C4. File `autoreel_landing_v6_header.html` (5.64 MB) đang nằm trong repo

Bên trong nó nhúng **cùng một ảnh logo base64 lặp 3 lần y hệt nhau** (mỗi bản 1.96 M
ký tự). File này **không** được bước build nào đọc — `npm run assets` đọc
`autoreel-logo.jpg` (311 KB) cơ. Giữ lại chỉ để tham chiếu design.

Hiện mới có 1 commit nên bỏ ra rất dễ:

```bash
git rm --cached autoreel_landing_v6_header.html
echo "autoreel_landing_v6_header.html" >> .gitignore
git commit --amend --no-edit
git push --force-with-lease
```

### C5. Cách cài dependency (ghi lại để lần sau không bối rối)

Mạng ở máy build chậm bất thường, `npm install` thường phải chờ rất lâu ở bước phân
giải peer dependency (kéo metadata của `vitest` → `playwright` → 14 biến thể platform).
Cách đã dùng để đi vòng:

```bash
npm install --legacy-peer-deps --no-audit --no-fund --os=win32 --cpu=x64
```

Không ảnh hưởng lockfile (vẫn ghi đủ mọi platform). **Máy mạng khỏe thì `npm install`
thường là được, không cần cờ này.**

---

## D. Đã kiểm chứng rồi — không cần làm lại

| Hạng mục | Cách kiểm | Kết quả |
|---|---|---|
| Build production | `npm run build` | ✅ pass, 283ms |
| Toàn vẹn `dist/` | `npm run verify` | ✅ 29/29 check |
| App render không lỗi runtime | `npm run smoke` (SSR render) | ✅ pass, 48.911 ký tự |
| Nội dung khớp HTML gốc | So khớp tự động 143 chuỗi | ✅ 142/143 (1 sai khác là chủ ý — xem dưới) |
| Import nội bộ | Quét 26 file | ✅ 0 import hỏng |
| Icon lucide tồn tại | Đối chiếu package đã cài | ✅ 24/24 |
| Tailwind quét được source | Grep CSS đã build | ✅ đủ `.ar-*`, `@keyframes ar-trail`, breakpoint 981px |
| Contrast text thường | Tính WCAG | ✅ 8.96–18.76 (AAA) |
| Lockfile có binary Linux | Đọc `package-lock.json` | ✅ đủ oxide/rolldown/sharp |
| Dev server | `npm run dev` + curl từng module | ✅ HTTP 200 hết, log sạch |

**Sai khác nội dung có chủ ý:** dòng `Workflow · Demo · Pricing · FAQ · Contact` ở
footer nguồn là text thuần; bản React chuyển thành link thật (`footer.links`).
Ngoài ra emoji trong HTML gốc (📦 🤖 🛒 …) được thay bằng icon lucide.

---

## E. Lệnh nhanh

```bash
npm install          # cài dependency
npm run dev          # dev server + HMR      → :5173
npm run build        # build production      → dist/
npm run preview      # xem bản build         → :4173
npm run verify       # kiểm tra dist/ sau build
npm run smoke        # SSR render, bắt lỗi runtime
npm run assets       # sinh lại logo/favicon/OG từ autoreel-logo.jpg
```

`npm run smoke` nên chạy sau mỗi lần sửa component: `vite build` chỉ kiểm tra module
resolve được, **không thực thi** code component — một identifier sai vẫn build sạch
và chỉ vỡ khi mở browser. (Đã từng xảy ra thật trong lúc làm: `motion[as]` bị đổi
thành `m[as]` nhưng sót 3 chỗ, build vẫn pass.)

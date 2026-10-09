# AutoReel — Landing Page

Production landing page for **AutoReel — AI Content Automation**
(_Tạo video hàng loạt. Xử lý tự động. Đăng thẳng lên nền tảng._)

Rebuilt from the approved `autoreel_landing_v6_header.html` as a React + Vite + Tailwind app.
All copy is preserved; the markup, styling and motion were rewritten for maintainability,
accessibility and performance.

> **📋 Việc còn dở cần kiểm lại: [HANDOVER.md](./HANDOVER.md)**
> Trang chưa từng được mở bằng browser thật, Lighthouse chưa đo, và có một vài
> quyết định đang chờ bạn (contrast nút gradient, metrics placeholder, demo video).

## Stack

| Concern    | Choice                                     |
| ---------- | ------------------------------------------ |
| Framework  | React 19 + Vite 8 (Rolldown)               |
| Styling    | Tailwind CSS v4 + a small `ar-*` component layer |
| Icons      | lucide-react (tree-shaken, ~25 glyphs)     |
| Motion     | Framer Motion via `LazyMotion` + `domAnimation`, plus CSS keyframes for ambient glow |
| Build      | `vite build` → `dist/` (static, no backend) |

## Commands

```bash
npm install          # install dependencies
npm run dev          # local dev server
npm run build        # production build → dist/
npm run preview      # serve the built output locally
npm run verify       # post-build smoke test of dist/
npm run smoke        # server-render the app to catch runtime errors
npm run assets       # regenerate logo/favicon/OG images from autoreel-logo.jpg
```

`npm run assets` only needs to be re-run when the master logo changes — the generated
files in `public/` are committed.

`npm run smoke` is worth running after any component change: `vite build` verifies module
resolution but never *executes* component code, so a broken identifier or bad component
reference will build cleanly and only fail in the browser. The smoke test renders the whole
app with `renderToString` and asserts the content and document structure.

## Project structure

```
src/
  main.jsx                 entry
  App.jsx                  section composition
  components/
    layout/                Navbar, Footer
    sections/              Hero, WorkflowSection, HowItWorks, Benefits,
                           DemoSection, ProofSection, Pricing, FAQ, CTA
    ui/                    Icon, Reveal, CountUp, SectionHeading, RichText
  i18n/
    copy.jsx               picks a language, hands the copy down
    router.jsx             the router, the scroll behaviour, <Link>
    head.js                keeps <title>/canonical in step after a click
  data/                    ← all editable content lives here
    routes.js              ← every URL, and its title + description
    site.js                brand, nav, hero, steps, demo, proof, CTA, footer, UI strings
    workflows.js           the 3 flows + section heading
    features.js            the 8 benefits
    pricing.js             2 plans + pricing note + the prices as numbers
    faq.js                 10 questions
  styles/globals.css       design tokens, component classes, keyframes
scripts/
  generate-assets.mjs      image pipeline (sharp) → public/
  build-routes.mjs         one HTML file per route + sitemap + 404, after vite build
  verify-build.mjs         post-build assertions on dist/
  ssr-smoke.jsx            renders the app to catch runtime errors
public/                    favicons, OG images, _headers, _redirects, robots.txt
```

### URLs and languages

The site is one page with **seven URLs** — `/`, `/quy-trinh-tao-video-hang-loat/`,
`/bang-gia-phan-mem-tao-video/` and so on — plus an English copy of each under `/en/`.
Every one is declared once in `src/data/routes.js`: the slug, the section it scrolls to, and
the title and description a search result shows. The app reads that file for its links, and
`scripts/build-routes.mjs` reads it after `vite build` to write a real HTML file per URL and
to write `sitemap.xml`. A URL that is wrong in `routes.js` is wrong in one place.

Two rules that are easy to break and expensive to notice:

- **Slugs end in a slash, and so does every link and canonical.** Cloudflare Pages serves
  `slug/index.html` at `/slug/` and redirects `/slug` to it, so the slash form is the one
  that costs no round trip. `npm run verify` fails if a sitemap URL loses its slash.
- **Nothing gets added to `_redirects` except the `/vi/*` rule.** Every route has a real
  file, and `dist/404.html` is what makes an unknown path an honest 404. A catch-all
  rewrite (`/* /index.html 200`) would answer every typo with the home page and a 200, and
  `verify` fails if one appears.

Two token layers exist on purpose: `@theme` maps the brand palette into Tailwind's utility
namespace (`bg-ink`, `text-muted`, …) for new components, while the `ar-*` component classes
read the `:root` custom properties. Both describe the same palette; reach for the `ar-*`
classes first so styling stays consistent with the existing sections.

### Editing content

Every string on the page comes from `src/data/*.js` — no copy is hard-coded in components.
To change a headline, a price, a FAQ answer or the nav, edit the matching data file.

Each translatable export is `{ vi, en }`; anything that reads the same in both languages —
the brand, the phone number, icon names, route keys — sits outside the split so nobody is
tempted to translate a domain name. `npm run verify` fails when the two languages stop
describing the same page: a missing key, a short list, a renamed plan id, an empty string.

**Emphasis lives inside the sentence.** A heading with a highlighted phrase is written
`'One AutoReel. **Three core workflows.**'` and rendered by `components/ui/RichText.jsx`. It
used to be three separate fields (`titleBefore` / `titleHighlight` / `titleAfter`), which
only worked while the sentence was Vietnamese — English puts the emphasis somewhere else,
and the translator could not move it. A `**` count that comes out odd is a `verify` failure.

### Adding a language

1. Add the code to `LOCALES` and its `<html lang>`/`og:locale` pair to `LOCALE_TAGS` in
   `src/data/routes.js`, and a slug for it on every route.
2. Add that branch to every `{ vi, en }` export in `src/data/`.
3. `npm run verify` — the parity checks say exactly what is missing.

## ⚠️ Before going live

1. **Proof metrics are placeholders.** In `src/data/site.js`, `proof.metrics` currently has
   `value: null`, so the page renders `XX+` and shows the “replace me” note. Set a real number
   (e.g. `value: 1250`) and the count-up animation takes over automatically — the note
   disappears once every metric has a number. **Do not publish invented figures.**
2. **Demo video.** In the same file, set `demo.videoSrc` (`/demo/autoreel-demo.mp4` in `public/`)
   or `demo.youtubeId`. Until then the section shows the placeholder frame.
3. **Domain.** `autoreelvn.com` is referenced in `index.html` (canonical, OG), `robots.txt`,
   `sitemap.xml` and `public/site.webmanifest` — update all of them if the domain changes.

## Deploy — Cloudflare Pages

| Setting              | Value           |
| -------------------- | --------------- |
| Build command        | `npm run build` |
| Build output directory | `dist`        |
| Node version         | 20 or newer     |

No environment variables are required — the site is fully static.

`public/_headers` ships long-lived immutable caching for hashed assets and security headers
(nosniff, frame options, referrer policy, HSTS). Cloudflare Pages picks it up automatically.

Alternative: `npx wrangler pages deploy dist --project-name autoreel` .

## Motion & performance notes

- **Hero glow** — slow transform-only drift of three blurred radial gradients (compositor only).
- **The line** (hero) — five workflow stations run one shared keyframe, offset by
  `animation-delay: calc(var(--i) * var(--stagger))`, so a job visibly moves down the stack: the
  station lights, a tick appears, the batch bar fills, the batch counter counts, and the line
  drains and starts again. Only `opacity` and `transform` animate, except the counter.

  The three numbers are **constrained, not chosen**. All stations share one 10s keyframe, so the
  cycle must be longer than the last station's offset plus its drain:

  ```
  cycle >= stagger x (stations - 1) + drain      10s >= 0.6s x 4 + 0.9s
  ```

  At a 1.5s stagger the last station drained at 14.8s — four seconds into the next cycle — and the
  batch bar reset to empty while four stations still showed ticks. Change the node count in
  `heroFlow` and all three numbers want revisiting.
- **The batch counter** writes to a `ref`'s `textContent` from a rAF loop rather than holding state:
  a counter that re-renders 60 times a second would re-render the whole hero — five stations, their
  text, their icons — for one character. It pauses via `IntersectionObserver` when scrolled off
  screen.
- **Scroll reveals** — Framer Motion `whileInView` animating only `opacity`/`transform`, with
  `viewport={{ once: true }}` so nothing re-animates.
- **Card hover** — translate lift plus a gradient border ring drawn with
  `mask-composite: exclude`; disabled on touch via `@media (hover: hover)`.
- **Count-up** — `requestAnimationFrame` + `IntersectionObserver`, runs once.
- **Reduced motion** — `prefers-reduced-motion: reduce` disables every decorative animation
  (CSS level) and short-circuits Framer Motion via `useReducedMotion()`.

  The line is the one place that stops **finished** rather than empty. The blanket rule freezes
  each animation on its last keyframe, and a station's last keyframe is its idle state — five blank
  rows and an empty bar, a picture of a machine that has never run. So the end state is written out
  in the reduce block: all five ticks, a full bar, `30/30`.
- No particles, no Three.js, no autoplay audio, no scroll-jacking.

### Bundle

`dist/assets` ships one JS and one CSS file:

| File | Raw | Gzip |
| ---- | --- | ---- |
| JS   | ~353 KB | ~114 KB |
| CSS  | ~32 KB  | ~8 KB |

Roughly 60 KB gzip of the JS is React itself. Framer Motion is loaded through
`<LazyMotion features={domAnimation}>`, which tree-shakes away the drag, layout and pan
projection code — that alone took the bundle from 399 KB to 353 KB. **Animated elements must
use `m.*`, not `motion.*`**: a single stray `motion.*` silently pulls the full feature set
back in and undoes the saving.

The logo is served as a 3.9 KB WebP (the master JPEG is 1254×1254 / 304 KB), and only the
32px favicon is declared in `index.html` so browsers do not fetch the 192px icon on first paint.

Lighthouse targets: Performance / Accessibility / SEO ≥ 90.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`).
- Skip-to-content link, visible focus rings, `aria-expanded`/`aria-controls` on the mobile menu
  and every FAQ item.
- The hero workflow diagram is exposed as a single labelled `role="img"` with a Vietnamese
  description, so screen readers get the meaning rather than five disconnected fragments.
- Text contrast measured: body and card copy sits between 8.9:1 and 18.8:1
  (AAA) against its backgrounds. **Open item:** the white label on the primary
  button gradient measures 3.2–3.9:1, which passes AA only as *large* text, and
  the `MOST POPULAR` tag is 3.9:1 at 11px. See `HANDOVER.md` §C1.

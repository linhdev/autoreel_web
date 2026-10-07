# AutoReel — Landing Page

Production landing page for **AutoReel — AI Content Automation**
(_Tạo video hàng loạt. Xử lý tự động. Đăng thẳng lên nền tảng._)

Rebuilt from the approved `autoreel_landing_v6_header.html` as a React + Vite + Tailwind app.
All copy is preserved; the markup, styling and motion were rewritten for maintainability,
accessibility and performance.

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
    ui/                    Icon, Reveal, CountUp, SectionHeading
  data/                    ← all editable content lives here
    site.js                brand, nav, hero, steps, demo, proof, CTA, footer
    workflows.js           the 3 flows + section heading
    features.js            the 8 benefits
    pricing.js             2 plans + pricing note
    faq.js                 10 questions
  styles/globals.css       design tokens, component classes, keyframes
scripts/
  generate-assets.mjs      image pipeline (sharp) → public/
  verify-build.mjs         post-build assertions on dist/
  ssr-smoke.jsx            renders the app to catch runtime errors
public/                    favicons, OG image, _headers, robots.txt, sitemap.xml
```

Two token layers exist on purpose: `@theme` maps the brand palette into Tailwind's utility
namespace (`bg-ink`, `text-muted`, …) for new components, while the `ar-*` component classes
read the `:root` custom properties. Both describe the same palette; reach for the `ar-*`
classes first so styling stays consistent with the existing sections.

### Editing content

Every string on the page comes from `src/data/*.js` — no copy is hard-coded in components.
To change a headline, a price, a FAQ answer or the nav, edit the matching data file.

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
- **Workflow light trail** — a CSS pulse travels each connector in sequence via
  `animation-delay: calc(var(--i) * 1.2s)` in a 6s cycle; the node cards light up on the same beat.
- **Scroll reveals** — Framer Motion `whileInView` animating only `opacity`/`transform`, with
  `viewport={{ once: true }}` so nothing re-animates.
- **Card hover** — translate lift plus a gradient border ring drawn with
  `mask-composite: exclude`; disabled on touch via `@media (hover: hover)`.
- **Count-up** — `requestAnimationFrame` + `IntersectionObserver`, runs once.
- **Reduced motion** — `prefers-reduced-motion: reduce` disables every decorative animation
  (CSS level) and short-circuits Framer Motion via `useReducedMotion()`.
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
- Contrast kept at/above WCAG AA on the dark surface.

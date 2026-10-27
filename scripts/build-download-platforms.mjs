/**
 * Write the six platform landing pages.
 *
 * Run from `npm run build`, after `build-downloads.mjs`. Each page is a normal
 * static document with its own title, canonical and hreflang, plus a plain GET
 * form that hands the pasted link to `/downloads/?url=…`. The tool itself —
 * Turnstile, quota, queue — stays in one place.
 *
 * The copy lives in `src/data/downloadPlatforms.js`; this file only decides
 * the shape. Keeping the words out of the markup is what makes it possible to
 * see that two platforms are not saying the same paragraph twice.
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOWNLOADS } from '../src/data/downloads.js';
import { PLATFORM_PAGES } from '../src/data/downloadPlatforms.js';
import {
  LOCALE_TAGS, SITE_URL, absolute,
} from '../src/data/routes.js';
import {
  esc, footer, headAssets, langAssets, nav, write,
} from './lib/site-shell.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const LANGS = ['vi', 'en'];

const UI = {
  vi: {
    badge: 'MIỄN PHÍ · KHÔNG CẦN ĐĂNG NHẬP',
    label: (label) => `Dán link ${label} công khai`,
    placeholder: (platform) => platform.placeholder,
    button: 'Download',
    fine: 'Miễn phí · Không cần đăng nhập · Tối đa 20 phút · 95MB',
    stepsTitle: 'Cách tải',
    examplesTitle: (label) => `Link ${label} hợp lệ`,
    notesTitle: 'Giới hạn & lưu ý',
    faqTitle: 'Câu hỏi thường gặp',
    othersTitle: 'Nền tảng khác',
    allLabel: 'Mở công cụ tải video',
    ctaTitle: 'Tải nhiều video một lần',
    ctaText: 'Dán tối đa 5 link một lần, mỗi dòng một link. Xem trước rồi mới tải file về máy.',
    toolTitle: 'Công cụ tải video',
    toolText: 'Trang chính nhận cả sáu nền tảng và cho phép dán nhiều link trong một lần.',
    terms: 'Chỉ video công khai · Dùng đúng mục đích · Tôn trọng bản quyền',
  },
  en: {
    badge: 'FREE · NO LOGIN NEEDED',
    label: (label) => `Paste a public ${label} link`,
    placeholder: (platform) => platform.placeholder,
    button: 'Download',
    fine: 'Free · No login · Up to 20 minutes · 95MB',
    stepsTitle: 'How to download',
    examplesTitle: (label) => `Valid ${label} links`,
    notesTitle: 'Limits & notes',
    faqTitle: 'Frequently asked questions',
    othersTitle: 'Other platforms',
    allLabel: 'Open the download tool',
    ctaTitle: 'Download several videos at once',
    ctaText: 'Paste up to five links, one per line. Preview, then save the file.',
    toolTitle: 'The download tool',
    toolText: 'The main page accepts all six platforms and several links per submission.',
    terms: 'Public videos only · Use it lawfully · Respect copyright',
  },
};

const STYLE = `
      .pf-page { max-width: 1080px; margin: 0 auto; }
      .pf-main { padding: 34px 0 80px; }
      .pf-hero { max-width: 820px; padding: 16px 0 28px; }
      .pf-eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; color: var(--muted); }
      .pf-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--pf-accent, #6d5efc); box-shadow: 0 0 12px var(--pf-accent, #6d5efc); }
      .pf-h1 { margin: 18px 0 12px; font-size: clamp(1.9rem, 4vw, 2.9rem); line-height: 1.08; letter-spacing: -0.03em; }
      .pf-lead { margin: 0 0 18px; max-width: 700px; color: var(--muted); font-size: 1.02rem; line-height: 1.65; }
      .pf-points { display: flex; flex-wrap: wrap; gap: 8px 18px; margin: 0; padding: 0; list-style: none; color: var(--muted); font-size: 0.85rem; }
      .pf-points li { display: flex; align-items: center; gap: 7px; }
      .pf-points li::before { content: '✓'; display: inline-flex; width: 18px; height: 18px; align-items: center; justify-content: center; border-radius: 50%; background: color-mix(in srgb, var(--pf-accent, #6d5efc) 18%, transparent); color: var(--pf-accent, #6d5efc); font-size: 0.7rem; font-weight: 900; }
      .pf-card { margin: 12px 0 0; padding: 24px; border: 1px solid var(--line); border-radius: 22px; background: linear-gradient(180deg, rgba(18,26,54,.9), rgba(8,13,29,.96)); box-shadow: 0 24px 80px rgba(3,6,18,.4); }
      .pf-label { display: block; margin: 0 0 9px; font-size: 0.92rem; font-weight: 700; }
      .pf-row { display: flex; gap: 10px; }
      .pf-input { flex: 1; min-width: 0; height: 54px; padding: 0 16px; border: 1px solid var(--line); border-radius: 13px; background: #060a18; color: var(--text); font: inherit; }
      .pf-input:focus { outline: 2px solid color-mix(in srgb, var(--pf-accent, #6d5efc) 70%, white); outline-offset: 2px; }
      .pf-submit { flex: none; height: 54px; padding: 0 24px; border-radius: 13px; font-weight: 800; white-space: nowrap; }
      .pf-fine { margin: 12px 0 0; color: var(--muted); font-size: 0.82rem; }
      .pf-section { margin-top: 44px; }
      .pf-h2 { margin: 0 0 14px; font-size: 1.35rem; letter-spacing: -0.02em; }
      .pf-prose { max-width: 780px; color: var(--muted); font-size: 0.96rem; line-height: 1.7; }
      .pf-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 0; padding: 0; list-style: none; counter-reset: pf; }
      .pf-step { padding: 18px; border: 1px solid var(--line); border-radius: 18px; background: rgba(11,17,38,.6); }
      .pf-step::before { counter-increment: pf; content: counter(pf); display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; margin-bottom: 10px; border-radius: 9px; background: color-mix(in srgb, var(--pf-accent, #6d5efc) 18%, transparent); color: var(--pf-accent, #6d5efc); font-size: 0.8rem; font-weight: 900; }
      .pf-step h3 { margin: 0 0 5px; font-size: 0.95rem; }
      .pf-step p { margin: 0; color: var(--muted); font-size: 0.86rem; line-height: 1.5; }
      .pf-examples { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
      .pf-examples code { display: block; overflow-wrap: anywhere; padding: 10px 12px; border: 1px solid var(--line); border-radius: 10px; background: #060a18; color: #c7c1ff; font-size: 0.82rem; }
      .pf-notes { display: grid; gap: 9px; margin: 0; padding: 0; list-style: none; max-width: 780px; }
      .pf-notes li { position: relative; padding-left: 20px; color: var(--muted); font-size: 0.9rem; line-height: 1.55; }
      .pf-notes li::before { content: '·'; position: absolute; left: 4px; color: var(--pf-accent, #6d5efc); font-weight: 900; }
      .pf-faq { display: grid; gap: 9px; max-width: 840px; }
      .pf-faq details { border: 1px solid var(--line); border-radius: 14px; background: rgba(11,17,38,.45); }
      .pf-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; font-size: 0.94rem; font-weight: 700; list-style: none; cursor: pointer; }
      .pf-faq summary::-webkit-details-marker { display: none; }
      .pf-faq summary::after { content: '+'; color: var(--pf-accent, #6d5efc); font-weight: 400; font-size: 1.1rem; }
      .pf-faq details[open] summary::after { content: '−'; }
      .pf-faq p { margin: 0; padding: 0 16px 15px; color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
      .pf-chips { display: flex; flex-wrap: wrap; gap: 8px; }
      .pf-chip { padding: 8px 13px; border: 1px solid var(--line); border-radius: 999px; color: var(--text); font-size: 0.82rem; font-weight: 700; }
      .pf-chip:hover { border-color: var(--pf-accent, #6d5efc); }
      .pf-cta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-top: 46px; padding: 26px; border: 1px solid var(--line); border-radius: 20px; background: radial-gradient(120% 160% at 0% 0%, color-mix(in srgb, var(--pf-accent, #6d5efc) 18%, transparent), transparent 58%), rgba(11,17,38,.8); }
      .pf-cta h2 { margin: 0 0 6px; font-size: 1.25rem; }
      .pf-cta p { max-width: 600px; margin: 0; color: var(--muted); line-height: 1.55; }
      .pf-terms { margin: 28px 0 0; color: var(--faint, var(--muted)); font-size: 0.78rem; }
      @media (max-width: 760px) { .pf-steps { grid-template-columns: 1fr; } .pf-row { flex-direction: column; } .pf-submit { width: 100%; } .pf-card { padding: 18px; } }
`;

function document_({ lang, platform, copy, assets }) {
  const path = platform.path[lang];
  const url = absolute(path);
  const other = lang === 'vi' ? 'en' : 'vi';
  const ui = UI[lang];
  const card = lang === 'en' ? '/og-image-en.png' : '/og-image.png';
  return `<!doctype html>
<html lang="${LOCALE_TAGS[lang].html}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#070B1A" />
    <title>${esc(platform.meta[lang].title)}</title>
    <meta name="description" content="${esc(platform.meta[lang].description)}" />
    <link rel="canonical" href="${esc(url)}" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="AutoReel" />
    <link rel="alternate" hreflang="${LOCALE_TAGS[lang].html}" href="${esc(url)}" />
    <link rel="alternate" hreflang="${LOCALE_TAGS[other].html}" href="${esc(absolute(platform.path[other]))}" />
    <link rel="alternate" hreflang="x-default" href="${esc(absolute(platform.path.vi))}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AutoReel" />
    <meta property="og:locale" content="${LOCALE_TAGS[lang].og}" />
    <meta property="og:locale:alternate" content="${LOCALE_TAGS[other].og}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:title" content="${esc(platform.meta[lang].title)}" />
    <meta property="og:description" content="${esc(platform.meta[lang].description)}" />
    <meta property="og:image" content="${SITE_URL}${card}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(platform.meta[lang].title)}" />
    <meta name="twitter:description" content="${esc(platform.meta[lang].description)}" />
    <meta name="twitter:image" content="${SITE_URL}${card}" />
${assets}
    <style>${STYLE}    </style>
  </head>
  <body style="--pf-accent: ${platform.accent}">
${pageBody({ lang, platform, copy, ui })}
  </body>
</html>
`;
}

function pageBody({ lang, platform, copy, ui }) {
  const formAction = DOWNLOADS.path[lang];
  const points = copy.points.map((item) => `<li>${esc(item)}</li>`).join('');
  const steps = copy.steps
    .map(
      ([title, text]) =>
        `<li class="pf-step"><h3>${esc(title)}</h3><p>${esc(text)}</p></li>`,
    )
    .join('\n          ');
  const examples = copy.examples
    .map((example) => `<li><code>${esc(example)}</code></li>`)
    .join('\n            ');
  const notes = copy.notes.map((note) => `<li>${esc(note)}</li>`).join('\n            ');
  const faq = copy.faq
    .map(
      ([question, answer]) => `<details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary itemprop="name">${esc(question)}</summary>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">${esc(answer)}</p>
            </div>
          </details>`,
    )
    .join('\n          ');
  const others = PLATFORM_PAGES.filter((one) => one.key !== platform.key)
    .map(
      (one) =>
        `<a class="pf-chip" href="${esc(one.path[lang])}">${esc(one.label)}</a>`,
    )
    .join('');

  return `${nav(lang, 'downloads')}

    <main id="main" class="pf-main">
      <div class="ar-container">
        <div class="pf-page">
          <section class="pf-hero" itemscope itemtype="https://schema.org/WebApplication">
            <meta itemprop="name" content="${esc(`${platform.label} — ${copy.h1}`)}" />
            <meta itemprop="applicationCategory" content="MultimediaApplication" />
            <meta itemprop="operatingSystem" content="Web" />
            <meta itemprop="isAccessibleForFree" content="true" />
            <meta itemprop="inLanguage" content="${LOCALE_TAGS[lang].html}" />
            <meta itemprop="url" content="${esc(absolute(platform.path[lang]))}" />
            <span class="pf-eyebrow"><span class="pf-dot"></span>${esc(ui.badge)}</span>
            <h1 class="pf-h1">${esc(copy.h1)}</h1>
            <p class="pf-lead">${esc(copy.lead)}</p>
            <ul class="pf-points">${points}</ul>
          </section>

          <section class="pf-card" aria-labelledby="pf-form-heading">
            <h2 id="pf-form-heading" class="pf-label">${esc(ui.label(platform.label))}</h2>
            <form action="${esc(formAction)}" method="get">
              <div class="pf-row">
                <input class="pf-input" id="pf-url" name="url" type="url"
                       inputmode="url" autocomplete="off" spellcheck="false"
                       placeholder="${esc(ui.placeholder(platform))}" required />
                <button class="ar-btn ar-btn-primary pf-submit" type="submit">${esc(ui.button)}</button>
              </div>
              <p class="pf-fine">${esc(ui.fine)}</p>
            </form>
          </section>

          <section class="pf-section">
            <h2 class="pf-h2">${esc(ui.stepsTitle)}</h2>
            <p class="pf-prose">${esc(copy.intro)}</p>
            <ol class="pf-steps" style="margin-top:16px">
          ${steps}
            </ol>
          </section>

          <section class="pf-section">
            <h2 class="pf-h2">${esc(ui.examplesTitle(platform.label))}</h2>
            <ul class="pf-examples">
            ${examples}
            </ul>
          </section>

          <section class="pf-section">
            <h2 class="pf-h2">${esc(ui.notesTitle)}</h2>
            <ul class="pf-notes">
            ${notes}
            </ul>
          </section>

          <section class="pf-section" itemscope itemtype="https://schema.org/FAQPage">
            <h2 class="pf-h2">${esc(ui.faqTitle)}</h2>
            <div class="pf-faq">
          ${faq}
            </div>
          </section>

          <section class="pf-section">
            <h2 class="pf-h2">${esc(ui.othersTitle)}</h2>
            <div class="pf-chips">${others}</div>
          </section>

          <section class="pf-cta">
            <div>
              <h2>${esc(ui.ctaTitle)}</h2>
              <p>${esc(ui.ctaText)}</p>
            </div>
            <a class="ar-btn ar-btn-primary" href="${esc(DOWNLOADS.path[lang])}">${esc(ui.allLabel)}</a>
          </section>

          <p class="pf-terms">${esc(ui.terms)}</p>
        </div>
      </div>
    </main>

${footer(lang)}
`;
}

async function main() {
  for (const platform of PLATFORM_PAGES) {
    for (const lang of LANGS) {
      const meta = platform.meta[lang];
      if (!meta.title || meta.title.length > 62) {
        throw new Error(`${platform.key}/${lang}: title missing or too long`);
      }
      if (!meta.description || meta.description.length > 165) {
        throw new Error(`${platform.key}/${lang}: description missing or too long`);
      }
    }
  }

  const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  const baseAssets = headAssets(indexHtml);
  if (!/rel="stylesheet"/.test(baseAssets)) {
    throw new Error('build-download-platforms: no stylesheet in dist/index.html; run vite build first');
  }

  let written = 0;
  for (const platform of PLATFORM_PAGES) {
    for (const lang of LANGS) {
      const assets = langAssets(baseAssets, lang);
      const html = document_({
        lang,
        platform,
        copy: platform.copy[lang],
        assets,
      });
      const slug = platform.path[lang].replace(/^\/|\/$/g, '');
      await write(join(DIST, slug, 'index.html'), html);
      written += 1;
    }
  }
  console.log(`download platforms: wrote ${written} page(s)`);
}

main();

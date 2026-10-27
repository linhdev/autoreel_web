/**
 * Write the audio and cover landing pages.
 *
 * Their form carries `kind` (and `audioFormat` for audio) as hidden fields,
 * so the download tool opens on the switch the page is about instead of the
 * visitor having to find it after landing.
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOWNLOADS } from '../src/data/downloads.js';
import { USE_CASE_PAGES } from '../src/data/downloadUseCases.js';
import { LOCALE_TAGS, SITE_URL, absolute, pathFor } from '../src/data/routes.js';
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
    button: 'Download',
    fine: 'Miễn phí · Không cần đăng nhập · Tối đa 20 phút · 95MB',
    stepsTitle: 'Cách làm',
    notesTitle: 'Giới hạn & lưu ý',
    faqTitle: 'Câu hỏi thường gặp',
    ctaTitle: 'Mở công cụ tải video',
    ctaText: 'Dán link trực tiếp trên trang chính; có thể chọn Video, Âm thanh hoặc Ảnh bìa.',
    ctaLabel: 'Mở trang tải video',
    terms: 'Chỉ video công khai · Dùng đúng mục đích · Tôn trọng bản quyền',
  },
  en: {
    badge: 'FREE · NO LOGIN NEEDED',
    label: (label) => `Paste a public ${label} link`,
    button: 'Download',
    fine: 'Free · No login · Up to 20 minutes · 95MB',
    stepsTitle: 'How to do it',
    notesTitle: 'Limits & notes',
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'Open the download tool',
    ctaText: 'Paste a link on the main page; choose Video, Audio or Cover there.',
    ctaLabel: 'Open the downloader',
    terms: 'Public videos only · Use it lawfully · Respect copyright',
  },
};

const STYLE = `
      .uc-page { max-width: 900px; margin: 0 auto; }
      .uc-main { padding: 34px 0 80px; }
      .uc-hero { max-width: 760px; padding: 16px 0 26px; }
      .uc-badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; color: var(--muted); }
      .uc-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--uc-accent, #6d5efc); box-shadow: 0 0 12px var(--uc-accent, #6d5efc); }
      .uc-h1 { margin: 18px 0 12px; font-size: clamp(1.9rem, 4vw, 2.9rem); line-height: 1.08; letter-spacing: -0.03em; }
      .uc-lead { margin: 0; max-width: 700px; color: var(--muted); font-size: 1.02rem; line-height: 1.65; }
      .uc-points { display: flex; flex-wrap: wrap; gap: 8px 18px; margin: 16px 0 0; padding: 0; list-style: none; color: var(--muted); font-size: 0.85rem; }
      .uc-points li::before { content: '✓'; color: var(--uc-accent, #6d5efc); margin-right: 6px; font-weight: 900; }
      .uc-card { margin-top: 18px; padding: 24px; border: 1px solid var(--line); border-radius: 22px; background: linear-gradient(180deg, rgba(18,26,54,.9), rgba(8,13,29,.96)); }
      .uc-label { display: block; margin: 0 0 9px; font-size: 0.92rem; font-weight: 700; }
      .uc-row { display: flex; gap: 10px; }
      .uc-input { flex: 1; min-width: 0; height: 54px; padding: 0 16px; border: 1px solid var(--line); border-radius: 13px; background: #060a18; color: var(--text); font: inherit; }
      .uc-submit { flex: none; height: 54px; padding: 0 24px; border-radius: 13px; font-weight: 800; white-space: nowrap; }
      .uc-fine { margin: 12px 0 0; color: var(--muted); font-size: 0.82rem; }
      .uc-section { margin-top: 40px; }
      .uc-h2 { margin: 0 0 14px; font-size: 1.3rem; letter-spacing: -0.02em; }
      .uc-prose { max-width: 760px; color: var(--muted); font-size: 0.95rem; line-height: 1.7; }
      .uc-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 16px 0 0; padding: 0; list-style: none; counter-reset: uc; }
      .uc-step { padding: 18px; border: 1px solid var(--line); border-radius: 18px; background: rgba(11,17,38,.6); }
      .uc-step::before { counter-increment: uc; content: counter(uc); display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; margin-bottom: 10px; border-radius: 9px; background: color-mix(in srgb, var(--uc-accent, #6d5efc) 18%, transparent); color: var(--uc-accent, #6d5efc); font-size: 0.8rem; font-weight: 900; }
      .uc-step h3 { margin: 0 0 5px; font-size: 0.95rem; }
      .uc-step p { margin: 0; color: var(--muted); font-size: 0.86rem; line-height: 1.5; }
      .uc-notes { display: grid; gap: 9px; margin: 0; padding: 0; list-style: none; max-width: 760px; }
      .uc-notes li { position: relative; padding-left: 20px; color: var(--muted); font-size: 0.9rem; line-height: 1.55; }
      .uc-notes li::before { content: '·'; position: absolute; left: 4px; color: var(--uc-accent, #6d5efc); font-weight: 900; }
      .uc-faq { display: grid; gap: 9px; max-width: 820px; }
      .uc-faq details { border: 1px solid var(--line); border-radius: 14px; background: rgba(11,17,38,.45); }
      .uc-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; font-size: 0.94rem; font-weight: 700; list-style: none; cursor: pointer; }
      .uc-faq summary::-webkit-details-marker { display: none; }
      .uc-faq summary::after { content: '+'; color: var(--uc-accent, #6d5efc); font-weight: 400; }
      .uc-faq details[open] summary::after { content: '−'; }
      .uc-faq p { margin: 0; padding: 0 16px 15px; color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
      .uc-cta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-top: 36px; padding: 24px; border: 1px solid var(--line); border-radius: 20px; background: radial-gradient(120% 160% at 0% 0%, color-mix(in srgb, var(--uc-accent, #6d5efc) 18%, transparent), transparent 58%), rgba(11,17,38,.8); }
      .uc-cta h2 { margin: 0 0 6px; font-size: 1.25rem; }
      .uc-cta p { margin: 0; max-width: 560px; color: var(--muted); line-height: 1.55; }
      .uc-terms { margin: 26px 0 0; color: var(--muted); font-size: 0.78rem; }
      @media (max-width: 760px) { .uc-steps { grid-template-columns: 1fr; } .uc-row { flex-direction: column; } .uc-submit { width: 100%; } }
`;

function document_({ lang, page, copy, assets }) {
  const url = absolute(page.path[lang]);
  const other = lang === 'vi' ? 'en' : 'vi';
  const ui = UI[lang];
  const card = lang === 'en' ? '/og-image-en.png' : '/og-image.png';
  const steps = copy.steps
    .map(([title, text]) => `<li class="uc-step"><h3>${esc(title)}</h3><p>${esc(text)}</p></li>`)
    .join('');
  const notes = copy.notes.map((note) => `<li>${esc(note)}</li>`).join('');
  const faq = copy.faq
    .map(([question, answer]) => `<details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary itemprop="name">${esc(question)}</summary>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">${esc(answer)}</p>
            </div>
          </details>`)
    .join('');
  const points = copy.points.map((point) => `<li>${esc(point)}</li>`).join('');
  const hidden = page.kind === 'audio'
    ? `<input type="hidden" name="kind" value="audio" />
                <input type="hidden" name="audioFormat" value="${esc(page.audioFormat || 'm4a')}" />`
    : `<input type="hidden" name="kind" value="cover" />`;

  return `<!doctype html>
<html lang="${LOCALE_TAGS[lang].html}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#070B1A" />
    <title>${esc(page.meta[lang].title)}</title>
    <meta name="description" content="${esc(page.meta[lang].description)}" />
    <link rel="canonical" href="${esc(url)}" />
    <meta name="robots" content="index, follow" />
    <link rel="alternate" hreflang="${LOCALE_TAGS[lang].html}" href="${esc(url)}" />
    <link rel="alternate" hreflang="${LOCALE_TAGS[other].html}" href="${esc(absolute(page.path[other]))}" />
    <link rel="alternate" hreflang="x-default" href="${esc(absolute(page.path.vi))}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AutoReel" />
    <meta property="og:locale" content="${LOCALE_TAGS[lang].og}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:title" content="${esc(page.meta[lang].title)}" />
    <meta property="og:description" content="${esc(page.meta[lang].description)}" />
    <meta property="og:image" content="${SITE_URL}${card}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.meta[lang].title)}" />
    <meta name="twitter:description" content="${esc(page.meta[lang].description)}" />
    <meta name="twitter:image" content="${SITE_URL}${card}" />
${assets}
    <style>${STYLE}</style>
  </head>
  <body style="--uc-accent: ${page.accent}">
${nav(lang, 'downloads')}
    <main id="main" class="uc-main">
      <div class="ar-container">
        <div class="uc-page">
          <section class="uc-hero" itemscope itemtype="https://schema.org/WebApplication">
            <meta itemprop="name" content="${esc(`${page.label} — ${copy.h1}`)}" />
            <meta itemprop="applicationCategory" content="MultimediaApplication" />
            <meta itemprop="operatingSystem" content="Web" />
            <meta itemprop="isAccessibleForFree" content="true" />
            <meta itemprop="inLanguage" content="${LOCALE_TAGS[lang].html}" />
            <meta itemprop="url" content="${esc(url)}" />
            <span class="uc-badge"><span class="uc-dot"></span>${esc(ui.badge)}</span>
            <h1 class="uc-h1">${esc(copy.h1)}</h1>
            <p class="uc-lead">${esc(copy.lead)}</p>
            <ul class="uc-points">${points}</ul>
          </section>

          <section class="uc-card">
            <h2 class="uc-label">${esc(ui.label(page.label))}</h2>
            <form action="${esc(DOWNLOADS.path[lang])}" method="get">
              ${hidden}
              <div class="uc-row">
                <input class="uc-input" id="uc-url" name="url" type="url"
                       inputmode="url" autocomplete="off" spellcheck="false"
                       placeholder="${esc(page.placeholder)}" required />
                <button class="ar-btn ar-btn-primary uc-submit" type="submit">${esc(ui.button)}</button>
              </div>
              <p class="uc-fine">${esc(ui.fine)}</p>
            </form>
          </section>

          <section class="uc-section">
            <h2 class="uc-h2">${esc(ui.stepsTitle)}</h2>
            <p class="uc-prose">${esc(copy.intro)}</p>
            <ol class="uc-steps">${steps}</ol>
          </section>

          <section class="uc-section">
            <h2 class="uc-h2">${esc(ui.notesTitle)}</h2>
            <ul class="uc-notes">${notes}</ul>
          </section>

          <section class="uc-section" itemscope itemtype="https://schema.org/FAQPage">
            <h2 class="uc-h2">${esc(ui.faqTitle)}</h2>
            <div class="uc-faq">${faq}</div>
          </section>

          <section class="uc-cta">
            <div>
              <h2>${esc(ui.ctaTitle)}</h2>
              <p>${esc(ui.ctaText)}</p>
            </div>
            <a class="ar-btn ar-btn-primary" href="${esc(DOWNLOADS.path[lang])}">${esc(ui.ctaLabel)}</a>
          </section>

          <p class="uc-terms">${esc(ui.terms)}</p>
        </div>
      </div>
    </main>
${footer(lang)}
  </body>
</html>
`;
}

async function main() {
  for (const page of USE_CASE_PAGES) {
    for (const lang of LANGS) {
      if (!page.meta[lang].title || page.meta[lang].title.length > 62) {
        throw new Error(`${page.key}/${lang}: title too long`);
      }
      if (!page.meta[lang].description || page.meta[lang].description.length > 165) {
        throw new Error(`${page.key}/${lang}: description too long`);
      }
    }
  }
  const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  const baseAssets = headAssets(indexHtml);
  for (const page of USE_CASE_PAGES) {
    for (const lang of LANGS) {
      const assets = langAssets(baseAssets, lang);
      const html = document_({ lang, page, copy: page.copy[lang], assets });
      const slug = page.path[lang].replace(/^\/|\/$/g, '');
      await write(join(DIST, slug, 'index.html'), html);
    }
  }
  console.log(`download use cases: wrote ${USE_CASE_PAGES.length * LANGS.length} page(s)`);
}

main();

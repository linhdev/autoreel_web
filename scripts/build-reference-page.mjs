/**
 * The static “拍同款” page: what the feature does and six starting templates.
 *
 * It deliberately has no form and no queue. The reference is measured in
 * AutoReel on the user's machine; a public page that accepted arbitrary links
 * would be a second, anonymous compute service for other people's videos.
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { REFERENCE_PAGE } from '../src/data/referencePage.js';
import { LOCALE_TAGS, SITE_URL, absolute, pathFor } from '../src/data/routes.js';
import {
  esc, footer, headAssets, langAssets, nav, write,
} from './lib/site-shell.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const LANGS = ['vi', 'en'];

const UI = {
  vi: {
    stepsTitle: 'Cách dùng',
    limitsTitle: 'Điều cần biết',
    faqTitle: 'Câu hỏi thường gặp',
    ctaTitle: 'Làm video theo mẫu trong AutoReel',
  },
  en: {
    stepsTitle: 'How it works',
    limitsTitle: 'What to know',
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'Make the video in AutoReel',
  },
};

const STYLE = `
      .rf-page { max-width: 980px; margin: 0 auto; }
      .rf-main { padding: 34px 0 80px; }
      .rf-hero { max-width: 780px; padding: 16px 0 26px; }
      .rf-badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; color: var(--muted); }
      .rf-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--rf-accent); box-shadow: 0 0 12px var(--rf-accent); }
      .rf-h1 { margin: 18px 0 12px; font-size: clamp(1.9rem, 4vw, 2.9rem); line-height: 1.08; letter-spacing: -0.03em; }
      .rf-lead { margin: 0; max-width: 720px; color: var(--muted); font-size: 1.02rem; line-height: 1.65; }
      .rf-points { display: flex; flex-wrap: wrap; gap: 8px 18px; margin: 16px 0 0; padding: 0; list-style: none; color: var(--muted); font-size: 0.85rem; }
      .rf-points li::before { content: '✓'; color: var(--rf-accent); margin-right: 6px; font-weight: 900; }
      .rf-section { margin-top: 40px; }
      .rf-h2 { margin: 0 0 14px; font-size: 1.3rem; letter-spacing: -0.02em; }
      .rf-prose { max-width: 780px; color: var(--muted); font-size: 0.95rem; line-height: 1.7; }
      .rf-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 16px 0 0; padding: 0; list-style: none; counter-reset: rf; }
      .rf-step { padding: 18px; border: 1px solid var(--line); border-radius: 18px; background: rgba(11,17,38,.6); }
      .rf-step::before { counter-increment: rf; content: counter(rf); display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; margin-bottom: 10px; border-radius: 9px; background: color-mix(in srgb, var(--rf-accent) 18%, transparent); color: var(--rf-accent); font-size: 0.8rem; font-weight: 900; }
      .rf-step h3 { margin: 0 0 5px; font-size: 0.95rem; }
      .rf-step p { margin: 0; color: var(--muted); font-size: 0.86rem; line-height: 1.5; }
      .rf-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 16px; }
      .rf-card { padding: 20px; border: 1px solid var(--line); border-radius: 18px; background: linear-gradient(180deg, rgba(18,26,54,.9), rgba(8,13,29,.96)); }
      .rf-num { color: var(--rf-accent); font-size: 0.72rem; font-weight: 900; letter-spacing: 0.12em; }
      .rf-card h3 { margin: 8px 0 6px; font-size: 1rem; }
      .rf-card p { margin: 0; color: var(--muted); font-size: 0.86rem; line-height: 1.55; }
      .rf-use { margin-top: 10px !important; color: var(--rf-accent) !important; font-size: 0.78rem !important; }
      .rf-limits { display: grid; gap: 9px; margin: 0; padding: 0; list-style: none; max-width: 800px; }
      .rf-limits li { position: relative; padding-left: 20px; color: var(--muted); font-size: 0.9rem; line-height: 1.55; }
      .rf-limits li::before { content: '·'; position: absolute; left: 4px; color: var(--rf-accent); font-weight: 900; }
      .rf-faq { display: grid; gap: 9px; max-width: 840px; }
      .rf-faq details { border: 1px solid var(--line); border-radius: 14px; background: rgba(11,17,38,.45); }
      .rf-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; font-size: 0.94rem; font-weight: 700; list-style: none; cursor: pointer; }
      .rf-faq summary::-webkit-details-marker { display: none; }
      .rf-faq summary::after { content: '+'; color: var(--rf-accent); font-weight: 400; }
      .rf-faq details[open] summary::after { content: '−'; }
      .rf-faq p { margin: 0; padding: 0 16px 15px; color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
      .rf-cta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-top: 36px; padding: 24px; border: 1px solid var(--line); border-radius: 20px; background: radial-gradient(120% 160% at 0% 0%, color-mix(in srgb, var(--rf-accent) 18%, transparent), transparent 58%), rgba(11,17,38,.8); }
      .rf-cta h2 { margin: 0 0 6px; font-size: 1.25rem; }
      .rf-cta p { margin: 0; max-width: 600px; color: var(--muted); line-height: 1.55; }
      .rf-terms { margin: 26px 0 0; color: var(--muted); font-size: 0.78rem; }
      @media (max-width: 820px) { .rf-steps, .rf-grid { grid-template-columns: 1fr; } }
`;

function document_({ lang, copy, assets }) {
  const page = REFERENCE_PAGE;
  const ui = UI[lang];
  const url = absolute(page.path[lang]);
  const other = lang === 'vi' ? 'en' : 'vi';
  const card = lang === 'en' ? '/og-image-en.png' : '/og-image.png';
  const pricing = pathFor('pricing', lang);
  const steps = copy.steps
    .map(([title, text]) => `<li class="rf-step"><h3>${esc(title)}</h3><p>${esc(text)}</p></li>`)
    .join('');
  const templates = copy.templates
    .map(([title, text, use], index) => `<article class="rf-card">
              <span class="rf-num">${String(index + 1).padStart(2, '0')}</span>
              <h3>${esc(title)}</h3>
              <p>${esc(text)}</p>
              <p class="rf-use">${esc(use)}</p>
            </article>`)
    .join('');
  const limits = copy.limits.map((one) => `<li>${esc(one)}</li>`).join('');
  const faq = copy.faq
    .map(([question, answer]) => `<details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <summary itemprop="name">${esc(question)}</summary>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">${esc(answer)}</p>
              </div>
            </details>`)
    .join('');
  const points = copy.points.map((one) => `<li>${esc(one)}</li>`).join('');

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
  <body style="--rf-accent: ${page.accent}">
${nav(lang, 'downloads')}
    <main id="main" class="rf-main">
      <div class="ar-container">
        <div class="rf-page">
          <section class="rf-hero" itemscope itemtype="https://schema.org/WebPage">
            <meta itemprop="name" content="${esc(page.meta[lang].title)}" />
            <meta itemprop="inLanguage" content="${LOCALE_TAGS[lang].html}" />
            <meta itemprop="url" content="${esc(url)}" />
            <span class="rf-badge"><span class="rf-dot"></span>${esc(copy.badge)}</span>
            <h1 class="rf-h1">${esc(copy.h1)}</h1>
            <p class="rf-lead">${esc(copy.lead)}</p>
            <ul class="rf-points">${points}</ul>
          </section>

          <p class="rf-prose">${esc(copy.intro)}</p>

          <section class="rf-section">
            <h2 class="rf-h2">${esc(ui.stepsTitle)}</h2>
            <ol class="rf-steps">${steps}</ol>
          </section>

          <section class="rf-section">
            <h2 class="rf-h2">${esc(copy.templatesTitle)}</h2>
            <p class="rf-prose">${esc(copy.templatesLead)}</p>
            <div class="rf-grid">${templates}</div>
          </section>

          <section class="rf-section">
            <h2 class="rf-h2">${esc(ui.limitsTitle)}</h2>
            <ul class="rf-limits">${limits}</ul>
          </section>

          <section class="rf-section" itemscope itemtype="https://schema.org/FAQPage">
            <h2 class="rf-h2">${esc(ui.faqTitle)}</h2>
            <div class="rf-faq">${faq}</div>
          </section>

          <section class="rf-cta">
            <div>
              <h2>${esc(copy.ctaTitle)}</h2>
              <p>${esc(copy.ctaText)}</p>
            </div>
            <a class="ar-btn ar-btn-primary" href="${esc(pricing)}">${esc(copy.ctaLabel)}</a>
          </section>

          <p class="rf-terms">${esc(copy.terms)}</p>
        </div>
      </div>
    </main>
${footer(lang)}
  </body>
</html>
`;
}

async function main() {
  const page = REFERENCE_PAGE;
  for (const lang of LANGS) {
    if (!page.meta[lang].title || page.meta[lang].title.length > 62) {
      throw new Error(`reference/${lang}: title too long`);
    }
    if (!page.meta[lang].description || page.meta[lang].description.length > 165) {
      throw new Error(`reference/${lang}: description too long`);
    }
  }
  const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  const baseAssets = headAssets(indexHtml);
  for (const lang of LANGS) {
    const html = document_({
      lang, copy: page.copy[lang], assets: langAssets(baseAssets, lang),
    });
    const slug = page.path[lang].replace(/^\/|\/$/g, '');
    await write(join(DIST, slug, 'index.html'), html);
  }
  console.log('reference page: wrote 2 page(s)');
}

main();

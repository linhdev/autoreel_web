/**
 * Write the bookmarklet + embed page for both languages.
 *
 * The bookmarklet is deliberately plain: a `javascript:` URL that reads the
 * current address and opens `/downloads/?url=…`. It has no access to page
 * content and no permissions, which is exactly what the copy promises.
 *
 * The embed snippet is a div plus `/embed.js`; the same snippet is rendered
 * live at the bottom of this page, so a reader can see the widget before
 * putting it anywhere.
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOWNLOADS, QUICK } from '../src/data/downloads.js';
import { DOWNLOAD_TOOLS } from '../src/data/downloadTools.js';
import { LOCALE_TAGS, SITE_URL, absolute } from '../src/data/routes.js';
import {
  esc, footer, headAssets, langAssets, nav, write,
} from './lib/site-shell.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const LANGS = ['vi', 'en'];

const STYLE = `
      .tr-page { max-width: 980px; margin: 0 auto; }
      .tr-main { padding: 34px 0 80px; }
      .tr-hero { max-width: 780px; padding: 16px 0 26px; }
      .tr-badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; color: var(--muted); }
      .tr-dot { width: 7px; height: 7px; border-radius: 50%; background: #34d399; box-shadow: 0 0 12px #34d399; }
      .tr-h1 { margin: 18px 0 12px; font-size: clamp(1.9rem, 4vw, 2.9rem); line-height: 1.08; letter-spacing: -0.03em; }
      .tr-lead { margin: 0; max-width: 700px; color: var(--muted); font-size: 1.02rem; line-height: 1.65; }
      .tr-card { margin-top: 22px; padding: 24px; border: 1px solid var(--line); border-radius: 22px; background: linear-gradient(180deg, rgba(18,26,54,.9), rgba(8,13,29,.96)); }
      .tr-card h2 { margin: 0 0 8px; font-size: 1.18rem; }
      .tr-card p { margin: 0 0 16px; color: var(--muted); font-size: 0.92rem; line-height: 1.6; }
      .tr-drag { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 22px; border-radius: 13px; background: linear-gradient(135deg, #6d5efc, #22d3ee); color: #fff; font-weight: 800; cursor: grab; box-shadow: 0 14px 36px rgba(109,94,252,.35); }
      .tr-drag:active { cursor: grabbing; }
      .tr-code { position: relative; margin: 16px 0 0; padding: 14px 16px; border: 1px solid var(--line); border-radius: 12px; background: #060a18; }
      .tr-code pre { margin: 0; padding-right: 100px; overflow-wrap: anywhere; white-space: pre-wrap; color: #c7c1ff; font-size: 0.8rem; line-height: 1.55; }
      .tr-copy { position: absolute; top: 10px; right: 10px; height: 32px; padding: 0 12px; border: 1px solid var(--line); border-radius: 8px; background: rgba(148,163,184,.08); color: var(--text); font: inherit; font-size: 0.78rem; font-weight: 700; cursor: pointer; }
      .tr-copy:hover { border-color: #6d5efc; }
      .tr-steps { display: grid; gap: 10px; margin: 18px 0 0; padding: 0; list-style: none; counter-reset: tr; }
      .tr-step { display: flex; gap: 12px; color: var(--muted); font-size: 0.9rem; line-height: 1.55; }
      .tr-step::before { counter-increment: tr; content: counter(tr); display: inline-flex; width: 26px; height: 26px; flex: none; align-items: center; justify-content: center; border-radius: 8px; background: rgba(109,94,252,.18); color: #c7c1ff; font-size: 0.76rem; font-weight: 900; }
      .tr-note { margin: 16px 0 0; padding: 13px 15px; border: 1px solid var(--line); border-radius: 12px; background: rgba(148,163,184,.05); color: var(--muted); font-size: 0.85rem; line-height: 1.6; }
      .tr-note strong { color: var(--text); }
      .tr-demo { margin-top: 16px; padding: 16px; border: 1px dashed var(--line); border-radius: 14px; }
      .tr-faq { display: grid; gap: 9px; margin-top: 22px; }
      .tr-faq details { border: 1px solid var(--line); border-radius: 14px; background: rgba(11,17,38,.45); }
      .tr-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; font-size: 0.94rem; font-weight: 700; list-style: none; cursor: pointer; }
      .tr-faq summary::-webkit-details-marker { display: none; }
      .tr-faq summary::after { content: '+'; color: #c7c1ff; font-weight: 400; }
      .tr-faq details[open] summary::after { content: '−'; }
      .tr-faq p { margin: 0; padding: 0 16px 15px; color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
      .tr-cta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-top: 36px; padding: 24px; border: 1px solid var(--line); border-radius: 20px; background: radial-gradient(120% 160% at 0% 0%, rgba(109,94,252,.18), transparent 58%), rgba(11,17,38,.8); }
      .tr-cta h2 { margin: 0 0 6px; font-size: 1.25rem; }
      .tr-cta p { margin: 0; max-width: 600px; color: var(--muted); line-height: 1.55; }
      .tr-terms { margin: 26px 0 0; color: var(--muted); font-size: 0.78rem; }
      @media (max-width: 600px) { .tr-card { padding: 18px; } .tr-copy { position: static; margin-top: 10px; } .tr-code pre { padding-right: 0; } }
`;

function bookmarklet(lang) {
  const target = lang === 'en' ? DOWNLOADS.path.en : DOWNLOADS.path.vi;
  return `javascript:(()=>{window.open('https://autoreelvn.com${target}?url='+encodeURIComponent(location.href),'_blank','noopener')})()`;
}

function page(lang) {
  const copy = DOWNLOAD_TOOLS[lang];
  const path = QUICK.path[lang];
  const url = absolute(path);
  const other = lang === 'vi' ? 'en' : 'vi';
  const code = bookmarklet(lang);
  const faq = copy.faq
    .map(
      ([question, answer]) => `<details>
            <summary>${esc(question)}</summary>
            <p>${esc(answer)}</p>
          </details>`,
    )
    .join('\n          ');
  const steps = copy.steps
    .map(([title, text]) => `<li class="tr-step"><span><strong>${esc(title)}</strong> — ${esc(text)}</span></li>`)
    .join('\n            ');

  return `<!doctype html>
<html lang="${LOCALE_TAGS[lang].html}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#070B1A" />
    <title>${esc(copy.title)}</title>
    <meta name="description" content="${esc(copy.description)}" />
    <link rel="canonical" href="${esc(url)}" />
    <meta name="robots" content="index, follow" />
    <link rel="alternate" hreflang="${LOCALE_TAGS[lang].html}" href="${esc(url)}" />
    <link rel="alternate" hreflang="${LOCALE_TAGS[other].html}" href="${esc(absolute(QUICK.path[other]))}" />
    <link rel="alternate" hreflang="x-default" href="${esc(absolute(QUICK.path.vi))}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AutoReel" />
    <meta property="og:locale" content="${LOCALE_TAGS[lang].og}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:title" content="${esc(copy.title)}" />
    <meta property="og:description" content="${esc(copy.description)}" />
    <meta property="og:image" content="${SITE_URL}${lang === 'en' ? '/og-image-en.png' : '/og-image.png'}" />
${await_index_placeholder}
    <style>${STYLE}</style>
  </head>
  <body>
${nav(lang, 'downloads')}
    <main id="main" class="tr-main">
      <div class="ar-container">
        <div class="tr-page">
          <section class="tr-hero">
            <span class="tr-badge"><span class="tr-dot"></span>${lang === 'vi' ? 'MIỄN PHÍ · KHÔNG CẦN CÀI ĐẶT' : 'FREE · NOTHING TO INSTALL'}</span>
            <h1 class="tr-h1">${esc(copy.h1)}</h1>
            <p class="tr-lead">${esc(copy.lead)}</p>
          </section>

          <section class="tr-card">
            <h2>${esc(copy.bookmarkletTitle)}</h2>
            <p>${esc(copy.bookmarkletText)}</p>
            <a class="tr-drag" href="${esc(code)}" draggable="true">${esc(copy.dragLabel)}</a>
            <div class="tr-code">
              <pre><code id="tr-code">${esc(code)}</code></pre>
              <button class="tr-copy" type="button" data-copy="#tr-code" data-copied="${esc(copy.copied)}">${esc(copy.copy)}</button>
            </div>
            <ol class="tr-steps">
            ${steps}
            </ol>
            <p class="tr-note"><strong>${esc(copy.mobileTitle)}.</strong> ${esc(copy.mobileText)}</p>
          </section>

          <section class="tr-card">
            <h2>${esc(copy.embedTitle)}</h2>
            <p>${esc(copy.embedText)}</p>
            <div class="tr-code">
              <pre><code id="tr-embed">${esc(copy.embedSnippet)}</code></pre>
              <button class="tr-copy" type="button" data-copy="#tr-embed" data-copied="${esc(copy.copied)}">${esc(copy.copy)}</button>
            </div>
            <div class="tr-demo">
              <div id="autoreel-download"></div>
              <p class="tr-note" style="margin-bottom:0">${esc(copy.embedNote)}</p>
            </div>
          </section>

          <section class="tr-card">
            <h2>${esc(copy.faqTitle)}</h2>
            <div class="tr-faq">
          ${faq}
            </div>
          </section>

          <section class="tr-cta">
            <div>
              <h2>${esc(copy.ctaTitle)}</h2>
              <p>${esc(copy.ctaText)}</p>
            </div>
            <a class="ar-btn ar-btn-primary" href="${esc(DOWNLOADS.path[lang])}">${esc(copy.ctaLabel)}</a>
          </section>

          <p class="tr-terms">${esc(copy.terms)}</p>
        </div>
      </div>
    </main>
${footer(lang)}
    <script>
      for (const button of document.querySelectorAll('[data-copy]')) {
        button.addEventListener('click', async () => {
          const target = document.querySelector(button.getAttribute('data-copy'));
          if (!target) return;
          try {
            await navigator.clipboard.writeText(target.textContent.trim());
            const before = button.textContent;
            button.textContent = button.getAttribute('data-copied') || before;
            setTimeout(() => { button.textContent = before; }, 1600);
          } catch {
            /* The code is selectable; clipboard permission is a bonus. */
          }
        });
      }
    <\/script>
    <script src="/embed.js" async></script>
  </body>
</html>
`;
}

// `headAssets` is synchronous, but the page function reads it from the built
// index once. The placeholder is replaced in main() to keep this template
// free of a stray call inside the interpolation.
const await_index_placeholder = '__HEAD_ASSETS__';

async function main() {
  const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  const baseAssets = headAssets(indexHtml);
  if (!/rel="stylesheet"/.test(baseAssets)) {
    throw new Error('build-download-tools: no stylesheet in dist/index.html; run vite build first');
  }
  for (const lang of LANGS) {
    const copy = DOWNLOAD_TOOLS[lang];
    if (!copy.title || copy.title.length > 62) throw new Error(`tools/${lang}: title too long`);
    if (!copy.description || copy.description.length > 165) {
      throw new Error(`tools/${lang}: description too long`);
    }
    const assets = langAssets(baseAssets, lang);
    const html = page(lang).replace(await_index_placeholder, assets);
    const slug = QUICK.path[lang].replace(/^\/|\/$/g, '');
    await write(join(DIST, slug, 'index.html'), html);
  }
  console.log(`download tools: wrote ${LANGS.length} page(s)`);
}

main();

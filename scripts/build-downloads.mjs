/**
 * Write the public download tool, one real HTML file per language.
 *
 * It is a standalone document, not a route of the one-page app: the app's
 * router claims unknown paths and `replaceState('/')`, which would take a
 * reader who landed on a tool page straight back to the landing hero.
 *
 * The interactive half is `/downloads/app.js`, copied verbatim from
 * `public/downloads/app.js` by Vite. This builder only writes markup, meta and
 * the inline layout block.
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOWNLOADS, QUICK, TURNSTILE_SITE_KEY, downloads } from '../src/data/downloads.js';
import { PLATFORM_PAGES } from '../src/data/downloadPlatforms.js';
import { benefits } from '../src/data/features.js';
import {
  LOCALE_TAGS, SITE_URL, absolute, pathFor,
} from '../src/data/routes.js';
import { site } from '../src/data/site.js';
import {
  esc, footer, headAssets, langAssets, nav, write,
} from './lib/site-shell.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const LANGS = ['vi', 'en'];

const FEATURE_ICONS = {
  Zap: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>',
  Boxes: '<path d="M12 3 3 7.5v9L12 21l9-4.5v-9L12 3z"/><path d="m3 7.5 9 4.5 9-4.5M12 12v9"/>',
  BrainCircuit: '<circle cx="12" cy="12" r="9"/><path d="M8 14h8M12 8v8"/>',
  AudioLines: '<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2"/>',
  Palette: '<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="13" r="1" fill="currentColor" stroke="none"/>',
  Rocket: '<path d="M5 19c0-4 3-8 7-10 2-1 5-2 7-2 0 2-1 5-2 7-2 4-6 7-10 7l-2-2z"/><circle cx="14" cy="10" r="1.5"/>',
  Send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  MonitorSmartphone: '<rect x="3" y="4" width="13" height="10" rx="1"/><path d="M6 18h7M16 20h5v-7h-5z"/>',
};

const STEP_ICONS = [
  '<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',
  '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/>',
  '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
];

const STYLE = `
      .dl-page { max-width: 1080px; margin: 0 auto; }
      .dl-main { padding: 34px 0 82px; }
      .dl-hero { position: relative; padding: 16px 0 30px; max-width: 800px; }
      .dl-eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 0.71rem; font-weight: 800; letter-spacing: 0.08em; color: var(--muted); text-transform: uppercase; }
      .dl-dot { width: 7px; height: 7px; border-radius: 50%; background: #34d399; box-shadow: 0 0 12px #34d399; }
      .dl-h1 { margin: 18px 0 14px; font-size: clamp(2rem, 4.3vw, 3.2rem); line-height: 1.05; letter-spacing: -0.03em; }
      .dl-lead { margin: 0 0 20px; max-width: 660px; color: var(--muted); font-size: 1.04rem; line-height: 1.65; }
      .dl-trust { display: flex; flex-wrap: wrap; gap: 8px 18px; margin: 0; padding: 0; list-style: none; color: var(--muted); font-size: 0.85rem; }
      .dl-trust li { display: flex; align-items: center; gap: 7px; }
      .dl-trust li::before { content: '✓'; display: inline-flex; width: 18px; height: 18px; align-items: center; justify-content: center; border-radius: 50%; background: rgba(52, 211, 153, 0.14); color: #34d399; font-size: 0.7rem; font-weight: 900; }
      .dl-banner { margin: 0 0 20px; padding: 13px 16px; border: 1px solid #7a3a3a; border-radius: 14px; background: #2a1418; color: #ffc7c7; }
      .dl-banner[hidden], .dl-results[hidden] { display: none !important; }
      .dl-layout { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.85fr); gap: 22px; align-items: start; }
      .dl-card { position: relative; overflow: hidden; padding: 26px; border: 1px solid rgba(109, 94, 252, 0.28); border-radius: 24px; background: linear-gradient(180deg, rgba(18, 26, 54, 0.95), rgba(8, 13, 29, 0.98)); box-shadow: 0 24px 80px rgba(3, 6, 18, 0.5); }
      .dl-card::before { content: ''; position: absolute; inset: 0 0 auto; height: 1px; background: linear-gradient(90deg, transparent, rgba(109, 94, 252, 0.8), rgba(34, 211, 238, 0.6), transparent); }
      .dl-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; margin-bottom: 18px; }
      .dl-card-title { margin: 0; font-size: 1.22rem; letter-spacing: -0.01em; }
      .dl-card-sub { margin: 6px 0 0; color: var(--muted); font-size: 0.85rem; }
      .dl-pill { flex: none; padding: 6px 10px; border: 1px solid rgba(52, 211, 153, 0.25); border-radius: 999px; background: rgba(52, 211, 153, 0.1); color: #7ee2b8; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; }
      .dl-form { margin: 0; }
      .dl-label { display: block; margin: 0 0 8px; font-size: 0.9rem; font-weight: 700; }
      .dl-input-row { display: flex; gap: 10px; align-items: flex-start; }
      .dl-input { flex: 1; min-width: 0; height: 54px; padding: 0 16px; border: 1px solid var(--line); border-radius: 13px; background: #060a18; color: var(--text); font: inherit; }
      .dl-textarea { width: 100%; height: auto; min-height: 104px; padding: 13px 16px; line-height: 1.6; resize: vertical; }
      .dl-input:focus { outline: 2px solid rgba(109, 94, 252, 0.8); outline-offset: 2px; border-color: transparent; }
      .dl-hint { margin: 8px 0 0; }
      .dl-quick { margin: 6px 0 0; }
      .dl-quick a { color: #c7c1ff; font-weight: 700; }
      .dl-kinds { display: flex; gap: 5px; width: fit-content; margin: 0 0 16px; padding: 4px; border: 1px solid var(--line); border-radius: 12px; background: rgba(148, 163, 184, 0.05); }
      .dl-kind { padding: 8px 14px; border: 0; border-radius: 9px; background: transparent; color: var(--muted); font: inherit; font-size: 0.84rem; font-weight: 700; cursor: pointer; }
      .dl-kind.is-active { background: rgba(109, 94, 252, 0.22); color: #e9e6ff; box-shadow: inset 0 0 0 1px rgba(109, 94, 252, 0.5); }
      .dl-audio-format { margin: 0 0 16px; }
      .dl-audio-format[hidden] { display: none !important; }
      .dl-select { max-width: 320px; height: 48px; padding: 0 12px; }
      .dl-submit { flex: none; height: 54px; padding: 0 24px; border-radius: 13px; font-weight: 800; cursor: pointer; white-space: nowrap; }
      .dl-submit:disabled { cursor: not-allowed; opacity: 0.5; }
      .dl-turnstile { margin: 16px 0 0; min-height: 65px; }
      .dl-progress { position: relative; height: 5px; margin: 18px 0 12px; overflow: hidden; border-radius: 999px; background: rgba(148, 163, 184, 0.14); }
      .dl-progress span { display: block; width: 0; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #6d5efc, #22d3ee); }
      #dl-tool[data-stage="queued"] .dl-progress span { width: 42%; animation: dl-bar 1.6s ease-in-out infinite; }
      #dl-tool[data-stage="running"] .dl-progress span { width: 42%; animation: dl-bar 0.95s ease-in-out infinite; }
      #dl-tool[data-stage="done"] .dl-progress span { width: 100%; background: linear-gradient(90deg, #34d399, #22d3ee); }
      #dl-tool[data-stage="error"] .dl-progress span { width: 100%; background: #f87171; }
      #dl-tool[data-stage="idle"] .dl-progress { opacity: 0.45; }
      @keyframes dl-bar { 0% { transform: translateX(-110%); } 100% { transform: translateX(340%); } }
      .dl-timeline { display: flex; gap: 8px; margin: 0 0 14px; padding: 0; list-style: none; }
      .dl-timeline li { display: flex; flex: 1; align-items: center; gap: 7px; color: var(--muted); font-size: 0.77rem; font-weight: 700; }
      .dl-timeline li span { display: inline-flex; width: 20px; height: 20px; align-items: center; justify-content: center; border: 1px solid var(--line); border-radius: 50%; font-size: 0.66rem; }
      .dl-timeline li.is-active { color: var(--text); }
      .dl-timeline li.is-active span { border-color: #6d5efc; background: #6d5efc; color: #fff; box-shadow: 0 0 0 4px rgba(109, 94, 252, 0.16); }
      .dl-timeline li.is-done { color: #7ee2b8; }
      .dl-timeline li.is-done span { border-color: rgba(52, 211, 153, 0.5); background: rgba(52, 211, 153, 0.14); color: #7ee2b8; }
      .dl-timeline li.is-error span { border-color: #f87171; color: #f87171; }
      .dl-status { display: flex; align-items: center; gap: 8px; min-height: 1.5em; margin: 0; color: var(--muted); font-size: 0.9rem; }
      .dl-status:not(:empty)::before { content: ''; width: 7px; height: 7px; flex: none; border-radius: 50%; background: #6d5efc; }
      .dl-status[data-kind="ok"] { color: #7ee2b8; }
      .dl-status[data-kind="ok"]::before { background: #34d399; }
      .dl-status[data-kind="error"] { color: #ff9c9c; }
      .dl-status[data-kind="error"]::before { background: #f87171; }
      .dl-results { display: grid; gap: 10px; margin: 18px 0 0; padding: 0; list-style: none; }
      .dl-results[hidden] { display: none !important; }
      .dl-job { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 12px; align-items: start; padding: 14px; border: 1px solid rgba(109, 94, 252, 0.24); border-radius: 16px; background: rgba(109, 94, 252, 0.06); }
      .dl-job-num { display: inline-flex; width: 30px; height: 30px; align-items: center; justify-content: center; border-radius: 10px; background: rgba(109, 94, 252, 0.18); color: #c7c1ff; font-size: 0.8rem; font-weight: 800; }
      .dl-job-body { min-width: 0; }
      .dl-job-name { display: block; font-size: 0.95rem; word-break: break-word; }
      .dl-job-status { display: block; margin-top: 3px; color: var(--muted); font-size: 0.84rem; }
      .dl-job-status[data-kind="ok"] { color: #7ee2b8; }
      .dl-job-status[data-kind="error"] { color: #ff9c9c; }
      .dl-job-meta, .dl-job-expiry { display: block; margin-top: 2px; color: var(--muted); font-size: 0.8rem; }
      .dl-job-actions { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; }
      .dl-job-actions .ar-btn { height: 40px; padding: 0 16px; font-size: 0.86rem; }
      .dl-job-preview { cursor: pointer; }
      .dl-job .dl-preview { grid-column: 1 / -1; margin-top: 4px; max-height: 360px; }
      .dl-cover { grid-column: 1 / -1; margin-top: 4px; width: 100%; max-width: 320px; border: 1px solid var(--line); border-radius: 12px; }
      audio.dl-preview { grid-column: 1 / -1; margin-top: 4px; width: 100%; max-width: 480px; }
      .dl-share { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; align-items: center; margin-top: 16px; padding: 16px; border: 1px solid var(--line); border-radius: 16px; background: rgba(11, 17, 38, 0.6); }
      .dl-share[hidden] { display: none !important; }
      .dl-share-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
      .dl-share-actions .ar-btn { height: 38px; padding: 0 14px; font-size: 0.84rem; }
      .dl-qr { display: grid; justify-items: center; gap: 6px; }
      .dl-qr img { width: 112px; height: 112px; padding: 6px; border-radius: 8px; background: #fff; }
      .dl-qr .dl-note { max-width: 150px; text-align: center; font-size: 0.72rem; }
      .dl-transfer { width: min(92vw, 430px); padding: 0; border: 1px solid var(--line); border-radius: 18px; background: #0b1126; color: var(--text); }
      .dl-transfer::backdrop { background: rgba(3, 6, 18, 0.72); }
      .dl-transfer-box { position: relative; padding: 24px 22px 20px; text-align: center; }
      .dl-transfer-box h2 { margin: 0 0 8px; font-size: 1.12rem; }
      .dl-transfer-close { position: absolute; top: 8px; right: 12px; border: 0; background: transparent; color: var(--muted); font-size: 1.5rem; line-height: 1; cursor: pointer; }
      .dl-transfer-qr { display: flex; justify-content: center; margin: 12px 0 4px; }
      .dl-transfer-qr img { width: 160px; height: 160px; padding: 7px; border-radius: 12px; background: #fff; }
      .dl-transfer-actions { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 14px; }
      .dl-transfer-actions .ar-btn { height: 40px; padding: 0 14px; font-size: 0.84rem; }
      @media (max-width: 600px) { .dl-share { grid-template-columns: 1fr; } .dl-qr { justify-items: start; } }
      .dl-preview { width: 100%; max-height: 440px; border-radius: 12px; background: #000; }
      .dl-preview[hidden] { display: none !important; }
      .dl-download { display: inline-flex; height: 46px; padding: 0 20px; align-items: center; border-radius: 12px; }
      .dl-side { display: grid; gap: 16px; }
      .dl-side-card { padding: 20px; border: 1px solid var(--line); border-radius: 20px; background: rgba(11, 17, 38, 0.7); }
      .dl-side-title { margin: 0 0 12px; font-size: 0.95rem; }
      .dl-chips { display: flex; flex-wrap: wrap; gap: 7px; }
      .dl-chip { padding: 6px 10px; border: 1px solid var(--line); border-radius: 999px; background: rgba(148, 163, 184, 0.05); color: var(--text); font-size: 0.8rem; }
      .dl-side-list { display: grid; gap: 9px; margin: 0; padding: 0; list-style: none; }
      .dl-side-list li { position: relative; padding-left: 18px; color: var(--muted); font-size: 0.84rem; line-height: 1.45; }
      .dl-side-list li::before { content: '✓'; position: absolute; left: 0; top: 0; color: #7ee2b8; font-size: 0.8rem; font-weight: 900; }
      .dl-note { color: var(--muted); font-size: 0.86rem; }
      .dl-section { margin-top: 48px; }
      .dl-section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 18px; margin-bottom: 20px; }
      .dl-h2 { margin: 0 0 4px; font-size: 1.42rem; letter-spacing: -0.02em; }
      .dl-section-lead { margin: 8px 0 0; max-width: 660px; color: var(--muted); font-size: 0.94rem; line-height: 1.6; }
      .dl-link { color: #c7c1ff; font-size: 0.9rem; font-weight: 700; white-space: nowrap; }
      .dl-grid, .dl-feature-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
      .dl-step, .dl-feature { padding: 18px; border: 1px solid var(--line); border-radius: 18px; background: rgba(11, 17, 38, 0.55); }
      .dl-step-icon, .dl-feature-icon { display: inline-flex; width: 38px; height: 38px; align-items: center; justify-content: center; margin-bottom: 12px; border-radius: 12px; background: rgba(109, 94, 252, 0.15); color: #c7c1ff; }
      .dl-feature-icon { background: rgba(34, 211, 238, 0.1); color: #8be9f7; }
      .dl-step-icon svg, .dl-feature-icon svg { width: 20px; height: 20px; }
      .dl-step h3, .dl-feature h3 { margin: 0 0 6px; font-size: 0.97rem; }
      .dl-step p, .dl-feature p { margin: 0; color: var(--muted); font-size: 0.87rem; line-height: 1.55; }
      .dl-faq { display: grid; gap: 10px; }
      .dl-faq-item { border: 1px solid var(--line); border-radius: 14px; background: rgba(11, 17, 38, 0.45); }
      .dl-faq-item summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 15px 17px; font-size: 0.95rem; font-weight: 700; list-style: none; cursor: pointer; }
      .dl-faq-item summary::-webkit-details-marker { display: none; }
      .dl-faq-item summary::after { content: '+'; color: #c7c1ff; font-size: 1.15rem; font-weight: 400; }
      .dl-faq-item[open] summary::after { content: '−'; }
      .dl-answer { padding: 0 17px 16px; color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
      .dl-cta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 22px; margin-top: 52px; padding: 28px; border: 1px solid rgba(109, 94, 252, 0.3); border-radius: 22px; background: radial-gradient(120% 160% at 0% 0%, rgba(109, 94, 252, 0.18), transparent 55%), rgba(11, 17, 38, 0.8); }
      .dl-cta h2 { margin: 0 0 6px; font-size: 1.3rem; }
      .dl-cta p { max-width: 560px; margin: 0; color: var(--muted); line-height: 1.55; }
      @media (max-width: 900px) {
        .dl-layout { grid-template-columns: 1fr; }
        .dl-grid, .dl-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 600px) {
        .dl-main { padding-top: 24px; }
        .dl-card { padding: 18px; border-radius: 20px; }
        .dl-input-row { flex-direction: column; }
        .dl-submit { width: 100%; }
        .dl-job { grid-template-columns: auto minmax(0, 1fr); }
        .dl-job-actions { grid-column: 1 / -1; justify-content: flex-start; }
        .dl-grid, .dl-feature-grid { grid-template-columns: 1fr; }
        .dl-section { margin-top: 36px; }
        .dl-section-head { flex-direction: column; align-items: flex-start; }
        .dl-cta { padding: 20px; }
        .dl-timeline li { font-size: 0.7rem; }
      }
`;

function icon(paths) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

function alternates(lang) {
  const other = lang === 'vi' ? 'en' : 'vi';
  return [
    `    <link rel="alternate" hreflang="${lang}" href="${esc(absolute(DOWNLOADS.path[lang]))}" />`,
    `    <link rel="alternate" hreflang="${other}" href="${esc(absolute(DOWNLOADS.path[other]))}" />`,
    `    <link rel="alternate" hreflang="x-default" href="${esc(absolute(DOWNLOADS.path.vi))}" />`,
    `    <meta property="og:locale:alternate" content="${LOCALE_TAGS[other].og}" />`,
  ].join('\n');
}

function document_({ lang, copy, assets }) {
  const url = absolute(DOWNLOADS.path[lang]);
  const card = lang === 'en' ? '/og-image-en.png' : '/og-image.png';
  const body = pageBody(lang, copy, url);

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
    <meta name="author" content="${esc(site.name)}" />
${alternates(lang)}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:locale" content="${LOCALE_TAGS[lang].og}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:title" content="${esc(copy.title)}" />
    <meta property="og:description" content="${esc(copy.description)}" />
    <meta property="og:image" content="${SITE_URL}${card}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(copy.title)}" />
    <meta name="twitter:description" content="${esc(copy.description)}" />
    <meta name="twitter:image" content="${SITE_URL}${card}" />

${assets}

    <style>${STYLE}    </style>

    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" defer></script>
    <script src="/downloads/qr.js" defer></script>
    <script src="/downloads/app.js" defer></script>
  </head>
  <body>
${body}
  </body>
</html>
`;
}

function pageBody(lang, copy, url) {
  const steps = copy.steps
    .map(
      (step, index) => `          <div class="dl-step">
            <span class="dl-step-icon">${icon(STEP_ICONS[index % STEP_ICONS.length])}</span>
            <h3>${esc(step.title)}</h3>
            <p>${esc(step.text)}</p>
          </div>`,
    )
    .join('\n');

  const chips = copy.platforms
    .map((platform) => {
      const page = PLATFORM_PAGES.find((one) => one.label === platform);
      return page
        ? `<a class="dl-chip" href="${esc(page.path[lang])}">${esc(platform)}</a>`
        : `<span class="dl-chip">${esc(platform)}</span>`;
    })
    .join('');

  const limits = copy.limits
    .map((item) => `<li>${esc(item)}</li>`)
    .join('\n              ');

  const trust = copy.trust
    .map((item) => `<li>${esc(item)}</li>`)
    .join('');

  const timeline = copy.timeline
    .map(
      (label, index) => `<li data-step="${['queued', 'running', 'done'][index]}"><span>${index + 1}</span>${esc(label)}</li>`,
    )
    .join('\n            ');

  const faq = copy.faq
    .map(
      (item) => `          <details class="dl-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary itemprop="name">${esc(item.q)}</summary>
            <div class="dl-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">${esc(item.a)}</div>
            </div>
          </details>`,
    )
    .join('\n');

  const features = (benefits[lang] || [])
    .slice(0, 6)
    .map(
      (feature) => `          <article class="dl-feature">
            <span class="dl-feature-icon">${icon(FEATURE_ICONS[feature.icon] || FEATURE_ICONS.Zap)}</span>
            <h3>${esc(feature.title)}</h3>
            <p>${esc(feature.description)}</p>
          </article>`,
    )
    .join('\n');

  return `${nav(lang, 'downloads')}

    <main id="main" class="dl-main">
      <div class="ar-container">
        <div class="dl-page">
          <section class="dl-hero">
            <span class="dl-eyebrow"><span class="dl-dot"></span>${esc(copy.badge)}</span>
            <h1 class="dl-h1">${esc(copy.h1)}</h1>
            <p class="dl-lead">${esc(copy.lead)}</p>
            <ul class="dl-trust">${trust}</ul>
          </section>

          <div id="dl-banner" class="dl-banner" role="status" hidden></div>

          <div class="dl-layout">
            <section id="dl-tool" class="dl-card" data-stage="idle"
                     itemscope itemtype="https://schema.org/WebApplication">
              <meta itemprop="name" content="${esc(`${site.name} — ${copy.h1}`)}" />
              <meta itemprop="applicationCategory" content="MultimediaApplication" />
              <meta itemprop="operatingSystem" content="Web" />
              <meta itemprop="isAccessibleForFree" content="true" />
              <meta itemprop="inLanguage" content="${LOCALE_TAGS[lang].html}" />
              <meta itemprop="url" content="${esc(url)}" />
              <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                <meta itemprop="price" content="0" />
                <meta itemprop="priceCurrency" content="VND" />
              </div>

              <div class="dl-card-head">
                <div>
                  <h2 class="dl-card-title">${esc(copy.form.heading)}</h2>
                  <p class="dl-card-sub">${esc(copy.form.note)}</p>
                </div>
                <span class="dl-pill">${esc(copy.freeLabel)}</span>
              </div>

              <form id="dl-form" class="dl-form" novalidate>
                <div class="dl-kinds" id="dl-kinds" role="radiogroup"
                     aria-label="${esc(copy.form.kindLabel)}">
                  <button type="button" class="dl-kind is-active" data-kind="video"
                          role="radio" aria-checked="true">${esc(copy.form.kinds.video)}</button>
                  <button type="button" class="dl-kind" data-kind="audio"
                          role="radio" aria-checked="false">${esc(copy.form.kinds.audio)}</button>
                  <button type="button" class="dl-kind" data-kind="cover"
                          role="radio" aria-checked="false">${esc(copy.form.kinds.cover)}</button>
                </div>
                <div class="dl-audio-format" id="dl-audio-format" hidden>
                  <label class="dl-label" for="dl-audio-format-select">${esc(copy.form.audioFormatLabel)}</label>
                  <select id="dl-audio-format-select" class="dl-input dl-select">
                    <option value="m4a">${esc(copy.form.audioFormats.m4a)}</option>
                    <option value="mp3">${esc(copy.form.audioFormats.mp3)}</option>
                    <option value="wav">${esc(copy.form.audioFormats.wav)}</option>
                  </select>
                  <p class="dl-note dl-hint">${esc(copy.form.audioFormatNote)}</p>
                </div>
                <label class="dl-label" for="dl-url" id="dl-field-label">${esc(copy.form.label)}</label>
                <div class="dl-input-row">
                  <textarea class="dl-input dl-textarea" id="dl-url" name="urls" rows="3"
                            inputmode="url" autocomplete="off" spellcheck="false"
                            placeholder="${esc(copy.form.placeholder)}" required></textarea>
                  <button id="dl-submit" class="ar-btn ar-btn-primary dl-submit"
                          type="submit" disabled>${esc(copy.form.button)}</button>
                </div>
                <p id="dl-batch-hint" class="dl-note dl-hint">${esc(copy.form.hint)}</p>
                <p class="dl-note dl-quick"><a href="${esc(QUICK.path[lang])}">${esc(copy.form.quick)} →</a></p>
                <div id="dl-turnstile" class="dl-turnstile"
                     data-sitekey="${esc(TURNSTILE_SITE_KEY)}" data-action="download"></div>
              </form>

              <div id="dl-progress" class="dl-progress" aria-hidden="true"><span></span></div>
              <ol class="dl-timeline" aria-hidden="true">
            ${timeline}
              </ol>
              <p id="dl-status" class="dl-status" role="status" aria-live="polite"></p>

              <ul id="dl-results" class="dl-results" role="list" hidden></ul>

              <div id="dl-share" class="dl-share" hidden>
                <div class="dl-share-copy">
                  <strong id="dl-share-title" class="dl-file-name"></strong>
                  <p id="dl-share-text" class="dl-note"></p>
                  <div class="dl-share-actions">
                    <button id="dl-share-native" class="ar-btn ar-btn-secondary" type="button" hidden></button>
                    <button id="dl-copy-link" class="ar-btn ar-btn-secondary" type="button"></button>
                    <a id="dl-share-fb" class="ar-btn ar-btn-secondary" target="_blank" rel="noopener">Facebook</a>
                    <a id="dl-share-tg" class="ar-btn ar-btn-secondary" target="_blank" rel="noopener">Telegram</a>
                  </div>
                </div>
                <div class="dl-qr">
                  <div id="dl-qr-box"></div>
                  <span id="dl-qr-note" class="dl-note"></span>
                </div>
              </div>

              <dialog id="dl-transfer" class="dl-transfer" aria-labelledby="dl-transfer-title">
                <div class="dl-transfer-box">
                  <button id="dl-transfer-close" class="dl-transfer-close" type="button" aria-label="Đóng">×</button>
                  <h2 id="dl-transfer-title"></h2>
                  <p id="dl-transfer-text" class="dl-note"></p>
                  <div id="dl-transfer-qr" class="dl-transfer-qr"></div>
                  <div class="dl-transfer-actions">
                    <button id="dl-transfer-copy" class="ar-btn ar-btn-secondary" type="button"></button>
                    <a id="dl-transfer-open" class="ar-btn ar-btn-primary" href="#" target="_blank" rel="noopener"></a>
                  </div>
                </div>
              </dialog>
            </section>

            <aside class="dl-side">
              <section class="dl-side-card">
                <h3 class="dl-side-title">${esc(copy.platformsTitle)}</h3>
                <div class="dl-chips">${chips}</div>
                <p class="dl-note" style="margin:12px 0 0">${esc(copy.platformsNote)}</p>
              </section>
              <section class="dl-side-card">
                <h3 class="dl-side-title">${esc(copy.limitsTitle)}</h3>
                <ul class="dl-side-list">
              ${limits}
                </ul>
              </section>
            </aside>
          </div>

          <section class="dl-section">
            <div class="dl-section-head">
              <h2 class="dl-h2">${esc(copy.stepsTitle)}</h2>
            </div>
            <div class="dl-grid">
${steps}
            </div>
          </section>

          <section class="dl-section">
            <div class="dl-section-head">
              <div>
                <h2 class="dl-h2">${esc(copy.featuresTitle)}</h2>
                <p class="dl-section-lead">${esc(copy.featuresLead)}</p>
              </div>
              <a class="dl-link" href="${pathFor('features', lang)}">${esc(copy.featuresCta)} →</a>
            </div>
            <div class="dl-feature-grid">
${features}
            </div>
          </section>

          <section class="dl-section" itemscope itemtype="https://schema.org/FAQPage">
            <div class="dl-section-head">
              <h2 class="dl-h2">${esc(copy.faqTitle)}</h2>
            </div>
            <div class="dl-faq">
${faq}
            </div>
          </section>

          <section class="dl-section">
            <h2 class="dl-h2">${esc(copy.privacyTitle)}</h2>
            <p class="dl-note">${esc(copy.privacyText)}
              <a class="ar-footer-link" href="${esc(copy.legalHref)}">${esc(copy.legalText)}</a>
            </p>
          </section>

          <section class="dl-cta">
            <div>
              <h2>${esc(copy.ctaTitle)}</h2>
              <p>${esc(copy.ctaText)}</p>
            </div>
            <a class="ar-btn ar-btn-primary" href="${pathFor(copy.ctaRoute, lang)}">${esc(copy.ctaLabel)}</a>
          </section>
        </div>
      </div>
    </main>

${footer(lang)}
`;
}

function checkCopy() {
  const vi = Object.keys(downloads.vi).sort().join('|');
  const en = Object.keys(downloads.en).sort().join('|');
  if (vi !== en) throw new Error('downloads.js: vi/en keys differ');

  for (const key of ['steps', 'platforms', 'limits', 'faq', 'trust', 'timeline']) {
    if (downloads.vi[key].length !== downloads.en[key].length) {
      throw new Error(`downloads.js: ${key} length differs between languages`);
    }
  }
  for (const lang of LANGS) {
    const copy = downloads[lang];
    if (!copy.title || !copy.description || copy.title.length > 62) {
      throw new Error(`downloads.js: ${lang} title is missing or too long`);
    }
    if (copy.description.length > 165) {
      throw new Error(`downloads.js: ${lang} description is too long`);
    }
  }
}

function shareDocument(lang, assets) {
  const copy = lang === 'en'
    ? {
        title: 'The file is ready — AutoReel',
        heading: 'The file is ready',
        status: 'Checking the file…',
        again: 'Download another video free',
        note: 'Open on the device that should receive the file, then press Download.',
      }
    : {
        title: 'File đã sẵn sàng — AutoReel',
        heading: 'File đã sẵn sàng',
        status: 'Đang kiểm tra file…',
        again: 'Tải video khác miễn phí',
        note: 'Mở trên thiết bị muốn nhận file, rồi bấm Download.',
      };
  return `<!doctype html>
<html lang="${LOCALE_TAGS[lang].html}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#070B1A" />
    <title>${esc(copy.title)}</title>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="description" content="${esc(copy.note)}" />
${assets}
    <style>${STYLE}    </style>
    <style>
      .share-wrap { max-width: 760px; margin: 0 auto; padding: 34px 0 80px; }
      .share-card { padding: 26px; border: 1px solid var(--line); border-radius: 22px; background: linear-gradient(180deg, rgba(18,26,54,.95), rgba(8,13,29,.98)); }
      .share-card h1 { margin: 8px 0 10px; font-size: clamp(1.5rem, 3vw, 2.1rem); line-height: 1.15; word-break: break-word; }
      #share-preview { margin: 18px 0; }
      #share-download { margin: 8px 0 4px; }
      #share-empty { margin-top: 18px; }
      .share-back { display: inline-flex; margin-top: 14px; font-weight: 700; color: #c7c1ff; }
    </style>
    <script src="/downloads/share.js" defer></script>
  </head>
  <body>
${nav(lang, 'downloads')}
    <main id="main" class="dl-main">
      <div class="ar-container">
        <div class="share-wrap">
          <section class="share-card">
            <span class="dl-pill">AUTOREEL</span>
            <h1 id="share-title">${esc(copy.heading)}</h1>
            <p id="share-status" class="dl-status" role="status">${esc(copy.status)}</p>
            <p id="share-meta" class="dl-note"></p>
            <div id="share-preview"></div>
            <a id="share-download" class="ar-btn ar-btn-primary dl-download" href="#" hidden>Download</a>
            <p id="share-expiry" class="dl-note"></p>
            <div id="share-empty" hidden>
              <p class="dl-note">${esc(copy.note)}</p>
              <a id="share-again" class="share-back" href="${esc(DOWNLOADS.path[lang])}">${esc(copy.again)} →</a>
            </div>
          </section>
        </div>
      </div>
    </main>

${footer(lang)}
  </body>
</html>
`;
}

async function main() {
  checkCopy();
  if (TURNSTILE_SITE_KEY.startsWith('1x000')) {
    console.log(
      'downloads: WARNING: using the Turnstile TEST site key; set '
      + 'TURNSTILE_SITE_KEY before a production build',
    );
  }
  const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  const baseAssets = headAssets(indexHtml);
  if (!/rel="stylesheet"/.test(baseAssets)) {
    throw new Error('build-downloads: no stylesheet in dist/index.html; run vite build first');
  }

  for (const lang of LANGS) {
    const assets = langAssets(baseAssets, lang)
      .replace('href="/site.webmanifest"', 'href="/downloads/manifest.webmanifest"')
      .replace('href="/en/site.webmanifest"', 'href="/downloads/manifest.webmanifest"');
    const html = document_({ lang, copy: downloads[lang], assets });
    const slug = DOWNLOADS.path[lang].replace(/^\/|\/$/g, '');
    await write(join(DIST, slug, 'index.html'), html);
    await write(join(DIST, slug, 'share', 'index.html'), shareDocument(lang, assets));
  }
  console.log(`downloads: wrote ${LANGS.length} page(s)`);
}

main();

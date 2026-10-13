/**
 * Write the documentation: one real HTML file per topic per language, plus the
 * index the sidebar points back to.
 *
 * It is `build-posts.mjs`'s sibling and it borrows its shell — the header, the
 * footer, the escaper, the hashed stylesheet — from `scripts/lib/site-shell.mjs`
 * rather than keeping a second copy that would drift. What it does not borrow
 * is the blog's block vocabulary, because an instruction needs three things an
 * article does not:
 *
 *   `{ steps }`   numbered steps, each with an optional screenshot. The blog's
 *                 `{ ol }` takes strings, and the renderer escapes every
 *                 string it is handed, so there is no way to hang a picture
 *                 off item three. Here the step and its picture are one
 *                 object, which is also why a step cannot be written without
 *                 saying which picture belongs to it.
 *   `{ code }`    the line the reader has to type. `docker compose up -d` in
 *                 body prose reads as a sentence about a command.
 *   `{ check }`   "you should see this". The half of a step that tells
 *                 somebody they got it right before they move on.
 *
 * Plus `{ table }` for the settings that are inherently tabular, and `{ link }`
 * for pointing at another topic. `{ link }` takes a topic **key** and looks the
 * address up, so an internal link cannot be mistyped into a 404 — the same
 * argument that makes `{ figure }`'s `src` a path the builder writes rather
 * than markup an author types.
 *
 * **None of these pages carries the app's JavaScript**, and that is a rule
 * rather than an accident. The app's router claims paths by asking
 * `routeForPath`; a URL it does not know makes it `replaceState('/')`, which
 * on a documentation page would quietly send the reader to the landing page.
 * `verify-build.mjs` fails the build if a bundle tag appears on one.
 *
 * Run: `node scripts/build-docs.mjs` (or `npm run build`, which chains it).
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  DOCS, DOC_GROUPS, docByKey, docNeighbours, docPath, docs, docsInGroup,
} from '../src/data/docs.js';
// `docByKey` is still used by the sidebar; `link()` below deliberately does not
// use it, so that a pointer at a topic still being written draws nothing
// instead of stopping the build. See the note on `link`.
import { LOCALE_TAGS, SITE_URL, absolute } from '../src/data/routes.js';
import { site } from '../src/data/site.js';
import {
  esc, footer, headAssets, langAssets, nav, shownDate, write,
} from './lib/site-shell.mjs';
import { resolveDocImage } from './lib/docs-images.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PUBLIC = join(ROOT, 'public');

const OTHER = { vi: 'en', en: 'vi' };

/**
 * Text with `**emphasis**`, rendered.
 *
 * The site's React components have done this for a while — `src/components/
 * ui/RichText.jsx` — and the blog deliberately does not: `verify-build.mjs`
 * *fails* if a `**` appears in an article body, because the blog's renderer
 * escapes every string it is handed and an asterisk that survives to the page
 * is a mistake worth catching.
 *
 * Documentation is the case that argument does not cover. A step called
 * **Bước 3** and a sentence saying **không** are doing real work — they are
 * what somebody skims for — and writing them without emphasis makes a page of
 * flat paragraphs. So the markers are rendered here and not there, and the
 * reason the renderer stays safe is the order of the two operations:
 * `esc` first, then the substitution. Nothing an author types can become
 * markup, because by the time the pattern is looked for, every `<` in the
 * string is already `&lt;`; the only thing the pattern can match is two
 * literal asterisks.
 *
 * An odd number of markers is a typo — it drops the rest of the sentence into
 * bold, or prints the asterisks — so `verify-build.mjs` checks for it.
 */
function rich(value) {
  return esc(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/* --------------------------------------------------------------- the blocks */

/**
 * One picture, in the language being written.
 *
 * `src` is a string when the picture is the same in both languages and
 * `{ vi, en }` when it is a photograph of this app — which speaks whichever
 * language it was set to, so there is no such thing as one screenshot of it.
 * The distinction is enforced in `verify-build.mjs` rather than left to
 * whoever writes the next topic.
 */
function figure(one, lang) {
  // Three fields answer the same question the same way: `src`, `alt` and
  // `caption` are each either one value for both languages or a `{ vi, en }`
  // pair. `alt` and `caption` were plain strings at first, which is a bug that
  // does not look like one - the English page rendered a Vietnamese caption
  // under a Vietnamese screenshot and nothing anywhere said so.
  const one_or = (value) => (value && typeof value === 'object' ? value[lang] : value);
  // The name in the topic file is the readable one; what is on disk carries
  // a content hash. See `scripts/lib/docs-images.mjs` for why.
  const src = resolveDocImage(PUBLIC, one_or(one.src));
  const alt = one_or(one.alt);
  const caption = one_or(one.caption);
  if (!src) throw new Error(`figure has no src for ${lang}`);
  const size = one.width && one.height
    ? ` width="${one.width}" height="${one.height}"`
    : '';
  return `        <figure class="ar-post-figure">
          <img src="${esc(src)}" alt="${esc(alt || '')}"${size} loading="lazy" decoding="async" />
${caption ? `          <figcaption>${rich(caption)}</figcaption>\n` : ''}        </figure>`;
}

/** Numbered steps. The counter is CSS; the numbers here are for the reader of the source. */
function steps(one, lang) {
  const items = one.steps
    .map(
      (step, at) => `          <li class="ar-doc-step">
            <h3 class="ar-doc-step-title">${rich(step.title)}</h3>
            <div class="ar-doc-step-body">${rich(step.body)}</div>
${step.code ? `            <pre class="ar-doc-code"><code>${esc(step.code)}</code></pre>\n` : ''}${step.note ? `            <div class="ar-post-note">${rich(step.note)}</div>\n` : ''}${step.figure ? `${figure(step.figure, lang)}\n` : ''}          </li>`,
    )
    .join('\n');
  return `        <ol class="ar-doc-steps">\n${items}\n        </ol>`;
}

function table(one) {
  const head = one.table.head
    .map((cell) => `            <th>${rich(cell)}</th>`)
    .join('\n');
  const rows = one.table.rows
    .map(
      (row) => `            <tr>${row.map((cell) => `<td>${rich(cell)}</td>`).join('')}</tr>`,
    )
    .join('\n');
  return `        <div class="ar-doc-table-wrap">
          <table class="ar-doc-table">
            <thead>
              <tr>
${head}
              </tr>
            </thead>
            <tbody>
${rows}
            </tbody>
          </table>
        </div>`;
}

/**
 * A pointer to another topic, looked up by key so it cannot be mistyped into a
 * 404.
 *
 * A key that names a topic nobody has written yet draws nothing and is
 * recorded, rather than failing the build. The section was written a group at
 * a time, and `khoa-api-ai` ends by pointing at the Facebook page before the
 * Facebook page exists — which is the correct thing for it to say and the
 * wrong thing to stop a build over. `verify-build.mjs` is where the collected
 * list becomes an error, at the point where every topic is supposed to be
 * there.
 */
const missingLinks = [];

function link(one, lang) {
  const target = docs.find((doc) => doc.key === one.link);
  if (!target) {
    missingLinks.push(one.link);
    return '';
  }
  return `        <a class="ar-doc-next-card" href="${docPath(target, lang)}">
          <span class="ar-doc-next-eyebrow">${rich(DOC_GROUPS.find((g) => g.key === target.group).label[lang])}</span>
          <span class="ar-doc-next-title">${rich(target.title[lang])} →</span>
        </a>`;
}

/** One block. The blog's set, plus the five this section added. */
function block(one, lang) {
  if (one.h2) return `        <h2>${rich(one.h2)}</h2>`;
  if (one.p) {
    return one.p
      .split('\n\n')
      .map((part) => `        <p>${rich(part.trim())}</p>`)
      .join('\n');
  }
  if (one.ul) {
    return `        <ul>\n${one.ul.map((item) => `          <li>${rich(item)}</li>`).join('\n')}\n        </ul>`;
  }
  if (one.ol) {
    return `        <ol>\n${one.ol.map((item) => `          <li>${rich(item)}</li>`).join('\n')}\n        </ol>`;
  }
  if (one.note) return `        <div class="ar-post-note">${rich(one.note)}</div>`;
  if (one.check) return `        <div class="ar-doc-check">${rich(one.check)}</div>`;
  if (one.code) return `        <pre class="ar-doc-code"><code>${esc(one.code)}</code></pre>`;
  if (one.figure) return figure(one.figure, lang);
  if (one.steps) return steps(one, lang);
  if (one.table) return table(one);
  if (one.link) return link(one, lang);
  throw new Error(`unknown block: ${Object.keys(one).join(', ')}`);
}

/* -------------------------------------------------------------- the sidebar */

/**
 * The list of every topic, drawn twice on every page.
 *
 * Twice because the two copies are never on screen together: above 1000px it
 * is the sticky column, below it is a `<details>` drawer. Shipping both costs
 * about two kilobytes and removes a problem CSS cannot solve — `open` is an
 * attribute, a closed `<details>` does not render its children, and a drawer
 * the stylesheet forced open would be a drawer that cannot be closed on the
 * screen where the article is the whole point.
 *
 * Both copies come from this one function, so they cannot disagree.
 */
function sidebarList(current, lang) {
  return DOC_GROUPS.filter((group) => docsInGroup(group.key).length > 0).map((group) => {
    const items = docsInGroup(group.key)
      .map(
        (doc) => `              <li><a class="ar-doc-side-link" href="${docPath(doc, lang)}"${
          doc.key === current ? ' aria-current="page"' : ''
        }>${rich(doc.title[lang])}</a></li>`,
      )
      .join('\n');
    return `          <li class="ar-doc-side-group">
            <span class="ar-doc-side-group-title">${esc(group.label[lang])}</span>
            <ul>
${items}
            </ul>
          </li>`;
  }).join('\n');
}

function sidebar(current, lang) {
  const list = sidebarList(current, lang);
  const home = `<a class="ar-doc-side-home" href="${DOCS.path[lang]}"${
    current ? '' : ' aria-current="page"'
  }>${esc(DOCS.label[lang])}</a>`;
  const here = current ? docByKey(current).title[lang] : DOCS.label[lang];
  return `        <nav class="ar-doc-side" aria-label="${esc(DOCS.heading[lang])}">
          ${home}
          <ul class="ar-doc-side-list">
${list}
          </ul>
        </nav>

        <details class="ar-doc-drawer">
          <summary class="ar-doc-drawer-summary">${esc(DOCS.label[lang])} · ${esc(here)}</summary>
          <ul class="ar-doc-side-list">
${list}
          </ul>
        </details>`;
}

/* ---------------------------------------------------------------- the pager */

function pager(current, lang) {
  const { previous, next } = docNeighbours(current);
  const left = previous
    ? `<a class="ar-doc-nav-link ar-doc-nav-prev" href="${docPath(previous, lang)}">← ${esc(previous.title[lang])}</a>`
    : '<span></span>';
  const right = next
    ? `<a class="ar-doc-nav-link ar-doc-nav-next" href="${docPath(next, lang)}">${esc(next.title[lang])} →</a>`
    : '<span></span>';
  // `.ar-post-nav` rather than a new class: it is the same row in the same
  // place as the one under a blog article, and it was already in the
  // stylesheet with nothing generating it.
  return `        <nav class="ar-post-nav" aria-label="${lang === 'vi' ? 'Trang trước và trang sau' : 'Previous and next page'}">
          ${left}
          ${right}
        </nav>`;
}

/* ------------------------------------------------------------------- the head */

/**
 * The three `hreflang` links, and the reason they are written here rather than
 * borrowed from `build-routes.mjs`: that one builds them for the one-pager,
 * whose URLs are known to both languages in advance. Here the two addresses
 * come from the topic's own slugs, and a topic is free to have an English slug
 * that looks nothing like its Vietnamese one.
 */
function alternates(doc, lang) {
  const other = OTHER[lang];
  return [
    `    <link rel="alternate" hreflang="${lang}" href="${esc(absolute(docPath(doc, lang)))}" />`,
    `    <link rel="alternate" hreflang="${other}" href="${esc(absolute(docPath(doc, other)))}" />`,
    `    <link rel="alternate" hreflang="x-default" href="${esc(absolute(docPath(doc, 'vi')))}" />`,
    `    <meta property="og:locale:alternate" content="${LOCALE_TAGS[other].og}" />`,
  ].join('\n');
}

function document_({ title, description, url, assets, body, ld, lang, extraHead }) {
  const card = lang === 'en' ? '/og-image-en.png' : '/og-image.png';
  return `<!doctype html>
<html lang="${LOCALE_TAGS[lang].html}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#070B1A" />

    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${esc(url)}" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="${esc(site.name)}" />
${extraHead}

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:locale" content="${LOCALE_TAGS[lang].og}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${SITE_URL}${card}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${SITE_URL}${card}" />

${assets}

    <style>
      html,
      body {
        margin: 0;
        background: #070b1a;
        color: #f8faff;
      }
    </style>

    <script type="application/ld+json">
${JSON.stringify(ld, null, 2).replace(/</g, '\\u003c')}
    </script>
  </head>
  <body>
${body}
  </body>
</html>
`;
}

/**
 * What a search engine is told this page is.
 *
 * `TechArticle` and a breadcrumb trail, not `HowTo`. Google retired the HowTo
 * rich result for almost every query in 2023, and structured data that says
 * something the page does not is worse than none at all.
 */
function structuredData(doc, lang, url) {
  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: site.name, item: SITE_URL + '/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: DOCS.label[lang],
        item: absolute(DOCS.path[lang]),
      },
      { '@type': 'ListItem', position: 3, name: doc.title[lang], item: url },
    ],
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: doc.title[lang],
        description: doc.description[lang],
        inLanguage: LOCALE_TAGS[lang].html,
        datePublished: doc.updated,
        dateModified: doc.updated,
        mainEntityOfPage: url,
        publisher: { '@type': 'Organization', name: site.name, url: SITE_URL },
      },
      breadcrumb,
    ],
  };
}

/* ------------------------------------------------------------------- a topic */

function topicPage(doc, lang, assets) {
  const url = absolute(docPath(doc, lang));
  const other = OTHER[lang];
  const body = `${nav(lang, 'docs')}

    <main id="main">
      <div class="ar-container ar-doc-layout">
${sidebar(doc.key, lang)}

        <article class="ar-doc-prose ar-post-body">
          <a class="ar-post-back" href="${DOCS.path[lang]}">← ${esc(DOCS.label[lang])}</a>
          <div class="ar-doc-head">
            <h1 class="ar-post-title">${rich(doc.title[lang])}</h1>
            <p class="ar-post-lead">${rich(doc.lead[lang])}</p>
            <div class="ar-doc-meta">
              <span>${lang === 'vi' ? 'Cập nhật' : 'Updated'} ${esc(shownDate(doc.updated))}</span>
              <a href="${docPath(doc, other)}" hreflang="${other}">${other === 'en' ? 'English' : 'Tiếng Việt'}</a>
            </div>
          </div>

${doc.body[lang].map((one) => block(one, lang)).join('\n\n')}

${pager(doc.key, lang)}
        </article>
      </div>
    </main>

${footer(lang)}`;

  return document_({
    title: `${doc.title[lang]} · ${site.name}`,
    description: doc.description[lang],
    url,
    assets,
    body,
    ld: structuredData(doc, lang, url),
    lang,
    extraHead: alternates(doc, lang),
  });
}

/* ------------------------------------------------------------------- the index */

function indexPage(lang, assets) {
  const sections = DOC_GROUPS.map((group) => {
    const cards = docsInGroup(group.key)
      .map(
        (doc) => `            <article class="ar-card ar-blog-card">
              <h3><a href="${docPath(doc, lang)}">${rich(doc.title[lang])}</a></h3>
              <p>${rich(doc.description[lang])}</p>
            </article>`,
      )
      .join('\n');
    return `      <section class="ar-section" style="padding-top:8px">
        <div class="ar-container">
          <div class="ar-section-head"><h2 style="margin:0 0 18px">${esc(group.label[lang])}</h2></div>
          <div class="ar-blog-grid">
${cards}
          </div>
        </div>
      </section>`;
  }).join('\n');

  const url = absolute(DOCS.path[lang]);
  const other = OTHER[lang];
  const body = `${nav(lang, 'docs')}

    <main id="main">
      <section class="ar-section">
        <div class="ar-container">
          <div class="ar-section-head">
            <h1 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-0.03em;margin:0 0 14px">${esc(DOCS.heading[lang])}</h1>
            <p style="color:var(--muted);line-height:1.7;margin:0">${esc(DOCS.lede[lang])}</p>
            <p style="margin:14px 0 0"><a class="ar-doc-side-link" href="${DOCS.path[other]}" hreflang="${other}">${other === 'en' ? 'English' : 'Tiếng Việt'}</a></p>
          </div>
        </div>
      </section>

${sections}
    </main>

${footer(lang)}`;

  return document_({
    title: `${DOCS.heading[lang]} · ${site.name}`,
    description: DOCS.lede[lang],
    url,
    assets,
    body,
    ld: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: DOCS.heading[lang],
      description: DOCS.lede[lang],
      inLanguage: LOCALE_TAGS[lang].html,
      url,
    },
    lang,
    extraHead: [
      `    <link rel="alternate" hreflang="vi" href="${esc(absolute(DOCS.path.vi))}" />`,
      `    <link rel="alternate" hreflang="en" href="${esc(absolute(DOCS.path.en))}" />`,
      `    <link rel="alternate" hreflang="x-default" href="${esc(absolute(DOCS.path.vi))}" />`,
    ].join('\n'),
  });
}

/* ---------------------------------------------------------------------- build */

async function main() {
  const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  const assets = headAssets(indexHtml);
  if (!/rel="stylesheet"/.test(assets)) {
    throw new Error('dist/index.html has no stylesheet — run `vite build` first.');
  }

  for (const lang of ['vi', 'en']) {
    const localized = langAssets(assets, lang);
    const slugs = new Set();
    for (const doc of docs) {
      for (const field of ['key', 'group', 'order', 'updated']) {
        if (!doc[field]) throw new Error(`${doc.key || '?'} is missing ${field}`);
      }
      const slug = doc.slug[lang];
      if (!slug) throw new Error(`${doc.key} has no ${lang} slug`);
      if (slugs.has(slug)) throw new Error(`two topics share the ${lang} slug ${slug}`);
      slugs.add(slug);
      for (const code of ['vi', 'en']) {
        if (!doc.title[code] || !doc.description[code] || !doc.lead[code]) {
          throw new Error(`${doc.key} is missing ${code} copy`);
        }
        if (doc.title[code].length > 62) {
          throw new Error(`${doc.key} [${code}]: title is over 62 characters`);
        }
        if (!doc.body[code]?.length) throw new Error(`${doc.key} has no ${code} body`);
      }
      await write(join(DIST, DOCS.path[lang].replace(/^\//, ''), slug, 'index.html'),
                  topicPage(doc, lang, localized));
    }
    await write(join(DIST, DOCS.path[lang].replace(/^\//, ''), 'index.html'),
                indexPage(lang, localized));
  }
  console.log(`build-docs: ${docs.length} topic(s) x 2 languages + 2 index pages`);
  if (missingLinks.length) {
    // Not a failure here - see the note on `link`. Printed so it is a known
    // list rather than a surprise, and `verify-build.mjs` turns it into one.
    console.log(`  ${missingLinks.length} cross-reference(s) point at a topic that `
              + `does not exist yet: ${[...new Set(missingLinks)].join(', ')}`);
  }
}

main().catch((error) => {
  console.error(`build-docs failed: ${error.message}`);
  process.exit(1);
});

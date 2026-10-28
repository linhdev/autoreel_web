/**
 * Write the blog: one real HTML file per article per language, and the two
 * indexes that list them.
 *
 * `vite build` knows nothing about these pages. They are not React and they are
 * not the one-pager — an article is a document, and the reason it is written out
 * here as static HTML is the same reason `build-routes.mjs` writes the section
 * URLs as real files: a link preview on Zalo or Facebook does not run
 * JavaScript, and neither does the first pass of most crawlers. A blog post that
 * only exists after the bundle boots is a blog post with no title.
 *
 * What it borrows from the landing page, rather than duplicating:
 *
 *   - the compiled stylesheet, found by reading the built `dist/index.html`, so
 *     the blog cannot be a version behind the site it belongs to;
 *   - the design tokens and the `ar-` component classes, from `globals.css`;
 *   - the navigation, from `src/data/site.js`, so a link added to the site's nav
 *     appears here too;
 *   - the contact details and the registered business lines, from the same file.
 *
 * And what it borrows from `build-docs.mjs`, which is the sibling it grew into:
 * the header, the footer, the escaper, the hashed stylesheet and the language
 * dimension all come from `scripts/lib/site-shell.mjs`. The blog used to carry
 * its own copy of the first four, which was fine while it was Vietnamese-only.
 *
 * Run: `node scripts/build-posts.mjs` (or `npm run build`, which chains it).
 */
import { readFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { breadcrumbTrail } from './lib/breadcrumbs.mjs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { BLOG, postPath, posts, relatedPosts } from '../src/data/posts.js';
import { LOCALE_TAGS, SITE_URL, absolute, pathFor } from '../src/data/routes.js';
import { founder, site } from '../src/data/site.js';
import { ORG_ID, PERSON_ID } from '../src/data/schema.js';
import {
  esc, footer, headAssets, langAssets, nav, shownDate, write,
} from './lib/site-shell.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const OTHER = { vi: 'en', en: 'vi' };

/**
 * The handful of strings the page's own chrome needs, which belong to the
 * blog's layout rather than to any article.
 *
 * They live here rather than in `posts.js` because nothing else reads them:
 * the React app never renders a blog page, and a reader never sees them
 * anywhere but on one. An article's own `tag` is different — it is content, it
 * is different for each article, and it belongs in the article's file.
 */
const CHROME = {
  vi: {
    faq: 'Câu hỏi thường gặp',
    more: 'Bài khác',
    minRead: 'phút đọc',
    ctaTitle: 'Tự động hoá phần lặp lại',
    ctaBody:
      'AutoReel làm phần lớn công đoạn trong các bài trên: đọc sản phẩm, viết kịch bản, dựng video, rồi đăng lên Shopee Video và Facebook/Reels. Giá thuê từ 99.000đ một tháng, hoặc mua một lần dùng vĩnh viễn.',
    ctaPrimary: 'Xem bảng giá',
    ctaSecondary: 'Nhận tư vấn',
    home: 'Trang chủ',
    other: 'English',
  },
  en: {
    faq: 'Frequently asked questions',
    more: 'More articles',
    minRead: 'min read',
    ctaTitle: 'Automate the repetitive part',
    ctaBody:
      'AutoReel does most of what these articles describe: reads the product, writes the script, builds the video, then publishes it to Shopee Video and Facebook/Reels. Rent it from $6.99 a month, or buy it once and keep it.',
    ctaPrimary: 'See pricing',
    ctaSecondary: 'Talk to us',
    home: 'Home',
    other: 'Tiếng Việt',
  },
};

/**
 * An illustration: a diagram drawn by hand in `public/blog/`, which Vite copies
 * to the site root, so the article names it as `/blog/<name>.svg`.
 *
 * The one block whose markup is not entirely escaped. `src` is written through
 * as-is, because it is a path in this repo rather than text a reader supplied,
 * and escaping it would only turn a `&` in a file name into `&amp;` and 404 the
 * image. `alt` and `caption` are prose and are escaped like everything else.
 *
 * Every diagram in this folder has its labels drawn into the SVG, so there is
 * no such thing as one picture of it: the English half is a second file beside
 * the Vietnamese one, named `<stem>-en.svg`, and a reader on `/en/blog/` would
 * otherwise be shown a diagram that said `Bộ điều phối`. The two bodies are
 * separate prose already, so the paths are written separately too — and
 * `verify-build.mjs` fails if the English one was left pointing at the
 * Vietnamese drawing.
 */
function figure(one) {
  const { src, alt, caption } = one;
  if (!src || !alt) {
    throw new Error(`a figure needs a src and an alt: ${JSON.stringify(one).slice(0, 80)}`);
  }
  // The diagrams are SVGs with a viewBox; without width/height the browser
  // reserves no space and the paragraph below jumps when the image lands. Read
  // the two numbers from the file rather than keeping a second copy in the data.
  const svg = readFileSync(join(ROOT, 'public', src.replace(/^\//, '')), 'utf8').slice(0, 400);
  const box = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
  const size = box ? ` width="${box[1]}" height="${box[2]}"` : '';
  const image = `          <img src="${src}" alt="${esc(alt)}"${size} loading="lazy" decoding="async" />`;
  const text = caption ? `\n          <figcaption>${esc(caption)}</figcaption>` : '';
  return `        <figure class="ar-post-figure">\n${image}${text}\n        </figure>`;
}

/**
 * Prose with one controlled exception to "all text is escaped": a same-site
 * link, written `[label](/path/)`.
 *
 * The body blocks are plain strings, which kept an author from injecting
 * markup — and also kept every article from linking to the page it is about.
 * The escaping still runs first; the substitution only recognises an absolute
 * path on this site, so `[x](javascript:…)`, an external URL or a quote in the
 * address cannot become an anchor. The label is already escaped by then.
 */
function inlineText(value) {
  return esc(value).replace(/\[([^\]]+)\]\((\/[A-Za-z0-9\-_/]*)\)/g, (match, label, href) =>
    href.startsWith('//') ? match : `<a href="${href}">${label}</a>`,
  );
}

/** One block of an article's body. Every string is escaped on the way in. */
function block(one) {
  if (one.h2) return `        <h2>${esc(one.h2)}</h2>`;
  if (one.p) {
    // A blank line inside one paragraph is an author asking for two, and the
    // alternative — a second `{ p }` — reads as a new section in the source.
    return one.p
      .split('\n\n')
      .map((part) => `        <p>${inlineText(part.trim())}</p>`)
      .join('\n');
  }
  if (one.ul) {
    return `        <ul>\n${one.ul.map((item) => `          <li>${inlineText(item)}</li>`).join('\n')}\n        </ul>`;
  }
  if (one.ol) {
    return `        <ol>\n${one.ol.map((item) => `          <li>${inlineText(item)}</li>`).join('\n')}\n        </ol>`;
  }
  if (one.note) return `        <div class="ar-post-note">${inlineText(one.note)}</div>`;
  if (one.figure) return figure(one.figure);
  throw new Error(`unknown article block: ${JSON.stringify(one).slice(0, 80)}`);
}

function faqBlock(post, lang) {
  const items = post.faq?.[lang];
  if (!items?.length) return '';
  const rendered = items
    .map(
      (one) =>
        `          <details>\n            <summary>${esc(one.q)}</summary>\n            <p>${esc(one.a)}</p>\n          </details>`,
    )
    .join('\n');
  return `        <div class="ar-post-faq">
          <h2>${esc(CHROME[lang].faq)}</h2>
${rendered}
        </div>`;
}

function relatedBlock(post, lang) {
  const others = relatedPosts(post, lang);
  if (!others.length) return '';
  const cards = others
    .map(
      (one) => `            <article class="ar-card ar-blog-card">
              <div class="ar-blog-meta"><span>${esc(one.tag[lang])}</span><span>${esc(shownDate(one.date, lang))}</span></div>
              <h3><a href="${postPath(one, lang)}">${esc(one.title[lang])}</a></h3>
              <p>${esc(one.description[lang])}</p>
            </article>`,
    )
    .join('\n');
  return `      <section class="ar-section" style="padding-top:0">
        <div class="ar-container">
          <h2 style="font-size:1.5rem;font-weight:850;margin:0 0 18px">${esc(CHROME[lang].more)}</h2>
          <div class="ar-blog-grid">
${cards}
          </div>
        </div>
      </section>`;
}

/** The band every page ends with, so an article can be acted on where it ends. */
function cta(lang) {
  const copy = CHROME[lang];
  return `        <div class="ar-post-cta">
          <h2>${esc(copy.ctaTitle)}</h2>
          <p>${esc(copy.ctaBody)}</p>
          <div class="ar-post-actions">
            <a class="ar-btn ar-btn-primary" href="${pathFor('pricing', lang)}">${esc(copy.ctaPrimary)}</a>
            <a class="ar-btn ar-btn-secondary" href="${pathFor('contact', lang)}">${esc(copy.ctaSecondary)}</a>
          </div>
        </div>`;
}

function structuredData(post, lang, url) {
  const graph = [
    {
      '@type': 'BlogPosting',
      headline: post.title[lang],
      description: post.description[lang],
      datePublished: post.date,
      dateModified: post.updated || post.date,
      inLanguage: LOCALE_TAGS[lang].html,
      articleSection: post.tag[lang],
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      // The articles are first-person, measured accounts. Naming the person
      // and pointing at the About page is what makes that claim checkable;
      // `Organization` here was a brand signing its own homework.
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORG_ID },
      image: `${SITE_URL}/${lang === 'en' ? 'og-image-en.png' : 'og-image.png'}`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: CHROME[lang].home,
          item: `${SITE_URL}${lang === 'en' ? '/en/' : '/'}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: BLOG.heading[lang],
          item: absolute(BLOG.path[lang]),
        },
        { '@type': 'ListItem', position: 3, name: post.title[lang], item: url },
      ],
    },
  ];
  const faq = post.faq?.[lang];
  if (faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map((one) => ({
        '@type': 'Question',
        name: one.q,
        acceptedAnswer: { '@type': 'Answer', text: one.a },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * The `hreflang` links, written here rather than borrowed from
 * `build-routes.mjs`: that one builds them for the one-pager, whose URLs are
 * known to both languages in advance. Here the two addresses come from the
 * article's own slugs, and an article is free to have an English slug that
 * looks nothing like its Vietnamese one — which is the point of having one.
 */
function alternates(post, lang) {
  const other = OTHER[lang];
  return [
    `    <link rel="alternate" hreflang="${lang}" href="${esc(absolute(postPath(post, lang)))}" />`,
    `    <link rel="alternate" hreflang="${other}" href="${esc(absolute(postPath(post, other)))}" />`,
    `    <link rel="alternate" hreflang="x-default" href="${esc(absolute(postPath(post, 'vi')))}" />`,
    `    <meta property="og:locale:alternate" content="${LOCALE_TAGS[other].og}" />`,
    `    <meta property="article:published_time" content="${post.date}T00:00:00+07:00" />`,
    `    <meta property="article:modified_time" content="${post.updated || post.date}T00:00:00+07:00" />`,
    `    <meta property="article:author" content="${esc(founder.name)}" />`,
    `    <meta property="article:section" content="${esc(post.tag[lang])}" />`,
  ].join('\n');
}

function document_({ title, description, url, assets, body, ld, lang, ogType = 'article', extraHead = '' }) {
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
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="${esc(founder.name)}" />
${extraHead}

    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:locale" content="${LOCALE_TAGS[lang].og}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${SITE_URL}${card}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(`${site.name} — ${title}`)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${SITE_URL}${card}" />
    <meta name="twitter:image:alt" content="${esc(`${site.name} — ${title}`)}" />

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

function articlePage(post, lang, assets) {
  const url = absolute(postPath(post, lang));
  const other = OTHER[lang];
  const body = `${nav(lang, 'blog')}

    <main id="main">
      <article class="ar-post">
        <div class="ar-container">
          <div class="ar-post-head">
            <a class="ar-post-back" href="${BLOG.path[lang]}">← ${esc(BLOG.heading[lang])}</a>
            <div class="ar-blog-meta"><span>${esc(post.tag[lang])}</span><span><a href="${founder.about[lang]}" rel="author">${esc(founder.name)}</a></span><span>${esc(shownDate(post.updated || post.date, lang))}</span><span>${post.minutes[lang]} ${esc(CHROME[lang].minRead)}</span></div>
            <h1 class="ar-post-title">${esc(post.title[lang])}</h1>
            <p class="ar-post-lead">${esc(post.lead[lang])}</p>
            <p class="ar-post-lang"><a href="${postPath(post, other)}" hreflang="${other}">${esc(CHROME[lang].other)}</a></p>
          </div>

          <div class="ar-post-body">
${post.body[lang].map(block).join('\n')}
${faqBlock(post, lang)}
${cta(lang)}
          </div>
        </div>
      </article>

${relatedBlock(post, lang)}
    </main>

${footer(lang)}`;

  return document_({
    title: post.title[lang],
    description: post.description[lang],
    url,
    assets,
    body,
    ld: structuredData(post, lang, url),
    lang,
    extraHead: alternates(post, lang),
  });
}

function indexPage(lang, assets) {
  const cards = posts
    .map(
      (post) => `            <article class="ar-card ar-blog-card">
              <div class="ar-blog-meta"><span>${esc(post.tag[lang])}</span><span>${esc(shownDate(post.date, lang))}</span><span>${post.minutes[lang]} ${esc(CHROME[lang].minRead)}</span></div>
              <h3><a href="${postPath(post, lang)}">${esc(post.title[lang])}</a></h3>
              <p>${esc(post.description[lang])}</p>
            </article>`,
    )
    .join('\n');

  const other = OTHER[lang];
  const trail = breadcrumbTrail({
    lang,
    items: [
      [CHROME[lang].home, lang === 'en' ? '/en/' : '/'],
      [BLOG.heading[lang], null],
    ],
  });
  const body = `${nav(lang, 'blog')}

    <main id="main">
      <section class="ar-section">
        <div class="ar-container">
          ${trail.nav}
          <div class="ar-section-head">
            <h1 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-0.03em;margin:0 0 14px">${esc(BLOG.heading[lang])}</h1>
            <p style="color:var(--muted);line-height:1.7;margin:0">${esc(BLOG.lede[lang])}</p>
            <p style="margin:14px 0 0"><a class="ar-doc-side-link" href="${BLOG.path[other]}" hreflang="${other}">${esc(CHROME[lang].other)}</a></p>
          </div>
          <div class="ar-blog-grid">
${cards}
          </div>
        </div>
      </section>
    </main>

${footer(lang)}`;

  return document_({
    title: BLOG.title[lang],
    description: BLOG.description[lang],
    url: absolute(BLOG.path[lang]),
    assets,
    body,
    ogType: 'website',
    ld: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: BLOG.heading[lang],
      description: BLOG.description[lang],
      url: absolute(BLOG.path[lang]),
      inLanguage: LOCALE_TAGS[lang].html,
      publisher: { '@id': ORG_ID },
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title[lang],
        url: absolute(postPath(post, lang)),
        datePublished: post.date,
        dateModified: post.updated || post.date,
      })),
    },
    lang,
    extraHead: [
      `    <link rel="alternate" hreflang="vi" href="${esc(absolute(BLOG.path.vi))}" />`,
      `    <link rel="alternate" hreflang="en" href="${esc(absolute(BLOG.path.en))}" />`,
      `    <link rel="alternate" hreflang="x-default" href="${esc(absolute(BLOG.path.vi))}" />`,
      trail.script,
    ].join('\n'),
  });
}

async function main() {
  const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  const assets = headAssets(indexHtml);
  if (!/rel="stylesheet"/.test(assets)) {
    throw new Error('dist/index.html has no stylesheet — run `vite build` first.');
  }

  for (const lang of ['vi', 'en']) {
    const localized = langAssets(assets, lang);
    const slugs = new Set();
    for (const post of posts) {
      // `date` is one date for both languages — an article is published once,
      // not once per translation — so it is checked on its own rather than
      // through the `{ vi, en }` lookup every other field uses.
      if (!post.date) throw new Error(`${post.slug?.vi || '?'} is missing date`);
      for (const field of ['slug', 'title', 'description', 'lead', 'tag', 'minutes']) {
        if (!post[field]?.[lang]) throw new Error(`${post.slug?.vi || '?'} is missing ${field}.${lang}`);
      }
      const slug = post.slug[lang];
      if (slugs.has(slug)) throw new Error(`two articles share the ${lang} slug ${slug}`);
      slugs.add(slug);
      if (post.title[lang].length > 62) {
        throw new Error(`${slug}: title is ${post.title[lang].length} characters, over 62`);
      }
      if (!post.body[lang]?.length) throw new Error(`${slug} has no ${lang} body`);
      await write(join(DIST, BLOG.path[lang].replace(/^\//, ''), slug, 'index.html'),
                  articlePage(post, lang, localized));
    }
    await write(join(DIST, BLOG.path[lang].replace(/^\//, ''), 'index.html'),
                indexPage(lang, localized));
  }
  console.log(`build-posts: ${posts.length} article(s) x 2 languages + 2 index pages`);
}

main().catch((error) => {
  console.error(`build-posts failed: ${error.message}`);
  process.exit(1);
});

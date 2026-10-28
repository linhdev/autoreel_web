/**
 * Give every section its own HTML file, and write the sitemap.
 *
 * `vite build` produces one `index.html`, which is correct for one URL and
 * wrong for seven. This runs straight after it (`npm run build` chains the two)
 * and writes the same document out again at each route's own path with that
 * route's `<head>` in it.
 *
 * Why real files rather than a catch-all rewrite (`/*  /index.html  200`):
 *
 *   A catch-all answers *every* URL with 200 and the home page. A typo, a dead
 *   link, an old address — all of them become the home page as far as Google is
 *   concerned, which is how a site collects duplicates of itself. Files mean an
 *   unknown path is genuinely a 404, and a known one is served with the right
 *   title already in the markup, before any JavaScript runs. That last part is
 *   what link previews on Facebook and Zalo read: they do not execute scripts.
 *
 * Where the values come from: `src/data/routes.js` for the URL, title and
 * description, and `src/data/pricing.js` for the structured-data offers — the
 * same file the pricing table renders from, so the price in a search result can
 * never drift from the price on the page.
 *
 * Run: `node scripts/build-routes.mjs` (or `npm run build`, which does it for you).
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES, LOCALE_TAGS, SITE_URL, absolute, routes } from '../src/data/routes.js';
import { plans, priceIn } from '../src/data/pricing.js';
import { faqs } from '../src/data/faq.js';
import { allFeatures } from '../src/data/allFeatures.js';
import { demo, socialLinks } from '../src/data/site.js';
import { ORG_ID, faqNode, graph, videoNode } from '../src/data/schema.js';
import { crumbsFor, siteGraph } from './lib/seo.mjs';
import { BLOG, postPath, posts } from '../src/data/posts.js';
import { DOCS, docPath, docs } from '../src/data/docs.js';
import { DOWNLOADS, QUICK } from '../src/data/downloads.js';
import { PLATFORM_PAGES } from '../src/data/downloadPlatforms.js';
import { USE_CASE_PAGES } from '../src/data/downloadUseCases.js';
import { REFERENCE_PAGE } from '../src/data/referencePage.js';
import { STATIC_PAGES } from '../src/data/staticPages.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SOURCE = join(DIST, 'index.html');

/** Nothing here may put a bare `&` or `<` in the markup. */
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** `dist/bang-gia-phan-mem-tao-video/index.html` — `/` is the existing index.html. */
function outFile(slug) {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return clean ? join(DIST, clean, 'index.html') : SOURCE;
}

/**
 * Replace a tag, or stop the build.
 *
 * The replacement goes in as a *function*, never as a string: `String.replace`
 * reads `$&`, `$1` and friends inside a string replacement, so a title
 * containing `$&` would silently splice the matched tag into its own text. No
 * title does that today; the point is that none ever can.
 *
 * A pattern that matches nothing means `index.html` was edited into a shape
 * this script does not know, and the alternative to throwing is shipping 13
 * pages with the home page's title.
 */
function replaceTag(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`dist/index.html has no ${label} to replace — did index.html change shape?`);
  }
  return html.replace(pattern, () => replacement);
}

function meta(attr, name, content) {
  return `<meta ${attr}="${esc(name)}" content="${esc(content)}" />`;
}

/**
 * The `SoftwareApplication` block, rebuilt from the pricing data.
 *
 * Its offers used to be typed by hand into `index.html`, a second copy of the
 * numbers in `pricing.js` that nothing kept in step. Prices change; a stale
 * price in structured data is the kind of thing Google shows in a result and a
 * customer quotes back at you.
 */
function structuredData(route, lang) {
  const copy = route.meta[lang];
  const homeUrl = absolute(routes[0].slug[lang]);
  const url = absolute(route.slug[lang]);
  const tags = LOCALE_TAGS[lang];

  const app = {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#app`,
    name: 'AutoReel',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Video automation',
    operatingSystem: 'Windows, macOS',
    description: copy.description,
    url: homeUrl,
    inLanguage: tags.html,
    publisher: { '@id': ORG_ID },
    sameAs: socialLinks.map((one) => one.href),
    // A concrete feature list is more useful to a parser than the marketing
    // description above, and it comes from the same data the feature section
    // renders, so it cannot claim a feature the page does not show.
    featureList: allFeatures[lang].flatMap((group) => group.items.map((item) => item.name)),
    screenshot: `${SITE_URL}/demo/autoreel-demo-poster.webp`,
    // One offer per plan, priced in the currency of the page it is on: a
    // search result for the English page that quotes đồng is a result nobody
    // in that market can act on. `priceIn` is the same function the card uses,
    // so the number Google shows and the number on the page cannot differ.
    offers: plans[lang].map((plan) => {
      const { amount, currency } = priceIn(plan, lang);
      const price = String(amount);
      return {
        '@type': 'Offer',
        name: plan.name,
        price,
        priceCurrency: currency,
        availability: plan.available
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
        url: homeUrl,
        description: plan.audience,
        // A subscription quoted without a period reads as a one-off charge, and
        // the difference is the whole point of having both kinds of plan.
        ...(plan.billing === 'month'
          ? {
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price,
                priceCurrency: currency,
                billingDuration: 'P1M',
                billingIncrement: 1,
              },
            }
          : {}),
      };
    }),
  };

  const breadcrumbs = route.key === 'home'
    ? undefined
    : crumbsFor(lang, [
        ['AutoReel', routes[0].slug[lang]],
        [copy.title, route.slug[lang]],
      ]);

  const page = siteGraph({
    lang: tags.html,
    url,
    title: copy.title,
    description: copy.description,
    type: route.key === 'contact' ? 'ContactPage' : 'WebPage',
    breadcrumbs,
  });

  const extra = [];
  if (route.key === 'faq') {
    extra.push(faqNode(faqs[lang].map((one) => [one.question, one.answer])));
  }
  if (route.key === 'demo' && demo.videoSrc) {
    extra.push(videoNode({
      name: demo[lang].videoTitle,
      description: demo[lang].headline,
      thumbnail: `${SITE_URL}/demo/autoreel-demo-poster.webp`,
      contentUrl: `${SITE_URL}${demo.videoSrc}`,
      uploadDate: '2026-10-09',
      duration: 'PT1M34S',
    }));
  }

  return graph(...page['@graph'], app, extra);
}

function rewriteHead(base, route, lang) {
  const copy = route.meta[lang];
  const tags = LOCALE_TAGS[lang];
  const url = absolute(route.slug[lang]);
  let html = base;

  html = replaceTag(html, /<html[^>]*>/, `<html lang="${tags.html}">`, '<html lang>');
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(copy.title)}</title>`, '<title>');

  html = replaceTag(
    html,
    /<meta\s+name="description"[\s\S]*?\/>/,
    meta('name', 'description', copy.description),
    'meta description',
  );
  html = replaceTag(
    html,
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${esc(url)}" />`,
    'canonical link',
  );

  for (const [property, content] of [
    ['og:title', copy.title],
    ['og:description', copy.description],
    ['og:url', url],
    ['og:locale', tags.og],
  ]) {
    html = replaceTag(
      html,
      new RegExp(`<meta\\s+property="${property}"[\\s\\S]*?/>`),
      meta('property', property, content),
      `og:${property}`,
    );
  }

  for (const [name, content] of [
    ['twitter:title', copy.title],
    ['twitter:description', copy.description],
  ]) {
    html = replaceTag(
      html,
      new RegExp(`<meta\\s+name="${name}"[\\s\\S]*?/>`),
      meta('name', name, content),
      name,
    );
  }

  if (lang !== 'vi' && LOCALES.length > 1) {
    html = replaceTag(
      html,
      /<link\s+rel="manifest"[^>]*>/,
      '<link rel="manifest" href="/en/site.webmanifest" />',
      'manifest link',
    );
  }

  // English pages get the English social card; there is no point handing a
  // Zalo or Facebook preview a picture with Vietnamese written across it.
  if (lang !== 'vi' && existsSync(join(DIST, 'og-image-en.png'))) {
    html = html.replace(
      /<meta\s+property="og:image"[^>]*>/,
      `<meta property="og:image" content="${SITE_URL}/og-image-en.png" />`,
    );
    html = html.replace(
      /<meta\s+name="twitter:image"[^>]*>/,
      `<meta name="twitter:image" content="${SITE_URL}/og-image-en.png" />`,
    );
  }

  const ld = base.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) throw new Error('dist/index.html has no JSON-LD block');
  const data = JSON.stringify(structuredData(route, lang), null, 2);
  html = replaceTag(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${data.replace(/</g, '\\u003c')}\n    </script>`,
    'JSON-LD block',
  );

  // `hreflang` and the alternate locale only earn their place once the other
  // language exists — a pointer to a page that is not there is a crawl error.
  const alternates = [];
  if (LOCALES.length > 1) {
    alternates.push(meta('property', 'og:locale:alternate', LOCALE_TAGS[other(lang)].og));
    for (const code of LOCALES) {
      alternates.push(
        `<link rel="alternate" hreflang="${LOCALE_TAGS[code].html}" href="${esc(
          absolute(route.slug[code]),
        )}" />`,
      );
    }
    alternates.push(
      `<link rel="alternate" hreflang="x-default" href="${esc(absolute(route.slug.vi))}" />`,
    );
  }

  return html.replace('</head>', `${alternates.join('\n    ')}\n  </head>`);
}

function other(lang) {
  return lang === 'vi' ? 'en' : 'vi';
}

/**
 * `dist/404.html` — the file that turns Cloudflare's fallback off.
 *
 * With no such file, Pages answers a request for a path it does not have with
 * the *root* `index.html` and a 200. Every typo and every dead link then looks
 * to a crawler like the home page — and worse, it carries the home page's
 * `canonical`, so each one is a duplicate of `/`. `noindex` and no canonical is
 * what makes an unknown URL cost nothing.
 */
const NOT_FOUND = {
  title: 'Không tìm thấy trang | AutoReel',
  description: 'Đường dẫn này không tồn tại. Xem các mục khác của AutoReel hoặc liên hệ để được tư vấn.',
};

function notFoundPage(base) {
  let html = base;
  html = replaceTag(html, /<html[^>]*>/, '<html lang="vi">', '<html lang>');
  html = replaceTag(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${esc(NOT_FOUND.title)}</title>`,
    '<title>',
  );
  html = replaceTag(
    html,
    /<meta\s+name="description"[\s\S]*?\/>/,
    meta('name', 'description', NOT_FOUND.description),
    'meta description',
  );
  html = replaceTag(
    html,
    /<meta\s+name="robots"[^>]*>/,
    '<meta name="robots" content="noindex, follow" />',
    'meta robots',
  );
  // The one tag that must not be here: a canonical on a 404 claims it is a real
  // page, and pointing it at `/` claims it is the home page.
  html = html.replace(/\s*<link\s+rel="canonical"[^>]*>/, '');
  html = replaceTag(
    html,
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    meta('property', 'og:title', NOT_FOUND.title),
    'og:title',
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    meta('property', 'og:description', NOT_FOUND.description),
    'og:description',
  );

  // The 404 does not need the 419KB React bundle: the app would render the
  // home page at a URL that is not the home page. The shell's JSON-LD goes too
  // — a noindex page claiming to be the SoftwareApplication helps nobody.
  html = html.replace(/\s*<script\s+type="module"[\s\S]*?<\/script>/, '');
  html = html.replace(/\s*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/, '');
  html = html.replace(
    /<div id="root"><\/div>/,
    `    <main style="max-width:720px;margin:0 auto;padding:80px 20px;font-family:Inter,system-ui,sans-serif">
      <h1 style="font-size:clamp(2rem,5vw,3rem);margin:0 0 16px">Không tìm thấy trang</h1>
      <p style="color:#aeb8d4;line-height:1.7">Đường dẫn này không tồn tại hoặc đã được chuyển.</p>
      <p style="margin-top:28px"><a href="/" style="color:#8fb4ff">← Về trang chủ</a></p>
      <p style="color:#aeb8d4;line-height:1.7">This page does not exist. <a href="/en/" style="color:#8fb4ff">Go to the English home page</a>.</p>
    </main>`,
  );
  return html;
}

/**
 * A second web app manifest for the English pages.
 *
 * `public/site.webmanifest` declares `"lang": "vi"` and a Vietnamese
 * description, and every page links to it — so an English visitor who installs
 * the site to their home screen gets a Vietnamese name under the icon. The file
 * is small, so it is copied with three fields swapped rather than asking a
 * translator to maintain a second one by hand.
 */
async function writeManifest() {
  const source = join(ROOT, 'public', 'site.webmanifest');
  if (!existsSync(source) || LOCALES.length < 2) return;
  const manifest = JSON.parse(await readFile(source, 'utf8'));
  const english = {
    ...manifest,
    lang: LOCALE_TAGS.en.html,
    description:
      'Create video in bulk, process it and publish straight to Shopee and Facebook/Reels in one workflow.',
    start_url: routes[0].slug.en,
    scope: '/en/',
  };
  const target = join(DIST, 'en', 'site.webmanifest');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, `${JSON.stringify(english, null, 2)}\n`, 'utf8');
}

function sitemap(stamp) {
  const urls = [];
  /**
   * One URL's entry.
   *
   * `lastmod` is passed in rather than always being today's date, because the
   * only thing it is good for is telling a crawler what changed. A stamp that
   * moves on every build says every page changed on every deploy, which is the
   * same as saying nothing - so the sections get the build date (the markup
   * around them is regenerated) and an article gets the date it was written.
   */
  const entry = (loc, lastmod, priority, links = '') =>
    `  <url>\n    <loc>${esc(loc)}</loc>\n${links}${links ? '\n' : ''}` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

  for (const route of routes) {
    for (const lang of LOCALES) {
      // Self-referencing alternates on a one-language site are noise; they only
      // mean something once a second language is there to point at.
      const links = (LOCALES.length > 1 ? LOCALES : [])
        .map(
          (code) =>
            `    <xhtml:link rel="alternate" hreflang="${LOCALE_TAGS[code].html}" href="${esc(
              absolute(route.slug[code]),
            )}"/>`,
        )
        .join('\n');
      const withDefault = links
        ? `${links}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(
            absolute(route.slug.vi),
          )}"/>`
        : '';
      urls.push(
        entry(absolute(route.slug[lang]), route.updated || stamp, route.key === 'home' ? '1.0' : '0.8', withDefault),
      );
    }
  }

  /**
   * The two languages of one document, pointing at each other.
   *
   * Both the blog and the documentation are written twice, and in both cases a
   * Vietnamese page and its English counterpart are the same document rather
   * than two documents. Without the alternates Google picks one and treats the
   * other as a duplicate — which for the blog would mean the English half
   * never ranking at all.
   */
  const alternatesFor = (pair) => {
    const lines = LOCALES
      .filter((code) => pair[code])
      .map(
        (code) =>
          `    <xhtml:link rel="alternate" hreflang="${LOCALE_TAGS[code].html}" href="${esc(pair[code])}"/>`,
      );
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(pair.vi || pair.en)}"/>`,
    );
    return lines.join('\n');
  };

  // The blog, which `routes` deliberately does not hold: those are the
  // one-pager's section URLs and these are pages of their own, written by
  // `build-posts.mjs`.
  for (const lang of LOCALES) {
    urls.push(
      entry(
        absolute(BLOG.path[lang]),
        stamp,
        '0.7',
        alternatesFor({ vi: absolute(BLOG.path.vi), en: absolute(BLOG.path.en) }),
      ),
    );
  }
  for (const post of posts) {
    for (const lang of LOCALES) {
      urls.push(
        entry(
          absolute(postPath(post, lang)),
          post.updated || post.date,
          '0.6',
          alternatesFor({
            vi: absolute(postPath(post, 'vi')),
            en: absolute(postPath(post, 'en')),
          }),
        ),
      );
    }
  }

  // The documentation, which is not in `routes` for the same reason the blog
  // is not, and is written by `build-docs.mjs`.

  for (const lang of LOCALES) {
    urls.push(
      entry(
        absolute(DOCS.path[lang]),
        stamp,
        '0.7',
        alternatesFor({ vi: absolute(DOCS.path.vi), en: absolute(DOCS.path.en) }),
      ),
    );
  }
  for (const doc of docs) {
    for (const lang of LOCALES) {
      urls.push(
        entry(
          absolute(docPath(doc, lang)),
          doc.updated,
          '0.6',
          alternatesFor({
            vi: absolute(docPath(doc, 'vi')),
            en: absolute(docPath(doc, 'en')),
          }),
        ),
      );
    }
  }

  // The public download tool, written by `build-downloads.mjs`. It is the
  // page this site wants a search engine to find, so it sits above the docs.
  for (const lang of LOCALES) {
    urls.push(
      entry(
        absolute(DOWNLOADS.path[lang]),
        stamp,
        '0.8',
        alternatesFor({
          vi: absolute(DOWNLOADS.path.vi),
          en: absolute(DOWNLOADS.path.en),
        }),
      ),
    );
  }

  // The six platform landing pages, written by
  // `build-download-platforms.mjs`. They target the long-tail query that the
  // single `/downloads/` page cannot answer by itself.
  for (const platform of PLATFORM_PAGES) {
    for (const lang of LOCALES) {
      urls.push(
        entry(
          absolute(platform.path[lang]),
          stamp,
          '0.8',
          alternatesFor({
            vi: absolute(platform.path.vi),
            en: absolute(platform.path.en),
          }),
        ),
      );
    }
  }

  // The bookmarklet and embed instructions, written by
  // `build-download-tools.mjs`.
  for (const lang of LOCALES) {
    urls.push(
      entry(
        absolute(QUICK.path[lang]),
        stamp,
        '0.7',
        alternatesFor({
          vi: absolute(QUICK.path.vi),
          en: absolute(QUICK.path.en),
        }),
      ),
    );
  }

  // The audio and cover landing pages, written by
  // `build-download-use-cases.mjs`.
  for (const page of USE_CASE_PAGES) {
    for (const lang of LOCALES) {
      urls.push(
        entry(
          absolute(page.path[lang]),
          stamp,
          '0.8',
          alternatesFor({
            vi: absolute(page.path.vi),
            en: absolute(page.path.en),
          }),
        ),
      );
    }
  }

  // The static “make it like this reference” page, written by
  // `build-reference-page.mjs`.
  for (const lang of LOCALES) {
    urls.push(
      entry(
        absolute(REFERENCE_PAGE.path[lang]),
        stamp,
        '0.7',
        alternatesFor({
          vi: absolute(REFERENCE_PAGE.path.vi),
          en: absolute(REFERENCE_PAGE.path.en),
        }),
      ),
    );
  }

  // Pages that live in `public/` or in a small builder: the legal pair and the
  // visual install guide. They were canonical and indexable but absent from
  // this file, which is the one place a crawler looks for the full set.
  for (const page of STATIC_PAGES) {
    const pair = Object.fromEntries(
      Object.entries(page.path).map(([code, path]) => [code, absolute(path)]),
    );
    for (const path of Object.values(page.path)) {
      urls.push(entry(absolute(path), page.updated, '0.3', alternatesFor(pair)));
    }
  }

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    `${urls.join('\n')}\n</urlset>\n`
  );
}

async function main() {
  if (!existsSync(SOURCE)) {
    throw new Error('dist/index.html is missing — run `vite build` first.');
  }
  const base = await readFile(SOURCE, 'utf8');
  const stamp = new Date().toISOString().slice(0, 10);

  let written = 0;
  for (const route of routes) {
    for (const lang of LOCALES) {
      const target = outFile(route.slug[lang]);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, rewriteHead(base, route, lang), 'utf8');
      written += 1;
    }
  }

  await writeFile(join(DIST, '404.html'), notFoundPage(base), 'utf8');
  await writeManifest();

  // `public/sitemap.xml` would be a second source for the URL list, so the
  // only sitemap is the one written here (and the file in `public/` is gone).
  await rm(join(DIST, 'sitemap.xml'), { force: true });
  await writeFile(join(DIST, 'sitemap.xml'), sitemap(stamp), 'utf8');

  console.log(
    `build-routes: ${written} HTML file(s) + 404.html across ${LOCALES.length} language(s), ` +
      `${routes.length * LOCALES.length} URL(s) in sitemap.xml`,
  );
}

main().catch((error) => {
  console.error(`build-routes failed: ${error.message}`);
  process.exit(1);
});

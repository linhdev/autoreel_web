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
import { plans } from '../src/data/pricing.js';
import { BLOG, postPath, posts } from '../src/data/posts.js';

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
function structuredData(existing, route, lang) {
  const copy = route.meta[lang];
  const base = JSON.parse(existing);
  const home = routes[0].meta[lang];
  const homeUrl = absolute(routes[0].slug[lang]);

  return {
    ...base,
    name: 'AutoReel',
    description: copy.description,
    url: homeUrl,
    inLanguage: LOCALE_TAGS[lang].html,
    offers: plans[lang].map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: String(plan.priceValue),
      priceCurrency: 'VND',
      availability: plan.available
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      url: homeUrl,
      description: plan.audience,
    })),
  };
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
  const data = JSON.stringify(structuredData(ld[1], route, lang), null, 2);
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
      urls.push(
        entry(absolute(route.slug[lang]), stamp, route.key === 'home' ? '1.0' : '0.8', links),
      );
    }
  }

  // The blog, which `routes` deliberately does not hold: those are the
  // one-pager's section URLs and these are pages of their own, written by
  // `build-posts.mjs`. They belong in the map all the same, and they get no
  // `hreflang` alternates because there is no English half of them.
  urls.push(entry(absolute(BLOG.path), stamp, '0.7'));
  for (const post of posts) {
    urls.push(entry(absolute(postPath(post.slug)), post.date, '0.6'));
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

/**
 * Post-build smoke test. Run with `node scripts/verify-build.mjs` after `npm run build`.
 * Fails loudly if dist/ is missing anything the deploy depends on.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES, LOCALE_TAGS, absolute, routes, SITE_URL } from '../src/data/routes.js';
import { BLOG, postPath, posts } from '../src/data/posts.js';
import { DOCS, DOC_GROUPS, docPath, docs } from '../src/data/docs.js';
import { DOWNLOADS, QUICK, downloads } from '../src/data/downloads.js';
import { PLATFORM_PAGES } from '../src/data/downloadPlatforms.js';
import { USE_CASE_PAGES } from '../src/data/downloadUseCases.js';
import { REFERENCE_PAGE } from '../src/data/referencePage.js';
import { STATIC_PAGES } from '../src/data/staticPages.js';
import { resolveDocImage } from './lib/docs-images.mjs';
import { postContentProblems } from './lib/post-rules.mjs';
import {
  demo,
  finalCta,
  footer,
  hero,
  heroFlow,
  howItWorks,
  navLinks,
  proof,
  ui,
} from '../src/data/site.js';
import { benefits, benefitsSection } from '../src/data/features.js';
import { allFeatures, allFeaturesSection } from '../src/data/allFeatures.js';
import { workflows, workflowSection } from '../src/data/workflows.js';
import { plans, pricingSection } from '../src/data/pricing.js';
import { faqHeadline, faqs } from '../src/data/faq.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const checks = [];
const pass = (msg) => checks.push({ ok: true, msg });
const fail = (msg) => checks.push({ ok: false, msg });

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;

/** Visible text of an HTML fragment, with scripts, styles and tags removed. */
const textOf = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  let files = [];
  try {
    files = await readdir(dist, { recursive: true });
  } catch {
    console.error('✗ dist/ not found — run `npm run build` first.');
    process.exit(1);
  }

  // ---- Required output files ----
  const required = [
    'index.html',
    '_headers',
    'robots.txt',
    'sitemap.xml',
    'site.webmanifest',
    'logo-88.webp',
    'favicon-32.png',
    'favicon-192.png',
    'apple-touch-icon.png',
    'og-image.png',
    // The public download tool, written after the app build.
    'downloads/index.html',
    'en/downloads/index.html',
    'downloads/app.js',
    'downloads/qr.js',
    'downloads/share.js',
    'downloads/share/index.html',
    'en/downloads/share/index.html',
    'downloads/sw.js',
    'downloads/manifest.webmanifest',
    'downloads/icon-512.png',
    'ads.txt',
    'embed.js',
    'tai-video-nhanh/index.html',
    'en/quick-download/index.html',
    // The English pages point their social preview and their home-screen icon
    // at these two; without them the unfurl falls back to a Vietnamese card.
    ...(LOCALES.length > 1 ? ['og-image-en.png', 'en/site.webmanifest'] : []),
  ];

  for (const file of required) {
    const target = path.join(dist, file);
    if (await exists(target)) {
      const { size } = await stat(target);
      pass(`${file} (${kb(size)})`);
    } else {
      fail(`${file} MISSING`);
    }
  }

  // ---- Bundles ----
  const jsFiles = files.filter((f) => f.endsWith('.js') && f.startsWith('assets'));
  const cssFiles = files.filter((f) => f.endsWith('.css') && f.startsWith('assets'));

  if (jsFiles.length === 0) fail('no JS bundle in dist/assets');
  if (cssFiles.length === 0) fail('no CSS bundle in dist/assets');

  let jsTotal = 0;
  for (const f of jsFiles) {
    const { size } = await stat(path.join(dist, f));
    jsTotal += size;
    pass(`bundle ${f} (${kb(size)})`);
  }
  for (const f of cssFiles) {
    const { size } = await stat(path.join(dist, f));
    pass(`stylesheet ${f} (${kb(size)})`);
  }

  // ---- CSS must contain the design-system classes ----
  if (cssFiles.length) {
    const css = await readFile(path.join(dist, cssFiles[0]), 'utf8');
    // A record of the design, not a test of it: if one of these disappears the
    // stylesheet changed shape and somebody should look, whether or not the
    // build still succeeds.
    // A record of the design, not a test of it: if one of these disappears the
    // stylesheet changed shape and somebody should look, whether or not the
    // build still succeeds. Keep the list short — a pin per visual detail turns
    // this into a second stylesheet to maintain.
    const wanted = [
      '.ar-container',
      '.ar-card',
      '.ar-btn-primary',
      '.ar-aurora',
      '.ar-final-cta',
      // The line: a station, its finished marker, the batch bar. These are the
      // three things a visitor actually reads in the hero.
      '.ar-station',
      '.ar-station-check',
      '.ar-batch-fill',
      // Reduced motion is a correctness requirement, not a nicety — a redesign
      // that drops this block ships an animation to people who asked not to
      // have one.
      'prefers-reduced-motion',
      '@keyframes ar-station-bar',
    ];
    for (const token of wanted) {
      if (css.includes(token)) pass(`css contains ${token}`);
      else fail(`css MISSING ${token}`);
    }
  }

  // ---- index.html must carry the SEO surface ----
  const html = await readFile(path.join(dist, 'index.html'), 'utf8');
  const htmlWanted = [
    ['<title>AutoReel', 'page title'],
    ['name="description"', 'meta description'],
    ['rel="canonical"', 'canonical link'],
    ['og:title', 'OpenGraph title'],
    ['og:image', 'OpenGraph image'],
    ['twitter:card', 'Twitter card'],
    ['application/ld+json', 'structured data'],
    ['lang="vi"', 'Vietnamese lang attribute'],
  ];
  for (const [token, label] of htmlWanted) {
    if (html.includes(token)) pass(`index.html has ${label}`);
    else fail(`index.html MISSING ${label}`);
  }

  // ---- The two languages have to describe the same page ----
  //
  // A translation misses things quietly: a FAQ answer added in Vietnamese, a
  // benefit card inserted in one list only, a plan renamed on one side. None of
  // that throws — it ships a page that is half in the wrong language and looks
  // fine in whichever language the person checking it reads. So every bilingual
  // export is walked and compared structurally.
  const pairs = {
    navLinks,
    hero,
    heroFlow,
    howItWorks,
    demo: { vi: demo.vi, en: demo.en },
    proof,
    finalCta: { vi: finalCta.vi, en: finalCta.en },
    footer,
    ui,
    workflows,
    workflowSection,
    benefits,
    benefitsSection,
    allFeatures,
    allFeaturesSection,
    pricingSection,
    plans,
    faqs,
    faqHeadline,
  };

  /** The shape of a value: keys, nesting and array lengths, with types at the leaves. */
  const shapeOf = (value) => {
    if (Array.isArray(value)) return value.map(shapeOf);
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.keys(value)
          .sort()
          .map((key) => [key, shapeOf(value[key])]),
      );
    }
    return typeof value;
  };

  for (const [name, pair] of Object.entries(pairs)) {
    const missingSide = LOCALES.filter((code) => pair[code] === undefined);
    if (missingSide.length) {
      fail(`${name} has no ${missingSide.join(', ')} version`);
      continue;
    }
    if (JSON.stringify(shapeOf(pair.vi)) !== JSON.stringify(shapeOf(pair.en))) {
      fail(`${name}: the vi and en versions are not the same shape`);
    }
  }

  // Lists that pair up by position must agree on what each entry *is*.
  const idPairs = [
    ['plans', plans.vi.map((p) => p.id), plans.en.map((p) => p.id)],
    ['faqs', faqs.vi.map((f) => f.id), faqs.en.map((f) => f.id)],
    ['benefit icons', benefits.vi.map((b) => b.icon), benefits.en.map((b) => b.icon)],
    // The feature cards pair up by position too, and a card whose icon moved
    // to the wrong list would be a card with the wrong glyph on one language
    // and not the other.
    ['feature icons',
      allFeatures.vi.flatMap((g) => g.items.map((i) => i.icon)),
      allFeatures.en.flatMap((g) => g.items.map((i) => i.icon))],
  ];
  for (const [label, a, b] of idPairs) {
    if (a.join() !== b.join()) fail(`${label} differ between vi and en: ${a} vs ${b}`);
  }

  // An untranslated string is usually an empty one — but a few fields are
  // empty on purpose and must not be "fixed": `suffix` and `placeholder` are
  // blank whenever a metric is a real number, and a video id is blank while the
  // video is self-hosted.
  const EMPTY_BY_DESIGN = ['placeholder', 'suffix', 'youtubeId', 'videoSrc'];
  const blanks = [];
  const scanForBlanks = (value, path) => {
    const key = path.split('.').pop().replace(/\[\d+\]$/, '');
    if (EMPTY_BY_DESIGN.includes(key)) return;
    if (typeof value === 'string' && !value.trim()) blanks.push(path);
    else if (Array.isArray(value)) value.forEach((v, i) => scanForBlanks(v, `${path}[${i}]`));
    else if (value && typeof value === 'object') {
      for (const [key, v] of Object.entries(value)) scanForBlanks(v, `${path}.${key}`);
    }
  };
  for (const [name, pair] of Object.entries(pairs)) {
    for (const code of LOCALES) scanForBlanks(pair[code], `${name}.${code}`);
  }
  if (blanks.length) fail(`empty strings in the copy: ${blanks.slice(0, 5).join(', ')}`);

  // Emphasis markers come in pairs; an odd count drops the rest of the
  // sentence into the gradient, or shows the asterisks to a reader.
  const oddMarkers = [];
  const scanMarkers = (value, path) => {
    if (typeof value === 'string') {
      if ((value.match(/\*\*/g) || []).length % 2) oddMarkers.push(path);
    } else if (Array.isArray(value)) value.forEach((v, i) => scanMarkers(v, `${path}[${i}]`));
    else if (value && typeof value === 'object') {
      for (const [key, v] of Object.entries(value)) scanMarkers(v, `${path}.${key}`);
    }
  };
  for (const [name, pair] of Object.entries(pairs)) {
    for (const code of LOCALES) scanMarkers(pair[code], `${name}.${code}`);
  }
  if (oddMarkers.length) fail(`unpaired ** markers: ${oddMarkers.join(', ')}`);

  // What Google will show. Past roughly these lengths it truncates, and a
  // cut-off title loses the part that carries the keyword.
  const tooLong = [];
  for (const route of routes) {
    for (const code of LOCALES) {
      const { title, description } = route.meta[code];
      if (!title || title.length > 62) tooLong.push(`${route.key}.${code} title (${title?.length})`);
      if (!description || description.length > 165) {
        tooLong.push(`${route.key}.${code} description (${description?.length})`);
      }
    }
  }
  if (tooLong.length) fail(`meta too long: ${tooLong.join(', ')}`);

  // A slug that collides with a file in `public/` builds a directory in `dist/`
  // next to it, and whichever wins is not obvious — `/demo/` holds the video.
  const publicNames = await readdir(path.join(root, 'public'));
  const collisions = [];
  for (const route of routes) {
    for (const code of LOCALES) {
      // `en` slugs are `/en/<name>/`, so the name is the second segment.
      const segments = route.slug[code].split('/').filter(Boolean);
      const own = segments[code === 'en' ? 1 : 0];
      if (own && publicNames.includes(own)) collisions.push(`${route.key} (${code}): /${own}/`);
    }
  }
  if (collisions.length) fail(`route slug collides with public/: ${collisions.join(', ')}`);
  else pass('no route slug shadows a file in public/');

  // ---- One real HTML file per route, with that route's head in it ----
  //
  // Driven by the route table, never by a list written out here: a route added
  // to `routes.js` and forgotten by the build shows up as a failure rather than
  // as a URL that quietly serves the home page's title.
  // The hashed bundle name, so a page still pointing at the previous build's
  // hash can be called out as stale rather than merely "wrong".
  const bundle = html.match(/assets\/index-[\w-]+\.js/)?.[0];
  if (!bundle) fail('index.html does not reference a hashed JS bundle');

  const seenH1 = new Map();
  for (const route of routes) {
    for (const lang of LOCALES) {
      const slug = route.slug[lang];
      const file = path.join(dist, slug.replace(/^\/+|\/+$/g, ''), 'index.html');
      const label = `${route.key} [${lang}] ${slug}`;

      if (!(await exists(file))) {
        fail(`${label} MISSING (no HTML file at this route)`);
        continue;
      }

      const page = await readFile(file, 'utf8');
      const wantUrl = absolute(slug);
      const problems = [];

      // ---- The prerender, which is the whole point of this pass ----
      //
      // A route file used to be a shell: correct head, empty `<body>`. A
      // crawler that does not execute JavaScript saw nothing. These checks
      // assert that each file now carries its own rendered page, exactly one
      // headline, and that no two routes share that headline.
      const bodyMatch = page.match(/<body[^>]*>([\s\S]*)<\/body>/);
      const bodyText = bodyMatch ? textOf(bodyMatch[1]) : '';
      if (bodyText.length < 1500) {
        problems.push(`prerendered body only ${bodyText.length} chars`);
      }

      const h1s = [...page.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => textOf(m[1]));
      const heroCopy = route.hero?.[lang] || hero[lang];
      const wantH1 = `${heroCopy.headlineLine1} ${heroCopy.headlineLine2}`;
      if (h1s.length !== 1) {
        problems.push(`${h1s.length} <h1> tags`);
      } else if (h1s[0] !== wantH1) {
        problems.push(`H1 is "${h1s[0].slice(0, 60)}" not "${wantH1.slice(0, 60)}"`);
      } else {
        const previous = seenH1.get(h1s[0]);
        if (previous) problems.push(`H1 also used by ${previous}`);
        else seenH1.set(h1s[0], label);
      }

      if (!page.includes(`<html lang="${LOCALE_TAGS[lang].html}">`)) problems.push('lang');
      if (!page.includes(`<title>${route.meta[lang].title}</title>`)) problems.push('title');
      if (!page.includes(`<link rel="canonical" href="${wantUrl}" />`)) problems.push('canonical');
      if (!page.includes('application/ld+json')) problems.push('structured data');
      if (LOCALES.length > 1) {
        // Each page must point at the other language, and at its own country's
        // social card and manifest.
        if (!page.includes(`hreflang="${LOCALE_TAGS[lang].html}"`)) problems.push('hreflang');
        const wantManifest = lang === 'en' ? '/en/site.webmanifest' : '/site.webmanifest';
        if (!page.includes(`href="${wantManifest}"`)) problems.push('manifest');
        const wantCard = lang === 'en' ? 'og-image-en.png' : 'og-image.png';
        if (!page.includes(`content="${SITE_URL}/${wantCard}"`)) problems.push('og:image');
      }
      // A page that kept the previous build's asset hash was generated from a
      // stale template — the whole file is out of date, not just one tag.
      if (bundle && !page.includes(bundle)) problems.push('stale asset hash');

      if (problems.length) fail(`${label} — wrong ${problems.join(', ')}`);
      else pass(`${label}`);
    }
  }

  // ---- The file that stops Cloudflare from answering unknown URLs with `/` ----
  const notFoundFile = path.join(dist, '404.html');
  if (await exists(notFoundFile)) {
    const page = await readFile(notFoundFile, 'utf8');
    if (!page.includes('content="noindex')) fail('404.html must be noindex');
    else if (/rel="canonical"/.test(page)) fail('404.html must not carry a canonical link');
    else pass('404.html present, noindex, no canonical');
  } else {
    fail('404.html MISSING — unknown URLs would serve the home page with a 200');
  }

  // ---- A catch-all rewrite would undo every one of those files ----
  const redirectsFile = path.join(dist, '_redirects');
  if (await exists(redirectsFile)) {
    const rules = await readFile(redirectsFile, 'utf8');
    if (/^\s*\/\*\s+\/index\.html\s+200/m.test(rules)) {
      fail('_redirects has a catch-all rewrite — every route file is dead weight if so');
    } else {
      pass('_redirects has no catch-all rewrite');
    }
  }

  // ---- The blog: real pages, with their own heads ----
  //
  // Checked here rather than in `build-posts.mjs` alone because this is the
  // script that runs after a build and looks at what is actually on disk: an
  // article that failed to write, or wrote with the landing page's title, has
  // to fail the build rather than ship as a URL that ranks for nothing.
  // Everything that can be known about an article without building it —
  // the language parity, the length limits, the words it may not name — comes
  // from the same function `npm run check:posts` runs. What is left below is
  // what only the built pages can answer.
  const blogProblems = [...postContentProblems(posts, LOCALES)];

  for (const lang of LOCALES) {
    const blogIndex = path.join(dist, BLOG.path[lang].replace(/^\//, ''), 'index.html');
    if (!(await exists(blogIndex))) {
      blogProblems.push(`no ${BLOG.path[lang]} index`);
    } else {
      const page = await readFile(blogIndex, 'utf8');
      if (!page.includes(`<title>${BLOG.title[lang]}</title>`)) {
        blogProblems.push(`${BLOG.path[lang]} title`);
      }
      if (LOCALES.length > 1 && !page.includes(`hreflang="${lang}"`)) {
        blogProblems.push(`${BLOG.path[lang]} hreflang`);
      }
      for (const post of posts) {
        if (!page.includes(postPath(post, lang))) {
          blogProblems.push(`${BLOG.path[lang]} does not link to ${post.slug[lang]}`);
        }
      }
    }
  }

  // A diagram whose labels are drawn into the SVG exists twice: `x.svg` and
  // `x-en.svg`. The English body has to point at the second one, and the
  // failure if it does not is completely silent — the page renders, the
  // picture loads, and an English reader is shown Vietnamese words inside the
  // drawing. Nothing else in this script would notice.
  for (const post of posts) {
    const viFigures = post.body.vi.filter((one) => one.figure);
    const enFigures = post.body.en.filter((one) => one.figure);
    for (let at = 0; at < Math.min(viFigures.length, enFigures.length); at += 1) {
      const from = viFigures[at].figure.src;
      if (from !== enFigures[at].figure.src) continue;
      const english = String(from).replace(/\.svg$/, '-en.svg');
      if (english === from) continue;
      if (await exists(path.join(dist, english.replace(/^\//, '')))) {
        blogProblems.push(
          `${post.slug.vi}: the English figure still points at ${from}, and ${english} exists`,
        );
      }
    }
  }

  for (const lang of LOCALES) {
    const other = lang === 'vi' ? 'en' : 'vi';
    for (const post of posts) {
      const url = absolute(postPath(post, lang));
      const file = path.join(dist, postPath(post, lang).replace(/^\//, ''), 'index.html');
      const label = `${post.slug[lang]} [${lang}]`;
      if (!(await exists(file))) {
        blogProblems.push(`${label} MISSING`);
        continue;
      }
      const page = await readFile(file, 'utf8');
      if (!page.includes(`<title>${post.title[lang]}</title>`)) blogProblems.push(`${label} title`);
      if (!page.includes(`<link rel="canonical" href="${url}" />`)) {
        blogProblems.push(`${label} canonical`);
      }
      if (!page.includes(`<html lang="${LOCALE_TAGS[lang].html}">`)) {
        blogProblems.push(`${label} lang`);
      }
      if (!page.includes('"BlogPosting"')) blogProblems.push(`${label} structured data`);
      if (!page.includes(post.description[lang])) blogProblems.push(`${label} description`);
      // A translated article that still points its reader at the other
      // language's copy is a page nobody can navigate out of.
      if (LOCALES.length > 1) {
        if (!page.includes(`hreflang="${other}"`)) blogProblems.push(`${label} hreflang`);
        if (!page.includes(`href="${absolute(postPath(post, other))}"`)) {
          blogProblems.push(`${label} does not link to its other language`);
        }
        const wantCard = lang === 'en' ? 'og-image-en.png' : 'og-image.png';
        if (!page.includes(`content="${SITE_URL}/${wantCard}"`)) blogProblems.push(`${label} og:image`);
        const wantManifest = lang === 'en' ? '/en/site.webmanifest' : '/site.webmanifest';
        if (!page.includes(`href="${wantManifest}"`)) blogProblems.push(`${label} manifest`);
      }
      // The stylesheet is the site's own, hash and all: a blog page that links a
      // stylesheet this build did not produce renders as unstyled text.
      if (!/assets\/index-[\w-]+\.css/.test(page)) blogProblems.push(`${label} stylesheet`);
      // An illustration is a drawing in `public/`, copied to `dist/` by Vite,
      // which the article names by path — so a diagram that never shipped is a
      // broken image on a published page, and nothing else in the article's own
      // markup would show it.
      for (const one of post.body[lang]) {
        if (!one.figure) continue;
        const drawing = path.join(dist, String(one.figure.src).replace(/^\//, ''));
        if (!(await exists(drawing))) {
          blogProblems.push(`${label} figure MISSING ${one.figure.src}`);
        }
      }
      // And a body block may not carry `**`.
      //
      // The one-pager renders emphasis through `RichText`; an article's renderer
      // escapes every string it is handed, on purpose, so a `**` in a paragraph
      // ships as two literal asterisks. The smoke test already catches that on
      // the app's own markup, and an article is not part of that markup —
      // measured: the first draft of the newest article printed
      // `**ghi lại một dòng**` on the published page and every check passed.
      if (JSON.stringify(post.body[lang]).includes('**')) {
        blogProblems.push(`${label} has ** in a body block, which is escaped, not rendered`);
      }
      // The meta description is what a search result shows, and a truncated one
      // loses the half that says what the article is about.
      if (post.description[lang].length > 165) {
        blogProblems.push(`${label} description is ${post.description[lang].length} characters`);
      }
    }
  }
  if (blogProblems.length) fail(`blog: ${blogProblems.slice(0, 8).join('; ')}`);
  else pass(`blog: ${posts.length} article(s) x 2 languages + 2 index pages`);

  // The "no article names anything inside the system" check lives in
  // `post-rules.mjs` with the rest of them, so that `npm run check:posts`
  // catches the word at the moment it is typed rather than at the end of a
  // build. Nothing is lost here: `blogProblems` above starts from that same
  // list, so a leak still fails this script.

  // ---- Documentation ------------------------------------------------------
  //
  // The pages are written by `scripts/build-docs.mjs` and are the only pages on
  // the site that are *not* the one-pager and *not* an article: they carry
  // both languages, they sit in a sidebar, and they must not carry the app's
  // bundle. Each of those is a check below.
  const docProblems = [];

  // `**emphasis**` is real markup on a documentation page and a typo if the
  // markers do not pair — the rest of the sentence would turn bold, or the
  // asterisks would print. Read off the source rather than the built page, so
  // it fails when the word is typed rather than at the end of a build.
  const markers = (value) => (String(value).match(/\*\*/g) || []).length;
  for (const doc of docs) {
    for (const lang of LOCALES) {
      if (!doc.body?.[lang]?.length) docProblems.push(`${doc.key} has no ${lang} body`);
      const text = JSON.stringify(doc.body[lang]);
      const count = (text.match(/\*\*/g) || []).length;
      if (count % 2) docProblems.push(`${doc.key} [${lang}] has unpaired ** markers`);
      // The description goes into `<meta name="description">`, where `**` is
      // two asterisks to a search engine rather than emphasis.
      if (markers(doc.description[lang])) {
        docProblems.push(`${doc.key} [${lang}] puts ** in its meta description`);
      }
      if (doc.title[lang].length > 62) {
        docProblems.push(`${doc.key} [${lang}] title is over 62 characters`);
      }
    }
    // The invariant is that no two *pages* share an address, not that the two
    // languages spell a slug differently. `telegram-bot` is the same word in
    // both - there is nothing to translate, and `/tai-lieu/telegram-bot/` and
    // `/en/docs/telegram-bot/` are different addresses. Refusing that would be
    // refusing a correct answer, which is how a check teaches people to work
    // around it.
    if (!doc.slug.vi || !doc.slug.en) {
      docProblems.push(`${doc.key} has a missing slug`);
    }
    // The two languages have to be the same *shape*, not the same length.
    // English sentences run shorter and a paragraph often becomes one where
    // the Vietnamese is two, so comparing counts would fail on correct work.
    // What must match is the sequence of block types: a `steps` block that
    // exists in one language and not the other is a reader being told to do
    // something the other reader is not.
    const shape = (blocks) => blocks
      .map((one) => (one.steps ? 'steps' : Object.keys(one)[0])).join(' ');
    if (shape(doc.body.vi) !== shape(doc.body.en)) {
      docProblems.push(`${doc.key}: vi and en bodies are not the same shape`);
    }

    // The reading order is `order` within `group`, and it is what the sidebar,
    // the index and the prev/next pager all read. A missing one sorts as `NaN`
    // - which is not an error, it is an unstable sort, so the sidebar would
    // come out in a different order on different builds and nothing would say
    // why. A duplicate is the same problem with a fixture.
    if (!Number.isInteger(doc.order) || doc.order < 1) {
      docProblems.push(`${doc.key} has no usable order`);
    }
  }
  for (const group of DOC_GROUPS) {
    const mine = docs.filter((doc) => doc.group === group.key);
    const orders = mine.map((doc) => doc.order);
    if (new Set(orders).size !== orders.length) {
      docProblems.push(`group ${group.key} has two topics wanting the same slot`);
    }
  }

  // Every picture the pages name has to be on disk. A missing screenshot is a
  // broken image on the one kind of page where a picture is doing the
  // explaining.
  const figuresIn = (blocks) => blocks.flatMap((one) => [
    ...(one.figure ? [one.figure] : []),
    ...(one.steps ? one.steps.flatMap((step) => (step.figure ? [step.figure] : [])) : []),
  ]);
  for (const doc of docs) {
    for (const lang of LOCALES) {
      for (const fig of figuresIn(doc.body[lang])) {
        const named = typeof fig.src === 'string' ? fig.src : fig.src[lang];
        if (!named) { docProblems.push(`${doc.key} [${lang}] has a figure with no src`); continue; }
        // The same hashed-name lookup `build-docs.mjs` does. Two answers to
        // "does this picture exist" is a build that passes while the page
        // serves a broken image.
        const src = resolveDocImage(path.join(root, 'public'), named);
        const onDisk = path.join(dist, src.replace(/^\//, ''));
        if (!existsSync(onDisk)) docProblems.push(`${doc.key} [${lang}] figure missing: ${src}`);
      }
    }
  }

  // The bundle. A documentation page that boots React makes the router ask
  // `routeForPath('/tai-lieu/...')`, get `null`, and `replaceState('/')` — the
  // reader is teleported to the landing page and nothing reports an error.
  for (const lang of LOCALES) {
    for (const [where, file] of [
      ['index', path.join(dist, DOCS.path[lang].replace(/^\//, ''), 'index.html')],
      ...docs.map((doc) => [
        doc.key,
        path.join(dist, DOCS.path[lang].replace(/^\//, ''), doc.slug[lang], 'index.html'),
      ]),
    ]) {
      if (!existsSync(file)) { docProblems.push(`${where} [${lang}] was not written`); continue; }
      const page = await readFile(file, 'utf8');
      if (/assets\/index-[\w-]+\.js/.test(page)) {
        docProblems.push(`${where} [${lang}] carries the app bundle — the router would send it home`);
      }
    }
  }

  // What a topic may not name.
  //
  // The blog's list is thirteen words long and bans `docker`, `adb` and
  // `localhost`; this one is seven and allows all three. The difference is not
  // a weakening, it is the difference between the two kinds of page. An
  // article is written for somebody deciding whether to buy, and naming the
  // machinery tells them - and a competitor - how it is made. A topic is
  // written for somebody with the app open, and the words it needs are the
  // words on their screen: the installer runs on Docker, the phone is paired
  // over adb, the app is at localhost, the branding screen's own subtitle says
  // "một lượt ffmpeg", and the voice picker says "ZeroTTS (chạy trên máy)".
  // Telling a reader to look for a word while forbidding us to print it is not
  // documentation.
  //
  // What is left is what appears on no screen anywhere: the renderer's product
  // name, the library names, the encoder's, the debug channel's. Those are
  // still nobody's business.
  const BURIED = [
    'moneyprinter', 'moviepy', 'nvenc', 'jsonrpc', 'sqlite', 'uiautomator',
    'gradio',
  ];
  const buried_ = [];
  for (const doc of docs) {
    const text = JSON.stringify([doc.body, doc.lead, doc.description]).toLowerCase();
    for (const word of BURIED) {
      if (text.includes(word)) buried_.push(`${doc.key} names "${word}"`);
    }
  }
  if (buried_.length) docProblems.push(...buried_);

  if (docProblems.length) fail(`docs: ${docProblems.slice(0, 6).join('; ')}`);
  else pass(`docs: ${docs.length} topic(s) x 2 languages, no bundle, every figure present`);

  // ---- The public download tool ----
  //
  // It is a standalone page, so the two things that matter most are the ones
  // that made the docs a separate builder in the first place: no React bundle
  // (the router would send the reader home) and a real, indexable document for
  // each language.
  const dlProblems = [];
  for (const lang of LOCALES) {
    const file = path.join(dist, DOWNLOADS.path[lang].replace(/^\//, ''), 'index.html');
    if (!existsSync(file)) {
      dlProblems.push(`${lang}: page missing`);
      continue;
    }
    const page = await readFile(file, 'utf8');
    const url = absolute(DOWNLOADS.path[lang]);
    if (!page.includes(`<html lang="${LOCALE_TAGS[lang].html}">`)) dlProblems.push(`${lang}: html lang`);
    if (!page.includes(`<link rel="canonical" href="${url}"`)) dlProblems.push(`${lang}: canonical`);
    if (!page.includes('hreflang="vi"') || !page.includes('hreflang="en"')
      || !page.includes('hreflang="x-default"')) dlProblems.push(`${lang}: hreflang trio`);
    if (!page.includes('itemtype="https://schema.org/WebApplication"')) dlProblems.push(`${lang}: WebApplication`);
    if (!page.includes('itemtype="https://schema.org/FAQPage"')) dlProblems.push(`${lang}: FAQPage`);
    if (/assets\/index-[\w-]+\.js/.test(page)) dlProblems.push(`${lang}: carries the app bundle`);
    if (!page.includes('/downloads/app.js')) dlProblems.push(`${lang}: client script`);
    if (!page.includes('/downloads/qr.js')) dlProblems.push(`${lang}: QR script`);
    if (!page.includes('data-kind="subtitle"')) dlProblems.push(`${lang}: subtitle button`);
    if (!page.includes('id="dl-push-box"')) dlProblems.push(`${lang}: push opt-in`);
    if (!page.includes('href="/downloads/manifest.webmanifest"')) dlProblems.push(`${lang}: downloads manifest`);
    if (!page.includes('challenges.cloudflare.com/turnstile')) dlProblems.push(`${lang}: Turnstile script`);
    if (!page.includes('data-sitekey="')) dlProblems.push(`${lang}: Turnstile site key`);
    if (!page.includes(downloads[lang].title.replace(/&/g, '&amp;'))) dlProblems.push(`${lang}: title copy`);
  }
  const headers = await readFile(path.join(dist, '_headers'), 'utf8');
  if (!headers.includes('/downloads/*') || !headers.includes('/en/downloads/*')) {
    dlProblems.push('_headers has no downloads CSP rule');
  }
  if (!headers.includes('challenges.cloudflare.com')
    || !headers.includes("script-src 'self'")) {
    dlProblems.push('downloads CSP does not allow the Turnstile script');
  }
  if (dlProblems.length) fail(`downloads: ${dlProblems.slice(0, 6).join('; ')}`);
  else pass(`downloads: ${LOCALES.length} language(s), no bundle, CSP and Turnstile present`);

  // Web Push participates through the same worker the PWA already registers.
  const sw = await readFile(path.join(dist, 'downloads/sw.js'), 'utf8');
  const swProblems = [];
  if (!sw.includes("addEventListener('push'")) swProblems.push('no push handler');
  if (!sw.includes("addEventListener('notificationclick'")) swProblems.push('no click handler');
  const manifest = await readFile(path.join(dist, 'downloads/manifest.webmanifest'), 'utf8');
  if (!manifest.includes('"id": "/downloads/"')) swProblems.push('manifest has no id');
  if (swProblems.length) fail(`push: ${swProblems.join('; ')}`);
  else pass('push: service worker handlers and manifest id present');

  // AdSense is a script and an ads.txt; the loader alone is an unverified
  // claim, and the text file is what the crawler checks.
  const ads = await readFile(path.join(dist, 'ads.txt'), 'utf8');
  const adsProblems = [];
  if (!ads.includes('pub-1787558413198473')) adsProblems.push('ads.txt client');
  const landing = await readFile(path.join(dist, 'index.html'), 'utf8');
  if (!landing.includes('pagead2.googlesyndication.com')) adsProblems.push('landing loader');
  if (adsProblems.length) fail(`ads: ${adsProblems.join('; ')}`);
  else pass('ads: loader and ads.txt present');

  // The transfer page is reached from a QR, not from search. It must stay out
  // of the index and must actually load the script that reads `?id=`.
  const shareProblems = [];
  for (const lang of LOCALES) {
    const file = path.join(
      dist,
      DOWNLOADS.path[lang].replace(/^\//, ''),
      'share',
      'index.html',
    );
    if (!existsSync(file)) {
      shareProblems.push(`${lang}: page missing`);
      continue;
    }
    const page = await readFile(file, 'utf8');
    if (!page.includes(`<html lang="${LOCALE_TAGS[lang].html}">`)) shareProblems.push(`${lang}: html lang`);
    if (!page.includes('/downloads/share.js')) shareProblems.push(`${lang}: script`);
    if (!page.includes('content="noindex, nofollow"')) shareProblems.push(`${lang}: indexable`);
  }
  if (shareProblems.length) fail(`share page: ${shareProblems.slice(0, 6).join('; ')}`);
  else pass(`share page: ${LOCALES.length} language(s), noindex, script present`);

  // ---- The six platform landing pages ----
  const pfProblems = [];
  for (const platform of PLATFORM_PAGES) {
    for (const lang of LOCALES) {
      const file = path.join(dist, platform.path[lang].replace(/^\//, ''), 'index.html');
      if (!existsSync(file)) {
        pfProblems.push(`${platform.key}/${lang}: page missing`);
        continue;
      }
      const page = await readFile(file, 'utf8');
      const url = absolute(platform.path[lang]);
      if (!page.includes(`<html lang="${LOCALE_TAGS[lang].html}">`)) pfProblems.push(`${platform.key}/${lang}: html lang`);
      if (!page.includes(`<link rel="canonical" href="${url}"`)) pfProblems.push(`${platform.key}/${lang}: canonical`);
      if (!page.includes('hreflang="vi"') || !page.includes('hreflang="en"')
        || !page.includes('hreflang="x-default"')) pfProblems.push(`${platform.key}/${lang}: hreflang trio`);
      if (!page.includes('itemtype="https://schema.org/WebApplication"')) pfProblems.push(`${platform.key}/${lang}: WebApplication`);
      if (!page.includes('itemtype="https://schema.org/FAQPage"')) pfProblems.push(`${platform.key}/${lang}: FAQPage`);
      if (/assets\/index-[\w-]+\.js/.test(page)) pfProblems.push(`${platform.key}/${lang}: carries the app bundle`);
      if (!page.includes(`action="${DOWNLOADS.path[lang]}"`)) pfProblems.push(`${platform.key}/${lang}: tool action`);
      if (!page.includes('name="url"')) pfProblems.push(`${platform.key}/${lang}: url field`);
      if (!page.includes(platform.meta[lang].title.replace(/&/g, '&amp;'))) pfProblems.push(`${platform.key}/${lang}: title copy`);
    }
  }
  if (pfProblems.length) fail(`platform pages: ${pfProblems.slice(0, 6).join('; ')}`);
  else pass(`platform pages: ${PLATFORM_PAGES.length} platform(s) x ${LOCALES.length} languages`);

  // ---- Bookmarklet and embed page ----
  const qtProblems = [];
  for (const lang of LOCALES) {
    const file = path.join(dist, QUICK.path[lang].replace(/^\//, ''), 'index.html');
    if (!existsSync(file)) {
      qtProblems.push(`${lang}: page missing`);
      continue;
    }
    const page = await readFile(file, 'utf8');
    if (!page.includes(`<link rel="canonical" href="${absolute(QUICK.path[lang])}"`)) qtProblems.push(`${lang}: canonical`);
    if (!page.includes('javascript:')) qtProblems.push(`${lang}: bookmarklet`);
    if (!page.includes('/embed.js')) qtProblems.push(`${lang}: embed snippet`);
    if (/assets\/index-[\w-]+\.js/.test(page)) qtProblems.push(`${lang}: carries the app bundle`);
  }
  if (qtProblems.length) fail(`quick/embed: ${qtProblems.slice(0, 6).join('; ')}`);
  else pass(`quick/embed: ${LOCALES.length} language(s)`);

  // ---- Audio and cover landing pages ----
  const ucProblems = [];
  for (const page of USE_CASE_PAGES) {
    for (const lang of LOCALES) {
      const file = path.join(dist, page.path[lang].replace(/^\//, ''), 'index.html');
      if (!existsSync(file)) {
        ucProblems.push(`${page.key}/${lang}: page missing`);
        continue;
      }
      const html = await readFile(file, 'utf8');
      const url = absolute(page.path[lang]);
      if (!html.includes(`<link rel="canonical" href="${url}"`)) ucProblems.push(`${page.key}/${lang}: canonical`);
      if (!html.includes('itemtype="https://schema.org/FAQPage"')) ucProblems.push(`${page.key}/${lang}: FAQPage`);
      if (!html.includes(`action="${DOWNLOADS.path[lang]}"`)) ucProblems.push(`${page.key}/${lang}: tool action`);
      if (!html.includes(`name="kind" value="${page.kind}"`)) ucProblems.push(`${page.key}/${lang}: kind field`);
      if (page.kind === 'audio' && !html.includes(`name="audioFormat" value="${page.audioFormat}"`)) {
        ucProblems.push(`${page.key}/${lang}: audio format`);
      }
    }
  }
  if (ucProblems.length) fail(`use cases: ${ucProblems.slice(0, 6).join('; ')}`);
  else pass(`use cases: ${USE_CASE_PAGES.length} kind(s) x ${LOCALES.length} languages`);

  // ---- The reference-pacing page ----
  const rfProblems = [];
  for (const lang of LOCALES) {
    const file = path.join(
      dist, REFERENCE_PAGE.path[lang].replace(/^\//, ''), 'index.html',
    );
    if (!existsSync(file)) {
      rfProblems.push(`${lang}: page missing`);
      continue;
    }
    const html = await readFile(file, 'utf8');
    if (!html.includes(`<link rel="canonical" href="${absolute(REFERENCE_PAGE.path[lang])}"`)) {
      rfProblems.push(`${lang}: canonical`);
    }
    if (!html.includes('itemtype="https://schema.org/FAQPage"')) rfProblems.push(`${lang}: FAQPage`);
    if (!html.includes('rf-grid')) rfProblems.push(`${lang}: template cards`);
    if (/assets\/index-[\w-]+\.js/.test(html)) rfProblems.push(`${lang}: carries the app bundle`);
  }
  if (rfProblems.length) fail(`reference page: ${rfProblems.slice(0, 6).join('; ')}`);
  else pass(`reference page: ${LOCALES.length} language(s)`);

  // ---- Sitemap: every URL, and no URL that is not a route ----
  //
  // "Route" here includes the blog, which is not in `routes.js` on purpose -
  // those are the one-pager's section URLs, and an article is a page of its own.
  const map = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
  const locs = [...map.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const want = new Set([
    ...routes.flatMap((route) => LOCALES.map((lang) => absolute(route.slug[lang]))),
    ...LOCALES.map((lang) => absolute(BLOG.path[lang])),
    ...posts.flatMap((post) => LOCALES.map((lang) => absolute(postPath(post, lang)))),
    // The documentation, index and topic pages, both languages. Written by
    // `build-docs.mjs` and listed by `build-routes.mjs`, and this is the check
    // that the two agree.
    ...LOCALES.map((lang) => absolute(DOCS.path[lang])),
    ...docs.flatMap((doc) => LOCALES.map((lang) => absolute(docPath(doc, lang)))),
    // The public download tool, written by `build-downloads.mjs`.
    ...LOCALES.map((lang) => absolute(DOWNLOADS.path[lang])),
    // The platform landing pages, written by `build-download-platforms.mjs`.
    ...PLATFORM_PAGES.flatMap((platform) =>
      LOCALES.map((lang) => absolute(platform.path[lang]))),
    // The bookmarklet and embed instructions, written by
    // `build-download-tools.mjs`.
    ...LOCALES.map((lang) => absolute(QUICK.path[lang])),
    // Audio and cover landing pages, written by
    // `build-download-use-cases.mjs`.
    ...USE_CASE_PAGES.flatMap((page) =>
      LOCALES.map((lang) => absolute(page.path[lang]))),
    // The static “make it like this reference” page.
    ...LOCALES.map((lang) => absolute(REFERENCE_PAGE.path[lang])),
    // Canonical pages that live outside the route table: the legal pair and
    // the visual install guide.
    ...STATIC_PAGES.flatMap((page) => Object.values(page.path).map((path) => absolute(path))),
  ]);
  const strays = locs.filter((loc) => !want.has(loc));
  if (locs.length !== want.size) {
    fail(`sitemap has ${locs.length} URLs, expected ${want.size}`);
  } else if (strays.length) {
    fail(`sitemap lists URLs that are not routes: ${strays.join(', ')}`);
  } else {
    pass(`sitemap has all ${locs.length} route URLs`);
  }
  // Cloudflare 301s `/x` to `/x/`; a canonical without the slash costs a hop
  // on every crawl and splits the two forms across two URLs.
  const unslashed = locs.filter((loc) => !loc.endsWith('/'));
  if (unslashed.length) fail(`sitemap URLs missing a trailing slash: ${unslashed.join(', ')}`);
  else pass('every sitemap URL ends in a slash');

  // ---- Internal links: every one resolves to a file in dist/ ----
  //
  // Articles can now write `[label](/path/)` in prose, and a new article is
  // exactly where a plausible-looking URL that was never built slips through.
  // Assets are skipped (their extensions are not pages); `/api/*` is served by
  // the Worker and has no file here.
  const htmlFiles = files.filter((one) => String(one).endsWith('.html'));
  const brokenLinks = [];
  const googleFontPages = [];
  for (const relative of htmlFiles) {
    const file = path.join(dist, String(relative));
    if (!(await exists(file))) continue;
    const html = await readFile(file, 'utf8');
    if (html.includes('fonts.googleapis.com')) googleFontPages.push(String(relative));
    for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      let url = match[1];
      if (url.startsWith('//') || url.startsWith('/api/')) continue;
      if (/\.(?:png|jpe?g|webp|svg|gif|css|js|woff2?|mp4|webm|txt|xml|webmanifest|ico|json)$/i.test(url)) {
        continue;
      }
      if (!url.endsWith('/')) url += '/';
      const target = url === '/'
        ? path.join(dist, 'index.html')
        : path.join(dist, url.slice(1), 'index.html');
      if (!(await exists(target))) brokenLinks.push(`${url} (from ${relative})`);
    }
  }
  if (brokenLinks.length) {
    fail(`internal links with no page: ${[...new Set(brokenLinks)].slice(0, 8).join('; ')}`);
  } else {
    pass(`every internal link resolves (${htmlFiles.length} HTML file(s))`);
  }

  // Every JSON-LD block must parse. A stray `</script>` or an unescaped `<` in
  // a title is invisible to the string checks above and fatal to the parser.
  const badLd = [];
  for (const relative of htmlFiles) {
    const file = path.join(dist, String(relative));
    if (!(await exists(file))) continue;
    const html = await readFile(file, 'utf8');
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(match[1]);
      } catch (error) {
        badLd.push(`${relative}: ${error.message}`);
      }
    }
  }
  if (badLd.length) fail(`invalid JSON-LD: ${badLd.slice(0, 5).join('; ')}`);
  else pass('every JSON-LD block parses');

  // Self-hosted fonts: a page that still points at Google Fonts is a page that
  // pays for an extra DNS lookup and TLS handshake before its headline paints.
  if (googleFontPages.length) {
    fail(`pages still load Google Fonts: ${googleFontPages.slice(0, 6).join(', ')}`);
  } else {
    pass('no page loads Google Fonts');
  }
  for (const font of ['inter-latin.woff2', 'inter-vietnamese.woff2']) {
    if (!(await exists(path.join(dist, 'fonts', font)))) fail(`missing /fonts/${font}`);
  }

  // The sitemap's alternates must include x-default, exactly one per URL.
  const xDefaults = (map.match(/hreflang="x-default"/g) || []).length;
  if (xDefaults !== locs.length) {
    fail(`sitemap has ${xDefaults} x-default alternates for ${locs.length} URLs`);
  } else {
    pass(`sitemap has one x-default per URL (${xDefaults})`);
  }

  // The two files that make a deploy discoverable without a dashboard login.
  const robotsFile = path.join(dist, 'robots.txt');
  const robotsText = (await exists(robotsFile)) ? await readFile(robotsFile, 'utf8') : '';
  if (!robotsText.includes('GPTBot') || !robotsText.includes('OAI-SearchBot')) {
    fail('robots.txt does not name the AI search crawlers');
  } else {
    pass('robots.txt allows AI search crawlers');
  }
  for (const file of ['llms.txt', '3100178b07d989fa101e82cbae4e54de.txt']) {
    if (!(await exists(path.join(dist, file)))) fail(`missing /${file}`);
  }

  // A build without a sitekey used to fall back to Cloudflare's "always
  // passes" test key. That widget reads "For testing only. If seen, report to
  // site owner", and the production secret refuses the tokens it produces —
  // so the download form fails after the visitor solves it. Local builds may
  // opt into that key, but it must never reach a deploy.
  const testKeyPages = [];
  for (const relative of htmlFiles) {
    const page = await readFile(path.join(dist, String(relative)), 'utf8');
    if (page.includes('1x00000000000000000000AA')) testKeyPages.push(String(relative));
  }
  if (testKeyPages.length) {
    fail(`Turnstile test sitekey in ${testKeyPages.join(', ')}`);
  } else {
    pass('no Turnstile test sitekey');
  }

  // ---- Report ----
  console.log('\nBuild verification\n==================');
  for (const { ok, msg } of checks) console.log(`${ok ? '  ✓' : '  ✗'} ${msg}`);

  const failed = checks.filter((c) => !c.ok);
  console.log(
    `\n${checks.length - failed.length}/${checks.length} checks passed. Total JS: ${kb(jsTotal)}`,
  );

  if (failed.length) {
    console.error(`\n${failed.length} check(s) FAILED.`);
    process.exit(1);
  }
  console.log('dist/ is ready to deploy to Cloudflare Pages.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

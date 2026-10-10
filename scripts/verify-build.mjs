/**
 * Post-build smoke test. Run with `node scripts/verify-build.mjs` after `npm run build`.
 * Fails loudly if dist/ is missing anything the deploy depends on.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES, LOCALE_TAGS, absolute, routes, SITE_URL } from '../src/data/routes.js';
import { BLOG, postPath, posts } from '../src/data/posts.js';
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
  const blogProblems = [];
  const blogIndex = path.join(dist, 'blog', 'index.html');
  if (!(await exists(blogIndex))) {
    blogProblems.push('no /blog/ index');
  } else {
    const page = await readFile(blogIndex, 'utf8');
    if (!page.includes(`<title>${BLOG.title}</title>`)) blogProblems.push('/blog/ title');
    for (const post of posts) {
      if (!page.includes(postPath(post.slug))) {
        blogProblems.push(`/blog/ does not link to ${post.slug}`);
      }
    }
  }
  for (const post of posts) {
    const file = path.join(dist, 'blog', post.slug, 'index.html');
    if (!(await exists(file))) {
      blogProblems.push(`${post.slug} MISSING`);
      continue;
    }
    const page = await readFile(file, 'utf8');
    if (!page.includes(`<title>${post.title}</title>`)) blogProblems.push(`${post.slug} title`);
    if (!page.includes(`<link rel="canonical" href="${absolute(postPath(post.slug))}" />`)) {
      blogProblems.push(`${post.slug} canonical`);
    }
    if (!page.includes('"BlogPosting"')) blogProblems.push(`${post.slug} structured data`);
    if (!page.includes(post.description)) blogProblems.push(`${post.slug} description`);
    // The stylesheet is the site's own, hash and all: a blog page that links a
    // stylesheet this build did not produce renders as unstyled text.
    if (!/assets\/index-[\w-]+\.css/.test(page)) blogProblems.push(`${post.slug} stylesheet`);
    // An illustration is a drawing in `public/`, copied to `dist/` by Vite,
    // which the article names by path — so a diagram that never shipped is a
    // broken image on a published page, and nothing else in the article's own
    // markup would show it.
    for (const one of post.body) {
      if (!one.figure) continue;
      const drawing = path.join(dist, String(one.figure.src).replace(/^\//, ''));
      if (!(await exists(drawing))) {
        blogProblems.push(`${post.slug} figure MISSING ${one.figure.src}`);
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
    if (JSON.stringify(post.body).includes('**')) {
      blogProblems.push(`${post.slug} has ** in a body block, which is escaped, not rendered`);
    }
  }
  if (blogProblems.length) fail(`blog: ${blogProblems.join(', ')}`);
  else pass(`blog: ${posts.length} article(s) + index, each with its own head`);

  // An article about how the system works is written for the person using it —
  // layers, principles and trade-offs — and never describes what is inside the
  // machine. Every word below is a name from the build rather than from the
  // explanation, and one of them appearing in a published page tells a reader
  // (or a competitor) more about how this is made than any article intends to.
  // Read off the source, not the built page, so it fails at the moment the word
  // is typed rather than at the end of a build.
  const INTERNAL_WORDS = [
    'ffmpeg', 'sqlite', 'gradio', 'docker', 'adb', 'uiautomator', 'moviepy',
    'moneyprinter', 'zerotts', 'nvenc', 'jsonrpc', '127.0.0.1', 'localhost',
  ];
  const leaks = [];
  for (const post of posts) {
    const text = JSON.stringify(post).toLowerCase();
    for (const word of INTERNAL_WORDS) {
      if (text.includes(word)) leaks.push(`${post.slug} names "${word}"`);
    }
  }
  if (leaks.length) fail(`blog tells the reader what is inside the system: ${leaks.join(', ')}`);
  else pass('no article names anything inside the system');

  // ---- Sitemap: every URL, and no URL that is not a route ----
  //
  // "Route" here includes the blog, which is not in `routes.js` on purpose -
  // those are the one-pager's section URLs, and an article is a page of its own.
  const map = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
  const locs = [...map.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const want = new Set([
    ...routes.flatMap((route) => LOCALES.map((lang) => absolute(route.slug[lang]))),
    absolute(BLOG.path),
    ...posts.map((post) => absolute(postPath(post.slug))),
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

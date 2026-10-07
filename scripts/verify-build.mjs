/**
 * Post-build smoke test. Run with `node scripts/verify-build.mjs` after `npm run build`.
 * Fails loudly if dist/ is missing anything the deploy depends on.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
    const wanted = [
      '.ar-container',
      '.ar-card',
      '.ar-btn-primary',
      '.ar-connector',
      '.ar-flow-card',
      '.ar-aurora',
      '.ar-final-cta',
      'prefers-reduced-motion',
      '@keyframes ar-trail',
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

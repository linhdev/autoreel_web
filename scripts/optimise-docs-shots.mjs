/**
 * Turn the documentation screenshots into the files the site serves.
 *
 * The captures come from `ShortGPT/tools/shots-for-docs.mjs`, which drives the
 * running app and writes PNG at whatever size the block on screen turned out
 * to be. This is the other half: one width, one format, one quality, so a page
 * of documentation does not ship eight different resolutions.
 *
 *     node scripts/optimise-docs-shots.mjs --from ../ShortGPT/tools/screenshots/tai-lieu
 *
 * Authoring-time only, exactly like `generate-assets.mjs` — `sharp` is a dev
 * dependency and nothing at build time or run time imports it. Run this when
 * the interface changes and the pictures need taking again; the output is
 * committed, because a reader should not be waiting on a build step to see a
 * screenshot.
 *
 * **1440 wide, and the reason is the column rather than the screen.** The
 * prose column is 780 CSS pixels, so a 1440-wide picture renders at about
 * 1.85x — text stays crisp on a retina display — while the captures are 1600
 * wide, so the downscale is 0.9 and nothing is invented. Quality 82 is the
 * usual knee for user-interface images: large flat areas and hard text edges,
 * where a lower number starts to ring around the letters.
 */
import { readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public', 'docs-img');

const argv = process.argv.slice(2);
const arg = (name, fallback) => {
  const at = argv.indexOf(name);
  return at >= 0 ? argv[at + 1] : fallback;
};
const FROM = arg('--from', join(ROOT, '..', 'ShortGPT', 'tools', 'screenshots', 'tai-lieu'));

if (!existsSync(FROM)) {
  console.error(`no captures at ${FROM} — run tools/shots-for-docs.mjs in the ShortGPT repo first`);
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });

const files = readdirSync(FROM).filter((name) => name.endsWith('.png')).sort();
if (!files.length) {
  console.error(`no PNG files in ${FROM}`);
  process.exit(1);
}

let before = 0;
let after = 0;
for (const name of files) {
  const src = join(FROM, name);
  const to = join(OUT, basename(name, '.png') + '.webp');
  await sharp(src)
    .resize({ width: 1440, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(to);
  const was = statSync(src).size;
  const now = statSync(to).size;
  before += was;
  after += now;
  console.log(`  ${basename(to).padEnd(34)} ${(was / 1024).toFixed(0).padStart(5)} KB`
            + ` -> ${(now / 1024).toFixed(0).padStart(4)} KB`);
}
console.log(`${files.length} file(s): ${(before / 1048576).toFixed(1)} MB -> `
          + `${(after / 1048576).toFixed(1)} MB, into public/docs-img/`);
console.log('Now `npm run build && npm run verify` — verify checks every figure exists.');

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
import { readdirSync, statSync, mkdirSync, existsSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
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

// `--only <substring>` re-does one picture instead of all of them.
//
// Not an optimisation: a full run rewrites every file in `public/docs-img/`,
// and a capture that was taken since the last run — somebody re-shot one
// screen while fixing a single topic — would come along with it and change a
// hash in a commit that was supposed to be about something else. Naming the
// picture keeps the diff the size of the change.
const ONLY = arg('--only', null);

const all = readdirSync(FROM).filter((name) => name.endsWith('.png')).sort();
const files = ONLY ? all.filter((name) => name.includes(ONLY)) : all;
if (ONLY && !files.length) {
  console.error(`no capture matching "${ONLY}" in ${FROM}`);
  process.exit(1);
}
if (!files.length) {
  console.error(`no PNG files in ${FROM}`);
  process.exit(1);
}

let before = 0;
let after = 0;
for (const name of files) {
  const src = join(FROM, name);
  const stem = basename(name, '.png');
  const webp = await sharp(src)
    .resize({ width: 1440, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toBuffer();
  // The hash is of the bytes that are written, which is the only thing that
  // makes the year-long `immutable` in `public/_headers` true rather than
  // merely hoped for. See `scripts/lib/docs-images.mjs` for what happened when
  // this was attempted as a cache-header rule instead.
  const digest = createHash('sha256').update(webp).digest('hex').slice(0, 8);
  const to = join(OUT, `${stem}.${digest}.webp`);
  // The previous take of the same picture, under a name nothing links to any
  // more. Left behind, they would accumulate one per re-shoot and every one of
  // them would still be downloaded by anybody following an old link.
  for (const old of readdirSync(OUT)) {
    if (old.startsWith(`${stem}.`) && old.endsWith('.webp') && old !== `${stem}.${digest}.webp`) {
      rmSync(join(OUT, old));
      console.log(`  - ${old} (bản cũ)`);
    }
  }
  writeFileSync(to, webp);
  const was = statSync(src).size;
  before += was;
  after += webp.length;
  console.log(`  ${basename(to).padEnd(42)} ${(was / 1024).toFixed(0).padStart(5)} KB`
            + ` -> ${(webp.length / 1024).toFixed(0).padStart(4)} KB`);
}
console.log(`${files.length} file(s): ${(before / 1048576).toFixed(1)} MB -> `
          + `${(after / 1048576).toFixed(1)} MB, into public/docs-img/`);
console.log('Now `npm run build && npm run verify` — verify checks every figure exists.');

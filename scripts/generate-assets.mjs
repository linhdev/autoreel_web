/**
 * Builds every image the landing page ships in /public from the single master
 * logo (autoreel-logo.jpg). Run with `npm run assets`.
 *
 * The master file is 1254×1254 / ~300 KB, which is far too heavy to serve at
 * 44 CSS pixels — this resizes it down and emits the favicon set + OG card.
 */
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'autoreel-logo.jpg');
const OUT = path.join(root, 'public');

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

async function report(file) {
  const { size } = await stat(file);
  console.log(`  ✓ ${path.relative(root, file)} — ${kb(size)}`);
}

async function main() {
  await mkdir(OUT, { recursive: true });

  const source = sharp(SRC);
  const meta = await source.metadata();
  console.log(`Master: ${path.relative(root, SRC)} (${meta.width}×${meta.height})\n`);

  // ---- Header / footer logo (44 CSS px → 2× for retina) ----
  const logo88 = path.join(OUT, 'logo-88.webp');
  await sharp(SRC).resize(88, 88, { fit: 'cover' }).webp({ quality: 90 }).toFile(logo88);
  await report(logo88);

  // ---- Favicons ----
  const favicons = [
    { file: 'favicon-32.png', size: 32 },
    { file: 'favicon-192.png', size: 192 },
    { file: 'apple-touch-icon.png', size: 180 },
  ];

  for (const { file, size } of favicons) {
    const dest = path.join(OUT, file);
    await sharp(SRC).resize(size, size, { fit: 'cover' }).png({ compressionLevel: 9 }).toFile(dest);
    await report(dest);
  }

  // ---- OpenGraph card (1200×630) ----
  const logoData = await sharp(SRC)
    .resize(200, 200, { fit: 'cover' })
    .png()
    .toBuffer();

  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1024"/>
      <stop offset="55%" stop-color="#070B1A"/>
      <stop offset="100%" stop-color="#0A0A1F"/>
    </linearGradient>
    <radialGradient id="glowCyan" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#37D9FF" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#37D9FF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowPurple" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#9B5CFF" stop-opacity="0.48"/>
      <stop offset="100%" stop-color="#9B5CFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="text" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#37D9FF"/>
      <stop offset="38%" stop-color="#5B78FF"/>
      <stop offset="68%" stop-color="#9B5CFF"/>
      <stop offset="100%" stop-color="#EF4FC4"/>
    </linearGradient>
    <clipPath id="logoClip"><circle cx="600" cy="196" r="100"/></clipPath>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="120" cy="60" r="420" fill="url(#glowCyan)"/>
  <circle cx="1080" cy="90" r="400" fill="url(#glowPurple)"/>

  <image href="data:image/png;base64,${logoData.toString('base64')}"
         x="500" y="96" width="200" height="200"
         clip-path="url(#logoClip)" preserveAspectRatio="xMidYMid slice"/>

  <text x="600" y="376" text-anchor="middle"
        font-family="Segoe UI, Inter, Arial, sans-serif" font-size="72" font-weight="700"
        fill="#F8FAFF" letter-spacing="-2">AutoReel</text>

  <text x="600" y="428" text-anchor="middle"
        font-family="Segoe UI, Inter, Arial, sans-serif" font-size="28" font-weight="600"
        fill="url(#text)" letter-spacing="3">AI CONTENT AUTOMATION</text>

  <text x="600" y="500" text-anchor="middle"
        font-family="Segoe UI, Inter, Arial, sans-serif" font-size="30" font-weight="400"
        fill="#AEB8D4">Tạo video hàng loạt. Xử lý tự động. Đăng thẳng lên nền tảng.</text>

  <text x="600" y="556" text-anchor="middle"
        font-family="Segoe UI, Inter, Arial, sans-serif" font-size="24" font-weight="600"
        fill="#7C89AC">autoreelvn.com</text>
</svg>`;

  const ogImage = path.join(OUT, 'og-image.png');
  await sharp(Buffer.from(ogSvg))
    .png({ compressionLevel: 9, palette: true })
    .toFile(ogImage);
  await report(ogImage);

  console.log('\nAssets written to public/.');
}

main().catch((error) => {
  console.error('Asset generation failed:', error);
  process.exitCode = 1;
});

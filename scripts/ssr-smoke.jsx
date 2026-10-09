/**
 * Runtime smoke test: renders the whole app to a string.
 *
 * The production build only type-checks module resolution — it never *executes*
 * component code. This catches the class of bug a build happily ships: a
 * ReferenceError from a bad identifier, a broken component reference, an
 * invalid hook call, or a crash while mapping data.
 *
 * Run via: npm run smoke
 */
import { renderToString } from 'react-dom/server';
import App from '../src/App.jsx';
import { LOCALES, langOf, pathFor, routeForPath, routes } from '../src/data/routes.js';

const html = renderToString(<App />);

const required = [
  'Tạo video hàng loạt.',
  'Xử lý tự động. Đăng thẳng lên nền tảng.',
  'Affiliate Flow',
  'Reup / Repurpose Flow',
  'AI Review Flow',
  'Chỉ',
  '4 bước',
  'Tiết kiệm thời gian',
  'Local-first',
  'DEMO THỰC TẾ',
  'Video đã tạo',
  '1.490.000đ',
  '3.990.000đ',
  'Coming soon',
  'Đăng ký nhận thông báo',
  'Câu hỏi thường gặp',
  'Đừng dành cả ngày cho những thao tác có thể tự động hóa.',
  '0326012999',
  'autoreelvn.com',
  'HỘ KINH DOANH BQL',
];

const missing = required.filter((token) => !html.includes(token));

/**
 * The English page, rendered the same way.
 *
 * `initialPath` is how the app is told which URL it is pretending to be — in
 * the browser it reads `location`, which Node does not have. Rendering the
 * Vietnamese page is not enough to prove the translation is wired up: a
 * language that never gets selected renders perfectly and shows the wrong
 * words, so this pass asserts English is present *and* that Vietnamese is not.
 */
const enHtml = renderToString(<App initialPath="/en/pricing/" />);

const enRequired = [
  'Create video in bulk.',
  'Simple pricing, from one person to a small team',
  'Choose Personal',
  'Coming soon',
  'Notify me',
  'Frequently asked questions',
  'Videos created',
  '1,490,000₫',
];
const enMissing = enRequired.filter((token) => !enHtml.includes(token));
const leaks = ['Bảng giá đơn giản', 'Câu hỏi thường gặp', 'Video đã tạo'].filter((token) =>
  enHtml.includes(token),
);

// `#main` is the skip link, which is a same-page jump on purpose. Any *other*
// `#` link is a section link that should have become a real path — the exact
// regression this change exists to prevent, and one that is invisible in a
// browser until somebody notices the URL never changes.
const leftoverAnchors = (html.match(/href="#[^"]*"/g) || []).filter((one) => one !== 'href="#main"');

// Structural sanity checks
const structural = [
  ['one <h1>', (html.match(/<h1/g) || []).length === 1],
  ['no leftover #anchor links', leftoverAnchors.length === 0],
  // Built from the route table, so this cannot drift the way a literal would.
  [
    'nav points at every keyword URL',
    routes.every((route) => html.includes(`href="${pathFor(route.key)}"`)),
  ],
  ['has <header>', html.includes('<header')],
  ['has <main', html.includes('<main')],
  ['has <footer', html.includes('<footer')],
  ['10 FAQ buttons', (html.match(/aria-expanded="(true|false)"/g) || []).length >= 10],
  ['no literal "undefined" in output', !html.includes('>undefined<')],
  // `**` is the emphasis marker `RichText` consumes. One left in the output
  // means a marker was never parsed — a typo in the data, or a string that
  // reached the DOM without going through the renderer.
  ['no leftover ** emphasis markers', !html.includes('**') && !enHtml.includes('**')],
  ['English page renders every string', enMissing.length === 0],
  ['English page carries no Vietnamese copy', leaks.length === 0],
  // Every URL the site hands out must resolve back to the route that made it.
  // This is the check that would have caught the English pages 404ing to the
  // home page: the build was fine, the links were right, and the matcher
  // compared the path against the wrong string.
  [
    'every route URL round-trips through the matcher',
    routes.every((route) =>
      LOCALES.every((code) => {
        const path = pathFor(route.key, code);
        const hit = routeForPath(path);
        // …with or without the trailing slash, since both are reachable.
        const loose = routeForPath(path.replace(/\/$/, ''));
        return hit?.key === route.key && loose?.key === route.key && langOf(path) === code;
      }),
    ),
  ],
];

console.log('SSR smoke test\n==============');
console.log(`rendered ${html.length} characters\n`);

let failed = 0;
for (const token of required) {
  const ok = !missing.includes(token);
  if (!ok) failed++;
  console.log(`${ok ? '  ✓' : '  ✗'} content: ${token.slice(0, 52)}`);
}

for (const token of enMissing) {
  failed++;
  console.log(`  ✗ english page is missing: ${token}`);
}
for (const token of leaks) {
  failed++;
  console.log(`  ✗ vietnamese copy leaked onto the english page: ${token}`);
}

for (const [label, ok] of structural) {
  if (!ok) failed++;
  console.log(`${ok ? '  ✓' : '  ✗'} ${label}`);
}

if (failed) {
  console.error(`\n${failed} check(s) FAILED — the app does not render correctly.`);
  process.exit(1);
}
console.log('\nAll checks passed — every component renders without throwing.');

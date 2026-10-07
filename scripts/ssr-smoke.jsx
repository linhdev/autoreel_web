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
  'MOST POPULAR',
  'Câu hỏi thường gặp',
  'Đừng dành cả ngày cho những thao tác có thể tự động hóa.',
  '0326012999',
  'autoreelvn.com',
  'HỘ KINH DOANH BQL',
];

const missing = required.filter((token) => !html.includes(token));

// Structural sanity checks
const structural = [
  ['one <h1>', (html.match(/<h1/g) || []).length === 1],
  ['has <header>', html.includes('<header')],
  ['has <main', html.includes('<main')],
  ['has <footer', html.includes('<footer')],
  ['10 FAQ buttons', (html.match(/aria-expanded="(true|false)"/g) || []).length >= 10],
  ['no literal "undefined" in output', !html.includes('>undefined<')],
];

console.log('SSR smoke test\n==============');
console.log(`rendered ${html.length} characters\n`);

let failed = 0;
for (const token of required) {
  const ok = !missing.includes(token);
  if (!ok) failed++;
  console.log(`${ok ? '  ✓' : '  ✗'} content: ${token.slice(0, 52)}`);
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

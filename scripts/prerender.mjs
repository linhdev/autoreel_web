/**
 * Write the rendered app into every core route's HTML file.
 *
 * `scripts/build-routes.mjs` runs first and gives each route its own file and
 * its own `<head>`. This script then fills the body: the file it leaves behind
 * is a complete page — headline, sections and all — before a single byte of
 * JavaScript runs.
 *
 * **Why a separate pass instead of doing it inside `build-routes.mjs`.** That
 * script also writes `404.html`, which must stay empty of home-page content,
 * and it reads the shell from `dist/index.html` before overwriting it. Doing
 * the injection in a second pass keeps the shell, the 404 and the page bodies
 * from having to know about each other.
 *
 * A missing marker or a missing `<h1>` is a hard failure. The alternative is a
 * build that reports success while shipping the empty `<div>` this exists to
 * remove, and that failure is invisible in a browser (React renders it anyway)
 * and invisible in `curl` unless somebody reads the body.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderRoute } from '../.ssr-tmp/prerender/prerender-entry.js';
import { LOCALES, routes } from '../src/data/routes.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const MARKER = '<div id="root"></div>';

/** The same path `build-routes.mjs` writes: `/` is `dist/index.html`. */
function outFile(slug) {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return clean ? join(DIST, clean, 'index.html') : join(DIST, 'index.html');
}

async function main() {
  let written = 0;

  for (const route of routes) {
    for (const lang of LOCALES) {
      const file = outFile(route.slug[lang]);
      const html = await readFile(file, 'utf8');
      if (!html.includes(MARKER)) {
        throw new Error(
          `${route.slug[lang]} has no ${MARKER} — build-routes.mjs changed shape?`,
        );
      }

      const body = renderRoute(route.slug[lang]);
      if (!body.includes('<h1')) {
        throw new Error(`${route.slug[lang]} rendered without an <h1>`);
      }

      await writeFile(file, html.replace(MARKER, `<div id="root">${body}</div>`), 'utf8');
      written += 1;
    }
  }

  console.log(`prerender: ${written} route file(s) with rendered HTML`);
}

main().catch((error) => {
  console.error(`prerender failed: ${error.message}`);
  process.exit(1);
});

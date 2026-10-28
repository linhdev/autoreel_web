/**
 * A visible breadcrumb trail and its `BreadcrumbList` node.
 *
 * The generated download pages sit three levels deep (`/` → `/downloads/` →
 * `/tai-video-tiktok/`) and had no breadcrumb at all. That is not a ranking
 * factor by itself, but it gives a search result a path instead of a bare URL,
 * and it gives a reader a way back to the hub that does not depend on the top
 * navigation.
 *
 * **One function, two outputs, one set of names.** The visible trail and the
 * structured data are built from the same `[name, path]` pairs, so they cannot
 * drift into saying different things. A `null` path marks the current page:
 * it renders as text and carries `aria-current`, and still appears in the JSON
 * because a BreadcrumbList's last item is the page itself.
 *
 * Paths are site-relative; the structured data gets absolute URLs because a
 * crawler reading a page two folders down has no base to resolve against.
 */
import { SITE_URL } from '../../src/data/routes.js';
import { esc } from './site-shell.mjs';

/**
 * @param {object} options
 * @param {'vi'|'en'} options.lang
 * @param {[string, string|null][]} options.items  `[name, path]`, root first
 * @returns {{ nav: string, script: string }}
 */
export function breadcrumbTrail({ lang, items }) {
  const separator = '<span class="ar-crumbs-sep" aria-hidden="true">/</span>';
  const parts = items.map(([name, path]) => {
    if (!path) return `<span aria-current="page">${esc(name)}</span>`;
    return `<a href="${esc(path)}">${esc(name)}</a>`;
  });

  const nav = `<nav class="ar-crumbs" aria-label="${lang === 'en' ? 'Breadcrumb' : 'Đường dẫn'}">${parts.join(separator)}</nav>`;

  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: path ? (path.startsWith('http') ? path : `${SITE_URL}${path}`) : undefined,
    })),
  };
  // The last item is the current page; `item` is optional in schema.org, and
  // Google's examples omit it for the current page, so drop the key rather
  // than serialising `undefined` (which JSON.stringify already omits).
  const script = `<script type="application/ld+json">\n${JSON.stringify(json, null, 2).replace(/</g, '\\u003c')}\n    </script>`;

  return { nav, script };
}

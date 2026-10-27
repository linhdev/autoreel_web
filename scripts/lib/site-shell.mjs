/**
 * The parts of a generated page that are the same on every generated page.
 *
 * Two kinds of page on this site are real HTML written after `vite build`
 * rather than rendered by React: an article (`scripts/build-posts.mjs`) and a
 * documentation topic (`scripts/build-docs.mjs`). They share a header, a
 * footer, the escaper, and the two helpers that find the hashed stylesheet in
 * `dist/index.html`. Those five things used to live inside `build-posts.mjs`,
 * which was fine while there was one of them.
 *
 * **Why it was extracted rather than copied.** The header is the piece that
 * must not drift: the README's own promise is that "a link added to the site's
 * nav appears here too", and two copies of it is two places to add the next
 * link to, one of which will be forgotten. There is also a language dimension
 * now that there was not before - the blog is Vietnamese-only, the docs are
 * both - and a language dimension is exactly the kind of thing that gets
 * handled properly in one copy and half-handled in the other.
 *
 * Extraction was proved rather than assumed: `npm run build && npm run verify`
 * covers every generated blog page, so the refactor either produced the same
 * markup or it failed loudly. Two differences are intentional and both are
 * noted where they happen - the header's button now says what the site's own
 * header says, and the registered-business block is marked `lang="vi"` on the
 * English pages, which is what `Footer.jsx` already does.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

import { pathFor } from '../../src/data/routes.js';
import {
  businessInfo, footer as footerCopy, navLinks, site, socialLinks, ui,
} from '../../src/data/site.js';

/**

/** Nothing here may put a bare `&` or `<` in the markup. */
export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * One date, as a person reads it: `10/10/2026` in Vietnamese, `10 Oct 2026` in
 * English.
 *
 * The English pages used to print the Vietnamese form, which is not a style
 * difference but a wrong date: `03/11/2026` reads as 3 November to one reader
 * and 11 March to the other, and a blog's whole surface is dates.
 */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function shownDate(iso, lang = 'vi') {
  const [year, month, day] = String(iso).split('-');
  if (lang === 'en') return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
  return `${day}/${month}/${year}`;
}

/**
 * The head elements the landing page already decided on — fonts, icons, the
 * hashed stylesheet — lifted out of the built HTML.
 *
 * Lifted rather than written again because every one of them is a value that
 * changes with a build: the stylesheet's name carries a content hash, and a
 * hand-written `/assets/index.css` would be a 404 on the first deploy after a
 * style change.
 */
export function headAssets(indexHtml) {
  const links = indexHtml.match(/<link\b[^>]*>/g) || [];
  const wanted = links.filter(
    (tag) =>
      /rel="(stylesheet|preconnect|icon|apple-touch-icon|manifest)"/.test(tag) &&
      !/rel="canonical"/.test(tag),
  );
  return `${wanted.map((tag) => `    ${tag}`).join('\n')}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1787558413198473"
            crossorigin="anonymous"></script>`;
}

/**
 * The same elements, with the language's own web manifest.
 *
 * Everywhere else the head is identical between the two languages, which is
 * why this is one substitution rather than a second copy of `headAssets`. The
 * manifest carries `lang`, `dir` and the app's short name, so an English page
 * pointing at the Vietnamese manifest installs an app that calls itself
 * something else.
 */
export function langAssets(assets, lang) {
  if (lang === 'vi') return assets;
  return assets.replace('/site.webmanifest', `/${lang}/site.webmanifest`);
}

/**
 * The same navigation the site's own header draws.
 *
 * **One deliberate difference from the React header it copies**, and it is a
 * fix rather than a change of mind: the button used to read `Liên hệ tư vấn`,
 * typed into this function, while `Navbar.jsx` renders `ui.contact` — which is
 * `Liên hệ`. The generated header is supposed to be the same header; it was
 * the same header with one word added to it, on the one page where nobody was
 * comparing the two side by side.
 *
 * `active` marks the current section. It is the key of a page that is not a
 * route (`blog`, `docs`), so it is compared against the literal links below
 * rather than against a route key.
 */
export function nav(lang, active = '') {
  const links = navLinks[lang]
    .map((link) => {
      // An entry is either a route key or a literal address; `site.js` says
      // which and why. The current-page marker only means anything for the
      // second kind, because the first kind is always the one-pager.
      const href = link.href || pathFor(link.to, lang);
      const here = link.key && link.key === active ? ' aria-current="page"' : '';
      return `          <li><a class="ar-nav-link" href="${href}"${here}>${esc(link.label)}</a></li>`;
    })
    .join('\n');
  // The row and its list are classes rather than inline styles, and that is a
  // fix rather than tidying. Inline styles cannot be reached by a media query,
  // so the eight links sat in a `display:flex` row with a 26-pixel gap at every
  // width - and on a 390-pixel phone the header ran 650 pixels wide and took
  // the whole page with it. Measured on the docs, which are the pages most
  // likely to be read on a phone.
  return `      <header class="ar-nav">
        <div class="ar-container ar-nav-inner">
          <a href="${pathFor('home', lang)}" class="ar-nav-brand" aria-label="${esc(site.name)}">
            <img src="/logo-88.webp" alt="" width="44" height="44" />
            <span class="ar-brand-text">${esc(site.name)}</span>
          </a>
          <nav aria-label="${esc(ui[lang].mainNav)}">
            <ul class="ar-nav-links">
${links}
            </ul>
          </nav>
          <a class="ar-btn ar-btn-primary" href="${pathFor('contact', lang)}">${esc(ui[lang].contact)}</a>
        </div>
      </header>`;
}

export function footer(lang) {
  const copy = footerCopy[lang];
  const links = copy.links
    .map((link) => `<a class="ar-footer-link" href="${link.href || pathFor(link.to, lang)}">${esc(link.label)}</a>`)
    .join('\n            ');
  const registered = businessInfo.lines.map((line) => `<span>${esc(line)}</span>`).join('\n              ');
  // The same two marks the one-pager's footer draws, from the same `path` in
  // `site.js` — this footer has no components to render them with, which is
  // the whole reason the glyph is data rather than a component.
  const social = socialLinks
    .map((one) => `<a class="ar-footer-link" href="${esc(one.href)}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false" style="flex:none"><path d="${esc(one.path)}"/></svg>${esc(one.label)}</a>`)
    .join('\n                ');
  return `      <footer style="padding:34px 0 56px;color:#c9d3eb;font-size:0.9rem">
        <div class="ar-container">
          <div style="border-top:1px solid var(--line);padding-top:26px;display:flex;flex-wrap:wrap;gap:28px;justify-content:space-between">
            <div style="max-width:22rem">
              <div style="display:flex;align-items:center;gap:12px;font-size:1.22rem;font-weight:900">
                <img src="/logo-88.webp" alt="" width="44" height="44" style="height:44px;width:44px;border-radius:999px;object-fit:cover" />
                <span class="ar-brand-text">${esc(site.name)}</span>
              </div>
              <div style="margin-top:8px">${esc(site.tagline)}</div>
              <div lang="vi" style="margin-top:14px;display:grid;gap:4px;border-top:1px solid var(--line);padding-top:14px;font-size:0.84rem;color:var(--muted)">
                <strong style="color:var(--text)">${esc(businessInfo.name)}</strong>
              ${registered}
              </div>
            </div>
            <div>
              <strong style="color:var(--text)">${esc(copy.columns.links)}</strong>
              <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px 14px;max-width:20rem">
            ${links}
              </div>
            </div>
            <div>
              <strong style="color:var(--text)">${esc(copy.columns.follow)}</strong>
              <div style="margin-top:12px;display:grid;gap:6px">
                ${social}
              </div>
            </div>
            <div>
              <strong style="color:var(--text)">${esc(copy.columns.contact)}</strong>
              <div style="margin-top:12px;display:grid;gap:6px">
                <a class="ar-footer-link" href="mailto:${esc(site.email)}">${esc(site.email)}</a>
                <a class="ar-footer-link" href="${esc(site.zaloUrl)}" rel="noopener">Zalo: ${esc(site.phone)}</a>
                <a class="ar-footer-link" href="${esc(site.whatsappUrl)}" rel="noopener">WhatsApp: ${esc(site.phone)}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>`;
}

export async function write(path, contents) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, contents, 'utf8');
}

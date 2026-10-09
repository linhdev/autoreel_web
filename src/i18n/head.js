/**
 * Keep the `<head>` in step with the address bar.
 *
 * Every route ships its own static HTML with the right tags already in it (see
 * `scripts/build-routes.mjs`), so this is not what a crawler reads on a cold
 * load — it is what a *person* gets when they click through the page without
 * reloading. Without it, navigating from the home page to `/bang-gia-phan-mem-tao-video`
 * would leave the tab saying the home page's title, and a bookmarked or shared
 * link would preview the wrong thing.
 */
import { LOCALE_TAGS, LOCALES, SITE_URL, alternateFor, absolute, pathFor } from '../data/routes.js';

/** Replace a `<meta>` by selector, or add it if the built HTML did not have one. */
function setMeta(selector, attrs) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }
  for (const [name, value] of Object.entries(attrs)) tag.setAttribute(name, value);
}

function setLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function setHreflang() {
  for (const tag of document.head.querySelectorAll('link[rel="alternate"][hreflang]')) {
    tag.remove();
  }
}

export function syncHead(route, lang) {
  if (typeof document === 'undefined') return;

  const copy = route.meta[lang] || route.meta.vi;
  const url = absolute(route.slug[lang]);
  const tags = LOCALE_TAGS[lang] || LOCALE_TAGS.vi;

  document.title = copy.title;
  document.documentElement.lang = tags.html;

  setMeta('meta[name="description"]', { name: 'description', content: copy.description });
  setMeta('meta[property="og:title"]', { property: 'og:title', content: copy.title });
  setMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: copy.description,
  });
  setMeta('meta[property="og:url"]', { property: 'og:url', content: url });
  setMeta('meta[property="og:locale"]', { property: 'og:locale', content: tags.og });
  setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: copy.title });
  setMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: copy.description,
  });
  setLink('canonical', url);

  setHreflang();
  if (LOCALES.length < 2) return;

  // Only advertised once the other language really exists — see `LOCALES`.
  const other = alternateFor(route, lang);
  setMeta('meta[property="og:locale:alternate"]', {
    property: 'og:locale:alternate',
    content: LOCALE_TAGS[other.lang].og,
  });
  for (const code of LOCALES) {
    const tag = document.createElement('link');
    tag.setAttribute('rel', 'alternate');
    tag.setAttribute('hreflang', LOCALE_TAGS[code].html);
    tag.setAttribute('href', absolute(pathFor(route.key, code)));
    document.head.appendChild(tag);
  }
}

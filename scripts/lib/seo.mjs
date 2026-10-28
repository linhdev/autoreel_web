/**
 * The few head values every generated page shares.
 *
 * The builders still write their own `<head>` — they have different OG types,
 * different image cards and different page-specific schema — but three things
 * must not drift: the robots directive, the site-wide JSON-LD graph, and the
 * language's social card. They live here so a change is one edit, not eight.
 */
import { SITE_URL } from '../../src/data/routes.js';
import {
  breadcrumbNode, graph, jsonLdScript, organizationNode, personNode, webPageNode, websiteNode,
} from '../../src/data/schema.js';

/**
 * `max-image-preview:large` is what lets Google show a full-width image for
 * this page in Discover and in AI answers; without it the preview is a
 * thumbnail. `max-snippet:-1` and `max-video-preview:-1` remove the default
 * length caps for the same reason: the site wants its answers quoted in full.
 */
export const ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

/** No page that should not rank gets the large-preview directive. */
export const ROBOTS_NOINDEX = 'noindex, follow';

export const OG_IMAGE = {
  vi: '/og-image.png',
  en: '/og-image-en.png',
};

export const OG_IMAGE_ALT = {
  vi: 'AutoReel — nền tảng tự động hoá nội dung video',
  en: 'AutoReel — AI content automation platform',
};

/**
 * The graph on every page: who publishes it, what the site is, which page this
 * is, and how to walk back to the root.
 *
 * `type` is the page type (`WebPage`, `AboutPage`, `ContactPage`, …).
 * `breadcrumbs` is `[name, absoluteUrl]` pairs, root first.
 */
export function siteGraph({ lang, url, title, description, type = 'WebPage', breadcrumbs }) {
  const crumb = breadcrumbs?.length ? breadcrumbNode(breadcrumbs) : undefined;
  return graph(
    organizationNode(),
    personNode(),
    websiteNode(),
    webPageNode({
      url,
      name: title,
      description,
      lang,
      type,
      breadcrumb: crumb ? { '@id': `${url}#breadcrumb` } : undefined,
    }),
    crumb ? { ...crumb, '@id': `${url}#breadcrumb` } : undefined,
  );
}

/** The same graph as a ready-to-insert `<script>` tag. */
export function siteGraphScript(options) {
  return jsonLdScript(siteGraph(options));
}

/** `[name, path]` -> `[name, absolute URL]`. */
export function crumbsFor(lang, items) {
  return items.map(([name, path]) => [
    name,
    path.startsWith('http') ? path : `${SITE_URL}${path}`,
  ]);
}

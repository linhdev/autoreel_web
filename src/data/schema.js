/**
 * Schema.org nodes shared by every page.
 *
 * Google's guidance is blunt that structured data is not a ranking factor and
 * that no special markup is needed for AI features. It is still the cheapest
 * way to make the site's facts unambiguous to every parser: one AutoReel
 * (Organization), one website, one author, and a breadcrumb trail that matches
 * the visible navigation. That matters more for entity resolution — knowing
 * that `autoreelvn.com`, the YouTube channel and the Facebook Page are the same
 * thing — than for any rich result.
 *
 * **One id per entity, reused by reference.** `@id` values are absolute URLs
 * with a fragment. A page's `publisher` points at `#organization` instead of
 * repeating the name and logo, so a parser merges the nodes rather than
 * treating each page as a different company.
 *
 * The nodes are plain objects rather than JSON strings: the builders compose
 * them with their own page-specific node and serialise once, which keeps the
 * escaping (and the `<` → `\u003c` guard) in one place.
 */
import { SITE_URL } from './routes.js';
import { businessInfo, founder, site, socialLinks } from './site.js';

/** Absolute URLs, so every builder agrees on the spelling. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#founder`;
export const LOGO_URL = `${SITE_URL}/favicon-192.png`;

const SOCIAL_PROFILES = [
  ...socialLinks.map((one) => one.href),
  site.linkedinUrl,
];

/** The person whose first-hand experience the articles are written from. */
export function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: founder.name,
    jobTitle: founder.jobTitle,
    // The About page is where the claim is checkable; LinkedIn is the same
    // identity elsewhere, so it belongs in `sameAs` rather than replacing it.
    url: `${SITE_URL}${founder.about.vi}`,
    description:
      'Founder of AutoReel, a local-first application for creating and publishing videos in bulk.',
    knowsAbout: [
      'Video automation',
      'AI content creation',
      'Shopee affiliate marketing',
      'Facebook Reels',
      'Vietnamese voice-over',
    ],
    sameAs: [site.linkedinUrl],
    worksFor: { '@id': ORG_ID },
  };
}

/**
 * The business behind the brand.
 *
 * `legalName` is the registered household business, which is deliberately not
 * the same string as the product name: a receipt and a homepage are allowed to
 * differ, and pretending they are the same makes the address on the invoice
 * look invented.
 */
export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    legalName: businessInfo.name,
    url: SITE_URL,
    // The registration date and number are printed in the footer and on the
    // About page; repeating them here is what lets a parser connect the brand
    // to the registered household business without scraping prose.
    foundingDate: '2026-05-21',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Business registration number',
      value: '037098008905',
    },
    slogan: site.tagline,
    brand: { '@type': 'Brand', name: site.name },
    areaServed: { '@type': 'Country', name: 'Vietnam' },
    knowsAbout: [
      'Video automation',
      'AI content creation',
      'Batch video production',
      'Shopee affiliate marketing',
      'Facebook Reels',
      'Vietnamese voice-over',
    ],
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 192,
      height: 192,
    },
    description:
      'AutoReel is a local-first Windows and macOS application that creates, processes and publishes videos in bulk.',
    email: site.email,
    telephone: '+84326012999',
    sameAs: SOCIAL_PROFILES,
    founder: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hà Nội',
      addressCountry: 'VN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: site.email,
      telephone: '+84326012999',
      availableLanguage: ['vi', 'en'],
    },
  };
}

/** The site itself; one node, referenced by every WebPage. */
export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: site.name,
    url: SITE_URL,
    inLanguage: ['vi', 'en'],
    publisher: { '@id': ORG_ID },
  };
}

/**
 * A page node. `type` lets a builder say AboutPage or ContactPage without
 * copying the rest of the shape.
 */
export function webPageNode({ url, name, description, lang, type = 'WebPage', breadcrumb, mainEntity }) {
  const node = {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: lang,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
  if (breadcrumb) node.breadcrumb = breadcrumb;
  if (mainEntity) node.mainEntity = mainEntity;
  return node;
}

/**
 * A breadcrumb trail from `[name, url]` pairs. The URLs are absolute because
 * the same helper serves pages built at different depths (a docs topic two
 * folders down and the home page at the root).
 */
export function breadcrumbNode(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, url], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: url,
    })),
  };
}

/** A FAQ block from `[question, answer]` pairs, as the templates store them. */
export function faqNode(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

/**
 * The demo video, which is a real file on this site rather than a YouTube
 * embed. `uploadDate` is the recording date, not the build date.
 */
export function videoNode({ name, description, thumbnail, contentUrl, uploadDate, duration }) {
  return {
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: thumbnail,
    uploadDate,
    duration,
    contentUrl,
    publisher: { '@id': ORG_ID },
  };
}

/** `@context` plus a flattened graph; callers pass nodes or arrays of nodes. */
export function graph(...nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.flat().filter(Boolean),
  };
}

/** A JSON-LD `<script>` ready to drop into a head. `<` is escaped. */
export function jsonLdScript(data) {
  return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2).replace(/</g, '\\u003c')}\n    </script>`;
}

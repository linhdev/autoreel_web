/**
 * Write the blog: one real HTML file per article, and the index that lists them.
 *
 * `vite build` knows nothing about these pages. They are not React and they are
 * not the one-pager — an article is a document, and the reason it is written out
 * here as static HTML is the same reason `build-routes.mjs` writes the section
 * URLs as real files: a link preview on Zalo or Facebook does not run
 * JavaScript, and neither does the first pass of most crawlers. A blog post that
 * only exists after the bundle boots is a blog post with no title.
 *
 * What it borrows from the landing page, rather than duplicating:
 *
 *   - the compiled stylesheet, found by reading the built `dist/index.html`, so
 *     the blog cannot be a version behind the site it belongs to;
 *   - the design tokens and the `ar-` component classes, from `globals.css`;
 *   - the navigation, from `src/data/site.js`, so a link added to the site's nav
 *     appears here too;
 *   - the contact details and the registered business lines, from the same file.
 *
 * Run: `node scripts/build-posts.mjs` (or `npm run build`, which chains it).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { BLOG, postPath, posts, relatedPosts } from '../src/data/posts.js';
import { SITE_URL, absolute, pathFor } from '../src/data/routes.js';
import { businessInfo, navLinks, site } from '../src/data/site.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

/** Nothing here may put a bare `&` or `<` in the markup. */
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** One article's date, as a person reads it: `10/10/2026`. */
function shownDate(iso) {
  const [year, month, day] = String(iso).split('-');
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
function headAssets(indexHtml) {
  const links = indexHtml.match(/<link\b[^>]*>/g) || [];
  const wanted = links.filter(
    (tag) =>
      /rel="(stylesheet|preconnect|icon|apple-touch-icon|manifest)"/.test(tag) &&
      !/rel="canonical"/.test(tag),
  );
  return wanted.map((tag) => `    ${tag}`).join('\n');
}

/** The same navigation the site's own header draws. */
function nav(active = '') {
  const links = navLinks.vi
    .map(
      (link) =>
        `          <li><a class="ar-nav-link" href="${pathFor(link.to)}">${esc(link.label)}</a></li>`,
    )
    .join('\n');
  return `      <header class="ar-nav">
        <div class="ar-container" style="display:flex;height:var(--nav-h);align-items:center;justify-content:space-between;gap:24px">
          <a href="/" style="display:flex;align-items:center;gap:12px;font-size:1.3rem;font-weight:900;letter-spacing:-0.02em" aria-label="${esc(site.name)}">
            <img src="/logo-88.webp" alt="" width="44" height="44" style="height:44px;width:44px;border-radius:999px;object-fit:cover" />
            <span class="ar-brand-text">${esc(site.name)}</span>
          </a>
          <nav aria-label="Điều hướng chính">
            <ul style="display:flex;align-items:center;gap:26px;list-style:none;margin:0;padding:0">
${links}
              <li><a class="ar-nav-link" href="${BLOG.path}"${active === 'blog' ? ' aria-current="page"' : ''}>Blog</a></li>
            </ul>
          </nav>
          <a class="ar-btn ar-btn-primary" href="${pathFor('contact')}">Liên hệ tư vấn</a>
        </div>
      </header>`;
}

function footer() {
  const links = navLinks.vi
    .map((link) => `<a class="ar-footer-link" href="${pathFor(link.to)}">${esc(link.label)}</a>`)
    .join('\n            ');
  const registered = businessInfo.lines.map((line) => `<span>${esc(line)}</span>`).join('\n              ');
  return `      <footer style="padding:34px 0 56px;color:#c9d3eb;font-size:0.9rem">
        <div class="ar-container">
          <div style="border-top:1px solid var(--line);padding-top:26px;display:flex;flex-wrap:wrap;gap:28px;justify-content:space-between">
            <div style="max-width:22rem">
              <div style="display:flex;align-items:center;gap:12px;font-size:1.22rem;font-weight:900">
                <img src="/logo-88.webp" alt="" width="44" height="44" style="height:44px;width:44px;border-radius:999px;object-fit:cover" />
                <span class="ar-brand-text">${esc(site.name)}</span>
              </div>
              <div style="margin-top:8px">${esc(site.tagline)}</div>
              <div style="margin-top:14px;display:grid;gap:4px;border-top:1px solid var(--line);padding-top:14px;font-size:0.84rem;color:var(--muted)">
                <strong style="color:var(--text)">${esc(businessInfo.name)}</strong>
              ${registered}
              </div>
            </div>
            <div>
              <strong style="color:var(--text)">Liên kết</strong>
              <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px 14px;max-width:20rem">
            ${links}
              </div>
            </div>
            <div>
              <strong style="color:var(--text)">Liên hệ</strong>
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

/** One block of an article's body. Every string is escaped on the way in. */
function block(one) {
  if (one.h2) return `        <h2>${esc(one.h2)}</h2>`;
  if (one.p) {
    // A blank line inside one paragraph is an author asking for two, and the
    // alternative — a second `{ p }` — reads as a new section in the source.
    return one.p
      .split('\n\n')
      .map((part) => `        <p>${esc(part.trim())}</p>`)
      .join('\n');
  }
  if (one.ul) {
    return `        <ul>\n${one.ul.map((item) => `          <li>${esc(item)}</li>`).join('\n')}\n        </ul>`;
  }
  if (one.ol) {
    return `        <ol>\n${one.ol.map((item) => `          <li>${esc(item)}</li>`).join('\n')}\n        </ol>`;
  }
  if (one.note) return `        <div class="ar-post-note">${esc(one.note)}</div>`;
  throw new Error(`unknown article block: ${JSON.stringify(one).slice(0, 80)}`);
}

function faqBlock(post) {
  if (!post.faq?.length) return '';
  const items = post.faq
    .map(
      (one) =>
        `          <details>\n            <summary>${esc(one.q)}</summary>\n            <p>${esc(one.a)}</p>\n          </details>`,
    )
    .join('\n');
  return `        <div class="ar-post-faq">
          <h2>Câu hỏi thường gặp</h2>
${items}
        </div>`;
}

function relatedBlock(post) {
  const others = relatedPosts(post.slug);
  if (!others.length) return '';
  const cards = others
    .map(
      (one) => `            <article class="ar-card ar-blog-card">
              <div class="ar-blog-meta"><span>${esc(one.tag)}</span><span>${esc(shownDate(one.date))}</span></div>
              <h3><a href="${postPath(one.slug)}">${esc(one.title)}</a></h3>
              <p>${esc(one.description)}</p>
            </article>`,
    )
    .join('\n');
  return `      <section class="ar-section" style="padding-top:0">
        <div class="ar-container">
          <h2 style="font-size:1.5rem;font-weight:850;margin:0 0 18px">Bài khác</h2>
          <div class="ar-blog-grid">
${cards}
          </div>
        </div>
      </section>`;
}

/** The band every page ends with, so an article can be acted on where it ends. */
function cta() {
  return `        <div class="ar-post-cta">
          <h2>Tự động hoá phần lặp lại</h2>
          <p>AutoReel làm phần lớn công đoạn trong các bài trên: đọc sản phẩm, viết kịch bản, dựng video, rồi đăng lên Shopee Video và Facebook/Reels. Giấy phép vĩnh viễn, không phí thuê bao hàng tháng.</p>
          <div class="ar-post-actions">
            <a class="ar-btn ar-btn-primary" href="${pathFor('pricing')}">Xem bảng giá</a>
            <a class="ar-btn ar-btn-secondary" href="${pathFor('contact')}">Nhận tư vấn</a>
          </div>
        </div>`;
}

function structuredData(post, url) {
  const graph = [
    {
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: 'vi',
      articleSection: post.tag,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: site.name, url: SITE_URL },
      publisher: { '@type': 'Organization', name: site.name, url: SITE_URL },
      image: `${SITE_URL}/og-image.png`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: BLOG.heading, item: absolute(BLOG.path) },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (post.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: post.faq.map((one) => ({
        '@type': 'Question',
        name: one.q,
        acceptedAnswer: { '@type': 'Answer', text: one.a },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

function document_({ title, description, url, assets, body, ld }) {
  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#070B1A" />

    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${esc(url)}" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="${esc(site.name)}" />

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:locale" content="vi_VN" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${SITE_URL}/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${SITE_URL}/og-image.png" />

${assets}

    <style>
      html,
      body {
        margin: 0;
        background: #070b1a;
        color: #f8faff;
      }
    </style>

    <script type="application/ld+json">
${JSON.stringify(ld, null, 2).replace(/</g, '\\u003c')}
    </script>
  </head>
  <body>
${body}
  </body>
</html>
`;
}

function articlePage(post, assets) {
  const url = absolute(postPath(post.slug));
  const body = `${nav()}

    <main id="main">
      <article class="ar-post">
        <div class="ar-container">
          <div class="ar-post-head">
            <a class="ar-post-back" href="${BLOG.path}">← ${esc(BLOG.heading)}</a>
            <div class="ar-blog-meta"><span>${esc(post.tag)}</span><span>${esc(shownDate(post.date))}</span><span>${post.minutes} phút đọc</span></div>
            <h1 class="ar-post-title">${esc(post.title)}</h1>
            <p class="ar-post-lead">${esc(post.lead)}</p>
          </div>

          <div class="ar-post-body">
${post.body.map(block).join('\n')}
${faqBlock(post)}
${cta()}
          </div>
        </div>
      </article>

${relatedBlock(post)}
    </main>

${footer()}`;

  return document_({
    title: post.title,
    description: post.description,
    url,
    assets,
    body,
    ld: structuredData(post, url),
  });
}

function indexPage(assets) {
  const cards = posts
    .map(
      (post) => `            <article class="ar-card ar-blog-card">
              <div class="ar-blog-meta"><span>${esc(post.tag)}</span><span>${esc(shownDate(post.date))}</span><span>${post.minutes} phút đọc</span></div>
              <h3><a href="${postPath(post.slug)}">${esc(post.title)}</a></h3>
              <p>${esc(post.description)}</p>
            </article>`,
    )
    .join('\n');

  const body = `${nav('blog')}

    <main id="main">
      <section class="ar-section">
        <div class="ar-container">
          <div class="ar-section-head">
            <h1 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-0.03em;margin:0 0 14px">${esc(BLOG.heading)}</h1>
            <p style="color:var(--muted);line-height:1.7;margin:0">${esc(BLOG.lede)}</p>
          </div>
          <div class="ar-blog-grid">
${cards}
          </div>
        </div>
      </section>
    </main>

${footer()}`;

  return document_({
    title: BLOG.title,
    description: BLOG.description,
    url: absolute(BLOG.path),
    assets,
    body,
    ld: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: BLOG.heading,
      description: BLOG.description,
      url: absolute(BLOG.path),
      inLanguage: 'vi',
      publisher: { '@type': 'Organization', name: site.name, url: SITE_URL },
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: absolute(postPath(post.slug)),
        datePublished: post.date,
      })),
    },
  });
}

async function write(path, contents) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, contents, 'utf8');
}

async function main() {
  const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  const assets = headAssets(indexHtml);
  if (!/rel="stylesheet"/.test(assets)) {
    throw new Error('dist/index.html has no stylesheet — run `vite build` first.');
  }

  const slugs = new Set();
  for (const post of posts) {
    for (const field of ['slug', 'title', 'description', 'date', 'lead', 'tag']) {
      if (!post[field]) throw new Error(`${post.slug || '?'} is missing ${field}`);
    }
    if (slugs.has(post.slug)) throw new Error(`two articles share the slug ${post.slug}`);
    slugs.add(post.slug);
    if (post.title.length > 62) {
      throw new Error(`${post.slug}: title is ${post.title.length} characters, over 62`);
    }
    await write(join(DIST, 'blog', post.slug, 'index.html'), articlePage(post, assets));
  }

  await write(join(DIST, 'blog', 'index.html'), indexPage(assets));
  console.log(`build-posts: ${posts.length} article(s) + /blog/ index`);
}

main().catch((error) => {
  console.error(`build-posts failed: ${error.message}`);
  process.exit(1);
});

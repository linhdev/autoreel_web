import { useCopy } from '../../i18n/copy.jsx';
import { Link, useHref, useRouter } from '../../i18n/router.jsx';
import { alternateFor, LOCALES, LOCALE_TAGS, pathFor } from '../../data/routes.js';

export default function Footer() {
  const href = useHref();
  const { route, lang } = useRouter();
  const { businessInfo, footer, site } = useCopy();

  return (
    <footer className="pb-14 pt-9 text-[0.9rem] text-[#c9d3eb]">
      <div className="ar-container">
        <div className="flex flex-wrap justify-between gap-8 border-t border-[var(--line)] pt-7">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 text-[1.22rem] font-black tracking-[-0.02em]">
              <img
                src="/logo-88.webp"
                alt=""
                width="44"
                height="44"
                loading="lazy"
                decoding="async"
                className="h-11 w-11 rounded-full object-cover shadow-[0_0_22px_rgba(91,120,255,0.35)]"
              />
              <span className="ar-brand-text">{site.name}</span>
            </div>
            <div className="mt-2">{site.tagline}</div>

            {/* The registration is Vietnamese whatever the page language is —
                it is the wording on the certificate, so it is marked as
                Vietnamese and left alone rather than translated into
                something no authority ever wrote. */}
            <div
              lang="vi"
              className="mt-4 grid gap-1 border-t border-[var(--line)] pt-4 text-[0.84rem] leading-relaxed text-[var(--muted)]"
            >
              <strong className="tracking-[0.02em] text-[var(--text)]">{businessInfo.name}</strong>
              {businessInfo.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>

          <div>
            <strong className="text-[var(--text)]">{footer.columns.links}</strong>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
              {footer.links.map((link) => (
                <li key={link.to}>
                  <Link to={href(link.to)} className="ar-footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* The blog is static pages rather than a route of this app —
                  see the note on the same link in `Navbar.jsx`. */}
              <li>
                <a href="/blog/" className="ar-footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <strong className="text-[var(--text)]">{footer.columns.contact}</strong>
            <div className="mt-3 grid gap-1">
              <a href={`mailto:${site.email}`} className="ar-footer-link">
                {site.email}
              </a>
              <a
                href={`https://${site.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ar-footer-link"
              >
                {site.domain}
              </a>
              <a
                href={site.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ar-footer-link"
              >
                Zalo / WhatsApp: {site.phone}
              </a>
              {/* Shown without its scheme, the way the domain line above it is:
                  the full https:// is what the href carries, not what a reader
                  needs to see twice. */}
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ar-footer-link"
              >
                LinkedIn: {site.linkedinUrl.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </div>
            {/* The other language, linked from every page. The header switch is
                hidden below 981px on purpose (no room), so this is the one a
                phone can always reach — and it is a plain link, which is what
                lets a crawler find the English pages at all. */}
            {LOCALES.length > 1 ? (
              <p className="mt-5 text-[0.84rem]">
                <Link
                  to={pathFor(route.key, alternateFor(route, lang).lang)}
                  hrefLang={LOCALE_TAGS[alternateFor(route, lang).lang].html}
                  lang={LOCALE_TAGS[alternateFor(route, lang).lang].html}
                  className="ar-footer-link"
                >
                  {alternateFor(route, lang).lang === 'en'
                    ? 'English'
                    : 'Tiếng Việt'}
                </Link>
              </p>
            ) : null}

            <p className="mt-3 text-[0.84rem] text-[var(--muted)]">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

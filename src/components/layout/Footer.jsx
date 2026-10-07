import { businessInfo, footer, site } from '../../data/site.js';

export default function Footer() {
  return (
    <footer className="pb-14 pt-9 text-[0.9rem] text-[var(--muted)]">
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

            <div className="mt-4 grid gap-1 border-t border-[var(--line)] pt-4 text-[0.84rem] leading-relaxed text-[#c9d3eb]">
              <strong className="tracking-[0.02em] text-[var(--text)]">{businessInfo.name}</strong>
              {businessInfo.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>

          <div>
            <strong className="text-[var(--text)]">Liên kết</strong>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="ar-footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <strong className="text-[var(--text)]">Liên hệ</strong>
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
            </div>
            <p className="mt-5 text-[0.84rem] text-[var(--muted)]">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

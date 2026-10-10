import { useEffect, useState } from 'react';
import { AnimatePresence, m, useScroll, useSpring } from 'framer-motion';
import { alternateFor, LOCALES, LOCALE_TAGS, pathFor } from '../../data/routes.js';
import { useCopy } from '../../i18n/copy.jsx';
import { Link, useHref, useRouter } from '../../i18n/router.jsx';
import Icon from '../ui/Icon.jsx';

/**
 * VI | EN.
 *
 * A real `<a href>` to the same section in the other language, not a button
 * that swaps strings in place: the address has to change, because the address
 * is what tells a crawler the two versions exist and what a reader who copies
 * the link is actually sending. It stays hidden while there is only one
 * language to switch to.
 */
function LanguageSwitch({ className = '' }) {
  const { lang, route } = useRouter();
  const { ui } = useCopy();
  if (LOCALES.length < 2) return null;

  return (
    <div className={`flex items-center gap-1 text-[0.82rem] font-bold ${className}`}>
      <span className="sr-only">{ui.languageLabel}</span>
      {LOCALES.map((code) => (
        <Link
          key={code}
          to={pathFor(route.key, code)}
          hrefLang={LOCALE_TAGS[code].html}
          lang={LOCALE_TAGS[code].html}
          aria-current={code === lang ? 'true' : undefined}
          className={`rounded-md px-2 py-1 uppercase tracking-[0.06em] transition-colors ${
            code === lang
              ? 'bg-white/[0.09] text-[var(--text)]'
              : 'text-[var(--muted)] hover:text-[var(--text)]'
          }`}
        >
          {code}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const href = useHref();
  const { route, lang } = useRouter();
  const { navLinks, site, ui } = useCopy();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  // Passive scroll listener with rAF throttling — no layout thrash.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu on Escape, and lock the page behind it.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`ar-nav ${scrolled ? 'ar-nav-scrolled' : ''}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        {ui.skipToContent}
      </a>

      <div className="ar-container flex h-[var(--nav-h)] items-center justify-between gap-6">
        <Link
          to={href('home')}
          className="flex items-center gap-3 text-[1.3rem] font-black tracking-[-0.02em]"
          aria-label={`${site.name} — ${ui.backToTop}`}
        >
          <img
            src="/logo-88.webp"
            alt=""
            width="44"
            height="44"
            className="h-11 w-11 rounded-full object-cover shadow-[0_0_22px_rgba(91,120,255,0.35)]"
          />
          <span className="ar-brand-text">{site.name}</span>
        </Link>

        <nav aria-label={ui.mainNav} className="hidden min-[981px]:block">
          <ul className="flex items-center gap-[26px]">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={href(link.to)}
                  className="ar-nav-link"
                  aria-current={route.key === link.to ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* A plain anchor, not the router's `Link`: the blog is not one of
                this app's routes — its pages are written as static HTML by
                `scripts/build-posts.mjs`, so this is a normal navigation and
                the router must not try to answer it. */}
            <li>
              <a className="ar-nav-link" href="/blog/">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch className="hidden min-[981px]:flex" />

          <Link
            to={href('contact')}
            className="ar-btn ar-btn-primary hidden px-4 py-3 text-[0.95rem] min-[420px]:inline-flex"
          >
            {ui.contact}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-white/[0.045] transition-colors hover:bg-white/[0.08] min-[981px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <m.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--line)] bg-[rgba(7,11,26,0.97)] min-[981px]:hidden"
          >
            <nav aria-label={ui.mobileNav} className="ar-container py-4">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={href(link.to)}
                      onNavigate={() => setMenuOpen(false)}
                      className="block border-b border-[var(--line-soft)] py-3.5 text-[1.02rem] font-bold text-[#dbe3f7]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="/blog/"
                    className="block border-b border-[var(--line-soft)] py-3.5 text-[1.02rem] font-bold text-[#dbe3f7]"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <Link
                to={href('contact')}
                onNavigate={() => setMenuOpen(false)}
                className="ar-btn ar-btn-primary mt-4 w-full"
              >
                {ui.contact}
              </Link>

              <LanguageSwitch className="mt-4 justify-center" />
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>

      <m.div className="ar-scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    </header>
  );
}

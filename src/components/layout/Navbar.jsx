import { useEffect, useState } from 'react';
import { AnimatePresence, m, useScroll, useSpring } from 'framer-motion';
import { navLinks, site } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        Bỏ qua điều hướng
      </a>

      <div className="ar-container flex h-[var(--nav-h)] items-center justify-between gap-6">
        <a
          href="#top"
          className="flex items-center gap-3 text-[1.3rem] font-black tracking-[-0.02em]"
          aria-label={`${site.name} — về đầu trang`}
        >
          <img
            src="/logo-88.webp"
            alt=""
            width="44"
            height="44"
            className="h-11 w-11 rounded-full object-cover shadow-[0_0_22px_rgba(91,120,255,0.35)]"
          />
          <span className="ar-brand-text">{site.name}</span>
        </a>

        <nav aria-label="Điều hướng chính" className="hidden min-[981px]:block">
          <ul className="flex items-center gap-[26px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="ar-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="ar-btn ar-btn-primary hidden px-4 py-3 text-[0.95rem] min-[420px]:inline-flex"
          >
            Liên hệ
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-white/[0.045] transition-colors hover:bg-white/[0.08] min-[981px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
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
            <nav aria-label="Điều hướng di động" className="ar-container py-4">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-[var(--line-soft)] py-3.5 text-[1.02rem] font-bold text-[#dbe3f7]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="ar-btn ar-btn-primary mt-4 w-full"
              >
                Liên hệ
              </a>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>

      <m.div className="ar-scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    </header>
  );
}

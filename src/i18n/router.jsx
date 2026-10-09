/**
 * A router small enough to read in one sitting.
 *
 * There are seven URLs, they all render the same page, and the only thing
 * navigation does beyond changing the address is scroll to a section. That is
 * not enough work to justify react-router's weight on a page whose Lighthouse
 * budget is already the tightest constraint on what may be added.
 *
 * What it does have to get right, and does:
 *
 *   Cold load on a deep path. Somebody pastes `/bang-gia-phan-mem-tao-video`
 *   and the page must *start* at the pricing section. Scrolling there smoothly
 *   from the top would be a two-second animation before any content is read, so
 *   the first positioning is an instant jump — `scroll-behavior: smooth` is
 *   suppressed inline for exactly that one call.
 *
 *   Fonts arriving late. Inter is loaded with `display=swap`, so the first paint
 *   uses a fallback and every section moves when the real font lands. A jump
 *   computed at mount therefore lands short. So the jump is repeated once when
 *   `document.fonts.ready` settles — but only if the reader has not scrolled in
 *   the meantime, because at that point moving the page is worse than being off
 *   by a few pixels.
 *
 *   Rendering in Node. `npm run smoke` calls `renderToString(<App />)` with no
 *   browser at all, so nothing here may touch `window` during render. The
 *   provider takes an optional `initialPath` and only reads `location` inside
 *   effects, which never run on the server.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DEFAULT_LANG, homeRoute, langOf, pathFor, routeForPath } from '../data/routes.js';
import { syncHead } from './head.js';

/**
 * Position the page *before* the browser paints.
 *
 * With a plain `useEffect` the first frame is already on screen by the time the
 * scroll runs, so opening `/bang-gia-phan-mem-tao-video` shows the hero for a
 * moment and then snaps — the flash is short but it reads as a broken page.
 * Layout effects run after the DOM is committed and before paint, so the first
 * thing anybody sees is already the right section. The server has no
 * `useLayoutEffect`, hence the swap.
 */
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const RouterContext = createContext({
  path: '/',
  lang: DEFAULT_LANG,
  route: homeRoute,
  navigate: () => {},
});

function currentPath() {
  return typeof window === 'undefined' ? '/' : window.location.pathname;
}

export function RouterProvider({ initialPath, children }) {
  const [path, setPath] = useState(() => initialPath || currentPath());
  // Bumped on every navigation. Clicking a link to the page you are already on
  // leaves `path` unchanged, so without this the click would be swallowed —
  // and "click the logo to get back to the top" is exactly that case.
  const [nav, setNav] = useState(0);

  const navigate = useCallback((next, { replace = false } = {}) => {
    if (typeof window === 'undefined') return;
    if (replace) window.history.replaceState({}, '', next);
    else window.history.pushState({}, '', next);
    setPath(next);
    setNav((count) => count + 1);
  }, []);

  // The back button moves the address bar without telling React; `popstate` is
  // the only notice.
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const onPop = () => {
      setPath(window.location.pathname);
      setNav((count) => count + 1);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const route = useMemo(() => routeForPath(path), [path]);
  const lang = useMemo(() => langOf(path), [path]);

  // An address no route claims — a typo, or an old link. Rather than render the
  // home page at a second URL and let it be indexed twice, put `/` back.
  useEffect(() => {
    if (typeof window === 'undefined' || route) return;
    window.history.replaceState({}, '', '/');
    setPath('/');
  }, [route]);

  const first = useRef(true);
  useIsoLayoutEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const settled = route || homeRoute;
    // A hash on the URL wins over the route's own section, so the old
    // `/#pricing` links people already have keep working.
    const hash = window.location.hash.replace('#', '');
    const target = (hash && document.getElementById(hash) ? hash : null) || settled.section;

    syncHead(settled, lang);

    const jump = scrollTo(target, !first.current);
    first.current = false;

    // See the note at the top: only re-align if the reader has not moved.
    let cancel = false;
    const fonts = document.fonts && document.fonts.ready;
    if (fonts) {
      fonts.then(() => {
        if (cancel || Math.abs(window.scrollY - jump) > 8) return;
        scrollTo(target, false);
      });
    }
    return () => {
      cancel = true;
    };
  }, [route, lang, path, nav]);

  const value = useMemo(() => ({ path, lang, route: route || homeRoute, navigate }), [
    path,
    lang,
    route,
    navigate,
  ]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

/**
 * Scroll to a section id (`null` = the top) and return where it landed, so the
 * caller can tell later whether the reader has moved.
 */
function scrollTo(section, smooth) {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  // An inline `auto` beats the stylesheet's `smooth`; without it the "instant"
  // jump is a slow animation.
  html.style.scrollBehavior = smooth ? '' : 'auto';
  try {
    // No explicit `behavior` on either call: an explicit `'smooth'` would
    // override the `prefers-reduced-motion` rule that turns scrolling off, and
    // the inline style above already says what this particular call wants.
    if (!section) window.scrollTo({ top: 0 });
    else document.getElementById(section)?.scrollIntoView({ block: 'start' });
  } finally {
    html.style.scrollBehavior = previous;
  }
  return window.scrollY;
}

export function useRouter() {
  return useContext(RouterContext);
}

/**
 * Turn a route key into the URL for the language on screen.
 *
 * Links are stored as keys (`to: 'pricing'`) rather than as paths so that a
 * slug change is a one-line edit in `src/data/routes.js`, and so the same entry
 * can point at `/bang-gia-phan-mem-tao-video` or `/en/pricing` depending on
 * where the reader is.
 */
export function useHref() {
  const { lang } = useRouter();
  return useCallback((key) => pathFor(key, lang), [lang]);
}

/**
 * An internal link.
 *
 * It renders a real `<a href>` — so crawlers follow it, middle-click and
 * "copy link address" behave, and the page still works if the script never
 * runs — and only takes over the plain left-click that would otherwise reload
 * the whole document to move a few thousand pixels.
 */
export function Link({ to, onNavigate, children, ...rest }) {
  const { navigate } = useRouter();

  const onClick = (event) => {
    if (onNavigate) onNavigate(event);
    if (event.defaultPrevented) return;
    // Leave modified clicks and non-left buttons to the browser.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    if (rest.target && rest.target !== '_self') return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}

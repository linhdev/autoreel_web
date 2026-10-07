import { useEffect, useRef, useState } from 'react';

/**
 * Count-up that starts the first time the number scrolls into view.
 * - rAF driven (no timers), never re-renders more than once per frame.
 * - Respects prefers-reduced-motion by jumping straight to the final value.
 * - Formats with vi-VN grouping (1.234) to match the rest of the page.
 */
export default function CountUp({ value, duration = 1600, suffix = '', className }) {
  const ref = useRef(null);
  const hasRun = useRef(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof value !== 'number') return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setDisplay(value);
      return undefined;
    }

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || hasRun.current) continue;
          hasRun.current = true;
          observer.disconnect();

          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            // easeOutCubic — fast start, gentle settle
            const eased = 1 - (1 - progress) ** 3;
            setDisplay(Math.round(eased * value));
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  const formatted = display.toLocaleString('vi-VN');

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}

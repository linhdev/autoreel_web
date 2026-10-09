import { useEffect, useRef } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { useCopy } from '../../i18n/copy.jsx';
import Icon from '../ui/Icon.jsx';

const EASE = [0.22, 1, 0.36, 1];

/**
 * The batch counter: 0 → `to` once per cycle, in step with the CSS.
 *
 * It writes to the DOM node directly instead of holding the number in React
 * state. A counter that re-renders sixty times a second would re-render the
 * whole hero — five stations, their text, their icons — for a change of one
 * character. So the loop touches `textContent`, and only when the integer
 * actually moves, which is about three times a second.
 *
 * It also stops when the panel is off screen: an infinite rAF loop is a
 * battery cost, and this one has nothing to say once the hero is scrolled
 * past. `CountUp` uses the same observer for the same reason.
 */
function BatchCounter({ to, cycleMs }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const still =
      typeof window === 'undefined' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined';

    // Stopped means finished, not zero — the CSS holds the same end state.
    if (still) {
      node.textContent = String(to);
      return undefined;
    }

    let frame = 0;
    let shown = -1;
    const start = performance.now();

    const tick = (now) => {
      const value = Math.round((((now - start) % cycleMs) / cycleMs) * to);
      if (value !== shown) {
        node.textContent = String(value);
        shown = value;
      }
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !frame) frame = requestAnimationFrame(tick);
        else if (!entry.isIntersecting && frame) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { threshold: 0 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [to, cycleMs]);

  return <span ref={ref}>0</span>;
}

/**
 * The line: a job moving through five stations.
 *
 * This was five cards joined by a dot of light travelling down a wire. The dot
 * said "something is happening over there"; this says what the product does —
 * work enters, each stage completes, the batch fills, the cycle repeats — and
 * it says it in the place a visitor looks first.
 *
 * All of it is CSS, driven by `--i` on each station (see the note above
 * `.ar-hero-visual` in `globals.css`). There is one JavaScript in here, the
 * counter, and the panel is still a single `role="img"` announced by its
 * `aria-label` — the five titles are scenery for a screen reader, not a list
 * to walk through.
 */
export default function HeroVisual() {
  const prefersReduced = useReducedMotion();
  const { heroFlow, ui, line } = useCopy();

  return (
    <m.div
      className="ar-hero-visual"
      initial={prefersReduced ? false : { opacity: 0, y: 28, scale: 0.985 }}
      animate={prefersReduced ? false : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
      role="img"
      aria-label={ui.heroVisual}
    >
      <div className="ar-line-head">
        <span className="ar-live" />
        {ui.lineRunning}
        <span className="ar-line-count">
          <BatchCounter to={line.batchSize} cycleMs={line.cycleMs} />/{line.batchSize}
        </span>
      </div>

      <ol className="ar-stations">
        {heroFlow.map((node, index) => (
          <li className="ar-station" key={node.icon} style={{ '--i': index }}>
            <span className="ar-station-icon">
              <Icon name={node.icon} size={19} />
            </span>

            <span className="ar-station-text">
              <strong>{node.title}</strong>
              <small>{node.caption}</small>
            </span>

            <span className="ar-station-check">
              <Icon name="Check" size={15} />
            </span>
          </li>
        ))}
      </ol>

      <div className="ar-batch">
        <div className="ar-batch-fill" />
      </div>
    </m.div>
  );
}

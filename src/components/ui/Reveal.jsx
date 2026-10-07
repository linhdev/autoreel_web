import { m, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Trigger point shared by every reveal.
 * A pixel margin (rather than `amount`) is used deliberately: a percentage
 * threshold behaves badly for tall grids on mobile — the first card would sit
 * invisible simply because the whole grid is far taller than the viewport.
 */
const VIEWPORT = { once: true, margin: '0px 0px -70px 0px' };

/**
 * Scroll-triggered fade + slide-up.
 * Only opacity/transform animate, so it stays on the compositor at 60fps.
 * When the visitor prefers reduced motion the wrapper renders a plain element.
 */
export default function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 24,
  duration = 0.6,
  ...rest
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const Tag = m[as] ?? m.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const staggerChild = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** Wrapper that cascades its children into view. Pair with <RevealItem>. */
export function RevealGroup({ children, className, as = 'div', ...rest }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const Tag = m[as] ?? m.div;

  return (
    <Tag
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Child of <RevealGroup>. Inherits the parent's cascade. */
export function RevealItem({ children, className, as = 'div', ...rest }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const Tag = m[as] ?? m.div;

  return (
    <Tag className={className} variants={staggerChild} {...rest}>
      {children}
    </Tag>
  );
}

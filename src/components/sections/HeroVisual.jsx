import { Fragment } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { heroFlow } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Abstract product workflow — INPUT → AUTOREEL → CREATE + PROCESS → VIDEO + CAPTION → PUBLISH.
 *
 * The light trail is pure CSS: every connector carries a pulse animated with a
 * stagger of `--i * 1.2s` inside a 6s cycle, so the light visibly runs down the
 * stack in order and then the sequence repeats. Each node lights up on the same
 * beat via `ar-node-pulse`, also keyed off `--i`.
 */
export default function HeroVisual() {
  const prefersReduced = useReducedMotion();

  return (
    <m.div
      className="ar-hero-visual"
      initial={prefersReduced ? false : { opacity: 0, y: 28, scale: 0.985 }}
      animate={prefersReduced ? false : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
      role="img"
      aria-label="Workflow AutoReel: nguồn vào PRODUCT / VIDEO / IDEA, qua AUTOREEL, qua bước CREATE + PROCESS, tạo FINAL VIDEO + CAPTION và Auto Publish lên SHOPEE / FACEBOOK."
    >
      {/* Soft top highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden="true"
      />

      <ol className="relative m-0 list-none p-0">
        {heroFlow.map((node, index) => (
          <Fragment key={node.title}>
            {index > 0 ? (
              <li aria-hidden="true">
                <div className="ar-connector" style={{ '--i': index - 1 }} />
              </li>
            ) : null}

            <li className="ar-flow-card" style={{ '--i': index }}>
              <span className="ar-flow-icon">
                <Icon name={node.icon} size={21} />
              </span>
              <span className="min-w-0">
                <strong>{node.title}</strong>
                <small>{node.caption}</small>
              </span>
            </li>
          </Fragment>
        ))}
      </ol>
    </m.div>
  );
}

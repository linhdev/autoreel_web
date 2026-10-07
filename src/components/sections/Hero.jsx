import { m, useReducedMotion } from 'framer-motion';
import { hero } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';
import HeroVisual from './HeroVisual.jsx';

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const play = prefersReduced ? false : 'show';

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      {/* Ambient animated glow */}
      <div className="ar-aurora ar-aurora-1" aria-hidden="true" />
      <div className="ar-aurora ar-aurora-2" aria-hidden="true" />
      <div className="ar-aurora ar-aurora-3" aria-hidden="true" />

      <div className="ar-container ar-hero">
        <m.div
          variants={container}
          initial={prefersReduced ? false : 'hidden'}
          animate={play}
        >
          <m.div variants={item}>
            <span className="ar-badge">
              <Icon name="Sparkles" size={14} />
              {hero.badge}
            </span>
          </m.div>

          <m.h1 id="hero-title" variants={item}>
            {hero.headlineLine1}
            <br />
            <span className="ar-gradient-text">{hero.headlineLine2}</span>
          </m.h1>

          <m.p className="ar-hero-lede" variants={item}>
            {hero.subheadline.before}
            <strong>{hero.subheadline.strong1}</strong>
            {hero.subheadline.middle}
            <strong>{hero.subheadline.strong2}</strong>
            {hero.subheadline.after}
          </m.p>

          <m.p className="ar-hero-lede mt-4" variants={item}>
            <strong>{hero.support}</strong>
          </m.p>

          <m.div className="my-7 flex flex-wrap gap-3 max-[680px]:flex-col" variants={item}>
            <a href={hero.primaryCta.href} className="ar-btn ar-btn-primary ar-btn-lg">
              <Icon name="Play" size={17} />
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="ar-btn ar-btn-secondary ar-btn-lg">
              <Icon name="Rocket" size={17} />
              {hero.secondaryCta.label}
            </a>
          </m.div>

          <m.ul className="flex flex-wrap gap-2.5" variants={item}>
            {hero.trustChips.map((chip) => (
              <li key={chip} className="ar-pill">
                <Icon name="Check" size={14} className="text-[var(--green)]" />
                {chip}
              </li>
            ))}
          </m.ul>
        </m.div>

        <HeroVisual />
      </div>
    </section>
  );
}

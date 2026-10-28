import { m } from 'framer-motion';
import { useCopy } from '../../i18n/copy.jsx';
import { Link, useHref, useRouter } from '../../i18n/router.jsx';
import Icon from '../ui/Icon.jsx';
import RichText from '../ui/RichText.jsx';
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
  const href = useHref();
  const { lang, route } = useRouter();
  const { hero } = useCopy();
  // A section route carries its own headline; home keeps the one in `site.js`.
  const copy = route.hero?.[lang] || hero;

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      {/* Ambient animated glow */}
      <div className="ar-aurora ar-aurora-1" aria-hidden="true" />
      <div className="ar-aurora ar-aurora-2" aria-hidden="true" />
      <div className="ar-aurora ar-aurora-3" aria-hidden="true" />

      <div className="ar-container ar-hero">
        {/* `initial={false}` is deliberate: the prerendered HTML must show the
            headline, not an opacity-0 element waiting for JavaScript. The hero
            is the LCP on every route, so there is nothing to animate in. */}
        <m.div variants={container} initial={false} animate="show">
          <m.div variants={item}>
            <span className="ar-badge">
              <Icon name="Sparkles" size={14} />
              {copy.badge}
            </span>
          </m.div>

          <m.h1 id="hero-title" variants={item}>
            {copy.headlineLine1}
            <br />
            <span className="ar-gradient-text">{copy.headlineLine2}</span>
          </m.h1>

          <m.p className="ar-hero-lede" variants={item}>
            {/* One sentence with `**` around the two phrases that stay bold.
                The words used to arrive pre-split into five fields, which only
                worked while the sentence was Vietnamese — see RichText.jsx. */}
            <RichText text={copy.subheadline} tag="strong" />
          </m.p>

          <m.p className="ar-hero-lede mt-4" variants={item}>
            <strong>{copy.support}</strong>
          </m.p>

          <m.div className="my-7 flex flex-wrap gap-3 max-[680px]:flex-col" variants={item}>
            <Link to={href(hero.primaryCta.to)} className="ar-btn ar-btn-primary ar-btn-lg">
              <Icon name="Play" size={17} />
              {hero.primaryCta.label}
            </Link>
            <Link to={href(hero.secondaryCta.to)} className="ar-btn ar-btn-secondary ar-btn-lg">
              <Icon name="Rocket" size={17} />
              {hero.secondaryCta.label}
            </Link>
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

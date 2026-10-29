import { useCopy } from '../../i18n/copy.jsx';
import { Link, useHref } from '../../i18n/router.jsx';
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import RichText from '../ui/RichText.jsx';

/**
 * The one section on the page that is not a job but the thing above the jobs.
 *
 * AI Vận Hành was already a feature and already had a page of its own, but on
 * the home page it appeared nowhere — a reader scrolled past the flows, the
 * twelve single-job screens and the pricing table without learning that the
 * app can run the whole loop unattended. This block is what fixes that: it is
 * the first section after the hero, it wears a permanent gradient border
 * instead of the hover glow the other cards have, and its right half is the
 * loop itself drawn as a ring of six steps.
 *
 * The ring is CSS only. Each step is an `<li>` carrying `--i`; the stylesheet
 * rotates it into place around the centre and counter-rotates the chip so the
 * label stays upright. No layout JavaScript, nothing to measure on resize.
 */
export default function AIOperations() {
  const href = useHref();
  const { aiOperations } = useCopy();

  return (
    <section id="ai-operations" className="ar-section ar-signature" aria-labelledby="ai-operations-title">
      <div className="ar-container">
        <Reveal className="ar-signature-panel" y={30}>
          <div className="ar-signature-copy">
            <span className="ar-signature-kicker">
              <Icon name="Sparkles" size={14} />
              {aiOperations.kicker}
            </span>

            <h2 id="ai-operations-title">
              <RichText text={aiOperations.title} />
            </h2>

            <p className="ar-signature-lede">{aiOperations.lede}</p>

            <ul className="ar-signature-points">
              {aiOperations.points.map((point) => (
                <li key={point}>
                  <Icon name="Check" size={16} aria-hidden="true" />
                  <span>
                    <RichText text={point} tag="strong" />
                  </span>
                </li>
              ))}
            </ul>

            <div className="ar-signature-actions">
              <Link to={href(aiOperations.primaryCta.to)} className="ar-btn ar-btn-primary">
                <Icon name="ArrowRight" size={17} />
                {aiOperations.primaryCta.label}
              </Link>
              <Link to={href(aiOperations.secondaryCta.to)} className="ar-btn ar-btn-secondary">
                <Icon name="Play" size={16} />
                {aiOperations.secondaryCta.label}
              </Link>
            </div>

            <p className="ar-signature-note">
              <Icon name="Check" size={13} aria-hidden="true" />
              {aiOperations.note}
            </p>
          </div>

          <div className="ar-signature-loop">
            <p className="ar-signature-loop-label">{aiOperations.loopLabel}</p>

            <div className="ar-signature-orbit">
              <span className="ar-signature-ring" aria-hidden="true" />
              <span className="ar-signature-core" aria-hidden="true">
                <strong>{aiOperations.loopCenter.strong}</strong>
                <small>{aiOperations.loopCenter.small}</small>
              </span>

              <ol className="ar-signature-steps">
                {aiOperations.steps.map((step, index) => (
                  <li key={step.icon} style={{ '--i': index }}>
                    <span className="ar-signature-chip">
                      <Icon name={step.icon} size={17} aria-hidden="true" />
                      {step.title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

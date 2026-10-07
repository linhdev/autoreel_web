import { finalCta } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function CTA() {
  return (
    <section id="contact" className="ar-section" aria-labelledby="cta-title">
      <div className="ar-container">
        <Reveal className="ar-final-cta">
          <span className="ar-badge">{finalCta.badge}</span>

          <h2 id="cta-title">{finalCta.headline}</h2>

          <p>
            <strong className="text-[#e8eeff]">{finalCta.flowLine}</strong>
            <br />
            {finalCta.supporting}
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-[680px]:flex-col">
            <a
              href={finalCta.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ar-btn ar-btn-primary ar-btn-lg"
            >
              <Icon name="MessageCircle" size={18} />
              {finalCta.primaryCta.label}
            </a>
            <a
              href={finalCta.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ar-btn ar-btn-secondary ar-btn-lg"
            >
              <Icon name="MessageCircle" size={18} />
              {finalCta.secondaryCta.label}
            </a>
          </div>

          <p className="ar-note mt-4">{finalCta.contactNote}</p>

          <p className="mt-6">
            <strong>{finalCta.brandLine}</strong>
            <br />
            <span className="text-[var(--muted)]">{finalCta.brandTagline}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

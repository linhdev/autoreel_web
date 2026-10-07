import { proof } from '../../data/site.js';
import CountUp from '../ui/CountUp.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { RevealGroup, RevealItem } from '../ui/Reveal.jsx';

const numberFormat = new Intl.NumberFormat('vi-VN');

export default function ProofSection() {
  // While any figure is still a placeholder we surface the "replace me" note.
  // Fill in `value` in src/data/site.js and the note disappears on its own.
  const hasPlaceholder = proof.metrics.some((metric) => typeof metric.value !== 'number');

  return (
    <section className="ar-section" aria-labelledby="proof-title">
      <div className="ar-container">
        <SectionHeading id="proof-title" title={proof.headline} subtitle={proof.subheadline} />

        <RevealGroup className="grid gap-5 min-[981px]:grid-cols-3 max-[980px]:grid-cols-1">
          {proof.metrics.map((metric) => {
            const isNumeric = typeof metric.value === 'number';
            const suffix = metric.suffix ?? '';

            return (
              <RevealItem as="div" key={metric.label} className="ar-card ar-card-glow text-center">
                {/* Animated digits are hidden from AT; the settled value is announced below. */}
                <div className="ar-proof-number" aria-hidden="true">
                  {isNumeric ? <CountUp value={metric.value} suffix={suffix} /> : metric.placeholder}
                </div>

                <div className="ar-proof-label">{metric.label}</div>

                {isNumeric ? (
                  <span className="sr-only">
                    {numberFormat.format(metric.value)}
                    {suffix} {metric.label}
                  </span>
                ) : null}
              </RevealItem>
            );
          })}
        </RevealGroup>

        {hasPlaceholder ? <p className="ar-note mt-4 text-center">{proof.note}</p> : null}
      </div>
    </section>
  );
}

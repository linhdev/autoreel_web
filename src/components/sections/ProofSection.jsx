import { numberLocale, useCopy } from '../../i18n/copy.jsx';
import CountUp from '../ui/CountUp.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { RevealGroup, RevealItem } from '../ui/Reveal.jsx';

export default function ProofSection() {
  const { proof, lang } = useCopy();
  // Built per render rather than once at module scope: `vi-VN` groups 501 as
  // "501" and `en-US` as "501" too, but 1000 is "1.000" against "1,000" — a
  // formatter frozen at import time would keep writing Vietnamese digits on the
  // English page forever.
  const numberFormat = new Intl.NumberFormat(numberLocale(lang));

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
              <RevealItem as="div" key={metric.suffix + metric.label} className="ar-card ar-card-glow text-center">
                {/* Animated digits are hidden from AT; the settled value is announced below. */}
                <div className="ar-proof-number" aria-hidden="true">
                  {isNumeric ? (
                    <CountUp value={metric.value} suffix={suffix} locale={numberLocale(lang)} />
                  ) : (
                    metric.placeholder
                  )}
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

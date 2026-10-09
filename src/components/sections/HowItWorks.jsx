import { useCopy } from '../../i18n/copy.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { RevealGroup, RevealItem } from '../ui/Reveal.jsx';

export default function HowItWorks() {
  const { howItWorks } = useCopy();

  return (
    <section className="ar-section" aria-labelledby="how-title">
      <div className="ar-container">
        <SectionHeading id="how-title" title={howItWorks.title} />

        <div className="relative">
          {/* Simple line connector behind the step numbers (desktop only) */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-[var(--line-strong)] to-transparent min-[981px]:block"
            aria-hidden="true"
          />

          <RevealGroup
            as="ol"
            className="relative m-0 grid list-none gap-4 p-0 min-[981px]:grid-cols-4 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1"
          >
            {howItWorks.steps.map((step) => (
              <RevealItem as="li" key={step.num} className="ar-step">
                <div className="ar-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

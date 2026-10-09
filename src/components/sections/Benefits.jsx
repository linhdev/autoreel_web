import { useCopy } from '../../i18n/copy.jsx';
import Icon from '../ui/Icon.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { RevealGroup, RevealItem } from '../ui/Reveal.jsx';

export default function Benefits() {
  const { benefits, benefitsSection } = useCopy();

  return (
    <section id="benefits" className="ar-section" aria-labelledby="benefits-title">
      <div className="ar-container">
        <SectionHeading id="benefits-title" title={benefitsSection.title} />

        <RevealGroup className="grid gap-4 min-[981px]:grid-cols-4 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
          {benefits.map((benefit) => (
            // The icon, not the title: the title changes with the language, and
            // a key that changes remounts the card — and the reveal animation
            // that goes with it — every time somebody switches.
            <RevealItem as="article" key={benefit.icon} className="ar-card ar-card-glow ar-benefit">
              <span className="ar-icon">
                <Icon name={benefit.icon} size={21} />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

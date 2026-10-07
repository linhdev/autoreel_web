import { benefits, benefitsSection } from '../../data/features.js';
import Icon from '../ui/Icon.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { RevealGroup, RevealItem } from '../ui/Reveal.jsx';

export default function Benefits() {
  return (
    <section id="benefits" className="ar-section" aria-labelledby="benefits-title">
      <div className="ar-container">
        <SectionHeading
          id="benefits-title"
          before={benefitsSection.titleBefore}
          highlight={benefitsSection.titleHighlight}
        />

        <RevealGroup className="grid gap-4 min-[981px]:grid-cols-4 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
          {benefits.map((benefit) => (
            <RevealItem as="article" key={benefit.title} className="ar-card ar-card-glow ar-benefit">
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

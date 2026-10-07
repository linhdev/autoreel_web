import { plans, pricingSection } from '../../data/pricing.js';
import Icon from '../ui/Icon.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal.jsx';

export default function Pricing() {
  return (
    <section id="pricing" className="ar-section" aria-labelledby="pricing-title">
      <div className="ar-container">
        <SectionHeading
          id="pricing-title"
          title={pricingSection.headline}
          subtitle={pricingSection.subheadline}
        />

        <RevealGroup className="mx-auto grid max-w-[920px] gap-6 min-[681px]:grid-cols-2 max-[680px]:grid-cols-1">
          {plans.map((plan) => (
            <RevealItem
              as="article"
              key={plan.id}
              className={`ar-card ar-card-glow ar-pricing-card ${
                plan.popular ? 'ar-pricing-popular' : ''
              }`}
            >
              {plan.popular ? <span className="ar-popular-tag">{plan.popularLabel}</span> : null}

              <span className="ar-icon">
                <Icon name={plan.icon} size={22} />
              </span>

              <h3>{plan.name}</h3>
              <div className="ar-price">{plan.price}</div>
              <div className="ar-subprice">{plan.priceNote}</div>
              <p className="mt-3">{plan.audience}</p>

              <ul className="ar-checklist">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="Check" size={14} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta.href}
                className={`ar-btn ${plan.popular ? 'ar-btn-primary' : 'ar-btn-secondary'}`}
              >
                {plan.cta.label}
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="ar-note mx-auto mt-6 max-w-[860px] text-center">{pricingSection.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

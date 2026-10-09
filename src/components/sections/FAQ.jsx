import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { useCopy } from '../../i18n/copy.jsx';
import Icon from '../ui/Icon.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function FAQ() {
  const { faqHeadline, faqs } = useCopy();
  // One panel open at a time; the first question starts open so the
  // interaction is discoverable. Keyed by the question's `id`, which is the
  // same string in both languages — so switching language keeps the panel the
  // reader had open open, instead of snapping back to the first question.
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);
  const prefersReduced = useReducedMotion();

  return (
    <section id="faq" className="ar-section" aria-labelledby="faq-title">
      <div className="ar-container">
        <SectionHeading id="faq-title" title={faqHeadline} />

        <Reveal className="mx-auto max-w-[900px]">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const buttonId = `faq-button-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`ar-faq-item ${index === faqs.length - 1 ? 'border-b-0' : ''}`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    className="ar-faq-btn"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <m.span
                      className="ar-faq-icon"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: prefersReduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                      aria-hidden="true"
                    >
                      <Icon name="Plus" size={16} />
                    </m.span>
                  </button>
                </h3>

                {prefersReduced ? (
                  isOpen ? (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="ar-faq-answer"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  ) : null
                ) : (
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <m.div
                        key="panel"
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="ar-faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p>{faq.answer}</p>
                      </m.div>
                    ) : null}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

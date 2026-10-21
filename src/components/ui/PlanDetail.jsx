import { useEffect, useRef } from 'react';

import { evidenceFor } from '../../data/plan-evidence.js';
import { checkoutHref, formatMoney, usdCentsFor } from '../../data/pricing.js';
import { useCopy } from '../../i18n/copy.jsx';
import { Link, useHref } from '../../i18n/router.jsx';
import Icon from './Icon.jsx';

/**
 * The card, opened.
 *
 * **A `<dialog>` rather than a div with a class.** The browser already knows
 * how to focus-trap a modal, close it on Escape, and put the page behind it
 * out of reach of a screen reader; a div that re-implements the three gets one
 * of them wrong, and the one it gets wrong is the one nobody tests.
 *
 * The card itself is a button — clicking anywhere on it opens this — but the
 * link to contact inside the dialog is a real link, because the next step is a
 * navigation and a button that navigates is a button that cannot be
 * middle-clicked.
 */
export default function PlanDetail({ plan, detail, onClose }) {
  const dialog = useRef(null);
  const href = useHref();
  const { lang, pricingSection } = useCopy();

  useEffect(() => {
    const node = dialog.current;
    if (!node || !plan) return undefined;
    if (typeof node.showModal === 'function') node.showModal();
    else node.setAttribute('open', '');
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
      if (node.open && typeof node.close === 'function') node.close();
    };
  }, [plan]);

  if (!plan || !detail) return null;

  return (
    <dialog
      ref={dialog}
      className="ar-plan-dialog"
      aria-labelledby="plan-detail-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        // A click that lands on the dialog element itself is a click on the
        // backdrop: everything inside is a child and stops at the panel.
        if (event.target === dialog.current) onClose();
      }}
    >
      <div className="ar-plan-panel">
        <header className="ar-plan-head">
          <div>
            <span className="ar-plan-kicker">{pricingSection.detailKicker}</span>
            <h2 id="plan-detail-title" className="ar-plan-title">
              {plan.name}
            </h2>
            <div className="ar-plan-price">
              {formatMoney(plan.priceValue, lang, usdCentsFor(plan))}
              <span>{plan.priceNote}</span>
            </div>
          </div>
          <button
            type="button"
            className="ar-plan-close"
            onClick={onClose}
            aria-label={pricingSection.detailClose}
            autoFocus
          >
            <Icon name="X" size={18} />
          </button>
        </header>

        <div className="ar-plan-scroll">
          <p className="ar-plan-headline">{detail.headline}</p>
          <p className="ar-plan-intro">{detail.intro}</p>

          <h3 className="ar-plan-h3">{pricingSection.detailCanDo}</h3>
          <ul className="ar-plan-list">
            {detail.canDo.map((line) => (
              <li key={line}>
                <Icon name="Check" size={15} />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {detail.benefits.length ? (
            <>
              <h3 className="ar-plan-h3">{pricingSection.detailBenefits}</h3>
              <div className="ar-plan-benefits">
                {detail.benefits.map((one) => (
                  <div key={one.title} className="ar-plan-benefit">
                    <strong>{one.title}</strong>
                    <p>{one.body}</p>
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {detail.evidence.length ? (
            <>
              <h3 className="ar-plan-h3">{pricingSection.detailEvidence}</h3>
              <div className="ar-plan-evidence">
                {detail.evidence.map((one) => (
                  <figure key={one.image}>
                    <img
                      src={evidenceFor(one, lang)}
                      alt={one.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{one.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          ) : null}
        </div>

        <footer className="ar-plan-foot">
          <Link
            to={checkoutHref(plan, lang) || href(plan.cta.to)}
            className={`ar-btn ${plan.popular ? 'ar-btn-primary' : 'ar-btn-secondary'}`}
            onClick={onClose}
          >
            {plan.cta.label}
          </Link>
          <button type="button" className="ar-btn ar-btn-secondary" onClick={onClose}>
            {pricingSection.detailClose}
          </button>
        </footer>
      </div>
    </dialog>
  );
}

import { useEffect, useMemo, useState } from 'react';

import { planDetails } from '../../data/plan-details.js';
import {
  buyPlansHref,
  checkoutHref,
  formatMoney,
  paybackMonths,
  planById,
  savingFor,
  STORE_PLANS_API,
  usdCentsFor,
} from '../../data/pricing.js';
import { useCopy } from '../../i18n/copy.jsx';
import { Link, useHref } from '../../i18n/router.jsx';
import Icon from '../ui/Icon.jsx';
import PlanDetail from '../ui/PlanDetail.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal.jsx';

/**
 * The one line a card carries that is not in `pricing.js` word for word.
 *
 * Two cards quote arithmetic instead of a sentence — what the three-month pack
 * saves, and how long the lifetime licence takes to pay for itself — and both
 * figures come from the prices themselves. Written here rather than typed into
 * the data so that a price change moves the claim with it; a hand-typed
 * "tiết kiệm 78.000đ" is right until the day it is not, and nothing catches it.
 *
 * At most one of the two applies to any card, and most cards get neither.
 */
function asideFor(plan, { saveTemplate, paybackTemplate }, lang, lookup) {
  const saving = savingFor(plan, lang, lookup);
  if (saving) return saveTemplate.replace('{amount}', formatMoney(saving, lang));
  const months = paybackMonths(plan, lang, lookup);
  if (months) return paybackTemplate.replace('{months}', String(months));
  return '';
}

/**
 * Current prices from the licence dashboard, keyed by plan id.
 *
 * `null` means "not loaded yet", which is not the same as "loaded and empty":
 * the cards keep their static price until the request succeeds, and keep it
 * forever if it fails. A landing page that blanked its prices because an API
 * was briefly down would be worse than one showing yesterday's number.
 */
function useLivePrices() {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    let alive = true;
    fetch(STORE_PLANS_API, { cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : null))
      .then((body) => {
        if (!alive || !body || !body.success || !Array.isArray(body.data)) return;
        setPrices(
          new Map(
            body.data.map((plan) => [
              plan.id,
              { price: plan.price, usdCents: plan.usdCents },
            ]),
          ),
        );
      })
      .catch(() => {
        // Static prices remain in place; a price list is not worth an error UI.
      });
    return () => {
      alive = false;
    };
  }, []);

  return prices;
}

/**
 * The download strip.
 *
 * It does **not** link to an installer. The executable is shown only on the
 * success page after payment, so this points at the plan chooser: a visitor
 * picks a licence first, and the download link is one of the things the
 * purchase delivers. That order is deliberate — a free download button beside
 * a paid product is a checkout with a side exit.
 */
function DownloadBar({ lang }) {
  const vi = lang !== 'en';

  return (
    <Reveal delay={0.05}>
      <div
        id="download"
        className="ar-card ar-card-glow mx-auto mb-10 flex max-w-[1180px] flex-col items-center justify-between gap-5 p-5 text-center min-[760px]:flex-row min-[760px]:text-left"
      >
        <div className="max-w-xl">
          <span className="ar-badge">Windows 10/11</span>
          <p className="mt-2 text-lg font-black tracking-tight">
            {vi ? 'Mua license, nhận bộ cài' : 'Buy a licence, get the installer'}
          </p>
          <p className="ar-note mt-1">
            {vi
              ? 'Sau khi thanh toán, trang cảm ơn hiển thị mã kích hoạt và link tải AutoReel-Setup.exe kèm SHA256. Bộ cài tự lo Docker.'
              : 'After payment, the success page shows your activation key and the AutoReel-Setup.exe download link with its SHA256. The installer handles Docker.'}
          </p>
          <a href="/tai-lieu/cai-dat/" className="ar-footer-link mt-2 inline-block text-sm">
            {vi ? 'Xem hướng dẫn cài đặt →' : 'Read the installation guide →'}
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <a href={buyPlansHref(lang)} className="ar-btn ar-btn-primary ar-btn-lg">
            {vi ? 'Chọn gói để tải' : 'Choose a plan'}
          </a>
          <span className="ar-note">
            {vi ? 'Thanh toán an toàn qua PayOS hoặc PayPal' : 'Secure payment via PayOS or PayPal'}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/** Three cards or more go three wide; two stay two, centred and narrower. */
function gridFor(count) {
  const shared = 'mx-auto grid gap-6 min-[681px]:grid-cols-2';
  return count >= 3
    ? `${shared} max-w-[1180px] min-[1080px]:grid-cols-3`
    : `${shared} max-w-[880px]`;
}

export default function Pricing() {
  const href = useHref();
  const { plans: basePlans, pricingGroups, pricingSection, lang } = useCopy();
  // Which card is open, by id. `null` is closed - and the dialog reads that
  // as "not mounted", so a closed page holds no modal at all.
  const [openId, setOpenId] = useState(null);
  const details = planDetails[lang] || planDetails.vi;

  // The price is the one field an operator can change in the dashboard. The
  // cards, the savings line and the payback line all read the merged value,
  // so a price change cannot leave one sentence quoting the old number.
  const livePrices = useLivePrices();
  const plans = useMemo(
    () =>
      basePlans.map((plan) => {
        const live = livePrices?.get(plan.id);
        return live
          ? { ...plan, priceValue: live.price, usdCents: live.usdCents }
          : plan;
      }),
    [basePlans, livePrices],
  );
  const lookup = useMemo(() => {
    const byId = new Map(plans.map((plan) => [plan.id, plan]));
    return (id, language) => byId.get(id) || planById(id, language);
  }, [plans]);

  const openPlan = plans.find((plan) => plan.id === openId) || null;

  return (
    <section id="pricing" className="ar-section" aria-labelledby="pricing-title">
      <div className="ar-container">
        <SectionHeading
          id="pricing-title"
          title={pricingSection.headline}
          subtitle={pricingSection.subheadline}
        />

        <DownloadBar lang={lang} />

        {pricingGroups.map((group) => {
          const mine = plans.filter((plan) => plan.group === group.key);
          if (!mine.length) return null;
          return (
            <div key={group.key} className="mb-12 last:mb-0">
              <Reveal>
                <div className="mx-auto mb-6 max-w-[1180px] text-center">
                  <h3 className="text-lg font-black tracking-tight">{group.title}</h3>
                  <p className="ar-note mt-1">{group.note}</p>
                </div>
              </Reveal>

              <RevealGroup className={gridFor(mine.length)}>
                {mine.map((plan) => {
                  const aside = asideFor(plan, pricingSection, lang, lookup);
                  return (
                    <RevealItem
                      as="article"
                      key={plan.id}
                      className={`ar-card ar-card-glow ar-pricing-card ar-plan-openable ${
                        plan.popular ? 'ar-pricing-popular' : ''
                      }`}
                      // The whole card opens the detail: a card this size is
                      // the target, not a 14px text link at its foot. It is a
                      // button for the keyboard and a dialog for the screen
                      // reader, because it does the same thing as one.
                      role="button"
                      tabIndex={0}
                      aria-haspopup="dialog"
                      aria-label={`${plan.name} — ${pricingSection.detailCta}`}
                      onClick={() => setOpenId(plan.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setOpenId(plan.id);
                        }
                      }}
                    >
                      {plan.badge ? (
                        // A badge on a card that is not the promoted one is a
                        // status, not a recommendation — "Coming soon" on the
                        // Team plan. Drawn in the same shape and a quieter
                        // colour, so a reader skimming for the highlight does
                        // not land on the plan they cannot buy.
                        <span className={`ar-popular-tag ${plan.popular ? '' : 'ar-popular-tag-quiet'}`}>
                          {plan.badge}
                        </span>
                      ) : null}

                      <span className="ar-icon">
                        <Icon name={plan.icon} size={22} />
                      </span>

                      <h4>{plan.name}</h4>
                      <div className="ar-price">{formatMoney(plan.priceValue, lang, usdCentsFor(plan))}</div>
                      <div className="ar-subprice">{plan.priceNote}</div>
                      <p className="mt-3">{plan.audience}</p>
                      {aside ? <p className="ar-pricing-aside">{aside}</p> : null}

                      <ul className="ar-checklist">
                        {plan.features.map((feature) => (
                          // Keyed by the text: within one plan the labels are
                          // unique, and a feature that changes wording should
                          // re-render.
                          <li key={feature}>
                            <Icon name="Check" size={14} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* The one click inside the card that must NOT open
                          the card: going to the contact form is already the
                          next step, and a modal on top of it would be a
                          second one. */}
                      <Link
                        to={checkoutHref(plan, lang) || href(plan.cta.to)}
                        className={`ar-btn ${plan.popular ? 'ar-btn-primary' : 'ar-btn-secondary'}`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {plan.cta.label}
                      </Link>

                      <span className="ar-plan-more">
                        {pricingSection.detailCta}
                        <Icon name="ArrowRight" size={14} />
                      </span>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          );
        })}

        <Reveal delay={0.1}>
          <p className="ar-note mx-auto mt-6 max-w-[860px] text-center">{pricingSection.note}</p>
        </Reveal>

        <PlanDetail
          plan={openPlan}
          detail={openPlan ? details[openPlan.id] : null}
          onClose={() => setOpenId(null)}
        />
      </div>
    </section>
  );
}

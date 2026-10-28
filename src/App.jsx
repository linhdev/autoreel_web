import { LazyMotion, domAnimation } from 'framer-motion';
import { CopyProvider } from './i18n/copy.jsx';
import { RouterProvider, useRouter } from './i18n/router.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import WorkflowSection from './components/sections/WorkflowSection.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import Benefits from './components/sections/Benefits.jsx';
import FeatureList from './components/sections/FeatureList.jsx';
import DemoSection from './components/sections/DemoSection.jsx';
import ProofSection from './components/sections/ProofSection.jsx';
import Pricing from './components/sections/Pricing.jsx';
import FAQ from './components/sections/FAQ.jsx';
import CTA from './components/sections/CTA.jsx';
import RouteDeepDive from './components/sections/RouteDeepDive.jsx';

/**
 * The order of the full one-pager. A section route names its own subset in
 * `routes.js`; this list is what home falls back to when it names none.
 */
const HOME_SECTIONS = [
  'workflow',
  'howItWorks',
  'benefits',
  'features',
  'demo',
  'proof',
  'pricing',
  'faq',
  'cta',
];

/**
 * Section key -> component.
 *
 * The keys live in `routes.js` as plain strings so the data file stays free of
 * JSX and can be imported by the build scripts. A key with no entry here is
 * skipped rather than thrown on: a page that loses one section is still a page,
 * while a build-time throw over a typo in a data file is a deploy that stops.
 */
const SECTIONS = {
  workflow: WorkflowSection,
  howItWorks: HowItWorks,
  benefits: Benefits,
  features: FeatureList,
  demo: DemoSection,
  proof: ProofSection,
  pricing: Pricing,
  faq: FAQ,
  deepDive: RouteDeepDive,
  cta: CTA,
};

/**
 * The page itself, inside the router: it needs to know which route it is on
 * before it can choose the headline and the section list.
 *
 * `domAnimation` ships exactly the features this page uses — animate, exit,
 * inView, hover/tap/focus — and tree-shakes away drag, layout and pan
 * projections, which are the bulk of framer-motion. Every animated element
 * therefore uses `m.*`, not `motion.*`: a stray `motion.*` would silently pull
 * the full feature set back in.
 */
function Page() {
  const { route } = useRouter();
  const keys = route.sections || HOME_SECTIONS;

  return (
    <div id="top">
      <Navbar />

      <main id="main">
        <Hero />
        {keys.map((key) => {
          const Section = SECTIONS[key];
          return Section ? <Section key={key} /> : null;
        })}
      </main>

      <Footer />
    </div>
  );
}

/**
 * `initialPath` exists for the SSR pass, which runs in Node with no address bar
 * to read; the browser passes nothing and the router reads `location` itself.
 * The same prop is what lets `scripts/build-routes.mjs` write each route's real
 * HTML at build time, so a crawler that does not execute JavaScript still sees
 * the headline and the copy instead of an empty `<div id="root">`.
 */
export default function App({ initialPath }) {
  return (
    <RouterProvider initialPath={initialPath}>
      {/* Inside the router on purpose: the language is read from the URL, so
          the copy has to be chosen after the route is known. */}
      <CopyProvider>
        <LazyMotion features={domAnimation}>
          <Page />
        </LazyMotion>
      </CopyProvider>
    </RouterProvider>
  );
}

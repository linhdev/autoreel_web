import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import WorkflowSection from './components/sections/WorkflowSection.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import Benefits from './components/sections/Benefits.jsx';
import DemoSection from './components/sections/DemoSection.jsx';
import ProofSection from './components/sections/ProofSection.jsx';
import Pricing from './components/sections/Pricing.jsx';
import FAQ from './components/sections/FAQ.jsx';
import CTA from './components/sections/CTA.jsx';

/**
 * `domAnimation` ships exactly the features this page uses — animate, exit,
 * inView, hover/tap/focus — and tree-shakes away drag, layout and pan
 * projections, which are the bulk of framer-motion.
 * Every animated element below therefore uses `m.*`, not `motion.*`:
 * a stray `motion.*` would silently pull the full feature set back in.
 */
export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div id="top">
        <Navbar />

        <main id="main">
          <Hero />
          <WorkflowSection />
          <HowItWorks />
          <Benefits />
          <DemoSection />
          <ProofSection />
          <Pricing />
          <FAQ />
          <CTA />
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}

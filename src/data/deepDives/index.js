/**
 * The long-form block for the commercial section routes.
 *
 * These pages already render sections from the one-pager. That made them
 * subsets of the home page — 55–91% of their sentences were identical — so
 * they could not rank on their own. Each entry here is copy that exists only
 * on that route: the operational detail, the limits, the buying maths.
 *
 * The keys match `route.key` in `routes.js`. A route without an entry gets no
 * block; `RouteDeepDive` returns null rather than rendering an empty section.
 */
import workflow from './workflow.js';
import features from './features.js';
import aiOperations from './aiOperations.js';
import pricing from './pricing.js';
import faq from './faq.js';

export const DEEP_DIVES = { workflow, features, aiOperations, pricing, faq };

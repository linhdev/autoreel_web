/**
 * The rules an article has to satisfy, run against the source.
 *
 * `npm run verify` answers the same questions, but only after a build, and a
 * build is a minute of work that also rewrites `dist/` — which is the wrong
 * thing to ask of somebody who is halfway through writing an article. This
 * reads the articles themselves and answers in a second.
 *
 * It is not a weaker check. It is the *same* function `verify-build.mjs`
 * calls; what that script adds on top is everything that can only be known
 * after the pages exist — that the file was written, at the right address,
 * with the right canonical and the stylesheet this build produced.
 *
 * Run: `node scripts/check-posts.mjs` (or `npm run check:posts`).
 *
 * Pass any number of substrings to check only the articles whose Vietnamese
 * slug contains one of them — `npm run check:posts -- kien-truc phu-de`. The
 * blog was rewritten in parallel, and "the five files I am holding are clean"
 * is a different question from "the whole folder is clean", asked by somebody
 * who cannot yet answer the second one.
 */
import { posts } from '../src/data/posts.js';
import { postContentProblems } from './lib/post-rules.mjs';

const filters = process.argv.slice(2);
const chosen = filters.length
  ? posts.filter((post) => filters.some((part) => String(post.slug.vi).includes(part)))
  : posts;

if (!chosen.length) {
  console.error(`check-posts: nothing matches ${filters.join(', ')}`);
  process.exit(1);
}

const problems = postContentProblems(chosen);

if (problems.length) {
  console.error(`\n${problems.length} problem(s) across ${chosen.length} articles:\n`);
  for (const one of problems) console.error(`  ✗ ${one}`);
  process.exit(1);
}

console.log(
  `check-posts: ${chosen.length} article(s), both languages, nothing out of place.`,
);

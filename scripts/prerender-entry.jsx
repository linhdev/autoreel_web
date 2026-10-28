/**
 * The server entry for the build-time prerender.
 *
 * The site is a React one-pager, so `vite build` writes one `index.html` with
 * an empty `<div id="root">`. That is fine for a browser and useless for a
 * crawler that does not execute JavaScript — GPTBot, OAI-SearchBot,
 * PerplexityBot and ClaudeBot all read the raw HTML and saw an empty page.
 *
 * This module renders the same app in Node, once per route and language, and
 * `scripts/prerender.mjs` writes the result into each route's HTML file. It is
 * built by `vite build --ssr` (the same mechanism `npm run smoke` already
 * uses), so imports, JSX and the app's data files resolve exactly as they do
 * in the browser build.
 */
import { renderToString } from 'react-dom/server';
import App from '../src/App.jsx';

/**
 * The HTML for one route.
 *
 * `initialPath` is how the app is told which address it is pretending to be:
 * in the browser it reads `location`, which Node does not have. The router
 * already supports the prop for the smoke test, so this is the same code path
 * the browser uses after a cold load rather than a second renderer.
 */
export function renderRoute(path) {
  return renderToString(<App initialPath={path} />);
}

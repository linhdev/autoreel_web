import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css';

// The router decides where the page starts. Left on `auto`, the browser also
// restores the previous scroll position on a reload or a back-navigation, and
// the two fight — landing somewhere that is neither where you were nor the
// section the URL asks for.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// `scripts/prerender.mjs` fills this element before the bundle loads, so a
// normal production visit hydrates that markup instead of throwing it away and
// rendering it again. Vite's dev server still serves an empty root, which is
// what the other branch is for.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);

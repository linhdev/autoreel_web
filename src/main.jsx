import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css';

// The router decides where the page starts. Left on `auto`, the browser also
// restores the previous scroll position on a reload or a back-navigation, and
// the two fight — landing somewhere that is neither where you were nor the
// section the URL asks for.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

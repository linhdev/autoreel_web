import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssTarget: 'chrome100',
    // Single-entry static page: the default chunking is already optimal, and
    // Rolldown (Vite 8's bundler) has its own `advancedChunks` API, so no
    // manual chunk map is configured here.
    reportCompressedSize: true,
  },
});

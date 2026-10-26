/* The download tool's service worker, scoped to /downloads/.
 *
 * It exists for installability and for a useful offline shell, not to make
 * the queue work offline: jobs need the API. Network first, cache only as a
 * fallback, so a deploy is picked up on the next load.
 */
const CACHE = 'autoreel-downloads-v1';
const SHELL = ['/downloads/', '/downloads/app.js', '/downloads/qr.js'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.all(SHELL.map((path) => cache.add(path).catch(() => {}))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (!request.url.startsWith(`${self.location.origin}/downloads/`)) return;
  event.respondWith(fetch(request).catch(() => caches.match(request)));
});

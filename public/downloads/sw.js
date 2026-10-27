/* The download tool's service worker, scoped to /downloads/.
 *
 * It exists for installability and for a useful offline shell, not to make
 * the queue work offline: jobs need the API. Network first, cache only as a
 * fallback, so a deploy is picked up on the next load.
 */
const CACHE = 'autoreel-downloads-v2';
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
  const scope = `${self.location.origin}`;
  if (!request.url.startsWith(`${scope}/downloads/`)
    && !request.url.startsWith(`${scope}/en/downloads/`)) return;
  event.respondWith(fetch(request).catch(() => caches.match(request)));
});

/* A push says only "the job is ready"; the page it opens fetches the token.
 *
 * The payload is the shape `src/api/push.js` builds, including the declarative
 * `web_push` wrapper for iOS 18.4+, which hands us the same `notification`
 * object. */
self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = {};
  }
  const note = payload.notification || payload;
  const title = note.title || 'AutoReel';
  const url = note.navigate || note.data?.url || '/downloads/';
  event.waitUntil(self.registration.showNotification(title, {
    body: note.body || '',
    icon: note.icon || '/downloads/icon-512.png',
    tag: note.tag || note.data?.jobId || undefined,
    lang: note.lang || 'vi',
    data: { ...(note.data || {}), url },
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = new URL(
    event.notification.data?.url || '/downloads/',
    self.location.origin,
  ).href;
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({
      type: 'window', includeUncontrolled: true,
    });
    for (const client of windows) {
      if (client.url === target && 'focus' in client) return client.focus();
    }
    return self.clients.openWindow(target);
  })());
});

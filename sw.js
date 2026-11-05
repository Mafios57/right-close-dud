// Caches the game so it runs with no connection after the first visit.
// When you change any file, bump CACHE (rcd-v11 -> rcd-v12) so phones load the new version.
var CACHE = 'rcd-v11';
var FILES = ['./', 'index.html', 'app.js', 'items.js', 'manifest.webmanifest', 'icon.svg'];
self.addEventListener('install', function (e) {
  // cache: 'reload' skips the browser's own cache, so a new version never saves old files.
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(FILES.map(function (f) { return new Request(f, { cache: 'reload' }); }));
  }));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(function (hit) {
    return hit || fetch(e.request).then(function (res) {
      // Keep a copy of the Google Fonts files so the look survives offline.
      if (/fonts\.(googleapis|gstatic)\.com/.test(e.request.url)) {
        var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    });
  }));
});

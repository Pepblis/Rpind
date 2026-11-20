self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('rpind-v1').then(cache => {
      return cache.addAll(['/', '/index.html', '/icon.jpeg', '/manifest.json']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
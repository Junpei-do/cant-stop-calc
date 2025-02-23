const CACHE_NAME = 'cant-stop-calc-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/test.csv',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// インストール時にリソースをキャッシュ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// ネットワークリクエストの制御
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュがあればそれを返す
        if (response) {
          return response;
        }
        // なければネットワークにリクエスト
        return fetch(event.request);
      })
  );
});
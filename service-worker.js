const CACHE_NAME = "cozykuma-cache-v1";
const OFFLINE_URL = "offline.html";

const FILES_TO_CACHE = [
  "index.html",
  "offline.html",
  "icon-192.png",
  "icon-512.png",
  "manifest.json",
  "apple-touch-icon.png"
];

// 설치
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 요청 가로채기
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then(response => {
        return response || caches.match(OFFLINE_URL);
      });
    })
  );
});

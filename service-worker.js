const CACHE_NAME = "cozykuma-cache-v1";
const OFFLINE_URL = "offline.html";

const FILES_TO_CACHE = [
  "/CozyKuma/index.html",
  "/CozyKuma/manifest.json",
  "/CozyKuma/icon-192.png",
  "/CozyKuma/icon-512.png",
  "/CozyKuma/apple-touch-icon.png",
  "/CozyKuma/offline.html"
];

// 설치 시 캐시
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// 활성화 시 캐시 정리
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 요청 가로채기 및 오프라인 대응
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then(response => {
      return response || caches.match(OFFLINE_URL);
    }))
  );
});

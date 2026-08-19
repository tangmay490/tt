
const CACHE_NAME = 'SCIENCE ADVENTURE';
// ระบุไฟล์ทั้งหมดที่ต้องการให้เล่นออฟไลน์ได้
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// ติดตั้ง Service Worker และบันทึก Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// ดึงข้อมูลจาก Cache เมื่ออยู่ในสถานะ Offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

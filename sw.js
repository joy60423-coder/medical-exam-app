const CACHE_NAME = 'medical-exam-v1';
const urlsToCache = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// 安裝 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.filter(url => !url.includes('.png'))); // 跳過圖片
      })
      .catch(err => console.log('Cache install failed:', err))
  );
  self.skipWaiting();
});

// 激活 Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 攔截請求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果在緩存中找到,返回緩存的版本
        if (response) {
          return response;
        }
        
        // 否則,嘗試從網絡獲取
        return fetch(event.request).then(response => {
          // 檢查是否收到有效響應
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // 克隆響應
          const responseToCache = response.clone();
          
          // 將響應添加到緩存
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(err => {
          console.log('Fetch failed:', err);
          // 如果網絡請求失敗,可以返回一個離線頁面
        });
      })
  );
});

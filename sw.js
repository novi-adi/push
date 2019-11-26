const CACHE_NAME = "premierleague-v1";
var urlsToCache = [
  "/",
  "/css/materialize.min.css",
  "/css/style.css",
  "/img/gallery/1.webp",
  "/img/gallery/2.webp",
  "/img/gallery/3.webp",
  "/img/gallery/4.webp",
  "/img/gallery/5.webp",
  "/img/gallery/6.webp",
  "/img/gallery/7.webp",
  "/img/gallery/8.webp",
  "/img/icon/apple-touch-icon.png",
  "/img/icon/chrome-touch-icon-192x192.png",
  "/img/icon/icon.png",
  "/img/icon/icon-128x128.png",
  "/img/icon/ms-touch-icon-144x144-precomposed.png",
  "/img/slider/1.webp",
  "/img/slider/2.webp",
  "/img/slider/3.webp",
  "/js/api.js",
  "/js/db.js",
  "/js/idb.js",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/pages/gallery.html",
  "/pages/home.html",
  "/pages/saved.html",
  "/index.html",
  "/manifest.json",
  "/nav.html",
  "/team.html",
  "/team_favorite.html",
  "https://unpkg.com/snarkdown@1.0.2/dist/snarkdown.umd.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  if (event.request.url.indexOf(request) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch (event.request);
      })
    )
  }
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'img/icon-128x128.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

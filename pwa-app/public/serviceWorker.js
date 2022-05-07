const CACHE_NAME = "virsion-1";
const URLToCache = ["index.html" , "offline.html"];

const self = this;

self.addEventListener("install" ,  (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("Cache opened")
                return cache.addAll(URLToCache);
            })
    )
})

self.addEventListener("fetch" ,  (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match("offline.html"))
            })
    )
})

self.addEventListener("activate" , (event) => {
    const cacheWhitrlist = [];
    cacheWhitrlist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(! cacheWhitrlist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})
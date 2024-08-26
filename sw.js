self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("assets").then((cache) => {
            return cache.addAll([
                "./",
                "./script.js",
                "./sw.js",
                "https://cdn.jsdelivr.net/gh/amine-amazou/ns-js@1.0.1/dist/NS.min.js",
                "./icon.png",
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return res || fetch(event.request);
        })
    );
});


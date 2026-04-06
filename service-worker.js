self.addEventListener("install", event => {
    console.log("Service Worker instalado");
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
    // opcional por ahora (no hace nada)
});

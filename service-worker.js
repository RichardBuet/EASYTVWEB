self.addEventListener("install", event => {
    console.log("Service Worker instalado");
    self.skipWaiting();
});

self.addEventListener("fetch", event => {
    // por ahora no cachea nada (mínimo viable)
});

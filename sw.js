// Service Worker básico para permitir la instalación (PWA)
self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (event) => {
    // Esto permite que la app funcione incluso si hay peticiones de red
    event.respondWith(fetch(event.request));
});
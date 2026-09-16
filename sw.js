self.addEventListener('install', (event) => {
    console.log('[TransVision] Application installée en arrière-plan.');
});

self.addEventListener('fetch', (event) => {
    // Permet à la PWA d'être validée par le navigateur
    event.respondWith(fetch(event.request).catch(() => new Response('Vous êtes hors ligne.')));
});
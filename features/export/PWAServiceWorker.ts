export const swFile = `
self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open('buildify-v1').then(cache=>{
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        // Add all asset files
      ]);
    })
  );
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});
`;

export const manifestFile = `
{
  "name": "Buildify App",
  "short_name": "Buildify",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#fff",
  "description": "Offline-ready website made in Buildify",
  "icons": []
}
`;
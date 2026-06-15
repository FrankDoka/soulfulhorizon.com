// Self-destructing service worker.
// The new site does NOT use a service worker. This file exists only to evict any
// service worker the OLD (WordPress/Hostinger) site may have registered at this
// path: when the browser checks /sw.js for updates, it gets this kill-switch,
// which clears all caches, unregisters itself, and reloads open tabs onto the
// new site. Safe to keep indefinitely.
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys()
        await Promise.all(keys.map((k) => caches.delete(k)))
      } catch {}
      try {
        await self.registration.unregister()
      } catch {}
      const clients = await self.clients.matchAll({ type: 'window' })
      for (const client of clients) {
        try {
          client.navigate(client.url)
        } catch {}
      }
    })(),
  )
})

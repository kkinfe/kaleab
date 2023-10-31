// Create a unique cache name for this deployment
const CACHE = 'cache-v1'

const ASSETS = [
    '/_next/static/0Z0Xg0yRUEgFNKF0ekZVY/_buildManifest.js',
    '/_next/static/0Z0Xg0yRUEgFNKF0ekZVY/_ssgManifest.js',
    '/_next/static/chunks/framework-0c7baedefba6b077.js',
    '/_next/static/chunks/main-b21f03ef96b71999.js',
    '/_next/static/chunks/pages/_app-31f77641e6427abd.js',
    '/_next/static/chunks/pages/_error-08a9db0f433628d8.js',
    '/_next/static/chunks/pages/blogs-94bebc4e3c633d71.js',
    '/_next/static/chunks/pages/index-2d14a970381eb21d.js',
    '/_next/static/chunks/pages/projects-7edb839644924fc5.js',
    '/_next/static/chunks/webpack-e0625a99da900f0f.js',
    '/_next/static/css/f971f74325741086.css',
    '/favicon.ico',
    '/iconx/android-144x144.png',
    '/iconx/android-192x192.png',
    '/iconx/android-36x36.png',
    '/iconx/android-48x48.png',
    '/iconx/android-72x72.png',
    '/iconx/android-96x96.png',
    '/iconx/android-chrome-192x192.png',
    '/iconx/android-chrome-512x512.png',
    '/iconx/android-chrome-maskable-192x192.png',
    '/iconx/android-chrome-maskable-512x512.png',
    '/iconx/apple-touch-icon.png',
    '/robots.txt',
    '/site.webmanifest',
    '/sitemap.xml',
    '/sw.js',
    'https://www.gravatar.com/avatar/adb4591e2216aa1a7ed89a5097a6351f?size=512&q=$75'
]

self.addEventListener('install', (event) => {
    // Create a new cache and add all files to it
    async function addFilesToCache() {
        const cache = await caches.open(CACHE)
        await cache.addAll(ASSETS)
    }

    event.waitUntil?.(addFilesToCache())
})

self.addEventListener('activate', (event) => {
    // Remove previous cached data from disk
    async function deleteOldCaches() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) await caches.delete(key)
        }
    }

    event.waitUntil?.(deleteOldCaches())
})

self.addEventListener('fetch', (event) => {

    if (event.request?.method !== 'GET') return

    async function respond() {

        const url = new URL(event.request?.url)
        const cache = await caches.open(CACHE)

        // `build`/`files` can always be served from the cache
        if (ASSETS.includes(url.pathname)) {

            return cache.match(event.request)
        }

        // for everything else, try the network first, but
        // fall back to the cache if we're offline
        try {

            const response = await fetch(event.request)

            if (response.status === 200) {

                cache.put(event.request, response.clone())
            }

            return response
        } catch {

            return cache.match(event.request)
        }
    }

    event.respondWith?.(respond())
})
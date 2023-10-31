import { skipWaiting, clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import {
  NetworkOnly,
  NetworkFirst,
  CacheFirst,
  StaleWhileRevalidate,
} from "workbox-strategies";
import {
  registerRoute,
  setDefaultHandler,
  setCatchHandler,
} from "workbox-routing";
import {
  matchPrecache,
  precacheAndRoute,
  cleanupOutdatedCaches,
} from "workbox-precaching";

skipWaiting();
clientsClaim();

const WB_MANIFEST = self.__WB_MANIFEST
// Precache fallback route and image
WB_MANIFEST.push(
  { 'revision': 'c239d7640c2c403b13f0a1303d6e9cca', 'url': '/_next/static/zme-eJskRpyK5yhmgDOTL/_buildManifest.js' },
  { 'revision': 'b6652df95db52feb4daf4eca35380933', 'url': '/_next/static/zme-eJskRpyK5yhmgDOTL/_ssgManifest.js' },
  { 'revision': '0c7baedefba6b077', 'url': '/_next/static/chunks/framework-0c7baedefba6b077.js' },
  { 'revision': '9594e9f709d47ceb', 'url': '/_next/static/chunks/main-b21f03ef96b71999.js' },
  { 'revision': '2718b8e338d39542', 'url': '/_next/static/chunks/pages/_app-1aa4f2cede653255.js' },
  { 'revision': '08a9db0f433628d8', 'url': '/_next/static/chunks/pages/_error-08a9db0f433628d8.js' },
  { 'revision': '94bebc4e3c633d71', 'url': '/_next/static/chunks/pages/blogs-94bebc4e3c633d71.js' },
  { 'revision': '2d14a970381eb21d', 'url': '/_next/static/chunks/pages/index-2d14a970381eb21d.js' },
  { 'revision': '7edb839644924fc5', 'url': '/_next/static/chunks/pages/projects-7edb839644924fc5.js' },
  { 'revision': 'e0625a99da900f0f', 'url': '/_next/static/chunks/webpack-e0625a99da900f0f.js' },
  { 'revision': 'f971f74325741086', 'url': '/_next/static/css/f971f74325741086.css' },
  { 'revision': '0dd5ea9c9faaaf78fb51539420facae1', 'url': '/favicon.ico' },
  { 'revision': '1de17b6f4c43a3c1c0d716942ca83bf5', 'url': '/iconx/android-144x144.png' },
  { 'revision': '6d44a750b2020a4758b7c0e525f68d98', 'url': '/iconx/android-192x192.png' },
  { 'revision': '78eb7d3b43d02da527b1565c53897a5a', 'url': '/iconx/android-36x36.png' },
  { 'revision': 'd961a011beb1767f703aa088f446c73e', 'url': '/iconx/android-48x48.png' },
  { 'revision': '957b98b0e7499657b4c704c826824633', 'url': '/iconx/android-72x72.png' },
  { 'revision': 'f1af95292588b00745f0664ec3a67029', 'url': '/iconx/android-96x96.png' },
  { 'revision': '6d44a750b2020a4758b7c0e525f68d98', 'url': '/iconx/android-chrome-192x192.png' },
  { 'revision': '31bd99868c5a3ceb18c61bb69f6bdc60', 'url': '/iconx/android-chrome-512x512.png' },
  { 'revision': 'ba7feadb39ca290de6b03469c757580f', 'url': '/iconx/android-chrome-maskable-192x192.png' },
  { 'revision': '31bd99868c5a3ceb18c61bb69f6bdc60', 'url': '/iconx/android-chrome-maskable-512x512.png' },
  { 'revision': 'aae7f261eb36ec4804c064e204e7998c', 'url': '/iconx/apple-touch-icon.png' },
  { 'revision': '0e42ca5a6920d430fd97ee9ddd6c82da', 'url': '/robots.txt' },
  { 'revision': '20e8e8f53487ec7109eb6856fe725bbe', 'url': '/rss/feed.json' },
  { 'revision': '420c157464b590ffa61421c205fcc0a3', 'url': '/rss/feed.xml' },
  { 'revision': 'da3f4b014697cb1e47a01bd96166aae1', 'url': '/site.webmanifest' },
  { 'revision': '4443539dc594cb81ff4246eb0b8e6fbd', 'url': '/sitemap.xml' },
  { 'revision': '6b8d5343a0aeb791594b121683c2702c', 'url': '/sw.js' },
  { 'revision': '6b8d5343a0aeb791594b121683c27025', 'url': 'https://www.gravatar.com/avatar/adb4591e2216aa1a7ed89a5097a6351f?size=512&q=$75' })

precacheAndRoute(WB_MANIFEST);

cleanupOutdatedCaches();

registerRoute(
  "/",
  new NetworkFirst({
    cacheName: "start-url",
  }),
  "GET"
);
registerRoute(
  /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
  new CacheFirst({
    cacheName: "google-fonts",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 31536e3,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  "GET"
);
registerRoute(
  /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
  new StaleWhileRevalidate({
    cacheName: "static-font-assets",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 604800,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  "GET"
);
registerRoute(
  /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
  new NetworkOnly({
    cacheName: "static-image-assets",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 64,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  "GET"
);
registerRoute(
  /\.(?:js)$/i,
  new StaleWhileRevalidate({
    cacheName: "static-js-assets",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  "GET"
);
registerRoute(
  /\.(?:css|less)$/i,
  new StaleWhileRevalidate({
    cacheName: "static-style-assets",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  "GET"
);
registerRoute(
  /\.(?:json|xml|csv)$/i,
  new NetworkOnly({
    cacheName: "static-data-assets",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  "GET"
);

setDefaultHandler(new StaleWhileRevalidate());

setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case "document":
      return matchPrecache(event.request)
      break;
    case "font":
      return matchPrecache(FALLBACK_FONT_URL);
    default:
      return Response.error();
  }
});
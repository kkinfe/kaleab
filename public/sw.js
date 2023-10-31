!function(){"use strict";var e={913:function(){try{self["workbox:core:6.5.4"]&&_()}catch(e){}},550:function(){try{self["workbox:expiration:6.5.4"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function __webpack_require__(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}},i=!0;try{e[r](s,s.exports,__webpack_require__),i=!1}finally{i&&delete t[r]}return s.exports}!function(){var e;let t,r,a,s,i;__webpack_require__(913);let messageGenerator=(e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r};let WorkboxError_WorkboxError=class WorkboxError_WorkboxError extends Error{constructor(e,t){let r=messageGenerator(e,t);super(r),this.name=e,this.details=t}};let n=new Set,o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},_createCacheName=e=>[o.prefix,e,o.suffix].filter(e=>e&&e.length>0).join("-"),eachCacheNameDetail=e=>{for(let t of Object.keys(o))e(t)},c={updateDetails:e=>{eachCacheNameDetail(t=>{"string"==typeof e[t]&&(o[t]=e[t])})},getGoogleAnalyticsName:e=>e||_createCacheName(o.googleAnalytics),getPrecacheName:e=>e||_createCacheName(o.precache),getPrefix:()=>o.prefix,getRuntimeName:e=>e||_createCacheName(o.runtime),getSuffix:()=>o.suffix};function stripParams(e,t){let r=new URL(e);for(let e of t)r.searchParams.delete(e);return r.href}async function cacheMatchIgnoreParams(e,t,r,a){let s=stripParams(t.url,r);if(t.url===s)return e.match(t,a);let i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),n=await e.keys(t,i);for(let t of n){let i=stripParams(t.url,r);if(s===i)return e.match(t,a)}}function dontWaitFor(e){e.then(()=>{})}let Deferred=class Deferred{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};async function executeQuotaErrorCallbacks(){for(let e of n)await e()}let getFriendlyURL=e=>{let t=new URL(String(e),location.href);return t.href.replace(RegExp(`^${location.origin}`),"")};function timeout_timeout(e){return new Promise(t=>setTimeout(t,e))}function waitUntil(e,t){let r=t();return e.waitUntil(r),r}async function copyResponse(e,r){let a=null;if(e.url){let t=new URL(e.url);a=t.origin}if(a!==self.location.origin)throw new WorkboxError_WorkboxError("cross-origin-copy-response",{origin:a});let s=e.clone(),i={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},n=r?r(i):i,o=!function(){if(void 0===t){let e=new Response("");if("body"in e)try{new Response(e.body),t=!0}catch(e){t=!1}t=!1}return t}()?await s.blob():s.body;return new Response(o,n)}let instanceOfAny=(e,t)=>t.some(t=>e instanceof t),l=new WeakMap,h=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,p={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wrap(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function wrap(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let unlisten=()=>{e.removeEventListener("success",success),e.removeEventListener("error",error)},success=()=>{t(wrap(e.result)),unlisten()},error=()=>{r(e.error),unlisten()};e.addEventListener("success",success),e.addEventListener("error",error)});return t.then(t=>{t instanceof IDBCursor&&l.set(t,e)}).catch(()=>{}),f.set(t,e),t}(e);if(d.has(e))return d.get(e);let s="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(unwrap(this),e),wrap(l.get(this))}:function(...e){return wrap(t.apply(unwrap(this),e))}:function(e,...r){let a=t.call(unwrap(this),e,...r);return u.set(a,e.sort?e.sort():[e]),wrap(a)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let unlisten=()=>{e.removeEventListener("complete",complete),e.removeEventListener("error",error),e.removeEventListener("abort",error)},complete=()=>{t(),unlisten()},error=()=>{r(e.error||new DOMException("AbortError","AbortError")),unlisten()};e.addEventListener("complete",complete),e.addEventListener("error",error),e.addEventListener("abort",error)});h.set(e,t)}(t),instanceOfAny(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,p):t;return s!==e&&(d.set(e,s),f.set(s,e)),s}let unwrap=e=>f.get(e),g=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],w=new Map;function getMethod(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let r=t.replace(/FromIndex$/,""),a=t!==r,s=m.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(s||g.includes(r)))return;let method=async function(e,...t){let i=this.transaction(e,s?"readwrite":"readonly"),n=i.store;return a&&(n=n.index(t.shift())),(await Promise.all([n[r](...t),s&&i.done]))[0]};return w.set(t,method),method}p={...e=p,get:(t,r,a)=>getMethod(t,r)||e.get(t,r,a),has:(t,r)=>!!getMethod(t,r)||e.has(t,r)},__webpack_require__(550);let y="cache-entries",normalizeURL=e=>{let t=new URL(e,location.href);return t.hash="",t.href};let CacheTimestampsModel=class CacheTimestampsModel{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){let t=e.createObjectStore(y,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){let r=indexedDB.deleteDatabase(e);t&&r.addEventListener("blocked",e=>t(e.oldVersion,e)),wrap(r).then(()=>void 0)}(this._cacheName)}async setTimestamp(e,t){e=normalizeURL(e);let r={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=await this.getDb(),s=a.transaction(y,"readwrite",{durability:"relaxed"});await s.store.put(r),await s.done}async getTimestamp(e){let t=await this.getDb(),r=await t.get(y,this._getId(e));return null==r?void 0:r.timestamp}async expireEntries(e,t){let r=await this.getDb(),a=await r.transaction(y).store.index("timestamp").openCursor(null,"prev"),s=[],i=0;for(;a;){let r=a.value;r.cacheName===this._cacheName&&(e&&r.timestamp<e||t&&i>=t?s.push(a.value):i++),a=await a.continue()}let n=[];for(let e of s)await r.delete(y,e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+normalizeURL(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:r,upgrade:a,blocking:s,terminated:i}={}){let n=indexedDB.open(e,1),o=wrap(n);return a&&n.addEventListener("upgradeneeded",e=>{a(wrap(n.result),e.oldVersion,e.newVersion,wrap(n.transaction),e)}),r&&n.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("workbox-expiration",0,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}};let CacheExpiration=class CacheExpiration{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new CacheTimestampsModel(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;let e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),r=await self.caches.open(this._cacheName);for(let e of t)await r.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,dontWaitFor(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(!this._maxAgeSeconds)return!1;{let t=await this._timestampModel.getTimestamp(e),r=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<r}}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}};let ExpirationPlugin=class ExpirationPlugin{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:r,cachedResponse:a})=>{if(!a)return null;let s=this._isResponseDateFresh(a),i=this._getCacheExpiration(r);dontWaitFor(i.expireEntries());let n=i.updateTimestamp(t.url);if(e)try{e.waitUntil(n)}catch(e){}return s?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{let r=this._getCacheExpiration(e);await r.updateTimestamp(t.url),await r.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&n.add(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===c.getRuntimeName())throw new WorkboxError_WorkboxError("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new CacheExpiration(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;let t=this._getDateHeaderTimestamp(e);if(null===t)return!0;let r=Date.now();return t>=r-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;let t=e.headers.get("date"),r=new Date(t),a=r.getTime();return isNaN(a)?null:a}async deleteCacheAndMetadata(){for(let[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}};function toRequest(e){return"string"==typeof e?new Request(e):e}__webpack_require__(873);let StrategyHandler=class StrategyHandler{constructor(e,t){for(let r of(this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new Deferred,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map,this._plugins))this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,r=toRequest(e);if("navigate"===r.mode&&t instanceof FetchEvent&&t.preloadResponse){let e=await t.preloadResponse;if(e)return e}let a=this.hasCallback("fetchDidFail")?r.clone():null;try{for(let e of this.iterateCallbacks("requestWillFetch"))r=await e({request:r.clone(),event:t})}catch(e){if(e instanceof Error)throw new WorkboxError_WorkboxError("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}let s=r.clone();try{let e;for(let a of(e=await fetch(r,"navigate"===r.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))e=await a({event:t,request:s,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:s.clone()}),e}}async fetchAndCachePut(e){let t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){let t;let r=toRequest(e),{cacheName:a,matchOptions:s}=this._strategy,i=await this.getCacheKey(r,"read"),n=Object.assign(Object.assign({},s),{cacheName:a});for(let e of(t=await caches.match(i,n),this.iterateCallbacks("cachedResponseWillBeUsed")))t=await e({cacheName:a,matchOptions:s,cachedResponse:t,request:i,event:this.event})||void 0;return t}async cachePut(e,t){let r=toRequest(e);await timeout_timeout(0);let a=await this.getCacheKey(r,"write");if(!t)throw new WorkboxError_WorkboxError("cache-put-with-no-response",{url:getFriendlyURL(a.url)});let s=await this._ensureResponseSafeToCache(t);if(!s)return!1;let{cacheName:i,matchOptions:n}=this._strategy,o=await self.caches.open(i),c=this.hasCallback("cacheDidUpdate"),l=c?await cacheMatchIgnoreParams(o,a.clone(),["__WB_REVISION__"],n):null;try{await o.put(a,c?s.clone():s)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await executeQuotaErrorCallbacks(),e}for(let e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:l,newResponse:s.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){let r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let a=e;for(let e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=toRequest(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[r]=a}return this._cacheKeys[r]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if("function"==typeof t[e]){let r=this._pluginStateMap.get(t),statefulCallback=a=>{let s=Object.assign(Object.assign({},a),{state:r});return t[e](s)};yield statefulCallback}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(let e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return!r&&t&&200!==t.status&&(t=void 0),t}};let Strategy_Strategy=class Strategy_Strategy{constructor(e={}){this.cacheName=c.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,s=new StrategyHandler(this,{event:t,request:r,params:a}),i=this._getResponse(s,r,t),n=this._awaitComplete(i,s,r,t);return[i,n]}async _getResponse(e,t,r){let a;await e.runCallbacks("handlerWillStart",{event:r,request:t});try{if(!(a=await this._handle(t,e))||"error"===a.type)throw new WorkboxError_WorkboxError("no-response",{url:t.url})}catch(s){if(s instanceof Error){for(let i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:s,event:r,request:t}))break}if(a);else throw s}for(let s of e.iterateCallbacks("handlerWillRespond"))a=await s({event:r,request:t,response:a});return a}async _awaitComplete(e,t,r,a){let s,i;try{s=await e}catch(e){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:r,response:s}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:r,response:s,error:i}),t.destroy(),i)throw i}};let b={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let NetworkOnly=class NetworkOnly extends Strategy_Strategy{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let r,a;try{let a=[t.fetch(e)];if(this._networkTimeoutSeconds){let e=timeout_timeout(1e3*this._networkTimeoutSeconds);a.push(e)}if(!(r=await Promise.race(a)))throw Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(a=e)}if(!r)throw new WorkboxError_WorkboxError("no-response",{url:e.url,error:a});return r}};let StaleWhileRevalidate=class StaleWhileRevalidate extends Strategy_Strategy{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(b)}async _handle(e,t){let r;let a=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(a);let s=await t.cacheMatch(e);if(s);else try{s=await a}catch(e){e instanceof Error&&(r=e)}if(!s)throw new WorkboxError_WorkboxError("no-response",{url:e.url,error:r});return s}};__webpack_require__(80);let normalizeHandler=e=>e&&"object"==typeof e?e:{handle:e};let Route_Route=class Route_Route{constructor(e,t,r="GET"){this.handler=normalizeHandler(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=normalizeHandler(e)}};let RegExpRoute=class RegExpRoute extends Route_Route{constructor(e,t,r){super(({url:t})=>{let r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)},t,r)}};let Router=class Router{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){let{payload:t}=e.data,r=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);let r=new Request(...t);return this.handleRequest({request:r,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let r;let a=new URL(e.url,location.href);if(!a.protocol.startsWith("http"))return;let s=a.origin===location.origin,{params:i,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:a}),o=n&&n.handler,c=e.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return;try{r=o.handle({url:a,request:e,event:t,params:i})}catch(e){r=Promise.reject(e)}let l=n&&n.catchHandler;return r instanceof Promise&&(this._catchHandler||l)&&(r=r.catch(async r=>{if(l)try{return await l.handle({url:a,request:e,event:t,params:i})}catch(e){e instanceof Error&&(r=e)}if(this._catchHandler)return this._catchHandler.handle({url:a,request:e,event:t});throw r})),r}findMatchingRoute({url:e,sameOrigin:t,request:r,event:a}){let s=this._routes.get(r.method)||[];for(let i of s){let s;let n=i.match({url:e,sameOrigin:t,request:r,event:a});if(n)return Array.isArray(s=n)&&0===s.length?s=void 0:n.constructor===Object&&0===Object.keys(n).length?s=void 0:"boolean"==typeof n&&(s=void 0),{route:i,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,normalizeHandler(e))}setCatchHandler(e){this._catchHandler=normalizeHandler(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new WorkboxError_WorkboxError("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new WorkboxError_WorkboxError("unregister-route-route-not-registered")}};let getOrCreateDefaultRouter=()=>(s||((s=new Router).addFetchListener(),s.addCacheListener()),s);function registerRoute(e,t,r){let a;if("string"==typeof e){let s=new URL(e,location.href);a=new Route_Route(({url:e})=>e.href===s.href,t,r)}else if(e instanceof RegExp)a=new RegExpRoute(e,t,r);else if("function"==typeof e)a=new Route_Route(e,t,r);else if(e instanceof Route_Route)a=e;else throw new WorkboxError_WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});let s=getOrCreateDefaultRouter();return s.registerRoute(a),a}__webpack_require__(977);let PrecacheInstallReportPlugin=class PrecacheInstallReportPlugin{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){let e=t.originalRequest.url;r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r}}};let PrecacheCacheKeyPlugin=class PrecacheCacheKeyPlugin{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{let r=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return r?new Request(r,{headers:e.headers}):e},this._precacheController=e}};let PrecacheStrategy=class PrecacheStrategy extends Strategy_Strategy{constructor(e={}){e.cacheName=c.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){let r=await t.cacheMatch(e);return r||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let r;let a=t.params||{};if(this._fallbackToNetwork){let s=a.integrity,i=e.integrity;r=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||s:void 0})),s&&(!i||i===s)&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,r.clone()))}else throw new WorkboxError_WorkboxError("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return r}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let r=await t.fetch(e),a=await t.cachePut(e,r.clone());if(!a)throw new WorkboxError_WorkboxError("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[r,a]of this.plugins.entries())a!==PrecacheStrategy.copyRedirectedCacheableResponsesPlugin&&(a===PrecacheStrategy.defaultPrecacheCacheabilityPlugin&&(e=r),a.cacheWillUpdate&&t++);0===t?this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}};PrecacheStrategy.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},PrecacheStrategy.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await copyResponse(e):e};let PrecacheController=class PrecacheController{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new PrecacheStrategy({cacheName:c.getPrecacheName(e),plugins:[...t,new PrecacheCacheKeyPlugin({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url);let{cacheKey:e,url:a}=function(e){if(!e)throw new WorkboxError_WorkboxError("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){let t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}let{revision:t,url:r}=e;if(!r)throw new WorkboxError_WorkboxError("add-to-cache-list-unexpected-type",{entry:e});if(!t){let e=new URL(r,location.href);return{cacheKey:e.href,url:e.href}}let a=new URL(r,location.href),s=new URL(r,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:s.href}}(r),s="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new WorkboxError_WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==r.integrity)throw new WorkboxError_WorkboxError("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,r.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,s),t.length>0){let e=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return waitUntil(e,async()=>{let t=new PrecacheInstallReportPlugin;for(let[r,a]of(this.strategy.plugins.push(t),this._urlsToCacheKeys)){let t=this._cacheKeysToIntegrities.get(a),s=this._urlsToCacheModes.get(r),i=new Request(r,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:i,event:e}))}let{updatedURLs:r,notUpdatedURLs:a}=t;return{updatedURLs:r,notUpdatedURLs:a}})}activate(e){return waitUntil(e,async()=>{let e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),a=[];for(let s of t)r.has(s.url)||(await e.delete(s),a.push(s.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r){let e=await self.caches.open(this.strategy.cacheName);return e.match(r)}}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new WorkboxError_WorkboxError("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:t},r.params),this.strategy.handle(r))}};let getOrCreatePrecacheController_getOrCreatePrecacheController=()=>(i||(i=new PrecacheController),i);let PrecacheRoute=class PrecacheRoute extends Route_Route{constructor(e,t){super(({request:r})=>{let a=e.getURLsToCacheKeys();for(let s of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:a=!0,urlManipulation:s}={}){let i=new URL(e,location.href);i.hash="",yield i.href;let n=function(e,t=[]){for(let r of[...e.searchParams.keys()])t.some(e=>e.test(r))&&e.searchParams.delete(r);return e}(i,t);if(yield n.href,r&&n.pathname.endsWith("/")){let e=new URL(n.href);e.pathname+=r,yield e.href}if(a){let e=new URL(n.href);e.pathname+=".html",yield e.href}if(s){let e=s({url:i});for(let t of e)yield t.href}}(r.url,t)){let t=a.get(s);if(t){let r=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:r}}}},e.strategy)}};let x="-precache-",deleteOutdatedCaches=async(e,t=x)=>{let r=await self.caches.keys(),a=r.filter(r=>r.includes(t)&&r.includes(self.registration.scope)&&r!==e);return await Promise.all(a.map(e=>self.caches.delete(e))),a};function matchPrecache(e){let t=getOrCreatePrecacheController_getOrCreatePrecacheController();return t.matchPrecache(e)}self.skipWaiting(),self.addEventListener("activate",()=>self.clients.claim());let R=[{'revision':'c239d7640c2c403b13f0a1303d6e9cca','url':'/_next/static/Ub2b9Yos0arC8fj5YIHVt/_buildManifest.js'},{'revision':'b6652df95db52feb4daf4eca35380933','url':'/_next/static/Ub2b9Yos0arC8fj5YIHVt/_ssgManifest.js'},{'revision':'0c7baedefba6b077','url':'/_next/static/chunks/framework-0c7baedefba6b077.js'},{'revision':'9594e9f709d47ceb','url':'/_next/static/chunks/main-9594e9f709d47ceb.js'},{'revision':'2718b8e338d39542','url':'/_next/static/chunks/pages/_app-2718b8e338d39542.js'},{'revision':'08a9db0f433628d8','url':'/_next/static/chunks/pages/_error-08a9db0f433628d8.js'},{'revision':'94bebc4e3c633d71','url':'/_next/static/chunks/pages/blogs-94bebc4e3c633d71.js'},{'revision':'2d14a970381eb21d','url':'/_next/static/chunks/pages/index-2d14a970381eb21d.js'},{'revision':'7edb839644924fc5','url':'/_next/static/chunks/pages/projects-7edb839644924fc5.js'},{'revision':'837c0df77fd5009c9e46d446188ecfd0','url':'/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js'},{'revision':'e0625a99da900f0f','url':'/_next/static/chunks/webpack-e0625a99da900f0f.js'},{'revision':'f971f74325741086','url':'/_next/static/css/f971f74325741086.css'},{'revision':'0dd5ea9c9faaaf78fb51539420facae1','url':'/favicon.ico'},{'revision':'1de17b6f4c43a3c1c0d716942ca83bf5','url':'/iconx/android-144x144.png'},{'revision':'6d44a750b2020a4758b7c0e525f68d98','url':'/iconx/android-192x192.png'},{'revision':'78eb7d3b43d02da527b1565c53897a5a','url':'/iconx/android-36x36.png'},{'revision':'d961a011beb1767f703aa088f446c73e','url':'/iconx/android-48x48.png'},{'revision':'957b98b0e7499657b4c704c826824633','url':'/iconx/android-72x72.png'},{'revision':'f1af95292588b00745f0664ec3a67029','url':'/iconx/android-96x96.png'},{'revision':'6d44a750b2020a4758b7c0e525f68d98','url':'/iconx/android-chrome-192x192.png'},{'revision':'31bd99868c5a3ceb18c61bb69f6bdc60','url':'/iconx/android-chrome-512x512.png'},{'revision':'ba7feadb39ca290de6b03469c757580f','url':'/iconx/android-chrome-maskable-192x192.png'},{'revision':'31bd99868c5a3ceb18c61bb69f6bdc60','url':'/iconx/android-chrome-maskable-512x512.png'},{'revision':'aae7f261eb36ec4804c064e204e7998c','url':'/iconx/apple-touch-icon.png'},{'revision':'0e42ca5a6920d430fd97ee9ddd6c82da','url':'/robots.txt'},{'revision':'20e8e8f53487ec7109eb6856fe725bbe','url':'/rss/feed.json'},{'revision':'32f1bd0dbb332e6ec7b0e3a9ec626ef4','url':'/rss/feed.xml'},{'revision':'da3f4b014697cb1e47a01bd96166aae1','url':'/site.webmanifest'},{'revision':'4443539dc594cb81ff4246eb0b8e6fbd','url':'/sitemap.xml'},{'revision':'638dd8c9594da44f4132e451bf934516','url':'/sw.js'}];R.push({revision:"c239d7640c2c403b13f0a1303d6e9cca",url:"/_next/static/zme-eJskRpyK5yhmgDOTL/_buildManifest.js"},{revision:"b6652df95db52feb4daf4eca35380933",url:"/_next/static/zme-eJskRpyK5yhmgDOTL/_ssgManifest.js"},{revision:"0c7baedefba6b077",url:"/_next/static/chunks/framework-0c7baedefba6b077.js"},{revision:"9594e9f709d47ceb",url:"/_next/static/chunks/main-b21f03ef96b71999.js"},{revision:"2718b8e338d39542",url:"/_next/static/chunks/pages/_app-1aa4f2cede653255.js"},{revision:"08a9db0f433628d8",url:"/_next/static/chunks/pages/_error-08a9db0f433628d8.js"},{revision:"94bebc4e3c633d71",url:"/_next/static/chunks/pages/blogs-94bebc4e3c633d71.js"},{revision:"2d14a970381eb21d",url:"/_next/static/chunks/pages/index-2d14a970381eb21d.js"},{revision:"7edb839644924fc5",url:"/_next/static/chunks/pages/projects-7edb839644924fc5.js"},{revision:"e0625a99da900f0f",url:"/_next/static/chunks/webpack-e0625a99da900f0f.js"},{revision:"f971f74325741086",url:"/_next/static/css/f971f74325741086.css"},{revision:"0dd5ea9c9faaaf78fb51539420facae1",url:"/favicon.ico"},{revision:"1de17b6f4c43a3c1c0d716942ca83bf5",url:"/iconx/android-144x144.png"},{revision:"6d44a750b2020a4758b7c0e525f68d98",url:"/iconx/android-192x192.png"},{revision:"78eb7d3b43d02da527b1565c53897a5a",url:"/iconx/android-36x36.png"},{revision:"d961a011beb1767f703aa088f446c73e",url:"/iconx/android-48x48.png"},{revision:"957b98b0e7499657b4c704c826824633",url:"/iconx/android-72x72.png"},{revision:"f1af95292588b00745f0664ec3a67029",url:"/iconx/android-96x96.png"},{revision:"6d44a750b2020a4758b7c0e525f68d98",url:"/iconx/android-chrome-192x192.png"},{revision:"31bd99868c5a3ceb18c61bb69f6bdc60",url:"/iconx/android-chrome-512x512.png"},{revision:"ba7feadb39ca290de6b03469c757580f",url:"/iconx/android-chrome-maskable-192x192.png"},{revision:"31bd99868c5a3ceb18c61bb69f6bdc60",url:"/iconx/android-chrome-maskable-512x512.png"},{revision:"aae7f261eb36ec4804c064e204e7998c",url:"/iconx/apple-touch-icon.png"},{revision:"0e42ca5a6920d430fd97ee9ddd6c82da",url:"/robots.txt"},{revision:"20e8e8f53487ec7109eb6856fe725bbe",url:"/rss/feed.json"},{revision:"420c157464b590ffa61421c205fcc0a3",url:"/rss/feed.xml"},{revision:"da3f4b014697cb1e47a01bd96166aae1",url:"/site.webmanifest"},{revision:"4443539dc594cb81ff4246eb0b8e6fbd",url:"/sitemap.xml"},{revision:"6b8d5343a0aeb791594b121683c2702c",url:"/sw.js"},{revision:"6b8d5343a0aeb791594b121683c27025",url:"https://www.gravatar.com/avatar/adb4591e2216aa1a7ed89a5097a6351f?size=512&q=$75"}),function(e){let t=getOrCreatePrecacheController_getOrCreatePrecacheController();t.precache(e)}(R),function(e){let t=getOrCreatePrecacheController_getOrCreatePrecacheController(),r=new PrecacheRoute(t,e);registerRoute(r)}(void 0),self.addEventListener("activate",e=>{let t=c.getPrecacheName();e.waitUntil(deleteOutdatedCaches(t).then(e=>{}))}),registerRoute("/",new class extends Strategy_Strategy{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(b),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let r;let a=[],s=[];if(this._networkTimeoutSeconds){let{id:i,promise:n}=this._getTimeoutPromise({request:e,logs:a,handler:t});r=i,s.push(n)}let i=this._getNetworkPromise({timeoutId:r,request:e,logs:a,handler:t});s.push(i);let n=await t.waitUntil((async()=>await t.waitUntil(Promise.race(s))||await i)());if(!n)throw new WorkboxError_WorkboxError("no-response",{url:e.url});return n}_getTimeoutPromise({request:e,logs:t,handler:r}){let a;let s=new Promise(t=>{let onNetworkTimeout=async()=>{t(await r.cacheMatch(e))};a=setTimeout(onNetworkTimeout,1e3*this._networkTimeoutSeconds)});return{promise:s,id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:r,handler:a}){let s,i;try{i=await a.fetchAndCachePut(t)}catch(e){e instanceof Error&&(s=e)}return e&&clearTimeout(e),(s||!i)&&(i=await a.cacheMatch(t)),i}}({cacheName:"start-url"}),"GET"),registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new class extends Strategy_Strategy{async _handle(e,t){let r,a=await t.cacheMatch(e);if(!a)try{a=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(r=e)}if(!a)throw new WorkboxError_WorkboxError("no-response",{url:e.url,error:r});return a}}({cacheName:"google-fonts",plugins:[new ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new NetworkOnly({cacheName:"static-image-assets",plugins:[new ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),registerRoute(/\.(?:js)$/i,new StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),registerRoute(/\.(?:css|less)$/i,new StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),registerRoute(/\.(?:json|xml|csv)$/i,new NetworkOnly({cacheName:"static-data-assets",plugins:[new ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),function(e){let t=getOrCreateDefaultRouter();t.setDefaultHandler(e)}(new StaleWhileRevalidate),function(e){let t=getOrCreateDefaultRouter();t.setCatchHandler(e)}(e=>{let{event:t}=e;switch(t.request.destination){case"document":return matchPrecache(t.request);case"font":return matchPrecache(FALLBACK_FONT_URL);default:return Response.error()}})}()}();
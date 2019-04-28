const CACHE_NAME = 'cache-v1';

const urlsToCache = [
    'index.html'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(
                function (cache) {
                    return cache.addAll(urlsToCache);
                })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(
                function (response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                })
    );
});

// self.addEventListener('install', (event) => {
//     console.log('[ServiceWorker] Install');
//     const saving = caches.open('cache-key-name')
//         .then(cache => {
//             console.log('Will cache');
//             return cache.addAll(urlsToCache);
//         })
//         .catch(error => {
//             console.error('Failed to install', error);
//         });

//     event.waitUntil(saving);
// });

// self.addEventListener('activate', (event) => {
//     console.log('[ServiceWorker] Activate');
//     const deleting = caches.keys()
//         .then(cacheKeys => {
//             console.log('Will delete Cache');
//             return Promise.all(
//                 cacheKeys.map(cacheKey => {
//                     return caches.delete(cacheKey);
//                 })
//             )
//         })
//         .catch(error => {
//             console.error('Failed to activate', error);
//         });

//     event.waitUntil(deleting);
// });

// self.addEventListener('fetch', (event) => {
//     console.log('[ServiceWorker] Fetch')
//     const fetching = caches.open('cache-key-name')
//         .then(cache => {
//             console.log(`Cache found`);
//             return cache.match(event.request)
//                 .then(response => {
//                     console.log('Try to be returned from Cache');
//                     if (response) {
//                         return response;
//                     }
//                     return fetch(event.request)
//                         .then((response) => {
//                             const cloneResponse = response.clone();
//                             if (response || response.status == 200) {
//                                 caches.open('cache-key-name')
//                                     .then((cache) => {
//                                         cache.put(event.request, cloneResponse)
//                                             .then(() => {
//                                                 console.log('Succeed to add Cache');
//                                             })
//                                             .catch((error) => {
//                                                 console.error('Failed to add Cache', error);
//                                             });
//                                     })
//                                     .catch((error) => {
//                                         console.error('Failed to find Cache', error);
//                                     })
//                             } else {
//                                 console.log('Response invalid');
//                                 return response;
//                             }
//                         })
//                 })
//                 .catch(error => {
//                     console.error('Failed to fetch', error);
//                 });
//         })
//         .catch(error => {
//             console.error('Failed to process cache', error);
//         });
//     event.respondWith(fetching);
// });

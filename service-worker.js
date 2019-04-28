self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');
    const saving = caches.open('cache-key-name')
        .then(cache => {
            console.log('Will cache');
            return cache.addAll([
                'index.html'
            ]);
        })
        .catch(error => {
            console.error('Failed to install', error);
        });

    event.waitUntil(saving);
});

self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');
    const deleting = caches.keys()
        .then(cacheKeys => {
            return Promise.all(
                cacheKeys.map(cacheKey => {
                    if (cacheKey !== 'cache-key-name') {
                        console.log(`Delete cache: ${cacheKey}`);
                        return caches.delete(cacheKey);
                    }
                })
            )
        })
        .catch(error => {
            console.error('Failed to activate', error);
        });

    event.waitUntil(deleting);
});

self.addEventListener('fetch', (event) => {
    console.log('[ServiceWorker] Fetch')
    const fetching = caches.open('cache-key-name')
        .then(cache => {
            console.log(`Request cached`);
            return cache.match(event.request)
                .then(response => {
                    console.log('Succeed to be returned from cache');
                    return response || fetch(event.request.clone());
                })
                .catch(error => {
                    console.error('Failed to fetch', error);
                });
        })
        .catch(error => {
            console.error('Failed to process cache', error);
        });
    event.respondWith(fetching);
});

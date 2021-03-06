const cachePWA = 'cache-site-v1';

const assets = [
    "/",
    "/index.html",
    "/contac.html",
    "/elements.html",
    "/generic.html",
    "/css/style.css",
    "/js/app.js",

    "assets/css/images/overlay.png",
    "assets/css/fontawesome-all.min.css",
    "assets/css/main.css",
    "assets/js/breakpoints.min.js",
    "assets/js/browser.min.js",
    "assets/js/jquery.dropotron.min.js",
    "assets/js/jquery.min.js",
    "assets/js/jquery.scrollex.min.js",
    "assets/js/main.js",
    "assets/js/utils.js",
    "images/banner.jpg",
    "images/pic01.jpg",
    "images/pic02.jpg",
    "images/pic03.jpg",
    "images/pic04.jpg",
    "images/pic05.jpg",
    "img/icons/ico32.png",
    "img/icons/ico64.png",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
];

self.addEventListener('install', installEvent => {
    installEvent.waituntil(
        caches.open(cachePWA)
        .then( cacheResh => { 
            return cacheResh.addAll(assets);
    })
    )
});

self.addEventListener('fect', fetchEvent => {
    //console.log(fetchEvent.request.url);
    fetchEvent.respondWith(
        caches.open(cachePWA).then(cache => {
            return cache.match(fetchEvent).then(response => {
                return response || fetch(fetchEvent.request).then( response => {
                    cache.put(fetchEvent.request, response.clone());
                });
            });
        })
    )
})
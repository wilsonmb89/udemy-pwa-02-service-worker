self.addEventListener('fetch', event => {
  if (event.request.url.includes('.jpg')) {
    console.log(event.request.url);

    // const fotoReq = fetch('img/main.jpg');
    // const fotoReq = fetch(event.request.url);
    const fotoReq = fetch(event.request);

    event.respondWith(fotoReq);
  }
});
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(res => res.ok ? res : fetch('img/main.jpg'))
  );
});
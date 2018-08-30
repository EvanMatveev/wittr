self.addEventListener('fetch', function(event) {
  console.log("service worker is waiting to be changed" + event.request);
});
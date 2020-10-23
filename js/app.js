/* if ('serviceWorker' in navigator) {
  console.log('SW existe!');
} */


// Condirmar si se puede usar el SW
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js');
}
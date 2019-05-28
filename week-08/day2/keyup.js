
// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

document.body.addEventListener('keyup', (event) => {
  const h1 = document.querySelector('h1');
  h1.innerText =  event.keyCode;
});
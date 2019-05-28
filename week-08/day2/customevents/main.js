'use strict';

const myDiv = document.querySelector('div');


myDiv.addEventListener('click', (event)=>{
  event.clientX < 200 ? myDiv.dispatchEvent(new Event('left-side-click')) : myDiv.dispatchEvent(new Event('right-side-click'));
});

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});
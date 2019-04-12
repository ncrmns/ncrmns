'use strict';
'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size = 300;
let colors = ['green', 'gray', 'black', 'darkgreen', 'lightgreen'];


circle(size, size, size);

function circle(x, y, size) {
  if (size < 5) {
    return;
  }

  ctx.strokeStyle = colors[Math.floor(Math.random() * (5))];
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.stroke();

  circle(x, y - size / 2, size / 2);
  circle(x - size / 2 * Math.cos(Math.PI / 6), y + size / 2 * Math.sin(Math.PI / 6), size / 2);
  circle(x + size / 2 * Math.cos(Math.PI / 6), y + size / 2 * Math.sin(Math.PI / 6), size / 2);
}








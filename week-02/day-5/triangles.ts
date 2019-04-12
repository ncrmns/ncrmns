'use strict';
'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size = 600;
let colors = [ 'rgba(27, 145, 45, 0.4)', 'rgba(196, 125, 189, 0.4)', 'rgba(99, 39, 145,0.4)', 'rgba(79, 154, 173, 0.4)'];


triangle(0, 0, size, colors);

function triangle(x, y, size, colors) {
  if (size < 3){
    return;
  }

  ctx.lineWidth = 4;
  ctx.strokeStyle = colors[Math.floor(Math.random() * (5))];//color random change
  ctx.beginPath();
  ctx.moveTo(x,y)
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x, y);
  ctx.stroke();

  let random = Math.floor(Math.random() * (60))//random for size change

  triangle(x, y, size / 2 - random, colors);
  triangle(x + size / 2, y, size / 2, colors);
  triangle(x + size / 4, y + size / 2, size / 2, colors);
}








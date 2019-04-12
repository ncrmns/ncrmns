'use strict';
'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size = 600;
let colors = ['green', 'gray', 'black', 'darkgreen', 'lightgreen'];


triangle(0, 0, size, colors);

function triangle(x, y, size, colors) {
  if (size < 3){
    return;
  }

  ctx.lineWidth = 4;
  ctx.fillStyle = colors[Math.floor(Math.random() * (5))];
  ctx.beginPath();
  ctx.moveTo(x,y)
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x, y);
  ctx.fill();


  triangle(x, y, size / 2, colors);
  triangle(x + size / 2, y, size / 2, colors);
  triangle(x + size / 4, y + size / 2, size / 2, colors);
}








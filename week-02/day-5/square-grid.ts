'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let size2 = 600;
let colors = ['green', 'gray', 'black' ];


squ(size2 / 2, size2 / 2, size2, colors);

function squ(x, y, size, colors) {
  if (size < 50) {
    return;
  }

  ctx.beginPath();
  ctx.lineWidth = size / 25
  ctx.strokeStyle = colors[Math.floor(Math.random() * (3))];
  ctx.rect(x - size / 4, y - size / 4, size / 2, size / 2);
  ctx.stroke();

  squ(x - size / 4, y - size / 4, size / 2, colors);//topleft
  squ(x + size / 4, y + size / 4, size / 2, colors);//bottomright
  squ(x + size / 4, y - size / 4, size / 2, colors);//topright
  squ(x - size / 4, y + size / 4, size / 2, colors);//bottomleft
}







'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



let size = 600;
let colors = ['green', 'gray', 'black', 'darkgreen', 'lightgreen'];


hex(size / 4, 0, size, colors);

function hex(x, y, size, colors) {
  if (size < 10) {
    return;
  }
  ctx.lineWidth = 4;
  ctx.fillStyle = colors[Math.floor(Math.random() * (5))];
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 2, y);
  ctx.lineTo(x + size / 4 * 3, y + size / 2);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x, y + size);
  ctx.lineTo(x - size / 4, y + size / 2);
  ctx.lineTo(x, y);
  ctx.fill();


  hex(x, y, size / 3, colors);
  hex(x + size / 3, y, size / 3, colors);
  hex(x + size / 2, y + size / 3, size / 3, colors);
  hex(x + size / 3, y + size * 2 / 3, size / 3, colors);
  hex(x, y + size * 2 / 3, size / 3, colors);
  hex(x - size / 6, y + size / 3, size / 3, colors);
}
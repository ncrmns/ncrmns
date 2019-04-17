'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


//background
let size = 600;
ctx.fillStyle = 'rgb(0, 102, 102)';
ctx.rect(0, 0, 600, 600);
ctx.fill();
//
let ratio = Math.PI / 4;
tree(300, 600, 120, Math.PI / 2, ratio);

function tree(x, y, size, ang, ratio) {
  if (size < 50) {
    return;
  }
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(255, 204, 0.01)';
  ctx.moveTo(x, y);
  ctx.lineTo(x - Math.cos(ang) * size, y - Math.sin(ang) * size);
  ctx.stroke();

  tree(x - Math.cos(ang) * size, y - Math.sin(ang) * size, size * 0.75, ang + ratio, ratio);
  tree(x - Math.cos(ang) * size, y - Math.sin(ang) * size, size * 0.75, ang - ratio, ratio);
  tree(x - Math.cos(ang) * size, y - Math.sin(ang) * size, size * 0.75, ang, ratio);
}





'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


//background
let size = 600;
ctx.fillStyle = 'rgb(0, 102, 102)';
ctx.rect(0, 0, 600, 600);
ctx.fill();
//

tree (300,600, 100, Math.PI/2);

function tree(x, y, size, ang) {
  if (size < 4) {
    return;
  }
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - Math.cos(ang)*size , y - Math.sin(ang)*size);
  ctx.stroke();

  tree(x - Math.cos(ang)*size ,y - Math.sin(ang)*size ,size*2/3, ang + Math.PI/4);
  tree(x - Math.cos(ang)*size ,y - Math.sin(ang)*size ,size*2/3, ang - Math.PI/4);
  tree(x , y , size*2/3, ang)
}





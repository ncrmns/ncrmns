'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


//background black
let size = 600;
ctx.fillStyle = 'black';
ctx.rect(0,0,600,600);
ctx.fill();
//

const colors = ['green', 'gray', 'black', 'darkgreen', 'lightgreen'];
carpet(0,0,size, colors);



function carpet(x,y,size,colors){
  if (size < 6){
    return;
  } 
  ctx.beginPath();
  ctx.lineWidth =4;
  ctx.strokeStyle = 'white';
  ctx.fillStyle = colors[Math.floor(Math.random() * (4))];
  ctx.rect(x,y,size,size);
  ctx.stroke();

  carpet(x,y,size/3, colors);
  carpet(x+size/3,y,size/3, colors);  
  carpet(x + size/3*2,y,size/3, colors);
  carpet(x + size/3*2,y + size/3,size/3, colors);  
  carpet(x,y + size/3,size/3, colors);
  carpet(x,y + size/3*2,size/3, colors);
  carpet(x + size/3,y + size/3*2,size/3, colors);
  carpet(x + size/3*2,y + size/3*2,size/3, colors);
}




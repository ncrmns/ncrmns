'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


ctx.fillStyle ='lightblue';
ctx.fillRect(0,0,600,600);

ctx.fillStyle ='green';
ctx.fillRect(0,500,600,350);
//wall
ctx.fillStyle ='#d6b264';
ctx.fillRect(100,300,400,250);
//roof
ctx.fillStyle = '#b72f3f';
ctx.beginPath();
ctx.moveTo(75,300);
ctx.lineTo(300,60);
ctx.lineTo(525,300);
ctx.fill();
ctx.stroke();
//door
ctx.fillStyle = '#563314';
ctx.fillRect(200,400,75,150);
//bushes
ctx.fillStyle = '#13601c';
ctx.moveTo(100,500); 
ctx.arc(100,500,20,0,0);
ctx.stroke();



'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

for (let i=0;i<=600/20; i++){
    line(i*20,0)
    line(0,i*20) 
}

function line(x,y){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(-(x-600),-(y-600));
    ctx.stroke();
}


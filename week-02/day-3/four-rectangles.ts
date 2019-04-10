'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

rectangles(10,20,30,40,'blue');
rectangles(300,200,50,200,'red');
rectangles(100,400,20,30,'purple');
rectangles(200,80,100,30,'pink');

function rectangles(sx:number,sy:number,fx:number,fy:number,color:string){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(sx,sy,fx,fy);
    ctx.fill();
}

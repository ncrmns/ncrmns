'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let size:number = 40;
let number:number = 7;

for (let i=0; i<number; i++){
    sq(size*i,size*i,size,'purple')
    }






function sq(x:number,y:number,size:number,color:string){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(x,y,size,size);
    ctx.fill();
}







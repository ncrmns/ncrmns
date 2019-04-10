'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


let size: number = 20;
let number: number = 7;
let x: number = size;
let ratio: number = 0.4;

for (let i = 0; i < number; i++) {
    let sizeind = 0;
    sq(x, size, 'purple')
    x = x + size;
    size = size + size * ratio;
}


function sq(x: number, size: number, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(x, x, size, size);
    ctx.fill();
}






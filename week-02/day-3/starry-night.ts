'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.beginPath();
ctx.rect(0, 0, 600, 600);
ctx.fill();

star(3);

function star(qu) {
    for (let i=0; i<qu; i++){    
        let color = Math.floor(Math.random() * (250 - 160 + 1)) + 190;
        let x = Math.floor(Math.random() * (600 + 1));
        let y = Math.floor(Math.random() * (600 + 1));
        let size = Math.floor(Math.random() * (2)) + 1;
        ctx.beginPath();
        ctx.fillStyle = `rgb(${color},${color},${color})`;
        ctx.arc(x, y, size, 0, Math.PI*2);
        ctx.fill();
    }

}




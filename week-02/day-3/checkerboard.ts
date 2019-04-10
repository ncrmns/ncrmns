'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let size = 10;


for (let i = 0; i < 600 / size; i++) {
    line(i, size);
}


function line(linein, size) {
    if (linein % 2 === 0) {
        let x = 0;
    } else {
        let x = size;
    }

    let y = linein * size;

    for (let i = 0; i < 600 / size; i++) {
        sq(x, y, size);
        x = x + size*2;
    }
}


function sq(x, y, size) {
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.fill();
}







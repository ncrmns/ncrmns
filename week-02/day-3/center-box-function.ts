'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
sq(10);
sq(100);
sq(200);


function sq(size){
    ctx.beginPath();
    ctx.rect(300-size/2,300-size/2,size,size);
    ctx.stroke();
}




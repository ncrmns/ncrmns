'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let colors:string[] = ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00','#FF7F00','#FF0000'	]
let colors2:string[] = ['#E6E6FA','#D8BFD8','#DDA0DD','#EE82EE','#EE82EE','#DDA0DD','#D8BFD8'	]


for (let j=100;j>0;j--)
    for (let i=0; i<7; i++ ){
        sqc((j*7-i)*90, colors[i]);
        console.log(colors[i]);
    }



function sqc(size: number, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(300 - size / 2, 300 - size / 2, size, size);
    ctx.fill();
}






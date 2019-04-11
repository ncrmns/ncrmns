'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let size = 600;

drw(0,0,size);


function drw(x, y, size) {
    if (size < 3) {
        return;
    }
    ctx.beginPath();
    ctx.moveTo(x, y + size / 3);
    ctx.lineTo(x + size, y + size / 3);
    ctx.moveTo(x + size, y + size / 3 + size / 3);
    ctx.lineTo(x, y + size / 3 + size / 3);
    ctx.moveTo(x + size / 3, y + size);
    ctx.lineTo(x + size / 3, y);
    ctx.moveTo(x + size / 3 + size / 3, y);
    ctx.lineTo(x + size / 3 + size / 3, y + size);
    ctx.stroke();

    drw(x + size / 3, y, size / 3);
    drw(x + size / 3 + size / 3, y + size / 3, size / 3);
    drw(x + size / 3, y + size / 3 + size / 3, size / 3);
    drw(x , y + size / 3, size / 3);
}













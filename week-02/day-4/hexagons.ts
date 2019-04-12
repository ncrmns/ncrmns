'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



let size = 600;

hex(size / 4, 0, size);

function hex(x, y, size) {
    if (size < 30) {
        return;
    }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size / 2, y);
    ctx.lineTo(x + size / 4 * 3, y + size / 2);
    ctx.lineTo(x + size / 2, y + size);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size / 4, y + size / 2);
    ctx.lineTo(x, y);
    ctx.stroke();


    hex(x, y, size / 2);
    hex(x + size / 2 * 3 / 4, y + size / 4, size / 2);
    hex(x, y + size / 2, size / 2);
}
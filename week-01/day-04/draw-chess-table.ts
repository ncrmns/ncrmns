
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
'use strict';
let linecount:number = 1;
let maxlines:number = 6;
let line:string = ' ';

while (linecount<=maxlines){
        for (let i = 1 ; i<maxlines; i ++){
            if (linecount % 2 === 0){
                line = line + '% ';
            } else {
                line = line + ' %';
            }
        }
console.log(line);
line = ' ';
linecount++

}














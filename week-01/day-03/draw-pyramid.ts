'use strict';

let lineCount: number = 10;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var line:string = ' ';

for (let i=1 ; i<=lineCount; i++){

    for (let k=lineCount-i; k>0; k--){
        line = line + ' ';
    }

    for (let j=1; j<=(i+i-1); j++){
        line = line + '*';  
    }
    console.log(line);
    line = ' ';
}
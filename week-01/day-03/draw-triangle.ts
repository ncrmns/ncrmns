'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount 

let star :string = '*';

for ( let i = 1; i <= lineCount; i++){
    console.log(star);
    star = star + '*' ;
}




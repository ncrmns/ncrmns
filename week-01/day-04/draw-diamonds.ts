

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


'use strict';
var lineCount: number = 9;


var line:string = ' ';

for (let i=1 ; i<=lineCount/2+1; i++){

    for (let k=lineCount-i; k>0; k--){
        line = line + ' ';
    }

    for (let j=1; j<=(i+i-1); j++){
        line = line + '*';  
    } 
    console.log(line);
    line = ' ';
}


for (let i=lineCount/2; i>0; i--){

    for (let k=lineCount-i; k>0 ; k--){
        line = line + ' ';
    }

    for (let j=(i + i -2); j>=1; j--){
        line = line + '*';  
    }
    console.log(line);
    line = ' ';

}




export {};
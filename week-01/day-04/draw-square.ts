

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is


'use strict';
let lineCount: number = 9;
let line: string = '%';

for (let i=lineCount; i>1 ; i--){
    line = line + '%';
}

console.log(line);
line = '%'

for (let i=lineCount-2; i>0; i--){

    for (let j=lineCount-2; j>0; j--){
        line = line + ' ';
    }
    line = line + '%';

    console.log(line);
    line = '%'
}
for (let k=lineCount; k>1 ; k--){
    line = line + '%';
}
console.log(line);
export {};



// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is


'use strict';
let lineCount: number = 8;
let line: string = '%';
let currentline:number = 1;

            
            
while ( currentline<=lineCount ){
        
        if (currentline===1 || currentline===lineCount){
            for (let i=lineCount; i>1 ; i--){
                line = line + '%';
            }
            

        } else if (currentline===2){
            line = line + '%';
            for (let j=lineCount-3; j>0; j--){
                line = line + ' ';
            }
            line = line + '%';
        


        } else if (currentline===lineCount-1){
            for (let j=lineCount-3; j>0; j--){
                line = line + ' ';
            }
            line = line + '%%';

        } else {
            for (let i=currentline-2; i>0; i-- ){
                line = line + ' ';

            }
            line = line + '%';
            for (let i=lineCount-currentline-1; i>0; i--){
                line = line + ' ';
            }
            line = line + '%';
        }



        console.log(line);
        line = '%';
        currentline++;
}
            
            export {};
            
            
            
            
            

            

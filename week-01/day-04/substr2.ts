'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string) : number {
    let help:number = -1;
        for (let i=0; i<str.length; i++){
            if (str[i]===keyword[0]) {
                for (let j=0; j<keyword.length; j++){
                    if (str[j+i]===keyword[j]){
                        console.log('helpis:'+help);
                        help++;
                    }
                }
            }
        }
        console.log('keywordlength'+keyword.length);

        if (help-1==keyword.length){
            return 8;
        }else{
            return -1;
            }
            
    
}

//  Example

// should print: `17`
console.log(substr("this is what I'm searching in", "in"));

// should print: `-1`
console.log(substr("this is what I'm searching in", "not"));
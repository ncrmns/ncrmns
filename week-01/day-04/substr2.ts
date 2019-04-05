
//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

'use strict';
function substr(str: string, keyword: string) : number {
    let help:number = 0;
        for (let i=0; i<str.length; i++){
            if (str[i]===keyword[0]) {
                for (let j=0; j<keyword.length; j++){
                    if (str[j+i]===keyword[j]){
                        help++;
                    } else {
                        help = 0;
                    }
                    if (help===keyword.length){
                        return i;
                        break;
                    }
                }
            }
        } 
        return -1; 
}

//  Example

// should print: `17`
console.log(substr("this is what I'm searching in", "searching"));

// should print: `-1`
console.log(substr("this is what I'm searching in", "not"));
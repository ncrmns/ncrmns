'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string) : number {
        for (let i=0; i<str.length; i++){
            if (str.substr(i,keyword.length)===keyword){
                return i;
            }
        }









  return -1;
}

//  Example

// should print: `17`
console.log(substr("this is what I'm searching in", "searching"));

// should print: `-1`
console.log(substr("this is what I'm searching in", "not"));

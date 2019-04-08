'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'



function subint(num:number,arr:number[]){
    let newarray=[];
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<digitstoarray(arr[i]).length; j++){
            if (num.toString()===digitstoarray(arr[i])[j]){
                 newarray.push(i)
                 break;
            }
        }
    }
    return newarray;
}

function digitstoarray(num:number){
    let arrayofdigits = (''+num).split('');
    return arrayofdigits;
}



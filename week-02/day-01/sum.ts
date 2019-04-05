// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let num:number = 8;

function sum(par:number):number {
    let k = 0;
    for (let i=1; i<=par; i++){
        k = k+i ;
    }
    return k;
}

console.log(sum(num));




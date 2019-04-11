'use strict';

let num = 4; 

console.log(adder(num));

function adder(num){
    let n=num
    if (n<=0){
        return 0;
    }else{
        return n + adder(n-1);
    }
}
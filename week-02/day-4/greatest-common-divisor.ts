'use strict';

console.log(divisor(30,29));



function divisor(x,y){
    if (x % y === 0){
        return y;
    }
    return divisor(x,y-1);
} 



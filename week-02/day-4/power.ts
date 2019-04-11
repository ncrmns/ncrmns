'use strict';

console.log(power(3,2));


function power(base: number, n: number) {
    if (n<1){
        return 1;
    }
    return base * power(base,n-1);
}
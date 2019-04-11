'use strict';

//0,1,1,2,3,5,8,13,21

console.log(fibo(8));

function fibo(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1|| n== 2){
        return 1;
    }
    return  fibo(n-1) + fibo(n-2); 
}
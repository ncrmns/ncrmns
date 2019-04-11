'use strict';

console.log(bunnies(6));

function bunnies(no){
    if (no<1){
        return 0;
    }
    return 2 + bunnies(no-1);
}
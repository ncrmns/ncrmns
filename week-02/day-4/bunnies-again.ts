'use strict';

console.log(chernobyl(4));


function chernobyl(no) {
    if (no < 1) {
        return 0;
    } else if (no % 2 === 0){
        return 3 + chernobyl(no-1);
    }
    return 2 + chernobyl(no-1);  
}


'use strict';

let arr: any[] = [12, 78, 34, 1, 7, 43];

console.log(max(arr));

function max(arr) {
    if (arr.length == 1) {
        return arr[0];
    }

    if (arr[0] > arr[1]){
        arr.splice(1,1);
        
    }else{
        arr.splice(0,1);

    }

    return max(arr);
}






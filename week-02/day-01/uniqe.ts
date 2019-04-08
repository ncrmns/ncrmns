//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
let newarray:number[]=[];
let k:number=0;

function unique(arr:number[]) {
    for (let i=0; i<arr.length; i++){
        //check
        for (let j=0; j<newarray.length; j++){
            if (arr[i]==newarray[j]){
                k++;
            }
        }
        //push
        if (k==0){
            newarray.push(arr[i]);
        }
        //clear k
        k=0;
    }
    return newarray;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`





export {};
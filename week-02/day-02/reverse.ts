'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(reversed));

function reverse(string){
    let newarray:string[];
    let string2:string='';
    newarray = string.split('');
    newarray = newarray.reverse();
    for (let i=0; i<newarray.length; i++){
        string2 = string2 + newarray[i];
    }
    return string2;
}



export = reverse;

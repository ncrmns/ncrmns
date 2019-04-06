// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let x = 1;
let a = 5;
function printparams(a:number,b?:number) {
    for (let i=0; i<arguments.length; i++){
    console.log(arguments[i]);
    }

}


printparams(x,a);
printparams(x); 




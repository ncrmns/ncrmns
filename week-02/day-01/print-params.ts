// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let x = 1;
let a = 5;
function printparams() {
    for (let i =0; i <arguments.length; i++){
        return arguments[i];
    }
}


 console.log(printparams(x,a));
 






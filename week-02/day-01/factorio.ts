// -  Create a function called `factorio`
//    that returns it's input's factorial

let num:number = 3;

function factorio(par:number):number {
    let k = 1;
    for (let i=1; i<=par; i++){
        k = k*i ;
    }
    return k;
}

console.log(factorio(num));





export {};




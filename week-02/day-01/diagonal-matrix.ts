// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let dim=4;
let list:number[][]=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
let line:number[][];



//  for (let i=0; i<dim; i++){
//     line[i]=0;
//     list.push(line);
//  }


 for (let i=0; i<dim; i++){
    for (let j=0; j<0; j++){
        list[i][j]=0;
    }
}

for (let i=0; i<dim; i++){
    for (let j=dim-i; j>0; j--){
        list[i][j]=1;
    }
}

// for (let i=0; i<dim; i++){
//     console.log(list[i]);
//}
console.log(list);




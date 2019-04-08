// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0

let dim=7;
let list:number[][]=[];
let line=[];

//  for (let i=0; i<dim; i++){
//     line[i]=0;
//     list.push(line);
//  }

for (let i=0; i<dim; i++){
        list[i]=[];
        for (let j=0; j<dim; j++){
                list[i][j]=0;
        }
}

console.log(list);
console.log('----------')
for (let i=0; i<dim; i++){
    
        list[i][dim-i-1]=1;
        console.log(list);
        
}

console.log('----------')


for (let i=0; i<dim; i++){
    console.log(list[i]);
}
//console.log(list);




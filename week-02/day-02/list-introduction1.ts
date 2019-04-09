let list:string[]=[];
console.log(list.length);
list.push('William');
console.log(list.length);
list.push('John');
list.push('Amanda');
console.log(list.length);
console.log(list[2]);
for (let i=0; i<list.length; i++){
    console.log(list[i]);
}
for (let i=0; i<list.length; i++){
    console.log(i+1+'. '+list[i]);
}
list = list.slice(1,1);
console.log(list);

for (let i=list.length; i>0; i--){
    console.log(list[i]);
}
list.pop();
list.pop();
console.log(list);
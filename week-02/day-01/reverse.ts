// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numlist:number[]=[3,4,5,6,7];
let newarray:number[]=[];
let temp:number;

//numlist.reverse();
for (let i=0; i<numlist.length; i++){
    temp=numlist[i];
    newarray[numlist.length-1-i]=numlist[i];

}



console.log(numlist);
console.log(newarray);



export {};

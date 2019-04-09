let map:any = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}
console.log(Object.keys(map).filter(function (elements) {return map[elements]<201}));

let arr = Object.keys(map).filter(function (elements) {return map[elements]>150});

console.log('Items what are more expensive than 150:');
for (let i=0; i<arr.length; i++){
    console.log(arr[i], map[arr[i]]);
}


export {};
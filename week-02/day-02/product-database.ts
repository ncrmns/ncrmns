let map: any = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}
console.log('The price of the fish is ' + map.Fish);

console.log(Object.keys(map).reduce(function (a, b) { return map[a] > map[b] ? a : b }) + ' is the most expensive.');

console.log(`The avarage price is : ${Math.floor(avg(Object.values(map)))} kredits!`);

console.log(`Elements with higher price than 300: ${Object.keys(map).filter(function (elements) { return map[elements] > 300 })}`);

console.log(`Elements with the price 125: ${Object.keys(map).filter(function (elements) { return map[elements] === 125 })}`);

console.log(Object.keys(map).reduce(function (a, b) { return map[a] < map[b] ? a : b }) + ' is the cheapest.');


function avg(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length
}




export { };
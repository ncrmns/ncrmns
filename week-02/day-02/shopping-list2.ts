let map: any = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
};
let bob: any = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1
}
let alice: any = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10
}

console.log(pay(bob, map));
console.log(pay(alice, map));

function more(price:any, who:any, who2:any) {
    for (let i=0; i<Object.keys(price).length; i++){
        price[Object.keys(price)[i]]
    }
}




function pay(who: any, price: any): number {
    let bill: number = 0;
    for (let i = 0; i < Object.keys(who).length; i++) {
        bill = bill + who[Object.keys(who)[i]] * price[Object.keys(who)[i]];
    }
    return bill;
}


export { };
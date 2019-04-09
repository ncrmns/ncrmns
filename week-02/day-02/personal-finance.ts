let list: any = { 1: 500, 2: 1000, 3: 1250, 4: 175, 5: 800, 6: 120 };

function sum(lis: any) {
    let summ = 0;
    for (let i = 1; i <= Object.keys(lis).length; i++) {
        summ = summ + lis[i];
    }
    return summ;
}

// list.forEach((cica:any) => {
//     console.log(cica)
// });

console.log('Sum: ' + sum(list));



export { };

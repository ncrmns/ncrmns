let A: any = {
    1: 'Apple',
    2: 'Avocado',
    3: 'Blueberries',
    4: 'Durian',
    5: 'Lychee'
};

let B = A;
console.log(Object.keys(A).filter(function (element) { return A[element] === 'Durian' }));
delete B[Number(Object.keys(B).filter(function (element) { return B[element] === 'Durian' }))];
A[6] = A[5];
A[5] = 'Kiwifruit';
if (A.length > B.length) {
    console.log('A is bigger.')

} else if (A.length < B.length) {
    console.log('B is bigger.')
    
} else {
    console.log('They are equal.')
}

export {};
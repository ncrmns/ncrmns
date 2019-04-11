// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
//  while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

let n = 73456;
console.log('Sum of digits: '+sumdigs(n));

function sumdigs(n) {
    let length = n.length;
    if (length < 1) {
        return 0;
    } else {
        let length2 = n.toString().length;
        let topdigit = Number(n.toString().slice(0, 1));
        return topdigit + sumdigs(n.toString().slice(1, length2));
    }
}
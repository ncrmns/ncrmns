declare  function require(path: string) : any;
const fs = require('fs');
let arr2d = [];
let ips = [];
let pg = [];

// Read all data from 'log.txt'.
const arr = fs.readFileSync('log.txt', 'UTF-8').replace(/  +/g, ' ').split('\n');

for (let i = 0; i < arr.length; i++) {
  arr2d.push(arr[i].split(' '));
  ips.push(arr2d[i][5]); 
  pg.push(arr2d[i][6]);
}

// Write a function that returns an array with the unique IP adresses.
  const unique = ips.filter((v, i, a) => a.indexOf(v) === i);
  // console.log(unique);

// Write a function that returns the GET / POST request ratio.
  const ratio = pg.filter(x => x === 'GET').length / pg.filter(x => x === 'POST').length;
  // ratio = Math.floor(ratio*1000)/1000;
  // console.log(ratio);

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
// console.log(fileContent);

function countlines(file) {
  arr = file.split('\n');
  return arr.length;
  
}

try {
  let file = fs.readFileSync('my-file.txt', 'utf-8');
  console.log(countlines(file));
  
}
catch (e){
  console.log(0);
}


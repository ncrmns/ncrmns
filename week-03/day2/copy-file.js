// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful


const fs = require('fs');
from = 'my-file.txt';
where = '2nd-file.txt'

try {
  copyfile(from, where);
  console.log(true);
}
catch (e) {
  console.log(false);
}

function copyfile(from, where) {
  const file = fs.readFileSync(from);
  fs.writeFileSync(where, file);

}

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');

function writetofile() {
  let fileContent = 'Balazs Polhossy';

  try {
    fs.writeFileSync('my-file.txt', fileContent);

  }
  catch{
    throw new Error('Unable ro write file: my-file.txt');
  }
}

try {
  writetofile();
}
catch (e) {
  console.log(e.message)
}

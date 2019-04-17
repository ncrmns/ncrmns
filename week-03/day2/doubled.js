// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');
let text = fs.readFileSync('douplicated-chars.txt', 'UTF-8');

doubled(text);


function doubled(text) {
  let text2 = '';
  for (let i = 0; i < text.length / 2; i++) {
    text2 = text2.concat(text.substring(i * 2, (i * 2) + 2));
  }
  return text2;
}


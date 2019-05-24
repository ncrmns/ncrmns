'use strict';
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// {
//   "what": "sum",
//   "numbers": [1, 2, 5, 10]
// }
app.post('/arrays', (req, res) => {
  if (req.body.what === 'sum'){
    res.send({ result: sum(req.body.numbers) });
  }
  else if (req.body.what === 'multiply'){
    res.send({ result: multiply(req.body.numbers) });
  }
  else if (req.body.what === 'double'){
    res.send({ result: req.body.numbers.map(e => e * 2) });
  }
  else {
    res.send({error: 'Please provide what to do with the numbers!'});
  }
});

app.listen(PORT, () => { console.log('server listening on port: ' + PORT) });

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function multiply(arr) {
  let answ = 1;
  for (let i = 0; i < arr.length; i++){
    answ = answ*arr[i];
  }
  return answ;
}
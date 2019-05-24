'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if (input == undefined) {
    res.send('Please provide an input!');
  }
  else {
    let double = {
      'received': input,
      'result': input * 2
    }
    
    res.send(double);
  }
});

app.get('/greeter', (req,res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name == undefined && title == undefined){
    res.send({error: 'Please provide a name and title'});
  }
  else if (name == undefined){
    res.send({error: 'Please provide a name'});
  }
  else if (title == undefined){
    res.send({ error: 'Please provide a title'});
  }
  else {
    let greeting = {
      'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
    }
    res.send(greeting);
  }
});

app.get('/appenda/:string', (req,res) => {
  let string = req.params.string;
  res.send({appended: string + 'a'});
});

app.post('/dountil/:action', (req,res) => {
  const n = req.body.until;
  if (n!=undefined){
    if (req.params.action === 'sum'){
      res.send({result: sum(n)});
    }
    if (req.params.action === 'factor'){
      res.send({result: fact(n)});
    }
  } else {
    res.send({error: 'Please provide a number!'})
  }
});


app.listen(PORT, () => {
  console.log('App listening on port: ' + PORT);
});

function fact(n){
  let fact = 1; 
  for (let i=1 ; i<=n ; i++){
    fact = fact * i;
  }
  return fact;
}
function sum(n){
  let sum = 0 ;
  for (let i = 0; i<=n ; i++){
    sum += i;
  }
  return sum;
}
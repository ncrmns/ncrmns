'use strict';
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());


//   "text": "This is my example sentence. Just for fun."

app.post('/sith', (req,res) => {
  if (req.body.text!=undefined){
    let text = req.body.text.split(' ');
    let result = [];
    for (let i = 1; i< text.length; i+=2){
      result.push(text[i]);
      result.push(text[i-1]);
    }
    res.send({"result": result.join(' ')});
  } else {
    res.send({"result":'Feed me some text you have to, padawan young you are. Hmmm.'});
  }
});

app.listen(PORT, ()=>{
  console.log('server listening on port : '+ PORT);
});
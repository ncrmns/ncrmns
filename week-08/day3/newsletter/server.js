const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
const port = '8080';

app.get('/', (req,res)=>{
  res.sendFile('index.html');
});


app.post('/signup', (req,res)=> {
  res.status(200).json(`Thanks ${req.body.username}, we will send updates to ${req.body.email}`);
});



app.listen(port, ()=>{
  console.log('server running on: ' + port);
})
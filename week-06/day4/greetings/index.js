const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  var name = req.query.name;
  res.render('home', {
    greeting : `Welcome back ${ (name != undefined) ? name : 'Guest'}!`
  })
})
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


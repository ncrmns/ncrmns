const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
let img = '1';
var images = ['1', '2', '3', '4', '5', '6', '7', '8'];
const desc = ['A majority of Icelanders believe in elves.',
  'At about 39,000 square miles, Iceland is small – close to the size of Ohio.',
  'There is a volcanic eruption every 4 years on average.',
  'At 43.5 hours per week, they have the longest work week in Europe.',
  'Iceland’s revenue from whale watching exceeds any income from whaling.',
]

app.get('/', (req, res) => {
  img = req.query.img;
  images.filter(e => e != img);
  res.render('home', {
    img: img,
    images: images,
    desc: desc
  });
})

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
})

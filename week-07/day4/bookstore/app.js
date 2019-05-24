'use strict';
// const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const path = require('path');
const PORT = 3000;

// app.use(cors())
app.use('/static', express.static('static'));

// app.use(express.json());



const conn = mysql.createConnection({
  host: 'localhost',
  user: 'ncrmns',
  password: process.env.DB_PASS,
  database: 'bookstore'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK');
});

app.get('/', (req,res) => {
  res.sendFile( __dirname  + "/static/index.html" );
});


app.get('/books', (req,res) => {
  conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN newpublisher ON book_mast.pub_id = newpublisher.pub_id;', (err, rows) => {
    if (err){
      res.send(err.toString());
      return;
    } else {
      console.log('query on book_mast is OK');
    }
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log('server is listening on port: '+ PORT)
});

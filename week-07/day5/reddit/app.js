'use strict';
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;
require('dotenv').config();
app.use(express.static('public'))
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'ncrmns',
  password: process.env.DB_PASS,
  database: 'reddit'
});

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('/posts', (req, res) => {
  conn.query(`SELECT * FROM posts`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('database query succesful');
    }
    res.status(200).json(data);
  });
});

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO posts (title, url, owner) VALUES ('${req.body.title}','${req.body.url}','${req.body.owner}')`, (err, posted) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`database updated with:(${req.body.title},${req.body.url},${req.body.owner})`);
    }
    conn.query(`SELECT * FROM posts WHERE id = ${posted.insertId}`, (err, data)=>{
      res.status(200).json(data);
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => { 
  conn.query(`INSERT INTO votes (id, user_id) VALUES ('${req.params.id}','${req.body.owner}')`)
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${req.params.id};`, (err)=>{
    if (err){
      console.log(err);
    } else {
      console.log('database updated with upvote');
    }});
  conn.query(`SELECT * FROM posts WHERE id = ${req.params.id}`, (err, data)=>{
    res.status(200).json(data);
  });
});

app.put('/posts/:id/downvote', (req, res) => { 
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${req.params.id};`, (err)=>{
    if (err){
      console.log(err);
    } else {
      console.log('database updated with downvote');
    }});
  conn.query(`SELECT * FROM posts WHERE id = ${req.params.id}`, (err, data)=>{
    res.status(200).json(data);
  });
});

app.delete('/posts/:id', (req,res) => {
  conn.query(`SELECT * FROM posts WHERE id = ${req.params.id}`, (err, data)=>{
    if (err){
      console.log(err);
    } else {
      res.status(200).json(data);
    }
  });
  conn.query(`DELETE FROM posts WHERE id = ${req.params.id}`, (err)=>{
    if (err){
      console.log(err);
    } else {
      console.log(`record deleted from database id: ${req.params.id}`)
    }
  });
});

app.put('/posts/:id', (req,res)=>{
  conn.query(`UPDATE posts SET title = '${req.body.title}', url = '${req.body.url}' WHERE id = ${req.params.id};`, (err)=>{
    if (err){
      console.log(err);
    } else {
      console.log('record updated id: '+ req.params.id);
    }
  });
  conn.query(`SELECT * FROM posts WHERE id = ${req.params.id}`, (err, data)=>{
    res.status(200).json(data);
  });
});

app.listen(PORT, () => {
  console.log('server listening on port: ' + PORT);
});
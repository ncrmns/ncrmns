const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
require('dotenv').config();
app.use(express.static('public'));
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'ncrmns',
  password: process.env.DB_PASS,
  database: 'quiz'
});

app.get('/game', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/questions', (req, res) => {
  res.sendFile(__dirname + '/public/questions.html');
});

app.get('/api/questions', (req, res) => {
  requestAllQuestions()
    .then(data => res.status(200).json(data));
});

app.get('/api/game', (req, res) => {
  requestNumberOfQuestions()
    .then(number => requestRandomQuestion(number))
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

app.delete('/api/questions/:id', (req, res) => {
  const { id } = req.params;

  deleteRecordsById(id)
    .then(() => res.status(202).send())
    .catch(err => res.status(500).send(err))
});
/////
app.post('/api/questions', (req, res) => {
  addNewQuestion(req.body)
    .then(data => addNewAnswers(data.insertId, req.body))
    .then(()=>res.status(200).send())
    .catch(err=>res.status(500).send(err))
});

app.listen(PORT, () => console.log('app is listening on port: ', PORT));

function requestRandomQuestion(questionid) {
  return new Promise((resolve, reject) => {
    conn.query(
      'SELECT * FROM answers INNER JOIN questions ON answers.question_id=questions.id WHERE answers.question_id=?;',
      [questionid],
      (err, data) => {
        if (err)
          reject(err);
        else{
          console.log(data);
          resolve(data);
        }
      });
  });
}

function requestAllQuestions() {
  return new Promise((resolve, reject) => {
    conn.query(
      'SELECT * FROM questions;',
      (err, data) => {
        if (err)
          reject(err);
        else
          resolve(data);
      });
  });
}

function deleteRecordsById(id) {
  id = parseInt(id)
  return new Promise((resolve, reject) => {
    conn.query(
      'DELETE FROM questions WHERE id=?',
      [id],
      (err) => {
        if (err)
          reject(err)
        else
          conn.query(
            'DELETE FROM answers WHERE question_id=?;',
            [id],
            (err) => {
              if (err)
                reject(err);
              else
                resolve();
            });
      });
  })
}

function addNewQuestion(object) {
  return new Promise((resolve, reject) => {
    conn.query(
      'INSERT INTO questions (question) VALUES (?);',
      [object.question],
      (err, insertdata) => {
        if (err)
          reject(err)
        else
          resolve(insertdata)
      });
  });
}

function addNewAnswers(id, object) {
  return new Promise((resolve, reject) => {
    object.answers.forEach(answer => {
      conn.query(
        'INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,?)',
        [id, answer.answer, answer.is_correct],
        (err)=>{
          if (err)
            reject(err)
        });
    });
    resolve();
  });
}

function requestNumberOfQuestions(){
  return new Promise((resolve,reject)=>{
    conn.query(
      'SELECT id FROM questions',
      (err,data)=>{
        if (err)
          reject(err)
        else {
          console.log(data[Math.floor(Math.random()*(data.length - 1)+1)].id);
          resolve(data[Math.floor(Math.random()*(data.length - 1)+1)].id)
        }
      });
  });
}
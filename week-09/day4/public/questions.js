'use strict'
fetch('/api/questions')
  .then(data => data.json())
  .then(questions =>
    questions.forEach(question => {
      let p = document.createElement('p');
      p.innerText = question.question;

      let div = document.createElement('div');
      let button = document.createElement('button');
      button.classList.add(`id?${question.id}`);
      button.innerText = 'delete';

      div.appendChild(p);
      div.appendChild(button);
      document.querySelector('.questions').appendChild(div);
    })
  );

document.querySelector('.questions').addEventListener('click', (event) => {
  let deleteId = event.target.className.split('?')[1];
  if (deleteId != undefined) {
    fetch(`/api/questions/${deleteId}`, { method: 'DELETE' })
      .then(
        event.target.parentNode.remove()
      )
  }
});

document.querySelector('.submitbutton').addEventListener('click', () => {
  let question = document.querySelector('.ownquestion').value;
  let rightanswer = document.querySelector('input[name=rightanswer]:checked').id - 1;
  let answers = [];

  for (let i = 0; i < 4; i++) {
    let x = {};
    x.answer = document.querySelectorAll('.answer')[i].value;
    x.is_correct = rightanswer == i ? 1 : 0;
    answers.push(x);
  }

  let object = {};
  object.question = question;
  object.answers = answers;
  
  fetch('/api/questions',
    {
      method : 'POST',
      headers : { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    })
});

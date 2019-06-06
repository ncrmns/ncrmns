'use strict'

let userscore = 0;
let buttons = document.querySelectorAll('button');
fetchGame();

function fetchGame(){
  fetch('/api/game')
  .then((data=>data.json()))
  .then((data)=>{
     console.log(data);
    document.querySelector('.question').innerText = data[0].question;
    
    for (let i = 0 ; i<data.length; i++){
      buttons[i].innerText = data[i].answer;
      if (data[i].is_correct === 1)
      buttons[i].classList.add('correct');
    }
  });
}


document.querySelector('.quiz').addEventListener('click', (event)=>{
  if (event.target.classList.contains('correct')){
    document.querySelector('p').innerText = ++userscore;
  } else {
    event.target.classList.replace('blue','red');
  }
  for (let i = 0 ; i< buttons.length; i++){
    if (buttons[i].classList.contains('correct')){
      buttons[i].classList.replace('correct','green');
    }
  }

  setTimeout(()=>{
    buttons.forEach(button=>button.setAttribute('class','blue'));
    fetchGame();
  },2000);

});

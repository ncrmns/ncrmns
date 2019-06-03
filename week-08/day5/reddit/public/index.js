let username = 'ncrmns';
let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'http://localhost:3000/posts', true);
  httpRequest.send();
  httpRequest.onload = (data) => {
    let firstPar = document.querySelector('.firstpar');
    let records = JSON.parse(data.target.response);
    console.log(records);
    records.forEach(record => {
      let divPost = document.createElement('div');

      divPost.innerHTML =
        `<div class="post">
            <div class="vote">
                <i id="${record.id}?up" class="up fas fa-angle-up"></i>
              <h3>${record.score}</h3>
              <i  id="${record.id}?down" class="down fas fa-angle-down"></i>     
            </div>
            <div class="contenttexts">
              <h3>${record.title}</h3>
              <p>${record.url}</p>
            </div>
          </div>`;
      firstPar.appendChild(divPost);
      divPost.addEventListener('click', (event)=> {
        console.log(event.target.id);
        let voterequest = new XMLHttpRequest();
        event.target.id.split('?')[1] === 'up' ? 
        (voterequest.open('put', `http://localhost:3000/posts/${event.target.id.split('?')[0]}/upvote?${username}`, true)) :
        (event.target.id.split('?')[1] === 'down' ? 
        (voterequest.open('put', `http://localhost:3000/posts/${event.target.id.split('?')[0]}/downvote?${username}`, true)) :
        undefined
        )
        voterequest.send();
      });
    });;
    
  }

const button = document.querySelector('.button');
const title = document.querySelector('.title');
const text = document.querySelector('.linktext');

button.addEventListener('click', ()=>{
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'http://localhost:3000/posts', true);
  httpRequest.send(`{title":"${title.textContent}","url":"${title.textContent}", "owner":"ncrmns"}`);
});
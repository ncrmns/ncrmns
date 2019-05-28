const button = document.querySelector('button');
let clicks = 0;
setTimeout(()=>{
  button.addEventListener('click', ()=>{
    clicks < 2 ? clicks++ : document.querySelector('h1').innerText = 'secret'; 
  });
},5000);
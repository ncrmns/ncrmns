const button = document.querySelector('button');
button.addEventListener('click', ()=>{
  setTimeout( () => {
    document.querySelector('h1').innerText = 'text';
  }, 2000);
});
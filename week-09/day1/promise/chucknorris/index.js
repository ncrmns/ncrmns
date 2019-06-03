

document.querySelector('button').addEventListener('click',()=>{
  fetch('http://api.icndb.com/jokes/random')
    .then(response=>response.json())
    .then((x)=>x.value.joke);
  });
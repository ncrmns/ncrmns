const wrapper = document.querySelector('.wrapper');
addRandomDivs();

function renderDiv(){
  let div = document.createElement('div');
  div.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
  wrapper.appendChild(div);
}

function addRandomDivs(){
  for (let i=0;i<Math.floor(Math.random()*10)+7;i++){
    renderDiv();
  }
}

wrapper.addEventListener('scroll', (event)=>{
  const {scrollHeight, scrollTop, clientHeight} = event.target;  
  if (scrollHeight - scrollTop < clientHeight){
    addRandomDivs();
  }
});

'use strict';
  const ul = document.createElement('ul');
  const ul2 = document.createElement('ul');
  const list = ['bread', 'milk ', 'orange', 'tomato'];
  for (let i= 0 ; i< list.length; i++){
    let item = document.createElement('li');
    item.textContent = list[i];
    ul.appendChild(item);
  }
  ul.children[0].classList.add('selected');

  const div = document.createElement('div');
  const upButton = document.createElement('button');
  const sideButton = document.createElement('button');
  const delButton = document.createElement('button');
  const downButton = document.createElement('button');
  upButton.textContent = 'Up';
  upButton.setAttribute('onclick','upButtonf()');

  sideButton.textContent = '>';
  sideButton.setAttribute('onclick','sideButtonf()'); 

  delButton.textContent = 'X';
  delButton.setAttribute('onclick','delButtonf()'); 


  downButton.textContent = 'Down';
  downButton.setAttribute('onclick','downButtonf()'); 
  div.appendChild(upButton);
  div.appendChild(sideButton);
  div.appendChild(delButton);
  div.appendChild(downButton);

  const body = document.querySelector('body');
  body.appendChild(ul);
  body.appendChild(div);
  body.appendChild(ul2);
  
  function select(){
    let selected = 0;
    for (let i =0 ; i< ul.children.length; i++){
      if (ul.children[i].classList.contains('selected')){
        selected = i;
        break;
      }
    }
    return selected;
  }

  function upButtonf(){
    let selected = select();
    ul.children[selected].classList.remove('selected');
    if (0 === selected){
      ul.children[ul.children.length-1].classList.add('selected');
    } else {
      ul.children[selected-1].classList.add('selected');
    }
  }

  function downButtonf(){
    let selected = select();
    ul.children[selected].classList.remove('selected');
    if (ul.children.length-1 === selected){
      ul.children[0].classList.add('selected');
    } else {
      ul.children[selected+1].classList.add('selected');
    }
  }

  function sideButtonf(){
    let selected = select();
    downButtonf();
    let tomove = ul.children[selected];
    ul.removeChild(tomove);
    ul2.appendChild(tomove);
  }

  function delButtonf(){
    let selected = select();
    downButtonf();
    ul.removeChild(ul.children[selected]);
  }
'use strict'
const radioDog = document.querySelector('#dog');
const radioCat = document.querySelector('#cat');
const radioCatFactsYes = document.querySelector('#catFactsYes');

const btnLovecats = document.querySelector('#btnLovecats');
const btnSignup = document.querySelector('#btnSignup');

btnLovecats.addEventListener('click', ()=>{
  console.log('hover');
  radioCat.checked || radioDog.checked ? alert('Thank you, you\'ve successfully signed up for cat facts') : {};
})

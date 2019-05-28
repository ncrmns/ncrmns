const candiesHTML = document.querySelector('.candies');
const lollypopsHTML = document.querySelector('.lollypops');
const speedHTML = document.querySelector('.speed');

const img = document.querySelector('img');
const createCandies = document.querySelector('.create-candies');
const createLolly = document.querySelector('.buy-lollypops');
const candyrain = document.querySelector('.candy-machine');

let candies = 120;
let lollypops = 12;
let rain = 1;

setInterval(()=>{candies += Math.floor(lollypops/10)*rain},1000);

setInterval(()=>{
  candiesHTML.innerText = candies;
  lollypopsHTML.innerText = '';
  for (let i=0;i<lollypops;i++){
    lollypopsHTML.innerText += '🍭';
  }
  speedHTML.innerText=Math.floor(lollypops/10)*rain;
}, 1000);


createCandies.addEventListener('click', ()=>{
  candiesHTML.innerText = candies++;
});

createLolly.addEventListener('click', ()=>{
if (candies >100){
  candies -= 100;
  lollypops++;
}
});

candyrain.addEventListener('click',()=>{
  img.classList.toggle('hidden');
  rain === 1 ? rain = 10 : rain = 1;
});


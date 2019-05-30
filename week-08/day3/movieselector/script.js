const titles = document.querySelector('#Movies');
const genres = document.querySelector('#Genres');
const submit = document.querySelector('.submit');
const result = document.querySelector('.result');
const titleArray = [['Moon', '2001: A Space Odyssey', 'Contact'], ['Darkest Hour', 'There Will Be Blood', 'American Beauty',], ['Airplane!', 'Deadpool', 'Wayne\'s World']]

genres.addEventListener('change', (event) => {
  const {selectedIndex} = event.target.options;
  while (titles.firstChild) {
    titles.removeChild(titles.firstChild);
  }
  for (let i = 0 ; i< titleArray[selectedIndex].length; i++){
    let option = document.createElement('option');
    option.innerText = titleArray[selectedIndex][i];
    option.setAttribute('value', titleArray[selectedIndex][i]);
    titles.appendChild(option);
  }
});

titles.addEventListener('change', (event)=>{
  submit.innerText = event.target.options[event.target.options.selectedIndex].label
});

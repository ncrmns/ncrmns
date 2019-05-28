
      // <!-- On the click of the button, -->
      // <!-- Count the items in the list -->
      // <!-- And display the result in the result element. -->
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  const p = document.querySelector('p');
  p.textContent = li.length;
});
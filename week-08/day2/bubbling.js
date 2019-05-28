
// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
// - the nav buttons (up, down, left, right) move the background by 10px
// - the zoom buttons increase/decrease the image by 20%
// - attach only two event listeners to the nav element
// - one for navigation
// - one for zooming

const nav = document.querySelector('nav');
const pic = document.querySelector('.img-inspector');
let x = 0;
let y = 0;
let size = 100

nav.addEventListener('click', (event)=>{
  switch (event.target.dataset.direction){
    case 'up':
      y -= 10;
      break;
    case 'down':
      y += 10;
      break;
    case 'left':
      x -= 10;
      break;
    case 'right':
      x += 10;
      break;
    case 'in':
      size += 20;
      break;
    case 'out':
      size -= 20;
      break;
  }
  pic.style.backgroundSize = `${size}%`;
  pic.style.backgroundPosition = `${x}px ${y}px`;
});
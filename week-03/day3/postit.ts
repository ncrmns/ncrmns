'use strict';

class Postit {
  background: string;
  txt: string;
  txtcolor: string;

  constructor(background, txt, txtcolor) {
    this.background = background;
    this.txt = txt;
    this.txtcolor = txtcolor;
  }
}

let object1 : Postit = new Postit('orange', 'Idea1', 'blue');
let object2 : Postit = new Postit('pink', 'Awesome', 'black');
let object3 : Postit = new Postit('yellow', 'Superb!', 'green');

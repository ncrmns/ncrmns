'use strict';
import { Sharpie } from './sharpie';

class Sharpieset {
  sharpies: Sharpie[] = [];

  add(sharpie: Sharpie){
    this.sharpies.push(sharpie);
  }

  countusable() {
    let usable = 0;
    for (let i = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].getInkAmount() !== 0){
        usable++;
      }
      return usable;
    }
  }

  removetrash() {
    for (let i = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].getInkAmount() === 0){
        this.sharpies.splice(i, 1);
      }
    }
  }
}



let sharpie1: Sharpie = new Sharpie('blue', 4, 3);
let sharpie2: Sharpie = new Sharpie('red', 4, 80);
let sharpie3: Sharpie = new Sharpie('purple', 4, 40);
let sharpie4: Sharpie = new Sharpie('green', 4, 0);
let sharpie5: Sharpie = new Sharpie('brown', 4, 20);

let sharpies: Sharpieset = new Sharpieset();

sharpies.add(sharpie1);
sharpies.add(sharpie2);
sharpies.add(sharpie3);
sharpies.add(sharpie4);
sharpies.add(sharpie5);

console.log(sharpies.countusable());
sharpies.removetrash();
console.log(sharpies.countusable());

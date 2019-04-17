'use strict';
import { Sharpie } from './sharpie';

class Sharpieset {
  sharpies: Sharpie[];

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

let sharpieset1: Sharpieset = initializesharpie();
for (let i=0; i<sharpieset1; i++){
console.log(sharpieset1[i]);
}

sharpieset1.countusable()


function initializesharpie(): Sharpie[] {
  return [
    new Sharpie('blue', 4, 3),
    new Sharpie('red', 4, 80),
    new Sharpie('purple', 4, 40),
    new Sharpie('green', 4, 0),
    new Sharpie('brown', 4, 20)
  ];
}

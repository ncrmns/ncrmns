'use strict';
import { Plant } from './plant'
export { Tree }

class Tree extends Plant {
  constructor(color, waterAmount?, soaks?) {
    super(color, waterAmount = 0, soaks = 0.4);
  }

  getCurrantStateTree() {
    console.log(`The ${this.color} Tree ${this.waterAmount < 10 ? 'needs' : 'doesnt need'} water`);
  }

  needsWater() {
    if (this.waterAmount < 10) {
      return true;
    }
    return false;
  }
}
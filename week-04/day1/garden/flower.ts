'use strict';
import { Plant } from './plant'
export { Flower }

class Flower extends Plant {
  constructor(color, waterAmount?, soaks?) {
    super(color, waterAmount = 0, soaks = 0.75);

  }

  getCurrantStateFlower() {
    console.log(`The ${this.color} Flower ${this.waterAmount < 5 ? 'needs' : 'doesnt need'} water`);
  }

  needsWater() {
    if (this.waterAmount < 5) {
      return true;
    }
    return false;
  }
}
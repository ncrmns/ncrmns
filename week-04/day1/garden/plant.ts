'use strict';
export { Plant }

class Plant {
  color: string;
  waterAmount: number;
  soaks: number;

  constructor(color, waterAmount, soaks) {
    this.color = color;
    this.waterAmount = waterAmount;
    this.soaks = soaks;
  }

  water(amount) {
    this.waterAmount += this.soaks * amount
  }
}
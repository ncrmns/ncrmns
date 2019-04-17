'use strict';
export { Sharpie };

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color, width, inkAmount) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use(): void {
    this.inkAmount--;
  }
}
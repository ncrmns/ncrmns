'use strict';

class Station {
  gasAmount: number;

  refill(car) {
    while ((car.getcap() - car.getgas()) > 0) {
      car.incgas();
    }

  }
}

class Car {
  gasAmount: number = 0;
  capacity: number = 100;

  constructor(gasAmount?, capacity?) {
    if (gasAmount !== undefined) {
      this.gasAmount = gasAmount;
    }
    if (capacity !== undefined) {
      this.capacity = capacity;
    }

  }
  getgas() {
    return this.gasAmount;
  }
  getcap() {
    return this.capacity;
  }
  incgas() {
    this.gasAmount++;
  }
}

let car1: Car = new Car();
let gst1: Station = new Station();

console.log(car1);
gst1.refill(car1);
console.log(car1);

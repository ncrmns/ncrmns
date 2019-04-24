'use strict';
import { Vehicle, Flyable } from './flyable';
export { Helicopter }

class Helicopter extends Vehicle implements Flyable {
  type: string;
  brand: string;
  color: string;

  fly():void{};
  takeOff():void{};
  land():void{};

  constructor (){
    super()
      this.type = 'air';
      this.brand = 'Apache';
      this.color = 'green';
  }
}
'use strict';
export { Flyable, Vehicle };

interface Flyable {
  fly():void;
  land():void;
  takeOff():void;
}

abstract class Vehicle {
  abstract type: string;
  abstract brand:string;
  abstract color: string;
}
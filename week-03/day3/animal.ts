'use strict';

class Animal {
  hunger : number = 50;
  thirst : number = 50;

  constructor(hunger, thirst){
    this.hunger = hunger;
    this.thirst = thirst;
  }

  public eat():void {
    this.hunger--;
  }

  public drink():void {
    this.thirst--;
  }

  public play():void {
    this.hunger++;
    this.thirst++;
  }
}
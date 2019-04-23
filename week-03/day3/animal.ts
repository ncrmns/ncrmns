'use strict';
export {Animal};

class Animal {
  hunger : number = 50;
  thirst : number = 50;

  constructor(hunger, thirst){
    this.hunger = hunger;
    this.thirst = thirst;
  }

  gethunger(){
    return this.hunger;
  }

  eat():void {
    this.hunger--;
  }

  drink():void {
    this.thirst--;
  }

  play():void {
    this.hunger++;
    this.thirst++;
  }
}
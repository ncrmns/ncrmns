'use strict';
export {Animal};

class Animal {
  hunger : number;
  thirst : number;

  constructor(hunger:number = 50, thirst: number = 50){
    this.hunger = hunger;
    this.thirst = thirst;
  }

  getHunger(){
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
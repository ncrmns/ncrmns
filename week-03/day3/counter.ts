'use strict';

class Counter {
  integer : number = 0;
  private init : number;

  constructor(number?){
    if (number!==undefined){
      this.integer = number;
      this.init = number;
    }
  }

  public add(number?){
    if (number!==undefined){
      this.integer += number;
    } else {
      this.integer++;
    }
  }

  public get():string {
    return this.integer.toString();
  }

  public reset(): void {
    this.integer = this.init;
  }
}
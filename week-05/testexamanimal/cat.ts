'use strict';

import { Animal } from "./animal";
export { Cat };

class Cat extends Animal {
  constructor (){
    super()
    this.healCost = Math.floor(Math.random() * 7);
  }
}
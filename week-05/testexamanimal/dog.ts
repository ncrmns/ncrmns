'use strict';

import { Animal } from "./animal";
export { Dog };

class Dog extends Animal {
  constructor (){
    super()
    this.healCost = Math.floor(Math.random() * 8 + 1);
  }
}
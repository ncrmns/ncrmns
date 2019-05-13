'use strict';

import { Animal } from "./animal";

class Parrot extends Animal {
  constructor (){
    super()
    this.healCost = Math.floor(Math.random() * 7 + 4);
  }
}
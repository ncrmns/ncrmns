'use strict';
import { Animal } from '../day3/animal';

class Farm {
  freep: number;
  animals: Animal[] = [];

  breed(){
    if (this.animals.length<this.freep){
      this.animals.push(new Animal(0,0));
    }
  }

  slaughter(){
    
  }
}
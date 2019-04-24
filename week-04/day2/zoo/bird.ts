'use strict';
import { Animal } from './animal';
export { Bird };

class Bird extends Animal {
  name: string;
  age: number;
  breeds: string;
  sex: string;
  bornCaptive: boolean;

  constructor (name, age: number = 0, sex: string = 'male', bornCaptive: boolean = true) {
    super()
      this.name = name;
      this.age = age;
      this.breeds = 'laying eggs';
      this.sex = sex;
      this.bornCaptive = bornCaptive;
  }

}
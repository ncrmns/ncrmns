'use strict';
import { Animal } from './animal';
export { Mammal };

class Mammal extends Animal {
  name: string;
  age: number;
  breeds: string;
  sex: string;
  bornCaptive: boolean;

  constructor (name, age: number = 0, sex: string = 'male', bornCaptive: boolean = true) {
    super()
      this.name = name;
      this.age = age;
      this.breeds = 'pushing miniature versions out';
      this.sex = sex;
      this.bornCaptive = bornCaptive;
  }

}
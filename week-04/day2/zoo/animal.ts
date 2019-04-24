'use strict';
export { Animal };

abstract class Animal {
  abstract name: string;
  abstract age: number;
  abstract breeds: string;
  abstract sex: string;
  abstract bornCaptive: boolean; 
  breed(): string {return this.breeds};
  getName():string {return this.name};
}
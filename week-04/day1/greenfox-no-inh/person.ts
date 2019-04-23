'use strict';
export {Person};

class Person {
  name: string;
  age: number;
  gender: string;

  introduce(){
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal(){
    console.log('My goal is: Live for the moment!')
  }

  constructor(name = 'Jane Doe', age = 30, gender = 'female'){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
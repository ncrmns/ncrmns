'use strict';
export {Mentor};

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  introduce(){
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal(){
    console.log('Educate brilliant junior software developers.')
  }

  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
}
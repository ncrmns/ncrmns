'use strict';
import {Person} from './person'
export {Mentor}

class Mentor extends Person {
  level: string;

  getGoal(){
    console.log('My goal is: Educate briliant junior software developers.')
  }

  introduce(){
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
  }

  constructor(name?, age?, gender?, level = 'intermediate'){
    super(name, age, gender)
    this.level = level;
  }
}
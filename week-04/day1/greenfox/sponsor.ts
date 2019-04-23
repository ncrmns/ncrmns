'use strict';
import {Person} from './person'
export {Sponsor}

class Sponsor extends Person {
  company: string;
  hiredStudents: number = 0;

  introduce(){
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }

  hire(){
    this.hiredStudents++;
  }

  getGoal(){
    console.log('My goal is: Hire briliant junior software developers.');
  }

  constructor(name?, age?, gender?, company = 'Google'){
    super(name, age, gender)
      this.company = company;
  }
}
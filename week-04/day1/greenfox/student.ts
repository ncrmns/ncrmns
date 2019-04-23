'use strict';
import {Person} from './person'
export {Student}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number = 0;

  getGoal(){
    console.log('My goal is: Be a junior software developer.')
  }

  introduce(){
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }

  skipDays(numberOfDays){
    this.skippedDays += numberOfDays;
  }

  constructor(name?, age?, gender?,previousOrganization = 'The School of Life'){
    super(name, age, gender)
      this.previousOrganization = previousOrganization;
  }
}
'use strict';
export {Student};

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number = 0;

  introduce(){
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`);
  }

  skipDays(number){
    this.skippedDays += number;
  }

  getGoal(){
    console.log('Be a junior software developer.')
  }

  constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of life'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
  }
}
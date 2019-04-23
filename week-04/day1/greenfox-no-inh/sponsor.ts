'use strict';
export {Sponsor};
import {Mentor} from './mentor';
import {Person} from './person';
import {Student} from './student';




class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number = 0;



  introduce(){
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire(){
    this.hiredStudents++;
  }

  getGoal(){
    console.log('Hire brilliant junior software developers.')
  }

  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
  }
}



let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}
'use strict';

import {Student} from './student'
import {Mentor} from './mentor'
export {Cohort}

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  addStudent(Student){
    this.students.push(Student);
  }

  addMentor(Mentor){
    this.mentors.push(Mentor);
  }

  info(){
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }

  constructor(name){
    this.name = name;
    this.students = [];
    this.mentors = [];
  }
}



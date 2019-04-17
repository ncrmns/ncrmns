'use strict';

class student {
  learn(){console.log('student learn')}
  question(teacher){teacher.answer(); }
}

class teacher {
  teach(student){student.learn()}
  answer(){console.log('teacher answer')}

}

let Student :student = new student();
let Teacher :teacher = new teacher();

Teacher.teach(Student);
Student.question(Teacher);

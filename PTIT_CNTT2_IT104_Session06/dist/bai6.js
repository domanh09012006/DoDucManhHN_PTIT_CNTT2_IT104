"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    students = [];
    showStudents() {
        this.students.forEach(s => console.log(`${s.getId()} - ${s.getName()}`));
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(s => s.getId() === id);
    }
    addStudentInClass(id) {
        let index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}
allStudents.push(new Student(1, "A"), new Student(2, "B"), new Student(3, "C"), new Student(4, "D"), new Student(5, "E"), new Student(6, "F"));
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("Class 1:");
class1.showStudents();
console.log("Class 2:");
class2.showStudents();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Ten sinh vien: ${this.name}`);
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Ten sinh vien: ${this.name}, Ma sinh vien: ${this.id}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Ten giao vien: ${this.name}, Ten mon hoc: ${this.subject}`);
    }
}
let sv1 = new Student("Binhdan", 1);
let gv1 = new Teacher("An", "IT104");
sv1.displayInfo();
gv1.displayInfo();

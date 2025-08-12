class Student {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
let allStudents: Student[] = [];
class Classroom {
    students: Student[] = [];
    showStudents() {
        this.students.forEach(s => console.log(`${s.id} - ${s.name}`));
    }
    addStudentInClass(id: number) {
        let index = allStudents.findIndex(s => s.id === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
    removeStudent(id: number) {
        let index = this.students.findIndex(s => s.id === id);
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        }
    }
    editStudent(id: number, newName: string) {
        let student = this.students.find(s => s.id === id);
        if (student) {
            student.name = newName;
        }
    }
}
allStudents.push(
    new Student(1, "A"),
    new Student(2, "B"),
    new Student(3, "C"),
    new Student(4, "D"),
);
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class2.addStudentInClass(3);
class2.addStudentInClass(4);

class1.removeStudent(2);
class1.editStudent(1, "Nguyen Van A");
console.log("Class 1 sau khi thay doi:");
class1.showStudents();
console.log("Tat ca hoc sinh trong allStudents:");
allStudents.forEach(s => console.log(`${s.id} - ${s.name}`));

class Student {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
}
let allStudents: Student[] = [];
class Classroom {
    students: Student[] = [];
    showStudents() {
        this.students.forEach(s => console.log(`${s.getId()} - ${s.getName()}`));
    }
    addStudent(student: Student) {
        this.students.push(student);
    }
    filterStudent(id: number): Student[] {
        return this.students.filter(s => s.getId() === id);
    }
    addStudentInClass(id: number) {
        let index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}
allStudents.push(
    new Student(1, "A"),
    new Student(2, "B"),
    new Student(3, "C"),
    new Student(4, "D"),
    new Student(5, "E"),
    new Student(6, "F")
);
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

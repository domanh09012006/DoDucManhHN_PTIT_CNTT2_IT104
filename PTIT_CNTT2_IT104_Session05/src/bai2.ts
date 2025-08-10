class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students: Student[] = [];
students.push(new Student(1, 20, "sv1@gmail.com"));
students.push(new Student(2, 21, "sv2@gmail.com"));
students.push(new Student(3, 19, "sv3@gmail.com"));
for (let i = 0; i < students.length; i++) {
    console.log(`ID: ${students[i].id}, Tuoi: ${students[i].age}, Email: ${students[i].email}`);
}

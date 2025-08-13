abstract class Person{
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    displayInfo(): void{
        console.log(`Ten sinh vien: ${this.name}`)
    }
}
class Student extends Person{
    id: number;
    constructor(name: string, id: number){
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Ten sinh vien: ${this.name}, Ma sinh vien: ${this.id}`);
    }
}
class Teacher extends Person{
    subject: string;
    constructor(name: string, subject: string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Ten giao vien: ${this.name}, Ten mon hoc: ${this.subject}`);
    }
}
let sv1 = new Student("Binhdan", 1);
let gv1 = new Teacher("An", "IT104");
sv1.displayInfo();
gv1.displayInfo();
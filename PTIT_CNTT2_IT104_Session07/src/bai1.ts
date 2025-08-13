class Employee{
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone(){
        return this.phone;
    }
    printInfo(): string{
        return `Ten nhan vien: ${this.name}, Ten cong ty: ${this.company}, So dien thoai: ${this.phone}`;
    }
}
class Manager extends Employee{
    teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): string {
        return `Ten nhan vien: ${this.name}, Ten cong ty: ${this.company}, So dien thoai: ${this.getPhone()}, So luong nv: ${this.teamSize}`;
    }
}
let s1 = new Manager("John", "Apple", "0987654321", 30);
console.log(s1.printInfo());
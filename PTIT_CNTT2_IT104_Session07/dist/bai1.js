"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    printInfo() {
        return `Ten nhan vien: ${this.name}, Ten cong ty: ${this.company}, So dien thoai: ${this.phone}`;
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        return `Ten nhan vien: ${this.name}, Ten cong ty: ${this.company}, So dien thoai: ${this.getPhone()}, So luong nv: ${this.teamSize}`;
    }
}
let s1 = new Manager("John", "Apple", "0987654321", 30);
console.log(s1.printInfo());

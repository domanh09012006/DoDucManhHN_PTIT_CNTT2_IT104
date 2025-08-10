"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    id;
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Ten xe: ${this.name}`);
        console.log(`Nam san xuat: ${this.year}`);
        console.log(`Hang xe: ${this.company}`);
    }
}
let v1 = new Vehicle(1, "Honda SH", 2022, "Honda");
v1.printInfo();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`Ten xe: ${this.name}, Nam san xuat: ${this.year}, Hang xe: ${this.company}`);
    }
}
let honda = new Vehicle("Xe may", 2000, "Honda");
honda.displayInfo();
let toyota = new Vehicle("Oto", 2015, "Toyota");
toyota.displayInfo();

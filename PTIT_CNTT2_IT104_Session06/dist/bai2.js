"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log("Loai cong viec:", this.type);
    }
}
class ParttimeJob extends Job {
    workingHour;
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
let parttime = new ParttimeJob("Part-time", 120);
let fulltime = new FulltimeJob("Full-time");
parttime.printType();
console.log("Luong:", parttime.calculateSalary());
fulltime.printType();
console.log("Luong:", fulltime.calculateSalary());

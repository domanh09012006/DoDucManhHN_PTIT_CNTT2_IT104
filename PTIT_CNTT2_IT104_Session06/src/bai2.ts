abstract class Job {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    printType(): void {
        console.log("Loai cong viec:", this.type);
    }
    abstract calculateSalary(): number;
}
class ParttimeJob extends Job {
    workingHour: number;

    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type: string) {
        super(type);
    }
    calculateSalary(): number {
        return 10000000;
    }
}
let parttime = new ParttimeJob("Part-time", 120);
let fulltime = new FulltimeJob("Full-time");
parttime.printType();
console.log("Luong:", parttime.calculateSalary());
fulltime.printType();
console.log("Luong:", fulltime.calculateSalary());

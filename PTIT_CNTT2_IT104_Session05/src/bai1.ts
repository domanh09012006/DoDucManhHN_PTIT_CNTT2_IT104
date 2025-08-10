class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo(): void {
        console.log(`Ten xe: ${this.name}, Nam san xuat: ${this.year}, Hang xe: ${this.company}`);
    }
}
let honda = new Vehicle("Xe may", 2000, "Honda");
honda.displayInfo();

let toyota = new Vehicle("Oto", 2015, "Toyota");
toyota.displayInfo();

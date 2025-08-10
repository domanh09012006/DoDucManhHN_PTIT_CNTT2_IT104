class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    public printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Ten xe: ${this.name}`);
        console.log(`Nam san xuat: ${this.year}`);
        console.log(`Hang xe: ${this.company}`);
    }
}
let v1 = new Vehicle(1, "Honda SH", 2022, "Honda");
v1.printInfo();

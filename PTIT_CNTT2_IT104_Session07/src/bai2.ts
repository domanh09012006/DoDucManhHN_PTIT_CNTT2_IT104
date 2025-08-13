class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(): void{
        this.speed = this.speed - 10;
        console.log(`Toc do giam con: ${this.speed} km/h`);
    }
    speedUp(): void{
        this.speed = this.speed + 10;
        console.log(`Toc do tang len: ${this.speed} km/h`);
    }
    showSpeed(): void{
        console.log(`Toc do hien tai: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle{
    gear: number;
    constructor(name: string, speed: number, id: number, gear: number){
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(): void{
        console.log(`Ten phuog tien: ${this.name}, Toc do: ${this.speed}, Ma dinh danh: ${this.id}, SO banh rang: ${this.gear}`);
    }
}
let xeDapV = new Bicycle("Binhdan", 90, 1, 20);
xeDapV.showSpeed();
xeDapV.showInfo();
xeDapV.slowDown();
xeDapV.speedUp();

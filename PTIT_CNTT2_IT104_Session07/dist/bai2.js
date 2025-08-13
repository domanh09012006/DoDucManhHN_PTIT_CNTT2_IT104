"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed = this.speed - 10;
        console.log(`Toc do giam con: ${this.speed} km/h`);
    }
    speedUp() {
        this.speed = this.speed + 10;
        console.log(`Toc do tang len: ${this.speed} km/h`);
    }
    showSpeed() {
        console.log(`Toc do hien tai: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Ten phuog tien: ${this.name}, Toc do: ${this.speed}, Ma dinh danh: ${this.id}, SO banh rang: ${this.gear}`);
    }
}
let xeDapV = new Bicycle("Binhdan", 90, 1, 20);
xeDapV.showSpeed();
xeDapV.showInfo();
xeDapV.slowDown();
xeDapV.speedUp();

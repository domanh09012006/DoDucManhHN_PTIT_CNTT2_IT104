"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let c = new Circle(5);
console.log("Circle - Area:", c.calculateArea());
console.log("Circle - Perimeter:", c.calculatePerimeter());
let r = new Rectangle(4, 6);
console.log("Rectangle - Area:", r.calculateArea());
console.log("Rectangle - Perimeter:", r.calculatePerimeter());

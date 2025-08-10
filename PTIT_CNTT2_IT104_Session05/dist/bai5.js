"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
let rect = new Rectangle(5, 3);
console.log(`Chieu rong: ${rect.getWidth()}`);
console.log(`Chieu dai: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Dien tich: ${rect.getArea()}`);
rect.setWidth(8);
rect.setHeight(6);
console.log(`Chieu rong: ${rect.getWidth()}`);
console.log(`Chieu dai: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Dien tich: ${rect.getArea()}`);

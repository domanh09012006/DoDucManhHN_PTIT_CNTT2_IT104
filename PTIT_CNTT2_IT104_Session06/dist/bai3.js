"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    // Method thuong: hanh vi giong nhau
    eat() {
        console.log("Animal dang an");
    }
}
// Lop con: cho
class Dog extends Animal {
    makeSound() {
        console.log("Gau gau");
    }
}
// Lop con: meo
class Cat extends Animal {
    makeSound() {
        console.log("Meo meo");
    }
}

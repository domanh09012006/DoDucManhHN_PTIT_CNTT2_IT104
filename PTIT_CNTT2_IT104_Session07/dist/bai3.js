"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        return `${this.name}: `;
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gau gau");
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Meo meo");
    }
}
let cho = new Dog("Pitbull");
let meo = new Cat("Muop");
console.log(cho.printName());
cho.makeNoise();
console.log(meo.printName());
meo.makeNoise();

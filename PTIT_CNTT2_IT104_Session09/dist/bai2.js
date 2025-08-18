"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(value) {
    return [value];
}
let numberArray = wrapInArray(5);
let stringArray = wrapInArray("hello");
let objectArray = wrapInArray({ a: 1 });
console.log(numberArray);
console.log(stringArray);
console.log(objectArray);

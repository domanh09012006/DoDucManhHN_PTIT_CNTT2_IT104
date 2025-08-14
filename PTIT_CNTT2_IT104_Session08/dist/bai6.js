"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
    return undefined;
}
let numbers = [10, 20, 30, 40];
console.log(findElement(numbers, 30));
console.log(findElement(numbers, 50));

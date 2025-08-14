"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findI(arr) {
    return arr.find(item => item % 2 === 0);
}
console.log(findI([1, 2, 3, 4, 5, 6, 7, 8, 9]));

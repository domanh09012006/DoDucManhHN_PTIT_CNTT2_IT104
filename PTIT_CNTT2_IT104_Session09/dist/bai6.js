"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function firstMatch(arr, predicate) {
    for (let element of arr) {
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
}
console.log(firstMatch([1, 2, 3, 0], (n) => n % 2 === 0));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myFilter(array, searchValue, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], searchValue)) {
            result.push(array[i]);
        }
    }
    console.log("Mảng đã lặp:", array);
    return result;
}
const isEqual = (element, searchValue) => {
    return element === searchValue;
};
const numbers = [1, 2, 2, 3, 4, 5, 6];
const found1 = myFilter(numbers, 2, isEqual);
console.log(found1);
const found2 = myFilter(numbers, 10, isEqual);
console.log(found2);

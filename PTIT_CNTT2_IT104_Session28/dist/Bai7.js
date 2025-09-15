"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
const printInfo = (element, index, array) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, array);
};
const numbers = [1, 2, 3, 4, 5, 6];
myForEach(numbers, printInfo);

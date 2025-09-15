"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processArray = (arr, callback) => {
    arr.forEach((num, index) => {
        setTimeout(() => {
            callback(num);
        }, (index + 1) * 1000);
    });
};
const printNumber = (num) => {
    console.log("Phan tu thu:", num);
};
processArray([1, 2, 3, 4, 5], printNumber);

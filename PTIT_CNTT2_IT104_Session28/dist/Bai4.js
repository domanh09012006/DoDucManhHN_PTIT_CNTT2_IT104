"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayNumbers = (callback, delay) => {
    let current = 1;
    const run = () => {
        callback(current);
        current++;
        setTimeout(run, delay);
    };
    run();
};
const printNumber = (num) => {
    console.log("Giá trị:", num);
};
displayNumbers(printNumber, 1000);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate = (a, b, callback) => {
    let sum = a + b;
    callback(sum);
};
const callbackfnc = (number) => {
    console.log("ket qua: ", number);
};
calculate(4, 3, callbackfnc);

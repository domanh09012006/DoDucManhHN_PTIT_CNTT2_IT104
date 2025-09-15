"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkCondition = (condition, callback) => {
    const run = () => {
        if (condition) {
            callback("Dung");
        }
        else {
            callback("SAI");
        }
        setTimeout(run, 1000);
    };
    run();
};
const printMessage = (message) => {
    console.log(message);
};
checkCondition(true, printMessage);

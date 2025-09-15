"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delayedCallback = (callback, delay) => {
    setTimeout(callback, delay);
};
const myCallback = () => {
    console.log("Sau 2s hamf ddc goij");
};
delayedCallback(myCallback, 2000);

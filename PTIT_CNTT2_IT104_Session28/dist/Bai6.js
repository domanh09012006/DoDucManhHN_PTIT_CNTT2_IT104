"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task1 = (callback) => {
    setTimeout(() => {
        console.log("Task 1 được thực thi");
        callback();
    }, 1000);
};
const task2 = (callback) => {
    setTimeout(() => {
        console.log("Task 2 được thực thi");
        callback();
    }, 1500);
};
const task3 = (callback) => {
    setTimeout(() => {
        console.log("Task 3 được thực thi! Hoàn thành");
        callback();
    }, 2000);
};
const runTasks = () => {
    task1(() => {
        task2(() => {
            task3(() => {
            });
        });
    });
};
runTasks();

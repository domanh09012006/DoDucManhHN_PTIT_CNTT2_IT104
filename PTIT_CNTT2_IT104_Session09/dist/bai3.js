"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let person = { name: "binh" };
let job = { role: "dan" };
let merged = mergeObjects(person, job);
console.log(merged);

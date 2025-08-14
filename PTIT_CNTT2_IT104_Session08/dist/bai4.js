"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function match(a, b) {
    return { ...a, ...b };
}
let info = { name: "Nam", age: 25 };
let job = { nameJob: "Developer", salary: 2000 };
let tt1 = match(info, job);
console.log(tt1);

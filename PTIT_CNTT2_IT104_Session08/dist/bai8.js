"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partialUpdate(obj, updates) {
    return { ...obj, ...updates };
}
let result1 = partialUpdate({ name: 'binhdan', age: 30, job: 'dev' }, { age: 31 });
console.log(result1);

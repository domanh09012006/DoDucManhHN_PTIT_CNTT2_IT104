"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createObject(keys, values) {
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}
const keys = ['name', 'age', 'email'];
const values = ['Alice', 25, 'alice@example.com'];
console.log(createObject(keys, values));

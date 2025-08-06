"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let text = "banana";
let result = "";
for (let i = 0; i < text.length; i++) {
    if (result.indexOf(text[i]) === -1) {
        result += text[i];
    }
}
console.log(result);

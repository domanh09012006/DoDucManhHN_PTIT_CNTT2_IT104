"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkValue(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log("la so chan");
        }
        else {
            console.log("la so le");
        }
    }
}
checkValue("kueyfggwe");
checkValue(111);
checkValue(110);

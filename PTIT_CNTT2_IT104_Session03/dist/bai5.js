"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "john";
let lastName = "doe";
if (firstName[0] !== firstName[0].toUpperCase()) {
    firstName = firstName[0].toUpperCase() + firstName.slice(1);
}
if (lastName[0] !== lastName[0].toUpperCase()) {
    lastName = lastName[0].toUpperCase() + lastName.slice(1);
}
let fullName = firstName + " " + lastName;
console.log(fullName);

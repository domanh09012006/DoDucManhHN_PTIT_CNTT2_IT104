"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
    if (updates.id !== undefined) {
        return "ID ko thay doi dc";
    }
    return { ...user, ...updates, };
}
const user1 = {
    id: 1,
    name: "songoku",
    email: "skibidi@toilet.com",
};
const updates1 = {
    name: "songohan",
};
console.log(updateUser(user1, updates1));

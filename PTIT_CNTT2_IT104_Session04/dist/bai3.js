"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gioiThieuSinhVien(sv) {
    console.log("ten: " + sv.name + ", Tuoi: " + sv.age + " Email: " + sv.email + ".");
}
let sinhVien1 = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};
gioiThieuSinhVien(sinhVien1);

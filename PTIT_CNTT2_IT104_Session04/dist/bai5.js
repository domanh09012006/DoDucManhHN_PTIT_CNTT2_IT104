"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printf(staff) {
    console.log(`Nhan vien ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.id} - Phong: ${staff.department} `);
}
let Nv1 = {
    name: "Do Duc Manh",
    age: 19,
    id: "EPM001",
    department: "Sinh vien"
};
printf(Nv1);

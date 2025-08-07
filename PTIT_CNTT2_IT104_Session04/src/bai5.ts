type person = {
    name: string;
    age: number;
};
type emoloyee = {
    id: string;
    department: string;
};
type staff = person & emoloyee;
function printf(staff: staff) {
    console.log(`Nhan vien ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.id} - Phong: ${staff.department} `);
}
let Nv1: staff = {
    name: "Do Duc Manh",
    age: 19,
    id: "EPM001",
    department: "Sinh vien"
};
printf(Nv1);

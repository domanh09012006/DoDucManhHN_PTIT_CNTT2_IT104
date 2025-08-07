type Student = {
    name: string;
    age: number;
    email: string;
};
function gioiThieuSinhVien(sv: Student){
    console.log("ten: " + sv.name + ", Tuoi: " + sv.age + " Email: " + sv.email + ".");
}
let sinhVien1: Student = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};
gioiThieuSinhVien(sinhVien1);

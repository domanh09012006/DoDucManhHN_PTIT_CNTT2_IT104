function chuyenThanhSo(giaTri: number | string): number | null {
    let so = Number(giaTri);
    if (isNaN(so)) {
        return null;
    }
    return so;
}
function cong(a: number | string, b: number | string): number | string {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null) return "Gia tri khong hop le";
    return so1 + so2;
}
function tru(a: number | string, b: number | string): number | string {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null) return "Gia tri khong hop le";
    return so1 - so2;
}
function nhan(a: number | string, b: number | string): number | string {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null) return "Gia tri khong hop le";
    return so1 * so2;
}
function chia(a: number | string, b: number | string): number | string {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null) return "Gia tri khong hop le";
    if (so2 === 0) return "Khong the chia cho 0";
    return so1 / so2;
}
console.log("Cong:", cong("10", 5));
console.log("Tru:", tru(20, "4"));
console.log("Nhan:", nhan("3", "7"));
console.log("Chia:", chia(10, "2"));
console.log("Cong loi:", cong("ídfuwefid", 5));

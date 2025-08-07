type Product = {
  readonly id: string;
  name: string;
  price: number;
};
type OrderItem = {
  product: Product;
  quantity: number;
};
type Order = {
  orderId: string;
  customerName: string;
  temp: OrderItem[];
  note?: string;
};
function tinhTong(order: Order): number {
  let tong = 0;
  for (let i = 0; i < order.temp.length; i++) {
    const item = order.temp[i];
    tong += item.product.price * item.quantity;
  }
  return tong;
}
function inDon(order: Order){
  console.log("Don hang: #" + order.orderId);
  console.log("Khach hang: " + order.customerName);
  console.log("Danh sach san pham:");
  for (let i = 0; i < order.temp.length; i++) {
    const item = order.temp[i];
    const ten = item.product.name;
    const sl = item.quantity;
    const tien = item.product.price * sl;
    console.log("- " + ten + " x " + sl + " -> " + tien + " VND");
  }
  const tong = tinhTong(order);
  console.log("Tong cong: " + tong + " VND");
  if (order.note) {
    console.log("Ghi chu: " + order.note);
  }
}
const aoSoMi: Product = { id: 'P001', name: 'Ao so mi', price: 250000 };
const donHang: Order = {
  orderId: 'DH001',
  customerName: 'Nguyen Van A',
  temp: [
    { product: aoSoMi, quantity: 2 }
  ],
  note: 'Giao hang sau 18h'
};
inDon(donHang);

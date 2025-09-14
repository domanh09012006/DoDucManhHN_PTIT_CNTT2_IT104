import { Link } from "react-router-dom";

export const List = [
  { id: 1, name: "Laptop Dell1", price: 20000000, description: "Laptop cao cấp, thiết kế mỏng nhẹ" },
  { id: 2, name: "Laptop Dell2", price: 21000000, description: "Laptop cao cấp, thiết kế mỏng nhẹ" },
  { id: 3, name: "Laptop Dell3", price: 22000000, description: "Laptop cao cấp, thiết kế mỏng nhẹ" },
  { id: 4, name: "Laptop Dell4", price: 23000000, description: "Laptop cao cấp, thiết kế mỏng nhẹ" },
  { id: 5, name: "Laptop Dell5", price: 24000000, description: "Laptop cao cấp, thiết kế mỏng nhẹ" },
];

export default function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {List.map(item => (
          <div key={item.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px" }}>
            <h3>{item.name}</h3>
            <p>Giá: {item.price.toLocaleString()} VND</p>
            <Link to={`${item.id}`}>Chi tiết sản phẩm</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

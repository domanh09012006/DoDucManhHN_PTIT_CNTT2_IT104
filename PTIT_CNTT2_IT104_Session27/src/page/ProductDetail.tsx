import { Link, useParams } from "react-router-dom";
import { List } from "./ProductList";

export default function ProductDetail() {
  const { id } = useParams();
  const product = List.find(item => item.id === Number(id));

  if (!product) {
    return (
      <div>
        <h2>Sản phẩm không tồn tại.</h2>
        <Link to="/product">Quay lại danh sách sản phẩm</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Chi tiết sản phẩm</h1>
      <div style={{ border: "1px solid black", padding: 20, maxWidth: 500 }}>
        <h3>{product.name}</h3>
        <p><b>Giá:</b> {product.price.toLocaleString()} VND</p>
        <p>{product.description}</p>
        <Link to="/product">Quay lại danh sách sản phẩm</Link>
      </div>
    </div>
  );
}

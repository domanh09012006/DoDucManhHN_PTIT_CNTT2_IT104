import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

function ProductList() {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (id: number, name: string, price: number, stock: number) => {
    if (stock <= 0) {
      alert("Hết hàng!");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { id, name, price } });
    dispatch({ type: "DECREASE_STOCK", payload: id });
  };

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <h2>Danh sách sản phẩm</h2>
      {products.map((p) => (
        <div key={p.id} style={{ display: "flex", alignItems: "center", border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
          <img src={p.image} alt={p.name} style={{ width: "80px", marginRight: "10px" }} />
          <div style={{ flex: 1 }}>
            <p><b>{p.name}</b></p>
            <p>Giá: ${p.price}</p>
            <p>Kho: {p.stock}</p>
          </div>
          <button onClick={() => handleAddToCart(p.id, p.name, p.price, p.stock)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

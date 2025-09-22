import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (confirmDelete) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
      dispatch({ type: "INCREASE_STOCK", payload: id });
      alert("Delete cart successfully");
    }
  };

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <h2>Giỏ hàng</h2>
      <table border={1} cellPadding={5} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Tổng sản phẩm: {totalQuantity} | Tổng tiền: ${total}
      </p>
    </div>
  );
}

export default Cart;

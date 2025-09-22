// src/components/Cart.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { removeFromCart, updateQuantity } from "../reducers/cartReducer";
import { setMessage } from "../reducers/messageReducer";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const totalQty = cart.reduce((s, it) => s + it.quantity, 0);
  const totalPrice = cart.reduce((s, it) => s + it.price * it.quantity, 0);

  const handleUpdate = (id: number, q: number) => {
    if (q < 1) q = 1;
    dispatch(updateQuantity({ id, quantity: q }));
    dispatch(setMessage("Update successfully"));
  };

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (deleteId !== null) {
      dispatch(removeFromCart(deleteId));
      dispatch(setMessage("Delete cart successfully"));
    }
    setShowModal(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  return (
    <div style={{ flex: 1, padding: 10 }}>
      <h3>Cart</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>STT</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Price</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Quantity</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{idx + 1}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{item.name}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>${item.price}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => handleUpdate(item.id, Number(e.target.value))}
                  style={{ width: 60 }}
                />
              </td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>
                <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {cart.length > 0 && (
        <div style={{ marginTop: 10, fontWeight: "bold" }}>
          Total Products: {cart.length} | Total Quantity: {totalQty} | Total Price: ${totalPrice}
        </div>
      )}

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#fff", padding: 20, borderRadius: 6 }}>
            <p>Are you sure you want to delete this item?</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <button onClick={cancelDelete}>Cancel</button>
              <button onClick={confirmDelete}>Ok</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

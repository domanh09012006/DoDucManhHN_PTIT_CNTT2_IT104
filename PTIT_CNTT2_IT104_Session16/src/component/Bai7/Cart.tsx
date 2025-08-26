import React, { Component } from "react";

interface CartItem {
  img: string;
  name: string;
  qty: number;
  price: number;
}

export default class Cart extends Component {
  render() {
    const cartItems: CartItem[] = [
      { img: "https://tse1.mm.bing.net/th/id/OIP.zlqfPvw0shPQTeYL6sZeqwHaHa?pid=Api&P=0&h=220", name: "Samsung Galaxy", qty: 1, price: 20000000 },
      { img: "https://tse1.mm.bing.net/th/id/OIP.zlqfPvw0shPQTeYL6sZeqwHaHa?pid=Api&P=0&h=220", name: "iPhone 14 Pro Max", qty: 1, price: 20500000 }
    ];
    const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
      <div style={{
        backgroundColor: "black",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
        width: "280px"
      }}>
        <h2>Cart</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
          {cartItems.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={item.img} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              <div style={{ flex: 1 }}>
                <p>{item.name}</p>
                <p style={{ fontSize: "12px" }}>{item.qty} x {item.price.toLocaleString()} đ</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "10px" }}>Tổng tiền: {total.toLocaleString()} đ</p>
      </div>
    );
  }
}

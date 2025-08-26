import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "orange",
        padding: "10px",
        color: "white"
      }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Trang chủ</span>
          <span>Danh sách sản phẩm</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>🛒</span>
          <span style={{
            backgroundColor: "red",
            borderRadius: "20px",
            padding: "2px 8px",
            fontSize: "12px"
          }}>3</span>
        </div>
      </div>
    );
  }
}

import React from "react";
import { Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Trang chi tiet san pham</h1>
        <p>Danh sach san pham</p>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Product;

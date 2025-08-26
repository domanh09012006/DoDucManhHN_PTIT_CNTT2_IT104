import React, { Component } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProductList />
        <div style={{ position: "fixed", right: "20px", top: "100px" }}>
          <Cart />
        </div>
      </div>
    );
  }
}

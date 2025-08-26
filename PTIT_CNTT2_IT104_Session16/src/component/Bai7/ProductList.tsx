import React, { Component } from "react";
import ProductCard from "./ProductCart";

export default class ProductList extends Component {
  render() {
    const products = [
      { img: "https://tse1.mm.bing.net/th/id/OIP.zlqfPvw0shPQTeYL6sZeqwHaHa?pid=Api&P=0&h=220", name: "Samsung Galaxy", price: "20.000.000" },
      { img: "https://tse1.mm.bing.net/th/id/OIP.zlqfPvw0shPQTeYL6sZeqwHaHa?pid=Api&P=0&h=220", name: "iPhone 14 Pro Max", price: "20.500.000" },
      { img: "https://tse1.mm.bing.net/th/id/OIP.zlqfPvw0shPQTeYL6sZeqwHaHa?pid=Api&P=0&h=220", name: "Samsung Galaxy", price: "21.000.000" },
      { img: "https://tse1.mm.bing.net/th/id/OIP.zlqfPvw0shPQTeYL6sZeqwHaHa?pid=Api&P=0&h=220", name: "iPhone 11 Pro Max", price: "21.500.000" }
    ];
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "20px"
      }}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    );
  }
}

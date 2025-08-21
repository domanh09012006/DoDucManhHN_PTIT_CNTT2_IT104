import React, { Component } from "react";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface Props {
  product: Product;
}
export default class ChildrenProduct extends Component<Props> {
  render() {
    const { id, name, price, quantity } = this.props.product;
    return (
      <div>
        <h2>Du lieu con</h2>
        <p>Id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price.toLocaleString()} đ</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}

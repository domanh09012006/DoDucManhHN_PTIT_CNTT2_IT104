import React, { Component } from "react";
import ChildrenProduct from "./Children";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface State {
  product: Product;
}
export default class ParentProduct extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Bưởi ba roi",
        price: 1,
        quantity: 1,
      },
    };
  }
  render() {
    return (
      <div>
        <ChildrenProduct product={this.state.product} />
      </div>
    );
  }
}

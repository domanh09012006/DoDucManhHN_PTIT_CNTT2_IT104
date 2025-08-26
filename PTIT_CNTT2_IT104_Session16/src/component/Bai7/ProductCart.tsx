import React, { Component } from "react";

interface Props {
  img: string;
  name: string;
  price: string;
}

export default class ProductCart extends Component<Props> {
  render() {
    return (
      <div style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center"
      }}>
        <img src={this.props.img} alt={this.props.name} style={{ height: "150px" }} />
        <h3>{this.props.name}</h3>
        <p>{this.props.price} đ</p>
        <button style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          marginTop: "5px",
          cursor: "pointer"
        }}>
          Thêm vào giỏ
        </button>
      </div>
    );
  }
}

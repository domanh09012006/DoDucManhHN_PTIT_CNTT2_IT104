import React, { Component } from "react";

export default class Exercise5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      name: "",
      price: "",
      quantity: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div
        style={{
          width: "300px",
          margin: "20px auto",
          padding: "16px",
          border: "1px solid black",
          borderRadius: "8px"
        }}
      >
        <h2>Form san pham</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "8px" }}>
            <label>Ma san pham</label><br />
            <input
              type="text"
              name="code"
              value={this.state.code}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label>Ten san pham</label><br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label>Gia</label><br />
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label>So luong</label><br />
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

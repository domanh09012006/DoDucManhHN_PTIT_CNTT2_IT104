import React, { Component } from "react";

export default class Bai1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target; 
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

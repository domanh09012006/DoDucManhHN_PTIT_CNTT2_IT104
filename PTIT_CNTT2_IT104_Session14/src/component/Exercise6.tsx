import React, { Component } from "react";

export default class Exercise6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "", 
      save: ""
    };
  }
  handleChange = (event) => {
    this.setState({
      gender: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      save: this.state.gender
    });
  };
  render() {
    return (
      <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
        <form onSubmit={this.handleSubmit}>
          <p>Gioi tinh: {this.state.save}</p>
          <label>
            <input
              type="radio"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Nu"
              checked={this.state.gender === "Nu"}
              onChange={this.handleChange}
            />
            Nu
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Khac"
              checked={this.state.gender === "Khac"}
              onChange={this.handleChange}
            />
            Khac
          </label>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

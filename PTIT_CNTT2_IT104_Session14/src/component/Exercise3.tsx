import React, { Component } from "react";

export default class Exercise3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Rikkei Academy",
    };
  }
  changeState = () => {
    this.setState({
      title: "RikkeiSoft",
    });
  };
  render() {
    return (
      <>
        <h1>Company: {this.state.title}</h1>
        <button onClick={this.changeState}>Change state</button>
      </>
    );
  }
}

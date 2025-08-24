import React, { Component } from "react";

export default class Exercise4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: "Hoc code de di lam"
    };
  }
  changeMessage = () => {
    this.setState({
      slogan: "Hoc code de thanh cong co len"
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log("State mới:", nextState.slogan);
    return false;
  }
  render() {
    return (
      <>
        <h1>{this.state.slogan}</h1>
        <button onClick={this.changeMessage}>Change state</button>
      </>
    );
  }
}

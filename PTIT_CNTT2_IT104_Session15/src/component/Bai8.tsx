import React, { Component } from "react";

export default class Bai8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <p>Thoi gian: {this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

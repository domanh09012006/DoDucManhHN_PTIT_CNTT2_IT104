import React, { Component } from 'react';
interface ClickCounterState {
  count: number;
}
export default class ClickCounter extends Component<{}, ClickCounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

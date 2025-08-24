import React, { Component } from 'react'

export default class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "đoucmanh"
    };
  }
  render() {
    return (
      <div>
        <h2>Bai1</h2>
        <p>xin chao toi la:{this.state.userName}</p>
      </div>
    )
  }
}

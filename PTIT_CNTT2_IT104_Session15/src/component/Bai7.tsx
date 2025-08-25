import React, { Component } from "react"

type StateType = {
  count: number
}
export default class Bai7 extends Component<{}, StateType> {
  private timerID?: number
  constructor(props: {}) {
    super(props)
    this.state = {
      count: 0
    }
  }
  tick = () => {
    this.setState(prevState => ({
      count: prevState.count === 10 ? 0 : prevState.count + 1
    }))
    this.timerID = window.setTimeout(this.tick, 1000)
  }
  componentDidMount() {
    this.timerID = window.setTimeout(this.tick, 1000)
  }
  componentWillUnmount() {
    if (this.timerID) {
      clearTimeout(this.timerID)
    }
  }
  render() {
    return (
      <div>
        <p>Bo dem {this.state.count}</p>
      </div>
    )
  }
}

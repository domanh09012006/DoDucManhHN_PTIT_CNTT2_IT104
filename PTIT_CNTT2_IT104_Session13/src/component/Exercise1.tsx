import React, { Component } from 'react'

interface PropsType{
  name: string
}
export default class Exercise1 extends Component<PropsType> {
  constructor(prop: PropsType){
    super(prop)
    this.state = {name: "Do Duc Manh"}
  }
  render() {
    
    return (
      <div>
        <h1>Bai 1</h1>
        <p>Ho va ten: {this.state.name}</p>
      </div>
    )
  }
}

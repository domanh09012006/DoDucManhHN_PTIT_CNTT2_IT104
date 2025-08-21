import React, { Component } from 'react'

interface PropsType{
    id: number
    name: string
    date: string
    address: string
}
export default class Exercise2 extends Component {
    state = {
        id: 1,
        name: "Nguyen van son",
        date: "20/12/2023",
        address: "Thanh Xuan, Ha Noi"
    }
  render() {
    return (
      <div>
        <h1>Bai2</h1>
        <p>ID: {this.state.id}</p>
        <p>Ho ten: {this.state.name}</p>
        <p>Ngay sinh: {this.state.date}</p>
        <p>Dia chi: {this.state.address}</p>
      </div>
    )
  }
}

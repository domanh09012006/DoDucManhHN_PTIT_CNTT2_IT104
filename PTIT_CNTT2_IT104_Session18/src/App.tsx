import React, { Component } from 'react'
import Increase from './component/Increase'
import Bai7 from './component/Bai7'
import Color from './component/Color'
import InputRadio from './component/InputRadio'

export default class App extends Component {
  render() {
    return (
      <>
      <Increase/>
      <Bai7/>
      <Color/>
      <InputRadio/>
      </>
    )
  }
}

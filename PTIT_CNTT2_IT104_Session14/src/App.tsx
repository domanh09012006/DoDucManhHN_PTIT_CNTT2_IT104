import React, { Component } from 'react'
import Exercise1 from './component/Exercise1'
import Notification from './component/Notification'
import Exercise3 from './component/Exercise3'
import Exercise4 from './component/Exercise4'
import Exercise5 from './component/Exercise5'
import Exercise6 from './component/Exercise6'
import Exercise7 from './component/Exercise7'
import Exercise8 from './component/Exercise8'

export default class App extends Component {
  render() {
    return (
      <>
      <Exercise1/>
      <Notification/>
      <Exercise3/>
      <Exercise4/>
      <Exercise5/>
      <Exercise6/>
      <Exercise7/>
      <Exercise8/>
      </>
    )
  }
}

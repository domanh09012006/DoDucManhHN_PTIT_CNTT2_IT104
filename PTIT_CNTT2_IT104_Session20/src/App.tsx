import React, { Component } from 'react'
import CheckChar from './component/CheckChar'
import UserProfile from './component/UserProfile'
import PageTitle from './component/PageTitle'
import Welcome from './component/Welcome'
import Modal from './component/Modal'

export default class App extends Component {
  render() {
    return (
      <div>
        <CheckChar/>
        <UserProfile/>
        <PageTitle/>
        <Welcome/>
        <Modal/>
      </div>
    )
  }
}

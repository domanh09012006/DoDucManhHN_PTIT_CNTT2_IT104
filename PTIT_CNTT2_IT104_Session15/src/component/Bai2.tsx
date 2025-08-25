import React, { Component} from 'react'

interface StateType {
  color: string
  submitted: string
}

export default class Bai2 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props)
    this.state = {
      color: "",
      submitted: ""
    }
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value })
  }
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.setState({ submitted: this.state.color })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Mau sac {this.state.submitted}</label>
          <br/>
          <input 
            type="color" 
            value={this.state.color} 
            onChange={this.handleChange} 
          />
          <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }
}

import React, { Component} from 'react'

interface StateType {
  date: string
  submitted: string
}

export default class Bai4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props)
    this.state = {
      date: "",
      submitted: ""
    }
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value })
  }
  handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    this.setState({ submitted: this.state.date })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Ngày sinh: {this.state.submitted}</label>
          <br/>
          <input 
            type="date" 
            value={this.state.date} 
            onChange={this.handleChange} 
          />
          <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }
}

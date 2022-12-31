import React, { Component } from 'react'
import HOC4 from './HOC4'

 class Click4 extends Component {
  render() {
    return (
      <div>
      <button onClick={this.props.handleIncrement}>Click </button>
      <h2>You Clicked {this.props.count} times !!</h2>
      </div>
    )
  }
}
export default HOC4(Click4)
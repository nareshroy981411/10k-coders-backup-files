import React, { Component } from 'react'
import HOC5 from './HOC5'

 class Click5 extends Component {
  render() {
    return (
      <div>
      <button onClick={this.props.handleIncrement}>Click </button>
      <h2>You Clicked {this.props.count} times !!</h2>
      </div>
    )
  }
}
export default HOC5(Click5)
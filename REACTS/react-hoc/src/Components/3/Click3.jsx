import React, { Component } from 'react'
import HOC3 from './HOC3'

 class Click3 extends Component {
  render() {
    return (
      <div>
      <button onClick={this.props.handleIncrement}>Click </button>
      <h2>You Clicked {this.props.count} times !!</h2>
      </div>
    )
  }
}
export default HOC3(Click3)
import React, { Component } from 'react'
import HOC4 from './HOC4'

 class Hover4 extends Component {
  render() {
    return (
      <div>
      <h2 onMouseOver={this.props.handleIncrement}>Hover on Me </h2>
      <h2>You Hovered {this.props.count} times</h2></div>
    )
  }
}
export default HOC4(Hover4)
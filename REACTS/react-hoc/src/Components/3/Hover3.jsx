import React, { Component } from 'react'
import HOC3 from './HOC3'

 class Hover3 extends Component {
  render() {
    return (
      <div>
      <h2 onMouseOver={this.props.handleIncrement}>Hover on Me </h2>
      <h2>You Hovered {this.props.count} times</h2></div>
    )
  }
}
export default HOC3(Hover3)
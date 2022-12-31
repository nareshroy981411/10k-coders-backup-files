import React, { Component } from 'react'
import HOC5 from './HOC5'

 class Hover5 extends Component {
  render() {
    return (
      <div>
      <h2 onMouseOver={this.props.handleIncrement}>Hover on Me </h2>
      <h2>You Hovered {this.props.count} times</h2></div>
    )
  }
}
export default HOC5(Hover5)
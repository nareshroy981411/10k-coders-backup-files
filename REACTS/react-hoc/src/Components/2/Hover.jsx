import React, { Component } from 'react'
import HOC from './HOC'

 class Hover extends Component {
  render() {
    return (
      <div>
      <h2 onMouseOver={this.props.handleIncrement}>Hover on Me </h2>
      <h2>You Hovered {this.props.count} times</h2>
      </div>
    )
  }
}
export default HOC(Hover)
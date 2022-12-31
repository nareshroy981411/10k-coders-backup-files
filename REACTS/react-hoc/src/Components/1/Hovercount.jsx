import React, { Component } from 'react'

export default class Hovercount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleIncrement = () => {
        this.setState({count: this.state.count+4})
    }
  render() {
    return (
      <div>
        <h2 onMouseOver={this.handleIncrement}>Naresh</h2>
        <h2>hovered {this.state.count}</h2>
      </div>
    )
  }
}

import React from 'react'
import { Component } from 'react'

 const HOC3 = (Main) => {
    
 class HOC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleIncrement = ()=>{
        this.setState({count:this.state.count+9})
    }
      render() {
        return (
          <div><Main count={this.state.count} handleIncrement={this.handleIncrement}/></div>
        )
      }
    }
    return HOC
}
export default HOC3
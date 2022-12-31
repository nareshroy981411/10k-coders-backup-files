import React, { Component } from 'react'
    
     class ClickCount extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        handleIncrement=()=>{
            this.setState({count:this.state.count+9})
        }

      render() {
        return (
          <div>
            <button onClick={this.handleIncrement}>Click</button>
            <h2>declaring {this.state.count} times</h2>
          </div>
        )
      }
    }
    
export default ClickCount
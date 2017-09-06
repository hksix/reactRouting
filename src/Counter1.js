import React, { Component } from 'react';

class Counter1 extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            amount: 1
        }
    }
    render(){
        return(
            <div>
            {/* <h1>Counter</h1> */}
            <h1>{this.state.number}</h1>
            <button onClick={this._countup}>+</button>
            <button onClick={this._countdown}>-</button>
        </div>
        )
    }

    _countup = () =>{
        let currentNumber = this.state.number;
        let addNumber = currentNumber+1
        this.setState({
          number: addNumber
        });
      }
      _countdown = () =>{
        let currentNumber = this.state.number;
        let decNumber = currentNumber-1
        this.setState({
          number: decNumber
        });
      }
}

export default Counter1;
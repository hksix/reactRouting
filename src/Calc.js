import React, { Component } from 'react';

class Calc extends Component{
    constructor(props){
        super(props);
        this.state={
            resultBox:0,
            result:0,
            type: 'null'
        }
    }
    render(){
        return(
            <div>
                <p>Calculator</p>
                <div className='display'>{this.state.resultBox}</div>
                <div>
                <button onClick={()=>{
                    this._clear()}}>
                    C
                    </button>
                <button>
                <span>CE</span>
                </button>
            </div>
                <div>
                    <button onClick={()=>{
                        this._add()}}>
                        +
                        </button>
                    <button>-</button>
                    <button onClick={()=>{
                        this._multiply()}}>
                        *
                        </button>
                    <button>%</button>
                    <button onClick={()=>{
                        this._updateResult()}}>
                        =
                        </button>
                </div>
            <div>
                <button onClick={()=>{
                    this._setResult(1)
                    }}>
                <span>1</span>
                </button>
                <button onClick={()=>{
                    this._setResult(2)
                    }}>
                <span>2</span>
                </button>
                <button onClick={()=>{
                    this._setResult(3)
                    }}>
                <span>3</span>
                </button>
                <br></br>
                <button onClick={()=>{
                    this._setResult(4)
                    }}>
                <span>4</span>
                </button>
                <button onClick={()=>{
                    this._setResult(5)
                    }}>
                <span>5</span>
                </button>
                <button onClick={()=>{
                    this._setResult(6)
                    }}>
                <span>6</span>
                </button>
                <br></br>
                <button onClick={()=>{
                    this._setResult(7)
                    }}>
                <span>7</span>
                </button>
                <button onClick={()=>{
                    this._setResult(8)
                    }}>
                <span>8</span>
                </button>
                <button onClick={()=>{
                    this._setResult(9)
                    }}>
                <span>9</span>
                </button>
                <br></br>
                
                <button onClick={()=>{
                    this._setResult(0)
                    }}>
                    <span>0</span>
                </button>
            </div>
            </div>
        )
    }

    _setResult = (number) =>{
        let combined ="";
        if (this.state.resultBox === 0){
             combined = number;
        }else{
             combined = ''+ this.state.resultBox+ number;
        }
        this.setState({
            resultBox: combined,
            // result: combined
            });
        }

    _add = () =>{
        this.setState({
            result: this.state.resultBox,
            type: 'add'
        })
        let currentResult = this.state.result;
        // a.push(currentResult)
        this.setState({
            resultBox: 0
        })
            let newNumber = this.state.resultBox
        console.log(newNumber);
        console.log(currentResult);
        
    }
    _multiply = () =>{
        this.setState({
            result: this.state.resultBox,
            type: 'multiply'
        })
        let currentResult = this.state.result;
        // a.push(currentResult)
        this.setState({
            resultBox: 0,
            
        })
            let newNumber = this.state.resultBox
        console.log(newNumber);
        console.log(currentResult);
        
    }
    _updateResult= ()=>{
        var total;
        var checkType = this.state.type;

        if(checkType ==="add"){
            total = eval(this.state.result) + eval(this.state.resultBox);
            
        }
        else if(checkType === "multiply"){
            total = eval(this.state.result) * eval(this.state.resultBox);
        }
        this.setState({
            resultBox: total
        })
    }
    _clear = ()=>{
        this.setState({
            result:0,
            resultBox:0,
            type:'null',
        })
    }
}

export default Calc;
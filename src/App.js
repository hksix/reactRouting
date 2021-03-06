import React, { Component } from 'react';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import { CSSTransitionGroup } from 'react-transition-group'

import logo from './logo.svg';
import './App.css';

import Menu from './Menu.js'
import BasicExample from './Linker.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentNav:'NA'
    }
  }
 

  render() {

      return (
        
        <div className="App">
          
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className='header'>Simple React Projects</h2>
          </div>
          <Menu />
          {/* <BasicExample /> */}
          
        </div>
      );
    }
  _changeNav= (navValue) =>{
    console.log(`hey:${navValue}`);
    this.setState({
      currentNav:navValue
    })
  }
}


export default App;

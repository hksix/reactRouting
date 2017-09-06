import React, { Component } from 'react';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-transition-group/Transition';

import logo from './logo.svg';
import './App.css';

import Jank from './Jank.js'
import Thing from './Thing.js'
import Bob from './Bob.js'
import Calc from './Calc.js'
import Counter1 from './Counter1.js'
// import Dropdown from './Menu.js'


const navs = [
  <Jank />,
  <Thing />,
  <Bob />,
  <Calc />,
  <Counter1 />
];

const navNames=[
  'Jank',
  'Thing',
  'Bob'
]

class App extends Component {
  constructor(props){
    super(props);
    // this.toggleMenu = this.toggleMenu.bind(this);
    this.state={
      currentNav:1,
      menuActive: false
    }
  }
 

  render() {
    const componentToRender = navs[this.state.currentNav];

    const myNavs = navs.map((comp,idx) => (
      <li><a href='#' onClick={(event) => {
        event.preventDefault();
        this._changeNav(idx);
        }}>{navNames[idx]}</a></li>
    ));
      <div>
      <BrowserRouter>
      <div>
            <ul>
              <li>
                <Link to='/'>Jank Town</Link>
                </li>
                <li>
                <Link to='/bob'>Bob Stone</Link>
                </li>
                <li>
                <Link to='/thing'>The Thing</Link>
                </li>
                <li>
                <Link to='/calc'>Calculator</Link>
                </li>
                <li>
                <Link to='/counter'>Counter Maker</Link>
                </li>
                </ul>
          <Route exact path='/' component={Jank} />
          <Route path='/bob' component={Bob} />
          <Route path='/thing' component={Thing} />
          <Route path='/calc' component={Calc} />
          <Route path='/counter' component={Counter1} />
        </div>
        </BrowserRouter>
        </div>
      

   
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
            <ul>
              {myNavs}
  
            </ul>
  
          {componentToRender}
          
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

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import Jank from './Jank.js'
import Thing from './Thing.js'
import Bob from './Bob.js'
import Calc from './Calc.js'
import Counter1 from './Counter1.js'


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
    'Bob',
    'Calculator',
    'CounterBot'
  ]
  

class Menu extends Component{
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state={
            menuActive: false
        };
    }

    toggleMenu(){
        let menuState = !this.state.menuActive;
        this.setState({
            menuActive:menuState
        });
    }
    render() {
        let menu;
        if(this.state.menuActive) {
          menu = 
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
            
        } else {
          menu = "";
        }
        return (
          <div id = "menu">
            <button onClick = { this.toggleMenu }>X</button>
          <CSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
            {menu}
          </CSSTransitionGroup>
        </div>
        )
      }
    }

export default Menu;
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import Jank from './Jank.js'
import Thing from './Thing.js'
import Bob from './Bob.js'
import Calc from './Calc.js'
import Counter1 from './Counter1.js'
import Welcome from './Welcome.js'


const navs = [
    <Jank />,
    <Thing />,
    <Bob />,
    <Calc />,
    <Counter1 />,
    <Welcome />
  ];
  
  const navNames=[
    'Jank',
    'Thing',
    'Bob',
    'Calculator',
    'CounterBot',
    'Welcome'
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
          <div>
                <ul>
                  <li>
                    <Link to='/jank'>Jank Town</Link>
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
                </div>
                  
            
        } else {
          menu = "";
          
        }
        return (
            <BrowserRouter>
            <div>
          <div id = "menu">
            <button className='menuButton' onClick = { this.toggleMenu }>DropDown</button>
          <CSSTransitionGroup transitionName = "menu" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {menu}
          </CSSTransitionGroup>
            <Route path='/jank' component={Jank} />
            <Route path='/bob' component={Bob} />
            <Route path='/thing' component={Thing} />
            <Route path='/calc' component={Calc} />
            <Route path='/counter' component={Counter1} />
            <Route exact path='/' component={Welcome} /> 
            </div>
             
            </div>
            
        </BrowserRouter>
        )
      }
    }

export default Menu;
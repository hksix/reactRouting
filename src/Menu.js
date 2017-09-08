import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import BasicExample from './Linker.js'

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
          <BasicExample />
        } else {
          menu = "";        
        }
        return (
        <div>
            <div id = "menu">
                <button className='menuButton' onClick = { this.toggleMenu }>Menu</button>
                <CSSTransitionGroup transitionName = "menu" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {menu}
                </CSSTransitionGroup>
            </div>     
        </div>
        )
    }
}
export default Menu;
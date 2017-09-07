import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Jank from './Jank.js'
import Thing from './Thing.js'
import Bob from './Bob.js'
import Calc from './Calc.js'
import Counter1 from './Counter1.js'
import Menu from './Menu.js'


const Routerman = ({
    
})=>{
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
}
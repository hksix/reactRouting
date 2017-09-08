import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import Jank from './Jank.js'
import Thing from './Thing.js'
import Bob from './Bob.js'
import Calc from './Calc.js'
import Counter1 from './Counter1.js'
import Welcome from './Welcome.js'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/about" activeStyle={{fontWeight: 'bold',color: 'red'}}>About</NavLink></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to='/jank'>Jank Town</Link></li>
        <li><Link to='/bob'>Bob Stone</Link></li>
        <li><Link to='/thing'>The Thing</Link></li>
        <li><Link to='/calc'>Calculator</Link></li>
        <li><Link to='/counter'>Counter Maker</Link></li>
      </ul>

      <hr/>
      {/* <div style={{ flex: 1, padding: '10px' }}> */}
        <Route exact path="/" component={Welcome}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path='/jank' component={Jank} />
        <Route path='/bob' component={Bob} />
        <Route path='/thing' component={Thing} />
        <Route path='/calc' component={Calc} />
        <Route path='/counter' component={Counter1} />
        {/* </div> */}
    </div>
  </Router>
)


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Another Menu!
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Yeah buddy
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample
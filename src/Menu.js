// import React,{Component} from 'react';
// import ReactCSSTransitionGroup from 'react-transition-group/Transition';
// import Jank from './Jank.js'
// import Thing from './Thing.js'
// import Bob from './Bob.js'
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import Calc from './Calc.js'
// import Counter1 from './Counter1.js'
// import Menu from './Menu.js'




// const navs = [
//   <Jank />,
//   <Thing />,
//   <Bob />,
//   <Calc />,
//   <Counter1 />
// ];

// class Dropdown extends Component{
//     constructor(props){
//         super(props);
//         this.toggleMenu = this.toggleMenu.bind(this);
//         this.state={
//             menuActive: false
//         };
//     }

//     toggleMenu(){
//         let menuState = !this.state.menuActive;
//         this.setState({
//             menuActive: menuState
//         });
//     }
//     render() {
//         let menu;
//         if(this.state.menuActive) {
//           menu = 
//           <BrowserRouter>
//           <div className="dropdown">
//                 <button className='dropbtn'>Menu</button>
//                 <div id="myDropdown" ref="myDropdown"  className="dropdown-content" ref='dropdown-content'>
//                     <Link to='/'>Jank Town</Link>
                  
//                     <Link to='/bob'>Bob Stone</Link>

//                     <Link to='/thing'>The Thing</Link>

//                     <Link to='/calc'>Calculator</Link>

//                     <Link to='/counter'>Counter Maker</Link>
//                     </div>
//               <Route exact path='/' component={Jank} />
//               <Route path='/bob' component={Bob} />
//               <Route path='/thing' component={Thing} />
//               <Route path='/calc' component={Calc} />
//               <Route path='/counter' component={Counter1} />
//             </div>
            
//           </BrowserRouter>
//         } else {
//           menu = "";
//         }
//         return (
//           <div id = "menu">
//             <i className = "fa fa-plus" onClick = { this.toggleMenu }/>
//           <ReactCSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
//             {menu}
//           </ReactCSSTransitionGroup>
//         </div>
//         )
//       }
// }

// export default Dropdown;
import React, { Component } from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Bio from './Bio';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
	      	<nav>
	          <ul>
	            <li><Link to='/'>Home</Link></li>
	            <li><Link to='/bio'>Bio</Link></li>
	          </ul>
	        </nav>

	        <Switch>
	          <Route exact path='/' component={HomePage}/>
	          <Route path='/bio' component={Bio}/>
	        </Switch>

        <NavBar/>
        <HomePage/>
        <Bio/>
      </div>
    );
  }
}

export default App;

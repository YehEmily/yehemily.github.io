import React, { Component } from 'react';
import HomePage from './HomePage';
import Bio from './Bio';
import Contact from './Contact';
import Projects from './Projects';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
	      	<nav className="padded-navbar">
	         	<Link className="red" to='/'>Home</Link> &emsp; 
	            <Link className="orange" to='/bio'>Bio</Link> &emsp; 
	            <Link className="yellow" to='/projects'>Projects</Link> &emsp; 
	            <Link className="green" to='/contact'>Contact Me</Link>
	        </nav>
	        <Switch>
	          <Route exact path='/' component={HomePage}/>
	          <Route path='/bio' component={Bio}/>
	          <Route path='/projects' component={Projects}/>
	          <Route path='/contact' component={Contact}/>
	        </Switch>
      </div>
    );
  }
}

export default App;

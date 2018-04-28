import React, { Component } from 'react';
import HomePage from './HomePage';
import Bio from './Bio';
import Contact from './Contact';
import Projects from './Projects';
import ArtProjects from './ArtProjects';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
	      	<nav className="padded-navbar">
	         	<Link className="navbar" to='/'>127.0.0.1</Link> &emsp; &emsp; 
	            <Link className="navbar" to='/all-about-me'>ABOUT</Link> &emsp; &emsp; 
	            <Link className="navbar" to='/my-past-work'>PROJECTS</Link> &emsp; &emsp; 
	            <Link className="navbar" to='/things-i-made'>ARTWORK</Link> &emsp; &emsp; 
	            <Link className="navbar" to='/lets-talk-soon'>CONTACT ME</Link>
	        </nav>
	        <Switch>
	          <Route exact path='/' component={HomePage}/>
	          <Route path='/all-about-me' component={Bio}/>
	          <Route path='/my-past-work' component={Projects}/>
	          <Route path='/things-i-made' component={ArtProjects}/>
	          <Route path='/lets-talk-soon' component={Contact}/>
	        </Switch>
      </div>
    );
  }
}

export default App;

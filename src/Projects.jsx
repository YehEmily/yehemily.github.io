import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FullProjects from './FullProjects';
import Project from './Project';
import './App.css';

class Projects extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<div className="just-for-projects">
				  <Switch>
				  	<Route exact path='/my-past-work' component={FullProjects}/>
	    			<Route path='/my-past-work/:tag' component={Project}/>
				  </Switch>
				</div>
			</div>
		);
	}
}

export default Projects;
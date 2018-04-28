import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FullProjects from './FullProjects';
import Project from './Project';
import './App.css';

/*import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';*/

class Projects extends Component {
	render() {
		return (
			<div className="just-for-projects">
			  <Switch>
			  	<Route exact path='/my-past-work' component={FullProjects}/>
    			<Route path='/my-past-work/:tag' component={Project}/>
			  </Switch>
			</div>
		);
	}
}

export default Projects;
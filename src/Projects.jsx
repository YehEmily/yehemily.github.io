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
			  	<Route exact path='/projects' component={FullProjects}/>
    			<Route path='/projects/:tag' component={Project}/>
			  </Switch>
			</div>
		);
	}
}

export default Projects;


/*<h1>WHAT I DID <span style={highlight1}>THIS SUMMER</span></h1>
			    <h5>MAY 2017 - AUGUST 2017</h5>
			    <div className="cursor-pointer" id="pivotal">

			    <img src={geode} style={size6} /> &emsp; <img src={gemfire} style={size6} /></div>

			    <h1>WHAT I DID <span style={highlight2}>AS A SOPHOMORE</span></h1>
			    <h5>SEPTEMBER 2016 - MAY 2017</h5>

			    <div className="cursor-pointer" id="calmmute"><img src={calmmute} style={size10} /></div> &emsp; 
			    <div className="cursor-pointer" id="calendar"><img src={calendar} style={size10} /></div> &emsp; 
			    <div className="cursor-pointer" id="projects"><img src={projects} style={size10} /></div>

			    <br/><br/>
			    <div className="cursor-pointer" id="puppets"><img src={poe} style={size10} /></div>
			    <br/><br/>

			    <div className="cursor-pointer" id="labs"><img src={lights} style={size10} /></div> &emsp; 
			    <div className="cursor-pointer" id="labs"><img src={scanner} style={size10} /></div> &emsp; 
			    <div className="cursor-pointer" id="labs"><img src={robot} style={size10} /></div>

			    <h1>WHAT I DID <span style={highlight3}>LAST SUMMER</span></h1>
			    <h5>MAY 2016 - AUGUST 2016</h5>
			    <div className="cursor-pointer" id="bio"><img src={olin} style={width10} /></div>
			    
			    <h1>WHAT I DID <span style={highlight4}>AS A FRESHMAN</span></h1>
			    <h5>SEPTEMBER 2015 - MAY 2016</h5>

			    <div className="cursor-pointer" id="modsim"><img src={modsim} style={size10} /></div> &emsp; 
			    <div className="cursor-pointer" id="softdes"><img src={softdes} style={size10} /></div>*/
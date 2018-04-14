import React, { Component } from 'react';
import './App.css';

import geode from './images/geode-logo.png';
import gemfire from './images/gemfire.png';
import poe from './images/marionette.jpg';
import calmmute from './images/Calmmute.png';
import calendar from './images/calendar.png';
import projects from './images/project-projects.png';
import lights from './images/lights.png';
import scanner from './images/scanner.png';
import robot from './images/robot.png';
import olin from './images/olin-logo.png';
import modsim from './images/modsim.jpg';
import softdes from './images/softdes.png';

class Projects extends Component {
	render() {
		var size6 = { height: '6em' };
		var size10 = { height: '10em' };
		var width10 = { width: '10em' };

		var highlight1 = { color: 'rgb(255, 193, 94)' };
		var highlight2 = { color: 'rgb(255, 241, 94)' };
		var highlight3 = { color: 'rgb(122, 255, 122)' };
		var highlight4 = { color: 'rgb(107, 213, 255)' };

		return (
			<div id="resume" className="fill-page">
			  <div className="margin-top">
			    <h1>WHAT I DID <span style={highlight1}>THIS SUMMER</span></h1>
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
			    <div className="cursor-pointer" id="softdes"><img src={softdes} style={size10} /></div>
			  </div>
			</div>
		);
	}
}

export default Projects;
import React, { Component } from 'react';
import './App.css';

class HomePage extends Component {
	render() {
		var highlight = {
	      color: 'rgb(255, 50, 94)'
	    }

		return (
			<div className="fill-page" id="titlepage">
	          <div className="center-page">
	            <div className="main black-background">
	              <h1 className="black-background-text">HI, I'M <span style={highlight}>EMILY YEH</span>.</h1>
	              <h5>I'M A STUDENT ENGINEER</h5>
	              <a href="#about"><button className="orange">ABOUT</button></a> &emsp; 
	              <a href="#resume"><button className="yellow">RESUM&Eacute;</button></a> &emsp; 
	              <a href="#contact"><button className="green">CONTACT</button></a>
	            </div>
	          </div>
	        </div>
        )
	}
}

export default HomePage;
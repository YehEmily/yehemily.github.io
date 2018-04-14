import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
	render() {
		return (
			<nav id="menu">
			    <a className="red" href="#titlepage">HOME</a> &emsp; &emsp;
			    <a className="orange" href="#about">ABOUT</a> &emsp; &emsp;
			    <a className="yellow" href="#resume">RESUM&Eacute;</a> &emsp; &emsp;
			    <a className="green" href="#contact">CONTACT</a>
			</nav>
			);
	}
}

export default NavBar;
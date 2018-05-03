import React, { Component } from 'react';
import './App.css';
import './fonts.css';
import './transitions.css';
import me from './images/picture.png';

class HomePage extends Component {
	render() {
		var highlight = { color: 'hotpink' };
	    var size_me = { height: '30em' };

		return (
			<div className="animated slideInRight">
				<div className="fill-page">
		          <div className="center-page">
		            <div className="main opaque-background">
		              <h1 className="black-background-text">HI, I'M <span style={highlight}>EMILY YEH</span></h1>
			              <img className="animate no-glow" src={me} alt="it me" style={size_me} />
			            </div>
			          </div>
		        </div>
	        </div>
        )
	}
}

export default HomePage;
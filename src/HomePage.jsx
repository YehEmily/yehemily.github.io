import React, { Component } from 'react';
import './App.css';
import './fonts.css';
import './transitions.css';
import cursor from './images/cursor.gif';
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
		              <h1 className="black-background-text">HI, I'M <span style={highlight}>EMILY YEH</span> <img alt="cursor" src={cursor} /></h1>
			              <img src={me} alt="it me" style={size_me} />
			            </div>
			          </div>
		        </div>
	        </div>
        )
	}
}

export default HomePage;
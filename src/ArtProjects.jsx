import React, { Component } from 'react';
import './App.css';
import './fonts.css';

class ArtProjects extends Component {
	render() {
		var highlight = { color: 'hotpink' };
	    var size_me = { height: '30em' };

		return (
			<div className="content">
			<div className="fill-page">
	          <div className="center-page">
	            <div className="main opaque-background">
	              <h1>I LIKE TO <span style={highlight}>DRAW</span></h1>
	            </div>
	          </div>
	        </div>
	        </div>
        )
	}
}

export default ArtProjects;
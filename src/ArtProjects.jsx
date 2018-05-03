import React, { Component } from 'react';
import './App.css';
import './fonts.css';

class ArtProjects extends Component {
	render() {
		var highlight = { color: 'hotpink' };

		return (
			<div className="animated fadeIn">
			<div className="content">
				<div className="fill-page">
		          <div className="center-page">
		            <div className="main opaque-background">
		              <h1>I LIKE TO <span style={highlight}>DRAW</span></h1>
		              <p>(will fill this page in later)</p>
		            </div>
		          </div>
		        </div>
	        </div>
	        </div>
        )
	}
}

export default ArtProjects;
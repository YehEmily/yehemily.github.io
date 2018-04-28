import React, { Component } from 'react';
import './App.css';

class LinkedInImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       githubSrc: require('./images/linkedin.png')
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      githubSrc: require('./images/linkedin-pink.png')
    });
  }

  handleMouseOut() {
    this.setState({
      githubSrc: require('./images/linkedin.png')
    });
  }

  render() {
    var format = { height: '7em' };
    return (
        <img alt="linkedin" style={format} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.githubSrc}/>
    );
  }
}

export default LinkedInImage;
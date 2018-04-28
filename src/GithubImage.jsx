import React, { Component } from 'react';
import './App.css';

class GithubImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       githubSrc: require('./images/github.png')
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      githubSrc: require('./images/github-pink.png')
    });
  }

  handleMouseOut() {
    this.setState({
      githubSrc: require('./images/github.png')
    });
  }

  render() {
    var format = { height: '7em' };
    return (
        <img alt="github" style={format} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.githubSrc}/>
    );
  }
}

export default GithubImage;
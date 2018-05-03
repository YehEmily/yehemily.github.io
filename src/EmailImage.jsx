import React, { Component } from 'react';
import './App.css';

class EmailImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       githubSrc: require('./images/email.png')
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      githubSrc: require('./images/email-pink.png')
    });
  }

  handleMouseOut() {
    this.setState({
      githubSrc: require('./images/email.png')
    });
  }

  render() {
    var format = { width: '7em', maxWidth: '20%' };
    return (
        <img alt="email" style={format} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.githubSrc}/>
    );
  }
}

export default EmailImage;
import React, { Component } from 'react';
import './App.css';
import GithubImage from './GithubImage'
import LinkedInImage from './LinkedInImage'
import EmailImage from './EmailImage'


class Contact extends Component {
  render() {
    var highlight = { color: 'hotpink' };

    return (
      <div className="fill-page" id="contact">
        <div className="center-page">
          <div className="main black-background">
            <h1 className="black-background-text">LET'S GET <span style={highlight}>IN TOUCH</span></h1>
            <p className="margins">Thanks for visiting my website! If you have any questions, comments, or feedback, please reach out to me via any of the following links.</p>
            
            <a target="_blank" rel="noopener noreferrer" href="mailto:emily.yeh@students.olin.edu">
            <EmailImage /></a> &emsp; &emsp;
            
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/YehEmily">
            <GithubImage /></a> &emsp; &emsp;
            
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yehemily/">
            <LinkedInImage /></a>

            <p>You can also download my resum&eacute; <a target="_blank" rel="noopener noreferrer" href="EmilyYeh.pdf">here</a>.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
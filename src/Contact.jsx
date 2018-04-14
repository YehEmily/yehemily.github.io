import React, { Component } from 'react';
import './App.css';
import email from './images/email.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'

class Contact extends Component {
  render() {
    var highlight = {
      color: 'rgb(255, 50, 94)'
    };

    var size = {
      height: '7em'
    }

    return (
      <div className="fill-page" id="contact">
        <div className="center-page">
          <div className="main black-background">
            <h1 className="black-background-text">LET'S GET <span style={highlight}>IN TOUCH</span></h1>
            <h5>AND THANKS AGAIN FOR VISITING!</h5>
            <a target="_blank" href="mailto:emily.yeh@students.olin.edu"><img src={email} style={size}/></a> &emsp;
            <a target="_blank" href="https://github.com/YehEmily"><img src={github} style={size}/></a> &emsp; 
            <a target="_blank" href="https://www.linkedin.com/in/yehemily/"><img src={linkedin} style={size}/></a>

            <h5><a target="_blank" href="EmilyYeh.pdf">PS: YOU CAN DOWNLOAD MY RESUME HERE.</a></h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
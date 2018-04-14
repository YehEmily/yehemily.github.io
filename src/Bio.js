import React, { Component } from 'react';
import './App.css';

class Bio extends Component {
  render() {
    var highlight = {
      color: 'rgb(255, 50, 94)'
    }

    return (
      <div id="about" className="fill-page">
        <div className="center-page">
          <h1><span style={highlight}>WHO</span> AM I?</h1>

          <p className="margins justified-text">I'm a junior pursuing a B.S. in engineering with a concentration in computing at <a target="_blank" className="paragraph"
                  href="http://www.olin.edu/">Olin College of Engineering</a> in Needham, Massachusetts. I
             mainly program in Java, although I've also worked on projects in Python and Matlab. I also enjoy web design, and I built this entire website from scratch using HTML/CSS and a hint of JavaScript/jQuery. Some of my coolest current and past projects can be viewed in my <a href="#resume">resum&eacute;</a>. Take a look!</p>

          <p className="margins justified-text">This past summer, I worked at <a target="_blank" className="paragraph" href="https://pivotal.io/">Pivotal</a> as an intern on the
             GemFire Management and Monitoring (M&M) team. During this time, I worked on <a target="_blank" className="paragraph" href="https://pivotal.io/pivotal-gemfire">Pivotal GemFire</a> and its open-source counterpart, <a target="_blank" className="paragraph" href="http://geode.apache.org/">Apache Geode</a>. I had
             the opportunity to pair-program with a number of Pivots to squash bugs and create features, and I learned the ropes of how a software company like
             Pivotal is operated. I participated in a workshop organized and run by Elisabeth Hendrickson,
             Pivotal's VP of Data R&D, which dove into agile development and how it can
             improve the productivity of any workplace. I also worked with acclaimed author Michael Feathers, who visited the Beaverton office to teach and
             assist the M&M team in refactoring and improving our code base.</p>

          <p className="margins justified-text">Currently, I'm looking for another summer internship and/or post-graduation job at a software
             company. I want to work for people I can learn from and with whom I can do
             things that are fun, valuable, fulfilling, and challenging. If you would like to contact me, feel free to reach me via the
             links in the <a href="#contact">contact</a> section about your particular business interests, or if you have any
             questions for me.</p>

          <p className="margins justified-text">Thanks for stopping by!<br/>
          <span className="fancy-font">Emily Yeh</span></p>
        </div>
      </div>
    );
  }
}

export default Bio;
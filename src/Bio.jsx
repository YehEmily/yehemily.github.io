import React, { Component } from 'react';
import './App.css';

class Bio extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    var highlight = {
      color: 'hotpink'
    }

    return (
      <div className="animated fadeIn">
        <div className="content">
          <div className="fill-page">
            <div className="bio">
              <h1><span style={highlight}>WHO</span> AM I?</h1>

              <p className="margins justified-text">I'm a junior pursuing a B.S. in engineering with a concentration in computing at <a target="_blank" rel="noopener noreferrer" className="paragraph" href="http://www.olin.edu/">Olin College of Engineering</a> in Needham, Massachusetts. My main programming languages are Java, C, and Python. I also enjoy web design, and I built this entire website from scratch using ReactJS and a splash of CSS.</p>

              <p className="margins justified-text">This summer, I'll be working at <a target="_blank" rel="noopener noreferrer" className="paragraph" href="https://www.audible.com/">Audible</a> as an intern on the Romance team in Newark, New Jersey. That's really all there is to say about this, since I don't know anything else yet.</p>

              <p className="margins justified-text">Last summer, I worked at <a target="_blank" rel="noopener noreferrer" className="paragraph" href="https://pivotal.io/">Pivotal</a> as an intern on the
                 GemFire Management and Monitoring (M&M) team. During this time, I worked on <a target="_blank" rel="noopener noreferrer" className="paragraph" href="https://pivotal.io/pivotal-gemfire">Pivotal GemFire</a> and its open-source counterpart, <a target="_blank" rel="noopener noreferrer" className="paragraph" href="http://geode.apache.org/">Apache Geode</a>. I had
                 the opportunity to pair-program with a number of Pivots to squash bugs and create features, and I learned the ropes of how a software company like
                 Pivotal is operated. I participated in a workshop organized and run by Elisabeth Hendrickson,
                 Pivotal's VP of Data R&D, which dove into agile development and how it can
                 improve the productivity of any workplace. I also worked with acclaimed author Michael Feathers, who visited the Beaverton office to teach and
                 assist the M&M team in refactoring and improving our code base.</p>

              <p className="margins justified-text">Currently, I'm looking for a post-graduation job at a software
                 company. I want to work for people I can learn from and with whom I can do
                 things that are fun, valuable, fulfilling, and challenging. Feel free to reach out to me about your particular business interests or if you have any
                 questions for me.</p>

              <p className="margins justified-text">Thanks for stopping by!<br/>
              <span className="fancy-font">Emily Yeh</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
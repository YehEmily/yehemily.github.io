import React, { Component } from 'react';
import './App.css';
import ProjectsAPI from './api'
import { Link } from 'react-router-dom'

import geode from './images/geode-logo.png';
import gemfire from './images/gemfire.png';
import poe from './images/marionette.jpg';
import calmmute from './images/Calmmute.png';
import calendar from './images/calendar.png';
import projects from './images/project-projects.png';
import lights from './images/lights.png';
import scanner from './images/scanner.png';
import robot from './images/robot.png';
import olin from './images/olin-logo.png';
import modsim from './images/modsim.jpg';
import softdes from './images/softdes.png';

class FullProjects extends Component {
  getProjectImage(tag) {
    var whichproject;
    var size6 = { height: '6em' };
    var size10 = { height: '10em' };
    var width10 = { width: '10em' };

    switch(tag) {
      case 1:
      whichproject = <div><img src={geode} style={size6} alt="project cover" /> &emsp; <img src={gemfire} style={size6} alt="project cover" /></div>;
      break;
      case 2:
      whichproject = <img src={calmmute} style={size10} alt="project cover" />;
      break;
      case 3:
      whichproject = <img src={calendar} style={size10} alt="project cover" />;
      break;
      case 4:
      whichproject = <img src={projects} style={size10} alt="project cover" />;
      break;
      case 5:
      whichproject = <img src={poe} style={size10} alt="project cover" />;
      break;
      case 6:
      whichproject = <div><img src={lights} style={size10} alt="project cover" /> &emsp; 
                          <img src={scanner} style={size10} alt="project cover" /> &emsp; 
                          <img src={robot} style={size10} alt="project cover" /></div>;
      break;
      case 7:
      whichproject = <img src={olin} style={width10} alt="project cover" />;
      break;
      case 8:
      whichproject = <img src={modsim} style={size10} alt="project cover" />;
      break;
      case 9:
      whichproject = <img src={softdes} style={size10} alt="project cover" />;
      break;
      default:
      whichproject = <p>Sorry, something went wrong in FullProjects.jsx.</p>
    }

    return whichproject;
  }

  getProjectList() {
    var projects = ProjectsAPI.all();
    var projectscomponent = [];
    var i;
    for (i = 1; i <= ProjectsAPI.howmany(); i++) {
      if (i === 1) {
        projectscomponent.push(<h1 key="summer1">LAST SUMMER</h1>);
        projectscomponent.push(<h3 key="summer1time">MAY 2017 TO AUGUST 2017</h3>)
      }
      if (i === 2) {
        projectscomponent.push(<hr key="hr1"/>);
        projectscomponent.push(<h1 key="sophomore">SOPHOMORE YEAR</h1>);
        projectscomponent.push(<h3 key="sophomoretime">SEPTEMBER 2016 TO MAY 2017</h3>);
      }
      if (i === 7) {
        projectscomponent.push(<hr key="hr2"/>);
        projectscomponent.push(<h1 key="freshman">FRESHMAN YEAR</h1>);
        projectscomponent.push(<h3 key="freshmantime">SEPTEMBER 2015 TO MAY 2016</h3>);
      }

      projectscomponent.push(<div key={projects[i-1].tag}>
        <Link to={`/my-past-work/${projects[i-1].tag}`}>{this.getProjectImage(projects[i-1].tag)}</Link>
        </div>);
    }
    return projectscomponent;
  }

  render() {
    return (
      <div>
        {this.getProjectList()}
      </div>
      );
  }
}

export default FullProjects

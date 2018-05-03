import React, { Component } from 'react';
import './App.css';
import ProjectsAPI from './api'
import { Link } from 'react-router-dom'

import geode from './images/geode-logo-thumb.png';
import gemfire from './images/gemfire-thumb.png';
import poe from './images/marionette-thumb.png';
import calmmute from './images/Calmmute-thumb.png';
import calendar from './images/calendar-thumb.png';
import projects from './images/project-projects-thumb.png';
import lights from './images/lights-thumb.png';
import scanner from './images/scanner-thumb.png';
import robot from './images/robot-thumb.png';
import olin from './images/olin-logo-thumb.png';
import modsim from './images/modsim-thumb.png';
import softdes from './images/softdes-thumb.png';
import ued from './images/ued-thumb.png';
import softsys1 from './images/wumpus-thumb.png';
import softsys2 from './images/chatroom-thumb.png';
import complexity from './images/complexity2-thumb.png';

class FullProjects extends Component {
  getProjectImage(tag) {
    var whichproject;
    var size10 = { width: '10em', maxWidth: '15%' };

    switch(tag) {
      case 12:
      whichproject = <span><img src={ued} style={size10} alt="project cover" /> &emsp; </span>;
      break;
      case 11:
      whichproject = <span><img src={complexity} style={size10} alt="project cover" /> &emsp; </span>;
      break;
      case 10:
      whichproject = <span><img src={softsys1} style={size10} alt="project cover" /> &emsp; </span>;
      break;
      case 9:
      whichproject = <img src={softsys2} style={size10} alt="project cover" />;
      break;
      case 8:
      whichproject = <div><img src={geode} style={size10} alt="project cover" /> &emsp; <img src={gemfire} style={size10} alt="project cover" /></div>;
      break;
      case 7:
      whichproject = <span><img src={calmmute} style={size10} alt="project cover" /> &emsp; </span>;
      break;
      case 6:
      whichproject = <span><img src={calendar} style={size10} alt="project cover" /> &emsp; </span>;
      break;
      case 5:
      whichproject = <span><img src={projects} style={size10} alt="project cover" /> &emsp; </span>;
      break;
      case 4:
      whichproject = <img src={poe} style={size10} alt="project cover" />;
      break;
      case 3:
      whichproject = <div><img src={lights} style={size10} alt="project cover" /> &emsp; 
                          <img src={scanner} style={size10} alt="project cover" /> &emsp; 
                          <img src={robot} style={size10} alt="project cover" /></div>;
      break;
      case 2:
      whichproject = <span><img src={olin} style={size10} alt="project cover" /> &emsp; </span>;
      break;
      case 1:
      whichproject = <span><img src={softdes} style={size10} alt="project cover" /> &emsp; </span>;
      break;
      case 0:
      whichproject = <img src={modsim} style={size10} alt="project cover" />
      break;
      default:
      whichproject = <p>Sorry, something went wrong in FullProjects.jsx.</p>
    }

    return whichproject;
  }

  getProjectList() {
    var highlight = { color: 'hotpink' };
    var projects = ProjectsAPI.all();
    var projectscomponent = [];
    var i;
    for (i = ProjectsAPI.howmany()-1; i >= 0; i--) {
      if (i === 12) {
        projectscomponent.push(<h1 key="junior">WHEN I WAS A <span style={highlight}>JUNIOR</span></h1>);
        projectscomponent.push(<h3 key="juniortime">SEPTEMBER 2017 TO MAY 2018</h3>);
      }
      if (i === 8) {
        projectscomponent.push(<hr key="hr0"/>);
        projectscomponent.push(<h1 key="summer1">LAST <span style={highlight}>SUMMER</span></h1>);
        projectscomponent.push(<h3 key="summer1time">MAY 2017 TO AUGUST 2017</h3>);
      }
      if (i === 7) {
        projectscomponent.push(<hr key="hr1"/>);
        projectscomponent.push(<h1 key="sophomore">WHEN I WAS A <span style={highlight}>SOPHOMORE</span></h1>);
        projectscomponent.push(<h3 key="sophomoretime">SEPTEMBER 2016 TO MAY 2017</h3>);
      }
      if (i === 2 ) {
        projectscomponent.push(<hr key="hr2"/>);
        projectscomponent.push(<h1 key="freshman">WHEN I WAS A <span style={highlight}>FRESHMAN</span></h1>);
        projectscomponent.push(<h3 key="freshmantime">SEPTEMBER 2015 TO MAY 2016</h3>);
      }

      projectscomponent.push(
        <Link to={`/my-past-work/${projects[i].tag}`} key={projects[i].tag}>{this.getProjectImage(projects[ProjectsAPI.howmany() - 1 - i].tag)}</Link>
        );
    }
    return projectscomponent;
  }

  render() {
    return (
      <div className="animated fadeIn just-for-full-projects">
        {this.getProjectList()}
      </div>
      );
  }
}

export default FullProjects;

import React from 'react'
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

const Project = (props) => {
  const project = ProjectsAPI.get(
    parseInt(props.match.params.tag, 10)
  )
  if (!project) {
    return <div>Sorry, but the project was not found.</div>
  }

  var size6 = { height: '6em' };
  var size10 = { height: '10em' };
  var width10 = { width: '10em' };

  var whichproject;
  switch(project.tag) {
    case 1:
    whichproject = <div><img src={geode} style={size6} /> &emsp; <img src={gemfire} style={size6} /></div>;
    break;
    case 2:
    whichproject = <img src={calmmute} style={size10} />;
    break;
    case 3:
    whichproject = <img src={calendar} style={size10} />;
    break;
    case 4:
    whichproject = <img src={projects} style={size10} />;
    break;
    case 5:
    whichproject = <img src={poe} style={size10} />;
    break;
    case 6:
    whichproject = <div><img src={lights} style={size10} /> &emsp; 
                        <img src={scanner} style={size10} /> &emsp; 
                        <img src={robot} style={size10} /></div>;
    break;
    case 7:
    whichproject = <img src={olin} style={width10} />;
    break;
    case 8:
    whichproject = <img src={modsim} style={size10} />;
    break;
    case 9:
    whichproject = <img src={softdes} style={size10} />;
    break;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      {whichproject}
      <p>{project.description}</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default Project

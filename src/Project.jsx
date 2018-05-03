import React from 'react'
import ProjectsAPI from './api'
import { Link } from 'react-router-dom'
import ued from './images/ued.png';
import softsys1 from './images/wumpus.png';
import softsys2 from './images/chatroom.png';
import complexity from './images/complexity2.png';
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
    (ProjectsAPI.howmany() - parseInt(props.match.params.tag, 10) - 1)
  )

  console.log("Project : " + project.tag);
  console.log("Should be : " + (ProjectsAPI.howmany() - parseInt(project.tag, 10) - 1));

  if (!project) {
    return <div>Sorry, but the project was not found.</div>
  }

  var size12 = { width: '12em', maxWidth: '50%' };
  var size10 = { width: '20em', maxWidth: '30%' };
  var size20 = { width: '50em', maxWidth: '100%' };

  var arrowStyle = {
    fontWeight: 'bold',
    fontSize: '2em'
  }

  var fontStyle = {
    fontWeight: 'normal',
    fontSize: '1.5em'
  }

  var whichproject;
  switch(project.tag) {
    case 12:
    whichproject = <img className="no-glow" src={ued} style={size20} alt="project cover" />;
    break;
    case 11:
    whichproject = <img className="no-glow" src={complexity} style={size20} alt="project cover" />;
    break;
    case 10:
    whichproject = <img className="no-glow" src={softsys1} style={size10} alt="project cover" />;
    break;
    case 9:
    whichproject = <img className="no-glow" src={softsys2} style={size10} alt="project cover" />;
    break;
    case 8:
    whichproject = <div><img className="no-glow" src={geode} style={size12} alt="project cover" /> &emsp; <img className="no-glow" src={gemfire} style={size12} alt="project cover" /></div>;
    break;
    case 7:
    whichproject = <img className="no-glow" src={calmmute} style={size10} alt="project cover" />;
    break;
    case 6:
    whichproject = <img className="no-glow" src={calendar} style={size10} alt="project cover" />;
    break;
    case 5:
    whichproject = <img className="no-glow" src={projects} style={size10} alt="project cover" />;
    break;
    case 4:
    whichproject = <img className="no-glow" src={poe} style={size10} alt="project cover" />;
    break;
    case 3:
    whichproject = <div><img className="no-glow" src={lights} style={size10} alt="project cover" /> &emsp; 
                        <img className="no-glow" src={scanner} style={size10} alt="project cover" /> &emsp; 
                        <img className="no-glow" src={robot} style={size10} alt="project cover" /></div>;
    break;
    case 2:
    whichproject = <img className="no-glow" src={olin} style={size20} alt="project cover" />;
    break;
    case 1:
    whichproject = <img className="no-glow" src={softdes} style={size20} alt="project cover" />;
    break;
    case 0:
    whichproject = <img className="no-glow" src={modsim} style={size20} alt="project cover" />;
    break;
    default:
    whichproject = <p>Sorry, this project could not be found.</p>
  }

  return (
    <div className="animated fadeIn margins justified-text just-for-full-projects">
      <center><h1>{project.name}</h1></center>
      <center>{whichproject}</center>
      {project.description}
      <center><Link to='/my-past-work'><span style={arrowStyle}>&#171;</span> <span style={fontStyle}>Go back</span></Link></center>
    </div>
  )
}

export default Project

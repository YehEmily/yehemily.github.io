import React, { Component } from 'react';
import './App.css';
import ProjectsAPI from './api'
import { Link } from 'react-router-dom'

class FullProjects extends Component {
  render() {
    return (
      <div>
          {
            ProjectsAPI.all().map(p => (
              <p key={p.tag}>
                <Link to={`/projects/${p.tag}`}>{p.name}</Link>
              </p>
            ))
          }
      </div>
      );
  }
}

export default FullProjects

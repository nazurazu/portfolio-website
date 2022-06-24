import { useState, useEffect } from 'react';
import './styles/Project.css';

function Project(props) {
  return (
    <div className="projectBody">
        <div>
            <h1 className="projectTitle" >{props.projectTitle}</h1>
            <p className="projectDescription" >{props.projectDescription}</p>
            <a className="projectLink" href="https://www.hassanalawie.com/" > Open Project Details </a>
        </div>
    </div>
  );
}

export default Project;
import { useState, useEffect } from 'react';
import Project from "./Project";
import projects from "../projects.json";
import "./styles/Project.css";

function Projects() {
    const [number, setNumber] = useState(1);
    const [title, setTitle] = useState("Loading...");
    const [description, setDescription] = useState("Loading...");
    const [image, setImage] = useState("");
    const [link, setLink]= useState("Loading...");
    const numberOfProjects = projects.projects.length;
    useEffect(
      ()=>{
        console.log(projects);
        setTitle(projects.projects[number-1].title)
        setDescription(projects.projects[number-1].description)
        setImage(projects.projects[number-1].image)
        setLink(projects.projects[number-1].link)

      }
    )
  return (
    <div className="bodyAndButton">
     {
      number!==1?(
         <div className="moveBackDiv">
        <a className="moveBackButton"
        // style={{display: numberOfProjects == 1 ?"":"none" }}
        
      onClick={()=> {

        setNumber(number - 1)
        setTitle(projects.projects[number].title)
        setDescription(projects.projects[number].description)
        setImage(projects.projects[number].image)
        setLink(projects.projects[number].link)

        }} >
          Previous project
        </a>
      </div>
      ):(
        <div className="moveBackButton"/>
      )
     }
     

      <div className="projectsBody">
        <Project projectTitle = {title} projectNumber = {number} 
        projectDescription = {description}
        projectImage = {image}
        projectLink = {link}
        />
      </div>
      <div className="moveOnButtonDiv">
        <a className="moveOnButton"
        style={{display: numberOfProjects > number?"":"none" }}
      onClick={()=> {

        setNumber(number + 1)
        setTitle(projects.projects[number].title)
        setDescription(projects.projects[number].description)
        setImage(projects.projects[number].image)
        setLink(projects.projects[number].link)
        }} >
          Move on to project {number+1}
        </a>
      </div>
      
    </div>
  );
}

export default Projects;
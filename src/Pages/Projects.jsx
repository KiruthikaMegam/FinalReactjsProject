import React, { useContext} from "react";
import { Link } from "react-router-dom";
import './Projects.css'
import Delete from '../assets/delete.png'
import Add from '../assets/add.png'

import { ProjectContext } from "../Context/ProjectContext";

export default function Projects() {
  const { projects, deleteProject} = useContext(ProjectContext);

  const handleDelete = (id) => {
  deleteProject(id);
  alert("Project deleted successfully!");
  };

  return (
    <div className="projectsPage">
     
      <div className="header">
        <h1>My Projects</h1>
        <Link to="/Projects/Add" className="addProjectButton">
        <img src={Add} alt="" />
        <span>Add Project</span>
        </Link>
      </div>

      <div className="projectsContainer">
        {projects.map((project) => (
          <div  className="projectCard" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologyList">
              {project.technologies.map(
                (technology, index) => (
                  <span key={index}>
                    {technology}
                  </span>
                )
              )}
            </div>

            <div className="projectActions">
              <Link to={`/Projects/${project.id}`}>
                View Details
              </Link>

              <Link to={`/Projects/${project.id}/Update`}>
                Update
              </Link>

              <button onClick={() => handleDelete(project.id) }>
              <img src={Delete} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
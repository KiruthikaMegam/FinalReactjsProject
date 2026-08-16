import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Projects.css'
import Delete from '../assets/delete.png'
import Add from '../assets/add.png'

import { ProjectContext } from "../Context/ProjectContext";

export default function Projects() {
  const { projects, deleteProject} = useContext(ProjectContext);

  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };
  
  const confirmDelete = () => {
    deleteProject(deleteId);
    setShowConfirm(false);
    setDeleteId(null);
  };

  return (
    <div className="projectsPage">

      {showConfirm && (
        <div className="confirmBox">
          <h3>Delete Project?</h3>
          <p>Are you sure you want to delete this project?</p>
          <button onClick={confirmDelete}>
            Yes, Delete
          </button>
          <button onClick={() => {
              setShowConfirm(false);
              setDeleteId(null);
            }}>
            Cancel
          </button>
        </div>
      )}

      <div className="header">
        <h1>My Projects</h1>
        <Link to="/Projects/Add" className="addProjectButton">
        <img src={Add} alt="" />Add Project
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
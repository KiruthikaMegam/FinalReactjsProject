import React, { useContext} from "react";
import "./ProjectDetails.css";
import GitHUb from "../assets/github.png";
import Delete from "../assets/delete.png";
import {Link,useNavigate,useParams} from "react-router-dom";
import { ProjectContext } from "../Context/ProjectContext";

export default function ProjectDetails() {

  const { projectDetails } = useParams();
  const navigate = useNavigate();

  const {projects,deleteProject} = useContext(ProjectContext);

  const project = projects.find((item) =>
      item.id === Number(projectDetails)
  );

  if (!project) {
    return (
      <div className="projectNotFound">
        <div className="projectNotFoundCard">
          <div className="projectNotFoundIcon">
            !
          </div>
          <h2>Project Not Found</h2>
          <p>
            Sorry, the project you are looking for
            doesn't exist or may have been removed.
          </p>
          <Link to="/Projects">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
  deleteProject(project.id);
  alert("Project Deleted Successfully");
  navigate("/Projects");
};

  return (

    <div className="projectDetailsPage">

      <div className="projectHeader">
        <h2>{project.title}</h2>
        <div className="projectActions">
          <Link to={`/Projects/${project.id}/Update`}>
            Update
          </Link>

          <button onClick={handleDelete}>
            <img
              src={Delete}
              alt="Delete"
            />
          </button>
        </div>
      </div>

      <p>{project.description}</p>

      <section>
        <h2>About This Project</h2>
        <p>{project.details}</p>
      </section>

      <section>
        <h2>Technologies Used</h2>
        <ul>
          {project.technologies.map(
            (technology, index) => (
              <li key={index}>
                {technology}
              </li>
            )
          )}
        </ul>
      </section>

      <section>
        <h2> Key Features</h2>
        <ul>
          {project.features.map(
            (feature, index) => (
              <li key={index}>
                {feature}
              </li>
            )
          )}
        </ul>
      </section>

      <section>
        <h2> What I Learned</h2>
        <p>{project.learning}</p>
      </section>

      <div className="projectLinks">
        <div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GitHUb}
              alt="GitHub"
            />
            GitHub
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>

        <Link to="/Projects">
          Back
        </Link>
      </div>
    </div>

  );
}
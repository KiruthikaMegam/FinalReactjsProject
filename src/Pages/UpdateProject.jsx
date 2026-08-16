import React, { useContext } from "react";
import {Link,useNavigate,useParams} from "react-router-dom";
import Projectform from "../Components/Projectform";
import { ProjectContext } from "../Context/ProjectContext";
import './UpdateProject.css'

export default function UpdateProject() {

  const { projectDetails } = useParams();
  const { projects, updateProject} = useContext(ProjectContext);
  const navigate = useNavigate();

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

  const handleUpdateProject = (projectData) => {
    updateProject(project.id,projectData);
    navigate(`/Projects/${project.id}`);
  };


  return (

    <Projectform
      title="Update Project"
      buttonText="Update Project"
      initialData={project}
      onSubmit={handleUpdateProject}
      cancelLink={`/Projects/${project.id}`}
    />

  );

}
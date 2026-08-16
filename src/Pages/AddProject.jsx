import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Projectform from "../Components/Projectform";
import { ProjectContext } from "../Context/ProjectContext";

export default function AddProject() {

  const { addProject } = useContext(ProjectContext);
  const navigate = useNavigate();

  const handleAddProject = (projectData) => {
    addProject(projectData);
    navigate("/Projects");
    alert("Your project added successfully");
  };

  return (

    <Projectform
      title="Add New Project"
      buttonText="Add Project"
      initialData={null}
      onSubmit={handleAddProject}
      cancelLink="/Projects"
    />

  );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projectform.css";

export default function Projectform ({initialData,onSubmit,buttonText,title,cancelLink}) {

  const [projectTitle, setProjectTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [details, setDetails] = useState(initialData?.details || "");
  const [technologies, setTechnologies] = useState(initialData?.technologies?.join(", ") || "");
  const [features, setFeatures] = useState(initialData?.features?.join(", ") || "");
  const [learning, setLearning] = useState(initialData?.learning || "");
  const [github, setGithub] = useState(initialData?.github || "");
  const [liveDemo, setLiveDemo] = useState(initialData?.liveDemo || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectTitle || !description || !details || !technologies || !features || !learning || !github ||!liveDemo) {
      setError("Please fill all fields");
      return;
    }
    setError("");

    const projectData = {
      title: projectTitle,
      description,
      details,
      technologies: technologies.split(",").map((item) => item.trim()),
      features: features.split(",").map((item) => item.trim()),
      learning,
      github,
      liveDemo,
    };
    onSubmit(projectData);
  };


  return (

    <div className="projectFormPage">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        {error && (
          <p className="formError">
            {error}
          </p>
        )}

        <label>Project Title</label>
        <input
          type="text"
          value={projectTitle}
          onChange={(e) => {
            setProjectTitle(e.target.value);
            setError("");
          }}
          placeholder="Project Title"
        />

        <label>Short Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setError("");
          }}
          placeholder="Short Description"
        />

        <label>Project Details</label>
        <textarea
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
            setError("");
          }}
          placeholder="Project Details"
        />

        <label>Technologies</label>
        <input
          type="text"
          value={technologies}
          onChange={(e) => {
            setTechnologies(e.target.value);
            setError("");
          }}
          placeholder="React.js, CSS, JavaScript"
        />

        <label>Features</label>
        <input
          type="text"
          value={features}
          onChange={(e) => {
            setFeatures(e.target.value);
            setError("");
          }}
          placeholder="Search, Filter, Login"
        />

        <label>What I Learned</label>
        <textarea
          value={learning}
          onChange={(e) => {
            setLearning(e.target.value);
            setError("");
          }}
          placeholder="What did you learn?"
        />

        <label>GitHub Link</label>
        <input
          type="text"
          value={github}
          onChange={(e) => {
            setGithub(e.target.value);
            setError("");
          }}
          placeholder="GitHub URL"
        />

        <label>Live Demo Link</label>
        <input
          type="text"
          value={liveDemo}
          onChange={(e) => {
            setLiveDemo(e.target.value);
            setError("");
          }}
          placeholder="Live Demo URL"
        />

        <div className="formButtons">
          <button type="submit">{buttonText}</button>
          <Link to={cancelLink}>Cancel</Link>
        </div>
      </form>
    </div>
  );
}

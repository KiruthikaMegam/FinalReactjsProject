import React, { createContext, useState } from "react";

export const ProjectContext = createContext();

const initialProjects = [
  {
  id: 1,
  title: "Personal Portfolio Website",
  description:
    "A responsive portfolio website to showcase my skills, projects, and professional information.",
  details:
    "A React-based personal portfolio website with separate sections for home, about, skills, projects, project details, and contact.",
  technologies: [
    "React.js",
    "React Router",
    "JavaScript",
    "HTML",
    "CSS",
    "Context API"
  ],
  features: [
    "Home page",
    "About page",
    "Skills management",
    "Projects management",
    "Project details",
    "GitHub and live demo links",
    "Contact page",
    "Responsive design"
  ],
  learning:
    "Learned React Router, Context API, state management, CRUD operations, dynamic routing, and responsive web design.",
  github: "https://github.com/KiruthikaMegam/Portfolio",
  liveDemo: "https://kiruthikamegam.github.io/Portfolio/"
  },
  {
    id: 2,
    title: "Student Portal",
    description: "A portal to manage and view student information.",
    details:
      "A React-based student management application for managing student records.",
    technologies: ["React.js", "React Router", "Context API", "CSS"],
    features: ["View students", "Add students", "Search students"],
    learning: "Learned Context API and React Router.",
    github: "https://github.com/facebook/react",
    liveDemo: "https://react.dev",
  },

  {
    id: 3,
    title: "Tourist Website",
    description: "A website showcasing tourist places and travel information.",
    details:
      "A responsive tourism website that displays popular destinations and attractions.",
    technologies: ["React.js", "React Router", "JavaScript", "CSS"],
    features: ["View destinations", "Destination details", "Responsive design"],
    learning: "Learned responsive design and React Router.",
    github: "https://github.com/remix-run/react-router",
    liveDemo: "https://reactrouter.com/",
  },

  {
    id: 4,
    title: "Product Explorer",
    description: "An app to search, filter, and explore products.",
    details:
      "A product browsing application that fetches product information from a REST API.",
    technologies: ["React.js", "JavaScript", "REST API", "React Router"],
    features: ["Search", "Filter", "Product details"],
    learning: "Learned API integration and filtering.",
    github: "https://github.com/typicode/json-server",
    liveDemo: "https://jsonplaceholder.typicode.com/",
  },

  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal website to showcase skills and projects.",
    details:
      "A personal portfolio website showcasing skills, projects, experience, and contact information.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    features: ["Home", "About", "Skills", "Projects", "Contact"],
    learning: "Learned how to create a complete React portfolio.",
    github: "https://github.com/facebook/create-react-app",
    liveDemo: "https://create-react-app.dev/",
  },
];

export const ProjectProvider = ({ children }) => {
  
  const [projects, setProjects] = useState(initialProjects);

  const addProject = (newProject) => {

  const newId = projects.length > 0 ? Math.max(
          ...projects.map(
            (project) => project.id
          )
        ) + 1
      : 1;

  const project = {
    ...newProject,
    id: newId,
  };

  setProjects((prevProjects) => [
    ...prevProjects,
    project,
  ]);
 };

  const updateProject = (id, updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id
          ? { ...project, ...updatedProject }
          : project
      )
    );
  };

  const deleteProject = (id) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
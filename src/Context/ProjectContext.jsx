import React, { createContext, useState } from "react";

export const ProjectContext = createContext();

const initialProjects = [
  {
    id: 1,
    title: "Student Portal",
    description: "A portal to manage and view student information.",
    details:
      "A React-based student management application for managing student records.",
    technologies: ["React.js", "React Router", "Context API", "CSS"],
    features: ["View students", "Add students", "Search students"],
    learning: "Learned Context API and React Router.",
    github: "https://github.com/yourusername/student-portal",
    liveDemo: "https://student-portal-demo.vercel.app",
  },

  {
    id: 2,
    title: "Tourist Website",
    description: "A website showcasing tourist places and travel information.",
    details:
      "A responsive tourism website that displays popular destinations and attractions.",
    technologies: ["React.js", "React Router", "JavaScript", "CSS"],
    features: ["View destinations", "Destination details", "Responsive design"],
    learning: "Learned responsive design and React Router.",
    github: "https://github.com/yourusername/tourist-website",
    liveDemo: "https://tourist-website-demo.vercel.app",
  },

  {
    id: 3,
    title: "Product Explorer",
    description: "An app to search, filter, and explore products.",
    details:
      "A product browsing application that fetches product information from a REST API.",
    technologies: ["React.js", "JavaScript", "REST API", "React Router"],
    features: ["Search", "Filter", "Product details"],
    learning: "Learned API integration and filtering.",
    github: "https://github.com/yourusername/product-explorer",
    liveDemo: "https://product-explorer-demo.vercel.app",
  },

  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal website to showcase skills and projects.",
    details:
      "A personal portfolio website showcasing skills, projects, experience, and contact information.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    features: ["Home", "About", "Skills", "Projects", "Contact"],
    learning: "Learned how to create a complete React portfolio.",
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://portfolio-demo.vercel.app",
  },

  {
    id: 5,
    title: "Mobile Product Details",
    description: "An app displaying details of different mobile products.",
    details:
      "A dynamic application that displays mobile product details using URL parameters.",
    technologies: [
      "React.js",
      "React Router",
      "useParams",
      "useSearchParams",
      "REST API",
    ],
    features: ["Mobile brands", "Mobile models", "Search", "Product details"],
    learning: "Learned useParams and useSearchParams.",
    github: "https://github.com/yourusername/mobile-product-app",
    liveDemo: "https://mobile-product-demo.vercel.app",
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
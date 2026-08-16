import React, {createContext,useState} from "react";

export const SkillsContext = createContext();

export default function SkillsProvider ({children}) {

  const [skills, setSkills] = useState([

    {
      id: 1,
      name: "React.js",
      category: "Frontend",
      level: "Advanced",
      description:
        "I use React.js to build reusable and interactive user interfaces."
    },

    {
      id: 2,
      name: "JavaScript",
      category: "Programming",
      level: "Advanced",
      description:
        "I use JavaScript for application logic, DOM manipulation and API integration."
    },

    {
      id: 3,
      name: "HTML",
      category: "Frontend",
      level: "Advanced",
      description:
        "I use HTML to create the structure of web applications."
    },

    {
      id: 4,
      name: "CSS",
      category: "Frontend",
      level: "Advanced",
      description:
        "I use CSS to create responsive and attractive user interfaces."
    },

    {
      id: 5,
      name: "React Router",
      category: "React",
      level: "Intermediate",
      description:
        "I use React Router for navigation and dynamic routing."
    }

  ]);


  const addSkill = (newSkill) => {
    const skill = {
      id:skills.length > 0
          ? Math.max(
              ...skills.map(
                (item) => item.id
              )
            ) + 1
          : 1,
      ...newSkill
    };

    setSkills((prevSkills) => [
      ...prevSkills,
      skill
    ]);

  };

  const updateSkill = (id,updatedSkill) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id
          ? {
              ...skill,
              ...updatedSkill
            }
          : skill
      )
    );
  };

  const deleteSkill = (id) => {
    setSkills((prevSkills) =>
      prevSkills.filter(
        (skill) =>
          skill.id !== id
      )
    );
  };

  return (

    <SkillsContext.Provider
      value={{
        skills,
        addSkill,
        updateSkill,
        deleteSkill
      }}>
      {children}
    </SkillsContext.Provider>
  );
}
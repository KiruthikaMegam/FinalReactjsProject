import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { SkillsContext } from "../Context/SkillsContext";
import "./Skills.css";
import Add from '../assets/add.png'
import Delete from '../assets/delete.png'


export default function Skills() {

  const {skills,deleteSkill} = useContext(SkillsContext);

  const handleDelete = (id) => {
  deleteSkill(id);
  alert("Skill Deleted Successfully");
  };

  return (
    <div className="skillsPage">

      <div className="skillsHeader">
        <h1>My Skills</h1>
        <Link  to="/Skills/Add" className="addSkillButton">
          <img
            src={Add}
            alt=""
            className="addSkillIcon"
          />
           <span>Add Skill</span>
        </Link>
      </div>

      <div className="skillsContainer">
        {skills.map((skill) => (
          <div className="skillCard" key={skill.id}>
            <div className="skillCardHeader">
              <h2>{skill.name}</h2>
              <span>{skill.level}</span>
            </div>

            <p className="skillCategory">
              {skill.category}
            </p>

            <p className="skillDescription">
              {skill.description}
            </p>

            <div className="skillActions">
              <Link to={`/Skills/${skill.id}/Update`}>
                Update
              </Link>

              <button onClick={() => handleDelete(skill.id)}>
                <img src={Delete} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
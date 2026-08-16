import React, {useContext,useState} from "react";
import { Link } from "react-router-dom";
import { SkillsContext } from "../Context/SkillsContext";
import "./Skills.css";
import Add from '../assets/add.png'
import Delete from '../assets/delete.png'


export default function Skills() {

  const {skills,deleteSkill} = useContext(SkillsContext);
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = (id) => {
  setDeleteId(id);
  setShowConfirm(true);
  };

  const confirmDelete = () => {
  deleteSkill(deleteId);
  setShowConfirm(false);
  setDeleteId(null);
  alert("Skill deleted successfully!");
  };

  return (
    <div className="skillsPage">

      {showConfirm && (
        <div className="confirmBox">
          <h3>Delete Skill?</h3>
               <p>Are you sure you want to delete this skill?</p>
               <button onClick={confirmDelete}>
                 Yes, Delete
               </button>
      
               <button
                 onClick={() => {
                   setShowConfirm(false);
                   setDeleteId(null);
                 }}>
                 Cancel
                </button>
        </div>
      )}

      <div className="skillsHeader">
        <h1>My Skills</h1>
        <Link  to="/Skills/Add" className="addSkillButton">
          <img
            src={Add}
            alt=""
            className="addSkillIcon"
          />
          Add Skill
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
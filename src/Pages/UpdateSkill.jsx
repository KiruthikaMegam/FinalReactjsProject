import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SkillsContext } from "../Context/SkillsContext";
import SkillsForm from "../Components/SkillsForm";
import './UpdateSkill.css'

export default function UpdateSkill() {

  const { skillDetails } = useParams();

  const { skills, updateSkill } =
    useContext(SkillsContext);

  const navigate = useNavigate();

  const skill = skills.find(
    (item) => item.id === Number(skillDetails)
  );

  if (!skill) {
    return (
      <div className="skillNotFound">
        <div className="skillNotFoundCard">
          <div className="skillNotFoundIcon">
            !
          </div>
          <h2>Skill Not Found</h2>
          <p>
            Sorry, the skill you are looking for
            doesn't exist or may have been removed.
          </p>
          <Link to="/Skills">
            Back to Skills
          </Link>
        </div>
      </div>
    );
  }

  const handleUpdateSkill = (skillData) => {
    updateSkill(skill.id,skillData);
    alert("Skill updated successfully!");
    navigate("/Skills");
  };

  return (
    <SkillsForm
      title="Update Skill"
      buttonText="Update Skill"
      initialData={skill}
      onSubmit={handleUpdateSkill}
      cancelLink="/Skills"
    />
  );
}
import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { SkillsContext } from "../Context/SkillsContext";
import SkillsForm from "../Components/SkillsForm";

export default function AddSkill() {

  const { addSkill } = useContext(SkillsContext);
  const navigate = useNavigate();

  const handleAddSkill = (skillData) => {
    addSkill(skillData);
    alert("Skill added successfully!");
    navigate("/Skills");
  };

  return (
    <SkillsForm
      title="Add New Skill"
      buttonText="Add Skill"
      initialData={null}
      onSubmit={handleAddSkill}
      cancelLink="/Skills"
    />
  );
}
import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import "./SkillsForm.css"; 
 
export default function SkillsForm ({initialData,onSubmit,title,buttonText,cancelLink}) { 
 
  const [name, setName] = useState(initialData?.name || ""); 
  const [category, setCategory] = useState(initialData?.category || ""); 
  const [level, setLevel] =useState(initialData?.level || ""); 
  const [description, setDescription] =useState(initialData?.description || ""); 

  const [error, setError] = useState(""); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (!name || !category || !level || !description) { 
      setError("Please fill all fields"); 
      return; 
    } 

    setError("");
 
    const skillData = { 
      name, 
      category, 
      level, 
      description 
    }; 
    onSubmit(skillData); 
  }; 
 
  return ( 
 
    <div className="skillsFormPage"> 
      <h1>{title}</h1> 
      <form onSubmit={handleSubmit}> 

        {error && (
          <p className="formError">
            {error}
          </p>
        )}
 
        <label>Skill Name</label> 
        <input 
          type="text" 
          value={name} 
          onChange={(e) => { 
            setName(e.target.value);
            setError("");
          }} 
          placeholder="React.js" 
        /> 
 
        <label>Category</label> 
        <input 
          type="text" 
          value={category} 
          onChange={(e) => { 
            setCategory( 
              e.target.value 
            );
            setError("");
          }} 
          placeholder="Frontend" 
        /> 
 
        <label>Skill Level</label> 
        <input 
          type="text" 
          value={level} 
          onChange={(e) => { 
            setLevel( 
              e.target.value 
            );
            setError("");
          }} 
          placeholder="Beginner,Intermediate,Advanced" 
        /> 
 
        <label>What I Know</label> 
        <textarea 
          value={description} 
          onChange={(e) => { 
            setDescription( 
              e.target.value 
            );
            setError("");
          }} 
          placeholder="Explain what you know about this skill" 
        /> 
 
        <div className="skillsFormButtons"> 
          <button type="submit">{buttonText}</button> 
          <Link to={cancelLink}>Cancel</Link> 
        </div> 
      </form> 
    </div> 
  ); 
}
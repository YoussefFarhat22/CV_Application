import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceForm from "./ExperienceForm";

const Experience = ({ info, setInfo }) => {

  const [isEditing, setIsEditing] = useState(false);
  
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo(prevInfo =>
      prevInfo.map((item, index) =>
        index === currentExperienceIndex ? { ...item, [name]: value } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentExperience = info[currentExperienceIndex];
    if (!currentExperience.company || !currentExperience.position || !currentExperience.responsibilities || !currentExperience.from || !currentExperience.until) {
      return;
    }
    if (!isEditing) {
      setInfo([...info, { company: "", position: "",responsibilities:"" ,
        from: "", until: "" }]);
    }
    setIsEditing(false);
    setCurrentExperienceIndex(null);
  };

  const handleClick = (index) => {
    setIsEditing(true);
    setCurrentExperienceIndex(index);
  };

  const handleAddExperience = () => {
    setInfo([...info, { company: "", position: "",responsibilities:"" ,
      from: "", until: "" }]);
    setIsEditing(true);
    setCurrentExperienceIndex(info.length); 
  };

  return (
    <div className="flex flex-col-reverse">
      {isEditing && currentExperienceIndex !== null ? (
        <ExperienceForm
          info={info[currentExperienceIndex]}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <button onClick={handleAddExperience} className="bg-blue-500 w-full text-white py-2 px-4 cursor-pointer font-medium">
          Add Experience
        </button>
      )}
      <ExperienceCard info={info} handleClick={handleClick} />
    </div>
  );
};

export default Experience;

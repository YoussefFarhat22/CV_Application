import { useState } from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";

const Education = ({ info, setInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const [currentEducationIndex, setCurrentEducationIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo(prevInfo =>
      prevInfo.map((item, index) =>
        index === currentEducationIndex ? { ...item, [name]: value } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentEducation = info[currentEducationIndex];
    if (!currentEducation.school || !currentEducation.major || !currentEducation.from || !currentEducation.until) {
      return;
    }
    if (!isEditing) {
      setInfo([...info, { school: "", major: "", from: "", until: "" }]);
    }
    setIsEditing(false);
    setCurrentEducationIndex(null);
  };

  const handleClick = (index) => {
    setIsEditing(true);
    setCurrentEducationIndex(index);
  };

  const handleAddEducation = () => {
    setInfo([...info, { school: "", major: "", from: "", until: "" }]);
    setIsEditing(true);
    setCurrentEducationIndex(info.length); 
  };

  return (
    <div className="flex flex-col-reverse">
      {isEditing && currentEducationIndex !== null ? (
        <EducationForm
          info={info[currentEducationIndex]}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <button onClick={handleAddEducation} className="bg-blue-500 w-full text-white py-2 px-4 cursor-pointer font-medium">
          Add Education
        </button>
      )}
      <EducationCard info={info} handleClick={handleClick} />
    </div>
  );
};

export default Education;

const EducationCard = ({ info, handleClick }) => {
  return (
    <>
      {info.filter(education => education.school || education.major).map((education, index) => (
        <div key={index} className="flex justify-between p-2 bg-white border border-1 border-gray-200 w-[500px]">
          <div>
            <p>School: {education.school}</p>
            <p>Major: {education.major}</p>
           
          </div>
          <button className="text-green-600 font-bold" onClick={() => handleClick(index)}>Edit</button>
        </div>
      ))}
    </>
  );
};



export default EducationCard

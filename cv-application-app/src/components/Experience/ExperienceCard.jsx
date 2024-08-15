const ExperienceCard = ({ info, handleClick }) => {


  return (
    <>
    {info.filter(experience => experience.company || experience.position).map((experience, index) => (
      <div key={index} className="flex justify-between p-2 bg-white border border-1 border-gray-200 w-[500px]">
        <div>
          <p>School: {experience.company}</p>
          <p>Major: {experience.position}</p>
         
        </div>
        <button className="text-green-600 font-bold" onClick={() => handleClick(index)}>Edit</button>
      </div>
    ))}
    </>
  )
}

export default ExperienceCard


const ExperienceForm = ({info,handleChange,handleSubmit}) => {
  return (
    
    <form action="#" onSubmit={handleSubmit} className="flex flex-col gap-y-4 bg-white p-6  border border-1 border-gray-200 w-[500px]">
        <h1 className="text-xl font-bold">Experience</h1>
        <div className="flex flex-col">
          <label htmlFor="company" className="font-medium">Company name</label>
          <input type="text" name="company" placeholder="Enter company name" value={info.company} onChange={handleChange}
          className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="position" className="font-medium">Position title</label>
          <input type="text" name="position" placeholder="Enter Position title" value={info.position} onChange={handleChange} className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col">
        <div className="flex flex-col ">
          <label htmlFor="responsibilities" className="font-medium">Responsibilities</label>
          <textarea name="responsibilities" id="responsibilities" placeholder="main responsibilities of your jobs..." value={info.responsibilities} onChange={handleChange} className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"></textarea>
        </div>
        <div>
        <div className="flex flex-col ">
          <label htmlFor="from" className="font-medium">From</label>
          <input type="tel" name="from" placeholder="End Year" value={info.from} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="until" className="font-medium">Until</label>
          <input type="tel" name="until" placeholder="End Year" value={info.until} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        </div>
        </div>
        <div>
          <input type="submit" value="Save" className="bg-blue-500 text-white py-2 px-4 cursor-pointer font-medium" />
        </div>
    </form>
  )
}

export default ExperienceForm
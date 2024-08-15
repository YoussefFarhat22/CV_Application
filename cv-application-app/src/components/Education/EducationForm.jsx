const EducationForm = ({info,handleChange,handleSubmit}) => {
  return (
  
    <form action="#" onSubmit={handleSubmit} className="flex flex-col gap-y-4 bg-white p-6  border border-1 border-gray-200 w-[500px]">
        <h1 className="text-xl font-bold">Education</h1>
        <div className="flex flex-col ">
          <label htmlFor="school" className="font-medium">University/School name</label>
          <input type="text" name="school" placeholder="Enter University name" value={info.school} onChange={handleChange}
          className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="major" className="font-medium">Title of study</label>
          <input type="text" name="major" placeholder="Enter Title of study" value={info.major} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex justify-between">
        <div className="flex flex-col ">
          <label htmlFor="from" className="font-medium">From</label>
          <input type="tel" name="from" placeholder="Start Year" value={info.from} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="until" className="font-medium">Until</label>
          <input type="tel" name="until" placeholder="End Year" value={info.until} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        </div>
        <div>
          <input type="submit" value="Save" className="bg-blue-500 text-white py-2 px-4 cursor-pointer font-medium" />
        </div>
    </form>
  
  )
}

export default EducationForm



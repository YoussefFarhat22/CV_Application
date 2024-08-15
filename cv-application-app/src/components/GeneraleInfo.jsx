

const GeneraleInfo = ({info,setInfo}) => {

  const handleChange = (e) => {
    const {name,value} = e.target;
    setInfo({...info , [name]:value})
  }


  return (
    <div>
      <form action="#" className="flex flex-col gap-y-4 bg-white p-6  border border-1 border-gray-200 w-[500px]">
        <h1 className="text-xl font-bold">General information</h1>
        <div className="flex flex-col ">
          <label htmlFor="fname" className="font-medium">First Name</label>
          <input type="text" name="fname" placeholder="First name" value={info.fname} onChange={handleChange}
          className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="lname" className="font-medium">Last Name</label>
          <input type="text" name="lname" placeholder="Last Name" value={info.lname} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="jobTitle" className="font-medium">Job Title</label>
          <input type="text" name="jobTitle" placeholder="Job Title" value={info.jobTitle} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className="font-medium">Email</label>
          <input type="email" name="email" placeholder="Email Address" value={info.email} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="phone" className="font-medium">Phone Number</label>
          <input type="tel" name="phone" placeholder="Phone Number" value={info.phone} onChange={handleChange}  className="px-4  py-2 border border-1 border-gray-200 bg-gray-100"/>
        </div>
      </form>
    </div>
  )
}

export default GeneraleInfo
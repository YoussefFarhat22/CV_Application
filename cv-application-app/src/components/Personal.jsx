import '../styles/form.css'

const Personal = ({firstName  = 'John Doe',lastName,jobTitle,email,phoneNumber,handleChange }) => {
  return (
  
  <>
  <form className='form'>
    <p className='section-title'>Personal Information</p>
    <div className="cell">
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name='firstName' value={firstName} onChange={handleChange}
      placeholder='First name'/>
    
    
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name='lastName' value={lastName} onChange={handleChange}
       placeholder='Last name'/>
    </div>
    <div className="cell">
      <label htmlFor="jobTitle">Job Title</label>
      <input type="text" id="jobTitle" name='jobTitle' value={jobTitle} onChange={handleChange}
      placeholder='Job Title'/>
    </div>
    <div className="cell">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name='email' value={email} onChange={handleChange}
      placeholder='Email'/>
    </div>
    <div className="cell">
      <label htmlFor="phone">Phone Number</label>
      <input type="email" id="phone"  name='phone' value={phoneNumber} onChange={handleChange}
      placeholder='Phone Number'/>
    </div>
    
  </form>
  </>
  )
}

export default Personal
import '../styles/form.css'

const Personal = ({firstName,lastName,jobTitle,email,phoneNumber}) => {
  return (
  
  <>
  <form className='form'>
    <h1>Personal Information</h1>
    <div className="cell">
      <label htmlFor="first-name">{firstName}</label>
      <input type="text" id="first-name" />
    </div>
    <div className="cell">
      <label htmlFor="last-name">{lastName}</label>
      <input type="text" id="last-name" />
    </div>
    <div className="cell">
      <label htmlFor="job-title">{jobTitle}</label>
      <input type="email" id="job-title" />
    </div>
    <div className="cell">
      <label htmlFor="email">{email}</label>
      <input type="email" id="email" />
    </div>
    <div className="cell">
      <label htmlFor="phone">{phoneNumber}</label>
      <input type="email" id="phone" />
    </div>
    {/* <div>
      <input type="submit" value="Submit" />
    </div> */}
  </form>
  </>
  )
}

export default Personal
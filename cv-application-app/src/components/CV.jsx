


const Cv = ({firstName,lastName,jobTitle,email,phoneNumber,iconEmail,iconPhone}) => {
  return (
    <div className="cv">
      <div className="personal-info">
        <div className="name-job">
        <p className="fullName">{firstName} {lastName}</p>
        

        <p className="job">{jobTitle}</p>

        </div>

        <div className="contact-info">
        <div className="email-info">
          {iconEmail}
          {email}
        </div>
        <div className="phone-info">
        {iconPhone}
            {phoneNumber}
        </div>
        </div>
      </div>

      <div className="education-info">

      </div>
      <div className="experience-info">

      </div>
    </div>
  )
}

export default Cv

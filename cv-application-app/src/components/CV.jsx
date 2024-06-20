import { Mail, Phone } from "lucide-react"


const Cv = ({firstName,lastName,jobTitle,email,phoneNumber}) => {
  return (
    <div>
      <div className="personal-info">
        <p>{firstName}</p>
        <p>{lastName}</p>

        <p>{jobTitle}</p>
        <div>
          <Mail />
          {email}
        </div>
        <div>
            <Phone />
            {phoneNumber}
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

import Education from "./Education";
import Experince from "./Experince";
import Personal from "./Personal";
import '../styles/form.css'
import { useState } from "react";
import { Mail, Phone } from "lucide-react"
import Cv from "./Cv";


const Form = () => {
  const [displaySection, setDisplaySection] = useState("education");

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle,setjobTitle] = useState('');
  const [iconEmail,seticonEmail] = useState(null);
  const [iconPhone,seticonPhone] = useState(null);

  const handleClick = (section) => {
    setDisplaySection(section);
  };

  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'firstName') setfirstName(value);
    if (name === 'lastName') setlastName(value);

    if (name === 'email') {
      setEmail(value)
      seticonEmail(<Mail className="mail-icon"/>)
    }
    if (name === 'phone') {
      setPhone(value)
      seticonPhone(<Phone className="phone-icon"/>)
    }
    if (name === 'jobTitle') setjobTitle(value);
  
  };

  return (
    <>
      <h1 className="app-title">Cv builder</h1>
    <div className="app-container">
    <div className="form-container">
    <Personal firstName={firstName} lastName={lastName} jobTitle={jobTitle} email={email} phoneNumber={phone} handleChange={handleChange}/>
    <Education 
            display={displaySection === "education"} 
            handleClick={() => handleClick("experience")} 
          />
          <Experince 
            display={displaySection === "experience"} 
            handleClick={() => handleClick("education")} 
          />
      </div>
      <Cv firstName={firstName} lastName={lastName} jobTitle={jobTitle} email={email} phoneNumber={phone}
      iconEmail={iconEmail}
      iconPhone={iconPhone}
      />
      </div>
      </>
  )
}

export default Form
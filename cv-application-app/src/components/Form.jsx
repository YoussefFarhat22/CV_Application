import Education from "./Education";
import Experince from "./Experince";
import Personal from "./Personal";
import '../styles/form.css'
import { useState } from "react";


const Form = () => {
  const [display,setDisplay] = useState(false)


  const handleClick = () => {
    setDisplay(!display)
  }

  return (
    <div className="form-container">
    <Personal />
      <Education display={display} handleClick={handleClick}/>
      <Experince display={!display} handleClick={handleClick}/>
      </div>
  )
}

export default Form
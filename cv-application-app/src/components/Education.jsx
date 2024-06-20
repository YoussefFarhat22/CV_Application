
import { ChevronDown } from 'lucide-react';
import '../styles/form.css'

const Education = ({display,handleClick}) => {
  

  


  return (
  
  <>
  <form className='form'>
    <div className='edu-title'>
    <h1>Education</h1>
    <ChevronDown onClick={()=>handleClick()}/>
    </div>
    {display && <div className="edu-container">
    <div className="cell">
      <label htmlFor="first-name">School name</label>
      <input type="text" id="first-name" />
    </div>
    <div className="cell">
      <label htmlFor="last-name">Title of study</label>
      <input type="text" id="last-name" />
    </div>
    <div className="cell">
      <label htmlFor="job-title">Date of study</label>
      <input type="email" id="job-title" />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
    </div>}

    
  </form>
  </>
  )
}

export default Education
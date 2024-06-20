
import { ChevronDown } from 'lucide-react';
import '../styles/form.css'

const Experince = ({display,handleClick}) => {
  



  return (
  
  <>
  <form className='form'>
    <div className='edu-title'>
    <p className='section-title'>Experience</p>
    <ChevronDown onClick={()=>handleClick()}/>
    </div>
    {display && <div className="edu-container">
    <div className="cell">
      <label htmlFor="first-name">Company name</label>
      <input type="text" id="first-name" />
    </div>
    <div className="cell">
      <label htmlFor="last-name"> position title</label>
      <input type="text" id="last-name" />
    </div>
    <div className="cell">
      <label htmlFor="job-title">Date of study</label>
      <textarea name="" id=""></textarea>
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
    </div>
    }

    
  </form>
  </>
  )
}

export default Experince;
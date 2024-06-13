import '../styles/form.css'
import '../styles/cv.css'

const CV = ({ name, email, phone, jobTitle,education, experience, skills }) => {
  return (
    <div className='card-cv'>
      
      <div className='cv-top'>
      <div>
      <p className='name'>{name}</p>
      <p className='jobTitle'>{jobTitle}</p>
      </div>
      <div>
      <p className='email'>{email}</p>
      <p className='phone'>{phone}</p>
      </div>
      </div>
      <div >
      <p className='education'>Education</p>
      <p>{education}</p>
      </div>
      <div >
      <p className='education'>Experience</p>
      <p>{experience}</p>
      </div>
      <div>
        <p className='education'>Skills</p>
      <p> {skills}</p>
      </div>
    </div>
  );
};

export default CV;

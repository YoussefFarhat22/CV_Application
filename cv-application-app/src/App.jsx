import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CV from './components/CV';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle,setjobTitle] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [selectedSection, setSelectedSection] = useState('Personal Information');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'jobTitle') setjobTitle(value);
    if (name === 'education') setEducation(value);
    if (name === 'experience') setExperience(value);
    if (name === 'skills') setSkills(value);
  };

  return (
    <div className="App">
      <Header className='header'/>
      <div className="main">
      <Form 
        name={name} 
        email={email} 
        phone={phone} 
        jobTitle={jobTitle}
        education={education}
        experience={experience}
        skills={skills}
        handleChange={handleChange} 
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <CV 
        name={name} 
        email={email} 
        phone={phone} 
        jobTitle={jobTitle}
        education={education}
        experience={experience}
        skills={skills}
      
      />
      </div>
    </div>
  );
};

export default App;


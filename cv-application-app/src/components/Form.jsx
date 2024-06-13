import "../styles/form.css"

const Form = ({ name, email, phone, jobTitle,education, experience, skills, handleChange, selectedSection, setSelectedSection  }) => {
  
  const renderSection = () => {
    switch (selectedSection) {
      case 'Personal Information':
        return (
          <>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={name} onChange={handleChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={email} onChange={handleChange} />
            </div>
            <div>
              <label>Phone:</label>
              <input type="tel" name="phone" value={phone} onChange={handleChange} />
            </div>
            <div>
              <label>Job Title:</label>
              <input type="text" name="jobTitle" value={jobTitle} onChange={handleChange} />
            </div>
          </>
        );
      case 'Educational Experience':
        return (
          <div>
            <label>Education:</label>
            <input type="text" name="education" value={education} onChange={handleChange} />
          </div>
        );
      case 'Practical Experience':
        return (
          <>
            <div>
              <label>Experience:</label>
              <input type="text" name="experience" value={experience} onChange={handleChange} />
            </div>
            
          </>
        );
      
      case 'Skills':
      return (<div>
  <label>Skills:</label>
  <input type="text" name="skills" value={skills} onChange={handleChange} />
</div>)
      default:
        return null;
    }
  };
  
  
  return (
    <form>
      <div className="card">
        {/* <h3>{selectedSection}</h3> */}
        <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="Personal Information">Personal Information</option>
          <option value="Educational Experience">Educational Experience</option>
          <option value="Practical Experience">Practical Experience</option>
          <option value="Skills">Skills</option>
        </select>
        {renderSection()}
      </div>
    </form>
  )
};

export default Form;

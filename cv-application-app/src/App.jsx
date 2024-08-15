import { useState,useRef } from 'react';

import { useReactToPrint } from 'react-to-print';
import Cv from './components/Cv';

import GeneraleInfo from './components/GeneraleInfo';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';



function App() {

  const [generalInfomation,setGeneraleInformation] = useState({fname:'',lname:'',jobTitle:'',email:'',phone:''});
  const [education,setEducation ] = useState([{school:'',major:'',from:'',until:''}]);
  const [experience,setExperience ] = useState([{company:'',position:'',responsibilities:'',from:'',until:''}]);
  const cvRef = useRef();


  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: 'CV',
  });

  return (
    <div className='flex flex-col py-4 gap-y-8 bg-slate-50'>
      <div className='flex flex-col items-center'>
      <h1 className='font-bold text-3xl  text-emerald-700'>QuickCV</h1>
      <p className='font-medium text-xl'>Create and customize your professional CV with ease</p>
      </div>
      <div className='flex flex-col items-end gap-y-2'>
      <button onClick={handlePrint} className="bg-blue-500 w-[850px]   text-white py-2 px-4 mt-4">Download PDF</button>

      <div className='flex gap-x-4 justify-center'>
      <div className='flex flex-col gap-y-2'> 
        <GeneraleInfo info={generalInfomation} setInfo={setGeneraleInformation} />
        <Education info={education} setInfo={setEducation} />
        <Experience info={experience} setInfo={setExperience}/>
      </div>
    

      <Cv ref={cvRef} generalInfo={generalInfomation} education={education} experience={experience}/>
    
      </div>
      </div>
    </div>
  );

}

export default App;

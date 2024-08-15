import React ,{ useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Curricalm = React.forwardRef(({generalInfo,education,experience},ref) => {
  return (
    <div ref={ref} className="w-[850px] flex flex-col">

      {/*General information  */}
   <div className="bg-emerald-800 text-white  p-4 flex flex-col gap-y-4">
        <div>
          <p className="text-2xl font-bold">{generalInfo.fname || "John"} {generalInfo.lname || "Doe"}</p>
          <p className="text-gray-100">{generalInfo.jobTitle || "Software enginner"}</p>
        </div>
        <div className="flex gap-4">
          <p className="text-gray-100">{generalInfo.email || "john-doe@email.com"}</p>
          <p className="text-gray-100">{generalInfo.phone || "+21020202000"}</p>
        </div>
    </div> 

<div className="flex flex-col gap-y-2">
      {/* Education information */}
      <div className='bg-white'>
      <p className="bg-slate-900 text-lg text-white p-2 font-medium text-center">Education</p>
      {education.filter(item => item.school || item.major || item.from || item.until).length > 0 && (
       <>
          {education.map((item, index) => (
            (item.school || item.major || item.from || item.until) && (
              <div className="flex justify-between p-4" key={index}>
                <div>
                  <p className="font-bold">{item.school}</p>
                  <p>{item.major}</p>
                </div>
                <div className="flex">
                  <p>{item.from} - </p>
                  <p>{item.until}</p>
                </div>
              </div>
            )
          ))}
          </>
        )}
        </div>

      {/* Experience information */}
        <div>
          <p className="bg-slate-900 text-lg text-white p-2 font-medium text-center">Experience</p>
      {experience.filter(item => item.company || item.position || item.responsibilities || item.from || item.until).length > 0 && (
          <>
          {experience.map((item, index) => (
            (item.company || item.position || item.responsibilities || item.from || item.until) && (
              <div className="flex flex-col p-4" key={index}>
                <div className="flex justify-between">
                  <p className="font-bold">{item.company}</p>
                  <div className="flex flex-col">
                  <p>{item.position}</p>
                  <div className="flex">
                  <p>{item.from} - </p>
                  <p>{item.until}</p>
                  </div>
                  </div>
                
                </div>
                <div className="w-full">
                  <p className="break-words">{item.responsibilities}</p>
                </div>
              </div>
            )
          ))}
          </>
        )}
        </div>

        </div>

    </div>
  )
})


export default Curricalm;
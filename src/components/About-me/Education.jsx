import React from 'react'

const education = [
  {
    id: 1,
    place: "University School of Information, Communication and Technology, GGSIPU",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    year: "2021 - Present",
    cgpa: "CGPA 8.36"
  },
  {
    id: 2,
    place: "Adarsh Sr. Sec. School",
    degree: "XII - Science/Non-Medical",
    year: "2018 - 2020",
    cgpa: "91.3%"
  }
]
function Education() {
  return (
    <div className="flex  flex-col items-end">
      <div className="flex flex-col md:w-[80%] w-full my-6">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className='text-[#333947] mb-1'>University School of Information, Communication and Technology, GGSIPU</div>
          <div className='text-[#5f6980] mb-2'>2021 - Present</div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className='lg:text-[#5f6980] text-[#3b4253] mb-2'>Bachelor of Technology in Computer Science and Engineering</div>
          <div className='text-[#5f6980] mb-2'>CGPA 8.36</div>
        </div>
      </div>
      <hr className='md:w-[80%] w-full md:my-1'></hr>
      <div className="flex flex-col md:w-[80%] w-full my-6">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className='text-[#3b4253] mb-1'>Adarsh Sr. Sec. School</div>
          <div className='text-[#5f6980] mb-2'>2018 - 2020</div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className='lg:text-[#5f6980] text-[#3b4253] mb-2'>XII - Science/Non-Medical</div>
          <div className='text-[#5f6980] mb-2'>91.3%</div>
        </div>
      </div>
    </div>
  )
}

export default Education
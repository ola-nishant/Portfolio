import React from 'react'

function Skills() {
  return (
    <div className="flex  flex-col items-end">
      <div className="flex flex-col md:w-[80%] w-full my-2">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className='text-[#333947] mb-1'>Frontend Development</div>
          <div className='text-[#5f6980] mb-2'>Next.Js, React.Js, TailwindCSS, EJS, jQuery, HTML, CSS, Bootstrap CSS</div>
        </div>
      </div>
      <hr className='md:w-[80%] w-full md:my-1'></hr>
      <div className="flex flex-col md:w-[80%] w-full my-2">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className='text-[#3b4253] mb-1'>Backend Development</div>
          <div className='text-[#5f6980] mb-2'>Node.Js, Typescript, Express.Js, Git, Github, MongoDB, SQL</div>
        </div>
      </div>
      <hr className='md:w-[80%] w-full md:my-1'></hr>
      <div className="flex flex-col md:w-[80%] w-full my-2">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className='text-[#3b4253] mb-1'>Programming</div>
          <div className='text-[#5f6980] mb-2'>C, C++, C# Java, Javascript, Python</div>
        </div>
      </div>
      <hr className='md:w-[80%] w-full md:my-1'></hr>
      <div className="flex flex-col md:w-[80%] w-full my-2">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className='text-[#3b4253] mb-1'>UIUX Design</div>
          <div className='text-[#5f6980] mb-2'>Figma, Framer, Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
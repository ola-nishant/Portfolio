import React from 'react';

const experience = [
    {
        id: 1,
        company: "Zeigen",
        desc: "Designed the entire user interface and user experience for the mobile application using Figma, ensuring seamless navigation and intuitive interactions that resonate with the target audience’s preferences and expectations, scoring a user satisfaction rating of 4.8/5 in more than 500 responses during alpha testing phase.",
        role: "UIUX Design",
        duration: "November 2022 - January 2023",
        website: "hello"
    }
];

function Experience() {
    return (
        <div>
            {experience.map((item) => (
                <div key={item.id} className='flex md:flex-row flex-col py-4 w-full md:justify-between justify-start'>
                    <div className="flex flex-col md:max-w-[40%]">
                        <h4 className="md:text-[54px] text-[36px] font-semibold text-black tracking-tighter">{item.company}</h4>
                        <div className='text-[#5f6980] mb-2'>{item.desc}</div>
                    </div>
                    <div className="flex flex-col flex-grow gap-3 md:px-6 md:max-w-[40%] md:py-[80px] py-[24px] text-[13px] ">
                        <div className="flex border-b-1 border-[#e5e5e5] justify-between flex-grow max-h-10 pb-3 ">
                            <div className="text-[#5f6980]">Role: </div>
                            <div className="text-[#5f6980]">{item.role}</div>
                        </div>
                        <div className="flex border-b-1 border-[#e5e5e5] justify-between flex-grow max-h-10 pb-3">
                            <div className="text-[#5f6980]">Duration: </div>
                            <div className="text-[#5f6980]">{item.duration}</div>
                        </div>
                        <div className="flex justify-between flex-grow max-h-10 pb-3">
                            <div className="text-[#5f6980]">Visit: </div>
                            <div className="text-[#5f6980]">{item.website}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;

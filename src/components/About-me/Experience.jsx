import React from 'react';

const experience = [
    {
        id: 1,
        company: "Realty Experts Group",
        desc: `Engineered and deployed interactive, high-performance web pages using a comprehensive tech stack including Next.js, React, Redux, TypeScript, TailwindCSS, and Styled Components. Utilized React Hooks and Context API for advanced state management, integrated React Query and Next.JS routing.`,
        role: "Frontend Developer",
        duration: "April - June 2024",
        website: "realtyexpertsgroup.in"
    },
    {
        id: 2,
        company: "Entropi Solutions",
        desc: `Single-handedly orchestrated the development lifecycle of a high-availability website architecture using React, EJS and Node.js, optimizing data management; enhanced site performance over multiple iterations, resulting in a 40% increase in user acquisition rate.`,
        role: "Software Developer",
        duration: "July - September 2023",
        website: "www.entropisolutions.io"
    },
    {
        id: 3,
        company: "The Hang Loose Hut",
        desc: `Conducted in-depth research on eCommerce website layouts and content strategies.
        Crafted eye-catching graphics and designed layouts for product illustrations, logos, and websites, aligning each element with the distinctive style and ethos of the company’s brand identity`,
        role: "Component Designer",
        duration: "September - October 2023",
        website: "www.thehangloosehut.com",
    },
    {
        id: 4,
        company: "Zeigen",
        desc: "Designed the entire user interface and user experience for the mobile application using Figma, ensuring seamless navigation and intuitive interactions that resonate with the target audience’s preferences and expectations, scoring a user satisfaction rating of 4.8/5 in more than 500 responses during alpha testing phase.",
        role: "UIUX Design",
        duration: "November 2022 - January 2023",
        website: "www.zeigenhealth.com"
    }
];

function Experience() {
    return (
        <div>
            {experience.map((item) => (
                <div key={item.id} className="flex flex-col my-12 md:pl-[20px]">
                    <div className="flex flex-row">
                        <p className="text-small text-default-400 absolute md:ml-[-20px] ml-[-16px]">{`0${item.id}`}</p>
                        <h4 className="md:text-[40px] text-[36px] font-semibold text-black tracking-tighter leading-hero md:max-w-[40%]">{item.company}</h4>

                    </div>
                    <div className='flex md:flex-row flex-col py-4 w-full md:justify-between justify-start md:items-center'>
                        <div className='text-[#5f6980] mb-2 md:max-w-[40%]'>{item.desc}</div>
                        <div className="flex flex-col flex-grow gap-3 md:px-6 md:max-w-[40%] text-[13px] pt-6 md:pt-0">
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
                                <div className="text-[#5f6980]">
                                    <a href={`https://${item.website}`} target='_blank' rel="noopener noreferrer">
                                        {item.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;

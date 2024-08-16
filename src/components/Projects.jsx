"use client"
import React from 'react';
import IconE from "@/components/svg-icons/IconE";
import Card from "@/components/Card";

const projects = [
    {
        id: 1,
        title: "Smoothy",
        src: "/Smoothy copy.png",
        link: "https://github.com/MR-DHRUV/Smoothy",
        tags: ['Machine Learning', 'Research'],
    },
    {
        id: 2,
        title: "DevFeed",
        src: "https://framerusercontent.com/images/9iWifFRDqBox1KcbJLOzxHXEpQ.png",
        link: "https://github.com/ola-nishant/DevFeed",
        tags: ['Next.js', 'Clerk', 'MongoDB'],
    },
    {
        id: 3,
        title: "Bhoomi",
        src: "https://i.ibb.co/0CWh5SL/after-login.png",
        link: "https://www.figma.com/design/V2EogHHzWtk4fyFmQn31e9/Bhoomi?node-id=0-1&t=axAbuNRRVbJzSDVQ-1",
        tags: ['UIUX', 'Web3'],
    },
    {
        id: 4,
        title: "Java to x86_64 Toy Compiler",
        src: "https://framerusercontent.com/images/gnqxx4ffUgrD3uvgo2zKbUeLtk.png",
        link: "https://github.com/ola-nishant/Java-to-x86_64-compiler",
        tags: ['Java', 'Yacc', 'Bison'],
    },
]

function Projects(props) {
    const handleCardClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="w-full">
            <div className="flex flex-row justify-start gap-4 items-start w-[100%]">
                <IconE />
                <h4 className='font-light'>PROJECTS</h4>
            </div>
            <div className='flex w-full flex-row flex-wrap justify-between mt-8'>
                {projects.map(project => (
                    <Card
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        src={project.src}
                        link={project.link}
                        tags={project.tags}
                        onClick={() => handleCardClick(project.link)}
                    />
                    
                ))}
            </div>
        </div>
    )
}

export default Projects
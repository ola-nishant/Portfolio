"use client";
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import IconA from "@/components/svg-icons/IconA";
import IconB from "@/components/svg-icons/IconB";
import IconC from "@/components/svg-icons/IconC";
import IconD from "@/components/svg-icons/IconD";
import IconE from "@/components/svg-icons/IconE";
import Education from "@/components/About-me/Education";
import Experience from "@/components/About-me/Experience";

const iconVariants = {
  normal: {
    rotate: 0,
    transition: { duration: 0.5 } 
  },
  rotated: {
    rotate: 720,
    transition: { duration: 0.5 } 
  }
};

function AboutMe() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInteraction = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const getAnimationProps = (index) => {
    return {
      variants: iconVariants,
      initial: "normal",
      animate: activeIndex === index ? "rotated" : "normal",
      whileHover: !isMobile ? "rotated" : undefined,
    };
  };

  return (
    <div className="md:my-[80px] my-[50px] w-full">
      <div className='my-[40px] flex w-full flex-col'>
        <div className="flex flex-row justify-start gap-4 items-start w-[100%]">
          <IconE />
          <h4 className='font-light'>ABOUT ME</h4>
        </div>
        <Accordion className="my-4">
          <AccordionItem
            key="1"
            aria-label="Education"
            onClick={() => isMobile && handleInteraction(1)}
            onMouseEnter={() => !isMobile && handleInteraction(1)}
            onMouseLeave={() => !isMobile && handleInteraction(null)}
            onClickCapture={() => !isMobile && handleInteraction(1)}
            startContent={
              <motion.div {...getAnimationProps(1)}>
                <IconA />
              </motion.div>
            }
            title={<span className="font-semibold text-[22px] ml-1">Education</span>}
          >
            <Education />
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Experience"
            onClick={() => isMobile && handleInteraction(2)}
            onMouseEnter={() => !isMobile && handleInteraction(2)}
            onMouseLeave={() => !isMobile && handleInteraction(null)}
            onClickCapture={() => !isMobile && handleInteraction(2)}
            startContent={
              <motion.div {...getAnimationProps(2)}>
                <IconB />
              </motion.div>
            }
            title={<span className="font-semibold text-[22px] ml-1">Experience</span>}
          >
            <Experience />
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Skillset"
            onClick={() => isMobile && handleInteraction(3)}
            onMouseEnter={() => !isMobile && handleInteraction(3)}
            onMouseLeave={() => !isMobile && handleInteraction(null)}
            onClickCapture={() => !isMobile && handleInteraction(3)}
            startContent={
              <motion.div {...getAnimationProps(3)}>
                <IconC />
              </motion.div>
            }
            title={<span className="font-semibold text-[22px] ml-1">Skillset</span>}
          >
            accor1
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Hobbies"
            onClick={() => isMobile && handleInteraction(4)}
            onMouseEnter={() => !isMobile && handleInteraction(4)}
            onMouseLeave={() => !isMobile && handleInteraction(null)}
            onClickCapture={() => !isMobile && handleInteraction(4)}
            startContent={
              <motion.div {...getAnimationProps(4)}>
                <IconD />
              </motion.div>
            }
            title={<span className="font-semibold text-[22px] ml-1">Hobbies</span>}
          >
            accor1
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default AboutMe;

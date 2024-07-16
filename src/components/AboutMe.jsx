"use client";
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import IconA from "@/components/svg-icons/IconA";
import IconB from "@/components/svg-icons/IconB";
import IconC from "@/components/svg-icons/IconC";
import IconD from "@/components/svg-icons/IconD";
import IconE from "@/components/svg-icons/IconE";

const iconVariants = {
  normal: {
    rotate: 0,
    transition: { duration: 1 }
  },
  rotated: {
    rotate: 540,
    transition: { duration: 0.5 }
  }
};

function AboutMe() {
  return (
    <div className="md:my-[80px] my-10 w-full">
      <div className='my-[40px] flex w-full flex-col'>
        <div className="flex flex-row justify-start gap-4 items-start w-[100%]">
          <IconE />
          <h4 className='font-light'>ABOUT ME</h4>
        </div>
        <Accordion className="my-4">
          <AccordionItem
            key="1"
            aria-label="Education"
            startContent={
              <motion.div
                variants={iconVariants}
                initial="normal"
                whileHover="rotated"
              >
                <IconA />
              </motion.div>
            }
            title={<span className="font-semibold text-[22px] ml-1">Education</span>}
          >
            accor1
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Experience"
            startContent={
              <motion.div
                variants={iconVariants}
                initial="normal"
                whileHover="rotated"
              >
                <IconB />
              </motion.div>
            }
            title={<span className="font-semibold text-[22px] ml-1">Experience</span>}
          >
            accor1
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Skillset"
            startContent={
              <motion.div
                variants={iconVariants}
                initial="normal"
                whileHover="rotated"
              >
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
            startContent={
              <motion.div
                variants={iconVariants}
                initial="normal"
                whileHover="rotated"
              >
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

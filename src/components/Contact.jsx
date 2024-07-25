'use client'
import React, { useState } from 'react';
import IconRight from './svg-icons/IconRight';
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

const iconVariants = {
    normal: {
        rotate: 0,
        transition: { duration: 0.5 }
    },
    rotated: {
        rotate: 360,
        transition: { duration: 0.5 }
    }
};

function Contact() {
    const [activeIndex, setActiveIndex] = useState(null);

    const getAnimationProps = () => {
        return {
            variants: iconVariants,
            initial: "normal",
            animate: activeIndex === 1 ? "rotated" : "normal"
        };
    };

    const handleInteraction = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col gap-8 mx-auto w-full bg-black xl:rounded-large md:rounded-medium rounded-small items-center md:my-[70px] my-[50px] py-[50px] px-4">
            <h1 className="2xl:text-[56px] md:text-[41px] text-[28px] leading-hero md:text-nowrap tracking-tighter font-medium text-white">
                Let&apos;s get in touch!
            </h1>
            <div className="flex flex-col md:w-[60%] gap-2">
                <div className='w-full flex flex-row gap-1.5'>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 text-gray-900 text-sm w-full p-4 h-[40px] rounded-[16px]"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="text"
                        id="email"
                        className="bg-gray-50 text-gray-900 text-sm w-full p-4 h-[40px] rounded-[16px]"
                        placeholder="Email"
                        required
                    />
                </div>
                <textarea
                    id="message"
                    rows="2"
                    className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-[16px]"
                    placeholder="Message">
                </textarea>

                <Button
                    className='bg-white text-black font-medium text-large h-[50px] mt-2 rounded-[16px]'
                    onMouseEnter={() => handleInteraction(1)}
                    onMouseLeave={() => handleInteraction(null)}
                >
                    Send
                    <motion.div {...getAnimationProps()} className="/ flex items-center justify-center">
                        <IconRight />
                    </motion.div>
                </Button>

                <div className="flex flex-row md:gap-8 md:gap-3 text-wrap md:pt-16 pt-8 items-center md:justify-center justify-between text-white md:font-medium px-3">
                    <a href=''>Home</a>
                    <a href=''>About Me</a>
                    <a href=''>Projects</a>
                    <a href=''>Contact</a>
                </div>
                <div className="md:font-medium font-light text-small text-gray-400 w-full md:py-8 py-2 text-center">
                    © Nishant Ola 2024
                </div>
            </div>
        </div>
    );
}

export default Contact;
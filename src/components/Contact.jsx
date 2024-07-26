'use client'
import React, { useState } from 'react';
import IconRight from './svg-icons/IconRight';
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast("I'll contact you shortly!",
    {
      icon: '👋',
      style: {
        borderRadius: '10px',
        background: 'black',
        color: '#fff',
      },
    }
  );
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
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

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

    const validateForm = () => {
        const newErrors = {};
        if (!form.name) newErrors.name = "Please enter your name";
        if (!form.email) {
            newErrors.email = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!form.message) newErrors.message = "Please speak your mind";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (validateForm()) {
            notify();
            console.log("Form is valid:", form);
        }
    };

    return (
        <div className="flex flex-col gap-8 mx-auto w-full bg-black xl:rounded-large md:rounded-medium rounded-small items-center md:my-[90px] my-[70px] py-[50px] px-4" id="Hero">
            <h1 className="2xl:text-[56px] md:text-[41px] text-[28px] leading-hero md:text-nowrap tracking-tighter font-medium text-white">
                Let&apos;s get in touch!
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col md:w-[60%] gap-2">
                <div className='w-full flex flex-row gap-1.5'>
                    <div className="flex flex-col w-full">
                        <input
                            type="text"
                            id="name"
                            className={`bg-gray-50 text-gray-900 text-sm w-full p-4 h-[40px] rounded-[16px] ${errors.name ? 'border-3 border-red-500' : ''}`}
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    </div>
                    <div className="flex flex-col w-full">
                        <input
                            type="text"
                            id="email"
                            className={`bg-gray-50 text-gray-900 text-sm w-full p-4 h-[40px] rounded-[16px] ${errors.email ? 'border-3 border-red-500' : ''}`}
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                </div>
                <textarea
                    id="message"
                    rows="2"
                    className={`block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-[16px] ${errors.message ? 'border-3 border-red-500' : ''}`}
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                />
                {errors.message && <span className="text-red-500 text-sm relative bottom-2">{errors.message}</span>}

                <Button
                    type="submit"
                    className='bg-white text-black font-medium text-large h-[50px] mt-2 rounded-[16px]'
                    onMouseEnter={() => handleInteraction(1)}
                    onMouseLeave={() => handleInteraction(null)}
                >
                    Send
                    <motion.div {...getAnimationProps()} className="ml-2 flex items-center justify-center">
                        <IconRight />
                    </motion.div>
                </Button>

                <div className="flex flex-row md:gap-8 text-wrap md:pt-16 pt-8 items-center md:justify-center justify-between text-white md:font-medium px-8">
                    <a href=''>Home</a>
                    <a href=''>About Me</a>
                    <a href=''>Projects</a>
                </div>
                <div className="md:font-medium font-light text-small text-gray-400 w-full md:py-8 py-2 text-center">
                    © Nishant Ola 2024
                </div>
                <Toaster />
            </form>
        </div>
    );
}

export default Contact;

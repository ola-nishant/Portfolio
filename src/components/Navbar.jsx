"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import MainIcon from "@/components/svg-icons/MainIcon"
import { motion } from "framer-motion";
import Reveal from "@/app/Reveal";

const hrVariants = {
    normal: {
        width: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0
        }
    },
    expanded: {
        width: "100%",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5
        }
    }
};

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const delayedSetIsMenuOpen = (val) => {
        setTimeout(() => {
            setIsMenuOpen(val)
        },);
    }
    const menuItems = [
        { name: "Home", id: "Home" },
        { name: "About Me", id: "About" },
        { name: "Selected Projects", id: "Projects" },
        { name: "Let's Connect", id: "Contact" },
    ];

    const handleInteraction = (index) => {
        setHoveredIndex(index);
    };

    return (
        <Navbar position="static" isBordered isBlurred={false} onMenuOpenChange={setIsMenuOpen} className='h-[5rem] md:px-[15vw] px-[5vw]' isMenuOpen={isMenuOpen}>
            <NavbarContent className="max-w-[1278px]">
                <NavbarBrand>
                    <MainIcon />
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarMenu className="lg:py-[90px] py-[60px]">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem
                        key={index}
                        onMouseEnter={() => handleInteraction(index)}
                        onMouseLeave={() => handleInteraction(null)}
                    >
                        <Reveal x={-index*100} y={0} delayTime={0.1}>
                            <Link
                                className="w-full"
                                href={`#${item.id}`}
                                size="lg"
                                onClick={() => delayedSetIsMenuOpen(false)}
                            >
                                <div className="flex flex-col w-full md:px-[15vw] px-[5vw]">
                                    <div className="flex flex-row gap-2">
                                        <p className="text-small text-default-400">{`0${index + 1}`}</p>
                                        <h4 className="md:text-[54px] text-[36px] font-semibold text-black tracking-tighter">{item.name}</h4>
                                    </div>
                                    <hr className="md:my-6 my-2 min-w-full border-b-1" />
                                    <motion.div
                                        className="border-b-3 border-black relative md:bottom-6 bottom-2"
                                        initial="normal"
                                        animate={hoveredIndex === index ? "expanded" : "normal"}
                                        variants={hrVariants}
                                    />
                                </div>
                            </Link>
                        </Reveal>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

"use client";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Nav from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Reveal from "./Reveal";

export default function Home() {
  return (
    <>
      <Reveal y={-75} delayTime={0} duration={0.2}>
        <Nav /> 
      </Reveal>
      <div className="flex flex-col justify-center items-center md:px-[15vw] px-[5vw]">
        <Reveal delayTime={0} duration={0.2}>
          <section id="Home" className="w-full">
            <Hero />
          </section>
        </Reveal>
        <Reveal delayTime={0.15}>
          <Gallery />
        </Reveal>
        <Reveal>
          <section id="About" className="w-full">
            <AboutMe />
          </section>
        </Reveal>
        <Reveal>
          <section id="Projects" className="w-full">
            <Projects />
          </section>
        </Reveal>
        <Reveal>
          <section id="Contact" className="w-full">
            <Contact />
          </section>
        </Reveal>
      </div>
    </>
  );
}

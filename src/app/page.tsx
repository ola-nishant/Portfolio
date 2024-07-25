import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Nav from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center md:px-[15vw] px-[5vw]">
        <Hero />
        <Gallery />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

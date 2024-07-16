import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:px-[15vw] px-[5vw]">
        <Hero />
        <Gallery />
        <AboutMe />
      </div>
    </>
  );
}

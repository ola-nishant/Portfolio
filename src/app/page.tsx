import Gallery from "@/app/components/Gallery";
import Hero from "@/app/components/Hero";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:px-[15vw] px-[5vw]">
        <Hero />
        <Gallery />
      </div>
    </>
  );
}

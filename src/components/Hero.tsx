import React from "react";
import { Button } from "@nextui-org/button";

function Hero() {
  return ( 
    <div className="flex mx-auto md:my-16 my-9 xl:gap-12 gap-5 xl:flex-row xl:items-center flex-col ">
      <h1 className="2xl:text-[76px] md:text-[61px] text-[40px] text-wrap text-left leading-hero md:text-nowrap tracking-tighter font-medium">
        Nishant Ola.
        <br />
        Developer/Designer
      </h1>
      <div className="flex flex-col gap-6">
        <h3 className="text-[18px] font-semibold leading-snug tracking-tighter">
          I code websites that are both aesthetically pleasing and emotionally
          resonant. I also design user interfaces that are intuitive and
          user-friendly.
        </h3>
        <div className="flex flex-row gap-3">
          <Button
            size="sm"
            variant="ghost"
            className="border-black text-black font-medium hover:text-white hover:bg-black dark"
          >
            <a
              href="https://www.linkedin.com/in/nishant-ola22/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="border-black text-black font-medium hover:text-white hover:bg-black dark"
          >
            <a href="https://github.com/ola-nishant" target="_blank">
              Github
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="border-black text-black font-medium hover:text-white hover:bg-black dark"
          >
            <a
              href="https://www.figma.com/design/JiKE0HDmgXFsTpwI11qNEf/Nishant-Portfolio?node-id=0-1&t=nkeeQ5MU84fiecML-1"
              target="_blank"
            >
              Figma
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="border-black text-black font-medium hover:text-white hover:bg-black dark gap-0"
            endContent={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" ><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" className="fill-current"
              style={{ transition: "fill 0.3s ease" }}/></svg>}
          >
            <a
              href="https://drive.google.com/file/d/1XaNbHFD2xXwTlzOdH9nA1SyTIMCDEiT-/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;


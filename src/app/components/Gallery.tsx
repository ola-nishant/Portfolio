"use client";
import React from "react";
import Image from "next/image";
import "../globals.css";

const Gallery = () => {
  return (
    <div className="flex flex-col xl:gap-6 md:gap-3 gap-2  mx-auto">
      <Image
        src="https://framerusercontent.com/images/8Fk6RlgtqXHopQpMemxEHY24eI8.png"
        alt="Gallery Image 1"
        width={2048}
        height={221}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
        style={{
          objectPosition: "center center",
          objectFit: "cover",
        }}
        className="2xl:h-[140px] xl:rounded-large md:h-[120px] md:rounded-medium h-[80px] rounded-small"
      />
      <div className="flex flex-row xl:gap-6 md:gap-3 gap-2">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="2xl:h-[140px] xl:w-[140px] xl:rounded-large md:h-[120px] md:w-[120px] md:rounded-medium h-[80px] w-[80px] rounded-small"
          style={{
            objectPosition: "center center",
            objectFit: "cover",
          }}
        >
          <source
            src="https://framerusercontent.com/assets/a7oLlvkswlykX0srOqFY3gx1s.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="flex-grow min-w-[90px]">
          <Image
            src="https://framerusercontent.com/images/TJNTTWGjUItiBrVQwBNfxZzxNE.png?scale-down-to=2048"
            alt="Gallery Image 2"
            width={2048}
            height={221}
            priority
            style={{
              objectPosition: "center center",
              objectFit: "cover",
            }}
            className="2xl:h-[140px] xl:rounded-large md:h-[120px] md:rounded-medium h-[80px] rounded-small w-full"
          />
        </div>
      </div>
      <Image
        src="https://framerusercontent.com/images/YAmzP6ZyEyTjm6BB2QmRLV8XYgE.png"
        alt="Gallery Image 1"
        width={2048}
        height={221}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
        style={{
          objectPosition: "center center",
          objectFit: "cover",
        }}
        className="2xl:h-[140px] xl:rounded-large md:h-[120px] md:rounded-medium h-[80px] rounded-small"
      />
      <div className="flex flex-row xl:gap-6 md:gap-3 gap-2">
        <div className="flex-grow">
          <Image
            src="https://framerusercontent.com/images/aZ7rJFO62w29QFKecSIazsAsa5I.png?scale-down-to=2048"
            alt="Gallery Image 4"
            width={2048}
            height={221}
            priority
            style={{
              objectPosition: "center center",
              objectFit: "cover",
            }}
            className="2xl:h-[140px] xl:rounded-large md:h-[120px] md:rounded-medium h-[80px] rounded-small"
          />
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="2xl:h-[140px] xl:min-w-[700px] xl:rounded-large md:h-[120px] md:min-w-[600px] md:rounded-medium h-[80px] min-w-[270px] rounded-small"
          style={{
            objectPosition: "center center",
            objectFit: "cover",
            overflow: "clip"
          }}
        >
          <source
            src="https://framerusercontent.com/assets/GBwyoZQ9MSVvWK3MBfzqg5v8NMM.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Gallery;

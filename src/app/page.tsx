import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Navbar from "@/components/navbar";

export default function Home() {
  const words = [
    {
      text: "#Connect ",
      className: "text-white-900 text-6xl  ",
    },
    {
      text: " to ",
      className: "text-white-900 text-6xl",
    },
    {
      text: " Your ",
      className: "text-white-900 text-6xl",
    },
    {
      text: " Private ",
      className: "text-white-900 text-6xl",
    },
    {
      text: " Partner",
      className: "text-blue-500 text-6xl",
    },
  ];
  return (
    <BackgroundGradientAnimation>
      <Navbar />
      <div className="mt-[10%] z-50 flex text-white font-bold px-4 cursor-pointer text-5xl text-center md:text-4xl lg:text-7xl justify-center sm:w-dvw ">
        <h1 className="sm:text-3xl  2xl:text-6xl font-bold text-white ">
          <TypewriterEffectSmooth words={words} className="font-sans" />
        </h1>
      </div>
    </BackgroundGradientAnimation>
  );
}

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Navbar from "@/components/navbar";
import Cards from "./cards";

type Props = {};

export default function Hero({}: Props) {
  const words = [
    {
      text: "#",
      className: "text-blue-500 text-6xl  ",
    },
    {
      text: "Connect",
      className: "text-white-900 text-5xl  ",
    },
    {
      text: "to",
      className: "text-white-900 text-5xl",
    },
    {
      text: "your",
      className: "text-white-900 text-5xl",
    },
    {
      text: "Private",
      className: "text-white-900 text-5xl",
    },
    {
      text: "Partner",
      className: "text-blue-500 text-6xl",
    },
  ];
  return (
    <BackgroundGradientAnimation>
      <Navbar />

      <div className="sm:mt-[10%] 2xl:mt-[2%] z-50 flex px-4 cursor-pointer text-5xl  justify-center sm:w-dvw ">
        <h1 className=" text-white ">
          <TypewriterEffectSmooth words={words} className="font-sans" />
        </h1>
      </div>
      <Cards />
    </BackgroundGradientAnimation>
  );
}

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
      className: "text-blue-500 text-5xl  ",
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
      className: "text-blue-500 text-5xl",
    },
  ];
  return (
    <BackgroundGradientAnimation>
      <Navbar />

      <div className="sm:mt-[8%] 2xl:mt-[1%] z-50 flex px-4 cursor-pointer text-4xl justify-center sm:w-dvw ">
        <h1 className=" text-white ">
          <TypewriterEffectSmooth words={words} className="font-sans" />
          <p className="font-normal text-base text-center text-slate-300 mb-8 relative z-50">
            This Chat App is constructed with NodeJS, Express, and Socket.IO for
          </p>
        </h1>
      </div>
      <Cards />
    </BackgroundGradientAnimation>
  );
}

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
      className: "text-blue-500 text-5xl sm:text-[24px] ",
    },
    {
      text: "Connect",
      className: "text-white-900 text-5xl  sm:text-[22px] ",
    },
    {
      text: "to",
      className: "text-white-900 text-5xl sm:text-[22px]",
    },
    {
      text: "your",
      className: "text-white-900 text-5xl  sm:text-[22px]",
    },
    {
      text: "Private",
      className: "text-white-900 text-5xl  sm:text-[22px]",
    },
    {
      text: "Partner",
      className: "text-blue-500 text-5xl  sm:text-[25px]",
    },
  ];
  return (
    <BackgroundGradientAnimation className="-z-50">
      <Navbar />
      <div className="z-50 sm:hidden flex-col flex px-4 text-center cursor-pointer text-4xl items-center justify-center w-dvw">
        <h1 className=" text-white flex-col justify-center items-center">
          <TypewriterEffectSmooth words={words} className="font-sans" />
        </h1>
        <p className="2xl:w-[46rem] sm:hidden font-normal text-[16px] text-center text-slate-300 mb-8 relative z-50 tracking-wide leading-loose">
          This real-time chat app in Next.js uses Socket.IO. Real-time updates
          on the web can be achieved via long-polling, server-side events, or
          web sockets. Long-polling involves periodic HTTP requests, server-side
          events use the browser`s event source API, while web sockets enable
          two-way communication between client and server.
        </p>
      </div>

      <Cards />
    </BackgroundGradientAnimation>
  );
}

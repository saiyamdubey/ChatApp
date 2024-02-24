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
    <BackgroundGradientAnimation className="-z-10">
      <Navbar />
      <div className="sm:mt-[8%]  mx-auto z-50 flex px-4 cursor-pointer text-4xl items-center justify-center sm:w-dvw ">
        <h1 className=" text-white flex flex-col justify-center mx-[50%] w-dvw">
          <TypewriterEffectSmooth words={words} className="font-sans " />
          <p className="2xl:w-[46rem] font-normal text-base text-center text-slate-300 mb-8 relative z-50">
            This real-time chat app in Next.js uses Socket.IO. Real-time updates
            on the web can be achieved via long-polling, server-side events, or
            web sockets. Long-polling involves periodic HTTP requests,
            server-side events use the browser`s event source API, while web
            sockets enable two-way communication between client and server.
          </p>
        </h1>
      </div>
      <Cards />
    </BackgroundGradientAnimation>
  );
}

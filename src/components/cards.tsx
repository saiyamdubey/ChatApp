import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

type Props = {};

export default function Cards({}: Props) {
  return (
    <>
      <div className="z-50 flex justify-evenly gap-[2rem] items-center sm:flex-col sm:justify-between sm:items-center sm:pt-4">
        {/* first card */}
        <div className=" h-4/4 md:h-2/2 w-4/4 sm:w-[80%] relative max-w-sm">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90]  rounded-full blur-3xl" />
          <div className="relative shadow-2xl bg-gray-900 border border-gray-800  px-8 sm:py-6 py-12 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h1 className="font-bold text-2xl sm:text-[22px] text-center mx-auto text-white mb-4 sm:mb-1 relative z-50">
              Private Chatting Application
            </h1>
            <p className="font-normal text-base sm:text-[14px] text-center text-slate-300 mb-4 relative z-50">
              This Chat App is constructed with NodeJS, Express, and Socket.IO
              for secure real-time communication, offering a pleasant
              development experience.
            </p>
            <Link href="/chatapp" className="mx-auto cursor-pointer z-50">
              <button className="inline-flex sm:px-4 mx-auto h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer">
                Start Chatting
              </button>
            </Link>

            <Meteors number={10} />
          </div>
        </div>

        {/* second card */}

        <div className=" h-4/4 md:h-2/2 w-4/4  relative max-w-sm sm:w-[80%]  ">
          <div className="absolute inset-0 h-full  w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90]  rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900  border border-gray-800 sm:py-8  px-8 py-16 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h1 className="font-bold text-2xl sm:text-[22px] mx-auto text-center text-white mb-4 relative z-50">
              Secure Video Calling
            </h1>
            <p className="font-normal text-base sm:text-[14px] text-center text-slate-300 mb-4 relative z-50">
              This shareing is constructed with Zegovclouds for secure webRTC
              connections, by know that you want to share your private video to
              the other users.
            </p>
            <Link href="/videoconferencing" className="mx-auto cursor-pointer z-50">
              <button className="inline-flex sm:px-4 mx-auto h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer">
                Start Sharing
              </button>
            </Link>

            <Meteors number={10} />
          </div>
        </div>
      </div>
    </>
  );
}

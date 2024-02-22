import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

type Props = {};

export default function Cards({}: Props) {
  return (
    <>
      
      <div className="z-50 flex justify-evenly items-center mt-6 ">
        <div className=" h-4/4 md:h-2/2 w-4/4  relative max-w-sm">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90]  rounded-full blur-3xl" />
          <div className="relative shadow-2xl bg-gray-900 border border-gray-800  px-8 py-12 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <h1 className="font-bold text-2xl text-center mx-auto text-white mb-4 relative z-50">
              Private Chatting Application
            </h1>

            <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
              This Chat App is constructed with NodeJS, Express, and Socket.IO
              for secure real-time communication, offering a pleasant
              development experience.
            </p>

            {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button> */}
            <Link href="/chatapp" className="mx-auto cursor-pointer z-50">
              <button className="inline-flex mx-auto h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer">
                Start Chatting
              </button>
            </Link>
            {/* <Link href="/dashboard" className="z-50">Dashboard</Link> */}
            <Meteors number={4} />
          </div>
        </div>

        <div className=" h-4/4 md:h-2/2 w-4/4  relative max-w-sm ">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90]  rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900  border border-gray-800   px-8 py-12 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center  justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-2xl mx-auto text-center text-white mb-4 relative z-50">
              Share Private Images & Files
            </h1>

            <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
              This shareing is constructed with Socket.IO for secure RTC
              connections, by know that you want to share your private things it
              is totally secure.
            </p>

            {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button> */}
            <Link href="/fileshare" className="mx-auto cursor-pointer z-50">
              <button className="inline-flex mx-auto h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer">
                Start Sharing
              </button>
            </Link>

            <Meteors number={4} />
          </div>
        </div>
      </div>
    </>
  );
}

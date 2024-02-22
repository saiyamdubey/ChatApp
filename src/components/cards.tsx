import React from "react";
import { Meteors } from "@/components/ui/meteors";

type Props = {};

export default function Cards({}: Props) {
  return (
    <>
      {/* <div className="flex flex-row w-dvw h-[80%] bg-black justify-around items-center pt-8">
        <div className="card-container  w-[40%]">
          <div className="bg-white bg-opacity-20  h-64 rounded-lg shadow-lg card">
            <div className="card__content">cvcbc</div>
          </div>
        </div>
        <div className="card-container  w-[40%] ">
          <div className="bg-white bg-opacity-20  h-64 rounded-lg shadow-lg card">
            <div className="card__content">fgfgf</div>
          </div>
        </div>
      </div> */}
      <div className="z-50">
        <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Private Chatting Application
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              This Chat App is constructed with NodeJS, Express, and Socket.IO
              for secure real-time communication, offering a pleasant
              development experience.
            </p>

            {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button> */}
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Start Chat
            </button>

            <Meteors number={20} />
          </div>
        </div>
      </div>
    </>
  );
}

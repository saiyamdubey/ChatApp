"use client";

import Navbar from "@/components/navbar";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const { v4: uuidv4 } = require("uuid");

function Room() {
  const router = useRouter();
  const [room, setRoom] = useState("");

  const makeuuid = () => {
    const uuid = uuidv4();
    setRoom(uuid);
  };

  useEffect(() => {
    makeuuid();
  }, []);

  const handleSubmit = (e: any, room: string) => {
    e.preventDefault();
    router.push(`/chatapp/${room}`);
  };

  return (
    <>
      <Navbar />
      <div className="flex  justify-center items-center gap-40 rounded-3xl bg-transparent w-dvw h-dvh flex-row">
        <div className="relative max-w-sm w-[50rem] sm:w-[80%] h-[15rem] md:h-2/2  ">
          <div className="absolute inset-0 h-full w-[30rem] bg-gradient-to-r from-transparent to-blue-500 transform scale-[0.90] rounded-full blur-3xl flex justify-center items-center" />
          <div className="relative h-full w-[30rem]  border border-white px-8 sm:py-6 overflow-hidden rounded-2xl shadow-2xl flex justify-center items-center">
            <div className="join flex flex-col justify-center items-center text-center">
              <h1 className="font-extrabold font-mono text-4xl sm:text-xl mb-4 text-center text-violet-100">
                Join Room
              </h1>
              <input
                className="sm:hidden text-white text-lg bg-transparent border-2 mb-4 border-white focus:outline-none sm:h-10 placeholder-gray-400 py-2 px-4 w-full sm:rounded-md sm:w-20 sm:pl-2 sm:p-1 rounded-full"
                type="text"
                onChange={(e) => setRoom(e.target.value)}
                placeholder="Write Room Name ..."
              />
              <button
                onClick={() => {
                  handleSubmit(event, room);
                }}
                className="text-white p-4 text-lg sm:text-[18px] font-extrabold bg-blue-600 border-2 border-blue-600 hover:bg-black hover:blue-600 hover:text-white rounded-full py-2 sm:rounded-md sm:w-20 sm:h-10 sm:text-white mt-4"
                type="submit"
              >
                Join Room
              </button>
            </div>
            <Meteors number={12} />
          </div>
        </div>
        <div className="relative max-w-sm w-[50rem] sm:w-[80%] h-[15rem] md:h-2/2 ">
          <div className="absolute inset-0 h-full w-[30rem] bg-gradient-to-r from-pink-800 to-transparent-500 transform scale-[0.90] rounded-full blur-3xl flex justify-center items-center" />
          <div className="relative h-full w-[30rem]  border-2 border-white px-8 sm:py-6 overflow-hidden rounded-2xl shadow-2xl flex justify-center items-center">
            <div className="join flex flex-col justify-center items-center text-center">
              <h1 className="font-extrabold font-mono text-4xl sm:text-xl mb-4 text-center text-violet-100">
                Create Room
              </h1>
              <button
                className="text-blue-700 p-4 text-lg sm:text-[18px] font-extrabold bg-white border-4 border-blue-600 hover:bg-black hover:blue-600 hover:text-white rounded-full py-2 sm:rounded-md sm:w-20 sm:h-10 sm:text-white mt-4"
                type="submit"
                onClick={() => {
                  handleSubmit(event, room);
                }}
              >
                Create Unique Room
              </button>
            </div>
            <Meteors number={15} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;

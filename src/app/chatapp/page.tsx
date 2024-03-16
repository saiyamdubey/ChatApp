"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const { v4: uuidv4 } = require("uuid");

function Room() {
  const router = useRouter();
  // const [name, setName] = useState("");
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
    <div className="mt-[10rem] m-auto w-[50%] h-[30%] p-10 rounded-3xl bg-transparent border-2 flex justify-center items-center ">
      <form
        className="flex flex-col space-y-4 sm:flex-row sm:mb-4 sm:gap-5 m-10 "
        onSubmit={() => {
          handleSubmit(event, room);
        }}
      >
        <h1 className="text-center">Create Room</h1>

        <button
          className="text-black text-lg sm:text-[18px] font-extrabold bg-blue-600 border-2 border-blue-600 hover:bg-black hover:blue-600 hover:text-white rounded-full py-2 sm:rounded-md sm:w-20 sm:h-10 sm:text-white"
          type="submit"
        >
          Create Unique Room
        </button>
      </form>

      <form
        className="flex flex-col space-y-4 sm:flex-row sm:mb-4 sm:gap-5 m-10"
        onSubmit={() => {
          handleSubmit(event, room);
        }}
      >
        <h1 className="text-center">Join Room</h1>
        <input
          className="sm:hidden text-white text-lg bg-transparent border border-white focus:outline-none sm:h-10  placeholder-gray-400 py-2 px-4 sm:rounded-md sm:w-20 sm:pl-2 sm:p-1 rounded-full"
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="Write Room Name"
        />

        <button
          className="text-black text-lg sm:text-[18px] font-extrabold bg-blue-600 border-2 border-blue-600 hover:bg-black hover:blue-600 hover:text-white rounded-full py-2 sm:rounded-md sm:w-20 sm:h-10 sm:text-white"
          type="submit"
        >
          Join Room
        </button>
      </form>
    </div>
  );
}

export default Room;

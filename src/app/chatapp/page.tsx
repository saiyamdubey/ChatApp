"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://connectit.vercel.app/");

export default function Page() {
  const [messages, setMessages] = useState<string[]>([]);
  const [send, setSend] = useState<string>("");

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages((prevMessages: string[]) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (send.trim() !== "") {
      socket.emit("message", send);
      setSend("");
    }
  }

  return (
    <>
      <h1 className=" font-extrabold text-7xl text-center text-violet-400 ">
        Messages from Server:
      </h1>
      <div className="flex justify-center flex-col gap-9 items-center">
        <form onSubmit={handleSubmit}>
          <input
            className="text-white text-xl border-2 border-x-white bg-black placeholder:text-gray-400 w-[20rem] rounded-lg h-[5rem] p-4 mt-10 focus:outline-none"
            type="text"
            value={send}
            onChange={(e) => setSend(e.target.value)}
            placeholder="Type your message"
          />
          <button
            className="text-white text-xl border-y-rose-50 border-2 bg-black rounded-lg px-4 py-2 ml-2"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="">
          <ul className="text-xl font-mono text-pink-500">
            {messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

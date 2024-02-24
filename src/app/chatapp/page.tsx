"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={send}
            onChange={(e) => setSend(e.target.value)}
            placeholder="Type your message"
          />
          <button type="submit">Send</button>
        </form>
        <div>
          <h1>Messages from Server:</h1>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
